import React, { useState } from 'react';
import { Calendar, Users, Palette, DollarSign, Eye, Menu, LogOut, Plus, Edit2, Trash2, Lock, Globe } from 'lucide-react';

// Aplicación Principal de Plataforma de Rodajes
const PlataformaRodaje = () => {
  // Estados principales
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'admin' o 'client'
  const [currentRodaje, setCurrentRodaje] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNewRodajeForm, setShowNewRodajeForm] = useState(false);

  // Base de datos simulada
  const [rodajes, setRodajes] = useState([
    {
      id: 1,
      nombre: 'Campaña Nike 2026',
      cliente: 'Nike Inc.',
      estado: 'En producción',
      fechaInicio: '2026-04-20',
      fechaFin: '2026-05-15',
      locacion: 'Los Ángeles, CA',
      director: 'María García',
      presupuesto: 150000,
      gastado: 95000,
      planificacion: {
        dias: 15,
        locaciones: ['Studio Downtown LA', 'Playa Malibu', 'Almacén Industrial'],
        schedule: [
          { dia: 1, actividad: 'Pre-producción y setup' },
          { dia: 2, actividad: 'Rodaje escenas interiores' },
          { dia: 3, actividad: 'Rodaje en locación exterior' }
        ]
      },
      casting: [
        { nombre: 'Actor Principal', edad: '25-35', nacionalidad: 'Latinoamericano', estado: 'Confirmado' },
        { nombre: 'Actriz Secundaria', edad: '20-30', nacionalidad: 'Cualquiera', estado: 'En audición' }
      ],
      estilismo: {
        vestuario: ['Atuendo deportivo', 'Ropa casual', 'Traje formal'],
        maquillaje: ['Natural', 'Deportivo', 'Noche'],
        accesorios: ['Zapatillas Nike', 'Reloj deportivo', 'Gafas de sol']
      },
      tratamiento: {
        paleta: ['#FF6B35', '#004E89', '#F7B801', '#FFFFFF'],
        moodBoard: 'Energético, dinámico, urbano',
        referencias: ['Cinematografía deportiva moderna', 'Publicidad Nike clásica']
      }
    },
    {
      id: 2,
      nombre: 'Comercial de Bebidas',
      cliente: 'Coca-Cola LATAM',
      estado: 'Planeación',
      fechaInicio: '2026-06-01',
      fechaFin: '2026-06-10',
      locacion: 'Miami, FL',
      director: 'Carlos López',
      presupuesto: 200000,
      gastado: 15000,
      planificacion: {
        dias: 10,
        locaciones: ['Beach Club Miami', 'Downtown Miami'],
        schedule: []
      },
      casting: [],
      estilismo: { vestuario: [], maquillaje: [], accesorios: [] },
      tratamiento: { paleta: [], moodBoard: '', referencias: [] }
    }
  ]);

  // Login
  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
    setCurrentRodaje(rodajes[0]);
  };

  // Crear nuevo rodaje
  const handleCreateRodaje = (nombre, cliente) => {
    const newRodaje = {
      id: rodajes.length + 1,
      nombre,
      cliente,
      estado: 'Planeación',
      fechaInicio: new Date().toISOString().split('T')[0],
      fechaFin: new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
      locacion: 'Por definir',
      director: 'Por asignar',
      presupuesto: 0,
      gastado: 0,
      planificacion: { dias: 0, locaciones: [], schedule: [] },
      casting: [],
      estilismo: { vestuario: [], maquillaje: [], accesorios: [] },
      tratamiento: { paleta: [], moodBoard: '', referencias: [] }
    };
    setRodajes([...rodajes, newRodaje]);
    setShowNewRodajeForm(false);
  };

  // No login
  if (!isLoggedIn) {
    return <PantallaLogin onLogin={handleLogin} />;
  }

  // Cambiar rodaje
  const cambiarRodaje = (rodaje) => {
    setCurrentRodaje(rodaje);
    setActiveTab('dashboard');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        rodajes={rodajes}
        currentRodaje={currentRodaje}
        cambiarRodaje={cambiarRodaje}
        userRole={userRole}
        sidebarOpen={sidebarOpen}
        onNewRodaje={() => setShowNewRodajeForm(true)}
        onLogout={() => setIsLoggedIn(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          currentRodaje={currentRodaje}
          userRole={userRole}
          sidebarOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Contenido */}
        <div className="flex-1 overflow-auto p-8">
          {currentRodaje && (
            <>
              {/* Navigation Tabs */}
              <div className="flex space-x-1 mb-8 border-b border-gray-200 flex-wrap">
                {getRodajeNavItems(userRole).map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-4 py-3 font-medium text-sm flex items-center gap-2 ${
                      activeTab === item.id
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Content Sections */}
              {activeTab === 'dashboard' && <DashboardSection rodaje={currentRodaje} />}
              {activeTab === 'planificacion' && userRole === 'admin' && <PlanificacionSection rodaje={currentRodaje} />}
              {activeTab === 'casting' && <CastingSection rodaje={currentRodaje} userRole={userRole} />}
              {activeTab === 'estilismo' && <EstilismoSection rodaje={currentRodaje} userRole={userRole} />}
              {activeTab === 'presupuesto' && <PresupuestoSection rodaje={currentRodaje} userRole={userRole} />}
              {activeTab === 'visualizacion' && <VisualizacionSection rodaje={currentRodaje} />}
            </>
          )}
        </div>
      </div>

      {/* Modal para nuevo rodaje */}
      {showNewRodajeForm && (
        <ModalNuevoRodaje
          onClose={() => setShowNewRodajeForm(false)}
          onCreate={handleCreateRodaje}
        />
      )}
    </div>
  );
};

// ===== COMPONENTES =====

const PantallaLogin = ({ onLogin }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-600 to-blue-900">
      <div className="bg-white rounded-2xl shadow-2xl p-12 w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Rodaje Studio</h1>
        <p className="text-gray-600 text-center mb-8">Plataforma de gestión de rodajes y producciones</p>

        <div className="space-y-4">
          <button
            onClick={() => onLogin('admin')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
          >
            <Lock size={20} />
            Acceso Productora/Agencia
          </button>
          <button
            onClick={() => onLogin('client')}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
          >
            <Globe size={20} />
            Acceso Cliente
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-8">
          Demo: Usa cualquier credencial. Los datos se guardan en sesión.
        </p>
      </div>
    </div>
  );
};

const Header = ({ currentRodaje, userRole, sidebarOpen, toggleSidebar }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={24} />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{currentRodaje?.nombre}</h2>
          <p className="text-sm text-gray-600">Cliente: {currentRodaje?.cliente}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          {userRole === 'admin' ? '👤 Productora' : '👁️ Cliente'}
        </span>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          currentRodaje?.estado === 'En producción'
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {currentRodaje?.estado}
        </span>
      </div>
    </div>
  );
};

