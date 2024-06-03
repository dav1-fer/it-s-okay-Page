const h3Element = document.getElementById('changingText');
        const alternateTexts = [
            "YOU NEED TO TAKE THINGS SLOW RIGHT NOW",
            "YOU’RE NOT AT INBOX ZERO",
            "EVERYTHING DIDN’T GET DONE TODAY",
            "YOU CHANGE YOUR MIND",
            "YOU LET GO OF AN IDEA",
            "THINGS AREN’T WHAT YOU EXPECTED",
            "YOU NEED TO SAY “NO”",
        ]; // Array containing the alternate texts

        let index = 0;

        // Function to change text
        function changeText() {
            h3Element.textContent = alternateTexts[index];
            index = (index + 1) % alternateTexts.length; // Loop through alternate texts
        }

        // Call changeText function time duration
        setInterval(changeText, 350);