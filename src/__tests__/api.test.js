/**
 * @jest-environment node
 */

import TrelloClient from "../api/models/Trello";
const trello = new TrelloClient()

it('check the user\'s url from dashboard', async () => {
    const user = await trello.getUserInformation()

    expect(user.url).toEqual('https://trello.com/jesusgarciavaladez1')
})

it('check if a board has more than one element', async () => {
    const user = await trello.getUserInformation()

    expect(user.idBoards).toHaveLength(2)
})

it('check if board\' name is \'Test board\'', async () => {
    const user = await trello.getUserInformation()
    const board = await trello.getABoardById(user.idBoards[0])

    expect(board.name).toEqual('Test board')
})

it('check if a board has lists on it', async () => {
    const user = await trello.getUserInformation()
    const board = await trello.getABoardById(user.idBoards[0])
    const lists = await trello.getListsOnABoardById(board.id)

    expect(lists).toHaveLength(3)
})

it('check if the first list has the name ToDo on it', async () => {
    const user = await trello.getUserInformation()
    const board = await trello.getABoardById(user.idBoards[0])
    const lists = await trello.getListsOnABoardById(board.id)
    const list = await trello.getAListById(lists[0].id)

    expect(list.name).toEqual('ToDo')
})

it('check if the first list has card on it', async () => {
    const user = await trello.getUserInformation()
    const board = await trello.getABoardById(user.idBoards[0])
    const lists = await trello.getListsOnABoardById(board.id)
    const list = await trello.getAListById(lists[0].id)
    const cards = await trello.getCardsInAListById(list.id)

    expect(cards).toHaveLength(2)
})

it('check if the first card of the first list has the name \'Tarea 5\' on it', async () => {
    const user = await trello.getUserInformation()
    const board = await trello.getABoardById(user.idBoards[0])
    const lists = await trello.getListsOnABoardById(board.id)
    const list = await trello.getAListById(lists[0].id)
    const cards = await trello.getCardsInAListById(list.id)
    const card = await trello.getACardById(cards[0].id)

    expect(card.name).toEqual('Tarea 5')
})
