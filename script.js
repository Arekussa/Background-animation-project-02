document.addEventListener("DOMContentLoaded", function() {
    const icons = [
        "fa-github", "fa-facebook-official", "fa-pinterest", "fa-quora", "fa-reddit-alien", "fa-spotify",
        "fa-steam", "fa-telegram", "fa-twitter", "fa-linkedin", "fa-stack-overflow", "fa-android",
        "fa-whatsapp", "fa-instagram", "fa-dropbox", "fa-qq", "fa-soundcloud", "fa-twitch",
        "fa-youtube-play", "fa-vimeo"
    ];

    const createIcon = (className) => {
        const icon = document.createElement('i');
        icon.classList.add('fa', className);
        icon.setAttribute('aria-hidden', 'true');
        return icon;
    };

    const createRows = (count) => {
        const section = document.createElement('section');

        for (let j = 0; j < count; j++) {
            const row = document.createElement('div');
            row.classList.add('row');

            const div1 = document.createElement('div');

            for (let i = 0; i < icons.length; i++) {
                div1.appendChild(createIcon(icons[i]));
            }

            const div2 = document.createElement('div');

            for (let i = 0; i < icons.length; i++) {
                div2.appendChild(createIcon(icons[i]));
            }

            row.appendChild(div1);
            row.appendChild(div2);

            section.appendChild(row);
        }

        document.body.innerHTML = ''; // Limpiar el contenido existente del body
        document.body.appendChild(section);
    };

    const rowCount = 18; // Número de filas que deseas agregar
    createRows(rowCount);
});

