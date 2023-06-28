// $(document).ready(()=>{
//     $("main").css("margin-top", $("nav").css("height"))
// })

// window.addEventListener("hashchange", () => {scrollBy(0,-parseInt($("nav").css("height")))})

const animation_elements = document.querySelectorAll('.animate-middle-left, .animate-middle-right, .animate-middle-left-reverse, .animate-middle-right-reverse') //, .animate-top-down

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
        if (entry.target.classList.contains('animate-middle-left') && entry.isIntersecting) entry.target.classList.add('animate-1')
        else entry.target.classList.remove('animate-1')

        if (entry.target.classList.contains('animate-middle-right') && entry.isIntersecting) entry.target.classList.add('animate-2')
        else entry.target.classList.remove('animate-2')

        if (entry.target.classList.contains('animate-middle-left-reverse') && entry.isIntersecting) entry.target.classList.add('animate-1-reverse')
        else entry.target.classList.remove('animate-1-reverse')

        if (entry.target.classList.contains('animate-middle-right-reverse') && entry.isIntersecting) entry.target.classList.add('animate-2-reverse')
        else entry.target.classList.remove('animate-2-reverse')

		// if (entry.isIntersecting) entry.target.classList.add('animate')
		// else entry.target.classList.remove('animate')
	})
}, {
	threshold: 0.7 //How much of the element needs to show for animation (0.5 === 50%)
});

for (let i = 0; i < animation_elements.length; i++) observer.observe(animation_elements[i])