/*---------------------------------------------------------------
** POPUP-MODAL
 *
 ** #modal-search
 -----------------------------------------------------------------
 */
const allModals = document.querySelectorAll(".modal-popup"),
	btnCloseModal = document.querySelectorAll(".btn-close-modal");

const triggerModal = {
	search: document.getElementById("modal-search"),
};
console.log(triggerModal);
let arrayTriggerModal = [];
for (let i in triggerModal) {
	arrayTriggerModal.push(triggerModal[i]);
}
for (let i = 0; i < arrayTriggerModal.length; i++) {
	arrayTriggerModal[i].addEventListener("click", (e) => {
		console.log(e);
		for (let x = 0; x < allModals.length; x++) {
			if (arrayTriggerModal[i].id == allModals[x].id) {
				allModals[x].classList.add("modal-visible");
			}
		}
	});
}
for (let i = 0; i < btnCloseModal.length; i++) {
	btnCloseModal[i].addEventListener("click", () => {
		allModals[i].classList.remove("modal-visible");
	});
}

// MODAL-USER: MODAL-ITEM
let btnCloseUserModal = document.querySelector("#modal-user .btn-close-modal");
let triggerUserModalItem = {
	signin: document.querySelector("#modal-user .trigger--login"),
	signup: document.querySelector("#modal-user .trigger--signup"),
	requestPassword: document.querySelector(
		"#modal-user .trigger--request-password",
	),
};

let userModalItem = {
	signIn: document.querySelector("#modal-user .modal-item--login"),
	signUp: document.querySelector("#modal-user .modal-item--signup"),
	signRequestPassword: document.querySelector(
		"#modal-user .modal-item--request-password",
	),
};

let arrayTriggerUserModalItem = [];
let arrayUserModalItem = [];
for (let i in triggerUserModalItem) {
	arrayTriggerUserModalItem.push(triggerUserModalItem[i]);
}
for (let i in userModalItem) {
	arrayUserModalItem.push(userModalItem[i]);
}

for (let i = 0; i < arrayTriggerUserModalItem.length; i++) {
	arrayTriggerUserModalItem[i].addEventListener("click", () => {
		let allVisibleUserModalItem = document.querySelectorAll(
			"#modal-user .modal-item.visible",
		);
		if (allVisibleUserModalItem.length > 0) {
			allVisibleUserModalItem[0].className = allVisibleUserModalItem[0].className.replace(
				"visible",
				"",
			);
		}
		if (
			arrayUserModalItem[i].className.includes(arrayTriggerUserModalItem[i].id)
		) {
			arrayUserModalItem[i].classList.add("visible");
		}

		console.log(allVisibleUserModalItem[0]);
	});
}
btnCloseUserModal.addEventListener("click", () => {
	let allVisibleUserModalItem = document.querySelectorAll(
		"#modal-user .modal-item.visible",
	);
	for (let i = 0; i < arrayUserModalItem.length; i++) {
		if (arrayUserModalItem[i].className.includes("modal-item--login")) {
			allVisibleUserModalItem[0].classList.remove("visible");
			arrayUserModalItem[i].classList.add("visible");
		}
	}
});
