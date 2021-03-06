import React, { useState, useEffect } from 'react';

import './styles/ListsContainer.css';

const ListsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([]);
  const [columnsNames, setColumnsNames] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await fetch(
      'https://api.trello.com/1/boards/60439e989f2d6d1fc7e82e39/lists/?key=8631c4e1ea4b0e4a98205cd7a7c14ebe&token=19a2db857b75b0a6c9a8329cd722614d57cf3cd05a3e1adcfbb2d866b20aba5f',
    )
      .then((response) => response.json())
      .then((data) => setColumns(data));

    await fetch(
      'https://api.trello.com/1/boards/60439e989f2d6d1fc7e82e39/lists/?key=8631c4e1ea4b0e4a98205cd7a7c14ebe&token=19a2db857b75b0a6c9a8329cd722614d57cf3cd05a3e1adcfbb2d866b20aba5f',
    )
      .then((response) => response.json())
      .then((data) => setColumnsNames(data.map((col) => col.name)));
    await fetch(
      'https://api.trello.com/1/boards/60439e989f2d6d1fc7e82e39/cards/?key=8631c4e1ea4b0e4a98205cd7a7c14ebe&token=19a2db857b75b0a6c9a8329cd722614d57cf3cd05a3e1adcfbb2d866b20aba5f',
    )
      .then((response) => response.json())
      .then((data) => setTasks(data));
    await setLoading(true);
  }

  return (
    <div className='ListsPadding'>
      {loading ? (
        <div className='ListsGrid'>
          {columnsNames.includes('To do', 'In progress', 'done') ? (
            columns.map((column) => {
              return (
                <div className='List' key={column.id}>
                  <header className='List__Header'>{column.name}</header>
                  <ul>
                    {tasks.map((task) => {
                      return (
                        task.idList === column.id && (
                          <div key={task.id}>
                            <li>{task.name}</li>
                          </div>
                        )
                      );
                    })}
                  </ul>
                </div>
              );
            })
          ) : (
            <div>The dashboard can't be read</div>
          )}
        </div>
      ) : (
        <div> Cargando ...</div>
      )}
    </div>
  );
};

export default ListsContainer;
