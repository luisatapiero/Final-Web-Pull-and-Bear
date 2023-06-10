import { firstComponent } from './componentExample.js'

describe('Renderizado del componente', () => {
    it('debería renderizar el componente correctamente', () => {
      // Arrange
      const component = document.createElement('app-header');
  
      // Assert
      expect(component).toBeDefined();
      expect(component.shadowRoot).toBeDefined();
    });
  });

  describe('Propiedades y atributos del componente', () => {
    it('debería aplicar correctamente los atributos', () => {
      // Arrange
      const component = document.createElement('app-header');
      component.setAttribute('url_1', 'url1.jpg');
      component.setAttribute('name', 'Producto 1');
      component.setAttribute('price', '10');
  
      // Assert
      expect(component.getAttribute('url_1')).toEqual('url1.jpg');
      expect(component.getAttribute('name')).toEqual('Producto 1');
      expect(component.getAttribute('price')).toEqual('10');
    });
  });

  describe('Prueba de toggle de filtros', () => {
    it('debería realizar el toggle de los filtros al hacer clic en el botón', () => {
      // Arrange
      const component = document.createElement('product-component');
      const filterBtn = document.createElement('button');
      const filtersContainer = document.createElement('div');
      const HIDDEN_CLASS = 'hidden';
  
      filtersContainer.classList.add(HIDDEN_CLASS);
  
      component.appendChild(filterBtn);
      component.appendChild(filtersContainer);
  
      // Act
      filterBtn.dispatchEvent(new MouseEvent('click'));
  
      // Assert
      expect(filtersContainer.classList.contains(HIDDEN_CLASS)).toBe(true);
  
    });
  });
  
  
