import React, { useState } from 'react';
import { Calendar, Users, Palette, DollarSign, Eye, Menu, LogOut, Plus, Edit2, Trash2, Lock, Globe, Home, ChevronDown, Settings, Bell } from 'lucide-react';

// Plataforma Rodaje Studio - Versión Perk+ Aesthetic
const PlataformaRodaje = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [currentRodaje, setCurrentRodaje] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNewRodajeForm, setShowNewRodajeForm] = useState(false);

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
        paleta: ['#1F2937', '#3B82F6', '#EC4899', '#8B5CF6'],
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
      planificacion: { dias: 10, locaciones: [], schedule: [] },
      casting: [],
      estilismo: { vestuario: [], maquillaje: [], accesorios: [] },
      tratamiento: { paleta: [], moodBoard: '', referencias: [] }
    }
  ]);

  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
    setCurrentRodaje(rodajes[0]);
  };

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

  if (!isLoggedIn) {
    return <PantallaLogin onLogin={handleLogin} />;
  }

  const cambiarRodaje = (rodaje) => {
    setCurrentRodaje(rodaje);
    setActiveTab('dashboard');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Estilo Perk+ */}
      {sidebarOpen && (
        <div className="w-72 bg-white border-r border-gray-200 overflow-y-auto">
          {/* Logo */}
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-black tracking-tight">rodaje<span className="text-blue-600">+</span></h1>
            <p className="text-xs text-gray-500 mt-1 font-medium">Gestión de producciones</p>
          </div>

          {/* Botón Nuevo Rodaje */}
          {userRole === 'admin' && (
            <button
              onClick={() => setShowNewRodajeForm(true)}
              className="w-5/6 mx-auto mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg"
            >
              <Plus size={18} />
              Nuevo rodaje
            </button>
          )}

          {/* Rodajes */}
          <div className="p-4">
            <p className="text-xs font-bold text-gray-400 mb-4 tracking-wide">RODAJES ({rodajes.length})</p>
            <div className="space-y-2">
              {rodajes.map(rodaje => (
                <button
                  key={rodaje.id}
                  onClick={() => cambiarRodaje(rodaje)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition font-medium text-sm ${
                    currentRodaje?.id === rodaje.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-semibold text-sm">{rodaje.nombre}</div>
                  <div className="text-xs text-gray-500 mt-1">{rodaje.cliente}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Sidebar */}
          <div className="p-4 border-t border-gray-100 mt-auto">
            <button
              onClick={() => setIsLoggedIn(false)}
              className="w-full flex items-center gap-2 text-gray-600 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-gray-50 transition font-medium text-sm"
            >
              <LogOut size={18} />
              Cerrar sesión
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Estilo Perk+ */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <Menu size={24} className="text-gray-700" />
            </button>
            <div>
              <h2 className="text-2xl font-black text-gray-900">{currentRodaje?.nombre}</h2>
              <p className="text-sm text-gray-500 mt-1">{currentRodaje?.cliente}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
              {userRole === 'admin' ? '🎬 Productora' : '👁️ Cliente'}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${
              currentRodaje?.estado === 'En producción'
                ? 'bg-orange-50 text-orange-700 border-orange-200'
                : 'bg-amber-50 text-amber-700 border-amber-200'
            }`}>
              {currentRodaje?.estado}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {currentRodaje && (
            <div className="p-8">
              {/* Navigation Tabs - Estilo Perk+ */}
              <div className="flex space-x-1 mb-10 border-b-2 border-gray-200">
                {getRodajeNavItems(userRole).map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-1 py-3 font-semibold text-sm flex items-center gap-2 transition border-b-2 ${
                      activeTab === item.id
                        ? 'text-gray-900 border-b-2 border-gray-900'
                        : 'text-gray-500 border-b-2 border-transparent hover:text-gray-700'
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
            </div>
          )}
        </div>
      </div>

      {/* Modal - Estilo Perk+ */}
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
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="bg-white rounded-3xl shadow-2xl p-12 w-full max-w-md border border-gray-200">
        <h1 className="text-4xl font-black text-gray-900 mb-2 text-center tracking-tight">
          rodaje<span className="text-blue-600">+</span>
        </h1>
        <p className="text-gray-600 text-center mb-10 font-medium">Gestión de producciones audiovisuales</p>

        <div className="space-y-3">
          <button
            onClick={() => onLogin('admin')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Lock size={20} />
            Acceso Productora
          </button>
          <button
            onClick={() => onLogin('client')}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 rounded-xl transition flex items-center justify-center gap-2"
          >
            <Globe size={20} />
            Acceso Cliente
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-10">
          Demo: Datos de sesión. Refresca para resetear.
        </p>
      </div>
    </div>
  );
};

const DashboardSection = ({ rodaje }) => {
  const progreso = Math.round((rodaje.gastado / rodaje.presupuesto) * 100) || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card Estado */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
        <p className="text-gray-600 text-sm font-medium mb-2">Estado</p>
        <p className="text-3xl font-black text-gray-900">{rodaje.estado}</p>
        <div className="mt-4 flex gap-2">
          <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#3B82F6'}}></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Card Duración */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
        <p className="text-gray-600 text-sm font-medium mb-2">Duración</p>
        <p className="text-3xl font-black text-gray-900">{rodaje.planificacion.dias || '—'}</p>
        <p className="text-xs text-gray-500 mt-3 font-medium">días de producción</p>
      </div>

      {/* Card Presupuesto */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
        <p className="text-gray-600 text-sm font-medium mb-2">Presupuesto</p>
        <p className="text-2xl font-black text-gray-900">${(rodaje.gastado / 1000).toFixed(0)}k</p>
        <p className="text-xs text-gray-500 mt-3 font-medium">de ${(rodaje.presupuesto / 1000).toFixed(0)}k</p>
        <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${progreso > 100 ? 'bg-red-500' : 'bg-blue-600'}`}
            style={{ width: `${Math.min(progreso, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Card Director */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition">
        <p className="text-gray-600 text-sm font-medium mb-2">Director</p>
        <p className="text-xl font-black text-gray-900">{rodaje.director}</p>
        <p className="text-xs text-gray-500 mt-3 font-medium">{rodaje.locacion}</p>
      </div>
    </div>
  );
};

const PlanificacionSection = ({ rodaje }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <h3 className="text-xl font-black mb-6 text-gray-900">Timeline</h3>
        <div className="space-y-4">
          {rodaje.planificacion.schedule.length > 0 ? (
            rodaje.planificacion.schedule.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-700 rounded-xl w-12 h-12 flex items-center justify-center font-black">
                    {item.dia}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-semibold text-gray-900">{item.actividad}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-sm">Sin actividades programadas</p>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <h3 className="text-xl font-black mb-6 text-gray-900">Locaciones</h3>
        <div className="space-y-3">
          {rodaje.planificacion.locaciones.length > 0 ? (
            rodaje.planificacion.locaciones.map((loc, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-900 font-medium">{loc}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-sm">Sin locaciones añadidas</p>
          )}
        </div>
      </div>
    </div>
  );
};

const CastingSection = ({ rodaje, userRole }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      <h3 className="text-xl font-black mb-8 text-gray-900">Elenco</h3>

      {rodaje.casting.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rodaje.casting.map((actor, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mb-4"></div>
              <h4 className="font-black text-gray-900 text-lg">{actor.nombre}</h4>
              <p className="text-sm text-gray-600 mt-2">Edad: {actor.edad}</p>
              <p className="text-sm text-gray-600">País: {actor.nacionalidad}</p>
              <div className="mt-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                  actor.estado === 'Confirmado' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
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
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <h3 className="text-lg font-black mb-6 text-gray-900">👗 Vestuario</h3>
        <div className="space-y-3">
          {rodaje.estilismo.vestuario.length > 0 ? (
            rodaje.estilismo.vestuario.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-900 font-medium text-sm">{item}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-sm">Sin elementos</p>
          )}
        </div>
      </div>

      {/* Maquillaje */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <h3 className="text-lg font-black mb-6 text-gray-900">💄 Maquillaje</h3>
        <div className="space-y-3">
          {rodaje.estilismo.maquillaje.length > 0 ? (
            rodaje.estilismo.maquillaje.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-900 font-medium text-sm">{item}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-sm">Sin elementos</p>
          )}
        </div>
      </div>

      {/* Accesorios */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <h3 className="text-lg font-black mb-6 text-gray-900">✨ Accesorios</h3>
        <div className="space-y-3">
          {rodaje.estilismo.accesorios.length > 0 ? (
            rodaje.estilismo.accesorios.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-900 font-medium text-sm">{item}</span>
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
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <h3 className="text-xl font-black mb-8 text-gray-900">Desglose</h3>

        <div className="space-y-6">
          {presupuestoItems.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-gray-900">{item.categoria}</span>
                <span className="text-sm text-gray-600 font-semibold">${item.monto.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full bg-blue-600"
                  style={{ width: `${item.porcentaje}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t-2 border-gray-200">
          <div className="flex justify-between mb-4">
            <span className="font-black text-gray-900">Total Presupuestado</span>
            <span className="font-black text-blue-600 text-lg">${rodaje.presupuesto.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-black text-gray-900">Total Gastado</span>
            <span className="font-black text-orange-600 text-lg">${rodaje.gastado.toLocaleString()}</span>
          </div>
          <div className="flex justify-between pt-4 border-t-2 border-gray-200">
            <span className="font-black text-gray-900">Disponible</span>
            <span className={`font-black text-lg ${rodaje.presupuesto - rodaje.gastado >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
              ${(rodaje.presupuesto - rodaje.gastado).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <h3 className="text-xl font-black mb-8 text-gray-900">Distribución</h3>

        <div className="space-y-8">
          {presupuestoItems.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="relative inline-flex items-center justify-center mb-3">
                <div className="w-20 h-20 rounded-full flex items-center justify-center font-black text-sm text-gray-900"
                  style={{
                    background: `conic-gradient(#3B82F6 0deg ${item.porcentaje * 3.6}deg, #E5E7EB ${item.porcentaje * 3.6}deg)`
                  }}>
                  {item.porcentaje}%
                </div>
              </div>
              <p className="text-sm font-bold text-gray-900">{item.categoria}</p>
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
      {/* Paleta */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <h3 className="text-xl font-black mb-8 text-gray-900">Paleta de Colores</h3>

        {rodaje.tratamiento.paleta.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {rodaje.tratamiento.paleta.map((color, idx) => (
              <div key={idx} className="space-y-3">
                <div
                  className="w-full h-32 rounded-2xl shadow-md border-2 border-gray-200"
                  style={{ backgroundColor: color }}
                ></div>
                <p className="text-center font-mono text-xs text-gray-600 font-bold">{color}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">Sin paleta definida</p>
        )}
      </div>

      {/* Tratamiento Visual */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <h3 className="text-xl font-black mb-8 text-gray-900">Tratamiento Visual</h3>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-black text-gray-600 mb-3">MOOD BOARD</p>
            <p className="text-gray-900 font-semibold leading-relaxed">{rodaje.tratamiento.moodBoard || 'Sin definir'}</p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm font-black text-gray-600 mb-3">REFERENCIAS</p>
            {rodaje.tratamiento.referencias.length > 0 ? (
              <ul className="space-y-3">
                {rodaje.tratamiento.referencias.map((ref, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 font-black mt-1">→</span>
                    <span className="text-gray-900 font-medium">{ref}</span>
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
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-black mb-8 text-gray-900">Crear Nuevo Rodaje</h2>

        <input
          type="text"
          placeholder="Nombre del rodaje"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
        />

        <input
          type="text"
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-8 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
        />

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-900 hover:bg-gray-50 font-bold transition"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-bold transition shadow-md hover:shadow-lg"
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  );
};

const getRodajeNavItems = (userRole) => {
  const baseItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={18} /> },
    { id: 'casting', label: 'Casting', icon: <Users size={18} /> },
    { id: 'estilismo', label: 'Estilismo', icon: <Palette size={18} /> },
    { id: 'presupuesto', label: 'Presupuesto', icon: <DollarSign size={18} /> },
    { id: 'visualizacion', label: 'Visualización', icon: <Eye size={18} /> }
  ];

  if (userRole === 'admin') {
    baseItems.splice(1, 0, { id: 'planificacion', label: 'Planificación', icon: <Calendar size={18} /> });
  }

  return baseItems;
};

export default PlataformaRodaje;
