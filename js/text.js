$.fn.typingText = function (speed) {

    let items = $(this);    
    let flag = false;

    function typingText(item) {
        let originText = item.textContent
        let text = item.getAttribute('typing')
        let textLength = text.length
        let splitText = text.split('');

        item.textContent = 'ㅤ';

        let i = 0;
        let interval = setInterval(() => {
            if (i != textLength) {
                item.textContent += splitText[i];
                i++;
            } else {

                let setOriginText = setInterval(() => {
                    item.textContent = originText;
                    flag = false;
                    clearInterval(setOriginText);
                }, 1000);
                
                clearInterval(interval);

            }
        }, speed)

    }

    items.each((index, item) => {

        $(item).on('mouseover', () => {

            if (flag == false) {
                flag = true;
                typingText(item)
            }

        });

    })

}