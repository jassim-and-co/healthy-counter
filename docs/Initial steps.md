1.  create a folder 'javascript-puzzles'
2.  git clone https://github.com/jassim-and-co/javascript-puzzles ./javascript-puzzles
3.  cd ./javascript-puzzles
4.  npm install
5.  git pull #синхронизировать код
6.  npm start # запустить веб-сервер
7.  git push # отправить свои изменения

# How to update

* Change file
* Save file
* Commit file (thirst button is a sidebar)
* git push

0. Скопируйте файлы в каталог, который собираетесь синхронизировать с GitHub
1. Инициализируйте репозиторий git командой git init в этом каталоге
2. Добавьте файлы к коммиту командой git add .
3. Закоммитите изменения: git commit -m "first commit"
4. Добавьте удаленный сервер:
git remote add origin git@github.com:<username>/<project>.git

5. Синхронизируйте коммиты с GitHub'ом: git push -u origin master