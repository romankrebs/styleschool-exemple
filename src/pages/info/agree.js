import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Paragraph from "./paragraph";
import Page from "../../components/page";

export default function Info() {
  return (
    <div>
      <Helmet>
        <title>
          Информация для пользователей | Пользовательское соглашение
        </title>
        <meta name="keywords" content="ВШС: Пользовательское соглашение" />
      </Helmet>
      <Page lable="Пользовательское соглашение" lableMobile="">
        <Grid
          container
          justify="center"
          style={{
            background: "url(/img/info/fullscreen.jpg) left top/cover no-repeat"
          }}
          alignItems="flex-start"
        >
          <Grid item xs={12} md={12}>
            <div style={{ height: 100 }} />
          </Grid>
          <Grid item xs={12} md={12}>
            <h1
              style={{
                padding: 10,
                paddingLeft: 20,
                margin: 0,
                background: "rgba(255,255,255,0.8)",
                fontFamily: "Roboto",
                fontSize: "2em",
                fontWeight: 700,
                color: "rgb(80,80,80)",
                textAlign: "left",
                boxSizing: "border-box"
              }}
            >
              Информация для пользователей
              <br />
              <span style={{ color: "rgb(123,143,87)" }}>/&nbsp;</span>
              Пользовательское соглашение
            </h1>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: "5%" }}>
            <Paragraph
              content={[
                <b>
                  Пользовательское соглашение (Договор) на приобретение Услуг
                </b>,
                "В соответствии со статьей 428 Гражданского кодекса Российской Федерации настоящее Пользовательское соглашение (Договр) является договором присоединения. Предложение Товаров и Услуг на портале «Высшей школы стилистики» на условиях, указанных в предложении, и условиях настоящего Соглашения, является публичной офертой.",
                <b>1. Термины и определения</b>,
                "1.1. «Высшая школа стилистики» (далее Школа) – сторона договора, продающая Товары и/или оказывающая Услуги: НОЧУ ЦДО «Высшая школа стилистики».",
                "1.2. Клиент – лицо, осуществляющее приобретение Товаров и/или Услуг, путем записи через Интернет-портал Школы",
                "1.3. Стороны – Школа и Клиент",
                "1.4. Интернет-портал - Интернет-сайт, расположенный на сервере в г. Москва и имеющий адрес в сети Интернет http://www.styleschool.ru/. На нем представлены Товары, Услуги, Курсы, в том числе Он-лайн и Видео курсы, предлагаемые Школой потенциальным клиентам.",
                "1.5. Личный кабинет – раздел Интернет-портала, доступ к которому осуществляется Клиентом путем введения логина и пароля. Личный кабинет содержит информацию о сделанных Клиентом Заказах, состоянии их обработки, суммах, подлежащих оплате Клиентом, персональные данные Клиента, консультации, а также другую информацию, предоставляемую сторонами друг другу в процессе осуществления консультаций и курсов он-лайн, оказания других Услуг.",
                "1.6. Товар – предлагаемые Школой потенциальным Клиентам товары, информация о которых размещена в Интернет-портале Школы.",
                "1.7. Услуги – предлагаемые Школой услуги, а именно консультации, курсы, тренинги и мастер-классы и другие формы услуг, реализуемые штатными и/или внештатными специаллистами, а так же выпускниками или партнерами Школы, информация о которых размещена в Интернет-портале Школы",
                "1.8. Услуги он-лайн – Услуги, которые оказываются специалистами Школы с использованием технологий для обмена информацией в сети Интернет без личной встречи с Клиентом",
                "1.9. Корзина – список Товаров, Услуг, Курсов, Видеокурсов и др. Услуг, выбранных Клиентом для приобретения.",
                "1.10. Заказ – Товары, Услуги, Курсы, Видеокурсы, выбранные Клиентом, в отношении которых сторонами заключен настоящий Договор, в том числе предварительная запись на приобретение услуг или активация Услуг, приобретенных Клиентом по сертификатам или купонам.",
                "1.11. Видеокурс – аудиовизуальное произведение, информация о котором размещена в Интернет-портале Школы, Приобретение Видеокурса - получение Клиентом ссылки для просмотра Видеокурса с использованием технологий для обмена данными в сети Интернет и приобретение Клиентом прав на просмотр Видеокурса",
                <span>
                  <b>2. Предмет Договора</b>
                  &nbsp;(Соглашения)
                </span>,
                "2.1. В зависимости от Заказа Клиента (наличие в оформленном Заказе Товаров и/или Консультаций и/или Видеокурсов) стороны принимают на себя следующие обязательства:",
                "- Школа обязуется передать Клиенту на условиях настоящего договора выбранные им Товары из числа Товаров, представленных в интернет-портале Школы, а Клиент обязуется принять и оплатить Товары. К отношениям сторон при этом применяются положения гражданского законодательства Российской Федерации о розничной купле-продаже с особенностями, установленными для продажи Товаров дистанционным способом;",
                "- Школа обязуется оказать Клиенту Услуги, выбранные Клиентом из числа Услуг, представленных в Интернет-портале (в том числе консультации или курсы он-лайн), а Клиент обязуется совершить все необходимые действия для получения Услуг и оплатить Услуги на условиях настоящего договора. К отношениям сторон при этом применяются положения гражданского законодательства Российской Федерации о возмездном оказании Услуг;",
                "- Школа обязуется предоставить Клиенту возможность просмотра Видеокурсов (с использованием технологий для передачи данных через Интернет) и право просмотра Видеокурсов на условиях настоящего договора, а Клиент обязуется оплатить предоставленные права и осуществлять просмотр Видеокурса в соответствии с условиями настоящего договора. К отношениям сторон при этом применяются положения Гражданского законодательства Российской Федерации о возмездном оказании Услуг (в части предоставления возможности просмотра Видеокурса) и о лицензионных договорах и авторских правах (в части использования Видеокурса).",
                <b>3. Порядок заключения договора.</b>,
                "3.1. Регистрация.",
                "3.1.1. Для приобретения Товаров и Услуг Школы и заключения настоящего договора Клиенту необходимо зарегистрироваться в Интернет-портале Школы и получить доступ в свой Личный кабинет, или оформить запись на приобретение Услуг или активацию Услуг, приобретенных по сертификатам или купонам.",
                "3.1.2. Для получения доступа в Личный кабинет, или в случае Записи на приобретение/активацию Услуг, Клиент обязуется заполнить соответствующую форму в Интернет-портале Школы и указать в ней следующие сведения: фамилию, имя, отчество, место проживания телефон, адрес электронной почты, а также пароль доступа (в случае получения доступа в Личный кабинет). Не позднее двух рабочих дней после получения информации от Клиента Школа направляет на электронный адрес Клиента письмо с данными, необходимыми для активации регистрации и/или подтверждающими успешную регистрацию.",
                "3.1.3. Клиент обязуется указывать достоверные сведения. Школа не несет ответственности за недостоверность или неточность информации, указанной Клиентом. Клиент осведомлен, что указание не соответствующих действительности сведений может привести к невозможности выполнения Школой своих обязательств по настоящему договору (в том числе, но не ограничиваясь, невозможность выполнения обязательств по доставке и/или передаче Товара, полную или частичную невозможность оказания Услуг он-лайн, невозможность оказания Услуг надлежащего качества и пр.). Все неблагоприятные последствия, связанные с предоставлением недостоверной информации о Клиенте, несет Клиент.",
                "3.1.4. Регистрируясь на сайте (получая доступ в Личный кабинет), или оформляя Запись на приобретение/активацию Услуг, Клиент дает свое согласие на обработку переданных Клиентом персональных данных Клиента Школой.",
                "3.1.5. Клиент обязуется не сообщать третьим лицам свои регистрационные данные (логин и пароль) и принять меры для сохранения пароля в тайне от третьих лиц. Если клиенту станет известно о возможном использовании логина и пароля третьими лицами, Клиент обязуется незамедлительно уведомить об этом Школу, обратившись в службу технической поддержки по электронной почте info@styleschool.ru или по телефонам Школы, указанным в разделе Контакты Интернет-портала.",
                "3.1.6. В целях предотвращения несанкционированного доступа к персональным данным и обеспечения их сохранности Клиент обязуется не передавать логин и пароль для использования третьим лицам. Одна регистрация (логин, пароль и созданный Личный кабинет) действительна только для одного Клиента.",
                "3.1.7. В целях надлежащего выполнения настоящего договора и обеспечения выполнения принятых на себя Школой обязательств Клиент обязуется регулярно и своевременно следить за информацией в Личном кабинете, получать сообщения, направляемые Школой в Личный кабинет или на адрес электронной почты (указанный Клиентом при регистрации или Записи), отвечать на запросы Школы.",
                "3.1.8. Школы не несет ответственности за неисполнение, просрочку исполнения или иное ненадлежащее исполнение принятых на себя обязательств, если надлежащее исполнение оказалось невозможным по причине неисполнения (либо просрочке исполнения) Клиентом его обязанности, установленной в пункте 3.1.7 настоящего договора.",
                "3.2. Оформление заказа (на вновь приобретаемые Товары, Услуги, Видеокурсы)",
                "3.2.1. Информация о предлагаемых Товарах, Услугах, Видеокурсах предоставляется на страничке Товара, Услуги или Видеокурса в Интернет-портале. При необходимости получения дополнительной информации она предоставляется Клиенту по запросу Клиента (в его Личном кабинете либо на указанный Клиентом е-мейл, либо по телефону)",
                "3.2.2. Выбранные клиентом Товары, Услуги, Видеокурсы с указанием их полной стоимости и размера аванса, а также способ доставки и оплаты Товара отображаются в корзине Клиента. Закончив формирование заказа, Клиент нажимает на кнопку «Оформить заказ».",
                "3.2.3. Нажимая на кнопку «Оформить заказ», Клиент принимает на себя обязательства по приобретению Товаров и Услуг согласно списку, сформированному в корзине, и оплату Товаров и Услуг, в том числе Услуг по доставке, согласно условиям настоящего договора.",
                "3.2.4. Настоящий договор считается заключенным между Школой и Клиентом после нажатия Клиентом «кнопки» «оформить заказ» в Интернет-портале Школы. Настоящий договор заключается в отношении Товаров, Услуг, Видеокурсов а также Услуг по доставке и/или дополнительных Услуг, находящихся в Корзине Клиента на момент нажатия Клиентом кнопки «заказать».",
                "3.2.5. Информация о сделанном заказе отражается в Личном кабинете Клиента, а также отправляется на адрес электронной почты Клиента.",
                "3.2.6. Клиент обязуется сохранить полученное им по электронной почте письмо с информацией о заказе до полного выполнения сторонами всех обязательств по данному заказу и предъявить его в необходимых случаях, в том числе, но не ограничиваясь, для подтверждения права получения Товаров или Услуг.",
                <b>4. Оплата</b>,
                "4.1. Цена Товаров",
                "4.1.1. Цена Товаров и Услуг определяется Школой и указывается в предложении конкретного Товара или Услуги в Интернет-портале в соответствии с разделом 4.2. настоящего договора. Договор заключается по цене, указанной в Интернет-портале. После заключения договора цена заказанных Товаров и Услуг остается неизменной.",
                "4.1.2. Цена Товаров не включает стоимость доставки.",
                "4.2. Указание цены",
                "4.2.1. На странице с описанием Товара, Услуги или Видеокурса цена Товара или Услуги обозначается словом «стоимость».",
                "4.2.2. В корзине покупателя цена Товара, Услуги или Видеокурса указывается в таблице заказов в графе «наименование»/ «описание»",
                "4.2.3. В параметрах заказа, направляемых на адрес электронной почты клиента, цена Товара, Услуги или Видеокурса указывается в таблице «состав заказа» в графе «полная стоимость».",
                "4.2.4. В графах и/или разделах «доступно к оплате» указывается размер предварительной оплаты согласно разделу 4.3 настоящего договора.",
                "4.2.5. В графах и/или разделах «всего доступно к оплате» указывается размер предварительной оплаты за все заказанные Клиентом Товары и/или Услуги.",
                "4.3. Порядок оплаты",
                "4.3.1. Оплата производится одним из способов по усмотрению Клиента (а также в зависимости от способа доставки и видов Услуг):",
                "- оплата безналичными деньгами путем перечисления на расчетный счет Школы;",
                "- оплата с использованием платежных систем;",
                "- оплата наличными курьеру Компании, действующей на основании Договора со Школой.",
                "4.3.2. Оплата наличными деньгами курьеру возможна только при условии заказа Товара с условием о доставке Товара курьерской службой.",
                "4.3.3. Для получения счета к оплате Клиент должен самостоятельно и за свой счет прибыть в офис Школы.",
                "4.3.4. Порядок и условия оплаты с использованием банковских карт определяются банками или организациями, выпустившими карту или осуществляющими прием и проведение платежа.",
                <span>
                  4.3.5. Список платежных систем, с помощью которых можно
                  произвести оплату Товаров и Услуг Школы указан в
                  Интернет-портале в разделе «Информация для покупателей».
                  Порядок и условия оплаты с использованием платежных систем
                  определяются платежными системами. С условиями Клиент может
                  ознакомиться на сайтах платежных систем, а также получить по
                  электронной почте по запросу в службу технической поддержки{" "}
                  <a href="mailto:info@styleschool.ru">info@styleschool.ru</a>.
                </span>,
                "4.3.6. Школа не несет ответственности за своевременность осуществления платежей банками, платежными системами и иными организациями, участвующими в осуществлении платежей, и не может влиять на обязательства и качество выполнения обязательств банков, платежных систем и иных организаций по осуществлению платежей.",
                "4.3.7. Клиент обязуется своевременно оплатить заказанные Товары и Услуги в сроки, установленные п. 4.3.8, 4.3.10 настоящего договора.",
                "4.3.8. Клиент обязуется не позднее 10 дней после заключения настоящего договора внести предварительную оплату (полную или частичную) Товаров, Услуг и Видеокурсов, если иное не предусмотрено иными договорами между Климентом и Школой. Размер предварительной оплаты рассчитывается Школой при формировании заказа и указывается в корзине Клиента при заключении настоящего договора в графе «доступно к оплате».",
                "4.3.9. При невнесении Клиентом предварительной оплаты за заказанные Товары, Услуги и Видеокурсы по прошествии 10 дней с даты заключения настоящего договора, Школа вправе расторгнуть договор в одностороннем порядке, направив уведомление о расторжении договора в персональный кабинет Клиента и на адрес электронной почты Клиента.",
                "4.3.10. Клиент обязуется произвести полную оплату Товаров и Услуг в следующие сроки: Товаров – не позднее предоставления Товара в собственность Клиента; Услуг (за исключением Консультаций он-лайн) – не позднее оказания Услуг Клиенту, если иное не регламентируется дополнительным соглашением сторон;",
                "Консультаций он-лайн –до предоставления он-лайн сессии, если иное не регламентируется иными договорами между Климентом и Школой;",
                "Услуг по доставке – не позднее 10 дней с даты направления клиенту параметров заказа на доставку.",
                "Видеокурсов – не позднее 10 дней с даты заключения договора",
                "4.3.11. Днем оплаты (в том числе днем внесения предварительной оплаты) считается день поступления денежных средств на счет Школы (при безналичной оплате, при оплате картами или с использованием платежных систем), в кассу Школы (при оплате наличными), либо день передачи денежных средств курьеру, осуществляющему доставку Товара.",
                "4.3.12. Клиент обязуется хранить документы, подтверждающие оплату Товаров, Услуг и Видеокурсов до получения от Школы подтверждения поступлении оплаты от Клиента.",
                <b>5. Особенности продажи Товаров</b>,
                "5.1. Резервирование Товара",
                "5.1.1. После заключения настоящего договора Школа резервирует заказанный Клиентом Товар до получения оплаты за Товар. Обязанность по передаче Товара Клиенту возникает только после получения оплаты за Товар. При невнесении Клиентом оплаты в установленный настоящим договором срок Школа вправе расторгнуть настоящий договор и освобождается от каких-либо обязательств по резервированию Товара для Клиента и передаче Товара Клиенту.",
                "5.1.2. Школа обязуется подготовить Товар для доставки Клиенту не позднее 3 рабочих дней после получения оплаты за Товар. О готовности Товара к доставке Школа уведомляет Клиента в Личном кабинете.",
                "5.2. Передача Товаров",
                "5.2.1. Школа обязуется передать Товар непосредственно Клиенту либо лицу, предъявившему направленные Клиенту по электронной почте параметры Заказа.",
                "5.2.2. Представитель Школы или представитель компании, осуществляющей доставку курьерской службой, в целях надлежащего выполнения настоящего договора, вправе потребовать у лица, получающего Товар, документы, удостоверяющие личность (паспорт).",
                "5.2.3. Товар передается Клиенту:",
                "- по адресу, указанному Клиентом, в пределах Российской Федерации при заказе с условием о доставке курьерской службой.",
                "5.2.4. Право собственности на Товар и риск его случайной гибели переходит к Клиенту одновременно с передачей Товара.",
                "5.2.5. Передача Товаров оформляется актом приема-передачи (при передаче Товара «без доставки») либо документом по форме, установленной организацией, осуществляющей доставку курьерской службой, или при доставке Товара с использованием Услуг такой организации.",
                "5.3. Доставка",
                "5.3.1. Выбор способа доставки Товара осуществляется Клиентом одновременно с заказом Товара.",
                "5.3.2. Доставка возможна одним из нижеуказанных способов: - Без доставки (получение Товара в Школе) - Доставка курьерской службой доставки в пределах Российской Федерации, в том числе по Москве (в пределах МКАД).",
                "5.3.3. Доставка Товаров за пределы Российской Федерации не производится.",
                "5.3.4. Если Клиент не выбрал способа доставки, то Товар должен быть получен Клиентом на условиях «без доставки».",
                "5.3.5. Получение Товара без доставки.",
                "5.3.5.1. При приобретении Товара на условиях «Без доставки» Клиент принимает на себя обязательство получить заказанный Товар по адресу: город Москва, ул. Верхняя Радищевская, д. 9, стр. 4, офис 203. Передача Товара осуществляется в рабочее время согласно установленному режиму работу Школы. Клиент обязуется принять Товар не позднее 14 дней после направления Школой уведомления о готовности Товара к передаче Клиенту.",
                "5.3.5.2. Если Клиент не принял Товар в течение установленного выше срока, Школа вправе в одностороннем порядке расторгнуть договор в части приобретения Товара, направив соответствующее уведомление Клиенту в Личный кабинет. Внесенная Клиентом оплата за Товар возвращается Клиенту в установленном порядке.",
                "5.3.6. Доставка курьерской службой",
                "5.3.6.1. Оказание Услуги доставки курьерской службой оформляется в порядке, предусмотренном п. 8.10 договора.",
                "5.3.6.2. Стоимость доставки определяется индивидуально для каждого заказа Школой в зависимости от размера/веса заказа и адреса доставки.",
                "5.3.6.3. Доставка осуществляется с использованием Услуг третьих лиц – компаний, осуществляющих доставку почтой или курьерской службой. Выбор компании, осуществляющей доставку, Клиент согласовывает с менеджером Школы.",
                "5.3.6.4. Стоимость доставки Товара клиенту соответствует стоимости выполнения Услуг по доставке соответствующего отправления от Школы Клиенту, установленной компанией, осуществляющей доставку, и действующей на день отправки Товара.",
                "5.3.6.5. Доставка и передача Товара осуществляются по правилам, установленным компанией, осуществляющей доставку. С правилами компаний можно ознакомиться на сайтах компаний, осуществляющих доставку. Правила могут быть также направлены Школой Клиенту по электронной почте по запросу Клиента.",
                "5.3.6.6. Школа обязуется передать Товар в компанию, осуществляющую доставку, не позднее 3 рабочих дней после оплаты Клиентом Товара и Услуг по доставке Товара.",
                "5.3.6.7. Срок доставки состоит из срока, установленного в п. 5.3.6.6. настоящего договора (срок передачи Товара для доставки) и срока, установленного компанией, осуществляющей доставку, для доставки отправления от Школы до адреса доставки, указанного Клиентом. Срок доставки исчисляется со дня оплаты Клиентом Товаров и Услуг по доставке.",
                "5.3.6.8. Доставка осуществляется по адресу, указанному Клиентом. Адрес доставки указывается также в карточке заказа, направляемой Школой Клиенту при оформлении Услуги Доставки. Клиент обязуется указывать такой адрес, по которому возможно получение заказанного Товара по рабочим дням в рабочее время компании, осуществляющей доставку.",
                "5.3.6.9. Клиент обязуется получить Товар по указанному Клиентом адресу доставки. При отсутствии Клиента или лица, уполномоченного на получение Товара, Школа вправе расторгнуть договор в части продажи неполученного Товара в одностороннем порядке. При этом Клиенту возвращается внесенная им оплата за Товар. Стоимость доставки возврату не подлежит.",
                "5.3.6.10. Повторная доставка Товара возможна только по соглашению сторон. Повторная доставка производится за счет Клиента.",
                "5.4. Возврат денежных средств",
                "5.4.1. Возврат денежных средств Клиенту при удовлетворении требований о возврате Товара осуществляется одним из способов по выбору клиента:",
                "б) почтовым переводом;",
                "в) путем перечисления соответствующей суммы на банковский или иной счет Клиента, указанный Клиентом.",
                "5.4.2. Для возврата денежных средств Клиент обязан указать в соответствующем заявлении либо претензии способ возврата, а также необходимые для возврата денежных средств реквизиты. Школа не несет ответственности за просрочку возврата, вызванную невыполнением Клиента обязанности по указанию способа возврата и необходимых реквизитов.",
                "5.4.3. При отказе Клиента от Товара надлежащего качества в случаях, предусмотренных . 5.4.9. и 5.4.13 настоящего договора, возврат денежных средств осуществляется в течение 10 дней с момента получения заявления на возврат Товара. При предъявлении Клиентом претензии в связи с ненадлежащим качеством Товара, рассмотрение претензии и возврат денежных средств, если Товар действительно имеет недостатки, осуществляется в течение 10 дней со дня получения Школой Товара и претензии.",
                <b>6. Особенности оказания Услуг</b>,
                "6.1. Общие условия оказания Услуг",
                "6.1.1. Услуги оказываются непосредственно и исключительно лицу, осуществившему регистрацию и создание Личного кабинета, или после активации сертификата или купона. Предоставление Услуг третьим лицам допускается только с согласия Школы",
                "6.1.2. Школа оказывает Услуги как непосредственно по месту нахождения специалистов Школы, выбранного Клиентом, так и Услуги, для получения которых не требуется присутствие Клиента по месту нахождения специалиста Школы (консультации он-лайн). Консультации он-лайн предоставляются с использованием сети Интернет через Личный кабинет Клиента. Характер Услуги (Услугам по месту нахождения Школы либо консультация он-лайн) указывается в описании Услуги в Интернет-портале.",
                "6.1.3. Для получения Услуги Клиент обязуется внести предварительную оплату за Услугу согласно разделу 4.4. настоящего договора. Услуги оказываются только после внесения предварительной оплаты.",
                "6.1.4. Клиент имеет право в любое время отказаться от исполнения настоящего договора в части оказания Услуг. Для отказа от исполнения настоящего договора в части оказания Услуг клиент обязан направить уведомление Школе на адрес технической поддержки info@styleschool.ru либо передать его непосредственно представителю Школы. При этом клиент обязан оплатить Школе уже оказанные Услуги и/или оплатить фактически понесенные расходы, включая расходы, определенные согласно п. 6.1.11 настоящего договора. Возврат денежных средств осуществляется в порядке, установленном п. 5.4. настоящего договора.",
                "6.1.5. Невыполнение клиентом его обязательств, предусмотренных пунктами 6.2.3, 6.3.4. при отсутствии уведомления от Клиента об отказе от исполнения договора не является отказом Клиента от исполнения договора и влечет за собой невозможность оказания Услуг, возникшую по вине Клиента. Такие Услуги, оказание которых оказалось невозможным по вине Клиента, подлежат оплате Клиентом в полном объеме.",
                "6.1.6. Школа обязуется обеспечить оказание Услуг силами консультанта, который был выбран Клиентом при оформлении заказа. При невозможности оказания Услуг выбранным консультантом Клиент имеет право отказаться от Услуги. Замена консультанта допускается только по соглашению сторон.",
                "6.1.7. Клиент обязан исключить получение Услуг в состоянии алкогольного, наркотического или токсического опьянения.",
                "6.1.8. Школа вправе временно воздержаться от оказания Услуг, если есть достаточные основания полагать, что Клиент находится в состоянии алкогольного, наркотического или токсического опьянения. В этом случае Школа обязана проинформировать Клиента о причинах отказа в незамедлительном оказании Услуг. Время и дата консультации (оказания Услуг), взамен не состоявшейся, определяются впоследствии по соглашению сторон.",
                "6.1.9. При неоднократном нарушении Клиентом требования, установленного п. 6.1.7 настоящего договора. Школа вправе расторгнуть настоящий договор в части оказания Услуг в одностороннем порядке. При этом Клиент обязан оплатить уже оказанные Услуги.",
                "6.1.10. О возможных изменениях в согласованных сторонами времени и дате оказания Услуг Школа обязуется известить Клиента не позднее 18 часов 00 минут дня, предшествующему дню оказания Услуг. Новые дата и время оказания Услуг определяются по соглашению сторон.",
                "6.1.11. При расторжении договора на оказание Услуг (консультаций) до полного оказания Услуг (в том числе в случаях, предусмотренных п. 6.1.4, 6.2.7., 6.3.8. договора), Компания Школа возвращает Клиенту внесенную предварительную оплату за вычетом стоимости фактически оказанных Услуг. При расторжении договора до начала оказания Услуг (консультаций) Школа возвращает Клиенту внесенную предварительную оплату за вычетом стоимости уже произведенных Школой расходов. Такие расходы возникают вследствие выполнения Школой части принятых на себя обязательств (в том числе обработка сделанного Клиентом заказа, направление Клиенту предложений, резервирование времени Консультантов) и составляют 1000 (одну тысячу) рублей.",
                "6.2. Оказание Услуг по месту нахождения Специалиста (Консультанта) Школы",
                "6.2.1. Услуги оказываются по месту нахождения Специалиста (Консультанта). Если точный адрес и часы работы Консультанта не определены в резюме консультанта (или разделе «Контакты»), то они согласовываются Консультантом и Клиентом дополнительно.",
                "6.2.2. Оказание Услуг в ином месте и в иное время является дополнительной Услугой «выезд консультанта». Оказание этой Услуги возможно только по соглашению сторон. Стоимость и другие условия выезда консультанта определяются по соглашению сторон. Договор на оказание Услуги «выезд консультанта» может быть заключен в порядке, предусмотренном . 8.10 настоящего договора.",
                "6.2.3. Для предоставления Услуг Клиент обязуется за свой счет прибыть по месту оказания Услуг в согласованные с Консультантом или Школой дату и время.",
                "6.2.4. После оформления Заказа и получения аванса менеджер Школы не позднее трех рабочих дней связывается с Клиентом по указанному им телефону (либо электронной почте, либо через Личный кабинет) для согласования даты и времени оказания Услуг.",
                "6.2.5. Дата и время оказания Услуг согласовываются сторонами с учетом режима работы Школы, индивидуального графика работы и занятости консультанта Школы, который будет непосредственно оказывать Услуги. Школа принимает на себя обязательства предложить Клиенту три варианта возможных даты и времени оказания Услуг во временном интервале не позднее одного месяца с даты поступления аванса за Услуги. При не достижении соглашения о времени и дате оказания Услуг любая из сторон может отказаться от исполнения настоящего договора в части оказания Услуг. Перенесение оказания Услуг на более поздний срок возможно по соглашению сторон.",
                <span>
                  6.2.6. Школа не несет ответственности за предоставление
                  Клиентом неправильной контактной информации (адресов
                  электронной почты, телефонов). При неполучении ответа от
                  Клиента (невозможности связаться по телефону, неполучении
                  ответа по электронной почте или через личный кабинет), Школа
                  вправе выполнить свое обязательство по предложению Клиенту
                  вариантов времени и даты оказания Услуг, направив
                  соответствующие предложения в Личный кабинет Клиента.
                  Направленные предложения действительны (могут быть приняты
                  Клиентом) в течение семи календарных дней, не считая день
                  отправления. О принятии предложений Клиент обязан сообщить
                  Школе, направив подтверждение на адрес технической поддержки{" "}
                  <a href="mailto:info@styleschool.ru">info@styleschool.ru</a>
                </span>,
                "6.2.7. Если Клиент в течение одного месяца не отвечает на сообщения Школы с предложением согласовать время и дату оказания Услуг Школа вправе расторгнуть договор в одностороннем порядке. Внесенные в качестве предварительной оплаты за оказание Услуг денежные средства подлежат возврату Клиенту за вычетом расходов Школы согласно п. 6.1.11. настоящего договора.",
                "6.2.8. Сроки оказания Услуг определяются по соглашению сторон с учетом положений настоящего договора.",
                "6.2.9. По мере выполнения обязательств по оказанию Услуг Школа и Клиент подписывают акты об оказании Услуг, предоставляемые Школой. Акты сдачи-приемки (в двух экземплярах) готовит Школа. Школа информирует Клиента через Личный кабинет о готовности Актов и необходимости их подписать. Клиент обязан подписать Акты по месту нахождения Школы либо в течение трех календарных дней с даты направления информации о готовности Актов направить Школе (по электронной почте по адресу info@styleschool.ru) мотивированный отказ от приемки Услуг. При неполучении Школой в указанный срок подписанного Клиентом экземпляра Акта или мотивированного отказа от его подписания, работы/Услуги считаются надлежаще выполненными и Школой вправе актировать их на основании Акта сдачи-приемки выполненных работ/Услуг, оформленного ею в одностороннем порядке.",
                "6.3. Особенности консультаций он-лайн",
                "6.3.1. Для того, чтобы Клиент мог воспользоваться консультациями он-лайн компьютер Клиента должен иметь доступ в Интернет, а также на нем должны быть установлены и настроены программы Internet Explorer (или Mozilla Firefox) и Skype.",
                "6.3.2. Консультации он-лайн проводятся согласно стандартам предоставления консультаций он-лайн путем общения консультанта с Клиентом через Skype и заполнения раздела «Моя папка по стилю» (Папки по стилю) и/или раздела «Мой гардероб» (Гардероб) в Личном кабинете Клиента.",
                "6.3.3. Консультант заполняет разделы «Папки по стилю» и/или «Гардероба» после внесения Клиентом предварительной оплаты и предоставления необходимых фотографий и/или сведений. Онлайн-сессия проводится после внесения Клиентом полной оплаты за консультацию он-лайн.",
                "6.3.4. В целях исполнения Компанией «Гид по стилю» своих обязательств по предоставлению консультаций он-лайн Клиент обязуется предоставлять Исполнителю необходимые изображения, сведения и информацию, в том числе персональные данные, согласно стандартам консультаций он-лайн.",
                "6.3.5. Фотографии предоставляются путем загрузки файлов в формате jpg с компьютера Клиента с использованием технологий для передачи данных в сети Интернет на сайт Компании «Гид по стилю» через Личный кабинет Клиента (раздел «Мои настройки»).",
                "6.3.6. Изображения на фотографиях (изображение Клиента, изображение вещей из гардероба Клиента и пр.) должны быть соответствующими действительности, быть четкими и однозначно читаемыми. Фотографии должны иметь разрешение не менее 300 пикселей, размером не менее 375 пикселей по высоте или ширине.",
                "6.3.7. Необходимые для оказания Услуг сведения, информацию Клиент предоставляет, отвечая на вопросы Консультанта, заполняя анкеты, предложенные Консультантом и т.п. в Личном кабинете и при общении с Консультантом в процессе консультаций. Клиент обязуется предоставлять соответствующие действительности сведения. Заказывая консультации он-лайн, Клиент подтверждает свое согласие на предоставление сведений о себе, необходимых для надлежащего оказания Услуг, в том числе сведений о физических параметрах клиента (рост, вес и пр.), о возрасте, о предпочтениях в одежде, об образе жизни и прочее. Полученные изображения, фотографии, сведения обрабатываются и используются Исполнителем, его сотрудниками и консультантами исключительно в целях исполнения договора об оказании Услуг. Передавая изображения, фотографии, сведения и иные персональные данные клиент подтверждает свое согласие на обработку и использование персональных данных Консультантом и Компанией «Гид по стилю» в целях исполнения настоящего договора.",
                "6.3.8. При не предоставлении клиентом фотографий и информации, необходимых для оказания Услуг, Исполнитель не имеет возможности провести консультации он-лайн и не несет ответственности за неисполнение или просрочку исполнения своих обязательств. При не предоставлении информации в течение 90 календарных дней с даты внесения предварительной оплаты Клиентом Компания «Гид по стилю» вправе расторгнуть настоящий договор в одностороннем порядке. При этом внесенная оплата возвращается Клиенту за вычетом суммы расходов, уже произведенных Компанией «Гид по стилю», согласно п. 6.1.11. настоящего договора.",
                "6.3.9. Исполнитель обязуется сообщать Клиенту о необходимости представить для оказания Услуги сведения, информацию, фотографии, направляя Клиенту соответствующее сообщение в его Личный кабинет.",
                <b>7. Прочие условия</b>,
                "7.1. Школа вправе привлекать к исполнению настоящего договора третьих лиц. При этом ответственной перед Клиентом остается Школа, за исключением случаев, оговоренных в настоящем договоре или в соответствии с законом.",
                "7.2. Прекращение обязательств по любым основаниям по продаже отдельных Товаров или по оказанию отдельных Услуг не влечет за собой прекращение действия настоящего договора.",
                "7.3. Договор может быть расторгнут по соглашению сторон. В случаях, предусмотренных законом и настоящим договором, каждая из сторон вправе в одностороннем порядке отказаться от обязательств по настоящему договору полностью или частично.",
                "7.4. Школа вправе отказаться от настоящего договора и расторгнуть его в одностороннем порядке в случаях: - существенное нарушение Клиентов сроков и условий оплаты, установленных настоящим договором, - предоставление Клиентом доступа или возможности доступа в Персональный кабинет третьих лиц (передача логина и пароля третьим лицам, предоставление Клиентом возможности третьим лицам использования Персонального кабинета Клиента для приобретения Товаров, Услуг или Видеокурсов); - предоставление Клиентом очевидно недостоверной информации или не соотвествующих действительности фотографий; - нарушение Клиентом общепринятых норм поведения в общении с Консультантом и сотрудниками Школы; - иные случаи, установленные настоящим договоров или законодательством.",
                "7.5. Во всем, что не предусмотрено настоящим договором, стороны руководствуются законодательством Российской Федерации.",
                "7.6. В изъятие положений 3.2.2. – 3.2.4. настоящего договора (о порядке и моменте заключения договора) стороны могут прийти к соглашению о заключении настоящего договора в результате переговоров, электронной переписки, переписке через Личный кабинет и без оформления заказа согласно п.п. 3.2.2. – 3.2.4. настоящего договора. В этом случае Школа выполняет обязательства согласно п. 3.2.5., а Клиент подтверждает свое согласие на приобретение согласованных таким образом Товаров и Услуг внесением предварительной оплаты за заказанные Товары и Услуги согласно условиям настоящего договора. В этом случае настоящий договор считается заключенным в момент внесения Клиентом предварительной оплаты.",
                "7.7. Режим работы Школы: рабочее время с понедельника по пятницу с 10 до 19 часов. Выходные дни – суббота и воскресенье, а также установленные Трудовым кодексом Российской Федерации или в соответствии с ним праздничные нерабочие дни."
              ]}
            />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
}