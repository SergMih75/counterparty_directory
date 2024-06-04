import { getQuestion, postQuestions } from './get_post_function.js'

const navBtn = document.querySelectorAll('.nav__btn')
const popup = document.querySelector('.popup')
const addBtn = document.querySelector('.add__btn')
const dataAdd = document.querySelectorAll('.data-add')

let newItem = {}

document.addEventListener('DOMContentLoaded', () => {
	getQuestion()
})

navBtn.forEach(item => {
	item.addEventListener('click', function (e) {
		e.preventDefault()
		popup.classList.add('popup-active')
		if (item.classList.contains('nav__btn-add')) {
			document.querySelector('.popup__add').classList.add('popup__add-active')
		}
	})
})

popup.addEventListener('click', e => {
	if (e.target.classList.contains('add__close')) {
		document.querySelector('.popup__add').classList.remove('popup__add-active')
		popup.classList.remove('popup-active')
		getQuestion()
	}
})

addBtn.addEventListener('click', function () {
	newItem = {
		name: document.getElementById('name').value,
		inn: document.getElementById('inn').value,
		adress: document.getElementById('adress').value,
		phone: document.getElementById('phone').value,
		e_mail: document.getElementById('e_mail').value,
		site_link: document.getElementById('site_link').value,
		director_name: document.getElementById('director_name').value,
		director_phone: document.getElementById('director_phone').value,
		contract_type: document.getElementById('contract_type').value,
		contract_number: document.getElementById('contract_number').value,
		contract_data: document.getElementById('contract_data').value,
		contract_end: document.getElementById('contract_end').value,
		resp_person: document.getElementById('resp_person').value,
		resp_phone: document.getElementById('resp_phone').value,
		resp_mail: document.getElementById('resp_mail').value,
		bank_name: document.getElementById('bank_name').value,
		bank_payment: document.getElementById('bank_payment').value,
		bank_bic: document.getElementById('bank_bic').value,
		bank_corr: document.getElementById('bank_corr').value,
		notes: document.getElementById('notes').value,
	}
	console.log(newItem)

	postQuestions(newItem)
	dataAdd.forEach(dataAdd => {
		dataAdd.value = ''
		getQuestion()
	})

	document.querySelector('.popup__add').classList.remove('popup__add-active')
	document.querySelector('.popup').classList.remove('popup-active')
	getQuestion()
})

IMask(document.getElementById('phone'), { mask: '+8 (000) 000-00-00' })
IMask(document.getElementById('director_phone'), { mask: '+8 (000) 000-00-00' })
IMask(document.getElementById('resp_phone'), { mask: '+8 (000) 000-00-00' })
