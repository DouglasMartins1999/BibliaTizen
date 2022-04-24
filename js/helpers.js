function pageindicator(page) {
	const content = page.querySelector(".ui-content");
	const sections = page.querySelectorAll("section");
	const indicator = page.querySelector(".ui-page-indicator");
		
	let sectionChanger,
		pageIndicator,
		pageIndicatorHandler;

	page.addEventListener("pagebeforeshow", function () {
		pageIndicator = tau.widget.PageIndicator(indicator, {numberOfPages: sections.length});
		pageIndicator.setActive(0);
		
		sectionChanger = new tau.widget.SectionChanger(content, {
			orientation: "horizontal",
			useBouncingEffect: true
		});
	});

	page.addEventListener("pagehide", function () {
		sectionChanger.destroy();
		pageIndicator.destroy();
	});

	pageIndicatorHandler = function (e) {
		pageIndicator.setActive(e.detail.active);
	};

	content.addEventListener("sectionchange", pageIndicatorHandler, false);
}

function renderVersionPicker(p, value, callback) {
	const versions = Object.keys(index.versions);
	let helper;

	p.addEventListener("pagebeforeshow", function () {
		const list = p.querySelector(".ui-listview");
		const options = { dataLength: versions.length, bufferSize: 10 };

		helper = tau.widget.Listview(list, options);
		helper.setListItemUpdater((elem, idx) => {
			if (idx >= versions.length) {
				throw new Error();
			}

			const key = versions[idx];
			const input = document.createElement("input");

			input.type = "radio";
			input.name = "version";
			input.checked = key === value;

			elem.classList = "li-has-radio";
			elem.innerHTML = `<label id="radio-text-${idx}">${key.toUpperCase()}${input.outerHTML}</label>`
			elem.value = key;
			
			elem.addEventListener("click", () => callback(key));
		})
	})

	p.addEventListener("pagehide", function () {
		helper.destroy();
	});
}