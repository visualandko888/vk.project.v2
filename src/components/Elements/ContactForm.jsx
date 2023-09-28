import { instanceAxios } from '@helpers/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import googleAds from '@assets/images/contact-google-ads.svg';
import design from '@assets/images/contact-design.svg';
import web from '@assets/images/contact-web.svg';
import seo from '@assets/images/contact-seo.svg';
import sea from '@assets/images/contact-sea.svg';
import security from '@assets/images/contact-security.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import phoneImg from '@assets/images/phone.svg';
import share from '@assets/images/share.svg';
import { Link } from 'react-router-dom';

export default function ContactForm() {
  const { t } = useTranslation(); // Importation de la traduction
  const [servicesList, setServicesList] = useState([
    {
      name: '<span>Développement</span> <br />Web',
      publicName: 'Développement WEB',
      img: web,
      selected: false,
    },
    {
      name: 'Google<br /> Ads',
      publicName: 'Google ADS',
      img: googleAds,
      selected: false,
    },
    {
      name: 'SEO',
      publicName: 'SEO',
      img: seo,
      selected: false,
    },
    {
      name: 'SEA',
      publicName: 'SEA',
      img: sea,
      selected: false,
    },
    {
      name: '<span>Web</span><br /> Design',
      publicName: 'WEB Design',
      img: design,
      selected: false,
    },
    {
      name: '<span>Maintenance</span><br />Sécurité',
      publicName: 'Maintenance & Sécurité',
      img: security,
      selected: false,
    },
  ]);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [society, setSociety] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [pj, setPj] = useState(null);
  const [sendStep, setSendStep] = useState(0);

  const handleClickChecked = (index) => {
    const newArr = [...servicesList];
    newArr[index].selected = !newArr[index].selected;
    setServicesList(newArr);
  };

  const [currentLabel, setCurrentLabel] = useState('');

  const handleChange = (e) => {
    const fileName = e.target.value.split('\\').pop();
    setCurrentLabel(
      fileName.length > 15 ? `...${fileName.slice(-15)}` : fileName,
    );
    setPj(e.target.files[0]);
  };

  const handleChangeForm = (type, e) => {
    const { value } = e.target;
    if (type === 'firstname') {
      setFirstname(value);
    }
    if (type === 'lastname') {
      setLastname(value);
    }
    if (type === 'society') {
      setSociety(value);
    }
    if (type === 'mail') {
      setMail(value);
    }
    if (type === 'phone') {
      setPhone(value);
    }
    if (type === 'website') {
      setWebsite(value);
    }
    if (type === 'description') {
      setDescription(value);
    }
  };

  const handleSubmit = () => {
    setSendStep(1);
    let services = '';
    for (let i = 0; i < servicesList.length; i++) {
      if (servicesList[i].selected) {
        services += ` | ${servicesList[i].publicName}`;
      }
    }
    const formData = new FormData();
    formData.append('services', `${services} |`);
    formData.append('pj', pj);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('society', society);
    formData.append('mail', mail);
    formData.append('phone', phone);
    formData.append('website', website);
    formData.append('description', description);

    instanceAxios()
      .post('post_contact.php', formData)
      .then(() => {
        setSendStep(2);
      })
      .catch(() => {});
  };
  return (
    <>
      <div className="content">
        {sendStep === 0 && (
          <>
            <div className="top">
              {t('contact_form_t1', {
                defaultValue: 'Vous désirez nous contacter pour :',
              })}
            </div>
            <div className="servicesList">
              {servicesList.map((e, index) => (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => handleClickChecked(index)}
                  onClick={() => handleClickChecked(index)}
                  type="button"
                  className={`item ${e.selected ? 'selected' : ''}`}
                >
                  <div className="top">
                    <img alt="réalisation" src={e.img} />
                  </div>
                  <div
                    className="bottom"
                    dangerouslySetInnerHTML={{
                      __html: t(`contact_form_service${index + 1}`, {
                        defaultValue: e.name,
                      }),
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="form">
              <div className="formContent">
                <input
                  onChange={(e) => handleChangeForm('lastname', e)}
                  type="text"
                  name="lastname"
                  placeholder={t('contact_form_input1', {
                    defaultValue: 'NOM',
                  })}
                />
                <input
                  onChange={(e) => handleChangeForm('firstname', e)}
                  type="text"
                  name="firstname"
                  placeholder={t('contact_form_input2', {
                    defaultValue: 'Prénom',
                  })}
                />
                <input
                  onChange={(e) => handleChangeForm('society', e)}
                  type="text"
                  name="society"
                  placeholder={t('contact_form_input3', {
                    defaultValue: 'Société',
                  })}
                />
                <input
                  onChange={(e) => handleChangeForm('mail', e)}
                  type="mail"
                  name="mail"
                  placeholder={t('contact_form_input4', {
                    defaultValue: 'Adresse Mail',
                  })}
                />
                <input
                  onChange={(e) => handleChangeForm('website', e)}
                  type="text"
                  name="website"
                  placeholder={t('contact_form_input5', {
                    defaultValue: 'Site internet',
                  })}
                />
                <input
                  onChange={(e) => handleChangeForm('phone', e)}
                  type="number"
                  name="phone"
                  placeholder={t('contact_form_input6', {
                    defaultValue: 'Téléphone',
                  })}
                />

                <textarea
                  onChange={(e) => handleChangeForm('description', e)}
                  name="description"
                  placeholder={t('contact_form_input7', {
                    defaultValue:
                      'Un commentaire ou des questions sur votre projet ?',
                  })}
                />
                <label htmlFor="pj">
                  {currentLabel || (
                    <>
                      <FontAwesomeIcon className="faIcon" icon={faPaperclip} />
                      {t('contact_form_input8', {
                        defaultValue: 'Pièce jointe',
                      })}
                    </>
                  )}
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="file"
                  id="pj"
                  name="pj"
                  accept=".jpg, .jpeg, .png, .doc, .docx, .pdf, .txt"
                />
              </div>

              <button onClick={() => handleSubmit()} type="button">
                {t('contact_form_t2', {
                  defaultValue: 'Contactez notre équipe',
                })}
              </button>
            </div>
          </>
        )}
        {sendStep === 1 && (
          <div className="sendStep">
            <h3>
              {t('contact_form_t3', {
                defaultValue: 'Envoi de votre message en cours...',
              })}
            </h3>
          </div>
        )}

        {sendStep === 2 && (
          <div className="sendStep">
            <h3>
              {t('contact_form_t4', {
                defaultValue:
                'Votre message a bien été envoyé. Notre équipe reviendra vers vous dans les plus brefs délais !',
              })}
            </h3>
          </div>
        )}
      </div>
      <div className="bottom">
        <p>
          {t('contact_form_t5', {
            defaultValue:
              'Pour toutes demandes vous pouvez joindre un de nos agents via :',
          })}
        </p>
        <div className="contactInfos">
          <div>
            <img src={phoneImg} alt="téléphone" />
            <span>
              <Link to="tel:+33767744343">07 67 74 43 43</Link>
            </span>
          </div>
          <div>
            <img src={share} alt="téléphone" />
            <span>
              <Link to="mailto:contact@visualandko.com">
                contact@visualandko.com
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
