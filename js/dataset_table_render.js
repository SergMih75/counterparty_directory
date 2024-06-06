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
		<th>Редактировать</th>
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
		<td><button class="edit__btn">Редактировать</button></td>
		<td><button class="del__btn">УДАЛИТЬ</button></td>
	`
		document.querySelector('.dataset__table').append(row)
	})
}

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
	}
})

export function datasetRenderEditCard (dataGetEditCard) {
	document.querySelector('.popup').classList.add('popup-active')
	document.querySelector('.popup__add').classList.add('popup__add-active')

	document.getElementById('creation-btn').classList.add('add-data-disable')
	document.getElementById('edit-btn').classList.remove('add-data-disable')

	document.getElementById('key_id').value = dataGetEditCard.id
	document.getElementById('name').value = dataGetEditCard.name
	document.getElementById('inn').value = dataGetEditCard.inn
	document.getElementById('adress').value = dataGetEditCard.adress
	document.getElementById('phone').value = dataGetEditCard.phone
	document.getElementById('e_mail').value = dataGetEditCard.e_mail
	document.getElementById('site_link').value = dataGetEditCard.site_link
	document.getElementById('director_name').value = dataGetEditCard.director_name
	document.getElementById('director_phone').value = dataGetEditCard.director_phone
	document.getElementById('contract').value = dataGetEditCard.contract
	document.getElementById('contract_type').value = dataGetEditCard.contract_type
	document.getElementById('contract_number').value = dataGetEditCard.contract_number
	document.getElementById('contract_data').value = dataGetEditCard.contract_data
	document.getElementById('contract_end').value = dataGetEditCard.contract_end
	document.getElementById('resp_person').value = dataGetEditCard.resp_person
	document.getElementById('resp_phone').value = dataGetEditCard.resp_phone
	document.getElementById('resp_mail').value = dataGetEditCard.resp_mail
	document.getElementById('bank_name').value = dataGetEditCard.bank_name
	document.getElementById('bank_payment').value = dataGetEditCard.bank_payment
	document.getElementById('bank_bic').value = dataGetEditCard.bank_bic
	document.getElementById('bank_corr').value = dataGetEditCard.bank_corr
	document.getElementById('notes').value = dataGetEditCard.notes
}