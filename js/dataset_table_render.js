// import { popup } from "./main.js"

export function datasetRender(dataGet)  {
	document.querySelector('.dataset__table').innerHTML=''

	let headRow = document.createElement('tr')
headRow.innerHTML = `
        <th>#</th>
		<th>Контрагент</th>

		<th>Адрес</th>
		<th>Телефон</th>
		<th>Эл.почта</th>



		<th>Договор</th>
		<th>№ дог.</th>
		<th>Дата дог.</th>
		<th>Дата оконч. дог.</th>







		<th>Примечания</th>
		<th>УДАЛИТЬ</th>
    `
document.querySelector('.dataset__table').append(headRow)

dataGet.forEach(function (item) {
		let row = document.createElement('tr')
		row.innerHTML = `
        <td>${item.id}</td>
		<td>${item.name}</td>

		<td>${item.adress}</td>
		<td>${item.phone}</td>
		<td>${item.e_mail}</td>



		<td>${item.contract_type}</td>
		<td>${item.contract_number}</td>
		<td>${item.contract_data}</td>
		<td>${item.contract_end}</td>







		<td>${item.notes}</td>
		<td><button class="del__btn">УДАЛИТЬ</button></td>
	`
		document.querySelector('.dataset__table').append(row)
	})
}

// export function datasetRender(dataGet)  {
// 	document.querySelector('.dataset__table').innerHTML=''

// 	let headRow = document.createElement('tr')
// headRow.innerHTML = `
//         <th>#</th>
// 		<th>Контрагент</th>
// 		<th>ИНН</th>
// 		<th>Адрес</th>
// 		<th>Телефон</th>
// 		<th>Эл.почта</th>
// 		<th>Сайт</th>
// 		<th>ФИО рук.</th>
// 		<th>Телефон рук.</th>
// 		<th>Договор</th>
// 		<th>№ дог.</th>
// 		<th>Дата дог.</th>
// 		<th>Дата оконч. дог.</th>
// 		<th>Куратор</th>
// 		<th>Телефон куратора</th>
// 		<th>e-mail куратора</th>
// 		<th>Банк</th>
// 		<th>расч.сч.</th>
// 		<th>БИК</th>
// 		<th>корр.сч.</th>
// 		<th>Примечания</th>
// 		<th>УДАЛИТЬ</th>
//     `
// document.querySelector('.dataset__table').append(headRow)

// dataGet.forEach(function (item) {
// 		let row = document.createElement('tr')
// 		row.innerHTML = `
//         <td>${item.id}</td>
// 		<td>${item.name}</td>
// 		<td>${item.inn}</td>
// 		<td>${item.adress}</td>
// 		<td>${item.phone}</td>
// 		<td>${item.e_mail}</td>
// 		<td>${item.site_link}</td>
// 		<td>${item.director_name}</td>
// 		<td>${item.director_phone}</td>
// 		<td>${item.contract_type}</td>
// 		<td>${item.contract_number}</td>
// 		<td>${item.contract_data}</td>
// 		<td>${item.contract_end}</td>
// 		<td>${item.resp_person}</td>
// 		<td>${item.resp_phone}</td>
// 		<td>${item.resp_mail}</td>
// 		<td>${item.bank_name}</td>
// 		<td>${item.bank_payment}</td>
// 		<td>${item.bank_bic}</td>
// 		<td>${item.bank_corr}</td>
// 		<td>${item.notes}</td>
// 		<td><button class="del__btn">УДАЛИТЬ</button></td>
// 	`
// 		document.querySelector('.dataset__table').append(row)
// 	})
// }


export function datasetRenderCard(dataGetCard)  {

	document.querySelector('.popup-card').classList.add('popup-active')
	document.querySelector('.card').classList.add('card-active')

	document.querySelector('.dataset__table-card').innerHTML=''

	let headRow = document.createElement('tr')
headRow.innerHTML = `
        <th>#</th>
		<th>Контрагент</th>
		<th>ИНН</th>
		<th>Адрес</th>
		<th>Телефон</th>
		<th>Эл.почта</th>
		<th>Сайт</th>
		<th>ФИО рук.</th>
		<th>Телефон рук.</th>
		<th>Договор</th>
		<th>№ дог.</th>
		<th>Дата дог.</th>
		<th>Дата оконч. дог.</th>
		<th>Куратор</th>
		<th>Телефон куратора</th>
		<th>e-mail куратора</th>
		<th>Банк</th>
		<th>расч.сч.</th>
		<th>БИК</th>
		<th>корр.сч.</th>
		<th>Примечания</th>
    `
document.querySelector('.dataset__table-card').append(headRow)

		let row = document.createElement('tr')
		row.innerHTML = `
        <td>${dataGetCard.id}</td>
		<td>${dataGetCard.name}</td>
		<td>${dataGetCard.inn}</td>
		<td>${dataGetCard.adress}</td>
		<td>${dataGetCard.phone}</td>
		<td>${dataGetCard.e_mail}</td>
		<td>${dataGetCard.site_link}</td>
		<td>${dataGetCard.director_name}</td>
		<td>${dataGetCard.director_phone}</td>
		<td>${dataGetCard.contract_type}</td>
		<td>${dataGetCard.contract_number}</td>
		<td>${dataGetCard.contract_data}</td>
		<td>${dataGetCard.contract_end}</td>
		<td>${dataGetCard.resp_person}</td>
		<td>${dataGetCard.resp_phone}</td>
		<td>${dataGetCard.resp_mail}</td>
		<td>${dataGetCard.bank_name}</td>
		<td>${dataGetCard.bank_payment}</td>
		<td>${dataGetCard.bank_bic}</td>
		<td>${dataGetCard.bank_corr}</td>
		<td>${dataGetCard.notes}</td>
	`
		document.querySelector('.dataset__table-card').append(row)
	// })
}

document.querySelector('.popup-card').addEventListener('click', e => {
	if (e.target.classList.contains('card__close')) {
		document.querySelector('.popup-card').classList.remove('popup-active')
	document.querySelector('.card').classList.remove('card-active')

	getQuestion()
	}
})