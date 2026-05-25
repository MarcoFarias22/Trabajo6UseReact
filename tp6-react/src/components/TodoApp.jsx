import React, { useState } from 'react';

const TodoApp = () => {
  // Estado para la lista de tareas (arranca con dos de ejemplo)
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Terminar el TP6 de Prácticas II', completada: false },
    { id: 2, texto: 'Aprender las bases de React', completada: true }
  ]);

  // Estado para controlar el input de la nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState('');

  // 1. Agregar tarea (Formulario)
  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === '') return; // No permite tareas vacías

    const nueva = {
      id: Date.now(), // ID único basado en el tiempo actual
      texto: nuevaTarea,
      completada: false
    };

    setTareas([...tareas, nueva]); // Agregamos la nueva usando el spread operator
    setNuevaTarea(''); // Limpiamos el input
  };

  // 2. Modificar (Toggle) para marcar como completada/pendiente
  const toggleCompletada = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  // 3. Eliminar tarea usando .filter()
  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasFiltradas);
  };

  // Extras: Contador dinámico de pendientes
  const pendientes = tareas.filter(tarea => !tarea.completada).length;

  return (
    <div style={{
      border: '2px dashed #646cff',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '500px',
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'left'
    }}>
      <h3 style={{ textAlign: 'center', color: '#646cff' }}>Desafío 6: Lista de Tareas (To-Do App) 📝</h3>
      
      {/* Formulario para agregar tareas */}
      <form onSubmit={agregarTarea} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribí una nueva tarea..."
          style={{ flexGrow: 1, padding: '8px', borderRadius: '4px', border: '1px solid #444', backgroundColor: '#333', color: '#fff' }}
        />
        <button 
          type="submit"
          style={{ padding: '8px 15px', backgroundColor: '#646cff', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Agregar
        </button>
      </form>

      {/* Contador de pendientes */}
      <p style={{ fontSize: '14px', color: '#aaa', marginBottom: '15px' }}>
        ⏳ Tareas pendientes: <strong style={{ color: '#646cff' }}>{pendientes}</strong>
      </p>

      {/* Renderizado condicional si no hay tareas */}
      {tareas.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#ff4655', fontStyle: 'italic', margin: '20px 0' }}>
          🎉 ¡No hay tareas pendientes! Disfrutá tu tiempo libre.
        </p>
      ) : (
        // Renderizado de la lista con .map()
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {tareas.map(tarea => (
            <li 
              key={tarea.id}
              style={{
                display: 'flex',
                justifyContent: 'between',
                alignItems: 'center',
                padding: '10px',
                borderBottom: '1px solid #333',
                backgroundColor: '#1a1a1a',
                marginBottom: '5px',
                borderRadius: '4px'
              }}
            >
              {/* Checkbox y Texto de la tarea */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexGrow: 1, cursor: 'pointer' }} onClick={() => toggleCompletada(tarea.id)}>
                <input 
                  type="checkbox" 
                  checked={tarea.completada}
                  onChange={() => {}} // Se maneja con el clic del contenedor superior
                  style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                />
                <span style={{ 
                  textDecoration: tarea.completada ? 'line-through' : 'none',
                  color: tarea.completada ? '#666' : '#fff',
                  fontSize: '15px'
                }}>
                  {tarea.texto}
                </span>
              </div>

              {/* Botón de eliminar */}
              <button 
                onClick={() => eliminarTarea(tarea.id)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#ff4655',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  padding: '0 5px'
                }}
                title="Eliminar tarea"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoApp;