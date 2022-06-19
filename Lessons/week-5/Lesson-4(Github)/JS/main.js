// ! git init
// 1. Создается (инициализируется) локальное хранилище

// ! git add название_файла (либо символю. (точка) для того чтобы добавить все файлы)
// 2. Выбираются файл или все файлы, которые нужно отправить на удалённый репозиторий (GitHub)

// ! git commit -m "название коммита"
// 3. git прослеживает и отмечает для себя произведенные изменения в проекте

// ! git branch
// этой командой можно посмотреть какие ветки существуют

// ! git branc название_новой_ветки
// этой командой создается новая ветка

// ! git checkout название_ветки
// 4. Создается или выбирается нужная ветка, в которую сохраняются изменения

// ! git checkout -b название_новой_ветки
// Создаем новую ветку и сразу же переходим на неё

// ! git URL
// 5. Добавляется URL ссылка на удалённое хранилище

// ! git push название_репозитория(origin) название_ветки
// 6. Все изменения загружаются в хранилище на GitHub, обычно говорят пушаться


//! Лифт
let elevator = {
    current: 1,
    max: 16,
    min: 1,
    printFloor(){
        console.log(this.current);
    },
    upOneFloor(){
        if(this.current >= this.min && this.current < this.max){
            this.current++;
            this.printFloor();
        }else{
            console.log("Error")
        }
    },
    downOneFloor(){
        if(this.current > this.min && this.current <= this.max){
            this.current--;
            this.printFloor()
        }else{
            console.log("Error");
        }
    },
    toFloor(floor){
        if(floor >= this.min && floor <= this.max){
            while(this.current < floor){
                this.upOneFloor()
            }
        }else{
            console.log("Error")
        }
    }
};
elevator.printFloor();
elevator.upOneFloor();
elevator.upOneFloor();
elevator.downOneFloor();
elevator.downOneFloor();
elevator.toFloor(8);  