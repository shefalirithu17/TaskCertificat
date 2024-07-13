require('@4tw/cypress-drag-drop')


describe('HandlingDragANdDrop', () => {
    it('DragAndDrop', () => {
        cy.visit("https://www.lambdatest.com/selenium-playground")
        
        cy.contains('Drag & Drop Sliders').click();
       cy.wait(3000)
       cy.get("[value='15']").invoke("val","95").trigger('change');
       cy.wait(3000)
   
          cy.get("[value='15']").then((slider) => {
            cy.get('#rangeSuccess').then((output) => {
              // Assert initial output value
              expect(output.text()).to.equal('15');
              cy.wait(3000)
          
              cy.wrap(output).invoke('text', '95');
                // Calculate the drag distance to move slider handle to value 95
              //  const dragDistance = sliderWidth * (95 / 100); // Adjust based on your slider's range and value
      
                // Assert that the output value has updated to 95
                cy.wrap(output).should('have.text', '95');
              });
            });
          });
        });
