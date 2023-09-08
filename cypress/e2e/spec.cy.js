describe('Pinky & Brain', () => {
  it("Let's conquer the world", () => {
    // Arrange
    const sentence = 'Pinky: “Gee Brain, what are we gonna do tonight?” Brain: “The same thing we do every night, try to take over the world!”'

    // Act
    cy.pinkyAndBrainChat(sentence).as('pinkyAndBrainChat')

    // Assert
    cy.get('@pinkyAndBrainChat').should('be.equal', sentence)
  })
})
