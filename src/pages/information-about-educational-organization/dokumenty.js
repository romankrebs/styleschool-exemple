import React from "react";
import Pattern from "./pattern";
import { style } from "./style";
import List from "../../components/list";

const Docs = props => {
  return (
    <div>
      <Pattern
        title="Документы"
        content={
          <div>
            <List
              arr={[
                <a href="/download/ustav-obrazovateljnoy-organizatsii-ANO-VShS.pdf">
                  Устав образовательной организации
                </a>,
                <a href="/download/licenziya.pdf">
                  Лицензия на осуществление образовательной деятельности (с
                  приложением)
                </a>,
                <a href="/download/svideteljstvo-o-gosudarstvennoy-registratsii-ano-vshs.pdf">
                  Свидетельство о государственной регистрации некоммерческой
                  организации
                </a>
              ]}
              style={style.text}
            />
            <h2 style={style.h2}>Локальные акты</h2>
            {/* <h2 style={style.h2}>Отчет о результатах самообследования</h2> 
            <h2 style={style.h2}>
              Документы о порядке оказания платных образовательных услуг
            </h2> */}
            <List
              arr={[
                <a href="/download/polozhenie-o-vedenii-lichnyh-del-obuchauschihsya.pdf">
                  Положение о ведении личных дел обучающихся в АНО ДПО «Высшая
                  школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/polozhenie-o-vedenii-lichnyh-del-rabotnikov.pdf">
                  Положение о ведении личных дел работников АНО ДПО «Высшая
                  школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/polozhenie-o-vnutrenney-sisteme-otsenki-kachestva-programm-dpo.pdf">
                  Положение о внутренней системе оценки качества программ
                  дополнительного профессионального образования и результатов их
                  реализации в АНО ДПО «Высшая школа стилистики, дизайна и
                  технологий»
                </a>,
                <a href="/download/polozhenie-o-komissii-po-uregulirovaniyu-sporov.pdf">
                  Положение о комиссии по урегулированию споров между
                  участниками образовательного процесса в АНО ДПО «Высшая школа
                  стилистики, дизайна и технологий»
                </a>,
                <a href="/download/polozhenie-o-poryadke-obucheniya-po-individualjnomu-uchebnomu-planu.pdf">
                  Положение о порядке обучения по индивидуальному учебному плану
                  в АНО ДПО «Высшая школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/pravila-vnutrennego-rasporyadka-obuchayuschihsya.pdf">
                  Правила внутреннего распорядка обучающихся в АНО ДПО «Высшая
                  школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/polozhenie-po-obrabotke-personaljnyh-dannyh-obuchayuschihsya.pdf">
                  Положение по обработке персональных данных обучающихся и иных
                  лиц в АНО ДПО «Высшая школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/polozhenie-po-obrabotke-personaljnyh-dannyh-rabotnikov.pdf">
                  Положение по обработке персональных данных работников АНО ДПО
                  «Высшая школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/polozhenie-ob-oplate-truda-i-premirovanii-rabotnikov.pdf">
                  Положение об оплате труда и премировании работников АНО ДПО
                  «Высшая школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/polozhenie-ob-organizatsii-platnyh-obrazovateljnyh-uslug.pdf">
                  Положение об организации платных образовательных услуг в АНО
                  ДПО «Высшая школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/poryadok-opredeleniya-i-ucheta-uchebnoy-nagruzki-pedagogicheskih-rabotnikov.pdf">
                  Порядок определения и учета учебной нагрузки педагогических
                  работников АНО ДПО «Высшая школа стилистики, дизайна и
                  технологий»
                </a>,
                <a href="/download/polozhenie-o-poryadke-tekuschego-kontrolya-uspevaemosti-i-attestatsii.pdf">
                  Положение о порядке текущего контроля успеваемости,
                  промежуточной и итоговой аттестации обучающихся в АНО ДПО
                  «Высшая школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/pravila-priema-perevoda-otchisleniya-i-vosstanovleniya-obuchayuschihsya.pdf">
                  Правила приема, перевода, отчисления и восстановления
                  обучающихся в АНО ДПО «Высшая школа стилистики, дизайна и
                  технологий»
                </a>,
                <a href="/download/polozhenie-o-privlechenii-storonnih-spetsialistov.pdf">
                  Положение о привлечении сторонних специалистов для ведения
                  педагогической и научно-педагогической деятельности в АНО ДПО
                  «Высшая школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/polozhenie-o-professionaljnoy-etike-pedagogicheskih-rabotnikov.pdf">
                  Положение о профессиональной этике педагогических работников
                  АНО ДПО «Высшая школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/pricecurrent_prof.pdf">
                  Прейскурант на обучение по программам профессиональной
                  переподготовки и повышения квалификации в АНО ДПО «Высшая
                  школа стилистики, дизайна и технологий»
                </a>,
                <a href="/download/pricecurrent_courses.pdf">
                  Прейскурант на обучение по программам краткосрочных курсов и
                  мастер-классов в АНО ДПО «Высшая школа стилистики, дизайна и
                  технологий»
                </a>
              ]}
              style={style.text}
            />
            <h2 style={style.h2}>Иная информация</h2>
            <p style={style.text}>
              Образцы документов об обучении, повышении квалификации,
              переподготовке:
            </p>
            <List
              arr={[
                <a href="/download/diploms.pdf">
                  Дипломы. Сертефикаты. Удостоверение
                </a>
              ]}
            />
          </div>
        }
      />
    </div>
  );
};

export default Docs;
