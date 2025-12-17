import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('la app se renderiza', () => {
  render(<App />)

  // Comprobamos que aparece el texto del template por defecto
  expect(screen.getByText('Vite + React')).toBeInTheDocument()
})

// Test para verificar que el texto de los logos y enlaces se renderiza correctamente
test('los enlaces y logos de Vite y React se renderizan', () => {
  render(<App />)

  // Verifica que el logo de Vite y React estén en el documento
  expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
  expect(screen.getByAltText('React logo')).toBeInTheDocument()
})

// Test para verificar que el contador se incrementa al hacer clic en el botón
test('el contador aumenta al hacer clic en el botón', () => {
  render(<App />)

  // Obtiene el botón y el texto que muestra el contador
  const button = screen.getByRole('button', { name: /count is/i })
  const countText = screen.getByText(/count is 0/i)

  // Verifica que el contador empieza en 0
  expect(countText).toBeInTheDocument()

  // Hace clic en el botón y verifica que el contador se incrementa
  fireEvent.click(button)
  expect(screen.getByText(/count is 1/i)).toBeInTheDocument()

  fireEvent.click(button)
  expect(screen.getByText(/count is 2/i)).toBeInTheDocument()
})

// Test para verificar que el texto de la sección de docs está presente
test('la sección de "read the docs" se renderiza correctamente', () => {
  render(<App />)
  expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument()
})

