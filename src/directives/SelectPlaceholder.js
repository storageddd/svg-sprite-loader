export default {
    inserted: (el) => {
        if (el.value !== '') return;
        const placeholderClass = 'custom-select-with-placeholder';

        el.classList.add(placeholderClass);

        el.addEventListener('change', ()  => {
            if (el.value === '') return;
            el.classList.remove(placeholderClass);
        });
    }
}