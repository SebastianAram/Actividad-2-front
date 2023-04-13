import React from 'react'

export default function Modal({
  title,
  closeModal,
  handleChange,
  usuario,
  loadingSave,
  saveUsuario
}) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo {title}</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            >
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="nombre"
                  className="col-form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  onChange={handleChange}
                  value={usuario.nombre}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">Email: </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={usuario.email}
                />
              </div>
            </form>
          </div>
          
            
              
            
          
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeModal}
            >
              Cerrar
            </button>
            {
              loadingSave
                ?
                (
                  <button
                    className="btn btn-primary"
                    type="button" disabled
                  >
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    >
                    </span>
                    Guardando...
                  </button>
                ) :
                (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={saveUsuario}



                  >
                    Enviar
                  </button>
                )
            }
          </div>
        </div>
      </div>
    </div>
  )

}