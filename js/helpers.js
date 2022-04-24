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
		const index = e.detail.active;
		const elemt = sectionChanger.sections[index];
		renderChapter(elemt, index)
		pageIndicator.setActive(e.detail.active);
	};

	content.addEventListener("sectionchange", pageIndicatorHandler, false);
}

function renderVersionPicker(p, callback) {
	const versions = Object.keys(index.versions);
	let helper;

	p.addEventListener("pagebeforeshow", function () {
		const list = p.querySelector(".ui-arc-listview");
		list.innerHTML = "";

		helper = tau.widget.ArcListview(list);
		helper.setListItemUpdater((elem, idx) => {
			if (idx >= versions.length) {
				throw new Error();
			}

			const key = versions[idx] || "";
			const input = document.createElement("input");

			input.type = "radio";
			input.name = "version";
			
			if(key == version) {
				input.setAttribute("checked", "checked");
			}

			elem.classList = "li-has-radio";
			elem.innerHTML = `<label id="radio-text-${idx}">${key.toUpperCase()}${input.outerHTML}</label>`
			
			elem.addEventListener("click", event => {
				event.preventDefault();
				callback(key)
			});
		})
	})

	p.addEventListener("pagehide", function () {
		helper.destroy();
	});
}

const renderChapter = (section, i) => {
	const chapters = bversion[version][book];
	const header = document.createElement("header");
	const title = index.books[book] + " " + (+i + 1).toString().padStart(2, "0");

	header.className = "ui-header"
	header.innerHTML = `<h1 class="ui-title ui-overflow-gradient">${title}</h1>`

	section.innerHTML = "";
	section.appendChild(header);

	for(const b in chapters[i]) {
		const p = document.createElement("p");
		const n = document.createElement("b");
		const t = document.createTextNode(chapters[i][b]);

		n.textContent = (parseInt(b) + 1).toString().padStart(2, "0") + ".";
		
		p.appendChild(n);
		p.appendChild(t);

		section.appendChild(p);
	}
}