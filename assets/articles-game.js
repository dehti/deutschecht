(() => {
  const words = [
    // Alltag
    ['alltag','der','Kaffee','-ee: часто der, но это не правило без исключений.','-ee: oft der, aber keine ausnahmslose Regel.','Запоминай как готовую пару: der Kaffee.','Lerne die Wortgruppe: der Kaffee.'],
    ['alltag','die','Straße','Многие слова без характерного окончания нужно учить вместе с артиклем.','Viele Wörter ohne typische Endung lernt man direkt mit Artikel.','Представь: die Straße — улица.','Stell dir vor: die Straße.'],
    ['alltag','das','Geld','Надёжного правила по окончанию нет.','Es gibt keine sichere Regel zur Endung.','Всегда учи: das Geld.','Lerne immer: das Geld.'],
    ['alltag','der','Bahnhof','Составное слово получает род последней части: der Hof.','Komposita haben das Geschlecht des letzten Wortes: der Hof.','der Bahn-hof → главное слово Hof.','der Bahn-hof → wichtig ist Hof.'],
    ['alltag','die','Rechnung','Окончание -ung почти всегда женского рода.','Die Endung -ung ist fast immer feminin.','die Rechn-ung.','die Rechn-ung.'],
    ['alltag','das','Ticket','Заимствованные слова часто не имеют надёжного правила.','Bei Fremdwörtern gibt es oft keine sichere Regel.','Учи целиком: das Ticket.','Lerne es komplett: das Ticket.'],
    ['alltag','der','Schlüssel','Окончание -el часто бывает мужским, но не всегда.','Die Endung -el ist oft maskulin, aber nicht immer.','der Schlüssel öffnet die Tür.','der Schlüssel öffnet die Tür.'],
    ['alltag','die','Zeitung','Окончание -ung почти всегда означает die.','Die Endung -ung bedeutet fast immer die.','die Zeit-ung.','die Zeit-ung.'],
    ['alltag','das','Problem','Окончание -em/-um у многих греческих слов даёт das.','Die Endung -em/-um gibt bei vielen griechischen Wörtern das.','das Prob-lem.','das Prob-lem.'],
    ['alltag','der','Termin','Многие слова на -in мужского рода; правило не абсолютное.','Viele Wörter auf -in sind maskulin; die Regel ist nicht absolut.','der Termin — встреча по времени.','der Termin – ein fester Zeitpunkt.'],
    ['alltag','die','Möglichkeit','Окончание -keit всегда женского рода.','Die Endung -keit ist immer feminin.','die Möglich-keit.','die Möglich-keit.'],
    ['alltag','das','Wetter','Надёжного правила нет.','Es gibt keine sichere Regel.','das Wetter — погода.','das Wetter – das Wetter.'],
    ['alltag','der','Frühling','Окончание -ling всегда мужского рода.','Die Endung -ling ist immer maskulin.','der Früh-ling.','der Früh-ling.'],
    ['alltag','die','Nachricht','Окончание -icht часто женского рода, но бывают исключения.','Die Endung -icht ist oft feminin, aber es gibt Ausnahmen.','die Nach-richt.','die Nach-richt.'],
    ['alltag','das','Gespräch','Глаголы, превращённые в существительные, всегда das; здесь правило не помогает.','Substantivierte Verben sind immer das; hier hilft die Regel nicht.','das Gespräch — учи вместе с артиклем.','Lerne: das Gespräch.'],
    ['alltag','der','Ausweis','Надёжного правила нет.','Es gibt keine sichere Regel.','der Ausweis — документ.','der Ausweis – der Ausweis.'],
    ['alltag','die','Gesundheit','Окончание -heit всегда женского рода.','Die Endung -heit ist immer feminin.','die Gesund-heit.','die Gesund-heit.'],
    ['alltag','das','Mädchen','Уменьшительные на -chen всегда среднего рода.','Verkleinerungen auf -chen sind immer neutrum.','Даже если Mädchen — девочка: das Mädchen.','Auch wenn es ein Mädchen ist: das Mädchen.'],
    ['alltag','der','Verkehr','Надёжного правила нет.','Es gibt keine sichere Regel.','der Verkehr — транспорт/движение.','der Verkehr – Verkehr.'],
    ['alltag','die','Geduld','Надёжного правила нет.','Es gibt keine sichere Regel.','die Geduld — терпение.','die Geduld – Geduld.'],
    ['alltag','das','Verständnis','Окончание -nis обычно среднего рода; есть исключения.','Die Endung -nis ist meist neutrum; es gibt Ausnahmen.','das Verständ-nis.','das Verständ-nis.'],
    ['alltag','der','Unterschied','Надёжного правила нет.','Es gibt keine sichere Regel.','der Unterschied — разница.','der Unterschied – der Unterschied.'],
    ['alltag','die','Entscheidung','Окончание -ung почти всегда означает die.','Die Endung -ung bedeutet fast immer die.','die Entscheid-ung.','die Entscheid-ung.'],
    ['alltag','das','Verhalten','Существительные от инфинитива всегда das: das Verhalten.','Substantivierte Infinitive sind immer das: das Verhalten.','das Verhalten — от sich verhalten.','das Verhalten – von sich verhalten.'],
    // Zuhause
    ['zuhause','der','Tisch','Надёжного правила нет.','Es gibt keine sichere Regel.','der Tisch — стол.','der Tisch – der Tisch.'],
    ['zuhause','die','Küche','Окончание -e часто женского рода, но не всегда.','Die Endung -e ist oft feminin, aber nicht immer.','die Küche.','die Küche.'],
    ['zuhause','das','Fenster','Окончание -er здесь не означает der: учи целиком.','Die Endung -er bedeutet hier nicht der: direkt lernen.','das Fenster.','das Fenster.'],
    ['zuhause','der','Kühlschrank','Составное слово берёт род последней части: der Schrank.','Komposita haben das Geschlecht des letzten Wortes: der Schrank.','der Kühl-schrank.','der Kühl-schrank.'],
    ['zuhause','die','Wohnung','Окончание -ung почти всегда женского рода.','Die Endung -ung ist fast immer feminin.','die Wohn-ung.','die Wohn-ung.'],
    ['zuhause','das','Zimmer','Надёжного правила нет.','Es gibt keine sichere Regel.','das Zimmer.','das Zimmer.'],
    ['zuhause','der','Teppich','Окончание -ich часто мужского рода.','Die Endung -ich ist oft maskulin.','der Teppich.','der Teppich.'],
    ['zuhause','die','Waschmaschine','Составное слово получает род последней части: die Maschine.','Komposita haben das Geschlecht des letzten Wortes: die Maschine.','die Wasch-maschine.','die Wasch-maschine.'],
    ['zuhause','das','Bett','Надёжного правила нет.','Es gibt keine sichere Regel.','das Bett.','das Bett.'],
    ['zuhause','der','Staubsauger','Составное слово: последний элемент der Sauger.','Komposita: der letzte Teil ist der Sauger.','der Staub-sauger.','der Staub-sauger.'],
    ['zuhause','die','Heizung','Окончание -ung почти всегда означает die.','Die Endung -ung bedeutet fast immer die.','die Heiz-ung.','die Heiz-ung.'],
    ['zuhause','das','Möbel','Слово Möbel употребляется только во множественном числе.','Möbel wird nur im Plural verwendet.','die Möbel — мебель.','die Möbel – Möbel.'],
    ['zuhause','der','Müll','Надёжного правила нет.','Es gibt keine sichere Regel.','der Müll.','der Müll.'],
    ['zuhause','die','Wäsche','Окончание -e часто die, но это не гарантия.','Die Endung -e ist oft die, aber keine Garantie.','die Wäsche.','die Wäsche.'],
    ['zuhause','das','Besteck','Собирательные слова часто среднего рода; учи как пару.','Sammelbegriffe sind oft neutrum; lerne die Wortgruppe.','das Besteck.','das Besteck.'],
    ['zuhause','der','Vorhang','Надёжного правила нет.','Es gibt keine sichere Regel.','der Vorhang.','der Vorhang.'],
    ['zuhause','die','Steckdose','Составное слово: последняя часть die Dose.','Komposita: der letzte Teil ist die Dose.','die Steck-dose.','die Steck-dose.'],
    ['zuhause','das','Werkzeug','Составное слово: последняя часть das Zeug.','Komposita: der letzte Teil ist das Zeug.','das Werk-zeug.','das Werk-zeug.'],
    ['zuhause','der','Haushalt','Надёжного правила нет.','Es gibt keine sichere Regel.','der Haushalt.','der Haushalt.'],
    ['zuhause','die','Nachbarschaft','Окончание -schaft всегда женского рода.','Die Endung -schaft ist immer feminin.','die Nachbar-schaft.','die Nachbar-schaft.'],
    ['zuhause','das','Eigentum','Окончание -um обычно среднего рода.','Die Endung -um ist meist neutrum.','das Eigen-tum.','das Eigen-tum.'],
    ['zuhause','der','Wasserhahn','Составное слово: последняя часть der Hahn.','Komposita: der letzte Teil ist der Hahn.','der Wasser-hahn.','der Wasser-hahn.'],
    ['zuhause','die','Miete','Окончание -e часто женского рода.','Die Endung -e ist oft feminin.','die Miete.','die Miete.'],
    // Arbeit
    ['arbeit','der','Beruf','Надёжного правила нет.','Es gibt keine sichere Regel.','der Beruf.','der Beruf.'],
    ['arbeit','die','Besprechung','Окончание -ung почти всегда женского рода.','Die Endung -ung ist fast immer feminin.','die Besprech-ung.','die Besprech-ung.'],
    ['arbeit','das','Büro','Заимствованные слова на -o часто среднего рода, но не всегда.','Fremdwörter auf -o sind oft neutrum, aber nicht immer.','das Büro.','das Büro.'],
    ['arbeit','der','Kollege','Окончание -e здесь исключение: это der.','Die Endung -e ist hier eine Ausnahme: der.','der Kollege — мужчина; die Kollegin — женщина.','der Kollege; die Kollegin.'],
    ['arbeit','die','Kollegin','Окончание -in всегда женского рода.','Die Endung -in ist immer feminin.','die Kolleg-in.','die Kolleg-in.'],
    ['arbeit','das','Gehalt','Надёжного правила нет.','Es gibt keine sichere Regel.','das Gehalt.','das Gehalt.'],
    ['arbeit','der','Arbeitsvertrag','Составное слово: последняя часть der Vertrag.','Komposita: der letzte Teil ist der Vertrag.','der Arbeits-vertrag.','der Arbeits-vertrag.'],
    ['arbeit','die','Bewerbung','Окончание -ung почти всегда означает die.','Die Endung -ung bedeutet fast immer die.','die Bewerb-ung.','die Bewerb-ung.'],
    ['arbeit','das','Unternehmen','Существительные на -en часто среднего рода.','Nomen auf -en sind oft neutrum.','das Unter-nehmen.','das Unter-nehmen.'],
    ['arbeit','der','Fortschritt','Надёжного правила нет.','Es gibt keine sichere Regel.','der Fortschritt.','der Fortschritt.'],
    ['arbeit','die','Erfahrung','Окончание -ung почти всегда означает die.','Die Endung -ung bedeutet fast immer die.','die Erfahr-ung.','die Erfahr-ung.'],
    ['arbeit','das','Gesetz','Надёжного правила нет.','Es gibt keine sichere Regel.','das Gesetz.','das Gesetz.'],
    ['arbeit','der','Arbeitgeber','Составное слово: последний элемент der Geber.','Komposita: der letzte Teil ist der Geber.','der Arbeit-geber.','der Arbeit-geber.'],
    ['arbeit','die','Abteilung','Окончание -ung почти всегда женского рода.','Die Endung -ung ist fast immer feminin.','die Abteil-ung.','die Abteil-ung.'],
    ['arbeit','das','Meeting','Заимствованное слово: обычно das.','Fremdwort: normalerweise das.','das Meeting.','das Meeting.'],
    ['arbeit','der','Lohn','Надёжного правила нет.','Es gibt keine sichere Regel.','der Lohn.','der Lohn.'],
    ['arbeit','die','Tätigkeit','Окончание -keit всегда женского рода.','Die Endung -keit ist immer feminin.','die Tätig-keit.','die Tätig-keit.'],
    ['arbeit','das','Dokument','Окончание -ment обычно среднего рода.','Die Endung -ment ist meistens neutrum.','das Doku-ment.','das Doku-ment.'],
    ['arbeit','der','Kunde','Окончание -e здесь исключение: der Kunde.','Die Endung -e ist hier eine Ausnahme: der Kunde.','der Kunde, die Kundin.','der Kunde, die Kundin.'],
    ['arbeit','die','Verantwortung','Окончание -ung почти всегда означает die.','Die Endung -ung bedeutet fast immer die.','die Verantwort-ung.','die Verantwort-ung.'],
    ['arbeit','das','Praktikum','Окончание -um обычно среднего рода.','Die Endung -um ist meist neutrum.','das Praktik-um.','das Praktik-um.'],
    ['arbeit','der','Fachinformatiker','Окончание -er часто мужского рода; женская форма: die Fachinformatikerin.','Die Endung -er ist oft maskulin; die weibliche Form: Fachinformatikerin.','der Fachinformatiker.','der Fachinformatiker.'],
    ['arbeit','die','Qualifikation','Окончание -ion всегда женского рода.','Die Endung -ion ist immer feminin.','die Qualifikat-ion.','die Qualifikat-ion.']
  ].map(([category, article, word, ruleUk, ruleDe, tipUk, tipDe]) => ({ category, article, word, ruleUk, ruleDe, tipUk, tipDe }));

  const ruleText = {
    uk: { none: 'Надійного правила за закінченням немає — це слово краще вчити разом з артиклем.', compound: 'У складних словах рід визначає остання частина слова.', ung: 'Закінчення -ung майже завжди означає die.', heit: 'Закінчення -heit завжди жіночого роду.', keit: 'Закінчення -keit завжди жіночого роду.', schaft: 'Закінчення -schaft завжди жіночого роду.', ion: 'Закінчення -ion завжди жіночого роду.', taet: 'Закінчення -tät завжди жіночого роду.', ik: 'Закінчення -ik майже завжди жіночого роду.', ei: 'Закінчення -ei завжди жіночого роду.', in: 'Закінчення -in завжди жіночого роду.', ment: 'Закінчення -ment зазвичай середнього роду.', um: 'Закінчення -um зазвичай середнього роду.', infinitive: 'Іменники від дієслів в інфінітиві завжди мають das.', ling: 'Закінчення -ling завжди чоловічого роду.', ismus: 'Закінчення -ismus завжди чоловічого роду.', er: 'Назви людей на -er часто чоловічого роду; жіноча форма зазвичай має -in.' },
    de: { none: 'Es gibt keine zuverlässige Regel zur Endung – lerne dieses Wort direkt mit Artikel.', compound: 'Bei zusammengesetzten Wörtern bestimmt der letzte Teil das Geschlecht.', ung: 'Die Endung -ung bedeutet fast immer die.', heit: 'Die Endung -heit ist immer feminin.', keit: 'Die Endung -keit ist immer feminin.', schaft: 'Die Endung -schaft ist immer feminin.', ion: 'Die Endung -ion ist immer feminin.', taet: 'Die Endung -tät ist immer feminin.', ik: 'Die Endung -ik ist fast immer feminin.', ei: 'Die Endung -ei ist immer feminin.', in: 'Die Endung -in ist immer feminin.', ment: 'Die Endung -ment ist meistens neutrum.', um: 'Die Endung -um ist meistens neutrum.', infinitive: 'Substantivierte Infinitive haben immer das.', ling: 'Die Endung -ling ist immer maskulin.', ismus: 'Die Endung -ismus ist immer maskulin.', er: 'Personenbezeichnungen auf -er sind oft maskulin; die weibliche Form endet meist auf -in.' }
  };
  const extraWordGroups = {
    essen: [
      'der|Apfel|none','der|Käse|none','der|Kuchen|none','der|Reis|none','der|Saft|none','der|Salat|none','der|Zucker|none','der|Löffel|none','der|Teller|none','der|Einkauf|compound','der|Geschmack|none','der|Hunger|none','der|Durst|none','der|Joghurt|none',
      'die|Banane|none','die|Kartoffel|none','die|Suppe|none','die|Milch|none','die|Butter|none','die|Tomate|none','die|Zitrone|none','die|Speise|none','die|Ernährung|ung','die|Mahlzeit|compound','die|Kantine|none','die|Bäckerei|ei','die|Küche|none',
      'das|Brot|none','das|Ei|none','das|Fleisch|none','das|Gemüse|none','das|Obst|none','das|Wasser|none','das|Öl|none','das|Salz|none','das|Messer|none','das|Restaurant|none','das|Getränk|none','das|Frühstück|compound','das|Mittagessen|compound'
    ],
    unterwegs: [
      'der|Zug|none','der|Bus|none','der|Fahrplan|compound','der|Fahrer|er','der|Flughafen|compound','der|Koffer|none','der|Gehweg|compound','der|Stau|none','der|Ausgang|compound','der|Eingang|compound','der|Bahnsteig|compound','der|Umstieg|none','der|Führerschein|compound','der|Sitzplatz|compound',
      'die|Bahn|none','die|Haltestelle|compound','die|Fahrkarte|compound','die|Reise|none','die|Kreuzung|ung','die|Ampel|none','die|Verspätung|ung','die|Abfahrt|compound','die|Ankunft|compound','die|Richtung|ung','die|Straßenbahn|compound','die|Tankstelle|compound','die|Ausfahrt|compound',
      'das|Auto|none','das|Fahrrad|compound','das|Taxi|none','das|Gleis|none','das|Navi|none','das|Verkehrsmittel|compound','das|Abteil|none','das|Gepäck|none','das|Parkhaus|compound','das|Kraftfahrzeug|compound','das|Ticketbüro|compound','das|Stadtzentrum|compound','das|U-Bahn-Netz|compound'
    ],
    gesundheit: [
      'der|Arzt|none','der|Schmerz|none','der|Husten|none','der|Verband|none','der|Notfall|compound','der|Zahnarzt|compound','der|Kopfschmerz|compound','der|Blutdruck|compound','der|Impfstoff|compound','der|Krankenwagen|compound','der|Schnupfen|none','der|Ausschlag|none','der|Befund|none',
      'die|Apotheke|none','die|Krankheit|heit','die|Versicherung|ung','die|Behandlung|ung','die|Untersuchung|ung','die|Operation|ion','die|Medizin|in','die|Erkältung|ung','die|Gesundheitskarte|compound','die|Überweisung|ung','die|Sprechstunde|compound','die|Verletzung|ung','die|Impfung|ung','die|Diagnose|none',
      'das|Medikament|ment','das|Krankenhaus|compound','das|Fieber|none','das|Rezept|none','das|Blut|none','das|Pflaster|none','das|Symptom|none','das|Gewicht|none','das|Wartezimmer|compound','das|Röntgenbild|compound','das|Schmerzmittel|compound','das|Gesundheitsamt|compound','das|Krankenbett|compound'
    ],
    behoerden: [
      'der|Pass|none','der|Antrag|none','der|Bescheid|none','der|Brief|none','der|Wohnsitz|compound','der|Nachweis|compound','der|Führerschein|compound','der|Mietvertrag|compound','der|Steuerbescheid|compound','der|Aufenthaltstitel|compound','der|Personalausweis|compound','der|Terminservice|compound','der|Gebührenbescheid|compound','der|Kindergeldantrag|compound',
      'die|Anmeldung|ung','die|Behörde|none','die|Steuer|none','die|Gebühr|none','die|Unterschrift|compound','die|Aufenthaltserlaubnis|compound','die|Frist|none','die|Staatsangehörigkeit|keit','die|Meldebescheinigung|ung','die|Ausländerbehörde|compound','die|Krankenkasse|compound','die|Rentenversicherung|ung','die|Abmeldung|ung','die|Bescheinigung|ung',
      'das|Amt|none','das|Formular|none','das|Konto|none','das|Einkommen|infinitive','das|Bürgergeld|compound','das|Kindergeld|compound','das|Zeugnis|none','das|Visum|um','das|Finanzamt|compound','das|Meldeamt|compound','das|Antragsformular|compound','das|Bankkonto|compound'
    ],
    deutsch: [
      'der|Artikel|none','der|Satz|none','der|Text|none','der|Fehler|none','der|Wortschatz|compound','der|Unterricht|none','der|Lehrer|er','der|Kurs|none','der|Akzent|none','der|Ausdruck|none','der|Buchstabe|none','der|Plural|none','der|Singular|none','der|Fortschritt|none',
      'die|Sprache|none','die|Grammatik|ik','die|Übung|ung','die|Regel|none','die|Prüfung|ung','die|Antwort|none','die|Frage|none','die|Aussprache|compound','die|Bedeutung|ung','die|Erklärung|ung','die|Wiederholung|ung','die|Vokabel|none','die|Kommunikation|ion','die|Schwierigkeit|keit',
      'das|Wort|none','das|Verb|none','das|Substantiv|none','das|Adjektiv|none','das|Beispiel|none','das|Kapitel|none','das|Thema|none','das|Niveau|none','das|Wörterbuch|compound','das|Lernen|infinitive','das|Alphabet|none','das|Gespräch|none'
    ]
  };
  Object.entries(extraWordGroups).forEach(([category, entries]) => entries.forEach((entry) => {
    const [article, word, rule] = entry.split('|');
    words.push({ category, article, word, ruleUk: ruleText.uk[rule], ruleDe: ruleText.de[rule], tipUk: `Вчи як одну пару: ${article} ${word}.`, tipDe: `Lerne es als Wortgruppe: ${article} ${word}.` });
  }));

  const copy = {
    uk: { kicker: '07 / ARTICLE GAME', title: 'Артиклі без паніки.', intro: '270 слів: обери категорію, вгадай артикль і одразу дізнайся правило або чесну підказку для запам’ятовування.', nav: 'Артиклі', all: 'Усі категорії', alltag: 'Повсякденне життя', zuhause: 'Вдома', arbeit: 'Робота', essen: 'Їжа', unterwegs: 'У дорозі', gesundheit: 'Здоров’я', behoerden: 'Документи та установи', deutsch: 'Вивчення німецької', score: 'Очки', streak: 'Серія', words: 'слів', choose: 'Обери артикль', next: 'Наступне слово →', correct: '✓ Правильно!', wrong: 'Поки ні. Правильна відповідь:', rule: 'Правило', tip: 'Як запам’ятати', reset: 'Почати спочатку', progress: 'Прогрес у цій сесії', daily: 'Челендж дня: 10 слів', dailyHint: 'Ті самі 10 слів для всіх сьогодні. Скільки з них ти зможеш вгадати?', dailyProgress: 'Челендж дня', result: 'Твій результат', share: 'Поділитися результатом', copied: 'Результат скопійовано!', finish: 'Подивитися результат →', practice: 'До звичайного тренування', perfect: 'Ідеально! 10 з 10 🔥', shareText: 'Я пройшов(ла) челендж дня з артиклів DeutschEcht: {score}/10. Спробуй і ти!' },
    de: { kicker: '07 / ARTICLE GAME', title: 'Artikel ohne Panik.', intro: '270 Wörter: Wähle eine Kategorie, rate den Artikel und erhalte sofort eine Regel oder eine ehrliche Merkhilfe.', nav: 'Artikel', all: 'Alle Kategorien', alltag: 'Alltag', zuhause: 'Zuhause', arbeit: 'Arbeit', essen: 'Essen', unterwegs: 'Unterwegs', gesundheit: 'Gesundheit', behoerden: 'Dokumente & Behörden', deutsch: 'Deutsch lernen', score: 'Punkte', streak: 'Serie', words: 'Wörter', choose: 'Wähle den Artikel', next: 'Nächstes Wort →', correct: '✓ Richtig!', wrong: 'Noch nicht. Die richtige Antwort:', rule: 'Regel', tip: 'Merkhilfe', reset: 'Von vorn beginnen', progress: 'Fortschritt in dieser Runde', daily: 'Tages-Challenge: 10 Wörter', dailyHint: 'Heute bekommen alle dieselben 10 Wörter. Wie viele schaffst du?', dailyProgress: 'Tages-Challenge', result: 'Dein Ergebnis', share: 'Ergebnis teilen', copied: 'Ergebnis kopiert!', finish: 'Ergebnis ansehen →', practice: 'Zum freien Training', perfect: 'Perfekt! 10 von 10 🔥', shareText: 'Ich habe die DeutschEcht-Artikel-Challenge geschafft: {score}/10. Probier es auch!' }
  };

  let category = 'all';
  let current = null;
  let answered = false;
  let score = 0;
  let streak = 0;
  let used = [];
  let dailyMode = false;
  let dailyWords = [];
  let dailyIndex = 0;

  const language = () => document.documentElement.lang === 'de' ? 'de' : 'uk';
  const text = () => copy[language()];
  const event = (name, params) => { if (typeof window.gtag === 'function') window.gtag('event', name, params); };
  const pool = () => words.filter((item) => category === 'all' || item.category === category);

  function dayKey() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }

  function dailySelection() {
    const uniqueWords = [...new Map(words.map((item) => [item.word, item])).values()];
    let seed = [...dayKey()].reduce((total, character) => ((total * 31) + character.charCodeAt(0)) >>> 0, 17);
    const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const selection = [];
    const choices = [...uniqueWords];
    while (selection.length < 10 && choices.length) selection.push(choices.splice(Math.floor(random() * choices.length), 1)[0]);
    return selection;
  }

  function startDaily() {
    dailyMode = true;
    dailyWords = dailySelection();
    dailyIndex = 0;
    score = 0;
    streak = 0;
    used = [];
    current = dailyWords[0];
    answered = false;
    renderCard();
    updateStats();
    event('article_daily_started', { word_count: dailyWords.length });
  }

  function nextWord() {
    if (dailyMode) {
      if (dailyIndex >= dailyWords.length - 1) { renderDailyResult(); return; }
      dailyIndex += 1;
      current = dailyWords[dailyIndex];
      answered = false;
      renderCard();
      updateStats();
      return;
    }
    const available = pool().filter((item) => !used.includes(item.word));
    if (!available.length) used = [];
    const choices = available.length ? available : pool();
    current = choices[Math.floor(Math.random() * choices.length)];
    used.push(current.word);
    answered = false;
    renderCard();
  }

  function renderCard() {
    const t = text();
    const card = document.querySelector('#articleCard');
    if (!card || !current) return;
    card.innerHTML = `${dailyMode ? `<div class="daily-label">☀️ ${t.dailyProgress} · ${dailyIndex + 1}/10</div>` : ''}<div class="article-word"><span>___</span> ${current.word}</div><p class="article-prompt">${t.choose}</p><div class="article-options"><button data-article="der">der</button><button data-article="die">die</button><button data-article="das">das</button></div><div class="article-feedback" aria-live="polite"></div><button class="article-next" type="button" hidden>${dailyMode && dailyIndex === dailyWords.length - 1 ? t.finish : t.next}</button>`;
    card.querySelectorAll('[data-article]').forEach((button) => button.addEventListener('click', () => answer(button.dataset.article, button)));
    card.querySelector('.article-next').addEventListener('click', nextWord);
  }

  function answer(selected, button) {
    if (answered) return;
    answered = true;
    const t = text();
    const correct = selected === current.article;
    document.querySelectorAll('[data-article]').forEach((option) => {
      option.disabled = true;
      if (option.dataset.article === current.article) option.classList.add('is-correct');
    });
    if (correct) { score += 10; streak += 1; button.classList.add('is-correct'); }
    else { streak = 0; button.classList.add('is-wrong'); }
    const feedback = document.querySelector('.article-feedback');
    feedback.innerHTML = `<strong>${correct ? t.correct : `${t.wrong} ${current.article} ${current.word}`}</strong><div class="article-rule"><b>${t.rule}:</b> ${language() === 'de' ? current.ruleDe : current.ruleUk}</div><div class="article-tip"><b>${t.tip}:</b> ${language() === 'de' ? current.tipDe : current.tipUk}</div>`;
    document.querySelector('.article-next').hidden = false;
    updateStats();
    event('article_answered', { category: current.category, result: correct ? 'correct' : 'wrong' });
  }

  function renderDailyResult() {
    const t = text();
    const correctAnswers = score / 10;
    const message = correctAnswers === 10 ? t.perfect : `${t.result}: ${correctAnswers}/10`;
    const shareText = t.shareText.replace('{score}', correctAnswers);
    document.querySelector('#articleCard').innerHTML = `<div class="daily-result"><span>☀️</span><h3>${message}</h3><p>${t.dailyHint}</p><button class="article-share" type="button">${t.share}</button><button class="article-practice" type="button">${t.practice}</button></div>`;
    document.querySelector('.article-share').addEventListener('click', async () => {
      try {
        if (navigator.share) await navigator.share({ title: 'DeutschEcht', text: shareText, url: window.location.href.split('#')[0] + '#articles' });
        else { await navigator.clipboard.writeText(`${shareText} ${window.location.href.split('#')[0]}#articles`); document.querySelector('.article-share').textContent = t.copied; }
      } catch (_) { /* The visitor can close the native share dialog without an error message. */ }
    });
    document.querySelector('.article-practice').addEventListener('click', () => { dailyMode = false; score = 0; streak = 0; used = []; nextWord(); });
    event('article_daily_completed', { score: correctAnswers, total: 10 });
  }

  function updateStats() {
    const t = text();
    document.querySelector('#articleScore').textContent = `${score} ${t.score}`;
    document.querySelector('#articleStreak').textContent = `🔥 ${streak} ${t.streak}`;
    document.querySelector('#articleProgress').textContent = dailyMode ? `${t.dailyProgress}: ${dailyIndex + 1} / 10` : `${t.progress}: ${Math.min(used.length, pool().length)} / ${pool().length} ${t.words}`;
  }

  function renderLabels() {
    const t = text();
    document.querySelector('#articleNavLink').textContent = t.nav;
    document.querySelectorAll('[data-article-category]').forEach((button) => { button.textContent = t[button.dataset.articleCategory]; });
    document.querySelector('#articleKicker').textContent = t.kicker;
    document.querySelector('#articleTitle').textContent = t.title;
    document.querySelector('#articleIntro').textContent = t.intro;
    document.querySelector('#articleReset').textContent = t.reset;
    document.querySelector('#articleDailyTitle').textContent = t.daily;
    document.querySelector('#articleDaily').textContent = t.daily;
    document.querySelector('#articleDailyHint').textContent = t.dailyHint;
    updateStats();
    if (current) renderCard();
  }

  function init() {
    const nav = document.querySelector('nav');
    if (nav && !document.querySelector('#articleNavLink')) {
      const link = document.createElement('a');
      link.id = 'articleNavLink';
      link.href = '#articles';
      nav.appendChild(link);
    }
    const section = document.createElement('section');
    section.id = 'articles';
    section.className = 'articles-game';
    section.innerHTML = `<style>
      .articles-game{background:#f0e9df}.article-layout{display:grid;grid-template-columns:.78fr 1.22fr;gap:22px;margin-top:32px}.article-categories{display:grid;gap:9px;align-content:start}.article-categories button,.article-options button,.article-next,#articleReset,#articleDaily,.article-share,.article-practice{font:800 14px Manrope,Arial;border-radius:13px;cursor:pointer}.article-categories button{padding:14px;text-align:left;background:#fff;border:1px solid var(--line)}.article-categories button.active{background:var(--gold);border-color:var(--ink);box-shadow:3px 3px 0 var(--ink)}.article-panel{background:#fffdf8;border:1px solid var(--line);border-radius:23px;padding:28px;box-shadow:var(--shadow)}.article-stats{display:flex;gap:9px;flex-wrap:wrap;margin-bottom:20px}.article-stat{background:var(--ink);color:#fff;padding:8px 11px;border-radius:9px;font:800 12px Manrope,Arial}.daily-box{margin:0 0 20px;padding:15px;border:2px solid var(--ink);border-radius:15px;background:var(--gold)}.daily-box b{display:block;font-size:15px}.daily-box p{margin:4px 0 10px;font-size:12px}.daily-box button,.article-share{border:0;background:var(--ink);color:#fff;padding:10px 13px}.daily-label{font:800 12px Manrope,Arial;color:var(--red)}.article-word{font-size:clamp(34px,5vw,52px);font-weight:800;letter-spacing:-2px;margin:8px 0}.article-word span{color:var(--red)}.article-prompt{color:var(--muted);font-size:13px}.article-options{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}.article-options button{padding:15px;background:#fff;border:1px solid var(--line);font-size:19px}.article-options button:hover:not(:disabled){border-color:var(--ink);background:var(--gold)}.article-options .is-correct{background:#e3f2d5;border-color:#397218}.article-options .is-wrong{background:#ffe0dc;border-color:var(--red)}.article-feedback{min-height:42px;font-size:13px;line-height:1.65}.article-feedback strong{display:block;color:#397218}.article-rule,.article-tip{margin-top:8px;padding:10px 12px;border-left:3px solid var(--gold);background:#fff8ec}.article-tip{border-left-color:var(--red)}.article-next,#articleReset{border:0;padding:11px 15px;background:var(--ink);color:#fff;margin-top:17px}.article-bottom{display:flex;justify-content:space-between;gap:16px;align-items:center;margin-top:14px;color:var(--muted);font-size:12px}.article-bottom button{margin-top:0;background:#fff;color:var(--ink);border:1px solid var(--line)}.daily-result{text-align:center;padding:18px 0}.daily-result>span{font-size:44px}.daily-result h3{font-size:27px;margin:6px 0}.daily-result p{color:var(--muted);font-size:13px}.article-practice{border:1px solid var(--line);background:#fff;color:var(--ink);padding:10px 13px;margin-left:8px}@media(max-width:850px){.article-layout{grid-template-columns:1fr}.article-categories{grid-template-columns:1fr 1fr}.article-categories button:last-child{grid-column:span 2}}@media(max-width:520px){.article-panel{padding:20px}.article-options{gap:7px}.article-bottom{align-items:flex-start;flex-direction:column}.article-categories{grid-template-columns:1fr}.article-categories button:last-child{grid-column:auto}.article-practice{margin:8px 0 0}}</style>
      <div class="wrap"><span class="kicker" id="articleKicker"></span><h2 id="articleTitle"></h2><p class="intro" id="articleIntro"></p><div class="article-layout"><div class="article-categories"><button class="active" data-article-category="all"></button><button data-article-category="alltag"></button><button data-article-category="zuhause"></button><button data-article-category="arbeit"></button><button data-article-category="essen"></button><button data-article-category="unterwegs"></button><button data-article-category="gesundheit"></button><button data-article-category="behoerden"></button><button data-article-category="deutsch"></button></div><div class="article-panel"><div class="daily-box"><b id="articleDailyTitle"></b><p id="articleDailyHint"></p><button id="articleDaily" type="button"></button></div><div class="article-stats"><span class="article-stat" id="articleScore"></span><span class="article-stat" id="articleStreak"></span></div><div id="articleCard"></div><div class="article-bottom"><span id="articleProgress"></span><button id="articleReset" type="button"></button></div></div></div></div>`;
    const exercises = document.querySelector('#exercises');
    (exercises || document.querySelector('main')).before(section);
    document.querySelectorAll('[data-article-category]').forEach((button) => button.addEventListener('click', () => {
      dailyMode = false; category = button.dataset.articleCategory; used = []; score = 0; streak = 0;
      document.querySelectorAll('[data-article-category]').forEach((item) => item.classList.toggle('active', item === button));
      nextWord(); event('article_category_selected', { category });
    }));
    document.querySelector('#articleReset').addEventListener('click', () => { if (dailyMode) startDaily(); else { score = 0; streak = 0; used = []; nextWord(); } });
    document.querySelector('#articleDaily').addEventListener('click', startDaily);
    document.querySelector('#lang')?.addEventListener('click', () => setTimeout(renderLabels, 0));
    renderLabels();
    nextWord();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
