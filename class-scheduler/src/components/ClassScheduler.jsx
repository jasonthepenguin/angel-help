import React, { useState } from 'react';
import { Calendar, Clock, BookOpen } from 'lucide-react';

const ClassScheduler = () => {
  // Lista de clases extraídas de los calendarios (excluyendo las amarillas)
  const initialClasses = [
  // Febrero
  { id: 'b3-c6', name: 'Bloque III - Clase 6', details: 'Ley 39/2015 (arts. 112 a 115), Ley 30/1997 (arts. 25 a 29)', time: '10:00', type: 'online' }, // Lunes 17 Feb
  { id: 'b3-dp-c4', name: 'Bloque III DP - Clase 4', details: 'Derecho práctico', time: '17:00-21:00', type: 'streaming' }, // Viernes 21 Feb
  { id: 'b3-c7', name: 'Bloque III - Clase 7', details: 'Ley 40/2015 (arts. 1 a 24)', time: '10:00', type: 'online' }, // Lunes 24 Feb

  // Marzo
  { id: 'b3-c8', name: 'Bloque III - Clase 8', details: 'Responsabilidad Patrimonial', time: '10:00', type: 'online' }, // Lunes 3 Mar
  { id: 'b3-c9', name: 'Bloque III - Clase 9', details: 'Potestad Sancionadora', time: '10:00', type: 'online' }, // Lunes 10 Mar
  { id: 'b3-dp-c6', name: 'Bloque III DP - Clase 6', details: 'Derecho práctico', time: '17:00-21:00', type: 'streaming' }, // Viernes 14 Mar
  { id: 'b3-c10', name: 'Bloque III - Clase 10', details: 'Contencioso-administrativo', time: '10:00', type: 'online' }, // Lunes 17 Mar
  { id: 'b3-dp-c7', name: 'Bloque III DP - Clase 7', details: 'Derecho práctico', time: '17:00-21:00', type: 'streaming' }, // Viernes 21 Mar
  { id: 'b3-c11', name: 'Bloque III - Clase 11', details: 'Ley 40/2015 (Convenios, SPI y Relaciones interterr.)', time: '10:00', type: 'online' }, // Lunes 24 Mar
  { id: 'b3-dp-c8', name: 'Bloque III DP - Clase 8', details: 'Derecho práctico', time: '17:00-21:00', type: 'streaming' }, // Viernes 28 Mar
  { id: 'b3-c12', name: 'Bloque III - Clase 12', details: 'Políticas de Igualdad', time: '10:00', type: 'online' }, // Lunes 31 Mar

  // Abril
  { id: 'b3-dp-c9', name: 'Bloque III DP - Clase 9', details: 'Derecho práctico', time: '17:00-21:00', type: 'streaming' }, // Viernes 4 Abr
  { id: 'b3-c13', name: 'Bloque III - Clase 13', details: 'Ley de Contratos (1)', time: '10:00', type: 'online' }, // Lunes 7 Abr
  { id: 'b3-c14', name: 'Bloque III - Clase 14', details: 'Ley de Contratos (2)', time: '10:00', type: 'online' }, // Lunes 14 Abr
  { id: 'b3-dp-c10', name: 'Bloque III DP - Clase 10', details: 'Derecho práctico', time: '10:00-14:00', type: 'streaming' }, // Viernes 18 Abr
  { id: 'b3-c15', name: 'Bloque III - Clase 15', details: 'Ley de Contratos (3)', time: '10:00', type: 'online' }, // Lunes 21 Abr
  { id: 'b3-c16', name: 'Bloque III - Clase 16', details: 'Ley de Contratos (4)', time: '10:00', type: 'online' }, // Lunes 28 Abr

  // Mayo
  { id: 'b3-dp-c11', name: 'Bloque III DP - Clase 11', details: 'Derecho práctico', time: '17:00-21:00', type: 'streaming' }, // Viernes 2 May
  { id: 'b3-c17', name: 'Bloque III - Clase 17', details: 'Ley de Contratos (5)', time: '10:00', type: 'online' }, // Lunes 5 May
  { id: 'b3-dp-c12', name: 'Bloque III DP - Clase 12', details: 'Derecho práctico', time: '17:00-21:00', type: 'streaming' }, // Viernes 9 May
  { id: 'b3-c18', name: 'Bloque III - Clase 18', details: 'Ley de Contratos (6)', time: '10:00', type: 'online' }, // Lunes 12 May
  { id: 'b3-c19', name: 'Bloque III - Clase 19', details: 'Ley de Contratos (7)', time: '10:00', type: 'online' }, // Lunes 19 May
  { id: 'b3-c20', name: 'Bloque III - Clase 20', details: 'Ley de Subvenciones', time: '10:00', type: 'online' }, // Lunes 26 May
  { id: 'b3-dp-c14', name: 'Bloque III DP - Clase 14', details: 'Derecho práctico', time: '17:00-21:00', type: 'streaming' }, // Viernes 30 May

  // Junio
  { id: 'b4-c1', name: 'Bloque IV - Clase 1', details: 'Anexo I - TREBEP (1)', time: '10:00', type: 'online' }, // Lunes 2 Jun
  { id: 'b3-dp-c15', name: 'Bloque III DP - Clase 15', details: 'Derecho práctico', time: '17:00-21:00', type: 'streaming' }, // Viernes 6 Jun
  { id: 'b4-c2', name: 'Bloque IV - Clase 2', details: 'Anexo I - TREBEP (2)', time: '10:00', type: 'online' }, // Lunes 9 Jun
  { id: 'b3-dp-c16', name: 'Bloque III DP - Clase 16', details: 'Derecho práctico', time: '17:00-21:00', type: 'streaming' }, // Viernes 13 Jun
  { id: 'b4-c3', name: 'Bloque IV - Clase 3', details: 'Anexo I - TREBEP (3)', time: '10:00', type: 'online' }, // Lunes 16 Jun
  { id: 'b4-c4', name: 'Bloque IV - Clase 4', details: 'Anexo V - R.D 365/95', time: '10:00', type: 'online' }, // Lunes 23 Jun
  { id: 'b4-dp-c1', name: 'Bloque IV DP - Clase 1', details: 'Derecho práctico', time: '17:00-21:00', type: 'streaming' }, // Viernes 27 Jun
  { id: 'b4-c5', name: 'Bloque IV - Clase 5', details: 'Anexo I - TREBEP (5), Anexo VI - Ley 33/86', time: '10:00', type: 'online' } // Lunes 30 Jun
  ];

  const [scheduledClasses, setScheduledClasses] = useState({});
  const [draggedClass, setDraggedClass] = useState(null);
  const [draggedFromDate, setDraggedFromDate] = useState(null);

  // Obtener índice de orden según initialClasses
  const getClassOrder = (classId) => initialClasses.findIndex(c => c.id === classId);

  // Clases disponibles (sin programar)
  const getAvailableClasses = () => {
    const scheduledIds = new Set();
    Object.values(scheduledClasses).forEach(list => list.forEach(c => scheduledIds.add(c.id)));
    return initialClasses.filter(c => !scheduledIds.has(c.id));
  };

  // Verificar si está fuera de orden cronológico
  const isClassOutOfOrder = (classId) => {
    const entries = Object.entries(scheduledClasses)
      .flatMap(([date, classes]) => classes.map(c => ({ ...c, date })))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    const current = entries.find(e => e.id === classId);
    if (!current) return false;
    const currentOrder = getClassOrder(classId);
    const currentDate = new Date(current.date);
    return entries.some(e => getClassOrder(e.id) > currentOrder && new Date(e.date) < currentDate);
  };

  // Generar calendario de Mayo, Junio y Julio 2025
  const generateCalendar = () => [
    { name: 'Mayo 2025', days: [31], month: 4, year: 2025 },
    { name: 'Junio 2025', days: Array.from({ length: 30 }, (_, i) => i + 1), month: 5, year: 2025 },
    { name: 'Julio 2025', days: Array.from({ length: 31 }, (_, i) => i + 1), month: 6, year: 2025 }
  ];

  const handleDragStart = (e, classItem, fromDate = null) => {
    setDraggedClass(classItem);
    setDraggedFromDate(fromDate);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, date) => {
    e.preventDefault();
    if (!draggedClass) return;

    const updated = { ...scheduledClasses };
    if (draggedFromDate) {
      updated[draggedFromDate] = updated[draggedFromDate].filter(c => c.id !== draggedClass.id);
      if (!updated[draggedFromDate].length) delete updated[draggedFromDate];
    }

    if (!updated[date]) updated[date] = [];
    updated[date].push(draggedClass);
    updated[date].sort((a, b) => getClassOrder(a.id) - getClassOrder(b.id));

    setScheduledClasses(updated);
    setDraggedClass(null);
    setDraggedFromDate(null);
  };

  const removeClassFromSchedule = (classItem, date) => {
    const updated = { ...scheduledClasses };
    updated[date] = updated[date].filter(c => c.id !== classItem.id);
    if (!updated[date].length) delete updated[date];
    setScheduledClasses(updated);
  };

  const months = generateCalendar();
  const availableClasses = getAvailableClasses();

  // Calcular horas estimadas por día
  const getEstimatedHours = (dateKey) => {
    const list = scheduledClasses[dateKey] || [];
    return list.reduce((total, item) => {
      // Si es DP (streaming) 2.5h, si no 4h
      return total + (item.id.includes('-dp-') ? 2.5 : 4);
    }, 0);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Contenedor principal: sidebar a la izquierda y calendario a la derecha */}
      <div className="flex gap-4 h-[calc(100vh-200px)]">
        {/* Sidebar de clases disponibles */}
        <div className="w-72 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border p-3 h-full flex flex-col">
            <h2 className="text-base font-semibold mb-3 flex items-center gap-2 text-green-600">
              <BookOpen size={18} /> Clases ({availableClasses.length})
            </h2>
            <div className="space-y-2 overflow-y-auto flex-1">
              {availableClasses.map(item => {
                const out = isClassOutOfOrder(item.id);
                return (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={e => handleDragStart(e, item)}
                    className={`p-2 border rounded cursor-move transition-colors ${
                      out ? 'bg-red-50 border-red-300 hover:bg-red-100' : 'bg-blue-50 border-blue-200 hover:bg-blue-100'
                    }`}
                  >
                    <div className={`font-medium text-xs ${out ? 'text-red-800' : 'text-blue-800'}`}>{item.name}</div>
                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Clock size={10} /> {item.time}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Calendario principal */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-6 pr-2">
            {months.map((month, mi) => (
              <div key={mi} className="bg-white rounded-lg shadow-sm border p-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{month.name}</h3>
                <div className="grid grid-cols-7 gap-2 relative">
                  {['L','M','X','J','V','S','D'].map(d => (
                    <div key={d} className="text-center font-medium text-gray-500 py-2">{d}</div>
                  ))}
                  {month.month === 4 && Array(5).fill().map((_, i) => <div key={i} className="h-24"></div>)}
                  {month.month === 5 && Array(6).fill().map((_, i) => <div key={i} className="h-24"></div>)}
                  {month.month === 6 && Array(1).fill().map((_, i) => <div key={i} className="h-24"></div>)}
                  {month.days.map(day => {
                    const key = `${month.year}-${String(month.month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
                    const est = getEstimatedHours(key);
                    return (
                      <div
                        key={day}
                        onDragOver={handleDragOver}
                        onDrop={e => handleDrop(e, key)}
                        className="border border-gray-200 rounded-lg p-2 min-h-24 bg-gray-50 hover:bg-gray-100 transition-colors relative"
                      >
                        {/* Reloj estimado */}
                        {est > 0 && (
                          <div className="absolute top-1 right-1 flex items-center text-gray-500 text-xs">
                            <Clock size={12} className="mr-1" />{est}
                          </div>
                        )}
                        <div className="font-medium text-sm text-gray-700 mb-1">{day}</div>
                        <div className="space-y-1">
                          {scheduledClasses[key]?.map(item => {
                            const out = isClassOutOfOrder(item.id);
                            return (
                              <div
                                key={item.id}
                                draggable
                                onDragStart={e => handleDragStart(e, item, key)}
                                onClick={() => removeClassFromSchedule(item, key)}
                                className={`rounded px-2 py-1 text-xs cursor-pointer transition-colors border ${
                                  out
                                    ? 'bg-red-100 border-red-300 text-red-800 hover:bg-red-200'
                                    : 'bg-green-100 border-green-300 text-green-800 hover:bg-green-200'
                                }`} 
                                title="Arrastra para mover o click para remover"
                              >
                                <div className="font-medium truncate">{item.name.replace('Bloque ', 'B').replace(' - Clase ', '-C')}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassScheduler;