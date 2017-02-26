This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Итоговый проект

Приложение, которое отображает на карте достопримечательности, связанные с известными личностями.
На главной странице расположена карта. 
В правой части при первом открытии приложения присутствуют только ссылки входа в личный кабинет и регистрации, а также категории, на которые подразделены известные личности.
При клике на одну из категорий ниже списка категорий появляется блок со списком людей, принадлежащий выбранной категории.
При клике на любого человека из этого списка на карте отмечаются места, как-то связанные с этим человеком. При клике на Пржевальского пока что ничего не происходит, просто звучит ржание лошади.
При клике на одну из этих меток, рядом с ней появляется небольшое окно с названием и описанием места. В правом верхнем углу этого окна есть две иконки: крестик и звездочка. Это информационное окно можно закрыть, кликнув на крестик, либо добавить в избранный список, при нажатии на звёздочку. Добавление в список избранных мест возможно только, если пользователь зашёл в свой личный кабинет.

Если у пользователя пока нет личного кабинета, то ему необходимо зарегистрироваться. Сделать это можно, перейдя по соответствующей ссылке на главной странице приложения. Все регистрационные данные(логин и пароль) хранятся в localStorage.
На странице регистрации для регистрации необходимо ввести логин и 2 раза пароль. Если повторный пароль не совпадает, появляется  уведомляющее об этом всплывающее окно. Если такой пользователь уже существует, то также появляется всплывающее окно с просьбой придумать другой логин. Также пользователь может перейти по ссылке на страницу входа в личный кабинет, если он уже зарегистрирован, либо вернуться по ссылке на главную страницу. При успешной регистрации сразу же автоматически открывается главная страница приложения.
На странице входа в личный кабинет есть 2 поля ввода - логин и пароль. Если пароль не правильный, то появляется всплывающее окно, уведомляющее об этом. Если пользователь ввёл верные логин и пароль, то при нажатии на кнопку "Войти", он автоматически переходит на главную страницу приложения.
Когда пользователь зашёл, под своим именем, то на главной странице пропадают ссылки входа и регистрации, вместо них появляется кнопка выхода. При нажатии на неё, пользователь выходит из личного кабинета.
Когда пользователь зашёл под своим именем, то он может сохранять места на карте в избранный список. В списке отображается название места. При клике на него, место отображается на карте и рядом с ним появляется окошко с полной информацией об этом месте. Информация об избранных местах так же хранится в localStorage.