const Sidebar = ({ rodajes, currentRodaje, cambiarRodaje, userRole, sidebarOpen, onNewRodaje, onLogout }) => {
  if (!sidebarOpen) return null;

  return (
    <div className="w-64 bg-gray-900 text-white overflow-y-auto">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">🎬 Rodaje Studio</h1>
        <p className="text-xs text-gray-400 mt-1">Gestión de producciones</p>
      </div>

      {userRole === 'admin' && (
        <button
          onClick={onNewRodaje}
          className="w-5/6 mx-auto my-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <Plus size={18} />
          Nuevo Rodaje
        </button>
      )}

      <div className="p-4">
        <p className="text-xs font-bold text-gray-400 mb-3">MIS RODAJES ({rodajes.length})</p>
        <div className="space-y-2">
          {rodajes.map(rodaje => (
            <button
              key={rodaje.id}
              onClick={() => cambiarRodaje(rodaje)}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                currentRodaje?.id === rodaje.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <div className="font-medium text-sm">{rodaje.nombre}</div>
              <div className="text-xs opacity-75">{rodaje.cliente}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-800 mt-auto">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2 text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
        >
          <LogOut size={18} />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

const DashboardSection = ({ rodaje }) => {
  const progreso = Math.round((rodaje.gastado / rodaje.presupuesto) * 100) || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Tarjeta de Estado */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Estado del Rodaje</p>
            <p className="text-2xl font-bold text-gray-900">{rodaje.estado}</p>
          </div>
          <div className="text-3xl">🎬</div>
        </div>
      </div>

      {/* Tarjeta de Fechas */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Duración</p>
            <p className="text-2xl font-bold text-gray-900">{rodaje.planificacion.dias || '—'} días</p>
            <p className="text-xs text-gray-500 mt-2">{rodaje.fechaInicio} a {rodaje.fechaFin}</p>
          </div>
          <Calendar size={32} className="text-blue-500" />
        </div>
      </div>

      {/* Tarjeta de Presupuesto */}
      <div className="bg-white rounded-lg shadow p-6">
        <div>
          <p className="text-gray-600 text-sm">Presupuesto</p>
          <p className="text-2xl font-bold text-gray-900">${rodaje.gastado.toLocaleString()} / ${rodaje.presupuesto.toLocaleString()}</p>
          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${progreso > 100 ? 'bg-red-500' : 'bg-green-500'}`}
              style={{ width: `${Math.min(progreso, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">{progreso}% utilizado</p>
        </div>
      </div>

      {/* Tarjeta de Equipo */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Director</p>
            <p className="text-2xl font-bold text-gray-900">{rodaje.director}</p>
            <p className="text-xs text-gray-500 mt-2">{rodaje.locacion}</p>
          </div>
          <Users size={32} className="text-purple-500" />
        </div>
      </div>
    </div>
  );
};

const PlanificacionSection = ({ rodaje }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Calendar size={24} />
          Timeline de Rodaje
        </h3>
        <div className="space-y-4">
          {rodaje.planificacion.schedule.length > 0 ? (
            rodaje.planificacion.schedule.map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-gray-200">
                <div className="text-center min-w-fit">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {item.dia}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.actividad}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">Sin actividades programadas</p>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4">Locaciones</h3>
        <div className="space-y-3">
          {rodaje.planificacion.locaciones.length > 0 ? (
            rodaje.planificacion.locaciones.map((loc, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-900">{loc}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">Sin locaciones añadidas</p>
          )}
        </div>
      </div>
    </div>
  );
};

const CastingSection = ({ rodaje, userRole }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Users size={24} />
        Elenco
      </h3>

      {rodaje.casting.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rodaje.casting.map((actor, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg mb-4"></div>
              <h4 className="font-bold text-gray-900">{actor.nombre}</h4>
              <p className="text-sm text-gray-600">Edad: {actor.edad}</p>
              <p className="text-sm text-gray-600">Nacionalidad: {actor.nacionalidad}</p>
              <div className="mt-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  actor.estado === 'Confirmado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {actor.estado}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">Sin casting asignado</p>
      )}
    </div>
  );
};

const EstilismoSection = ({ rodaje, userRole }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Vestuario */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-4">👗 Vestuario</h3>
        <div className="space-y-2">
          {rodaje.estilismo.vestuario.length > 0 ? (
            rodaje.estilismo.vestuario.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-900">{item}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-sm">Sin elementos</p>
          )}
        </div>
      </div>

      {/* Maquillaje */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-4">💄 Maquillaje</h3>
        <div className="space-y-2">
          {rodaje.estilismo.maquillaje.length > 0 ? (
            rodaje.estilismo.maquillaje.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-900">{item}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-sm">Sin elementos</p>
          )}
        </div>
      </div>

      {/* Accesorios */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-4">✨ Accesorios</h3>
        <div className="space-y-2">
          {rodaje.estilismo.accesorios.length > 0 ? (
            rodaje.estilismo.accesorios.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-900">{item}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-sm">Sin elementos</p>
          )}
        </div>
      </div>
    </div>
  );
};

const PresupuestoSection = ({ rodaje, userRole }) => {
  const presupuestoItems = [
    { categoria: 'Talento', monto: 45000, porcentaje: 30 },
    { categoria: 'Equipo Técnico', monto: 35000, porcentaje: 23 },
    { categoria: 'Locaciones', monto: 25000, porcentaje: 17 },
    { categoria: 'Post-producción', monto: 20000, porcentaje: 13 },
    { categoria: 'Otros', monto: 25000, porcentaje: 17 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <DollarSign size={24} />
          Desglose de Presupuesto
        </h3>

        <div className="space-y-4">
          {presupuestoItems.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-900">{item.categoria}</span>
                <span className="text-sm text-gray-600">${item.monto.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-blue-500"
                  style={{ width: `${item.porcentaje}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{item.porcentaje}% del presupuesto</p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <span className="font-bold text-gray-900">Total Presupuestado</span>
            <span className="font-bold text-blue-600 text-lg">${rodaje.presupuesto.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-bold text-gray-900">Total Gastado</span>
            <span className="font-bold text-orange-600 text-lg">${rodaje.gastado.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mt-2 pt-2 border-t border-gray-200">
            <span className="font-bold text-gray-900">Diferencia</span>
            <span className={`font-bold text-lg ${rodaje.presupuesto - rodaje.gastado >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${(rodaje.presupuesto - rodaje.gastado).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-6">Visualización por Categoría</h3>

        <div className="space-y-6">
          {presupuestoItems.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-2">
                <div className="w-24 h-24 rounded-full" style={{
                  background: `conic-gradient(#3b82f6 0deg ${item.porcentaje * 3.6}deg, #e5e7eb ${item.porcentaje * 3.6}deg)`
                }}></div>
                <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="font-bold text-sm">{item.porcentaje}%</span>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-900">{item.categoria}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VisualizacionSection = ({ rodaje }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Paleta de Colores */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Palette size={24} />
          Paleta de Colores
        </h3>

        {rodaje.tratamiento.paleta.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {rodaje.tratamiento.paleta.map((color, idx) => (
              <div key={idx} className="space-y-2">
                <div
                  className="w-full h-32 rounded-lg shadow-md border-2 border-gray-200"
                  style={{ backgroundColor: color }}
                ></div>
                <p className="text-center font-mono text-sm text-gray-600">{color}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">Sin paleta definida</p>
        )}
      </div>

      {/* Tratamiento Visual */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-6">🎨 Tratamiento Visual</h3>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-bold text-gray-600 mb-2">Mood Board</p>
            <p className="text-gray-900">{rodaje.tratamiento.moodBoard || 'Sin definir'}</p>
          </div>

          <div>
            <p className="text-sm font-bold text-gray-600 mb-2">Referencias</p>
            {rodaje.tratamiento.referencias.length > 0 ? (
              <ul className="space-y-2">
                {rodaje.tratamiento.referencias.map((ref, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-900">{ref}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">Sin referencias</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalNuevoRodaje = ({ onClose, onCreate }) => {
  const [nombre, setNombre] = useState('');
  const [cliente, setCliente] = useState('');

  const handleSubmit = () => {
    if (nombre && cliente) {
      onCreate(nombre, cliente);
      setNombre('');
      setCliente('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Crear Nuevo Rodaje</h2>

        <input
          type="text"
          placeholder="Nombre del rodaje"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function para items de navegación según rol
const getRodajeNavItems = (userRole) => {
  const baseItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Eye size={18} /> },
    { id: 'casting', label: 'Casting', icon: <Users size={18} /> },
    { id: 'estilismo', label: 'Estilismo', icon: <Palette size={18} /> },
    { id: 'presupuesto', label: 'Presupuesto', icon: <DollarSign size={18} /> },
    { id: 'visualizacion', label: 'Visualización', icon: <Eye size={18} /> }
  ];

  if (userRole === 'admin') {
    // Insertar Planificación después de Dashboard
    baseItems.splice(1, 0, { id: 'planificacion', label: 'Planificación', icon: <Calendar size={18} /> });
  }

  return baseItems;
};

export default PlataformaRodaje;
