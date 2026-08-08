import { formatRegisteredOffice } from "@/lib/seo/config";

export type DatenschutzSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export const datenschutzStand = "August 2026";

export const datenschutzSections: DatenschutzSection[] = [
  {
    id: "ueberblick",
    title: "1. Datenschutz auf einen Blick",
    paragraphs: [
      "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen oder uns über das Kontaktformular eine Anfrage senden.",
      "Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie dieser Datenschutzerklärung.",
    ],
    bullets: [
      `Verantwortlich für die Datenverarbeitung auf dieser Website ist OCHS Digital Consulting (Mariia Ochs), Betriebssitz ${formatRegisteredOffice()}.`,
      "Beim Besuch der Website werden technisch notwendige Server-Logdaten durch unseren Hosting-Anbieter Vercel verarbeitet.",
      "Wenn Sie das Formular „Kostenlose Website-Analyse“ nutzen, werden Ihre Angaben über den Dienst Formspree an uns übermittelt.",
      "Wir setzen derzeit keine Analyse- oder Marketing-Tools ein und verwenden keine Cookies zu Tracking-Zwecken.",
    ],
  },
  {
    id: "verantwortlicher",
    title: "2. Verantwortliche Stelle",
    paragraphs: [
      "Verantwortliche Stelle für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
    ],
  },
  {
    id: "allgemein",
    title: "3. Allgemeine Hinweise und Pflichtinformationen",
    paragraphs: [
      "Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
      "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben, wofür wir sie nutzen und zu welchem Zweck das geschieht.",
      "Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail oder über Formulare) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
    ],
  },
  {
    id: "hosting",
    title: "4. Hosting",
    paragraphs: [
      "Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Wenn Sie unsere Website besuchen, erfasst Vercel automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt.",
      "Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, stabilen und effizienten Bereitstellung unseres Online-Angebots.",
      "Die von Vercel verarbeiteten Daten können insbesondere folgende Informationen umfassen:",
    ],
    bullets: [
      "IP-Adresse (gekürzt oder in Protokolldateien gespeichert)",
      "Datum und Uhrzeit der Anfrage",
      "aufgerufene Seite bzw. Datei",
      "Referrer-URL (zuvor besuchte Seite)",
      "Browsertyp, Browserversion und Betriebssystem",
      "übertragene Datenmenge und HTTP-Statuscode",
    ],
  },
  {
    id: "ssl",
    title: "5. SSL- bzw. TLS-Verschlüsselung",
    paragraphs: [
      "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte — z. B. Ihrer Eingaben im Kontaktformular — eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
      "Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht ohne Weiteres von Dritten mitgelesen werden.",
    ],
  },
  {
    id: "kontaktformular",
    title: "6. Kontaktformular „Kostenlose Website-Analyse“",
    paragraphs: [
      "Wenn Sie uns über das Formular auf der Seite /praxisanalyse kontaktieren, verarbeiten wir die von Ihnen eingegebenen Daten zur Bearbeitung Ihrer Analyse-Anfrage, zur Erstellung einer ersten Einschätzung sowie zur Vorbereitung eines unverbindlichen Erstgesprächs und für mögliche Anschlussfragen.",
      "Pflichtangaben sind insbesondere Ansprechpartner, Praxisname, E-Mail-Adresse und gewünschte Leistung. Optional können Sie Telefonnummer, Fachrichtung, Standort, Angaben zu Ihrer Website sowie Freitext mitteilen.",
      "Ohne diese Daten können wir Ihre Anfrage in der Regel nicht bearbeiten. Mit dem Absenden des Formulars senden Sie uns eine konkrete Anfrage zur Anbahnung einer möglichen Zusammenarbeit.",
      "Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage hin). Soweit erforderlich, stützen wir die Bearbeitung ergänzend auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).",
      "Die von Ihnen im Formular eingegebenen Daten verbleiben bei uns, bis der Zweck der Speicherung entfällt oder Sie der Speicherung widersprechen. Zwingende gesetzliche Bestimmungen — insbesondere Aufbewahrungsfristen — bleiben unberührt.",
    ],
  },
  {
    id: "formspree",
    title: "7. Formular-Dienst Formspree",
    paragraphs: [
      "Für den technischen Versand des Kontaktformulars nutzen wir den Dienst Formspree (Formspree, Inc., USA). Wenn Sie das Formular absenden, werden Ihre Angaben an die Server von Formspree übermittelt und von dort per E-Mail an uns weitergeleitet.",
      "Formspree verarbeitet die Daten in unserem Auftrag. Mit Formspree besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO. Sofern Daten in die USA übermittelt werden, erfolgt dies auf Grundlage der EU-Standardvertragsklauseln sowie — soweit anwendbar — des EU-US Data Privacy Framework.",
      "Weitere Informationen finden Sie in der Datenschutzerklärung von Formspree unter https://formspree.io/legal/privacy-policy",
    ],
  },
  {
    id: "cookies",
    title: "8. Cookies und Tracking",
    paragraphs: [
      "Diese Website verwendet derzeit keine Cookies zu Analyse-, Marketing- oder Profiling-Zwecken.",
      "Beim Aufruf der Website können technisch notwendige Session- oder Sicherheitsinformationen durch den Hosting-Anbieter verarbeitet werden. Diese dienen ausschließlich dem Betrieb und der Sicherheit der Website.",
      "Sollten wir künftig Tracking- oder Analyse-Tools einsetzen, werden wir diese Datenschutzerklärung entsprechend anpassen und — soweit gesetzlich erforderlich — vorab Ihre Einwilligung einholen.",
    ],
  },
  {
    id: "schriften",
    title: "9. Schriftarten",
    paragraphs: [
      "Diese Website nutzt die Schriftart „Inter“. Die Schriftdateien werden beim Build-Prozess lokal eingebunden und von unserem Server bzw. dem Hosting-Anbieter ausgeliefert. Beim Seitenaufruf findet keine direkte Verbindung zu Servern von Google statt.",
    ],
  },
  {
    id: "externe-links",
    title: "10. Externe Links",
    paragraphs: [
      "Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Beispielsweise verlinken wir im Footer auf Google Maps, um unseren Standort anzuzeigen.",
      "Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Beim Anklicken eines externen Links verlassen Sie unsere Website. Es gelten dann die Datenschutzbestimmungen des jeweiligen Anbieters.",
    ],
  },
  {
    id: "speicherdauer",
    title: "11. Speicherdauer",
    paragraphs: [
      "Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.",
      "Anfragen über das Kontaktformular speichern wir in der Regel bis zu 24 Monate nach Abschluss der Korrespondenz, sofern kein Vertragsverhältnis zustande kommt. Entsteht ein Vertragsverhältnis, gelten die gesetzlichen handels- und steuerrechtlichen Aufbewahrungsfristen (regelmäßig 6 bis 10 Jahre).",
      "Server-Logdateien des Hosting-Anbieters werden nach den Vorgaben von Vercel in der Regel nur für einen begrenzten Zeitraum aufbewahrt.",
    ],
  },
  {
    id: "rechtsgrundlagen",
    title: "12. Rechtsgrundlagen der Verarbeitung",
    paragraphs: [
      "Sofern Sie in eine Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.",
      "Die Verarbeitung zur Erfüllung vorvertraglicher Maßnahmen oder zur Vertragserfüllung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.",
      "Soweit die Verarbeitung zur Wahrung eines berechtigten Interesses erforderlich ist, erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt insbesondere in der sicheren Bereitstellung der Website sowie in der Bearbeitung und Beantwortung von Anfragen.",
    ],
  },
  {
    id: "rechte",
    title: "13. Ihre Rechte",
    paragraphs: [
      "Sie haben jederzeit folgende Rechte gegenüber uns:",
    ],
    bullets: [
      "Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)",
      "Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten (Art. 16 DSGVO)",
      "Löschung Ihrer bei uns gespeicherten Daten, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen (Art. 17 DSGVO)",
      "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Datenübertragbarkeit, soweit die Verarbeitung auf Einwilligung oder Vertrag gestützt wird (Art. 20 DSGVO)",
      "Widerspruch gegen die Verarbeitung, soweit diese auf Art. 6 Abs. 1 lit. f DSGVO beruht (Art. 21 DSGVO)",
      "Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)",
    ],
  },
  {
    id: "widerspruch",
    title: "14. Widerspruch gegen die Verarbeitung",
    paragraphs: [
      "Sofern wir personenbezogene Daten auf Grundlage eines berechtigten Interesses verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen.",
      "Werden personenbezogene Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung zu diesem Zweck einzulegen.",
    ],
  },
  {
    id: "beschwerde",
    title: "15. Beschwerderecht bei der Aufsichtsbehörde",
    paragraphs: [
      "Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht zu, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.",
      "Zuständige Aufsichtsbehörde für uns ist:",
    ],
  },
  {
    id: "aenderungen",
    title: "16. Änderung dieser Datenschutzerklärung",
    paragraphs: [
      "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen bzw. der eingesetzten Technologien abzubilden.",
      "Für Ihren erneuten Besuch gilt dann die jeweils aktuelle Datenschutzerklärung.",
    ],
  },
];

export const aufsichtsbehoerde = {
  name: "Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI)",
  address: "Postfach 10 29 32, 70025 Stuttgart",
  website: "https://www.baden-wuerttemberg.datenschutz.de",
};
