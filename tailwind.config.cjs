module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                lg: '2rem',
                '2xl': '4rem',
            },
        },
        extend: {
            colors: {
                primary: '#f70469',
				primaryHover: '#e70d6c',
				secondary: '#00ccff',
				secondaryHover: '#07bce9',
            }
        },
    },
};