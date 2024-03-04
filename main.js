$(document).ready(function () {
    /*Функция рандомного ответа*/
    function answer(textAnswer) {
        var randAnsw = (Math.random() * 10).toFixed(1);
        /*Положительные ответы*/
        if (randAnsw >= 0 && randAnsw <= 0.4) {
            textAnswer = ("Бесспорно");
        } else if (randAnsw >= 0.5 && randAnsw <= 0.9) {
            textAnswer = ("Предрешено");
        } else if (randAnsw >= 1 && randAnsw <= 1.4) {
            textAnswer = ("Никаких сомнений");
        } else if (randAnsw >= 1.5 && randAnsw <= 1.9) {
            textAnswer = ("Определённо да");
        } else if (randAnsw >= 2 && randAnsw <= 2.4) {
            textAnswer = ("Можешь быть уверен в этом");
        }
        /*Нерешительно Положительные ответы*/
        else if (randAnsw >= 2.5 && randAnsw <= 2.9) {
            textAnswer = ("Мне кажется — «да»");
        } else if (randAnsw >= 3 && randAnsw <= 3.4) {
            textAnswer = ("Вероятнее всего");
        } else if (randAnsw >= 3.5 && randAnsw <= 3.9) {
            textAnswer = ("Хорошие перспективы");
        } else if (randAnsw >= 4 && randAnsw <= 4.4) {
            textAnswer = ("Знаки говорят — «да»");
        } else if (randAnsw >= 4.5 && randAnsw <= 4.9) {
            textAnswer = ("Да");
        }
        /*Нейтральные*/
        else if (randAnsw >= 5.0 && randAnsw <= 5.4) {
            textAnswer = ("Пока не ясно, попробуй снова");
        } else if (randAnsw >= 5.5 && randAnsw <= 5.9) {
            textAnswer = ("Спроси позже");
        } else if (randAnsw >= 6.0 && randAnsw <= 6.4) {
            textAnswer = ("Лучше не рассказывать");
        } else if (randAnsw >= 6.5 && randAnsw <= 6.9) {
            textAnswer = ("Сейчас нельзя предсказать");
        } else if (randAnsw >= 7 && randAnsw <= 7.4) {
            textAnswer = ("Сконцентрируйся и спроси опять");
        }
        /*Отрицательные*/
        else if (randAnsw >= 7.5 && randAnsw <= 7.9) {
            textAnswer = ("Даже не думай");
        } else if (randAnsw >= 8 && randAnsw <= 8, 4) {
            textAnswer = ("Мой ответ — «нет»");
        } else if (randAnsw >= 8.5 && randAnsw <= 8.9) {
            textAnswer = ("По моим данным — «нет»");
        } else if (randAnsw >= 9 && randAnsw <= 9.4) {
            textAnswer = ("Перспективы не очень хорошие");
        } else if (randAnsw >= 9.4 && randAnsw <= 9.9) {
            textAnswer = ("Весьма сомнительно");
        } else {
            ("Попробуй снова");
        };
        return textAnswer;
    }
    /*Вызов вункции по клику и эффекты*/
    $('#ball_bg').bind("click", function () {
        $('#ball_bg')
            .animate({
                top: "+=8"
            }, 40, function () {
                $('#ball_wind_inner_text').html("");
            })
            .animate({
                top: "-=12"
            }, 50)
            .animate({
                top: "+=12"
            }, 40)
            .animate({
                top: "-=8"
            }, 50, function () {
                setTimeout(function () {
                    $('#ball_wind_inner_text').html(answer());
                }, 190);
            });
    });

});



