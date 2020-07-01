import React from "react";
import Page from "./page";
import Content from "./content-maker";
import { dates, DateToString, TimeToString } from "./dates";

const Component = props => {
  const content = (
    <Content
      content={[
        // {
        //   data: "9, 10, 11 декабря",
        //   head: "Украшения к одежде: для кого, для чего, как?",
        //   link: "/jewelry",
        //   descript: "Очно, 3 встречи"
        // },
        // {
        //   data: "24 декабря",
        //   head: "Личный бренд в индустрии моды, с чего начать?",
        //   link: "/master-class",
        //   descript: "Очно, 19:00 открытая встреча"
        // }
        // {
        //   data: DateToString(dates.masterClasses.poorFashion1),
        //   head: "«Бедная» мода: прошедшее будущее (часть 1)",
        //   link: "/master-class",
        //   descript: "Online, 10:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.changingWorld),
        //   head:
        //     "Кто меняет моду сегодня? Разбор профессий стилиста, имиджмейкера и шопера.",
        //   link: "/master-class",
        //   descript: "Очно, 14:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.poorFashion2),
        //   head: "«Бедная» мода: прошедшее будущее (часть 2)",
        //   link: "/master-class",
        //   descript: "Online, 10:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.psyhologyColor),
        //   head: "Психология цвета, актуальные цвета 2020",
        //   link: "/master-class",
        //   descript: "Очно, 19:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.interiorDesigner),
        //   head: "Профессия дизайнер интерьеров",
        //   link: "/master-class",
        //   descript: "Online, 19:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.spectacularLook),
        //   head:
        //     "Как с помощью аксессуаров создать эффектный образ и разнообразить гардероб",
        //   link: "/master-class",
        //   descript: "Очно, 19:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.smm),
        //   head: "SMM: всё, что нужно знать…",
        //   link: "/master-class",
        //   descript: "Online, 19:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.nonVerbal),
        //   head: "Невербальные коммуникации в бизнесе",
        //   link: "/master-class",
        //   descript: "Очно, 19:00 тренинг"
        // },
        // {
        //   data: DateToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part1
        //   ),
        //   head: "Философия японской моды (часть 1)",
        //   link: "/master-class",
        //   descript: "Online, 11:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.personalBrandInNet),
        //   head: "Личный бренд и продвижение в сети",
        //   link: "/master-class",
        //   descript: "Online, 19:00 лекция"
        // },
        // {
        //   data: DateToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part2
        //   ),
        //   head: "Философия японской моды (часть 2)",
        //   link: "/master-class",
        //   descript: "Online, 11:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.trandsInMakeup),
        //   head: "Тренды в макияже 2020",
        //   link: "/master-class",
        //   descript: "Очно, 19:00 лекция"
        // },
        // {
        //   data: DateToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part3
        //   ),
        //   head: "Философия японской моды (часть 3)",
        //   link: "/master-class",
        //   descript: "Online, 11:00 лекция"
        // },
        // {
        //   data: DateToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part4
        //   ),
        //   head: "Философия японской моды (часть 4)",
        //   link: "/master-class",
        //   descript: "Online, 11:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.selfStyle.part1),
        //   head: "Сам себе стилист, Часть 1",
        //   link: "/master-class",
        //   descript: "Online, 20:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.stylisWork),
        //   head: "Кем и как может работать стилист?",
        //   link: "/master-class",
        //   descript: "Очно, 19:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.drienVanNoten),
        //   head: "Трагедия и праздник Dries Van Noten SPRING 2020",
        //   link: "/master-class",
        //   descript: "Online, 11:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.selfStyle.part2),
        //   head: "Сам себе стилист, Часть 2",
        //   link: "/master-class",
        //   descript: "Online, 10:30 лекция"
        // },
        // {
        //   data: DateToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part5
        //   ),
        //   head: "Философия японской моды (часть 5)",
        //   link: "/master-class",
        //   descript: "Online, 11:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.prAttacks),
        //   head: "PR-атака: креативные войны в публичном пространстве",
        //   link: "/master-class",
        //   descript: "Очно, 19:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.alexanderMcQueen),
        //   head:
        //     "Слабость героической женщины Маккуина. Alexander McQueen FALL 2020",
        //   link: "/master-class",
        //   descript: "Online, 20:30 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.intervewShabalina),
        //   head:
        //     "Интервью с имиджмейкером-стилистом, коучем, преподавателем ВШСДТ Светланой Шабалиной",
        //   link: "/master-class",
        //   descript: `Online, ${TimeToString(
        //     dates.masterClasses.intervewShabalina
        //   )}`
        // },
        // {
        //   data: DateToString(dates.masterClasses.selfStyle.part3),
        //   head: "Сам себе стилист, Часть 3",
        //   link: "/master-class",
        //   descript: `Online, ${TimeToString(
        //     dates.masterClasses.selfStyle.part3
        //   )} лекция`
        // },
        // {
        //   data: DateToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part6
        //   ),
        //   head: "Философия японской моды (часть 6)",
        //   link: "/master-class",
        //   descript: `Online, ${TimeToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part6
        //   )} лекция`
        // },
        // {
        //   data: DateToString(dates.masterClasses.intervewProhorovich),
        //   head:
        //     "Интервью с преподавателем ВШСДТ, специалистом по фешн-маркетингу и коммуникациям Еленой Прохорович",
        //   link: "/master-class",
        //   descript: `Online, ${TimeToString(
        //     dates.masterClasses.intervewProhorovich
        //   )}`
        // },
        // {
        //   data: DateToString(dates.masterClasses.schiaparelli),
        //   head: "Мечтатель в дневное время. Schiaparelli FALL 2020",
        //   link: "/master-class",
        //   descript: "Online, 11:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.psyhologyColor),
        //   head: "Психология цвета, актуальные цвета 2020",
        //   link: "/master-class",
        //   descript: "Очно, 19:00 лекция"
        // },
        // {
        //   data: DateToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part7
        //   ),
        //   head: "Философия японской моды (часть 7)",
        //   link: "/master-class",
        //   descript: `Online, ${TimeToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part7
        //   )} лекция`
        // },
        // {
        //   data: DateToString(dates.masterClasses.personalBrand),
        //   head: "Личный бренд, путь к увеличению прибыли",
        //   link: "/master-class",
        //   descript: "Очно, 19:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.trands),
        //   head: "Тренды и трендсеттеры, стиль в одежде 2020",
        //   link: "/master-class",
        //   descript: "Очно, 19:00 лекция"
        // },
        // //Роскошь и спорт буржуазии. Hermès FALL 2020
        // {
        //   data: DateToString(dates.masterClasses.hermes),
        //   head: "Роскошь и спорт буржуазии. Hermès FALL 2020",
        //   link: "/master-class",
        //   descript: "Online, 20:30 лекция"
        // },
        // {
        //   data: DateToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part8
        //   ),
        //   head: "Философия японской моды (часть 8)",
        //   link: "/master-class",
        //   descript: `Online, ${TimeToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part8
        //   )} лекция`
        // },
        // {
        //   data: DateToString(dates.masterClasses.selfStyle.part4),
        //   head: "Сам себе стилист, Часть 4",
        //   link: "/master-class",
        //   descript: `Online, ${TimeToString(
        //     dates.masterClasses.selfStyle.part4
        //   )} лекция`
        // },
        // {
        //   data: DateToString(dates.masterClasses.crowdReaction),
        //   head: "Как предсказать реакцию толпы на работу имиджмейкера?",
        //   link: "/master-class",
        //   descript: "Очно, 19:00 лекция"
        // },
        // {
        //   data: DateToString(dates.masterClasses.selfStyle.part5),
        //   head: "Сам себе стилист, Часть 5",
        //   link: "/master-class",
        //   descript: `Online, ${TimeToString(
        //     dates.masterClasses.selfStyle.part5
        //   )} лекция`
        // },
        // {
        //   data: DateToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part9
        //   ),
        //   head: "Философия японской моды (часть 9)",
        //   link: "/master-class",
        //   descript: `Online, ${TimeToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part9
        //   )} лекция`
        // },
        // {
        //   data: DateToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part10
        //   ),
        //   head: "Философия японской моды (часть 10)",
        //   link: "/master-class",
        //   descript: `Online, ${TimeToString(
        //     dates.masterClasses.japanesFashionPhilosophy.part10
        //   )} лекция`
        // }
        {
          data: dates.masterClasses.colorMeanings,
          head: "Цвет: смыслы, символы, тренды",
          link: "/master-class",
          type: "Онлайн",
          descript: ""
        }
      ]}
    />
  );

  return (
    <div>
      <Page
        index={2}
        inner={true}
        content={
          content
          // <p
          //   style={{
          //     fontFamily: "inherit",
          //     fontSize: "1em",
          //     fontWeight: 400,
          //     textAlign: "left",
          //     color: "rgb(100,100,100)"
          //   }}
          // >
          //   На текущий момент нет запланированных лекций и мастер-классов.
          // </p>
        }
        head="Лекции и мастер-классы"
        descript="(Документ об окончании: Диплом о профессиональной переподготовке установленного государством образца)"
      />
    </div>
  );
};

export default Component;
