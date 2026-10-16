const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}



const typingItems = [
    {
        element: document.querySelector("#typing-greeting"),
        text: "hi, i'm rojina.",
        speed: 40
    },
    {
        element: document.querySelector("#typing-line-1"),
        text: "i'm a sophomore at mit studying computer science & artificial intelligence (6-4) and mathematical economics (14-2).",
        speed: 12
    },
    {
        element: document.querySelector("#typing-line-2"),
        text: "i build software, ai systems, and data pipelines, with a focus on turning complex technical problems into useful, real-world solutions.",
        speed: 12
    }
];



function typeText(element, text, speed) {
    return new Promise((resolve) => {

        if (!element) {
            resolve();
            return;
        }

        element.classList.add("typing-active");

        let index = 0;

        function typeNextCharacter() {

            if (index < text.length) {

                element.textContent += text.charAt(index);

                index++;

                setTimeout(
                    typeNextCharacter,
                    speed
                );

            } else {

                element.classList.remove("typing-active");

                resolve();

            }
        }

        typeNextCharacter();
    });
}


async function runTypingAnimation() {

    for (const item of typingItems) {

        await typeText(
            item.element,
            item.text,
            item.speed
        );

        await new Promise((resolve) => {
            setTimeout(resolve, 100);
        });

    }
}


runTypingAnimation();