import React from "react";
import Pattern from "./pattern";
import { style } from "./style";
import List from "../../components/list";

const Rukovodstvo = props => {
  const content = [
    {
      fio: "Кононец (Шабалина) Светлана Александровна",
      position: (
        <span>
          Преподаватель ВШСДТ. Практикующий коуч-стилист, дизайнер одежды, автор
          блога{" "}
          <a href="https://www.facebook.com/look.style.inside">Style Inside</a>
        </span>
      ),
      disciplines:
        "Индивидуальная стилистика образа (теория стилевых направлений, профессиональная колористика, ассоциативный подход в стиле, алгоритм создания индивидуальной формулы стиля)",
      specialisation:
        "Юридический факультет Орловский Государственный Университет, юриспруденция.",
      prof: (
        <List
          arr={[
            "НОУ «Образование и карьера», модельер-конструктор одежды.",
            "«Имиджмейкер (шопер). Базовый курс», Высшая школа стилистики.",
            "«Стилист-имиджмейкер. Повышение квалификации», Высшая школа стилистики.",
            "«Стилистика образа», Высшая школа Стиля Наталии Туркенич.",
            "«Техника составления луков», Высшая школа Стиля Наталии Туркенич.",
            "«Создание образа в фэшн-фотографии 20в.», Высшая школа Стиля Наталии Туркенич.",
            "«Аrt-подготовка», студия Любови Михайловны Поповой.",
            "«Мода как искусство», студия Любови Михайловны Поповой.",
            "«Искусство комплекта», «Секреты от кутюр», Школа образных решений «IDEA-class».",
            "«Большие исторические стили», студия Любови Михайловны Поповой.",
            "«Коуч-стилист», Школа образных решений «IDEA-class»"
          ]}
          num="none"
        />
      ),
      experiensFull: "Общий стаж в стилистике — 9 лет",
      experiens: "Преподавательская деятельность — 6 лет",
      degree: "",
      rank: ""
    }
  ];

  return (
    <div>
      <Pattern
        title="Руководство и педагогиический состав"
        content={
          <div>
            <h3 style={style.h3}>Руководство</h3>
            <List
              arr={[
                "Генеральный директор: Гулиенко Иван Анатольевич",
                "Контактный телефон: +7 (915) 034-20-20",
                <span>
                  Адрес электронной почты:{" "}
                  <a href="mailto:info@styleschool.ru">info@styleschool.ru</a>
                </span>,
                "Приемные часы:  понедельник-пятница с 10:00 до 18:00"
              ]}
              num="none"
            />
            <h3 style={style.h3}>Преподавательский состав</h3>
            <div
              style={{
                maxWidth: 1000,
                overflow: "auto"
              }}
            >
              <table>
                <thead>
                  <tr>
                    <td colspan={9} style={style.thead}>
                      Информация о персональном составе педагогических
                      работников
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={style.th}>ФИО</td>
                    <td style={style.th}>Должность</td>
                    <td style={style.th}>Преподаваемые дисциплины</td>
                    <td style={style.th}>
                      Наименование направления подготовки и (или) специальности
                    </td>
                    <td style={style.th}>
                      Данные о повышении квалификации и (или) профессиональной
                      переподготовке (при наличии)
                    </td>
                    <td style={style.th}>Общий стаж работы</td>
                    <td style={style.th}>Стаж работы по специальности</td>
                    <td style={style.th}>Ученая степнь (при наличии)</td>
                    <td style={style.th}>Ученое звание (при наличии)</td>
                  </tr>
                  {content.map((person, i) => (
                    <tr>
                      <td style={style.td}>{person.fio}</td>
                      <td style={style.td}>{person.position}</td>
                      <td style={style.td}>{person.disciplines}</td>
                      <td style={style.td}>{person.specialisation}</td>
                      <td style={style.td}>{person.prof}</td>
                      <td style={style.td}>{person.experiensFull}</td>
                      <td style={style.td}>{person.experiens}</td>
                      <td style={style.td}>{person.degree}</td>
                      <td style={style.td}>{person.rank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Rukovodstvo;
