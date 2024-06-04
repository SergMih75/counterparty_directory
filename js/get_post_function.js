import { datasetRender, datasetRenderCard } from './dataset_table_render.js'

const baseUrl =
	'https://658de3287c48dce94739cf8b.mockapi.io/sergmih75/counterparty_directory'

// Вывод списка контрагентов
export function getQuestion() {
	fetch(baseUrl, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	})
		.then(response => response.json())
		.then(dataGet => datasetRender(dataGet))

		.catch(error => console.error(error))
}

// Добавление нового контрагента
export function postQuestions(newItem) {
	fetch(baseUrl, {
		method: 'POST',
		body: JSON.stringify(newItem),
		headers: { 'content-type': 'application/json' },
	})
		.then(response => response.json())
		.catch(error => console.error(error))
}

// Удаление выбранного контрагента
let datasetTable = document.querySelector('.dataset__table')

datasetTable.addEventListener('click', function (e) {
	if (e.target.tagName === 'BUTTON') {
		let url =
			baseUrl + '/' + e.target.parentNode.parentNode.childNodes[1].innerHTML
		console.log(e.target.tagName)
		console.log(url)

		fetch(url, {
			method: 'DELETE',
		})
			.then(res => {
				if (res.ok) {
					getQuestion()
					return res.json()
				}
			})
			.catch(error => console.error(error))
	}
})

// Вывод карточки контрагента
datasetTable.addEventListener('click', function (e) {
	if (e.target.tagName === 'TD') {
		let urlCard = baseUrl + '/' + e.target.parentNode.childNodes[1].innerHTML

		getQuestionCard()

		function getQuestionCard() {
			fetch(urlCard, {
				method: 'GET',
				headers: { 'content-type': 'application/json' },
			})
				.then(response => response.json())

				.then(dataGetCard => datasetRenderCard(dataGetCard))

				.catch(error => console.error(error))
		}
	}
})
