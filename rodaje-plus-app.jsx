import React, { useState } from 'react';
import {
  Menu, X, ChevronDown, Plus, Settings, LogOut, Eye, EyeOff,
  Calendar, Users, Palette, DollarSign, ImageIcon, BarChart3,
  Search, Filter, Download, Share2, Edit2, Trash2, ChevronRight,
  MapPin, Clock, User, Mail, Phone, Link as LinkIcon, Star,
  AlertCircle, CheckCircle, Clock3, Zap
} from 'lucide-react';

export default function RodajePlusApp() {
  const [currentUser, setCurrentUser] = useState('admin'); // 'admin' or 'client'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [activeProject, setActiveProject] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  // Sample data
  const [projects, setProjects] = useState([
    {
      id: 1,
      nombre: 'Campaña Nike 2026',
      cliente: 'Nike Inc.',
      director: 'Carlos Mendez',
      estado: 'activo',
      presupuesto: { total: 150000, gastado: 87500 },
      fechaInicio: '2026-04-20',
      fechaFin: '2026-05-10',
      cast: 5,
      crew: 25,
      dias: 12,
      planificacion: [
        {
          dia: 1,
          fecha: '2026-04-20',
          locacion: 'Estudio Central',
          escenas: [
            { numero: 1, set: 'Interior Estudio', actores: ['Ana García', 'Miguel López'], duracion: '2h', storyboard: 'SB-001' }
          ]
        }
      ]
    },
    {
      id: 2,
      nombre: 'Comercial Bebidas',
      cliente: 'Coca-Cola España',
      director: 'Elena Ruiz',
      estado: 'activo',
      presupuesto: { total: 85000, gastado: 42300 },
      fechaInicio: '2026-05-15',
      fechaFin: '2026-06-02',
      cast: 8,
      crew: 18,
      dias: 8
    },
    {
      id: 3,
      nombre: 'Video Corporativo',
      cliente: 'Telefónica',
      director: 'Juan Pérez',
      estado: 'cerrado',
      presupuesto: { total: 45000, gastado: 45000 },
      fechaInicio: '2026-02-01',
      fechaFin: '2026-02-28',
      cast: 3,
      crew: 12,
      dias: 5
    }
  ]);

  const [casting, setCasting] = useState([
    {
      id: 1,
      nombre: 'Ana García',
      tipo: 'Actriz',
      estado: 'confirmada',
      fotoPerfil: '👩‍🎬',
      edad: 28,
      nacionalidad: 'España',
      contacto: 'ana@email.com',
      telefono: '+34 666 777 888',
      imdb: 'nm1234567',
      portfolio: 'www.anagarciaactriz.com',
      instagram: '@anagarcia',
      escenasAsignadas: [1, 3, 5],
      notas: 'Disponible lunes-viernes'
    },
    {
      id: 2,
      nombre: 'Miguel López',
      tipo: 'Actor',
      estado: 'contratado',
      fotoPerfil: '👨‍🎬',
      edad: 35,
      nacionalidad: 'España',
      contacto: 'miguel@email.com',
      telefono: '+34 666 888 999',
      imdb: 'nm7654321',
      portfolio: 'www.miguellopez.com',
      instagram: '@miguellopezactor',
      escenasAsignadas: [1, 2, 4],
      notas: 'Fumador, necesita doble'
    }
  ]);

  const [estilismo, setEstilismo] = useState([
    {
      id: 1,
      escena: 1,
      personaje: 'Ana',
      vestuario: { items: ['Vestido rojo', 'Tacones negros', 'Bolso dorado'], proveedor: 'Fashion House', estado: 'confirmado' },
      maquillaje: { estilo: 'Smokey eyes', especificaciones: 'Tonos grises', estado: 'pendiente' },
      accesorios: { items: ['Collar de perlas', 'Anillo dorado'], proveedor: 'Bijouterie', estado: 'pendiente' },
      foto: '👗',
      tiempoEstimado: '45 min'
    }
  ]);

  const [equipo, setEquipo] = useState([
    {
      id: 1,
      nombre: 'Juan Martínez',
      cargo: 'Director de Fotografía',
      departamento: 'Cámara',
      contacto: 'juan@email.com',
      telefono: '+34 666 111 222',
      tarifa: 2500,
      experiencia: '15 años',
      proyectosAnteriores: 45,
      estado: 'confirmado'
    },
    {
      id: 2,
      nombre: 'María González',
      cargo: 'Directora de Arte',
      departamento: 'Dirección',
      contacto: 'maria@email.com',
      telefono: '+34 666 222 333',
      tarifa: 2000,
      experiencia: '10 años',
      proyectosAnteriores: 32,
      estado: 'confirmado'
    }
  ]);

  const [presupuesto, setPresupuesto] = useState({
    departamentos: [
      { nombre: 'Producción', presupuesto: 25000, gastado: 12500 },
      { nombre: 'Cámara', presupuesto: 35000, gastado: 22000 },
      { nombre: 'Iluminación', presupuesto: 28000, gastado: 18500 },
      { nombre: 'Sonido', presupuesto: 15000, gastado: 8000 },
      { nombre: 'Arte', presupuesto: 22000, gastado: 16200 },
      { nombre: 'Casting', presupuesto: 20000, gastado: 10300 }
    ]
  });

  const project = activeProject ? projects.find(p => p.id === activeProject) : null;

  // Render functions
  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        {currentUser === 'admin' && (
          <button className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition flex items-center gap-2">
            <Plus size={18} />
            Nuevo Proyecto
          </button>
        )}
      </div>

      {/* Filtros de estado */}
      <div className="flex gap-2">
        {['todos', 'activos', 'cerrados', 'archivo'].map(estado => (
          <button
            key={estado}
            className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition capitalize text-sm"
          >
            {estado}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(proj => (
          <div
            key={proj.id}
            onClick={() => {
              setActiveProject(proj.id);
              setActiveSection('proyecto');
            }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/30 transition cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-3xl">{proj.nombre.split(' ')[0] === 'Campaña' ? '📱' : proj.nombre.split(' ')[0] === 'Comercial' ? '🎬' : '🎥'}</div>
              <span className={`px-2 py-1 border rounded text-xs ${
                proj.estado === 'activo' ? 'border-green-500/50 text-green-300' : 'border-gray-500/50 text-gray-300'
              }`}>
                {proj.estado}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">{proj.nombre}</h3>

            <div className="space-y-2 text-sm text-gray-300 mb-4">
              <div className="flex items-center gap-2">
                <User size={14} />
                {proj.cliente}
              </div>
              <div className="flex items-center gap-2">
                <User size={14} />
                Dir: {proj.director}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                {proj.dias} días
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                <div>
                  <span className="text-gray-400">Cast</span>
                  <div className="text-lg font-semibold text-white">{proj.cast}</div>
                </div>
                <div>
                  <span className="text-gray-400">Crew</span>
                  <div className="text-lg font-semibold text-white">{proj.crew}</div>
                </div>
                <div>
                  <span className="text-gray-400">Presupuesto</span>
                  <div className="text-sm font-semibold text-white">${(proj.presupuesto.total / 1000).toFixed(0)}K</div>
                </div>
              </div>

              <div className="bg-white/5 rounded h-1.5 overflow-hidden">
                <div
                  className="bg-white h-full transition-all"
                  style={{ width: `${(proj.presupuesto.gastado / proj.presupuesto.total) * 100}%` }}
                />
              </div>
              <div className="text-xs text-gray-400 mt-1">
                ${proj.presupuesto.gastado.toLocaleString()} / ${proj.presupuesto.total.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProyecto = () => {
    if (!project) return null;

    return (
      <div className="space-y-8">
        <button
          onClick={() => setActiveSection('dashboard')}
          className="text-gray-400 hover:text-white transition flex items-center gap-1 mb-4"
        >
          ← Volver al Dashboard
        </button>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{project.nombre}</h1>
              <p className="text-gray-400">{project.cliente} • Director: {project.director}</p>
            </div>
            {currentUser === 'admin' && (
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/10 rounded-lg transition">
                  <Edit2 size={18} className="text-white" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition">
                  <Share2 size={18} className="text-white" />
                </button>
              </div>
            )}
          </div>

          {/* Pestañas de módulos */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-8">
            {[
              { id: 'plan', label: '📅 Plan', icon: Calendar },
              { id: 'cast', label: '👥 Cast', icon: Users },
              { id: 'style', label: '👗 Estilismo', icon: Palette },
              { id: 'team', label: '👨‍💼 Equipo', icon: Users },
              { id: 'budget', label: '💰 Presupuesto', icon: DollarSign },
              { id: 'visual', label: '🎨 Visual', icon: ImageIcon }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedDay(tab.id)}
                className={`px-3 py-2 rounded-lg border transition text-sm font-medium ${
                  selectedDay === tab.id
                    ? 'bg-white/10 border-white/30 text-white'
                    : 'border-white/10 text-gray-400 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenido de módulos */}
          {selectedDay === 'plan' && renderPlanificacion()}
          {selectedDay === 'cast' && renderCasting()}
          {selectedDay === 'style' && renderEstilismo()}
          {selectedDay === 'team' && renderEquipo()}
          {selectedDay === 'budget' && renderPresupuesto()}
          {selectedDay === 'visual' && <div className="text-white text-center py-12">Módulo Visual - En desarrollo</div>}
        </div>
      </div>
    );
  };

  const renderPlanificacion = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-4">Plan de Rodaje</h3>
      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <Calendar size={20} className="text-gray-400" />
          <div>
            <p className="text-white font-semibold">{project.fechaInicio} a {project.fechaFin}</p>
            <p className="text-gray-400 text-sm">{project.dias} días de rodaje</p>
          </div>
        </div>
        {project.planificacion && project.planificacion.map((dia, idx) => (
          <div key={idx} className="border-t border-white/10 pt-4 mt-4 first:border-t-0 first:pt-0 first:mt-0">
            <div className="font-semibold text-white mb-2">Día {dia.dia} - {dia.fecha}</div>
            <div className="text-sm text-gray-400 mb-2">{dia.locacion}</div>
            {dia.escenas.map(escena => (
              <div key={escena.numero} className="bg-white/5 rounded p-3 mt-2">
                <div className="font-medium text-white">Escena {escena.numero} - {escena.set}</div>
                <div className="text-sm text-gray-400 mt-1">Cast: {escena.actores.join(', ')}</div>
                <div className="text-sm text-gray-400">Duración: {escena.duracion}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  const renderCasting = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Casting</h3>
        {currentUser === 'admin' && (
          <button className="p-2 hover:bg-white/10 rounded-lg transition">
            <Plus size={18} className="text-white" />
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {casting.map(actor => (
          <div key={actor.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{actor.fotoPerfil}</div>
              <div className="flex-1">
                <h4 className="text-white font-semibold">{actor.nombre}</h4>
                <p className="text-gray-400 text-sm">{actor.tipo}</p>
                <span className={`inline-block mt-2 px-2 py-1 border rounded text-xs ${
                  actor.estado === 'confirmada' ? 'border-green-500/50 text-green-300' : 'border-yellow-500/50 text-yellow-300'
                }`}>
                  {actor.estado}
                </span>
              </div>
            </div>

            <div className="space-y-2 text-sm border-t border-white/10 pt-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={14} />
                <a href={`mailto:${actor.contacto}`} className="hover:text-white transition">{actor.contacto}</a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={14} />
                {actor.telefono}
              </div>
              <div className="flex gap-2 mt-3">
                {actor.imdb && (
                  <a href={`#`} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-gray-300 rounded hover:border-white/30 transition">
                    IMDb
                  </a>
                )}
                {actor.portfolio && (
                  <a href={`#`} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-gray-300 rounded hover:border-white/30 transition">
                    Portfolio
                  </a>
                )}
                {actor.instagram && (
                  <a href={`#`} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-gray-300 rounded hover:border-white/30 transition">
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEstilismo = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Estilismo</h3>
        {currentUser === 'admin' && (
          <button className="p-2 hover:bg-white/10 rounded-lg transition">
            <Plus size={18} className="text-white" />
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {estilismo.map(style => (
          <div key={style.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{style.foto}</div>
              <div className="flex-1">
                <h4 className="text-white font-semibold">Escena {style.escena}</h4>
                <p className="text-gray-400 text-sm">{style.personaje}</p>
              </div>
            </div>

            <div className="space-y-3 text-sm border-t border-white/10 pt-4">
              <div>
                <p className="text-gray-400 mb-1">Vestuario</p>
                <div className="flex flex-wrap gap-2">
                  {style.vestuario.items.map((item, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-white rounded text-xs">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-1">{style.vestuario.proveedor}</p>
              </div>

              <div>
                <p className="text-gray-400 mb-1">Maquillaje</p>
                <p className="text-white text-xs">{style.maquillaje.estilo}</p>
                <p className="text-gray-500 text-xs">{style.maquillaje.especificaciones}</p>
              </div>

              <div>
                <p className="text-gray-400 mb-1">Accesorios</p>
                <div className="flex flex-wrap gap-2">
                  {style.accesorios.items.map((item, i) => (
                    <span key={i} className="text-xs text-gray-300">• {item}</span>
                  ))}
                </div>
              </div>

              <p className="text-gray-500 text-xs">Tiempo: {style.tiempoEstimado}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEquipo = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Equipo</h3>
        {currentUser === 'admin' && (
          <button className="p-2 hover:bg-white/10 rounded-lg transition">
            <Plus size={18} className="text-white" />
          </button>
        )}
      </div>
      <div className="space-y-3">
        {equipo.map(member => (
          <div key={member.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-white font-semibold">{member.nombre}</h4>
                <p className="text-gray-400 text-sm">{member.cargo}</p>
                <p className="text-gray-500 text-xs">{member.departamento}</p>
              </div>
              <span className="px-2 py-1 border border-green-500/50 text-green-300 text-xs rounded">
                {member.estado}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/10 pt-3">
              <div>
                <p className="text-gray-400 text-xs mb-1">Contacto</p>
                <p className="text-white text-sm">{member.contacto}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Teléfono</p>
                <p className="text-white text-sm">{member.telefono}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Tarifa</p>
                <p className="text-white font-semibold">${member.tarifa.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Experiencia</p>
                <p className="text-white text-sm">{member.experiencia}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPresupuesto = () => {
    const total = presupuesto.departamentos.reduce((sum, d) => sum + d.presupuesto, 0);
    const gastado = presupuesto.departamentos.reduce((sum, d) => sum + d.gastado, 0);
    const porcentaje = (gastado / total) * 100;

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Presupuesto General</h3>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total</p>
                <p className="text-2xl font-bold text-white">${total.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Gastado</p>
                <p className="text-2xl font-bold text-white">${gastado.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Disponible</p>
                <p className="text-2xl font-bold text-white">${(total - gastado).toLocaleString()}</p>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-2">Utilización: {porcentaje.toFixed(1)}%</p>
              <div className="bg-white/5 rounded h-2 overflow-hidden">
                <div
                  className="bg-white h-full transition-all"
                  style={{ width: `${porcentaje}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Por Departamento</h3>
          <div className="space-y-3">
            {presupuesto.departamentos.map((dept, idx) => {
              const deptPorcentaje = (dept.gastado / dept.presupuesto) * 100;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-medium">{dept.nombre}</h4>
                    <span className="text-gray-400 text-sm">{deptPorcentaje.toFixed(0)}%</span>
                  </div>
                  <div className="bg-white/5 rounded h-1.5 overflow-hidden mb-2">
                    <div
                      className="bg-white h-full transition-all"
                      style={{ width: `${deptPorcentaje}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>${dept.gastado.toLocaleString()}</span>
                    <span>${dept.presupuesto.toLocaleString()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="bg-black border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => {
                setActiveSection('dashboard');
                setActiveProject(null);
              }}
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <div className="w-8 h-8 border border-white rounded flex items-center justify-center font-bold text-sm">
                RP
              </div>
              <span className="font-semibold hidden sm:inline">Rodaje+</span>
            </button>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => {
                  setActiveSection('dashboard');
                  setActiveProject(null);
                }}
                className={`text-sm transition ${activeSection === 'dashboard' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Dashboard
              </button>
            </div>

            {/* User menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentUser(currentUser === 'admin' ? 'client' : 'admin')}
                className="px-3 py-1.5 text-xs border border-white/20 text-gray-300 rounded hover:border-white/40 transition"
              >
                {currentUser === 'admin' ? '👨‍💼 Admin' : '👁️ Cliente'}
              </button>

              <button className="hidden sm:flex p-2 hover:bg-white/10 rounded-lg transition">
                <Settings size={18} />
              </button>

              <button className="p-2 hover:bg-white/10 rounded-lg transition">
                <LogOut size={18} />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeSection === 'dashboard' && renderDashboard()}
        {activeSection === 'proyecto' && renderProyecto()}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Precios</a></li>
                <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Términos</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Redes</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2026 Rodaje+ Studio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}