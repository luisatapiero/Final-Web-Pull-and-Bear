describe('Renderizado del componente', () => {
    it('debería renderizar el componente correctamente', () => {
        // Arrange
        const component = document.createElement('product-component');

        // Assert
        expect(component).toBeDefined();
        expect(component.shadowRoot).toBeDefined();
    });
});

describe('Propiedades y atributos del componente', () => {
    it('debería aplicar correctamente los atributos', () => {
      // Arrange
      const component = document.createElement('product-component');
      component.setAttribute('url_1', 'url1.jpg');
      component.setAttribute('name', 'Producto 1');
      component.setAttribute('price', '10');
  
      // Assert
      expect(component.getAttribute('url_1')).toEqual('url1.jpg');
      expect(component.getAttribute('name')).toEqual('Producto 1');
      expect(component.getAttribute('price')).toEqual('10');
    });
  });



  describe('Prueba de toggle de descripción', () => {
    it('debería realizar el toggle de la descripción al hacer clic en toggleDescription', () => {
      // Arrange
      const component = document.createElement('product-component');
      const toggleDescription = document.createElement('button');
      const contentDescription = document.createElement('div');
      contentDescription.classList.add('hidden');
  
      component.appendChild(toggleDescription);
      component.appendChild(contentDescription);
  
      // Act
      toggleDescription.dispatchEvent(new Event('click'));
  
      // Assert
      expect(contentDescription.classList.contains('hidden')).toBe(true);

    });
  });
  
  
  

  
  
  
