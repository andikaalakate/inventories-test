import { g as getDefaultExportFromCjs } from "../ssr.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var jodit_min$2 = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(self, function() {
    return function() {
      var e, t = { 90643: function(e2) {
        e2.exports.default = ["إبدأ في الكتابة...", "حول جوديت", "محرر جوديت", null, "دليل مستخدم جوديت", "يحتوي على مساعدة مفصلة للاستخدام", "للحصول على معلومات حول الترخيص، يرجى الذهاب لموقعنا:", "شراء النسخة الكاملة", "حقوق الطبع والنشر © XDSoft.net - Chupurnov Valeriy. كل الحقوق محفوظة.", "مِرْساة", "فتح في نافذة جديدة", "فتح المحرر في الحجم الكامل", "مسح التنسيق", "ملء اللون أو تعيين لون النص", "إعادة", "تراجع", "عريض", "مائل", "إدراج قائمة غير مرتبة", "إدراج قائمة مرتبة", "محاذاة للوسط", "محاذاة مثبتة", "محاذاة لليسار", "محاذاة لليمين", "إدراج خط أفقي", "إدراج صورة", "ادخال الملف", "إدراج فيديو يوتيوب/فيميو ", "إدراج رابط", "حجم الخط", "نوع الخط", "إدراج كتلة تنسيق", "عادي", "عنوان 1", "عنوان 2", "عنوان 3", "عنوان 4", "إقتباس", "كود", "إدراج", "إدراج جدول", "تقليل المسافة البادئة", "زيادة المسافة البادئة", "تحديد أحرف خاصة", "إدراج حرف خاص", "تنسيق الرسم", "تغيير الوضع", "هوامش", "أعلى", "يمين", "أسفل", "يسار", "الأنماط", "الطبقات", "محاذاة", "اليمين", "الوسط", "اليسار", "--غير مضبوط--", "Src", "العنوان", "العنوان البديل", "الرابط", "افتح الرابط في نافذة جديدة", "الصورة", "ملف", "متقدم", "خصائص الصورة", "إلغاء", "حسنا", "يشبه الكود الخاص بك HTML. تبقي كما HTML؟", "الصق ك HTML", "احتفظ", "نظيفة", "إدراج كنص", "إدراج النص فقط", "كلمة لصق الكشف عن", "للصق المحتوى قادم من Microsoft Word/Excel الوثيقة. هل تريد أن تبقي شكل أو تنظيفه ؟ ", "متصفح الملفات", "حدث خطأ في تحميل القائمة ", "حدث خطأ في تحميل المجلدات", "هل أنت واثق؟", "أدخل اسم المجلد", "إنشاء مجلد", "أكتب إسم", "إسقاط صورة", "إسقاط الملف", "أو أنقر", "النص البديل", "تصفح", "رفع", "الخلفية", "نص", "أعلى", "الوسط", "الأسفل", "إدراج عمود قبل", "إدراج عمود بعد", "إدراج صف أعلى", "إدراج صف أسفل", "حذف الجدول", "حذف الصف", "حذف العمود", "خلية فارغة", "مصدر", "بالخط العريض", "مائل", "شغل", "صلة", "إلغاء", "كرر", "طاولة", "صورة", "نظيف", "فقرة", "حجم الخط", "فيديو", "الخط", "حول المحرر", "طباعة", "أكد", "شطب", "المسافة البادئة", "نتوء", "ملء الشاشة", "الحجم التقليدي", "الخط", "قائمة", "قائمة مرقمة", "قطع", "اختر الكل", "قانون", "فتح الرابط", "تعديل الرابط", "سمة Nofollow", "إزالة الرابط", "مراجعة", "لتحرير", "تحديث", "URL", "تحرير", "محاذاة أفقية", "فلتر", "عن طريق التغيير", "بالاسم", "حسب الحجم", "إضافة مجلد", "إعادة", "احتفظ", "حفظ باسم", "تغيير الحجم", "حجم القطع", "عرض", "ارتفاع", "حافظ على النسب", "أن", "لا", "حذف", "تميز", "%d حرف", "%d كلام", null, "تميز %s", "اختر الكل", "محاذاة عمودية", "انشق، مزق", "انقسام عمودي", "تقسيم أفقي", "اذهب", "أضف العمود", "اضف سطر", "حذف", "الحدود", "رخصة %s", "اضرب من خلال", "أكد", "حرف فوقي", "مخطوطة", "قطع الاختيار", "استراحة", "البحث عن", "استبدل ب", "محل", "معجون", "اختر محتوى للصق", "يمكنك فقط تحرير صورك الخاصة. تحميل هذه الصورة على المضيف؟", "تم تحميل الصورة بنجاح على الخادم!", "لوحة", "لا توجد ملفات في هذا الدليل.", "إعادة تسمية", "أدخل اسم جديد", "معاينة", "تحميل", "لصق من الحافظة", "متصفحك لا يدعم إمكانية الوصول المباشر إلى الحافظة.", "نسخ التحديد", "نسخ", "دائرة نصف قطرها الحدود", "عرض كل", "تطبيق", "يرجى ملء هذا المجال", "يرجى إدخال عنوان ويب", "الافتراضي", "دائرة", "نقطة", "المربعة", "البحث", "تجد السابقة", "تجد التالي", "أدخل اسم الفصل", "اضغط البديل لتغيير حجم مخصص"];
      }, 52532: function(e2) {
        e2.exports.default = ["Napiš něco", "O Jodit", "Editor Jodit", "Verze pro nekomerční použití", "Jodit Uživatelská příručka", "obsahuje detailní nápovědu", "Pro informace o licenci, prosím, přejděte na naši stránku:", "Koupit plnou verzi", "Copyright © XDSoft.net - Chupurnov Valeriy. Všechna práva vyhrazena.", "Anchor", "Otevřít v nové záložce", "Otevřít v celoobrazovkovém režimu", "Vyčistit formátování", "Barva výplně a písma", "Vpřed", "Zpět", "Tučné", "Kurzíva", "Odrážky", "Číslovaný seznam", "Zarovnat na střed", "Zarovnat do bloku", "Zarovnat vlevo", "Zarovnat vpravo", "Vložit horizontální linku", "Vložit obrázek", "Vložit soubor", "Vložit video (YT/Vimeo)", "Vložit odkaz", "Velikost písma", "Typ písma", "Formátovat blok", "Normální text", "Nadpis 1", "Nadpis 2", "Nadpis 3", "Nadpis 4", "Citát", "Kód", "Vložit", "Vložit tabulku", "Zmenšit odsazení", "Zvětšit odsazení", "Vybrat speciální symbol", "Vložit speciální symbol", "Použít formát", "Změnit mód", "Okraje", "horní", "pravý", "spodní", "levý", "Styly", "Třídy", "Zarovnání", "Vpravo", "Na střed", "Vlevo", "--nenastaveno--", "src", "Titulek", "Alternativní text (alt)", "Link", "Otevřít link v nové záložce", "Obrázek", "soubor", "Rozšířené", "Vlastnosti obrázku", "Zpět", "Ok", "Váš text se podobá HTML. Vložit ho jako HTML?", "Vložit jako HTML", "Ponechat originál", "Vyčistit", "Vložit jako TEXT", "Vložit pouze TEXT", "Detekován fragment z Wordu nebo Excelu", "Obsah, který vkládáte, je pravděpodobně z Microsoft Word / Excel. Chcete ponechat formát nebo vložit pouze text?", "Prohlížeč souborů", "Chyba při načítání seznamu souborů", "Chyba při načítání složek", "Jste si jistý(á)?", "Název složky", "Vytvořit složku", "název", "Přetáhněte sem obrázek", "Přetáhněte sem soubor", "nebo klikněte", "Alternativní text", "Server", "Nahrát", "Pozadí", "Text", "Nahoru", "Na střed", "Dolu", "Vložit sloupec před", "Vložit sloupec za", "Vložit řádek nad", "Vložit řádek pod", "Vymazat tabulku", "Vymazat řádku", "Vymazat sloupec", "Vyčistit buňku", "HTML", "tučně", "kurzíva", "štětec", "odkaz", "zpět", "vpřed", "tabulka", "obrázek", "guma", "odstavec", "velikost písma", "video", "písmo", "о editoru", "tisk", "podtrženo", "přeškrtnuto", "zvětšit odsazení", "zmenšit odsazení", "celoobrazovkový režim", "smrsknout", "Linka", "Odrážka", "Číslovaný seznam", "Vyjmout", "Označit vše", "Kód", "Otevřít odkaz", "Upravit odkaz", "Atribut no-follow", "Odstranit odkaz", "Zobrazit", "Chcete-li upravit", "Aktualizovat", "URL", "Editovat", "Horizontální zarovnání", "Filtr", "Dle poslední změny", "Dle názvu", "Dle velikosti", "Přidat složku", "Reset", "Uložit", "Uložit jako...", "Změnit rozměr", "Ořezat", "Šířka", "Výška", "Ponechat poměr", "Ano", "Ne", "Vyjmout", "Označit", "Znaky: %d", "Slova: %d", "Vše", "Označit %s", "Označit vše", "Vertikální zarovnání", "Rozdělit", "Rozdělit vertikálně", "Rozdělit horizontálně", "Spojit", "Přidat sloupec", "Přidat řádek", "Vymazat", "Okraj", "Licence: %s", "Přeškrtnuto", "Podtrženo", "Horní index", "Dolní index", "Vyjmout označené", "Zalomení", "Najdi", "Nahradit za", "Vyměňte", "Vložit", "Vyber obsah pro vložení", "Můžete upravovat pouze své obrázky. Načíst obrázek?", "Obrázek byl úspěšně nahrán!", "paleta", "V tomto adresáři nejsou žádné soubory.", "přejmenovat", "Zadejte nový název", "náhled", "Stažení", "Vložit ze schránky", "Váš prohlížeč nepodporuje přímý přístup do schránky.", "Kopírovat výběr", "kopírování", "Border radius", "Zobrazit všechny", "Platí", "Prosím, vyplňte toto pole", "Prosím, zadejte webovou adresu", "Výchozí", "Kruh", "Dot", "Quadrate", "Najít", "Najít Předchozí", "Najít Další", "Vložte název třídy", "Stiskněte Alt pro vlastní změnu velikosti"];
      }, 75178: function(e2) {
        e2.exports.default = ["Bitte geben Sie einen Text ein", "Über Jodit", "Jodit Editor", null, "Das Jodit Benutzerhandbuch", "beinhaltet ausführliche Informationen wie Sie den Editor verwenden können.", "Für Informationen zur Lizenz, besuchen Sie bitte unsere Web-Präsenz:", "Vollversion kaufen", "Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.", "Anker", "In neuer Registerkarte öffnen", "Editor in voller Größe öffnen", "Formatierung löschen", "Füllfarbe oder Textfarbe ändern", "Wiederholen", "Rückgängig machen", "Fett", "Kursiv", "Unsortierte Liste einfügen", "Nummerierte Liste einfügen", "Mittig ausrichten", "Blocksatz", "Links ausrichten", "Rechts ausrichten", "Horizontale Linie einfügen", "Bild einfügen", "Datei einfügen", "Youtube/vimeo Video einfügen", "Link einfügen", "Schriftgröße", "Schriftfamilie", "Formatblock einfügen", "Normal", "Überschrift 1", "Überschrift 2", "Überschrift 3", "Überschrift 4", "Zitat", "Code", "Einfügen", "Tabelle einfügen", "Einzug verkleinern", "Einzug vergrößern", "Sonderzeichen auswählen", "Sonderzeichen einfügen", "Format kopieren", "Änderungsmodus", "Ränder", "Oben", "Rechts", "Unten", "Links", "CSS Stil", "CSS Klassen", "Ausrichtung", "Rechts", "Zentriert", "Links", "Keine", "Pfad", "Titel", "Alternativer Text", "Link", "Link in neuem Tab öffnen", "Bild", "Datei", "Fortgeschritten", "Bildeigenschaften", "Abbrechen", "OK", "Ihr Text ähnelt HTML-Code. Als HTML beibehalten?", "Als HTML einfügen?", "Original speichern", "Säubern", "Als Text einfügen", "Nur Text einfügen", "In Word formatierter Text erkannt", "Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder bereinigen?", "Dateibrowser", "Fehler beim Laden der Liste", "Fehler beim Laden der Ordner", "Sind Sie sicher?", "Geben Sie den Verzeichnisnamen ein", "Verzeichnis erstellen", "Typname", "Bild hier hinziehen", "Datei löschen", "oder hier klicken", "Alternativtext", "Auswählen", "Hochladen", "Hintergrund", "Text", "Oben", "Mittig", "Unten", "Spalte davor einfügen", "Spalte danach einfügen", "Zeile oberhalb einfügen", "Zeile unterhalb einfügen", "Tabelle löschen", "Zeile löschen", "Spalte löschen", "Zelle leeren", "HTML", "Fett gedruckt", "Kursiv", "Bürste", "Verknüpfung", "Rückgängig machen", "Wiederholen", "Tabelle", "Bild", "Radiergummi", "Absatz", "Schriftgröße", "Video", "Schriftart", "Über", "Drucken", "Unterstreichen", "Durchstreichen", "Einzug", "Herausstellen", "Vollgröße", "Schrumpfen", "die Linie", "Liste von", "Nummerierte Liste", "Schneiden", "Wählen Sie Alle aus", "Code einbetten", "Link öffnen", "Link bearbeiten", "Nofollow-Attribut", "Link entfernen", "Ansehen", "Bearbeiten", "Aktualisieren", "URL", "Bearbeiten", "Horizontale Ausrichtung", "Filter", "Sortieren nach geändert", "Nach Name sortieren", "Nach Größe sortiert", "Ordner hinzufügen", "Wiederherstellen", "Speichern", "Speichern als", "Größe ändern", "Größe anpassen", "Breite", "Höhe", "Seitenverhältnis beibehalten", "Ja", "Nein", "Entfernen", "Markieren", "Zeichen: %d", "Wörter: %d", "Alles markieren", "Markieren: %s", "Alles markieren", "Vertikale Ausrichtung", "Unterteilen", "Vertikal unterteilen", "Horizontal unterteilen", "Vereinen", "Spalte hinzufügen", "Zeile hinzufügen", "Löschen", "Rand", null, "Durchstreichen", "Unterstreichen", "Hochstellen", "Tiefstellen", "Auswahl ausschneiden", "Pause", "Suche nach", "Ersetzen durch", "Ersetzen", "Einfügen", "Wählen Sie den Inhalt zum Einfügen aus", "Sie können nur Ihre eigenen Bilder bearbeiten. Dieses Bild auf den Host herunterladen?", "Das Bild wurde erfolgreich auf den Server hochgeladen!", "Palette", "In diesem Verzeichnis befinden sich keine Dateien.", "Umbenennen", "Geben Sie einen neuen Namen ein", "Vorschau", "Herunterladen", "Aus Zwischenablage einfügen", "Ihr Browser unterstützt keinen direkten Zugriff auf die Zwischenablage.", "Auswahl kopieren", "Kopieren", "Radius für abgerundete Ecken", "Alle anzeigen", "Anwenden", "Bitte füllen Sie dieses Feld aus", "Bitte geben Sie eine Web-Adresse ein", "Standard", "Kreis", "Punkte", "Quadrate", "Suchen", "Suche vorherige", "Weitersuchen", "className (CSS) einfügen", "Drücken Sie Alt für benutzerdefinierte Größenanpassung"];
      }, 51048: function(e2) {
        e2.exports.default = { "Type something": "Start writing...", pencil: "Edit", Quadrate: "Square" };
      }, 22999: function(e2) {
        e2.exports.default = ["Escriba algo...", "Acerca de Jodit", "Jodit Editor", null, "Guía de usuario Jodit", "contiene ayuda detallada para el uso.", "Para información sobre la licencia, por favor visite nuestro sitio:", "Compre la versión completa", "Copyright © XDSoft.net - Chupurnov Valeriy. Todos los derechos reservados.", "Anclar", "Abrir en nueva pestaña", "Abrir editor en pantalla completa", "Limpiar formato", "Color de relleno o de letra", "Rehacer", "Deshacer", "Negrita", "Cursiva", "Insertar lista no ordenada", "Insertar lista ordenada", "Alinear Centrado", "Alinear Justificado", "Alinear Izquierda", "Alinear Derecha", "Insertar línea horizontal", "Insertar imagen", "Insertar archivo", "Insertar video de Youtube/vimeo", "Insertar vínculo", "Tamaño de letra", "Familia de letra", "Insertar bloque", "Normal", "Encabezado 1", "Encabezado 2", "Encabezado 3", "Encabezado 4", "Cita", "Código", "Insertar", "Insertar tabla", "Disminuir sangría", "Aumentar sangría", "Seleccionar caracter especial", "Insertar caracter especial", "Copiar formato", "Cambiar modo", "Márgenes", "arriba", "derecha", "abajo", "izquierda", "Estilos CSS", "Clases CSS", "Alinear", "Derecha", "Centrado", "Izquierda", "--No Establecido--", "Fuente", "Título", "Texto Alternativo", "Vínculo", "Abrir vínculo en nueva pestaña", "Imagen", "Archivo", "Avanzado", "Propiedades de imagen", "Cancelar", "Aceptar", "El código es similar a HTML. ¿Mantener como HTML?", "Pegar como HTML?", "Mantener", "Limpiar", "Insertar como texto", "Insertar solo texto", "Pegado desde Word detectado", "El contenido pegado proviene de un documento de Microsoft Word/Excel. ¿Desea mantener el formato o limpiarlo?", "Buscar archivo", "Error al cargar la lista", "Error al cargar las carpetas", "¿Está seguro?", "Entre nombre de carpeta", "Crear carpeta", "Entre el nombre", "Soltar imagen", "Soltar archivo", "o click", "Texto alternativo", "Buscar", "Subir", "Fondo", "Texto", "Arriba", "Centro", "Abajo", "Insertar columna antes", "Interar columna después", "Insertar fila arriba", "Insertar fila debajo", "Borrar tabla", "Borrar fila", "Borrar columna", "Vaciar celda", "HTML", "negrita", "cursiva", "Brocha", "Vínculo", "deshacer", "rehacer", "Tabla", "Imagen", "Borrar", "Párrafo", "Tamaño de letra", "Video", "Letra", "Acerca de", "Imprimir", "subrayar", "tachar", "sangría", "quitar sangría", "Tamaño completo", "encoger", "línea horizontal", "lista sin ordenar", "lista ordenada", "Cortar", "Seleccionar todo", "Incluir código", "Abrir vínculo", "Editar vínculo", "No seguir", "Desvincular", "Ver", "Para editar", "Actualizar", "URL", "Editar", "Alineación horizontal", "Filtrar", "Ordenar por fecha modificación", "Ordenar por nombre", "Ordenar por tamaño", "Agregar carpeta", "Resetear", "Guardar", "Guardar como...", "Redimensionar", "Recortar", "Ancho", "Alto", "Mantener relación de aspecto", "Si", "No", "Quitar", "Seleccionar", "Caracteres: %d", "Palabras: %d", "Todo", "Seleccionar: %s", "Seleccionar todo", "Alineación vertical", "Dividir", "Dividir vertical", "Dividir horizontal", "Mezclar", "Agregar columna", "Agregar fila", "Borrar", "Borde", null, "Tachado", "Subrayado", "superíndice", "subíndice", "Cortar selección", "Pausa", "Buscar", "Reemplazar con", "Reemplazar", "Pegar", "Seleccionar contenido para pegar", "Solo puedes editar tus propias imágenes. ¿Descargar esta imagen en el servidor?", "¡La imagen se ha subido correctamente al servidor!", "paleta", "No hay archivos en este directorio.", "renombrar", "Ingresa un nuevo nombre", "avance", "Descargar", "Pegar desde el portapapeles", "Su navegador no soporta el acceso directo en el portapapeles.", "Selección de copia", "copia", "Radio frontera", "Mostrar todos los", "Aplicar", "Por favor, rellene este campo", "Por favor, introduzca una dirección web", "Predeterminado", "Círculo", "Punto", "Cuadro", "Encontrar", "Buscar Anterior", "Buscar Siguiente", "Insertar nombre de clase", "Presione Alt para cambiar el tamaño personalizado"];
      }, 34145: function(e2) {
        e2.exports.default = ["Ecrivez ici", "A propos de Jodit", "Editeur Jodit", null, "Guide de l'utilisateur", "Aide détaillée à l'utilisation", "Consulter la licence sur notre site web:", "Acheter la version complète", "Copyright © XDSoft.net - Chupurnov Valeriy. Tous droits réservés.", "Ancre", "Ouvrir dans un nouvel onglet", "Ouvrir l'éditeur en pleine page", "Supprimer le formattage", "Modifier la couleur du fond ou du texte", "Refaire", "Défaire", "Gras", "Italique", "Liste non ordonnée", "Liste ordonnée", "Centrer", "Justifier", "Aligner à gauche ", "Aligner à droite", "Insérer une ligne horizontale", "Insérer une image", "Insérer un fichier", "Insérer une vidéo", "Insérer un lien", "Taille des caractères", "Famille des caractères", "Bloc formatté", "Normal", "Titre 1", "Titre 2", "Titre 3", "Titre 4", "Citation", "Code", "Insérer", "Insérer un tableau", "Diminuer le retrait", "Retrait plus", "Sélectionnez un caractère spécial", "Insérer un caractère spécial", "Cloner le format", "Mode wysiwyg <-> code html", "Marges", "haut", "droite", "Bas", "gauche", "Styles", "Classes", "Alignement", "Droite", "Centre", "Gauche", "--Non disponible--", "Source", "Titre", "Alternative", "Lien", "Ouvrir le lien dans un nouvel onglet", "Image", "fichier", "Avancé", "Propriétés de l'image", "Annuler", "OK", "Votre texte que vous essayez de coller est similaire au HTML. Collez-le en HTML?", "Coller en HTML?", "Sauvegarder l'original", "Nettoyer", "Coller en tant que texte", "Coller le texte seulement", "C'est peut-être un fragment de Word ou Excel", "Le contenu que vous insérez provient d'un document Microsoft Word / Excel. Voulez-vous enregistrer le format ou l'effacer?", "Explorateur de fichiers", "Erreur de liste de chargement", "Erreur de dossier de chargement", "Etes-vous sûrs ?", "Entrer le nom de dossier", "Créer un dossier", "type de fichier", "Coller une image", "Déposer un fichier", "ou cliquer", "Texte de remplacemement", "Chercher", "Charger", "Arrière-plan", "Texte", "Haut", "Milieu", "Bas", "Insérer une colonne avant", "Insérer une colonne après", "Insérer une ligne au dessus", "Insérer une ligne en dessous", "Supprimer le tableau", "Supprimer la ligne", "Supprimer la colonne", "Vider la cellule", "la source", "gras", "italique", "pinceau", "lien", "annuler", "refaire", "tableau", "image", "gomme", "clause", "taille de police", "Video", "police", "à propos de l'éditeur", "impression", "souligné", "barré", "indentation", "retrait", "taille réelle", "taille conventionnelle", "la ligne", "Liste", "Liste numérotée", "Couper", "Sélectionner tout", null, "Ouvrir le lien", "Modifier le lien", "Attribut Nofollow", "Supprimer le lien", "Voir", "Pour éditer", "Mettre à jour", "URL", null, "Alignement horizontal", "Filtre", "Trier par modification", "Trier par nom", "Trier par taille", "Créer le dossier", "Restaurer", "Sauvegarder", "Enregistrer sous", "Changer la taille", "Taille de garniture", "Largeur", "Hauteur", "Garder les proportions", "Oui", "Non", "Supprimer", "Mettre en évidence", "Symboles: %d", "Mots: %d", null, "Mettre en évidence: %s", "Tout sélectionner", "Alignement vertical", "Split", "Split vertical", "Split horizontal", "aller", "Ajouter une colonne", "Ajouter une rangée", "Effacer", "Bordure", null, "Barrer", "Souligner", "exposant", "indice", "Couper la sélection", "Pause", "Rechercher", "Remplacer par", "Remplacer", "Coller", "Choisissez le contenu à coller", "Vous ne pouvez éditer que vos propres images. Téléchargez cette image sur l'hôte?", "L'image a été téléchargée avec succès sur le serveur!", "Palette", "Il n'y a aucun fichier dans ce répertoire.", "renommer", "Entrez un nouveau nom", "Aperçu", "Télécharger", "Coller à partir du presse-papiers", "Votre navigateur ne prend pas en charge l'accès direct au presse-papiers.", "Copier la sélection", "copie", "Rayon des bordures", "Afficher tous", "Appliquer", "Veuillez remplir ce champ", "Veuillez entrer une adresse web", "Par défaut", "Cercle", "Point", "Quadratique", "Trouver", "Précédent", "Suivant", "Insérer un nom de classe", "Appuyez sur Alt pour un redimensionnement personnalisé"];
      }, 40272: function(e2) {
        e2.exports.default = ["הקלד משהו...", "About Jodit", "Jodit Editor", null, "Jodit User's Guide", "contains detailed help for using.", "For information about the license, please go to our website:", "Buy full version", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "מקום עיגון", "פתח בכרטיסיה חדשה", "פתח את העורך בחלון חדש", "נקה עיצוב", "שנה צבע טקסט או רקע", "בצע שוב", "בטל", "מודגש", "נטוי", "הכנס רשימת תבליטים", "הכנס רשימה ממוספרת", "מרכז", "ישר ", "ישר לשמאל", "ישר לימין", "הכנס קו אופקי", "הכנס תמונה", "הכנס קובץ", "הכנס סרטון וידאו מYouTube/Vimeo", "הכנס קישור", "גודל גופן", "גופן", "מעוצב מראש", "רגיל", "כותרת 1", "כותרת 2", "כותרת 3", "כותרת 4", "ציטוט", "קוד", "הכנס", "הכנס טבלה", "הקטן כניסה", "הגדל כניסה", "בחר תו מיוחד", "הכנס תו מיוחד", "העתק עיצוב", "החלף מצב", "ריווח", "עליון", "ימין", "תחתון", "שמאל", "עיצוב CSS", "מחלקת CSS", "יישור", "ימין", "מרכז", "שמאל", "--לא נקבע--", "מקור", "כותרת", "כיתוב חלופי", "קישור", "פתח בכרטיסיה חדשה", "תמונה", "קובץ", "מתקדם", "מאפייני תמונה", "ביטול", "אישור", "הקוד דומה לHTML, האם להשאיר כHTML", "הדבק כHTML", "השאר", "נקה", "הכנס כטקסט", "הכנס טקסט בלבד", 'זוהתה הדבקה מ"וורד"', "התוכן המודבק מגיע ממסמך וורד/אקסל. האם ברצונך להשאיר את העיצוב או לנקותו", "סייר הקבצים", "שגיאה  בזמן טעינת רשימה", "שגיאה בזמן טעינת תקיות", "האם אתה בטוח?", "הכנס שם תקיה", "צור תקיה", "סוג הקובץ", "הסר תמונה", "הסר קובץ", "או לחץ", "כיתוב חלופי", "סייר", "העלה", "רקע", "טקסט", "עליון", "מרכז", "תחתון", "הכנס עמודה לפני", "הכנס עמודה אחרי", "הכנס שורה מעל", "הכנס שורה מתחת", "מחק טבלה", "מחק שורה", "מחק עמודה", "רוקן תא", "HTML", "מודגש", "נטוי", "מברשת", "קישור", "בטל", "בצע שוב", "טבלה", "תמונה", "מחק", "פסקה", "גודל גופן", "וידאו", "גופן", "עלינו", "הדפס", "קו תחתון", "קו חוצה", "הגדל כניסה", "הקטן כניסה", "גודל מלא", "כווץ", "קו אופקי", "רשימת תבליטים", "רשימה ממוספרת", "חתוך", "בחר הכל", "הוסף קוד", "פתח קישור", "ערוך קישור", "ללא מעקב", "בטל קישור", "הצג", "כדי לערוך", "עדכן", "כתובת", "ערוך", "יישור אופקי", "סנן", "מין לפי שינוי", "מיין לפי שם", "מיין לפי גודל", "הוסף תקייה", "אפס", "שמור", "שמור בשם...", "שנה גודל", "חתוך", "רוחב", "גובה", "שמור יחס", "כן", "לא", "הסר", "בחר", "תווים: %d", "מילים: %d", "הכל", "נבחר: %s", "בחר הכל", "יישור אנכי", "פיצול", "פיצול אנכי", "פיצול אופקי", "מזג", "הוסף עמודה", "הוסף שורה", "מחק", "מסגרת", null, "קו חוצה", "קו תחתון", "superscript", "subscript", "גזור בחירה", "שבירת שורה", "חפש", "החלף ב", "להחליף", "הדבק", "בחר תוכן להדבקה", "רק קבצים המשוייכים שלך ניתנים לעריכה. האם להוריד את הקובץ?", "התמונה עלתה בהצלחה!", "לוח", "אין קבצים בספריה זו.", "הונגרית", "הזן שם חדש", "תצוגה מקדימה", "הורד", "להדביק מהלוח", "הדפדפן שלך לא תומך גישה ישירה ללוח.", "העתק בחירה", "העתק", "רדיוס הגבול", "הצג את כל", "החל", "נא למלא שדה זה", "אנא הזן כתובת אינטרנט", "ברירת המחדל", "מעגל", "נקודה", "הריבוע הזה", "למצוא", "מצא את הקודם", "חפש את הבא", "הכנס את שם הכיתה", "לחץ על אלט לשינוי גודל מותאם אישית"];
      }, 2978: function(e2) {
        e2.exports.default = ["Írjon be valamit", "Joditról", "Jodit Editor", "Ingyenes változat", "Jodit útmutató", "további segítséget tartalmaz", "További licence információkért látogassa meg a weboldalunkat:", "Teljes verzió megvásárlása", "Copyright © XDSoft.net - Chupurnov Valeriy. Minden jog fenntartva.", "Horgony", "Megnyitás új lapon", "Megnyitás teljes méretben", "Formázás törlése", "Háttér/szöveg szín", "Újra", "Visszavon", "Félkövér", "Dőlt", "Pontozott lista", "Számozott lista", "Középre zárt", "Sorkizárt", "Balra zárt", "Jobbra zárt", "Vízszintes vonal beszúrása", "Kép beszúrás", "Fájl beszúrás", "Youtube videó beszúrása", "Link beszúrás", "Betűméret", "Betűtípus", "Formázott blokk beszúrása", "Normál", "Fejléc 1", "Fejléc 2", "Fejléc 3", "Fejléc 4", "Idézet", "Kód", "Beszúr", "Táblázat beszúrása", "Behúzás csökkentése", "Behúzás növelése", "Speciális karakter kiválasztása", "Speciális karakter beszúrása", "Kép formázása", "Nézet váltása", "Szegélyek", "felső", "jobb", "alsó", "bal", "CSS stílusok", "CSS osztályok", "Igazítás", "Jobbra", "Középre", "Balra", "Nincs", "Forrás", "Cím", "Helyettesítő szöveg", "Link", "Link megnyitása új lapon", "Kép", "Fájl", "Haladó", "Kép tulajdonságai", "Mégsem", "OK", "A beillesztett szöveg HTML-nek tűnik. Megtartsuk HTML-ként?", "Beszúrás HTML-ként", "Megtartás", "Elvetés", "Beszúrás szövegként", "Csak szöveg beillesztése", "Word-ből másolt szöveg", "A beillesztett tartalom Microsoft Word/Excel dokumentumból származik. Meg szeretné tartani a formátumát?", "Fájl tallózó", "Hiba a lista betöltése közben", "Hiba a mappák betöltése közben", "Biztosan ezt szeretné?", "Írjon be egy mappanevet", "Mappa létrehozása", "írjon be bevet", "Húzza ide a képet", "Húzza ide a fájlt", "vagy kattintson", "Helyettesítő szöveg", "Tallóz", "Feltölt", "Háttér", "Szöveg", "Fent", "Középen", "Lent", "Oszlop beszúrás elé", "Oszlop beszúrás utána", "Sor beszúrás fölé", "Sor beszúrás alá", "Táblázat törlése", "Sor törlése", "Oszlop törlése", "Cella tartalmának törlése", "HTML", "Félkövér", "Dőlt", "Ecset", "Link", "Visszavon", "Újra", "Táblázat", "Kép", "Törlés", "Paragráfus", "Betűméret", "Videó", "Betű", "Rólunk", "Nyomtat", "Aláhúzott", "Áthúzott", "Behúzás", "Aussenseiter", "Teljes méret", "Összenyom", "Egyenes vonal", "Lista", "Számozott lista", "Kivág", "Összes kijelölése", "Beágyazott kód", "Link megnyitása", "Link szerkesztése", "Nincs követés", "Link leválasztása", "felülvizsgálat", "Szerkesztés", "Frissít", "URL", "Szerkeszt", "Vízszintes igazítás", "Szűrő", "Rendezés módosítás szerint", "Rendezés név szerint", "Rendezés méret szerint", "Mappa hozzáadás", "Visszaállít", "Mentés", "Mentés másként...", "Átméretezés", "Kivág", "Szélesség", "Magasság", "Képarány megtartása", "Igen", "Nem", "Eltávolít", "Kijelöl", "Karakterek száma: %d", "Szavak száma: %d", "Összes", "Kijelöl: %s", "Összes kijelölése", "Függőleges igazítás", "Felosztás", "Függőleges felosztás", "Vízszintes felosztás", "Összevonás", "Oszlop hozzáadás", "Sor hozzáadás", "Törlés", "Szegély", null, "Áthúzott", "Aláhúzott", "Felső index", "Alsó index", "Kivágás", "Szünet", "Keresés", "Csere erre", "Cserélje ki", "Beillesztés", "Válasszon tartalmat a beillesztéshez", "Csak a saját képeit tudja szerkeszteni. Letölti ezt a képet?", "Kép sikeresen feltöltve!", "Palette", "Er zijn geen bestanden in deze map.", "átnevezés", "Adja meg az új nevet", "előnézet", "Letöltés", "Illessze be a vágólap", "A böngésző nem támogatja a közvetlen hozzáférést biztosít a vágólapra.", "Másolás kiválasztása", "másolás", "Határ sugár", "Összes", "Alkalmazni", "Kérjük, töltse ki ezt a mezőt,", "Kérjük, írja be a webcímet", "Alapértelmezett", "Kör", "Pont", "Quadrate", "Találni", "Megtalálja Előző", "Következő Keresése", "Helyezze be az osztály nevét", "Nyomja meg az Alt egyéni átméretezés"];
      }, 99113: function(e2) {
        e2.exports.default = ["Ketik sesuatu", "Tentang Jodit", "Editor Jodit", "Versi Bebas Non-komersil", "Panduan Pengguna Jodit", "mencakup detail bantuan penggunaan", "Untuk informasi tentang lisensi, silakan kunjungi website:", "Beli versi lengkap", "Hak Cipta © XDSoft.net - Chupurnov Valeriy. Hak cipta dilindungi undang-undang.", "Tautan", "Buka di tab baru", "Buka editor dalam ukuran penuh", "Hapus Pemformatan", "Isi warna atau atur warna teks", "Ulangi", "Batalkan", "Tebal", "Miring", "Sisipkan Daftar Tidak Berurut", "Sisipkan Daftar Berurut", "Tengah", "Penuh", "Kiri", "Kanan", "Sisipkan Garis Horizontal", "Sisipkan Gambar", "Sisipkan Berkas", "Sisipkan video youtube/vimeo", "Sisipkan tautan", "Ukuran font", "Keluarga font", "Sisipkan blok format", "Normal", "Heading 1", "Heading 2", "Heading 3", "Heading 4", "Kutip", "Kode", "Sisipkan", "Sisipkan tabel", "Kurangi Indentasi", "Tambah Indentasi", "Pilih Karakter Spesial", "Sisipkan Karakter Spesial", "Formar warna", "Ubah mode", "Batas", "atas", "kanan", "bawah", "kiri", "Gaya", "Class", "Rata", "Kanan", "Tengah", "Kiri", "--Tidak diset--", "Src", "Judul", "Teks alternatif", "Tautan", "Buka tautan di tab baru", "Gambar", "berkas", "Lanjutan", "Properti gambar", "Batal", "Ya", "Kode Anda cenderung ke HTML. Biarkan sebagai HTML?", "Paste sebagai HTML", "Jaga", "Bersih", "Sisipkan sebagai teks", "Sisipkan hanya teks", "Terdeteksi paste dari Word", "Konten dipaste dari dokumen Microsoft Word/Excel. Apakah Anda ingin tetap menjaga format atau membersihkannya?", "Penjelajah Berkas", "Error ketika memuat list", "Error ketika memuat folder", "Apakah Anda yakin?", "Masukkan nama Direktori", "Buat direktori", "ketik nama", "Letakkan gambar", "Letakkan berkas", "atau klik", "Teks alternatif", "Jelajahi", "Unggah", "Latar Belakang", "Teks", "Atas", "Tengah", "Bawah", "Sisipkan kolom sebelumnya", "Sisipkan kolom setelahnya", "Sisipkan baris di atasnya", "Sisipkan baris di bawahnya", "Hapus tabel", "Hapus baris", "Hapus kolom", "Kosongkan cell", "sumber", "tebal", "miring", "sikat", "tautan", "batalkan", "ulangi", "tabel", "gambar", "penghapus", "paragraf", "ukuran font", "video", "font", "tentang", "cetak", "garis bawah", "coret", "menjorok ke dalam", "menjorok ke luar", "ukuran penuh", "menyusut", "hr", "ul", "ol", "potong", "Pilih semua", "Kode embed", "Buka tautan", "Edit tautan", "No follow", "Hapus tautan", "Mata", "pensil", "Perbarui", "URL", "Edit", "Perataan horizontal", "Filter", "Urutkan berdasarkan perubahan", "Urutkan berdasarkan nama", "Urutkan berdasarkan ukuran", "Tambah folder", "Reset", "Simpan", "Simpan sebagai...", "Ubah ukuran", "Crop", "Lebar", "Tinggi", "Jaga aspek rasio", "Ya", "Tidak", "Copot", "Pilih", "Karakter: %d", "Kata: %d", "Semua", "Pilih %s", "Pilih semua", "Rata vertikal", "Bagi", "Bagi secara vertikal", "Bagi secara horizontal", "Gabungkan", "Tambah kolom", "tambah baris", "Hapus", "Bingkai", "Lisensi: %s", "Coret", "Garis Bawah", "Superskrip", "Subskrip", "Potong pilihan", "Berhenti", "Mencari", "Ganti dengan", "Mengganti", "Paste", "Pilih konten untuk dipaste", "Anda hanya dapat mengedit gambar Anda sendiri. Unduh gambar ini di host?", "Gambar telah sukses diunggah ke host!", "palet", "Tidak ada berkas", "ganti nama", "Masukkan nama baru", "pratinjau", "Unduh", "Paste dari clipboard", "Browser anda tidak mendukung akses langsung ke clipboard.", "Copy seleksi", "copy", "Border radius", "Tampilkan semua", "Menerapkan", "Silahkan mengisi kolom ini", "Silahkan masukkan alamat web", "Default", "Lingkaran", "Dot", "Kuadrat", "Menemukan", "Menemukan Sebelumnya", "Menemukan Berikutnya", "Masukkan nama kelas", "Tekan Alt untuk mengubah ukuran kustom"];
      }, 51923: function(e2) {
        e2.exports.default = ["Scrivi qualcosa...", "A proposito di Jodit", "Jodit Editor", null, "Guida utente di Jodit", "contiene una guida dettagliata per l'uso.", "Per informazioni sulla licenza, si prega di visitare il nostro sito:", "Acquista la versione completa", "Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.", "Ancora", "Apri in una nuova scheda", "Apri l'editor a schermo intero", "Formato chiaro", "Riempi colore o lettera", "Ripristina", "Annulla", "Grassetto", "Corsivo", "Inserisci lista non ordinata", "Inserisci l'elenco ordinato", "Allinea Centra", "Allineare Giustificato", "Allinea a Sinistra", "Allinea a Destra", "Inserisci la linea orizzontale", "Inserisci immagine", "Inserisci un file", "Inserisci video Youtube/Vimeo", "Inserisci il link", "Dimensione del carattere", "Tipo di font", "Inserisci blocco", "Normale", "Heading 1", "Heading 2", "Heading 3", "Heading 4", "Citazione", "Codice", "Inserisci", "Inserisci tabella", "Riduci il rientro", "Aumenta il rientro", "Seleziona una funzione speciale", "Inserisci un carattere speciale", "Copia formato", "Cambia modo", "Margini", "su", "destra", "giù", "sinistra", "Stili CSS", "Classi CSS", "Allinea", "Destra", "Centro", "Sinistra", "--Non Impostato--", "Fonte", "Titolo", "Testo Alternativo", "Link", "Apri il link in una nuova scheda", "Immagine", "Archivio", "Avanzato", "Proprietà dell'immagine", "Annulla", "Accetta", "Il codice è simile all'HTML. Mantieni come HTML?", "Incolla come HTML?", "Mantieni", "Pulisci", "Inserisci come testo", "Inserisci solo il testo", "Incollato da Word rilevato", "Il contenuto incollato proviene da un documento Microsoft Word / Excel. Vuoi mantenere il formato o pulirlo?", "Cerca il file", "Errore durante il caricamento dell'elenco", "Errore durante il caricamento delle cartelle", "Sei sicuro?", "Inserisci il nome della cartella", "Crea cartella", "Entre el nombre", "Rilascia l'immagine", "Rilascia file", "o click", "Testo alternativo", "Sfoglia", "Carica", "Sfondo", "Testo", "Su", "Centro", "Sotto", "Inserisci prima la colonna", "Inserisci colonna dopo", "Inserisci la riga sopra", "Inserisci la riga sotto", "Elimina tabella", "Elimina riga", "Elimina colonna", "Cella vuota", "HTML", "Grassetto", "Corsivo", "Pennello", "Link", "Annulla", "Ripristina", "Tabella", "Immagine", "Gomma", "Paragrafo", "Dimensione del carattere", "Video", "Font", "Approposito di", "Stampa", "Sottolineato", "Barrato", "trattino", "annulla rientro", "A grandezza normale", "comprimere", "linea orizzontale", "lista non ordinata", "lista ordinata", "Taglia", "Seleziona tutto", "Includi codice", "Apri link", "Modifica link", "Non seguire", "Togli link", "Recensione", "Per modificare", "Aggiornare", " URL", "Modifica", "Allineamento orizzontale", "Filtro", "Ordina per data di modifica", "Ordina per nome", "Ordina per dimensione", "Aggiungi cartella", "Reset", "Salva", "Salva con nome...", "Ridimensiona", "Tagliare", "Larghezza", "Altezza", "Mantenere le proporzioni", "Si", "No", "Rimuovere", "Seleziona", "Caratteri: %d", "Parole: %d", "Tutto", "Seleziona: %s", "Seleziona tutto", "Allineamento verticala", "Dividere", "Dividere verticalmente", "Diviso orizzontale", "Fondi", "Aggiungi colonna", "Aggiungi riga", "Cancella", "Bordo", null, "Barrato", "Sottolineato", "indice", "deponente", "Taglia la selezione", "Pausa", "Cerca", "Sostituisci con", "Sostituire", "Incolla", "Seleziona il contenuto da incollare", "Puoi modificare solo le tue immagini. Scarica questa immagine sul server?", "L'immagine è stata caricata con successo sul server!", "tavolozza", "Non ci sono file in questa directory.", "ungherese", "Inserisci un nuovo nome", "anteprima", "Scaricare", "Incolla dagli appunti", "Il tuo browser non supporta l'accesso diretto agli appunti.", "Selezione di copia", "copia", "Border radius", "Mostra tutti", "Applicare", "Si prega di compilare questo campo", "Si prega di inserire un indirizzo web", "Di Default", "Cerchio", "Dot", "Quadrate", "Trovare", "Trova Precedente", "Trova Successivo", "Inserisci il nome della classe", "Premere Alt per il ridimensionamento personalizzato"];
      }, 21268: function(e2) {
        e2.exports.default = ["なにかタイプしてください", "Joditについて", "Jodit Editor", null, "Jodit ユーザーズ・ガイド", "詳しい使い方", "ライセンス詳細についてはJodit Webサイトを確認ください：", "フルバージョンを購入", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "Anchor", "新しいタブで開く", "エディターのサイズ（フル/ノーマル）", "書式をクリア", "テキストの色", "やり直し", "元に戻す", "太字", "斜体", "箇条書き", "番号付きリスト", "中央揃え", "両端揃え", "左揃え", "右揃え", "区切り線を挿入", "画像を挿入", "ファイルを挿入", "Youtube/Vimeo 動画", "リンクを挿入", "フォントサイズ", "フォント", "テキストのスタイル", "指定なし", "タイトル1", "タイトル2", "タイトル3", "タイトル4", "引用", "コード", "挿入", "表を挿入", "インデント減", "インデント増", "特殊文字を選択", "特殊文字を挿入", "書式を貼付け", "編集モード切替え", "マージン", "上", "右", "下", "左", "スタイル", "クラス", "配置", "右寄せ", "中央寄せ", "左寄せ", "指定なし", "ソース", "タイトル", "代替テキスト", "リンク", "新しいタブで開く", "画像", "ファイル", "高度な設定", "画像のプロパティー", "キャンセル", "確定", "HTMLコードを保持しますか？", "HTMLで貼付け", "HTMLを保持", "Clean", "HTMLをテキストにする", "テキストだけ", "Word Paste Detected", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?", "File Browser", "Error on load list", "Error on load folders", "Are you sure?", "Enter Directory name", "Create directory", "type name", "ここに画像をドロップ", "ここにファイルをドロップ", "or クリック", "代替テキスト", "ブラウズ", "アップロード", "背景", "文字", "上", "中央", "下", "左に列を挿入", "右に列を挿入", "上に行を挿入", "下に行を挿入", "表を削除", "行を削除", "列を削除", "セルを空にする", "source", "bold", "italic", "brush", "link", "undo", "redo", "table", "image", "eraser", "paragraph", "fontsize", "video", "font", "about", "print", "underline", "strikethrough", "indent", "outdent", "fullsize", "shrink", "分割線", "箇条書き", "番号付きリスト", "切り取り", "すべて選択", "埋め込みコード", "リンクを開く", "リンクを編集", "No follow", "リンク解除", "サイトを確認", "鉛筆", "更新", "URL", "編集", "水平方向の配置", "Filter", "Sort by changed", "Sort by name", "Sort by size", "Add folder", "リセット", "保存", "Save as ...", "リサイズ", "Crop", "幅", "高さ", "縦横比を保持", "はい", "いいえ", "移除", "選択", "文字数: %d", "単語数: %d", "全部", "選択: %s", "すべて選択", "垂直方向の配置", "分割", "セルの分割（垂直方向）", "セルの分割（水平方向）", "セルの結合", "列を追加", "行を追加", "削除", "境界線", null, "取り消し線", "下線", "上付き文字", "下付き文字", "切り取り", "Pause", "検索", "置換", "交換", "貼付け", "選択した内容を貼付け", "You can only edit your own images. Download this image on the host?", "The image has been successfully uploaded to the host!", "パレット", "There are no files", "Rename", "Enter new name", "プレビュー", "ダウンロード", "貼り付け", "お使いのブラウザはクリップボードを使用できません", "コピー", "copy", "角の丸み", "全て表示", "適用", "まだこの分野", "を入力してくださいウェブアドレス", "デフォルト", "白丸", "黒丸", "四角", "見", "探前", "由来", "クラス名を挿入", "カスタムサイズ変更のためのAltキーを押します"];
      }, 11399: function(e2) {
        e2.exports.default = ["Type something", "About Jodit", "Jodit Editor", "Free Non-commercial Version", "Jodit User's Guide", "contains detailed help for using", "For information about the license, please go to our website:", "Buy full version", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "Anchor", "Open in new tab", "Open in fullsize", "Clear Formatting", "Fill color or set the text color", "Redo", "Undo", "Bold", "Italic", "Insert Unordered List", "Insert Ordered List", "Align Center", "Align Justify", "Align Left", "Align Right", "Insert Horizontal Line", "Insert Image", "Insert file", "Insert youtube/vimeo video", "Insert link", "Font size", "Font family", "Insert format block", "Normal", "Heading 1", "Heading 2", "Heading 3", "Heading 4", "Quote", "Code", "Insert", "Insert table", "Decrease Indent", "Increase Indent", "Select Special Character", "Insert Special Character", "Paint format", "Change mode", "Margins", "top", "right", "bottom", "left", "Styles", "Classes", "Align", "Right", "Center", "Left", "--Not Set--", "Src", "Title", "Alternative", "Link", "Open link in new tab", "Image", "file", "Advanced", "Image properties", "Cancel", "Ok", "Your code is similar to HTML. Keep as HTML?", "Paste as HTML", "Keep", "Clean", "Insert as Text", "Insert only Text", "Word Paste Detected", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?", "File Browser", "Error on load list", "Error on load folders", "Are you sure?", "Enter Directory name", "Create directory", "type name", "Drop image", "Drop file", "or click", "Alternative text", "Browse", "Upload", "Background", "Text", "Top", "Middle", "Bottom", "Insert column before", "Insert column after", "Insert row above", "Insert row below", "Delete table", "Delete row", "Delete column", "Empty cell", "source", "bold", "italic", "brush", "link", "undo", "redo", "table", "image", "eraser", "paragraph", "fontsize", "video", "font", "about", "print", "underline", "strikethrough", "indent", "outdent", "fullsize", "shrink", "hr", "ul", "ol", "cut", "selectall", "Embed code", "Open link", "Edit link", "No follow", "Unlink", "Eye", "pencil", "Update", " URL", "Edit", "Horizontal align", "Filter", "Sort by changed", "Sort by name", "Sort by size", "Add folder", "Reset", "Save", "Save as ...", "Resize", "Crop", "Width", "Height", "Keep Aspect Ratio", "Yes", "No", "Remove", "Select", "Chars: %d", "Words: %d", "All", "Select %s", "Select all", "Vertical align", "Split", "Split vertical", "Split horizontal", "Merge", "Add column", "Add row", "Delete", "Border", "License: %s", "Strike through", "Underline", "superscript", "subscript", "Cut selection", "Break", "Search for", "Replace with", "Replace", "Paste", "Choose Content to Paste", "You can only edit your own images. Download this image on the host?", "The image has been successfully uploaded to the host!", "palette", "There are no files", "Rename", "Enter new name", "preview", "download", "Paste from clipboard", "Your browser doesn't support direct access to the clipboard.", "Copy selection", "copy", "Border radius", "Show all", "Apply", "Please fill out this field", "Please enter a web address", "Default", "Circle", "Dot", "Quadrate", "Find", "Find Previous", "Find Next", "Insert className", "Press Alt for custom resizing"];
      }, 37289: function(e2) {
        e2.exports.default = ["무엇이든 입력하세요", "Jodit에 대하여", "Jodit Editor", null, "Jodit 사용자 안내서", "자세한 도움말이 들어있어요", "라이센스에 관해서는 Jodit 웹 사이트를 방문해주세요：", "풀 버전 구입하기", "© XDSoft.net - Chupurnov Valeriy. 에게 저작권과 모든 권리가 있습니다.", "Anchor", "새 탭에서 열기", "전체 크기로 보기", "서식 지우기", "글씨 색상", "재실행", "실행 취소", "굵게", "기울임", "글머리 목록", "번호 목록", "가운데 정렬", "양쪽 정렬", "왼쪽 정렬", "오른쪽 정렬", "수평 구분선 넣기", "이미지 넣기", "파일 넣기", "Youtube/Vimeo 동영상", "링크 넣기", "글꼴 크기", "글꼴", "블록 요소 넣기", "일반 텍스트", "제목 1", "제목 2", "제목 3", "제목 4", "인용", "코드", "붙여 넣기", "테이블", "들여쓰기 감소", "들여쓰기 증가", "특수문자 선택", "특수문자 입력", "페인트 형식", "편집모드 변경", "마진", "위", "오른쪽", "아래", "왼쪽", "스타일", "클래스", "정렬", "오른쪽으로", "가운데로", "왼쪽으로", "--지정 안 함--", "경로(src)", "제목", "대체 텍스트(alt)", "링크", "새 탭에서 열기", null, "파일", "고급", "이미지 속성", "취소", "확인", "HTML 코드로 감지했어요. 코드인채로 붙여넣을까요?", "HTML로 붙여넣기", "원본 유지", "지우기", "텍스트로 넣기", "텍스트만 넣기", "Word 붙여넣기 감지", "Microsoft Word/Excel 문서로 감지했어요. 서식을 유지한채로 붙여넣을까요?", "파일 탐색기", "목록 불러오기 에러", "폴더 불러오기", "정말 진행할까요?", "디렉토리 이름 입력", "디렉토리 생성", "이름 입력", "이미지 드래그", "파일 드래그", "혹은 클릭", "대체 텍스트", "탐색", "업로드", "배경", "텍스트", "위", "중앙", "아래", "이전 열에 삽입", "다음 열에 삽입", "위 행에 삽입", "아래 행에 삽입", "테이블 삭제", "행 삭제", "열 삭제", "빈 셀", "HTML 소스", "볼드", "이탤릭", "브러시", "링크", "실행 취소", "재실행", "테이블", "이미지", "지우개", "문단", "글꼴 크기", "비디오", "글꼴", "편집기 정보", "프린트", "밑줄", "취소선", "들여쓰기", "내어쓰기", "전체 화면", "일반 화면", "구분선", "글머리 목록", "번호 목록", "잘라내기", "모두 선택", "Embed 코드", "링크 열기", "링크 편집", "No follow", "링크 제거", "사이트 확인", "연필", "갱신", "URL", "편집", "수평 정렬", "필터", "변경일 정렬", "이름 정렬", "크기 정렬", "새 폴더", "초기화", "저장", "새로 저장하기 ...", "리사이즈", "크롭", "가로 길이", "세로 높이", "비율 유지하기", "네", "아니오", "제거", "선택", "문자수: %d", "단어수: %d", "모두", "선택: %s", "모두 선택", "수직 정렬", "분할", "세로 셀 분할", "가로 셀 분할", "셀 병합", "열 추가", "행 추가", "삭제", "외곽선", "라이센스: %s", "취소선", "밑줄", "윗첨자", "아래첨자", "선택 잘라내기", "구분자", "검색", "대체하기", "대체", "붙여넣기", "붙여넣을 내용 선택", "외부 이미지는 편집할 수 없어요. 외부 이미지를 다운로드 할까요?", "이미지를 무사히 업로드 했어요!", "팔레트", "파일이 없어요", "이름 변경", "새 이름 입력", "미리보기", "다운로드", "클립보드 붙여넣기", "사용중인 브라우저가 클립보드 접근을 지원하지 않아요.", "선택 복사", "복사", "둥근 테두리", "모두 보기", "적용", "이 항목을 입력해주세요!", "웹 URL을 입력해주세요.", "기본", "원", "점", "정사각형", "찾기", "이전 찾기", "다음 찾기", "className 입력", "사용자 지정 크기 조정에 대 한 고도 누르십시오"];
      }, 26501: function(e2) {
        e2.exports.default = ["Бичээд үзээрэй", "Jodit-ын талаар ", "Jodit програм", null, "Jodit гарын авлага", "хэрэглээний талаар дэлгэрэнгүй мэдээллийг агуулна", "Лицензийн мэдээллийг манай вэб хуудаснаас авна уу:", "Бүрэн хувилбар худалдан авах", "Зохиогчийн эрх хамгаалагдсан © XDSoft.net - Chupurnov Valeriy. Бүх эрхийг эзэмшинэ.", "Холбоо барих", "Шинэ табаар нээх", "Бүтэн дэлгэцээр нээх", "Форматыг арилгах", "Өнгөөр будах эсвэл текстийн өнгө сонгох", "Дахих", "Буцаах", "Тод", "Налуу", "Тэмдэгт жагсаалт нэмэх", "Дугаарт жагсаалт нэмэх", "Голлож байрлуулах", "Тэгшитгэн байрлуулах", "Зүүнд байрлуулах", "Баруунд байрлуулах", "Хэвтээ зураас нэмэх", "Зураг нэмэх", "Файл нэмэх", "Youtube/Vimeo видео нэмэх", "Холбоос нэмэх", "Фонтын хэмжээ", "Фонтын бүл", "Блок нэмэх", "Хэвийн", "Гарчиг 1", "Гарчиг 2", "Гарчиг 3", "Гарчиг 4", "Ишлэл", "Код", "Оруулах", "Хүснэгт оруулах", "Доголын зай хасах", "Доголын зай нэмэх", "Тусгай тэмдэгт сонгох", "Тусгай тэмдэгт нэмэх", "Зургийн формат", "Горим өөрчлөх", "Цаасны зай", "Дээрээс", "Баруунаас", "Доороос", "Зүүнээс", "CSS стиль", "CSS анги", "Байрлуулах", "Баруун", "Төв", "Зүүн", "--Тодорхойгүй--", "Эх үүсвэр", "Гарчиг", "Алтернатив текст", "Холбоос", "Холбоосыг шинэ хавтсанд нээх", "Зураг", "Файл", "Дэвшилтэт", "Зургийн үзүүлэлт", "Цуцлах", "Ok", "Таны код HTML кодтой адил байна. HTML форматаар үргэлжлүүлэх үү?", "HTML байдлаар буулгах", "Хадгалах", "Цэвэрлэх", "Текст байдлаар нэмэх", "Зөвхөн текст оруулах", "Word байдлаар буулгасан байна", "Буулгасан агуулга Microsoft Word/Excel форматтай байна. Энэ форматыг хэвээр хадгалах уу эсвэл арилгах уу?", "Файлын цонх", "Жагсаалт татах үед алдаа гарлаа", "Хавтас татах үед алдаа гарлаа", "Итгэлтэй байна уу?", "Хавтсын нэр оруулах", "Хавтас үүсгэх", "Нэр бичих", "Зураг буулгах", "Файл буулгах", "эсвэл товш", "Алтернатив текст", "Үзэх", "Байршуулах", "Арын зураг", "Текст", "Дээр", "Дунд", "Доор", "Урд нь багана нэмэх", "Ард нь багана нэмэх", "Дээр нь мөр нэмэх", "Доор нь мөр нэмэх", "Хүснэгт устгах", "Мөр устгах", "Багана устгах", "Нүд цэвэрлэх", "Эх үүсвэр", "Тод", "Налуу", "Будах", "Холбоос", "Буцаах", "Дахих", "Хүснэгт", "Зураг", "Баллуур", "Параграф", "Фонтын хэмжээ", "Видео", "Фонт", "Тухай", "Хэвлэх", "Доогуур зураас", "Дээгүүр зураас", "Догол нэмэх", "Догол багасгах", "Бүтэн дэлгэц", "Багасга", "Хаалт", "Тэмдэгт жагсаалт", "Дугаарласан жагсаалт", "Таслах", "Бүгдийг сонго", "Код оруулах", "Холбоос нээх", "Холбоос засах", "Nofollow özelliği", "Холбоос салгах", "Нүд", "Засах", "Шинэчлэх", "URL", "Засах", "Хэвтээ эгнүүлэх", "Шүүх", "Сүүлд өөрчлөгдсөнөөр жагсаах", "Нэрээр жагсаах", "Хэмжээгээр жагсаах", "Хавтас нэмэх", "Буцаах", "Хадгалах", "Өөрөөр хадгалах", "Хэмжээг өөрчил", "Тайрах", "Өргөн", "Өндөр", "Харьцааг хадгал", "Тийм", "Үгүй", "Арилга", "Сонго", "Тэмдэгт: %d", "Үг: %d", "Бүгдийг", "Сонго: %s", "Бүгдийг сонго", "Босоо эгнүүлэх", "Задлах", "Баганаар задлах", "Мөрөөр задлах", "Нэгтгэх", "Багана нэмэх", "Мөр нэмэх", "Устгах", "Хүрээ", null, "Дээгүүр зураас", "Доогуур зураас", "Дээд индекс", "Доод индекс", "Сонголтыг таслах", "Мөрийг таслах", "Хайх", "Үүгээр солих", "Солих", "Буулгах", "Буулгах агуулгаа сонгоно уу", "Та зөвхөн өөрийн зургуудаа янзлах боломжтой. Энэ зургийг өөр лүүгээ татмаар байна уу?", "Зургийг хост руу амжилттай хадгалсан", "Палет", "Энд ямар нэг файл алга", "Шинээр нэрлэх", "Шинэ нэр оруулна уу", "Урьдчилан харах", "Татах", "Самбараас хуулах ", "Энэ вэб хөтчөөс самбарт хандах эрх алга.", "Сонголтыг хуул", "Хуулах", "Хүрээний радиус", "Бүгдийг харуулах", "Хэрэгжүүл", "Энэ талбарыг бөглөнө үү", "Вэб хаягаа оруулна уу", "Үндсэн", "Дугуй", "Цэг", "Дөрвөлжин", "Хайх", "Өмнөхийг ол", "Дараагийнхийг ол", "Бүлгийн нэрээ оруулна уу", "Хэмжээсийг шинээр өөчрлөхийн тулд Alt товчин дээр дарна уу"];
      }, 17084: function(e2) {
        e2.exports.default = ["Begin met typen..", "Over Jodit", "Jodit Editor", "Gratis niet-commerciële versie", "Jodit gebruikershandleiding", "bevat gedetailleerde informatie voor gebruik.", "Voor informatie over de licentie, ga naar onze website:", "Volledige versie kopen", "Copyright © XDSoft.net - Chupurnov Valeriy. Alle rechten voorbehouden.", "Anker", "Open in nieuwe tab", "Editor in volledig scherm openen", "Opmaak verwijderen", "Vulkleur of tekstkleur aanpassen", "Opnieuw", "Ongedaan maken", "Vet", "Cursief", "Geordende list invoegen", "Ongeordende lijst invoegen", "Centreren", "Uitlijnen op volledige breedte", "Links uitlijnen", "Rechts uitlijnen", "Horizontale lijn invoegen", "Afbeelding invoegen", "Bestand invoegen", "Youtube/Vimeo video invoegen", "Link toevoegen", "Tekstgrootte", "Lettertype", "Format blok invoegen", "Normaal", "Koptekst 1", "Koptekst 2", "Koptekst 3", "Koptekst 4", "Citaat", "Code", "Invoegen", "Tabel invoegen", "Inspringing verkleinen", "Inspringing vergroten", "Symbool selecteren", "Symbool invoegen", "Opmaak kopieren", "Modus veranderen", "Marges", "Boven", "Rechts", "Onder", "Links", "CSS styles", "CSS classes", "Uitlijning", "Rechts", "Gecentreerd", "Links", "--Leeg--", "Src", "Titel", "Alternatieve tekst", "Link", "Link in nieuwe tab openen", "Afbeelding", "Bestand", "Geavanceerd", "Afbeeldingseigenschappen", "Annuleren", "OK", "Deze code lijkt op HTML. Als HTML behouden?", "Invoegen als HTML", "Origineel behouden", "Opschonen", "Als tekst invoegen", "Als onopgemaakte tekst invoegen", "Word-tekst gedetecteerd", "De geplakte tekst is afkomstig van een Microsoft Word/Excel document. Wil je de opmaak behouden of opschonen?", "Bestandsbrowser", "Fout bij het laden van de lijst", "Fout bij het laden van de mappenlijst", "Weet je het zeker?", "Geef de map een naam", "Map aanmaken", "Type naam", "Sleep hier een afbeelding naartoe", "Sleep hier een bestand naartoe", "of klik", "Alternatieve tekst", "Bladeren", "Uploaden", "Achtergrond", "Tekst", "Boven", "Midden", "Onder", "Kolom invoegen (voor)", "Kolom invoegen (na)", "Rij invoegen (boven)", "Rij invoegen (onder)", "Tabel verwijderen", "Rij verwijderen", "Kolom verwijderen", "Cel leegmaken", "Broncode", "vet", "cursief", "kwast", "link", "ongedaan maken", "opnieuw", "tabel", "afbeelding", "gum", "paragraaf", "lettergrootte", "video", "lettertype", "over", "afdrukken", "onderstreept", "doorgestreept", "inspringen", "minder inspringen", "volledige grootte", "kleiner maken", "horizontale lijn", "lijst", "genummerde lijst", "knip", "alles selecteren", "Embed code", "link openen", "link aanpassen", "niet volgen", "link verwijderen", "Recensie", "Om te bewerken", "Updaten", " URL", "Bewerken", "Horizontaal uitlijnen", "Filteren", "Sorteren op wijzigingsdatum", "Sorteren op naam", "Sorteren op grootte", "Map toevoegen", "Herstellen", "Opslaan", "Opslaan als ...", "Grootte aanpassen", "Bijknippen", "Breedte", "Hoogte", "Verhouding behouden", "Ja", "Nee", "Verwijderen", "Selecteren", "Tekens: %d", "Woorden: %d", "Alles", "Selecteer: %s", "Selecteer alles", "Verticaal uitlijnen", "Splitsen", "Verticaal splitsen", "Horizontaal splitsen", "Samenvoegen", "Kolom toevoegen", "Rij toevoegen", "Verwijderen", "Rand", null, "Doorstrepen", "Onderstrepen", "Superscript", "Subscript", "Selectie knippen", "Enter", "Zoek naar", "Vervangen door", "Vervangen", "Plakken", "Kies content om te plakken", "Je kunt alleen je eigen afbeeldingen aanpassen. Deze afbeelding downloaden?", "De afbeelding is succesvol geüploadet!", "Palette", "Er zijn geen bestanden in deze map.", "Hongaars", "Voer een nieuwe naam in", "voorvertoning", "Download", "Plakken van klembord", "Uw browser ondersteunt geen directe toegang tot het klembord.", "Selectie kopiëren", "kopiëren", "Border radius", "Toon alle", "Toepassing", "Vul dit veld", "Voer een webadres", "Standaard", "Cirkel", "Dot", "Quadrate", "Zoeken", "Vorige Zoeken", "Volgende Zoeken", "Voeg de klassenaam in", "Druk op Alt voor aangepaste grootte"];
      }, 96891: function(e2) {
        e2.exports.default = ["Napisz coś", "O Jodit", "Edytor Jodit", null, "Instrukcja Jodit", "zawiera szczegółowe informacje dotyczące użytkowania.", "Odwiedź naszą stronę, aby uzyskać więcej informacji na temat licencji:", "Zakup pełnej wersji", "Copyright © XDSoft.net - Chupurnov Valeriy. Wszystkie prawa zastrzeżone.", "Kotwica", "Otwórz w nowej zakładce", "Otwórz edytor w pełnym rozmiarze", "Wyczyść formatowanie", "Kolor wypełnienia lub ustaw kolor tekstu", "Ponów", "Cofnij", "Pogrubienie", "Kursywa", "Wstaw listę wypunktowaną", "Wstaw listę numeryczną", "Wyśrodkuj", "Wyjustuj", "Wyrównaj do lewej", "Wyrównaj do prawej", "Wstaw linię poziomą", "Wstaw grafikę", "Wstaw plik", "Wstaw film Youtube/vimeo", "Wstaw link", "Rozmiar tekstu", "Krój czcionki", "Wstaw formatowanie", "Normalne", "Nagłówek 1", "Nagłówek 2", "Nagłówek 3", "Nagłówek 4", "Cytat", "Kod", "Wstaw", "Wstaw tabelę", "Zmniejsz wcięcie", "Zwiększ wcięcie", "Wybierz znak specjalny", "Wstaw znak specjalny", "Malarz formatów", "Zmień tryb", "Marginesy", "Górny", "Prawy", "Dolny", "Levy", "Style CSS", "Klasy CSS", "Wyrównanie", "Prawa", "środek", "Lewa", "brak", "Źródło", "Tytuł", "Tekst alternatywny", "Link", "Otwórz w nowej zakładce", "Grafika", "Plik", "Zaawansowane", "Właściwości grafiki", "Anuluj", "OK", "Twój kod wygląda jak HTML. Zachować HTML?", "Wkleić jako HTML?", "Oryginalny tekst", "Wyczyść", "Wstaw jako tekst", "Wstaw tylko treść", "Wykryto tekst w formacie Word", "Wklejany tekst pochodzi z dokumentu Microsoft Word/Excel. Chcesz zachować ten format czy wyczyścić go? ", "Przeglądarka plików", "Błąd ładowania listy plików", "Błąd ładowania folderów", "Czy jesteś pewien?", "Wprowadź nazwę folderu", "Utwórz folder", "wprowadź nazwę", "Upuść plik graficzny", "Upuść plik", "lub kliknij tu", "Tekst alternatywny", "Przeglądaj", "Wczytaj", "Tło", "Treść", "Góra", "Środek", "Dół", "Wstaw kolumnę przed", "Wstaw kolumnę po", "Wstaw wiersz przed", "Wstaw wiersz po", "Usuń tabelę", "Usuń wiersz", "Usuń kolumnę", "Wyczyść komórkę", "HTML", "pogrubienie", "kursywa", "pędzel", "link", "cofnij", "ponów", "tabela", "grafika", "wyczyść", "akapit", "rozmiar czcionki", "wideo", "czcionka", "O programie", "drukuj", "podkreślenie", "przekreślenie", "wcięcie", "wycięcie", "pełen rozmiar", "przytnij", "linia pozioma", "lista", "lista numerowana", "wytnij", "zaznacz wszystko", "Wstaw kod", "otwórz link", "edytuj link", "Atrybut no-follow", "Usuń link", "szukaj", "edytuj", "Aktualizuj", "URL", "Edytuj", "Wyrównywanie w poziomie", "Filtruj", "Sortuj wg zmiany", "Sortuj wg nazwy", "Sortuj wg rozmiaru", "Dodaj folder", "wyczyść", "zapisz", "zapisz jako", "Zmień rozmiar", "Przytnij", "Szerokość", "Wysokość", "Zachowaj proporcje", "Tak", "Nie", "Usuń", "Wybierz", "Znaki: %d", "Słowa: %d", "Wszystko", "Wybierz: %s", "Wybierz wszystko", "Wyrównywanie w pionie", "Podziel", "Podziel w pionie", "Podziel w poziomie", "Scal", "Dodaj kolumnę", "Dodaj wiersz", "Usuń", "Obramowanie", null, "Przekreślenie", "Podkreślenie", "indeks górny", "index dolny", "Wytnij zaznaczenie", "Przerwa", "Szukaj", "Zamień na", "Wymienić", "Wklej", "Wybierz zawartość do wklejenia", "Możesz edytować tylko swoje grafiki. Czy chcesz pobrać tą grafikę?", "Grafika została pomyślnienie dodana na serwer", "Paleta", "Brak plików.", "zmień nazwę", "Wprowadź nową nazwę", "podgląd", "pobierz", "Wklej ze schowka", "Twoja przeglądarka nie obsługuje schowka", "Kopiuj zaznaczenie", "kopiuj", "Zaokrąglenie krawędzi", "Pokaż wszystkie", "Zastosuj", "Proszę wypełnić to pole", "Proszę, wpisz adres sieci web", "Domyślnie", "Koło", "Punkt", "Kwadrat", "Znaleźć", "Znaleźć Poprzednie", "Znajdź Dalej", "Wstaw nazwę zajęć", "Naciśnij Alt, aby zmienić rozmiar"];
      }, 31211: function(e2) {
        e2.exports.default = ["Escreva algo...", "Sobre o Jodit", "Editor Jodit", null, "Guia de usuário Jodit", "contém ajuda detalhada para o uso.", "Para informação sobre a licença, por favor visite nosso site:", "Compre a versão completa", "Copyright © XDSoft.net - Chupurnov Valeriy. Todos os direitos reservados.", "Link", "Abrir em nova aba", "Abrir editor em tela cheia", "Limpar formatação", "Cor de preenchimento ou cor do texto", "Refazer", "Desfazer", "Negrito", "Itálico", "Inserir lista não ordenada", "Inserir lista ordenada", "Centralizar", "Justificar", "Alinhar à Esquerda", "Alinhar à Direita", "Inserir linha horizontal", "Inserir imagem", "Inserir arquivo", "Inserir vídeo do Youtube/vimeo", "Inserir link", "Tamanho da letra", "Fonte", "Inserir bloco", "Normal", "Cabeçalho 1", "Cabeçalho 2", "Cabeçalho 3", "Cabeçalho 4", "Citação", "Código", "Inserir", "Inserir tabela", "Diminuir recuo", "Aumentar recuo", "Selecionar caractere especial", "Inserir caractere especial", "Copiar formato", "Mudar modo", "Margens", "cima", "direta", "baixo", "esquerda", "Estilos CSS", "Classes CSS", "Alinhamento", "Direita", "Centro", "Esquerda", "--Não Estabelecido--", "Fonte", "Título", "Texto Alternativo", "Link", "Abrir link em nova aba", "Imagem", "Arquivo", "Avançado", "Propriedades da imagem", "Cancelar", "Ok", "Seu código é similar ao HTML. Manter como HTML?", "Colar como HTML?", "Manter", "Limpar", "Inserir como Texto", "Inserir somente o Texto", "Colado do Word Detectado", "O conteúdo colado veio de um documento Microsoft Word/Excel. Você deseja manter o formato ou limpa-lo?", "Procurar arquivo", "Erro ao carregar a lista", "Erro ao carregar as pastas", "Você tem certeza?", "Escreva o nome da pasta", "Criar pasta", "Escreva seu nome", "Soltar imagem", "Soltar arquivo", "ou clique", "Texto alternativo", "Explorar", "Upload", "Fundo", "Texto", "Cima", "Meio", "Baixo", "Inserir coluna antes", "Inserir coluna depois", "Inserir linha acima", "Inserir linha abaixo", "Excluir tabela", "Excluir linha", "Excluir coluna", "Limpar célula", "HTML", "negrito", "itálico", "pincel", "link", "desfazer", "refazer", "tabela", "imagem", "apagar", "parágrafo", "tamanho da letra", "vídeo", "fonte", "Sobre de", "Imprimir", "sublinhar", "tachado", "recuar", "diminuir recuo", "Tamanho completo", "diminuir", "linha horizontal", "lista não ordenada", "lista ordenada", "Cortar", "Selecionar tudo", "Incluir código", "Abrir link", "Editar link", "Não siga", "Remover link", "Visualizar", "Editar", "Atualizar", "URL", "Editar", "Alinhamento horizontal", "filtrar", "Ordenar por modificação", "Ordenar por nome", "Ordenar por tamanho", "Adicionar pasta", "Resetar", "Salvar", "Salvar como...", "Redimensionar", "Recortar", "Largura", "Altura", "Manter a proporção", "Sim", "Não", "Remover", "Selecionar", "Caracteres: %d", "Palavras: %d", "Tudo", "Selecionar: %s", "Selecionar tudo", "Alinhamento vertical", "Dividir", "Dividir vertical", "Dividir horizontal", "Mesclar", "Adicionar coluna", "Adicionar linha", "Excluir", "Borda", null, "Tachado", "Sublinhar", "sobrescrito", "subscrito", "Cortar seleção", "Pausa", "Procurar por", "Substituir com", "Substituir", "Colar", "Escolher conteúdo para colar", "Você só pode editar suas próprias imagens. Baixar essa imagem pro servidor?", "A imagem foi enviada com sucesso para o servidor!", "Palette", "Não há arquivos nesse diretório.", "Húngara", "Digite um novo nome", "preview", "Baixar", "Colar da área de transferência", "O seu navegador não oferece suporte a acesso direto para a área de transferência.", "Selecção de cópia", "cópia", "Border radius", "Mostrar todos os", "Aplicar", "Por favor, preencha este campo", "Por favor introduza um endereço web", "Padrão", "Círculo", "Ponto", "Quadro", "Encontrar", "Encontrar Anteriores", "Localizar Próxima", "Insira o nome da classe", "Pressione Alt para redimensionamento personalizado"];
      }, 31109: function(e2) {
        e2.exports.default = ["Напишите что-либо", "О Jodit", "Редактор Jodit", null, "Jodit Руководство пользователя", "содержит детальную информацию по использованию", "Для получения сведений о лицензии , пожалуйста, перейдите на наш сайт:", "Купить полную версию", "Авторские права © XDSoft.net - Чупурнов Валерий. Все права защищены.", "Анкор", "Открывать ссылку в новой вкладке", "Открыть редактор в полном размере", "Очистить форматирование", "Цвет заливки или цвет текста", "Повтор", "Отмена", "Жирный", "Наклонный", "Вставка маркированного списка", "Вставить нумерованный список", "Выровнять по центру", "Выровнять по ширине", "Выровнять по левому краю", "Выровнять по правому краю", "Вставить горизонтальную линию", "Вставить изображение", "Вставить файл", "Вставьте видео", "Вставить ссылку", "Размер шрифта", "Шрифт", "Вставить блочный элемент", "Нормальный текст", "Заголовок 1", "Заголовок 2", "Заголовок 3", "Заголовок 4", "Цитата", "Код", "Вставить", "Вставить таблицу", "Уменьшить отступ", "Увеличить отступ", "Выберите специальный символ", "Вставить специальный символ", "Формат краски", "Источник", "Отступы", "сверху", "справа", "снизу", "слева", "Стили", "Классы", "Выравнивание", "По правому краю", "По центру", "По левому краю", "--не устанавливать--", "src", "Заголовок", "Альтернативный текст (alt)", "Ссылка", "Открывать ссылку в новом окне", null, "Файл", "Расширенные", "Свойства изображения", "Отмена", "Ок", "Ваш текст, который вы пытаетесь вставить похож на HTML. Вставить его как HTML?", "Вставить как HTML?", "Сохранить оригинал", "Почистить", "Вставить как текст", "Вставить только текст", "Возможно это фрагмент Word или Excel", "Контент который вы вставляете поступает из документа Microsoft Word / Excel. Вы хотите сохранить формат или очистить его?", "Браузер файлов", "Ошибка при загрузке списка изображений", "Ошибка при загрузке списка директорий", "Вы уверены?", "Введите название директории", "Создать директорию", "введите название", "Перетащите сюда изображение", "Перетащите сюда файл", "или нажмите", "Альтернативный текст", "Сервер", "Загрузка", "Фон", "Текст", " К верху", "По середине", "К низу", "Вставить столбец до", "Вставить столбец после", "Вставить ряд выше", "Вставить ряд ниже", "Удалить таблицу", "Удалять ряд", "Удалить столбец", "Очистить ячейку", "HTML", "жирный", "курсив", "заливка", "ссылка", "отменить", "повторить", "таблица", "Изображение", "очистить", "параграф", "размер шрифта", "видео", "шрифт", "о редакторе", "печать", "подчеркнутый", "перечеркнутый", "отступ", "выступ", "во весь экран", "обычный размер", "линия", "Список", "Нумерованный список", "Вырезать", "Выделить все", "Код", "Открыть ссылку", "Редактировать ссылку", "Атрибут nofollow", "Убрать ссылку", "Просмотр", "Редактировать", "Обновить", "URL", "Редактировать", "Горизонтальное выравнивание", "Фильтр", "По изменению", "По имени", "По размеру", "Добавить папку", "Восстановить", "Сохранить", "Сохранить как", "Изменить размер", "Обрезать размер", "Ширина", "Высота", "Сохранять пропорции", "Да", "Нет", "Удалить", "Выделить", "Символов: %d", "Слов: %d", "Выделить все", "Выделить: %s", "Выделить все", "Вертикальное выравнивание", "Разделить", "Разделить по вертикали", "Разделить по горизонтали", "Объединить в одну", "Добавить столбец", "Добавить строку", "Удалить", "Рамка", "Лицензия: %s", "Перечеркнуть", "Подчеркивание", "верхний индекс", "индекс", "Вырезать", "Разделитель", "Найти", "Заменить на", "Заменить", "Вставить", "Выбрать контент для вставки", "Вы можете редактировать только свои собственные изображения. Загрузить это изображение на ваш сервер?", "Изображение успешно загружено на сервер!", "палитра", "В данном каталоге нет файлов", "Переименовать", "Введите новое имя", "Предпросмотр", "Скачать", "Вставить из буфера обмена", "Ваш браузер не поддерживает прямой доступ к буферу обмена.", "Скопировать выделенное", "копия", "Радиус границы", "Показать все", "Применить", "Пожалуйста, заполните это поле", "Пожалуйста, введите веб-адрес", "По умолчанию", "Круг", "Точка", "Квадрат", "Найти", "Найти Предыдущие", "Найти Далее", "Вставить название класса", "Нажмите Alt для изменения пользовательского размера"];
      }, 79375: function(e2) {
        e2.exports.default = ["Bir şeyler yaz", "Jodit Hakkında", "Jodit Editor", null, "Jodit Kullanım Kılavuzu", "kullanım için detaylı bilgiler içerir", "Lisans hakkında bilgi için lütfen web sitemize gidin:", "Tam versiyonunu satın al", "Copyright © XDSoft.net - Chupurnov Valeriy. Tüm hakları saklıdır.", "Bağlantı", "Yeni sekmede aç", "Editörü tam ekranda aç", "Stili temizle", "Renk doldur veya yazı rengi seç", "Yinele", "Geri Al", "Kalın", "İtalik", "Sırasız Liste Ekle", "Sıralı Liste Ekle", "Ortala", "Kenarlara Yasla", "Sola Yasla", "Sağa Yasla", "Yatay Çizgi Ekle", "Resim Ekle", "Dosya Ekle", "Youtube/Vimeo Videosu Ekle", "Bağlantı Ekle", "Font Boyutu", "Font Ailesi", "Blok Ekle", "Normal", "Başlık 1", "Başlık 2", "Başlık 3", "Başlık 4", "Alıntı", "Kod", "Ekle", "Tablo Ekle", "Girintiyi Azalt", "Girintiyi Arttır", "Özel Karakter Seç", "Özel Karakter Ekle", "Resim Biçimi", "Mod Değiştir", "Boşluklar", "Üst", "Sağ", "Alt", "Sol", "CSS Stilleri", "CSS Sınıfları", "Hizalama", "Sağ", "Ortalı", "Sol", "Belirsiz", "Kaynak", "Başlık", "Alternatif Yazı", "Link", "Bağlantıyı yeni sekmede aç", "Resim", "Dosya", "Gelişmiş", "Resim özellikleri", "İptal", "Tamam", "Kodunuz HTML koduna benziyor. HTML olarak devam etmek ister misiniz?", "HTML olarak yapıştır", "Sakla", "Temizle", "Yazı olarak ekle", "Sadece yazıyı ekle", "Word biçiminde yapıştırma algılandı", "Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder löschen?", "Dosya Listeleyici", "Liste yüklenirken hata oluştu", "Klasörler yüklenirken hata oluştur", "Emin misiniz?", "Dizin yolu giriniz", "Dizin oluştur", "İsim yaz", "Resim bırak", "Dosya bırak", "veya tıkla", "Alternatif yazı", "Gözat", "Yükle", "Arka plan", "Yazı", "Üst", "Orta", "Aşağı", "Öncesine kolon ekle", "Sonrasına kolon ekle", "Üstüne satır ekle", "Altına satır ekle", "Tabloyu sil", "Satırı sil", "Kolonu sil", "Hücreyi temizle", "Kaynak", "Kalın", "italik", "Fırça", "Bağlantı", "Geri al", "Yinele", "Tablo", "Resim", "Silgi", "Paragraf", "Font boyutu", "Video", "Font", "Hakkında", "Yazdır", "Alt çizgi", "Üstü çizili", "Girinti", "Çıkıntı", "Tam ekran", "Küçült", "Ayraç", "Sırasız liste", "Sıralı liste", "Kes", "Tümünü seç", "Kod ekle", "Bağlantıyı aç", "Bağlantıyı düzenle", "Nofollow özelliği", "Bağlantıyı kaldır", "Yorumu", "Düzenlemek için", "Güncelle", "URL", "Düzenle", "Yatay hizala", "Filtre", "Değişime göre sırala", "İsme göre sırala", "Boyuta göre sırala", "Klasör ekle", "Sıfırla", "Kaydet", "Farklı kaydet", "Boyutlandır", "Kırp", "Genişlik", "Yükseklik", "En boy oranını koru", "Evet", "Hayır", "Sil", "Seç", "Harfler: %d", "Kelimeler: %d", "Tümü", "Seç: %s", "Tümünü seç", "Dikey hizala", "Ayır", "Dikey ayır", "Yatay ayır", "Birleştir", "Kolon ekle", "Satır ekle", "Sil", "Kenarlık", null, "Üstü çizili", "Alt çizgi", "Üst yazı", "Alt yazı", "Seçilimi kes", "Satır sonu", "Ara", "Şununla değiştir", "Değiştir", "Yapıştır", "Yapıştırılacak içerik seç", "Sadece kendi resimlerinizi düzenleyebilirsiniz. Bu görseli kendi hostunuza indirmek ister misiniz?", "Görsel başarıyla hostunuza yüklendi", "Palet", "Bu dizinde dosya yok", "Yeniden isimlendir", "Yeni isim girin", "Ön izleme", "İndir", "Panodan yapıştır ", "Tarayıcınız panoya doğrudan erişimi desteklemiyor.", "Seçimi kopyala", "Kopyala", "Sınır yarıçapı", "Tümünü Göster", "Uygula", "Lütfen bu alanı doldurun", "Lütfen bir web adresi girin", "Varsayılan", "Daire", "Nokta", "Kare", "Bul", "Öncekini Bul", "Sonrakini Bul", "Sınıf adı girin", "Özel yeniden boyutlandırma için Alt tuşuna basın"];
      }, 21042: function(e2) {
        e2.exports.default = ["输入一些内容", "关于Jodit", "Jodit Editor", "Free Non-commercial Version", "开发者指南", "使用帮助", "有关许可证的信息，请访问我们的网站：", "购买完整版本", "Copyright © XDSoft.net - Chupurnov Valeriy. 版权所有", "Anchor", "在新窗口打开", "全屏编辑", "清除样式", "颜色", "重做", "撤销", "粗体", "斜体", "符号列表", "编号", "居中", "对齐文本", "左对齐", "右对齐", "分割线", "图片", "文件", "视频", "链接", "字号", "字体", "格式块", "默认", "标题1", "标题2", "标题3", "标题4", "引用", "代码", "插入", "表格", "减少缩进", "增加缩进", "选择特殊符号", "特殊符号", "格式复制", "改变模式", "外边距（Margins）", "top", "right", "bottom", "left", "样式", "Classes", "对齐方式", "居右", "居中", "居左", "无", "Src", "Title", "Alternative", "Link", "在新窗口打开链接", "图片", "file", "高级", "图片属性", "取消", "确定", "你粘贴的文本是一段html代码，是否保留源格式", "html粘贴", "保留源格式", "匹配目标格式", "把html代码视为普通文本", "只保留文本", "文本粘贴", "正在粘贴 Word/Excel 的文本，是否保留源格式？", "文件管理", "加载list错误", "加载folders错误", "你确定吗？", "输入路径", "创建路径", "type name", "拖动图片到此", "拖动文件到此", "或点击", "Alternative text", "浏览", "上传", "背景色", "文字", "顶部", "中间", "底部", "在之前插入列", "在之后插入列", "在之前插入行", "在之后插入行", "删除表格", "删除行", "删除列", "清除内容", "源码", "粗体", "斜体", "颜色", "链接", "撤销", "重做", "表格", "图片", "橡皮擦", "段落", "字号", "视频", "字体", "关于", "打印", "下划线", "上出现", "增加缩进", "减少缩进", "全屏", "收缩", "分割线", "无序列表", "顺序列表", "剪切", "全选", "嵌入代码", "打开链接", "编辑链接", "No follow", "取消链接", "预览", "铅笔", "更新", "URL", "编辑", "水平对齐", "筛选", "修改时间排序", "名称排序", "大小排序", "新建文件夹", "重置", "保存", "保存为", "调整大小", "剪切", "宽", "高", "保持长宽比", "是", "不", "移除", "选择", "字符数: %d", "单词数: %d", "全部", "选择: %s", "全选", "垂直对齐", "拆分", "垂直拆分", "水平拆分", "合并", "添加列", "添加行", "删除", "边框", null, "删除线", "下划线", "上标", "下标", "剪切", "Break", "查找", "替换为", "替换", "粘贴", "选择内容并粘贴", "你只能编辑你自己的图片。Download this image on the host?", "图片上传成功", "调色板", "此目录中沒有文件。", "重命名", "输入新名称", "预览", "下载", "粘贴从剪贴板", "你浏览器不支持直接访问的剪贴板。", "复制选中内容", "复制", "边界半径", "显示所有", "应用", "请填写这个字段", "请输入一个网址", "默认", "圆圈", "点", "方形", "搜索", "查找上一个", "查找下一个", "插入班级名称", "按Alt自定义调整大小"];
      }, 73895: function(e2) {
        e2.exports.default = ["輸入一些內容", "關於Jodit", "Jodit Editor", null, "開發者指南", "使用幫助", "有關許可證的信息，請訪問我們的網站：", "購買完整版本", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "Anchor", "在新窗口打開", "全屏編輯", "清除樣式", "顏色", "重做", "撤銷", "粗體", "斜體", "符號列表", "編號", "居中", "對齊文本", "左對齊", "右對齊", "分割線", "圖片", "文件", "youtube/vimeo 影片", "鏈接", "字號", "字體", "格式塊", "文本", "標題1", "標題2", "標題3", "標題4", "引用", "代碼", "插入", "表格", "減少縮進", "增加縮進", "選擇特殊符號", "特殊符號", "格式複製", "改變模式", "外邊距（Margins）", "top", "right", "bottom", "left", "樣式", "Classes", "對齊方式", "居右", "居中", "居左", "無", "Src", "Title", "替代", "Link", "在新窗口打開鏈接", "圖片", "file", "高級", "圖片屬性", "取消", "確定", "你黏貼的文本是一段html代碼，是否保留源格式", "html黏貼", "保留源格式", "匹配目標格式", "把html代碼視為普通文本", "只保留文本", "文本黏貼", "正在黏貼 Word/Excel 的文本，是否保留源格式？", "文件管理", "加載list錯誤", "加載folders錯誤", "你確定嗎？", "輸入路徑", "創建路徑", "type name", "拖動圖片到此", "拖動文件到此", "或點擊", "替代文字", "瀏覽", "上傳", "背景色", "文字", "頂部", "中間", "底部", "在之前插入列", "在之後插入列", "在之前插入行", "在之後插入行", "刪除表格", "刪除行", "刪除列", "清除內容", "源碼", "粗體", "斜體", "顏色", "鏈接", "撤銷", "重做", "表格", "圖片", "橡皮擦", "段落", "字號", "影片", "字體", "關於", "打印", "下劃線", "上出現", "增加縮進", "減少縮進", "全屏", "收縮", "分割線", "無序列表", "順序列表", "剪切", "全選", "嵌入代碼", "打開鏈接", "編輯鏈接", "No follow", "取消連結", "回顧", "鉛筆", "更新", "URL", null, "水平對齊", "篩選", "修改時間排序", "名稱排序", "大小排序", "新建文件夾", "重置", "保存", "保存為", "調整大小", "Crop", "寬", "高", "保存長寬比", "是", "不", "移除", "選擇", "字符數: %d", "單詞數: %d", "全部", "選擇: %s", "全選", "垂直對齊", "拆分", "垂直拆分", "水平拆分", "合併", "添加列", "添加行", "刪除", "邊框", null, "刪除線", "下劃線", "上標", "下標", "剪切", "Pause", "查找", "替換為", "แทนที่", "黏貼", "選擇內容並黏貼", "你只能編輯你自己的圖片。是否下載此圖片到本地?", "圖片上傳成功", "調色板", "此目錄中沒有文件。", "重命名", "輸入新名稱", "預覽", "下載", "從剪貼板貼上", "瀏覽器無法存取剪贴板。", "複製已選取項目", "複製", "邊框圓角", "顯示所有", "應用", "ได้โปรดกรอกช่องข้อมูลนี้", "โปรดเติมที่อยู่บนเว็บ", "ค่าปริยาย", "วงกลม", "จุด", "Quadrate", "ค้นหา", "ค้นหาก่อนหน้านี้", "ค้นหาถัดไป", "ใส่ชื่อคลาส", "กดอัลท์สำหรับการปรับขนาดที่กำหนดเอง"];
      }, 3610: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z"/> </svg>`;
      }, 56170: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24"> <g transform="translate(-251.000000, -443.000000)"> <g transform="translate(215.000000, 119.000000)"/> <path d="M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z"/> </g> </svg>`;
      }, 95331: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px" viewBox="0 0 459 459"> <g> <path d="M229.5,0C102,0,0,102,0,229.5S102,459,229.5,459c20.4,0,38.25-17.85,38.25-38.25c0-10.2-2.55-17.85-10.2-25.5 c-5.1-7.65-10.2-15.3-10.2-25.5c0-20.4,17.851-38.25,38.25-38.25h45.9c71.4,0,127.5-56.1,127.5-127.5C459,91.8,357,0,229.5,0z M89.25,229.5c-20.4,0-38.25-17.85-38.25-38.25S68.85,153,89.25,153s38.25,17.85,38.25,38.25S109.65,229.5,89.25,229.5z M165.75,127.5c-20.4,0-38.25-17.85-38.25-38.25S145.35,51,165.75,51S204,68.85,204,89.25S186.15,127.5,165.75,127.5z M293.25,127.5c-20.4,0-38.25-17.85-38.25-38.25S272.85,51,293.25,51s38.25,17.85,38.25,38.25S313.65,127.5,293.25,127.5z M369.75,229.5c-20.4,0-38.25-17.85-38.25-38.25S349.35,153,369.75,153S408,170.85,408,191.25S390.15,229.5,369.75,229.5z" /> </g> </svg>`;
      }, 84279: function(e2) {
        e2.exports = '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"> <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"/> </svg>';
      }, 11257: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 128 128" xml:space="preserve"> <polygon points="112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125 16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594 112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125"/> </svg>`;
      }, 25141: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"/> </svg>`;
      }, 24557: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"/> </svg>`;
      }, 10859: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"/> </svg>`;
      }, 9813: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm639 217v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z"/> </svg>`;
      }, 93395: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm637-679v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z"/> </svg>`;
      }, 98213: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"/> </svg>`;
      }, 20026: function(e2) {
        e2.exports = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"> <path d="M36 4h-24c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4zm-24 4h10v16l-5-3-5 3v-16z"/> </svg>';
      }, 66911: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"/> </svg>`;
      }, 50018: function(e2) {
        e2.exports = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <path d="M24.89,6.61H22.31V4.47A2.47,2.47,0,0,0,19.84,2H6.78A2.47,2.47,0,0,0,4.31,4.47V22.92a2.47,2.47,0,0,0,2.47,2.47H9.69V27.2a2.8,2.8,0,0,0,2.8,2.8h12.4a2.8,2.8,0,0,0,2.8-2.8V9.41A2.8,2.8,0,0,0,24.89,6.61ZM6.78,23.52a.61.61,0,0,1-.61-.6V4.47a.61.61,0,0,1,.61-.6H19.84a.61.61,0,0,1,.61.6V6.61h-8a2.8,2.8,0,0,0-2.8,2.8V23.52Zm19,3.68a.94.94,0,0,1-.94.93H12.49a.94.94,0,0,1-.94-.93V9.41a.94.94,0,0,1,.94-.93h12.4a.94.94,0,0,1,.94.93Z"/> <path d="M23.49,13.53h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z"/> <path d="M23.49,17.37h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z"/> <path d="M23.49,21.22h-9.6a.93.93,0,1,0,0,1.86h9.6a.93.93,0,1,0,0-1.86Z"/> </svg>';
      }, 99738: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z"/> </svg>`;
      }, 9185: function(e2) {
        e2.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path stroke-width="0" d="M10.5 20H2a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4a3 3 0 0 1 5.94 0L13 3v1h1a2 2 0 0 1 2 2v1h-2V6h-1v1H3V6H2v12h5v2h3.5zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2 4h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm0 2v8h8v-8h-8z"/> </svg>';
      }, 8619: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 18 18"> <g fill-rule="evenodd" stroke="none" stroke-width="1"> <g transform="translate(-381.000000, -381.000000)"> <g transform="translate(381.000000, 381.000000)"> <path d="M0,2 L2,2 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M0,10 L2,10 L2,8 L0,8 L0,10 L0,10 Z M4,18 L6,18 L6,16 L4,16 L4,18 L4,18 Z M0,6 L2,6 L2,4 L0,4 L0,6 L0,6 Z M10,0 L8,0 L8,2 L10,2 L10,0 L10,0 Z M16,0 L16,2 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M2,18 L2,16 L0,16 C0,17.1 0.9,18 2,18 L2,18 Z M0,14 L2,14 L2,12 L0,12 L0,14 L0,14 Z M6,0 L4,0 L4,2 L6,2 L6,0 L6,0 Z M8,18 L10,18 L10,16 L8,16 L8,18 L8,18 Z M16,10 L18,10 L18,8 L16,8 L16,10 L16,10 Z M16,18 C17.1,18 18,17.1 18,16 L16,16 L16,18 L16,18 Z M16,6 L18,6 L18,4 L16,4 L16,6 L16,6 Z M16,14 L18,14 L18,12 L16,12 L16,14 L16,14 Z M12,18 L14,18 L14,16 L12,16 L12,18 L12,18 Z M12,2 L14,2 L14,0 L12,0 L12,2 L12,2 Z M4,14 L14,14 L14,4 L4,4 L4,14 L4,14 Z M6,6 L12,6 L12,12 L6,12 L6,6 L6,6 Z"/> </g> </g> </g> </svg>`;
      }, 73894: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"/> </svg>`;
      }, 83301: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 16 16"> <path stroke-width="0" d="M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"/> </svg>`;
      }, 84142: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"/> </svg>`;
      }, 57292: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"/> </svg>`;
      }, 18019: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"/></svg>`;
      }, 45146: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24"> <path stroke-width="0" d="M22,20.6L3.4,2H8V0H0v8h2V3.4L20.6,22H16v2h8v-8h-2V20.6z M16,0v2h4.7l-6.3,6.3l1.4,1.4L22,3.5V8h2V0H16z M8.3,14.3L2,20.6V16H0v8h8v-2H3.5l6.3-6.3L8.3,14.3z"/> </svg>`;
      }, 53576: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z"/> </svg>`;
      }, 14655: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"/> </svg>`;
      }, 53477: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"/> </svg>`;
      }, 90053: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/> </svg>`;
      }, 72230: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/> </svg>`;
      }, 78321: function(e2) {
        e2.exports = '<svg viewBox="0 0 18.151 18.151" xmlns="http://www.w3.org/2000/svg"> <g> <path stroke-width="0" d="M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194 c0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z"/> <path stroke-width="0" d="M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938 S13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597 s3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z"/> <polygon stroke-width="0" points="11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868 10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 "/> </g> </svg>';
      }, 77654: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 432 432"> <g> <polygon points="203.688,96 0,96 0,144 155.688,144 "/> <polygon points="155.719,288 0,288 0,336 203.719,336 "/> <path d="M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719 L97.844,230.125z"/> <polygon points="232,176 232,96 112,216 232,336 232,256 432,256 432,176"/> </g> </svg>`;
      }, 43371: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 312 312"> <g transform="translate(0.000000,312.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32 -30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30 25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27 -503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960 11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40 -47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0 -775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80 -3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10 164 12 777 10 l773 -3 3 -454z"/> <path d="M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104 190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4 289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103 -97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35 -82 -78z"/> <path d="M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0 189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z"/> <path d="M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95 106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79 79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95 108 -6 10 -568 11 -577 1z"/> </g> </svg>`;
      }, 44563: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 48 48"> <path d="M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z"/> <path d="M0 0h48v48h-48z" fill="none"/> </svg>`;
      }, 53183: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 48 48"> <path d="M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z"/> <path d="M0 0h48v48h-48z" fill="none"/> </svg>`;
      }, 18548: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"/> </svg>`;
      }, 52242: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"/> </svg>`;
      }, 87498: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"/> </svg>`;
      }, 7986: function(e2) {
        e2.exports = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M5.09668 6.99707H7.17358L4.17358 3.99707L1.17358 6.99707H3.09668V17.0031H1.15881L4.15881 20.0031L7.15881 17.0031H5.09668V6.99707Z"/> <path d="M22.8412 7H8.84119V5H22.8412V7Z"/> <path d="M22.8412 11H8.84119V9H22.8412V11Z"/> <path d="M8.84119 15H22.8412V13H8.84119V15Z"/> <path d="M22.8412 19H8.84119V17H22.8412V19Z"/> </svg>';
      }, 23075: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/> </svg>`;
      }, 10655: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/> </svg>`;
      }, 15476: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path stroke-width="0" d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/> </svg>`;
      }, 59403: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path stroke-width="0" d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/> </svg>`;
      }, 22860: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z"/> </svg>`;
      }, 95600: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"/> </svg>`;
      }, 76214: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"/> </svg>`;
      }, 41197: function(e2) {
        e2.exports = '<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M306.39,154.09c19.628,4.543,35.244,21.259,39.787,39.523 c1.551,8.54,8.998,14.989,17.904,14.989c9.991,0,18.168-8.175,18.168-18.17c0-13.083-10.991-32.98-25.985-47.881 c-14.719-14.537-32.252-24.802-46.695-24.802c-9.991,0-18.172,8.45-18.172,18.446C291.396,145.094,297.847,152.546,306.39,154.09z M56.629,392.312c-14.09,14.08-14.09,36.979,0,51.059c14.08,14.092,36.981,14.092,50.965,0l104.392-104.303 c24.347,15.181,53.062,23.991,83.953,23.991c87.857,0,158.995-71.142,158.995-158.999c0-87.854-71.138-158.995-158.995-158.995 c-87.856,0-158.995,71.141-158.995,158.995c0,30.802,8.819,59.606,23.992,83.953L56.629,392.312z M182.371,204.06 c0-62.687,50.875-113.568,113.568-113.568s113.569,50.881,113.569,113.568c0,62.694-50.876,113.569-113.569,113.569 S182.371,266.754,182.371,204.06z" fill-rule="evenodd"/> </svg>';
      }, 9342: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/> </svg>`;
      }, 69546: function(e2) {
        e2.exports = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"> <path d="M24.89 32h4.18L18.86 6h-3.71L4.93 32h4.18l2.25-6h11.29l2.24 6zM12.86 22L17 10.95 21.14 22h-8.28zm30.31 1.17L27 39.34 19.66 32l-2.83 2.83L27 45l19-19-2.83-2.83z"/> </svg>';
      }, 43158: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 270 270"> <path d="m240.443652,220.45085l-47.410809,0l0,-10.342138c13.89973,-8.43655 25.752896,-19.844464 34.686646,-33.469923c11.445525,-17.455846 17.496072,-37.709239 17.496072,-58.570077c0,-59.589197 -49.208516,-108.068714 -109.693558,-108.068714s-109.69263,48.479517 -109.69263,108.069628c0,20.860839 6.050547,41.113316 17.497001,58.570077c8.93375,13.625459 20.787845,25.032458 34.686646,33.469008l0,10.342138l-47.412666,0c-10.256959,0 -18.571354,8.191376 -18.571354,18.296574c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.98402,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574l0,-39.496814c0,-7.073455 -4.137698,-13.51202 -10.626529,-16.537358c-25.24497,-11.772016 -41.557118,-37.145704 -41.557118,-64.643625c0,-39.411735 32.545369,-71.476481 72.549922,-71.476481c40.004553,0 72.550851,32.064746 72.550851,71.476481c0,27.497006 -16.312149,52.87161 -41.557118,64.643625c-6.487902,3.026253 -10.6256,9.464818 -10.6256,16.537358l0,39.496814c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.982163,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574c0,-10.105198 -8.314395,-18.296574 -18.571354,-18.296574z"/> </svg>`;
      }, 51716: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/> </svg>`;
      }, 49222: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z"/> </svg>`;
      }, 1755: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/> </svg>`;
      }, 74911: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/> </svg>`;
      }, 8805: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/> </svg>`;
      }, 16547: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/> </svg>`;
      }, 10856: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/> </svg>`;
      }, 98441: function(e2) {
        e2.exports = '<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"> <g stroke="none" stroke-width="1"> <path d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"/> </g> </svg>';
      }, 52488: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"/> </svg>`;
      }, 9370: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"/> </svg>`;
      }, 66543: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 10 10"> <path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/> </svg>`;
      }, 608: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24" > <circle cx="12" cy="12" r="2.2"/> <circle cx="12" cy="5" r="2.2"/> <circle cx="12" cy="19" r="2.2"/> </svg>`;
      }, 42840: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"/> </svg>`;
      }, 79096: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1152 512v-472q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z"/> </svg>`;
      }, 33014: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"/> </svg>`;
      }, 91677: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/> </svg>`;
      }, 8259: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/> </svg>`;
      }, 64467: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/></svg>`;
      }, 86934: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 32 32"> <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"/> </svg>`;
      }, 76133: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/></svg>`;
      }, 45519: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg>`;
      }, 90265: function(e2) {
        e2.exports = '<svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.9814 11.8049C5.59087 11.4144 5.59087 10.7812 5.9814 10.3907L10.224 6.14806C10.6146 5.75754 11.2477 5.75754 11.6383 6.14806C12.0288 6.53859 12.0288 7.17175 11.6383 7.56228L7.39561 11.8049C7.00509 12.1954 6.37192 12.1954 5.9814 11.8049Z"/> <path d="M0.707107 12.0208C0.316582 11.6303 0.316582 10.9971 0.707107 10.6066L10.6066 0.707121C10.9971 0.316597 11.6303 0.316596 12.0208 0.707121C12.4113 1.09764 12.4113 1.73081 12.0208 2.12133L2.12132 12.0208C1.7308 12.4114 1.09763 12.4114 0.707107 12.0208Z"/> </svg>';
      }, 81279: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/> </svg>`;
      }, 68899: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"/> </svg>`;
      }, 70744: function(e2) {
        e2.exports = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"> <path stroke="null" d="m42.276011,26.302547c0.098397,-0.76605 0.172194,-1.54407 0.172194,-2.33406s-0.073797,-1.56801 -0.172194,-2.33406l5.202718,-3.961917c0.467384,-0.359086 0.602679,-1.005441 0.29519,-1.532101l-4.919828,-8.29489c-0.307489,-0.51469 -0.947067,-0.730142 -1.500548,-0.51469l-6.125186,2.405877c-1.266856,-0.945594 -2.656707,-1.747553 -4.157255,-2.357999l-0.922468,-6.343855c-0.110696,-0.562568 -0.614979,-1.005441 -1.229957,-1.005441l-9.839656,0c-0.614979,0 -1.119261,0.442873 -1.217657,1.005441l-0.922468,6.343855c-1.500548,0.610446 -2.890399,1.400436 -4.157255,2.357999l-6.125186,-2.405877c-0.553481,-0.203482 -1.193058,0 -1.500548,0.51469l-4.919828,8.29489c-0.307489,0.51469 -0.172194,1.161045 0.29519,1.532101l5.190419,3.961917c-0.098397,0.76605 -0.172194,1.54407 -0.172194,2.33406s0.073797,1.56801 0.172194,2.33406l-5.190419,3.961917c-0.467384,0.359086 -0.602679,1.005441 -0.29519,1.532101l4.919828,8.29489c0.307489,0.51469 0.947067,0.730142 1.500548,0.51469l6.125186,-2.405877c1.266856,0.945594 2.656707,1.747553 4.157255,2.357999l0.922468,6.343855c0.098397,0.562568 0.602679,1.005441 1.217657,1.005441l9.839656,0c0.614979,0 1.119261,-0.442873 1.217657,-1.005441l0.922468,-6.343855c1.500548,-0.610446 2.890399,-1.400436 4.157255,-2.357999l6.125186,2.405877c0.553481,0.203482 1.193058,0 1.500548,-0.51469l4.919828,-8.29489c0.307489,-0.51469 0.172194,-1.161045 -0.29519,-1.532101l-5.190419,-3.961917zm-18.277162,6.044617c-4.759934,0 -8.609699,-3.746465 -8.609699,-8.378677s3.849766,-8.378677 8.609699,-8.378677s8.609699,3.746465 8.609699,8.378677s-3.849766,8.378677 -8.609699,8.378677z"/> </svg>';
      }, 19201: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"/> </svg>`;
      }, 84930: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"/> </svg>`;
      }, 99704: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"/> </svg>`;
      }, 2304: function(e2) {
        e2.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"/> </svg>`;
      }, 93330: function(e2, t2, o2) {
        o2.r(t2);
      }, 45066: function(e2, t2, o2) {
        o2.r(t2);
      }, 99895: function(e2, t2, o2) {
        o2.r(t2);
      }, 87682: function(e2, t2, o2) {
        o2.r(t2);
      }, 50905: function(e2, t2, o2) {
        o2.r(t2);
      }, 70446: function(e2, t2, o2) {
        o2.r(t2);
      }, 18984: function(e2, t2, o2) {
        o2.r(t2);
      }, 4591: function(e2, t2, o2) {
        o2.r(t2);
      }, 64194: function(e2, t2, o2) {
        o2.r(t2);
      }, 70375: function(e2, t2, o2) {
        o2.r(t2);
      }, 90235: function(e2, t2, o2) {
        o2.r(t2);
      }, 88477: function(e2, t2, o2) {
        o2.r(t2);
      }, 50197: function(e2, t2, o2) {
        o2.r(t2);
      }, 39008: function(e2, t2, o2) {
        o2.r(t2);
      }, 47086: function(e2, t2, o2) {
        o2.r(t2);
      }, 16462: function(e2, t2, o2) {
        o2.r(t2);
      }, 40692: function(e2, t2, o2) {
        o2.r(t2);
      }, 27452: function(e2, t2, o2) {
        o2.r(t2);
      }, 51422: function(e2, t2, o2) {
        o2.r(t2);
      }, 62820: function(e2, t2, o2) {
        o2.r(t2);
      }, 63421: function(e2, t2, o2) {
        o2.r(t2);
      }, 32115: function(e2, t2, o2) {
        o2.r(t2);
      }, 53362: function(e2, t2, o2) {
        o2.r(t2);
      }, 48904: function(e2, t2, o2) {
        o2.r(t2);
      }, 85796: function(e2, t2, o2) {
        o2.r(t2);
      }, 28654: function(e2, t2, o2) {
        o2.r(t2);
      }, 60819: function(e2, t2, o2) {
        o2.r(t2);
      }, 96410: function(e2, t2, o2) {
        o2.r(t2);
      }, 33126: function(e2, t2, o2) {
        o2.r(t2);
      }, 30724: function(e2, t2, o2) {
        o2.r(t2);
      }, 14320: function(e2, t2, o2) {
        o2.r(t2);
      }, 9947: function(e2, t2, o2) {
        o2.r(t2);
      }, 45109: function(e2, t2, o2) {
        o2.r(t2);
      }, 71708: function(e2, t2, o2) {
        o2.r(t2);
      }, 51629: function(e2, t2, o2) {
        o2.r(t2);
      }, 54860: function(e2, t2, o2) {
        o2.r(t2);
      }, 47818: function(e2, t2, o2) {
        o2.r(t2);
      }, 6316: function(e2, t2, o2) {
        o2.r(t2);
      }, 88582: function(e2, t2, o2) {
        o2.r(t2);
      }, 30962: function(e2, t2, o2) {
        o2.r(t2);
      }, 68197: function(e2, t2, o2) {
        o2.r(t2);
      }, 60057: function(e2, t2, o2) {
        o2.r(t2);
      }, 33393: function(e2, t2, o2) {
        o2.r(t2);
      }, 51057: function(e2, t2, o2) {
        o2.r(t2);
      }, 64618: function(e2, t2, o2) {
        o2.r(t2);
      }, 90176: function(e2, t2, o2) {
        o2.r(t2);
      }, 91147: function(e2, t2, o2) {
        o2.r(t2);
      }, 70631: function(e2, t2) {
        function o2(e3) {
          return o2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, o2(e3);
        }
        function n2(e3, t3, n3) {
          var r3 = n3.value;
          if ("function" != typeof r3) throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(o2(r3)));
          var i = false;
          return { configurable: true, get: function() {
            if (i || this === e3.prototype || this.hasOwnProperty(t3) || "function" != typeof r3) return r3;
            var o3 = r3.bind(this);
            return i = true, Object.defineProperty(this, t3, { configurable: true, get: function() {
              return o3;
            }, set: function(e4) {
              r3 = e4, delete this[t3];
            } }), i = false, o3;
          }, set: function(e4) {
            r3 = e4;
          } };
        }
        function r2(e3) {
          var t3;
          return "undefined" != typeof Reflect && "function" == typeof Reflect.ownKeys ? t3 = Reflect.ownKeys(e3.prototype) : (t3 = Object.getOwnPropertyNames(e3.prototype), "function" == typeof Object.getOwnPropertySymbols && (t3 = t3.concat(Object.getOwnPropertySymbols(e3.prototype)))), t3.forEach(function(t4) {
            if ("constructor" !== t4) {
              var o3 = Object.getOwnPropertyDescriptor(e3.prototype, t4);
              "function" == typeof o3.value && Object.defineProperty(e3.prototype, t4, n2(e3, t4, o3));
            }
          }), e3;
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.boundClass = t2.boundMethod = void 0, t2.boundMethod = n2, t2.boundClass = r2, t2.default = function() {
          return 1 === arguments.length ? r2.apply(void 0, arguments) : n2.apply(void 0, arguments);
        };
      }, 61227: function() {
        "document" in window.self && ((!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function(e2) {
          if ("Element" in e2) {
            var t2 = "classList", o2 = e2.Element.prototype, n2 = Object, r2 = String.prototype.trim || function() {
              return this.replace(/^\s+|\s+$/g, "");
            }, i = Array.prototype.indexOf || function(e3) {
              for (var t3 = 0, o3 = this.length; o3 > t3; t3++) if (t3 in this && this[t3] === e3) return t3;
              return -1;
            }, a = function(e3, t3) {
              this.name = e3, this.code = DOMException[e3], this.message = t3;
            }, s = function(e3, t3) {
              if ("" === t3) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
              if (/\s/.test(t3)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
              return i.call(e3, t3);
            }, l = function(e3) {
              for (var t3 = r2.call(e3.getAttribute("class") || ""), o3 = t3 ? t3.split(/\s+/) : [], n3 = 0, i2 = o3.length; i2 > n3; n3++) this.push(o3[n3]);
              this._updateClassName = function() {
                e3.setAttribute("class", this.toString());
              };
            }, c = l.prototype = [], u = function() {
              return new l(this);
            };
            if (a.prototype = Error.prototype, c.item = function(e3) {
              return this[e3] || null;
            }, c.contains = function(e3) {
              return -1 !== s(this, e3 += "");
            }, c.add = function() {
              var e3, t3 = arguments, o3 = 0, n3 = t3.length, r3 = false;
              do {
                -1 === s(this, e3 = t3[o3] + "") && (this.push(e3), r3 = true);
              } while (++o3 < n3);
              r3 && this._updateClassName();
            }, c.remove = function() {
              var e3, t3, o3 = arguments, n3 = 0, r3 = o3.length, i2 = false;
              do {
                for (t3 = s(this, e3 = o3[n3] + ""); -1 !== t3; ) this.splice(t3, 1), i2 = true, t3 = s(this, e3);
              } while (++n3 < r3);
              i2 && this._updateClassName();
            }, c.toggle = function(e3, t3) {
              var o3 = this.contains(e3 += ""), n3 = o3 ? true !== t3 && "remove" : false !== t3 && "add";
              return n3 && this[n3](e3), true === t3 || false === t3 ? t3 : !o3;
            }, c.toString = function() {
              return this.join(" ");
            }, n2.defineProperty) {
              var d = { get: u, enumerable: true, configurable: true };
              try {
                n2.defineProperty(o2, t2, d);
              } catch (e3) {
                void 0 !== e3.number && -2146823252 !== e3.number || (d.enumerable = false, n2.defineProperty(o2, t2, d));
              }
            } else n2.prototype.__defineGetter__ && o2.__defineGetter__(t2, u);
          }
        }(window.self), function() {
          var e2 = document.createElement("_");
          if (e2.classList.add("c1", "c2"), !e2.classList.contains("c2")) {
            var t2 = function(e3) {
              var t3 = DOMTokenList.prototype[e3];
              DOMTokenList.prototype[e3] = function(e4) {
                var o3, n2 = arguments.length;
                for (o3 = 0; n2 > o3; o3++) t3.call(this, e4 = arguments[o3]);
              };
            };
            t2("add"), t2("remove");
          }
          if (e2.classList.toggle("c3", false), e2.classList.contains("c3")) {
            var o2 = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e3, t3) {
              return 1 in arguments && !this.contains(e3) == !t3 ? t3 : o2.call(this, e3);
            };
          }
          e2 = null;
        }());
      }, 69220: function(e2, t2, o2) {
        o2(22513);
        var n2 = o2(56599);
        e2.exports = n2("Array", "findIndex");
      }, 10444: function(e2, t2, o2) {
        o2(52867), o2(70057);
        var n2 = o2(31116);
        e2.exports = n2.Array.from;
      }, 66622: function(e2, t2, o2) {
        o2(54166), o2(32044), o2(95661), o2(28424), o2(64514), o2(30733), o2(40327), o2(53639), o2(6147), o2(7290), o2(95122), o2(61322), o2(39605), o2(49341), o2(28809), o2(82658), o2(43967), o2(90217), o2(73477), o2(93697);
        var n2 = o2(31116);
        e2.exports = n2.Symbol;
      }, 98061: function(e2, t2, o2) {
        var n2 = o2(794), r2 = o2(98418), i = TypeError;
        e2.exports = function(e3) {
          if (n2(e3)) return e3;
          throw i(r2(e3) + " is not a function");
        };
      }, 75839: function(e2, t2, o2) {
        var n2 = o2(794), r2 = String, i = TypeError;
        e2.exports = function(e3) {
          if ("object" == typeof e3 || n2(e3)) return e3;
          throw i("Can't set " + r2(e3) + " as a prototype");
        };
      }, 15179: function(e2, t2, o2) {
        var n2 = o2(19517), r2 = o2(93503), i = o2(73252).f, a = n2("unscopables"), s = Array.prototype;
        null == s[a] && i(s, a, { configurable: true, value: r2(null) }), e2.exports = function(e3) {
          s[a][e3] = true;
        };
      }, 52313: function(e2, t2, o2) {
        var n2 = o2(8148), r2 = String, i = TypeError;
        e2.exports = function(e3) {
          if (n2(e3)) return e3;
          throw i(r2(e3) + " is not an object");
        };
      }, 92707: function(e2, t2, o2) {
        var n2 = o2(40207), r2 = o2(9093), i = o2(68488), a = o2(79665), s = o2(84997), l = o2(15333), c = o2(15050), u = o2(89476), d = o2(27395), p = o2(81058), f = Array;
        e2.exports = function(e3) {
          var t3 = i(e3), o3 = l(this), h = arguments.length, m = h > 1 ? arguments[1] : void 0, v = void 0 !== m;
          v && (m = n2(m, h > 2 ? arguments[2] : void 0));
          var g, y, _, b, w, S, C = p(t3), j = 0;
          if (!C || this === f && s(C)) for (g = c(t3), y = o3 ? new this(g) : f(g); g > j; j++) S = v ? m(t3[j], j) : t3[j], u(y, j, S);
          else for (w = (b = d(t3, C)).next, y = o3 ? new this() : []; !(_ = r2(w, b)).done; j++) S = v ? a(b, m, [_.value, j], true) : _.value, u(y, j, S);
          return y.length = j, y;
        };
      }, 79327: function(e2, t2, o2) {
        var n2 = o2(98651), r2 = o2(10586), i = o2(15050), a = function(e3) {
          return function(t3, o3, a2) {
            var s, l = n2(t3), c = i(l), u = r2(a2, c);
            if (e3 && o3 != o3) {
              for (; c > u; ) if ((s = l[u++]) != s) return true;
            } else for (; c > u; u++) if ((e3 || u in l) && l[u] === o3) return e3 || u || 0;
            return !e3 && -1;
          };
        };
        e2.exports = { includes: a(true), indexOf: a(false) };
      }, 56881: function(e2, t2, o2) {
        var n2 = o2(40207), r2 = o2(90838), i = o2(25049), a = o2(68488), s = o2(15050), l = o2(6429), c = r2([].push), u = function(e3) {
          var t3 = 1 == e3, o3 = 2 == e3, r3 = 3 == e3, u2 = 4 == e3, d = 6 == e3, p = 7 == e3, f = 5 == e3 || d;
          return function(h, m, v, g) {
            for (var y, _, b = a(h), w = i(b), S = n2(m, v), C = s(w), j = 0, E = g || l, x = t3 ? E(h, C) : o3 || p ? E(h, 0) : void 0; C > j; j++) if ((f || j in w) && (_ = S(y = w[j], j, b), e3)) if (t3) x[j] = _;
            else if (_) switch (e3) {
              case 3:
                return true;
              case 5:
                return y;
              case 6:
                return j;
              case 2:
                c(x, y);
            }
            else switch (e3) {
              case 4:
                return false;
              case 7:
                c(x, y);
            }
            return d ? -1 : r3 || u2 ? u2 : x;
          };
        };
        e2.exports = { forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6), filterReject: u(7) };
      }, 63833: function(e2, t2, o2) {
        var n2 = o2(75834), r2 = o2(19517), i = o2(65190), a = r2("species");
        e2.exports = function(e3) {
          return i >= 51 || !n2(function() {
            var t3 = [];
            return (t3.constructor = {})[a] = function() {
              return { foo: 1 };
            }, 1 !== t3[e3](Boolean).foo;
          });
        };
      }, 57652: function(e2, t2, o2) {
        var n2 = o2(10586), r2 = o2(15050), i = o2(89476), a = Array, s = Math.max;
        e2.exports = function(e3, t3, o3) {
          for (var l = r2(e3), c = n2(t3, l), u = n2(void 0 === o3 ? l : o3, l), d = a(s(u - c, 0)), p = 0; u > c; c++, p++) i(d, p, e3[c]);
          return d.length = p, d;
        };
      }, 54832: function(e2, t2, o2) {
        var n2 = o2(90838);
        e2.exports = n2([].slice);
      }, 22506: function(e2, t2, o2) {
        var n2 = o2(36222), r2 = o2(15333), i = o2(8148), a = o2(19517)("species"), s = Array;
        e2.exports = function(e3) {
          var t3;
          return n2(e3) && (r2(t3 = e3.constructor) && (t3 === s || n2(t3.prototype)) || i(t3) && null === (t3 = t3[a])) && (t3 = void 0), void 0 === t3 ? s : t3;
        };
      }, 6429: function(e2, t2, o2) {
        var n2 = o2(22506);
        e2.exports = function(e3, t3) {
          return new (n2(e3))(0 === t3 ? 0 : t3);
        };
      }, 79665: function(e2, t2, o2) {
        var n2 = o2(52313), r2 = o2(11274);
        e2.exports = function(e3, t3, o3, i) {
          try {
            return i ? t3(n2(o3)[0], o3[1]) : t3(o3);
          } catch (t4) {
            r2(e3, "throw", t4);
          }
        };
      }, 7581: function(e2, t2, o2) {
        var n2 = o2(19517)("iterator"), r2 = false;
        try {
          var i = 0, a = { next: function() {
            return { done: !!i++ };
          }, return: function() {
            r2 = true;
          } };
          a[n2] = function() {
            return this;
          }, Array.from(a, function() {
            throw 2;
          });
        } catch (e3) {
        }
        e2.exports = function(e3, t3) {
          if (!t3 && !r2) return false;
          var o3 = false;
          try {
            var i2 = {};
            i2[n2] = function() {
              return { next: function() {
                return { done: o3 = true };
              } };
            }, e3(i2);
          } catch (e4) {
          }
          return o3;
        };
      }, 6285: function(e2, t2, o2) {
        var n2 = o2(90838), r2 = n2({}.toString), i = n2("".slice);
        e2.exports = function(e3) {
          return i(r2(e3), 8, -1);
        };
      }, 8652: function(e2, t2, o2) {
        var n2 = o2(6424), r2 = o2(794), i = o2(6285), a = o2(19517)("toStringTag"), s = Object, l = "Arguments" == i(/* @__PURE__ */ function() {
          return arguments;
        }());
        e2.exports = n2 ? i : function(e3) {
          var t3, o3, n3;
          return void 0 === e3 ? "Undefined" : null === e3 ? "Null" : "string" == typeof (o3 = function(e4, t4) {
            try {
              return e4[t4];
            } catch (e5) {
            }
          }(t3 = s(e3), a)) ? o3 : l ? i(t3) : "Object" == (n3 = i(t3)) && r2(t3.callee) ? "Arguments" : n3;
        };
      }, 58392: function(e2, t2, o2) {
        var n2 = o2(14434), r2 = o2(86671), i = o2(36999), a = o2(73252);
        e2.exports = function(e3, t3, o3) {
          for (var s = r2(t3), l = a.f, c = i.f, u = 0; s.length > u; u++) {
            var d = s[u];
            n2(e3, d) || o3 && n2(o3, d) || l(e3, d, c(t3, d));
          }
        };
      }, 27259: function(e2, t2, o2) {
        var n2 = o2(75834);
        e2.exports = !n2(function() {
          function e3() {
          }
          return e3.prototype.constructor = null, Object.getPrototypeOf(new e3()) !== e3.prototype;
        });
      }, 17427: function(e2) {
        e2.exports = function(e3, t2) {
          return { value: e3, done: t2 };
        };
      }, 45840: function(e2, t2, o2) {
        var n2 = o2(13873), r2 = o2(73252), i = o2(32500);
        e2.exports = n2 ? function(e3, t3, o3) {
          return r2.f(e3, t3, i(1, o3));
        } : function(e3, t3, o3) {
          return e3[t3] = o3, e3;
        };
      }, 32500: function(e2) {
        e2.exports = function(e3, t2) {
          return { enumerable: !(1 & e3), configurable: !(2 & e3), writable: !(4 & e3), value: t2 };
        };
      }, 89476: function(e2, t2, o2) {
        var n2 = o2(43836), r2 = o2(73252), i = o2(32500);
        e2.exports = function(e3, t3, o3) {
          var a = n2(t3);
          a in e3 ? r2.f(e3, a, i(0, o3)) : e3[a] = o3;
        };
      }, 97548: function(e2, t2, o2) {
        var n2 = o2(40846), r2 = o2(73252);
        e2.exports = function(e3, t3, o3) {
          return o3.get && n2(o3.get, t3, { getter: true }), o3.set && n2(o3.set, t3, { setter: true }), r2.f(e3, t3, o3);
        };
      }, 35065: function(e2, t2, o2) {
        var n2 = o2(794), r2 = o2(73252), i = o2(40846), a = o2(25379);
        e2.exports = function(e3, t3, o3, s) {
          s || (s = {});
          var l = s.enumerable, c = void 0 !== s.name ? s.name : t3;
          if (n2(o3) && i(o3, c, s), s.global) l ? e3[t3] = o3 : a(t3, o3);
          else {
            try {
              s.unsafe ? e3[t3] && (l = true) : delete e3[t3];
            } catch (e4) {
            }
            l ? e3[t3] = o3 : r2.f(e3, t3, { value: o3, enumerable: false, configurable: !s.nonConfigurable, writable: !s.nonWritable });
          }
          return e3;
        };
      }, 25379: function(e2, t2, o2) {
        var n2 = o2(37042), r2 = Object.defineProperty;
        e2.exports = function(e3, t3) {
          try {
            r2(n2, e3, { value: t3, configurable: true, writable: true });
          } catch (o3) {
            n2[e3] = t3;
          }
          return t3;
        };
      }, 13873: function(e2, t2, o2) {
        var n2 = o2(75834);
        e2.exports = !n2(function() {
          return 7 != Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1];
        });
      }, 12062: function(e2) {
        var t2 = "object" == typeof document && document.all;
        e2.exports = { all: t2, IS_HTMLDDA: void 0 === t2 && void 0 !== t2 };
      }, 15192: function(e2, t2, o2) {
        var n2 = o2(37042), r2 = o2(8148), i = n2.document, a = r2(i) && r2(i.createElement);
        e2.exports = function(e3) {
          return a ? i.createElement(e3) : {};
        };
      }, 39505: function(e2) {
        var t2 = TypeError;
        e2.exports = function(e3) {
          if (e3 > 9007199254740991) throw t2("Maximum allowed index exceeded");
          return e3;
        };
      }, 21473: function(e2) {
        e2.exports = "undefined" != typeof navigator && String(navigator.userAgent) || "";
      }, 65190: function(e2, t2, o2) {
        var n2, r2, i = o2(37042), a = o2(21473), s = i.process, l = i.Deno, c = s && s.versions || l && l.version, u = c && c.v8;
        u && (r2 = (n2 = u.split("."))[0] > 0 && 4 > n2[0] ? 1 : +(n2[0] + n2[1])), !r2 && a && ((n2 = a.match(/Edge\/(\d+)/)) && 74 > n2[1] || (n2 = a.match(/Chrome\/(\d+)/)) && (r2 = +n2[1])), e2.exports = r2;
      }, 56599: function(e2, t2, o2) {
        var n2 = o2(37042), r2 = o2(90838);
        e2.exports = function(e3, t3) {
          return r2(n2[e3].prototype[t3]);
        };
      }, 64456: function(e2) {
        e2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      }, 50791: function(e2, t2, o2) {
        var n2 = o2(37042), r2 = o2(36999).f, i = o2(45840), a = o2(35065), s = o2(25379), l = o2(58392), c = o2(56930);
        e2.exports = function(e3, t3) {
          var o3, u, d, p, f, h = e3.target, m = e3.global, v = e3.stat;
          if (o3 = m ? n2 : v ? n2[h] || s(h, {}) : (n2[h] || {}).prototype) for (u in t3) {
            if (p = t3[u], d = e3.dontCallGetSet ? (f = r2(o3, u)) && f.value : o3[u], !c(m ? u : h + (v ? "." : "#") + u, e3.forced) && void 0 !== d) {
              if (typeof p == typeof d) continue;
              l(p, d);
            }
            (e3.sham || d && d.sham) && i(p, "sham", true), a(o3, u, p, e3);
          }
        };
      }, 75834: function(e2) {
        e2.exports = function(e3) {
          try {
            return !!e3();
          } catch (e4) {
            return true;
          }
        };
      }, 55101: function(e2, t2, o2) {
        var n2 = o2(32610), r2 = Function.prototype, i = r2.apply, a = r2.call;
        e2.exports = "object" == typeof Reflect && Reflect.apply || (n2 ? a.bind(i) : function() {
          return a.apply(i, arguments);
        });
      }, 40207: function(e2, t2, o2) {
        var n2 = o2(75114), r2 = o2(98061), i = o2(32610), a = n2(n2.bind);
        e2.exports = function(e3, t3) {
          return r2(e3), void 0 === t3 ? e3 : i ? a(e3, t3) : function() {
            return e3.apply(t3, arguments);
          };
        };
      }, 32610: function(e2, t2, o2) {
        var n2 = o2(75834);
        e2.exports = !n2(function() {
          var e3 = (function() {
          }).bind();
          return "function" != typeof e3 || e3.hasOwnProperty("prototype");
        });
      }, 9093: function(e2, t2, o2) {
        var n2 = o2(32610), r2 = Function.prototype.call;
        e2.exports = n2 ? r2.bind(r2) : function() {
          return r2.apply(r2, arguments);
        };
      }, 84521: function(e2, t2, o2) {
        var n2 = o2(13873), r2 = o2(14434), i = Function.prototype, a = n2 && Object.getOwnPropertyDescriptor, s = r2(i, "name"), l = s && "something" === (function() {
        }).name, c = s && (!n2 || n2 && a(i, "name").configurable);
        e2.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: c };
      }, 47448: function(e2, t2, o2) {
        var n2 = o2(90838), r2 = o2(98061);
        e2.exports = function(e3, t3, o3) {
          try {
            return n2(r2(Object.getOwnPropertyDescriptor(e3, t3)[o3]));
          } catch (e4) {
          }
        };
      }, 75114: function(e2, t2, o2) {
        var n2 = o2(6285), r2 = o2(90838);
        e2.exports = function(e3) {
          if ("Function" === n2(e3)) return r2(e3);
        };
      }, 90838: function(e2, t2, o2) {
        var n2 = o2(32610), r2 = Function.prototype, i = r2.call, a = n2 && r2.bind.bind(i, i);
        e2.exports = n2 ? a : function(e3) {
          return function() {
            return i.apply(e3, arguments);
          };
        };
      }, 98945: function(e2, t2, o2) {
        var n2 = o2(37042), r2 = o2(794), i = function(e3) {
          return r2(e3) ? e3 : void 0;
        };
        e2.exports = function(e3, t3) {
          return 2 > arguments.length ? i(n2[e3]) : n2[e3] && n2[e3][t3];
        };
      }, 81058: function(e2, t2, o2) {
        var n2 = o2(8652), r2 = o2(20156), i = o2(8140), a = o2(84922), s = o2(19517)("iterator");
        e2.exports = function(e3) {
          if (!i(e3)) return r2(e3, s) || r2(e3, "@@iterator") || a[n2(e3)];
        };
      }, 27395: function(e2, t2, o2) {
        var n2 = o2(9093), r2 = o2(98061), i = o2(52313), a = o2(98418), s = o2(81058), l = TypeError;
        e2.exports = function(e3, t3) {
          var o3 = 2 > arguments.length ? s(e3) : t3;
          if (r2(o3)) return i(n2(o3, e3));
          throw l(a(e3) + " is not iterable");
        };
      }, 6693: function(e2, t2, o2) {
        var n2 = o2(90838), r2 = o2(36222), i = o2(794), a = o2(6285), s = o2(63046), l = n2([].push);
        e2.exports = function(e3) {
          if (i(e3)) return e3;
          if (r2(e3)) {
            for (var t3 = e3.length, o3 = [], n3 = 0; t3 > n3; n3++) {
              var c = e3[n3];
              "string" == typeof c ? l(o3, c) : "number" != typeof c && "Number" != a(c) && "String" != a(c) || l(o3, s(c));
            }
            var u = o3.length, d = true;
            return function(e4, t4) {
              if (d) return d = false, t4;
              if (r2(this)) return t4;
              for (var n4 = 0; u > n4; n4++) if (o3[n4] === e4) return t4;
            };
          }
        };
      }, 20156: function(e2, t2, o2) {
        var n2 = o2(98061), r2 = o2(8140);
        e2.exports = function(e3, t3) {
          var o3 = e3[t3];
          return r2(o3) ? void 0 : n2(o3);
        };
      }, 37042: function(e2, t2, o2) {
        var n2 = function(e3) {
          return e3 && e3.Math == Math && e3;
        };
        e2.exports = n2("object" == typeof globalThis && globalThis) || n2("object" == typeof window && window) || n2("object" == typeof self && self) || n2("object" == typeof o2.g && o2.g) || /* @__PURE__ */ function() {
          return this;
        }() || Function("return this")();
      }, 14434: function(e2, t2, o2) {
        var n2 = o2(90838), r2 = o2(68488), i = n2({}.hasOwnProperty);
        e2.exports = Object.hasOwn || function(e3, t3) {
          return i(r2(e3), t3);
        };
      }, 48889: function(e2) {
        e2.exports = {};
      }, 36249: function(e2, t2, o2) {
        var n2 = o2(98945);
        e2.exports = n2("document", "documentElement");
      }, 12816: function(e2, t2, o2) {
        var n2 = o2(13873), r2 = o2(75834), i = o2(15192);
        e2.exports = !n2 && !r2(function() {
          return 7 != Object.defineProperty(i("div"), "a", { get: function() {
            return 7;
          } }).a;
        });
      }, 25049: function(e2, t2, o2) {
        var n2 = o2(90838), r2 = o2(75834), i = o2(6285), a = Object, s = n2("".split);
        e2.exports = r2(function() {
          return !a("z").propertyIsEnumerable(0);
        }) ? function(e3) {
          return "String" == i(e3) ? s(e3, "") : a(e3);
        } : a;
      }, 92355: function(e2, t2, o2) {
        var n2 = o2(90838), r2 = o2(794), i = o2(45752), a = n2(Function.toString);
        r2(i.inspectSource) || (i.inspectSource = function(e3) {
          return a(e3);
        }), e2.exports = i.inspectSource;
      }, 56113: function(e2, t2, o2) {
        var n2, r2, i, a = o2(95473), s = o2(37042), l = o2(8148), c = o2(45840), u = o2(14434), d = o2(45752), p = o2(85475), f = o2(48889), h = "Object already initialized", m = s.TypeError;
        if (a || d.state) {
          var v = d.state || (d.state = new s.WeakMap());
          v.get = v.get, v.has = v.has, v.set = v.set, n2 = function(e3, t3) {
            if (v.has(e3)) throw m(h);
            return t3.facade = e3, v.set(e3, t3), t3;
          }, r2 = function(e3) {
            return v.get(e3) || {};
          }, i = function(e3) {
            return v.has(e3);
          };
        } else {
          var g = p("state");
          f[g] = true, n2 = function(e3, t3) {
            if (u(e3, g)) throw m(h);
            return t3.facade = e3, c(e3, g, t3), t3;
          }, r2 = function(e3) {
            return u(e3, g) ? e3[g] : {};
          }, i = function(e3) {
            return u(e3, g);
          };
        }
        e2.exports = { set: n2, get: r2, has: i, enforce: function(e3) {
          return i(e3) ? r2(e3) : n2(e3, {});
        }, getterFor: function(e3) {
          return function(t3) {
            var o3;
            if (!l(t3) || (o3 = r2(t3)).type !== e3) throw m("Incompatible receiver, " + e3 + " required");
            return o3;
          };
        } };
      }, 84997: function(e2, t2, o2) {
        var n2 = o2(19517), r2 = o2(84922), i = n2("iterator"), a = Array.prototype;
        e2.exports = function(e3) {
          return void 0 !== e3 && (r2.Array === e3 || a[i] === e3);
        };
      }, 36222: function(e2, t2, o2) {
        var n2 = o2(6285);
        e2.exports = Array.isArray || function(e3) {
          return "Array" == n2(e3);
        };
      }, 794: function(e2, t2, o2) {
        var n2 = o2(12062), r2 = n2.all;
        e2.exports = n2.IS_HTMLDDA ? function(e3) {
          return "function" == typeof e3 || e3 === r2;
        } : function(e3) {
          return "function" == typeof e3;
        };
      }, 15333: function(e2, t2, o2) {
        var n2 = o2(90838), r2 = o2(75834), i = o2(794), a = o2(8652), s = o2(98945), l = o2(92355), c = function() {
        }, u = [], d = s("Reflect", "construct"), p = /^\s*(?:class|function)\b/, f = n2(p.exec), h = !p.exec(c), m = function(e3) {
          if (!i(e3)) return false;
          try {
            return d(c, u, e3), true;
          } catch (e4) {
            return false;
          }
        }, v = function(e3) {
          if (!i(e3)) return false;
          switch (a(e3)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return false;
          }
          try {
            return h || !!f(p, l(e3));
          } catch (e4) {
            return true;
          }
        };
        v.sham = true, e2.exports = !d || r2(function() {
          var e3;
          return m(m.call) || !m(Object) || !m(function() {
            e3 = true;
          }) || e3;
        }) ? v : m;
      }, 56930: function(e2, t2, o2) {
        var n2 = o2(75834), r2 = o2(794), i = /#|\.prototype\./, a = function(e3, t3) {
          var o3 = l[s(e3)];
          return o3 == u || o3 != c && (r2(t3) ? n2(t3) : !!t3);
        }, s = a.normalize = function(e3) {
          return String(e3).replace(i, ".").toLowerCase();
        }, l = a.data = {}, c = a.NATIVE = "N", u = a.POLYFILL = "P";
        e2.exports = a;
      }, 8140: function(e2) {
        e2.exports = function(e3) {
          return null == e3;
        };
      }, 8148: function(e2, t2, o2) {
        var n2 = o2(794), r2 = o2(12062), i = r2.all;
        e2.exports = r2.IS_HTMLDDA ? function(e3) {
          return "object" == typeof e3 ? null !== e3 : n2(e3) || e3 === i;
        } : function(e3) {
          return "object" == typeof e3 ? null !== e3 : n2(e3);
        };
      }, 70852: function(e2) {
        e2.exports = false;
      }, 88253: function(e2, t2, o2) {
        var n2 = o2(98945), r2 = o2(794), i = o2(54671), a = o2(57982), s = Object;
        e2.exports = a ? function(e3) {
          return "symbol" == typeof e3;
        } : function(e3) {
          var t3 = n2("Symbol");
          return r2(t3) && i(t3.prototype, s(e3));
        };
      }, 11274: function(e2, t2, o2) {
        var n2 = o2(9093), r2 = o2(52313), i = o2(20156);
        e2.exports = function(e3, t3, o3) {
          var a, s;
          r2(e3);
          try {
            if (!(a = i(e3, "return"))) {
              if ("throw" === t3) throw o3;
              return o3;
            }
            a = n2(a, e3);
          } catch (e4) {
            s = true, a = e4;
          }
          if ("throw" === t3) throw o3;
          if (s) throw a;
          return r2(a), o3;
        };
      }, 60928: function(e2, t2, o2) {
        var n2 = o2(77831).IteratorPrototype, r2 = o2(93503), i = o2(32500), a = o2(44532), s = o2(84922), l = function() {
          return this;
        };
        e2.exports = function(e3, t3, o3, c) {
          var u = t3 + " Iterator";
          return e3.prototype = r2(n2, { next: i(+!c, o3) }), a(e3, u, false, true), s[u] = l, e3;
        };
      }, 13759: function(e2, t2, o2) {
        var n2 = o2(50791), r2 = o2(9093), i = o2(70852), a = o2(84521), s = o2(794), l = o2(60928), c = o2(1074), u = o2(482), d = o2(44532), p = o2(45840), f = o2(35065), h = o2(19517), m = o2(84922), v = o2(77831), g = a.PROPER, y = a.CONFIGURABLE, _ = v.IteratorPrototype, b = v.BUGGY_SAFARI_ITERATORS, w = h("iterator"), S = "keys", C = "values", j = "entries", E = function() {
          return this;
        };
        e2.exports = function(e3, t3, o3, a2, h2, v2, x) {
          l(o3, t3, a2);
          var k, T, I, P = function(e4) {
            if (e4 === h2 && A) return A;
            if (!b && e4 in O) return O[e4];
            switch (e4) {
              case S:
              case C:
              case j:
                return function() {
                  return new o3(this, e4);
                };
            }
            return function() {
              return new o3(this);
            };
          }, M = t3 + " Iterator", D = false, O = e3.prototype, z = O[w] || O["@@iterator"] || h2 && O[h2], A = !b && z || P(h2), L = "Array" == t3 && O.entries || z;
          if (L && (k = c(L.call(new e3()))) !== Object.prototype && k.next && (i || c(k) === _ || (u ? u(k, _) : s(k[w]) || f(k, w, E)), d(k, M, true, true), i && (m[M] = E)), g && h2 == C && z && z.name !== C && (!i && y ? p(O, "name", C) : (D = true, A = function() {
            return r2(z, this);
          })), h2) if (T = { values: P(C), keys: v2 ? A : P(S), entries: P(j) }, x) for (I in T) (b || D || !(I in O)) && f(O, I, T[I]);
          else n2({ target: t3, proto: true, forced: b || D }, T);
          return i && !x || O[w] === A || f(O, w, A, { name: h2 }), m[t3] = A, T;
        };
      }, 77831: function(e2, t2, o2) {
        var n2, r2, i, a = o2(75834), s = o2(794), l = o2(8148), c = o2(93503), u = o2(1074), d = o2(35065), p = o2(19517), f = o2(70852), h = p("iterator"), m = false;
        [].keys && ("next" in (i = [].keys()) ? (r2 = u(u(i))) !== Object.prototype && (n2 = r2) : m = true), !l(n2) || a(function() {
          var e3 = {};
          return n2[h].call(e3) !== e3;
        }) ? n2 = {} : f && (n2 = c(n2)), s(n2[h]) || d(n2, h, function() {
          return this;
        }), e2.exports = { IteratorPrototype: n2, BUGGY_SAFARI_ITERATORS: m };
      }, 84922: function(e2) {
        e2.exports = {};
      }, 15050: function(e2, t2, o2) {
        var n2 = o2(24431);
        e2.exports = function(e3) {
          return n2(e3.length);
        };
      }, 40846: function(e2, t2, o2) {
        var n2 = o2(90838), r2 = o2(75834), i = o2(794), a = o2(14434), s = o2(13873), l = o2(84521).CONFIGURABLE, c = o2(92355), u = o2(56113), d = u.enforce, p = u.get, f = String, h = Object.defineProperty, m = n2("".slice), v = n2("".replace), g = n2([].join), y = s && !r2(function() {
          return 8 !== h(function() {
          }, "length", { value: 8 }).length;
        }), _ = String(String).split("String"), b = e2.exports = function(e3, t3, o3) {
          "Symbol(" === m(f(t3), 0, 7) && (t3 = "[" + v(f(t3), /^Symbol\(([^)]*)\)/, "$1") + "]"), o3 && o3.getter && (t3 = "get " + t3), o3 && o3.setter && (t3 = "set " + t3), (!a(e3, "name") || l && e3.name !== t3) && (s ? h(e3, "name", { value: t3, configurable: true }) : e3.name = t3), y && o3 && a(o3, "arity") && e3.length !== o3.arity && h(e3, "length", { value: o3.arity });
          try {
            o3 && a(o3, "constructor") && o3.constructor ? s && h(e3, "prototype", { writable: false }) : e3.prototype && (e3.prototype = void 0);
          } catch (e4) {
          }
          var n3 = d(e3);
          return a(n3, "source") || (n3.source = g(_, "string" == typeof t3 ? t3 : "")), e3;
        };
        Function.prototype.toString = b(function() {
          return i(this) && p(this).source || c(this);
        }, "toString");
      }, 43932: function(e2) {
        var t2 = Math.ceil, o2 = Math.floor;
        e2.exports = Math.trunc || function(e3) {
          var n2 = +e3;
          return (n2 > 0 ? o2 : t2)(n2);
        };
      }, 93503: function(e2, t2, o2) {
        var n2, r2 = o2(52313), i = o2(5770), a = o2(64456), s = o2(48889), l = o2(36249), c = o2(15192), u = o2(85475)("IE_PROTO"), d = function() {
        }, p = function(e3) {
          return "<script>" + e3 + "<\/script>";
        }, f = function(e3) {
          e3.write(p("")), e3.close();
          var t3 = e3.parentWindow.Object;
          return e3 = null, t3;
        }, h = function() {
          try {
            n2 = new ActiveXObject("htmlfile");
          } catch (e4) {
          }
          var e3, t3;
          h = "undefined" != typeof document ? document.domain && n2 ? f(n2) : ((t3 = c("iframe")).style.display = "none", l.appendChild(t3), t3.src = String("javascript:"), (e3 = t3.contentWindow.document).open(), e3.write(p("document.F=Object")), e3.close(), e3.F) : f(n2);
          for (var o3 = a.length; o3--; ) delete h.prototype[a[o3]];
          return h();
        };
        s[u] = true, e2.exports = Object.create || function(e3, t3) {
          var o3;
          return null !== e3 ? (d.prototype = r2(e3), o3 = new d(), d.prototype = null, o3[u] = e3) : o3 = h(), void 0 === t3 ? o3 : i.f(o3, t3);
        };
      }, 5770: function(e2, t2, o2) {
        var n2 = o2(13873), r2 = o2(63142), i = o2(73252), a = o2(52313), s = o2(98651), l = o2(3385);
        t2.f = n2 && !r2 ? Object.defineProperties : function(e3, t3) {
          a(e3);
          for (var o3, n3 = s(t3), r3 = l(t3), c = r3.length, u = 0; c > u; ) i.f(e3, o3 = r3[u++], n3[o3]);
          return e3;
        };
      }, 73252: function(e2, t2, o2) {
        var n2 = o2(13873), r2 = o2(12816), i = o2(63142), a = o2(52313), s = o2(43836), l = TypeError, c = Object.defineProperty, u = Object.getOwnPropertyDescriptor;
        t2.f = n2 ? i ? function(e3, t3, o3) {
          if (a(e3), t3 = s(t3), a(o3), "function" == typeof e3 && "prototype" === t3 && "value" in o3 && "writable" in o3 && !o3.writable) {
            var n3 = u(e3, t3);
            n3 && n3.writable && (e3[t3] = o3.value, o3 = { configurable: "configurable" in o3 ? o3.configurable : n3.configurable, enumerable: "enumerable" in o3 ? o3.enumerable : n3.enumerable, writable: false });
          }
          return c(e3, t3, o3);
        } : c : function(e3, t3, o3) {
          if (a(e3), t3 = s(t3), a(o3), r2) try {
            return c(e3, t3, o3);
          } catch (e4) {
          }
          if ("get" in o3 || "set" in o3) throw l("Accessors not supported");
          return "value" in o3 && (e3[t3] = o3.value), e3;
        };
      }, 36999: function(e2, t2, o2) {
        var n2 = o2(13873), r2 = o2(9093), i = o2(33244), a = o2(32500), s = o2(98651), l = o2(43836), c = o2(14434), u = o2(12816), d = Object.getOwnPropertyDescriptor;
        t2.f = n2 ? d : function(e3, t3) {
          if (e3 = s(e3), t3 = l(t3), u) try {
            return d(e3, t3);
          } catch (e4) {
          }
          if (c(e3, t3)) return a(!r2(i.f, e3, t3), e3[t3]);
        };
      }, 53305: function(e2, t2, o2) {
        var n2 = o2(6285), r2 = o2(98651), i = o2(7792).f, a = o2(57652), s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e2.exports.f = function(e3) {
          return s && "Window" == n2(e3) ? function(e4) {
            try {
              return i(e4);
            } catch (e5) {
              return a(s);
            }
          }(e3) : i(r2(e3));
        };
      }, 7792: function(e2, t2, o2) {
        var n2 = o2(84729), r2 = o2(64456).concat("length", "prototype");
        t2.f = Object.getOwnPropertyNames || function(e3) {
          return n2(e3, r2);
        };
      }, 23953: function(e2, t2) {
        t2.f = Object.getOwnPropertySymbols;
      }, 1074: function(e2, t2, o2) {
        var n2 = o2(14434), r2 = o2(794), i = o2(68488), a = o2(85475), s = o2(27259), l = a("IE_PROTO"), c = Object, u = c.prototype;
        e2.exports = s ? c.getPrototypeOf : function(e3) {
          var t3 = i(e3);
          if (n2(t3, l)) return t3[l];
          var o3 = t3.constructor;
          return r2(o3) && t3 instanceof o3 ? o3.prototype : t3 instanceof c ? u : null;
        };
      }, 54671: function(e2, t2, o2) {
        var n2 = o2(90838);
        e2.exports = n2({}.isPrototypeOf);
      }, 84729: function(e2, t2, o2) {
        var n2 = o2(90838), r2 = o2(14434), i = o2(98651), a = o2(79327).indexOf, s = o2(48889), l = n2([].push);
        e2.exports = function(e3, t3) {
          var o3, n3 = i(e3), c = 0, u = [];
          for (o3 in n3) !r2(s, o3) && r2(n3, o3) && l(u, o3);
          for (; t3.length > c; ) r2(n3, o3 = t3[c++]) && (~a(u, o3) || l(u, o3));
          return u;
        };
      }, 3385: function(e2, t2, o2) {
        var n2 = o2(84729), r2 = o2(64456);
        e2.exports = Object.keys || function(e3) {
          return n2(e3, r2);
        };
      }, 33244: function(e2, t2) {
        var o2 = {}.propertyIsEnumerable, n2 = Object.getOwnPropertyDescriptor, r2 = n2 && !o2.call({ 1: 2 }, 1);
        t2.f = r2 ? function(e3) {
          var t3 = n2(this, e3);
          return !!t3 && t3.enumerable;
        } : o2;
      }, 482: function(e2, t2, o2) {
        var n2 = o2(47448), r2 = o2(52313), i = o2(75839);
        e2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var e3, t3 = false, o3 = {};
          try {
            (e3 = n2(Object.prototype, "__proto__", "set"))(o3, []), t3 = o3 instanceof Array;
          } catch (e4) {
          }
          return function(o4, n3) {
            return r2(o4), i(n3), t3 ? e3(o4, n3) : o4.__proto__ = n3, o4;
          };
        }() : void 0);
      }, 57555: function(e2, t2, o2) {
        var n2 = o2(6424), r2 = o2(8652);
        e2.exports = n2 ? {}.toString : function() {
          return "[object " + r2(this) + "]";
        };
      }, 82472: function(e2, t2, o2) {
        var n2 = o2(9093), r2 = o2(794), i = o2(8148), a = TypeError;
        e2.exports = function(e3, t3) {
          var o3, s;
          if ("string" === t3 && r2(o3 = e3.toString) && !i(s = n2(o3, e3))) return s;
          if (r2(o3 = e3.valueOf) && !i(s = n2(o3, e3))) return s;
          if ("string" !== t3 && r2(o3 = e3.toString) && !i(s = n2(o3, e3))) return s;
          throw a("Can't convert object to primitive value");
        };
      }, 86671: function(e2, t2, o2) {
        var n2 = o2(98945), r2 = o2(90838), i = o2(7792), a = o2(23953), s = o2(52313), l = r2([].concat);
        e2.exports = n2("Reflect", "ownKeys") || function(e3) {
          var t3 = i.f(s(e3)), o3 = a.f;
          return o3 ? l(t3, o3(e3)) : t3;
        };
      }, 31116: function(e2, t2, o2) {
        var n2 = o2(37042);
        e2.exports = n2;
      }, 60265: function(e2, t2, o2) {
        var n2 = o2(8140), r2 = TypeError;
        e2.exports = function(e3) {
          if (n2(e3)) throw r2("Can't call method on " + e3);
          return e3;
        };
      }, 44532: function(e2, t2, o2) {
        var n2 = o2(73252).f, r2 = o2(14434), i = o2(19517)("toStringTag");
        e2.exports = function(e3, t3, o3) {
          e3 && !o3 && (e3 = e3.prototype), e3 && !r2(e3, i) && n2(e3, i, { configurable: true, value: t3 });
        };
      }, 85475: function(e2, t2, o2) {
        var n2 = o2(95138), r2 = o2(15257), i = n2("keys");
        e2.exports = function(e3) {
          return i[e3] || (i[e3] = r2(e3));
        };
      }, 45752: function(e2, t2, o2) {
        var n2 = o2(37042), r2 = o2(25379), i = "__core-js_shared__", a = n2[i] || r2(i, {});
        e2.exports = a;
      }, 95138: function(e2, t2, o2) {
        var n2 = o2(70852), r2 = o2(45752);
        (e2.exports = function(e3, t3) {
          return r2[e3] || (r2[e3] = void 0 !== t3 ? t3 : {});
        })("versions", []).push({ version: "3.28.0", mode: n2 ? "pure" : "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE", source: "https://github.com/zloirock/core-js" });
      }, 41397: function(e2, t2, o2) {
        var n2 = o2(90838), r2 = o2(27876), i = o2(63046), a = o2(60265), s = n2("".charAt), l = n2("".charCodeAt), c = n2("".slice), u = function(e3) {
          return function(t3, o3) {
            var n3, u2, d = i(a(t3)), p = r2(o3), f = d.length;
            return 0 > p || p >= f ? e3 ? "" : void 0 : 55296 > (n3 = l(d, p)) || n3 > 56319 || p + 1 === f || 56320 > (u2 = l(d, p + 1)) || u2 > 57343 ? e3 ? s(d, p) : n3 : e3 ? c(d, p, p + 2) : u2 - 56320 + (n3 - 55296 << 10) + 65536;
          };
        };
        e2.exports = { codeAt: u(false), charAt: u(true) };
      }, 73800: function(e2, t2, o2) {
        var n2 = o2(65190), r2 = o2(75834);
        e2.exports = !!Object.getOwnPropertySymbols && !r2(function() {
          var e3 = Symbol();
          return !String(e3) || !(Object(e3) instanceof Symbol) || !Symbol.sham && n2 && 41 > n2;
        });
      }, 13829: function(e2, t2, o2) {
        var n2 = o2(9093), r2 = o2(98945), i = o2(19517), a = o2(35065);
        e2.exports = function() {
          var e3 = r2("Symbol"), t3 = e3 && e3.prototype, o3 = t3 && t3.valueOf, s = i("toPrimitive");
          t3 && !t3[s] && a(t3, s, function(e4) {
            return n2(o3, this);
          }, { arity: 1 });
        };
      }, 31948: function(e2, t2, o2) {
        var n2 = o2(73800);
        e2.exports = n2 && !!Symbol.for && !!Symbol.keyFor;
      }, 10586: function(e2, t2, o2) {
        var n2 = o2(27876), r2 = Math.max, i = Math.min;
        e2.exports = function(e3, t3) {
          var o3 = n2(e3);
          return 0 > o3 ? r2(o3 + t3, 0) : i(o3, t3);
        };
      }, 98651: function(e2, t2, o2) {
        var n2 = o2(25049), r2 = o2(60265);
        e2.exports = function(e3) {
          return n2(r2(e3));
        };
      }, 27876: function(e2, t2, o2) {
        var n2 = o2(43932);
        e2.exports = function(e3) {
          var t3 = +e3;
          return t3 != t3 || 0 === t3 ? 0 : n2(t3);
        };
      }, 24431: function(e2, t2, o2) {
        var n2 = o2(27876), r2 = Math.min;
        e2.exports = function(e3) {
          return e3 > 0 ? r2(n2(e3), 9007199254740991) : 0;
        };
      }, 68488: function(e2, t2, o2) {
        var n2 = o2(60265), r2 = Object;
        e2.exports = function(e3) {
          return r2(n2(e3));
        };
      }, 11261: function(e2, t2, o2) {
        var n2 = o2(9093), r2 = o2(8148), i = o2(88253), a = o2(20156), s = o2(82472), l = o2(19517), c = TypeError, u = l("toPrimitive");
        e2.exports = function(e3, t3) {
          if (!r2(e3) || i(e3)) return e3;
          var o3, l2 = a(e3, u);
          if (l2) {
            if (void 0 === t3 && (t3 = "default"), o3 = n2(l2, e3, t3), !r2(o3) || i(o3)) return o3;
            throw c("Can't convert object to primitive value");
          }
          return void 0 === t3 && (t3 = "number"), s(e3, t3);
        };
      }, 43836: function(e2, t2, o2) {
        var n2 = o2(11261), r2 = o2(88253);
        e2.exports = function(e3) {
          var t3 = n2(e3, "string");
          return r2(t3) ? t3 : t3 + "";
        };
      }, 6424: function(e2, t2, o2) {
        var n2 = {};
        n2[o2(19517)("toStringTag")] = "z", e2.exports = "[object z]" === String(n2);
      }, 63046: function(e2, t2, o2) {
        var n2 = o2(8652), r2 = String;
        e2.exports = function(e3) {
          if ("Symbol" === n2(e3)) throw TypeError("Cannot convert a Symbol value to a string");
          return r2(e3);
        };
      }, 98418: function(e2) {
        var t2 = String;
        e2.exports = function(e3) {
          try {
            return t2(e3);
          } catch (e4) {
            return "Object";
          }
        };
      }, 15257: function(e2, t2, o2) {
        var n2 = o2(90838), r2 = 0, i = Math.random(), a = n2(1 .toString);
        e2.exports = function(e3) {
          return "Symbol(" + (void 0 === e3 ? "" : e3) + ")_" + a(++r2 + i, 36);
        };
      }, 57982: function(e2, t2, o2) {
        var n2 = o2(73800);
        e2.exports = n2 && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      }, 63142: function(e2, t2, o2) {
        var n2 = o2(13873), r2 = o2(75834);
        e2.exports = n2 && r2(function() {
          return 42 != Object.defineProperty(function() {
          }, "prototype", { value: 42, writable: false }).prototype;
        });
      }, 95473: function(e2, t2, o2) {
        var n2 = o2(37042), r2 = o2(794), i = n2.WeakMap;
        e2.exports = r2(i) && /native code/.test(String(i));
      }, 89633: function(e2, t2, o2) {
        var n2 = o2(31116), r2 = o2(14434), i = o2(96767), a = o2(73252).f;
        e2.exports = function(e3) {
          var t3 = n2.Symbol || (n2.Symbol = {});
          r2(t3, e3) || a(t3, e3, { value: i.f(e3) });
        };
      }, 96767: function(e2, t2, o2) {
        var n2 = o2(19517);
        t2.f = n2;
      }, 19517: function(e2, t2, o2) {
        var n2 = o2(37042), r2 = o2(95138), i = o2(14434), a = o2(15257), s = o2(73800), l = o2(57982), c = n2.Symbol, u = r2("wks"), d = l ? c.for || c : c && c.withoutSetter || a;
        e2.exports = function(e3) {
          return i(u, e3) || (u[e3] = s && i(c, e3) ? c[e3] : d("Symbol." + e3)), u[e3];
        };
      }, 54166: function(e2, t2, o2) {
        var n2 = o2(50791), r2 = o2(75834), i = o2(36222), a = o2(8148), s = o2(68488), l = o2(15050), c = o2(39505), u = o2(89476), d = o2(6429), p = o2(63833), f = o2(19517), h = o2(65190), m = f("isConcatSpreadable"), v = h >= 51 || !r2(function() {
          var e3 = [];
          return e3[m] = false, e3.concat()[0] !== e3;
        }), g = function(e3) {
          if (!a(e3)) return false;
          var t3 = e3[m];
          return void 0 !== t3 ? !!t3 : i(e3);
        };
        n2({ target: "Array", proto: true, arity: 1, forced: !v || !p("concat") }, { concat: function(e3) {
          var t3, o3, n3, r3, i2, a2 = s(this), p2 = d(a2, 0), f2 = 0;
          for (t3 = -1, n3 = arguments.length; n3 > t3; t3++) if (g(i2 = -1 === t3 ? a2 : arguments[t3])) for (r3 = l(i2), c(f2 + r3), o3 = 0; r3 > o3; o3++, f2++) o3 in i2 && u(p2, f2, i2[o3]);
          else c(f2 + 1), u(p2, f2++, i2);
          return p2.length = f2, p2;
        } });
      }, 22513: function(e2, t2, o2) {
        var n2 = o2(50791), r2 = o2(56881).findIndex, i = o2(15179), a = "findIndex", s = true;
        a in [] && Array(1).findIndex(function() {
          s = false;
        }), n2({ target: "Array", proto: true, forced: s }, { findIndex: function(e3) {
          return r2(this, e3, arguments.length > 1 ? arguments[1] : void 0);
        } }), i(a);
      }, 70057: function(e2, t2, o2) {
        var n2 = o2(50791), r2 = o2(92707);
        n2({ target: "Array", stat: true, forced: !o2(7581)(function(e3) {
          Array.from(e3);
        }) }, { from: r2 });
      }, 67507: function(e2, t2, o2) {
        var n2 = o2(50791), r2 = o2(98945), i = o2(55101), a = o2(9093), s = o2(90838), l = o2(75834), c = o2(794), u = o2(88253), d = o2(54832), p = o2(6693), f = o2(73800), h = String, m = r2("JSON", "stringify"), v = s(/./.exec), g = s("".charAt), y = s("".charCodeAt), _ = s("".replace), b = s(1 .toString), w = /[\uD800-\uDFFF]/g, S = /^[\uD800-\uDBFF]$/, C = /^[\uDC00-\uDFFF]$/, j = !f || l(function() {
          var e3 = r2("Symbol")();
          return "[null]" != m([e3]) || "{}" != m({ a: e3 }) || "{}" != m(Object(e3));
        }), E = l(function() {
          return '"\\udf06\\ud834"' !== m("\uDF06\uD834") || '"\\udead"' !== m("\uDEAD");
        }), x = function(e3, t3) {
          var o3 = d(arguments), n3 = p(t3);
          if (c(n3) || void 0 !== e3 && !u(e3)) return o3[1] = function(e4, t4) {
            if (c(n3) && (t4 = a(n3, this, h(e4), t4)), !u(t4)) return t4;
          }, i(m, null, o3);
        }, k = function(e3, t3, o3) {
          var n3 = g(o3, t3 - 1), r3 = g(o3, t3 + 1);
          return v(S, e3) && !v(C, r3) || v(C, e3) && !v(S, n3) ? "\\u" + b(y(e3, 0), 16) : e3;
        };
        m && n2({ target: "JSON", stat: true, arity: 3, forced: j || E }, { stringify: function(e3, t3, o3) {
          var n3 = d(arguments), r3 = i(j ? x : m, null, n3);
          return E && "string" == typeof r3 ? _(r3, w, k) : r3;
        } });
      }, 90217: function(e2, t2, o2) {
        var n2 = o2(37042);
        o2(44532)(n2.JSON, "JSON", true);
      }, 73477: function(e2, t2, o2) {
        o2(44532)(Math, "Math", true);
      }, 30165: function(e2, t2, o2) {
        var n2 = o2(50791), r2 = o2(73800), i = o2(75834), a = o2(23953), s = o2(68488);
        n2({ target: "Object", stat: true, forced: !r2 || i(function() {
          a.f(1);
        }) }, { getOwnPropertySymbols: function(e3) {
          var t3 = a.f;
          return t3 ? t3(s(e3)) : [];
        } });
      }, 32044: function(e2, t2, o2) {
        var n2 = o2(6424), r2 = o2(35065), i = o2(57555);
        n2 || r2(Object.prototype, "toString", i, { unsafe: true });
      }, 93697: function(e2, t2, o2) {
        var n2 = o2(50791), r2 = o2(37042), i = o2(44532);
        n2({ global: true }, { Reflect: {} }), i(r2.Reflect, "Reflect", true);
      }, 52867: function(e2, t2, o2) {
        var n2 = o2(41397).charAt, r2 = o2(63046), i = o2(56113), a = o2(13759), s = o2(17427), l = "String Iterator", c = i.set, u = i.getterFor(l);
        a(String, "String", function(e3) {
          c(this, { type: l, string: r2(e3), index: 0 });
        }, function() {
          var e3, t3 = u(this), o3 = t3.string, r3 = t3.index;
          return o3.length > r3 ? (e3 = n2(o3, r3), t3.index += e3.length, s(e3, false)) : s(void 0, true);
        });
      }, 28424: function(e2, t2, o2) {
        o2(89633)("asyncIterator");
      }, 9656: function(e2, t2, o2) {
        var n2 = o2(50791), r2 = o2(37042), i = o2(9093), a = o2(90838), s = o2(70852), l = o2(13873), c = o2(73800), u = o2(75834), d = o2(14434), p = o2(54671), f = o2(52313), h = o2(98651), m = o2(43836), v = o2(63046), g = o2(32500), y = o2(93503), _ = o2(3385), b = o2(7792), w = o2(53305), S = o2(23953), C = o2(36999), j = o2(73252), E = o2(5770), x = o2(33244), k = o2(35065), T = o2(97548), I = o2(95138), P = o2(85475), M = o2(48889), D = o2(15257), O = o2(19517), z = o2(96767), A = o2(89633), L = o2(13829), N = o2(44532), R = o2(56113), B = o2(56881).forEach, q = P("hidden"), F = "Symbol", H = R.set, V = R.getterFor(F), U = Object.prototype, W = r2.Symbol, Y = W && W.prototype, G = r2.TypeError, K = r2.QObject, X = C.f, J = j.f, $ = w.f, Z = x.f, Q = a([].push), ee = I("symbols"), te = I("op-symbols"), oe = I("wks"), ne = !K || !K.prototype || !K.prototype.findChild, re = l && u(function() {
          return 7 != y(J({}, "a", { get: function() {
            return J(this, "a", { value: 7 }).a;
          } })).a;
        }) ? function(e3, t3, o3) {
          var n3 = X(U, t3);
          n3 && delete U[t3], J(e3, t3, o3), n3 && e3 !== U && J(U, t3, n3);
        } : J, ie = function(e3, t3) {
          var o3 = ee[e3] = y(Y);
          return H(o3, { type: F, tag: e3, description: t3 }), l || (o3.description = t3), o3;
        }, ae = function(e3, t3, o3) {
          e3 === U && ae(te, t3, o3), f(e3);
          var n3 = m(t3);
          return f(o3), d(ee, n3) ? (o3.enumerable ? (d(e3, q) && e3[q][n3] && (e3[q][n3] = false), o3 = y(o3, { enumerable: g(0, false) })) : (d(e3, q) || J(e3, q, g(1, {})), e3[q][n3] = true), re(e3, n3, o3)) : J(e3, n3, o3);
        }, se = function(e3, t3) {
          f(e3);
          var o3 = h(t3), n3 = _(o3).concat(de(o3));
          return B(n3, function(t4) {
            l && !i(le, o3, t4) || ae(e3, t4, o3[t4]);
          }), e3;
        }, le = function(e3) {
          var t3 = m(e3), o3 = i(Z, this, t3);
          return !(this === U && d(ee, t3) && !d(te, t3)) && (!(o3 || !d(this, t3) || !d(ee, t3) || d(this, q) && this[q][t3]) || o3);
        }, ce = function(e3, t3) {
          var o3 = h(e3), n3 = m(t3);
          if (o3 !== U || !d(ee, n3) || d(te, n3)) {
            var r3 = X(o3, n3);
            return !r3 || !d(ee, n3) || d(o3, q) && o3[q][n3] || (r3.enumerable = true), r3;
          }
        }, ue = function(e3) {
          var t3 = $(h(e3)), o3 = [];
          return B(t3, function(e4) {
            d(ee, e4) || d(M, e4) || Q(o3, e4);
          }), o3;
        }, de = function(e3) {
          var t3 = e3 === U, o3 = $(t3 ? te : h(e3)), n3 = [];
          return B(o3, function(e4) {
            !d(ee, e4) || t3 && !d(U, e4) || Q(n3, ee[e4]);
          }), n3;
        };
        c || (W = function() {
          if (p(Y, this)) throw G("Symbol is not a constructor");
          var e3 = arguments.length && void 0 !== arguments[0] ? v(arguments[0]) : void 0, t3 = D(e3), o3 = function(e4) {
            this === U && i(o3, te, e4), d(this, q) && d(this[q], t3) && (this[q][t3] = false), re(this, t3, g(1, e4));
          };
          return l && ne && re(U, t3, { configurable: true, set: o3 }), ie(t3, e3);
        }, k(Y = W.prototype, "toString", function() {
          return V(this).tag;
        }), k(W, "withoutSetter", function(e3) {
          return ie(D(e3), e3);
        }), x.f = le, j.f = ae, E.f = se, C.f = ce, b.f = w.f = ue, S.f = de, z.f = function(e3) {
          return ie(O(e3), e3);
        }, l && (T(Y, "description", { configurable: true, get: function() {
          return V(this).description;
        } }), s || k(U, "propertyIsEnumerable", le, { unsafe: true }))), n2({ global: true, constructor: true, wrap: true, forced: !c, sham: !c }, { Symbol: W }), B(_(oe), function(e3) {
          A(e3);
        }), n2({ target: F, stat: true, forced: !c }, { useSetter: function() {
          ne = true;
        }, useSimple: function() {
          ne = false;
        } }), n2({ target: "Object", stat: true, forced: !c, sham: !l }, { create: function(e3, t3) {
          return void 0 === t3 ? y(e3) : se(y(e3), t3);
        }, defineProperty: ae, defineProperties: se, getOwnPropertyDescriptor: ce }), n2({ target: "Object", stat: true, forced: !c }, { getOwnPropertyNames: ue }), L(), N(W, F), M[q] = true;
      }, 64514: function(e2, t2, o2) {
        var n2 = o2(50791), r2 = o2(13873), i = o2(37042), a = o2(90838), s = o2(14434), l = o2(794), c = o2(54671), u = o2(63046), d = o2(97548), p = o2(58392), f = i.Symbol, h = f && f.prototype;
        if (r2 && l(f) && (!("description" in h) || void 0 !== f().description)) {
          var m = {}, v = function() {
            var e3 = 1 > arguments.length || void 0 === arguments[0] ? void 0 : u(arguments[0]), t3 = c(h, this) ? new f(e3) : void 0 === e3 ? f() : f(e3);
            return "" === e3 && (m[t3] = true), t3;
          };
          p(v, f), v.prototype = h, h.constructor = v;
          var g = "Symbol(test)" == String(f("test")), y = a(h.valueOf), _ = a(h.toString), b = /^Symbol\((.*)\)[^)]+$/, w = a("".replace), S = a("".slice);
          d(h, "description", { configurable: true, get: function() {
            var e3 = y(this);
            if (s(m, e3)) return "";
            var t3 = _(e3), o3 = g ? S(t3, 7, -1) : w(t3, b, "$1");
            return "" === o3 ? void 0 : o3;
          } }), n2({ global: true, constructor: true, forced: true }, { Symbol: v });
        }
      }, 56202: function(e2, t2, o2) {
        var n2 = o2(50791), r2 = o2(98945), i = o2(14434), a = o2(63046), s = o2(95138), l = o2(31948), c = s("string-to-symbol-registry"), u = s("symbol-to-string-registry");
        n2({ target: "Symbol", stat: true, forced: !l }, { for: function(e3) {
          var t3 = a(e3);
          if (i(c, t3)) return c[t3];
          var o3 = r2("Symbol")(t3);
          return c[t3] = o3, u[o3] = t3, o3;
        } });
      }, 30733: function(e2, t2, o2) {
        o2(89633)("hasInstance");
      }, 40327: function(e2, t2, o2) {
        o2(89633)("isConcatSpreadable");
      }, 53639: function(e2, t2, o2) {
        o2(89633)("iterator");
      }, 95661: function(e2, t2, o2) {
        o2(9656), o2(56202), o2(71940), o2(67507), o2(30165);
      }, 71940: function(e2, t2, o2) {
        var n2 = o2(50791), r2 = o2(14434), i = o2(88253), a = o2(98418), s = o2(95138), l = o2(31948), c = s("symbol-to-string-registry");
        n2({ target: "Symbol", stat: true, forced: !l }, { keyFor: function(e3) {
          if (!i(e3)) throw TypeError(a(e3) + " is not a symbol");
          if (r2(c, e3)) return c[e3];
        } });
      }, 7290: function(e2, t2, o2) {
        o2(89633)("matchAll");
      }, 6147: function(e2, t2, o2) {
        o2(89633)("match");
      }, 95122: function(e2, t2, o2) {
        o2(89633)("replace");
      }, 61322: function(e2, t2, o2) {
        o2(89633)("search");
      }, 39605: function(e2, t2, o2) {
        o2(89633)("species");
      }, 49341: function(e2, t2, o2) {
        o2(89633)("split");
      }, 28809: function(e2, t2, o2) {
        var n2 = o2(89633), r2 = o2(13829);
        n2("toPrimitive"), r2();
      }, 82658: function(e2, t2, o2) {
        var n2 = o2(98945), r2 = o2(89633), i = o2(44532);
        r2("toStringTag"), i(n2("Symbol"), "Symbol");
      }, 43967: function(e2, t2, o2) {
        o2(89633)("unscopables");
      }, 690: function(e2, t2, o2) {
        e2.exports = o2(26002).polyfill();
      }, 26002: function(e2, t2, o2) {
        e2.exports = function() {
          function e3(e4) {
            return "function" == typeof e4;
          }
          var t3 = Array.isArray ? Array.isArray : function(e4) {
            return "[object Array]" === Object.prototype.toString.call(e4);
          }, n2 = 0, r2 = void 0, i = void 0, a = function(e4, t4) {
            f[n2] = e4, f[n2 + 1] = t4, 2 === (n2 += 2) && (i ? i(h) : _());
          }, s = "undefined" != typeof window ? window : void 0, l = s || {}, c = l.MutationObserver || l.WebKitMutationObserver, u = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
          function p() {
            var e4 = setTimeout;
            return function() {
              return e4(h, 1);
            };
          }
          var f = new Array(1e3);
          function h() {
            for (var e4 = 0; n2 > e4; e4 += 2) (0, f[e4])(f[e4 + 1]), f[e4] = void 0, f[e4 + 1] = void 0;
            n2 = 0;
          }
          var m, v, g, y, _ = void 0;
          function b(e4, t4) {
            var o3 = this, n3 = new this.constructor(C);
            void 0 === n3[S] && z(n3);
            var r3 = o3._state;
            if (r3) {
              var i2 = arguments[r3 - 1];
              a(function() {
                return D(r3, n3, i2, o3._result);
              });
            } else P(o3, n3, e4, t4);
            return n3;
          }
          function w(e4) {
            if (e4 && "object" == typeof e4 && e4.constructor === this) return e4;
            var t4 = new this(C);
            return x(t4, e4), t4;
          }
          _ = u ? function() {
            return process.nextTick(h);
          } : c ? (v = 0, g = new c(h), y = document.createTextNode(""), g.observe(y, { characterData: true }), function() {
            y.data = v = ++v % 2;
          }) : d ? ((m = new MessageChannel()).port1.onmessage = h, function() {
            return m.port2.postMessage(0);
          }) : void 0 === s ? function() {
            try {
              var e4 = Function("return this")().require("vertx");
              return void 0 !== (r2 = e4.runOnLoop || e4.runOnContext) ? function() {
                r2(h);
              } : p();
            } catch (e5) {
              return p();
            }
          }() : p();
          var S = Math.random().toString(36).substring(2);
          function C() {
          }
          var j = void 0;
          function E(t4, o3, n3) {
            o3.constructor === t4.constructor && n3 === b && o3.constructor.resolve === w ? function(e4, t5) {
              1 === t5._state ? T(e4, t5._result) : 2 === t5._state ? I(e4, t5._result) : P(t5, void 0, function(t6) {
                return x(e4, t6);
              }, function(t6) {
                return I(e4, t6);
              });
            }(t4, o3) : void 0 === n3 ? T(t4, o3) : e3(n3) ? function(e4, t5, o4) {
              a(function(e5) {
                var n4 = false, r3 = function(o5, r4, i2, a2) {
                  try {
                    o5.call(r4, function(o6) {
                      n4 || (n4 = true, t5 !== o6 ? x(e5, o6) : T(e5, o6));
                    }, function(t6) {
                      n4 || (n4 = true, I(e5, t6));
                    });
                  } catch (e6) {
                    return e6;
                  }
                }(o4, t5);
                !n4 && r3 && (n4 = true, I(e5, r3));
              }, e4);
            }(t4, o3, n3) : T(t4, o3);
          }
          function x(e4, t4) {
            if (e4 === t4) I(e4, new TypeError("You cannot resolve a promise with itself"));
            else if (r3 = typeof (n3 = t4), null === n3 || "object" !== r3 && "function" !== r3) T(e4, t4);
            else {
              var o3 = void 0;
              try {
                o3 = t4.then;
              } catch (t5) {
                return void I(e4, t5);
              }
              E(e4, t4, o3);
            }
            var n3, r3;
          }
          function k(e4) {
            e4._onerror && e4._onerror(e4._result), M(e4);
          }
          function T(e4, t4) {
            e4._state === j && (e4._result = t4, e4._state = 1, 0 !== e4._subscribers.length && a(M, e4));
          }
          function I(e4, t4) {
            e4._state === j && (e4._state = 2, e4._result = t4, a(k, e4));
          }
          function P(e4, t4, o3, n3) {
            var r3 = e4._subscribers, i2 = r3.length;
            e4._onerror = null, r3[i2] = t4, r3[i2 + 1] = o3, r3[i2 + 2] = n3, 0 === i2 && e4._state && a(M, e4);
          }
          function M(e4) {
            var t4 = e4._subscribers, o3 = e4._state;
            if (0 !== t4.length) {
              for (var n3 = void 0, r3 = void 0, i2 = e4._result, a2 = 0; t4.length > a2; a2 += 3) r3 = t4[a2 + o3], (n3 = t4[a2]) ? D(o3, n3, r3, i2) : r3(i2);
              e4._subscribers.length = 0;
            }
          }
          function D(t4, o3, n3, r3) {
            var i2 = e3(n3), a2 = void 0, s2 = void 0, l2 = true;
            if (i2) {
              try {
                a2 = n3(r3);
              } catch (e4) {
                l2 = false, s2 = e4;
              }
              if (o3 === a2) return void I(o3, new TypeError("A promises callback cannot return that same promise."));
            } else a2 = r3;
            o3._state !== j || (i2 && l2 ? x(o3, a2) : false === l2 ? I(o3, s2) : 1 === t4 ? T(o3, a2) : 2 === t4 && I(o3, a2));
          }
          var O = 0;
          function z(e4) {
            e4[S] = O++, e4._state = void 0, e4._result = void 0, e4._subscribers = [];
          }
          var A = function() {
            function e4(e5, o3) {
              this._instanceConstructor = e5, this.promise = new e5(C), this.promise[S] || z(this.promise), t3(o3) ? (this.length = o3.length, this._remaining = o3.length, this._result = new Array(this.length), 0 === this.length ? T(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(o3), 0 === this._remaining && T(this.promise, this._result))) : I(this.promise, new Error("Array Methods must be provided an Array"));
            }
            return e4.prototype._enumerate = function(e5) {
              for (var t4 = 0; this._state === j && e5.length > t4; t4++) this._eachEntry(e5[t4], t4);
            }, e4.prototype._eachEntry = function(e5, t4) {
              var o3 = this._instanceConstructor, n3 = o3.resolve;
              if (n3 === w) {
                var r3 = void 0, i2 = void 0, a2 = false;
                try {
                  r3 = e5.then;
                } catch (e6) {
                  a2 = true, i2 = e6;
                }
                if (r3 === b && e5._state !== j) this._settledAt(e5._state, t4, e5._result);
                else if ("function" != typeof r3) this._remaining--, this._result[t4] = e5;
                else if (o3 === L) {
                  var s2 = new o3(C);
                  a2 ? I(s2, i2) : E(s2, e5, r3), this._willSettleAt(s2, t4);
                } else this._willSettleAt(new o3(function(t5) {
                  return t5(e5);
                }), t4);
              } else this._willSettleAt(n3(e5), t4);
            }, e4.prototype._settledAt = function(e5, t4, o3) {
              var n3 = this.promise;
              n3._state === j && (this._remaining--, 2 === e5 ? I(n3, o3) : this._result[t4] = o3), 0 === this._remaining && T(n3, this._result);
            }, e4.prototype._willSettleAt = function(e5, t4) {
              var o3 = this;
              P(e5, void 0, function(e6) {
                return o3._settledAt(1, t4, e6);
              }, function(e6) {
                return o3._settledAt(2, t4, e6);
              });
            }, e4;
          }(), L = function() {
            function t4(e4) {
              this[S] = O++, this._result = this._state = void 0, this._subscribers = [], C !== e4 && ("function" != typeof e4 && function() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
              }(), this instanceof t4 ? function(e5, t5) {
                try {
                  t5(function(t6) {
                    x(e5, t6);
                  }, function(t6) {
                    I(e5, t6);
                  });
                } catch (t6) {
                  I(e5, t6);
                }
              }(this, e4) : function() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
              }());
            }
            return t4.prototype.catch = function(e4) {
              return this.then(null, e4);
            }, t4.prototype.finally = function(t5) {
              var o3 = this, n3 = o3.constructor;
              return e3(t5) ? o3.then(function(e4) {
                return n3.resolve(t5()).then(function() {
                  return e4;
                });
              }, function(e4) {
                return n3.resolve(t5()).then(function() {
                  throw e4;
                });
              }) : o3.then(t5, t5);
            }, t4;
          }();
          return L.prototype.then = b, L.all = function(e4) {
            return new A(this, e4).promise;
          }, L.race = function(e4) {
            var o3 = this;
            return t3(e4) ? new o3(function(t4, n3) {
              for (var r3 = e4.length, i2 = 0; r3 > i2; i2++) o3.resolve(e4[i2]).then(t4, n3);
            }) : new o3(function(e5, t4) {
              return t4(new TypeError("You must pass an array to race."));
            });
          }, L.resolve = w, L.reject = function(e4) {
            var t4 = new this(C);
            return I(t4, e4), t4;
          }, L._setScheduler = function(e4) {
            i = e4;
          }, L._setAsap = function(e4) {
            a = e4;
          }, L._asap = a, L.polyfill = function() {
            var e4 = void 0;
            if (void 0 !== o2.g) e4 = o2.g;
            else if ("undefined" != typeof self) e4 = self;
            else try {
              e4 = Function("return this")();
            } catch (e5) {
              throw new Error("polyfill failed because global object is unavailable in this environment");
            }
            var t4 = e4.Promise;
            if (t4) {
              var n3 = null;
              try {
                n3 = Object.prototype.toString.call(t4.resolve());
              } catch (e5) {
              }
              if ("[object Promise]" === n3 && !t4.cast) return;
            }
            e4.Promise = L;
          }, L.Promise = L, L;
        }();
      }, 20255: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.__classPrivateFieldIn = t2.__classPrivateFieldSet = t2.__classPrivateFieldGet = t2.__importDefault = t2.__importStar = t2.__makeTemplateObject = t2.__asyncValues = t2.__asyncDelegator = t2.__asyncGenerator = t2.__await = t2.__spreadArray = t2.__spreadArrays = t2.__spread = t2.__read = t2.__values = t2.__exportStar = t2.__createBinding = t2.__generator = t2.__awaiter = t2.__metadata = t2.__setFunctionName = t2.__propKey = t2.__runInitializers = t2.__esDecorate = t2.__param = t2.__decorate = t2.__rest = t2.__assign = t2.__extends = void 0;
        var o2 = function(e3, t3) {
          return o2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
            e4.__proto__ = t4;
          } || function(e4, t4) {
            for (var o3 in t4) Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
          }, o2(e3, t3);
        };
        function n2(e3) {
          var t3 = "function" == typeof Symbol && Symbol.iterator, o3 = t3 && e3[t3], n3 = 0;
          if (o3) return o3.call(e3);
          if (e3 && "number" == typeof e3.length) return { next: function() {
            return e3 && n3 >= e3.length && (e3 = void 0), { value: e3 && e3[n3++], done: !e3 };
          } };
          throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function r2(e3, t3) {
          var o3 = "function" == typeof Symbol && e3[Symbol.iterator];
          if (!o3) return e3;
          var n3, r3, i2 = o3.call(e3), a2 = [];
          try {
            for (; (void 0 === t3 || t3-- > 0) && !(n3 = i2.next()).done; ) a2.push(n3.value);
          } catch (e4) {
            r3 = { error: e4 };
          } finally {
            try {
              n3 && !n3.done && (o3 = i2.return) && o3.call(i2);
            } finally {
              if (r3) throw r3.error;
            }
          }
          return a2;
        }
        function i(e3) {
          return this instanceof i ? (this.v = e3, this) : new i(e3);
        }
        t2.__extends = function(e3, t3) {
          if ("function" != typeof t3 && null !== t3) throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
          function n3() {
            this.constructor = e3;
          }
          o2(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (n3.prototype = t3.prototype, new n3());
        }, t2.__assign = function() {
          return t2.__assign = Object.assign || function(e3) {
            for (var t3, o3 = 1, n3 = arguments.length; n3 > o3; o3++) for (var r3 in t3 = arguments[o3]) Object.prototype.hasOwnProperty.call(t3, r3) && (e3[r3] = t3[r3]);
            return e3;
          }, t2.__assign.apply(this, arguments);
        }, t2.__rest = function(e3, t3) {
          var o3 = {};
          for (var n3 in e3) Object.prototype.hasOwnProperty.call(e3, n3) && 0 > t3.indexOf(n3) && (o3[n3] = e3[n3]);
          if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
            var r3 = 0;
            for (n3 = Object.getOwnPropertySymbols(e3); n3.length > r3; r3++) 0 > t3.indexOf(n3[r3]) && Object.prototype.propertyIsEnumerable.call(e3, n3[r3]) && (o3[n3[r3]] = e3[n3[r3]]);
          }
          return o3;
        }, t2.__decorate = function(e3, t3, o3, n3) {
          var r3, i2 = arguments.length, a2 = 3 > i2 ? t3 : null === n3 ? n3 = Object.getOwnPropertyDescriptor(t3, o3) : n3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a2 = Reflect.decorate(e3, t3, o3, n3);
          else for (var s = e3.length - 1; s >= 0; s--) (r3 = e3[s]) && (a2 = (3 > i2 ? r3(a2) : i2 > 3 ? r3(t3, o3, a2) : r3(t3, o3)) || a2);
          return i2 > 3 && a2 && Object.defineProperty(t3, o3, a2), a2;
        }, t2.__param = function(e3, t3) {
          return function(o3, n3) {
            t3(o3, n3, e3);
          };
        }, t2.__esDecorate = function(e3, t3, o3, n3, r3, i2) {
          function a2(e4) {
            if (void 0 !== e4 && "function" != typeof e4) throw new TypeError("Function expected");
            return e4;
          }
          for (var s, l = n3.kind, c = "getter" === l ? "get" : "setter" === l ? "set" : "value", u = !t3 && e3 ? n3.static ? e3 : e3.prototype : null, d = t3 || (u ? Object.getOwnPropertyDescriptor(u, n3.name) : {}), p = false, f = o3.length - 1; f >= 0; f--) {
            var h = {};
            for (var m in n3) h[m] = "access" === m ? {} : n3[m];
            for (var m in n3.access) h.access[m] = n3.access[m];
            h.addInitializer = function(e4) {
              if (p) throw new TypeError("Cannot add initializers after decoration has completed");
              i2.push(a2(e4 || null));
            };
            var v = (0, o3[f])("accessor" === l ? { get: d.get, set: d.set } : d[c], h);
            if ("accessor" === l) {
              if (void 0 === v) continue;
              if (null === v || "object" != typeof v) throw new TypeError("Object expected");
              (s = a2(v.get)) && (d.get = s), (s = a2(v.set)) && (d.set = s), (s = a2(v.init)) && r3.push(s);
            } else (s = a2(v)) && ("field" === l ? r3.push(s) : d[c] = s);
          }
          u && Object.defineProperty(u, n3.name, d), p = true;
        }, t2.__runInitializers = function(e3, t3, o3) {
          for (var n3 = arguments.length > 2, r3 = 0; t3.length > r3; r3++) o3 = n3 ? t3[r3].call(e3, o3) : t3[r3].call(e3);
          return n3 ? o3 : void 0;
        }, t2.__propKey = function(e3) {
          return "symbol" == typeof e3 ? e3 : "".concat(e3);
        }, t2.__setFunctionName = function(e3, t3, o3) {
          return "symbol" == typeof t3 && (t3 = t3.description ? "[".concat(t3.description, "]") : ""), Object.defineProperty(e3, "name", { configurable: true, value: o3 ? "".concat(o3, " ", t3) : t3 });
        }, t2.__metadata = function(e3, t3) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e3, t3);
        }, t2.__awaiter = function(e3, t3, o3, n3) {
          return new (o3 || (o3 = Promise))(function(r3, i2) {
            function a2(e4) {
              try {
                l(n3.next(e4));
              } catch (e5) {
                i2(e5);
              }
            }
            function s(e4) {
              try {
                l(n3.throw(e4));
              } catch (e5) {
                i2(e5);
              }
            }
            function l(e4) {
              var t4;
              e4.done ? r3(e4.value) : (t4 = e4.value, t4 instanceof o3 ? t4 : new o3(function(e5) {
                e5(t4);
              })).then(a2, s);
            }
            l((n3 = n3.apply(e3, t3 || [])).next());
          });
        }, t2.__generator = function(e3, t3) {
          var o3, n3, r3, i2, a2 = { label: 0, sent: function() {
            if (1 & r3[0]) throw r3[1];
            return r3[1];
          }, trys: [], ops: [] };
          return i2 = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s(s2) {
            return function(l) {
              return function(s3) {
                if (o3) throw new TypeError("Generator is already executing.");
                for (; i2 && (i2 = 0, s3[0] && (a2 = 0)), a2; ) try {
                  if (o3 = 1, n3 && (r3 = 2 & s3[0] ? n3.return : s3[0] ? n3.throw || ((r3 = n3.return) && r3.call(n3), 0) : n3.next) && !(r3 = r3.call(n3, s3[1])).done) return r3;
                  switch (n3 = 0, r3 && (s3 = [2 & s3[0], r3.value]), s3[0]) {
                    case 0:
                    case 1:
                      r3 = s3;
                      break;
                    case 4:
                      return a2.label++, { value: s3[1], done: false };
                    case 5:
                      a2.label++, n3 = s3[1], s3 = [0];
                      continue;
                    case 7:
                      s3 = a2.ops.pop(), a2.trys.pop();
                      continue;
                    default:
                      if (!((r3 = (r3 = a2.trys).length > 0 && r3[r3.length - 1]) || 6 !== s3[0] && 2 !== s3[0])) {
                        a2 = 0;
                        continue;
                      }
                      if (3 === s3[0] && (!r3 || s3[1] > r3[0] && r3[3] > s3[1])) {
                        a2.label = s3[1];
                        break;
                      }
                      if (6 === s3[0] && r3[1] > a2.label) {
                        a2.label = r3[1], r3 = s3;
                        break;
                      }
                      if (r3 && r3[2] > a2.label) {
                        a2.label = r3[2], a2.ops.push(s3);
                        break;
                      }
                      r3[2] && a2.ops.pop(), a2.trys.pop();
                      continue;
                  }
                  s3 = t3.call(e3, a2);
                } catch (e4) {
                  s3 = [6, e4], n3 = 0;
                } finally {
                  o3 = r3 = 0;
                }
                if (5 & s3[0]) throw s3[1];
                return { value: s3[0] ? s3[1] : void 0, done: true };
              }([s2, l]);
            };
          }
        }, t2.__createBinding = Object.create ? function(e3, t3, o3, n3) {
          void 0 === n3 && (n3 = o3);
          var r3 = Object.getOwnPropertyDescriptor(t3, o3);
          r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
            return t3[o3];
          } }), Object.defineProperty(e3, n3, r3);
        } : function(e3, t3, o3, n3) {
          void 0 === n3 && (n3 = o3), e3[n3] = t3[o3];
        }, t2.__exportStar = function(e3, o3) {
          for (var n3 in e3) "default" === n3 || Object.prototype.hasOwnProperty.call(o3, n3) || (0, t2.__createBinding)(o3, e3, n3);
        }, t2.__values = n2, t2.__read = r2, t2.__spread = function() {
          for (var e3 = [], t3 = 0; arguments.length > t3; t3++) e3 = e3.concat(r2(arguments[t3]));
          return e3;
        }, t2.__spreadArrays = function() {
          for (var e3 = 0, t3 = 0, o3 = arguments.length; o3 > t3; t3++) e3 += arguments[t3].length;
          var n3 = Array(e3), r3 = 0;
          for (t3 = 0; o3 > t3; t3++) for (var i2 = arguments[t3], a2 = 0, s = i2.length; s > a2; a2++, r3++) n3[r3] = i2[a2];
          return n3;
        }, t2.__spreadArray = function(e3, t3, o3) {
          if (o3 || 2 === arguments.length) for (var n3, r3 = 0, i2 = t3.length; i2 > r3; r3++) !n3 && r3 in t3 || (n3 || (n3 = Array.prototype.slice.call(t3, 0, r3)), n3[r3] = t3[r3]);
          return e3.concat(n3 || Array.prototype.slice.call(t3));
        }, t2.__await = i, t2.__asyncGenerator = function(e3, t3, o3) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var n3, r3 = o3.apply(e3, t3 || []), a2 = [];
          return n3 = {}, s("next"), s("throw"), s("return"), n3[Symbol.asyncIterator] = function() {
            return this;
          }, n3;
          function s(e4) {
            r3[e4] && (n3[e4] = function(t4) {
              return new Promise(function(o4, n4) {
                a2.push([e4, t4, o4, n4]) > 1 || l(e4, t4);
              });
            });
          }
          function l(e4, t4) {
            try {
              (o4 = r3[e4](t4)).value instanceof i ? Promise.resolve(o4.value.v).then(c, u) : d(a2[0][2], o4);
            } catch (e5) {
              d(a2[0][3], e5);
            }
            var o4;
          }
          function c(e4) {
            l("next", e4);
          }
          function u(e4) {
            l("throw", e4);
          }
          function d(e4, t4) {
            e4(t4), a2.shift(), a2.length && l(a2[0][0], a2[0][1]);
          }
        }, t2.__asyncDelegator = function(e3) {
          var t3, o3;
          return t3 = {}, n3("next"), n3("throw", function(e4) {
            throw e4;
          }), n3("return"), t3[Symbol.iterator] = function() {
            return this;
          }, t3;
          function n3(n4, r3) {
            t3[n4] = e3[n4] ? function(t4) {
              return (o3 = !o3) ? { value: i(e3[n4](t4)), done: false } : r3 ? r3(t4) : t4;
            } : r3;
          }
        }, t2.__asyncValues = function(e3) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var t3, o3 = e3[Symbol.asyncIterator];
          return o3 ? o3.call(e3) : (e3 = n2(e3), t3 = {}, r3("next"), r3("throw"), r3("return"), t3[Symbol.asyncIterator] = function() {
            return this;
          }, t3);
          function r3(o4) {
            t3[o4] = e3[o4] && function(t4) {
              return new Promise(function(n3, r4) {
                !function(e4, t5, o5, n4) {
                  Promise.resolve(n4).then(function(t6) {
                    e4({ value: t6, done: o5 });
                  }, t5);
                }(n3, r4, (t4 = e3[o4](t4)).done, t4.value);
              });
            };
          }
        }, t2.__makeTemplateObject = function(e3, t3) {
          return Object.defineProperty ? Object.defineProperty(e3, "raw", { value: t3 }) : e3.raw = t3, e3;
        };
        var a = Object.create ? function(e3, t3) {
          Object.defineProperty(e3, "default", { enumerable: true, value: t3 });
        } : function(e3, t3) {
          e3.default = t3;
        };
        t2.__importStar = function(e3) {
          if (e3 && e3.__esModule) return e3;
          var o3 = {};
          if (null != e3) for (var n3 in e3) "default" !== n3 && Object.prototype.hasOwnProperty.call(e3, n3) && (0, t2.__createBinding)(o3, e3, n3);
          return a(o3, e3), o3;
        }, t2.__importDefault = function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        }, t2.__classPrivateFieldGet = function(e3, t3, o3, n3) {
          if ("a" === o3 && !n3) throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t3 ? e3 !== t3 || !n3 : !t3.has(e3)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === o3 ? n3 : "a" === o3 ? n3.call(e3) : n3 ? n3.value : t3.get(e3);
        }, t2.__classPrivateFieldSet = function(e3, t3, o3, n3, r3) {
          if ("m" === n3) throw new TypeError("Private method is not writable");
          if ("a" === n3 && !r3) throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t3 ? e3 !== t3 || !r3 : !t3.has(e3)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n3 ? r3.call(e3, o3) : r3 ? r3.value = o3 : t3.set(e3, o3), o3;
        }, t2.__classPrivateFieldIn = function(e3, t3) {
          if (null === t3 || "object" != typeof t3 && "function" != typeof t3) throw new TypeError("Cannot use 'in' operator on non-object");
          return "function" == typeof e3 ? t3 === e3 : e3.has(t3);
        };
      }, 93166: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Config = void 0;
        var n2 = o2(86893), r2 = o2(86893), i = function() {
          function e3() {
            this.defaultTimeout = 100, this.namespace = "", this.safeMode = false, this.width = "auto", this.height = "auto", this.safePluginsList = ["about", "enter", "backspace", "size"], this.license = "", this.preset = "custom", this.presets = { inline: { inline: true, toolbar: false, toolbarInline: true, toolbarInlineForSelection: true, showXPathInStatusbar: false, showCharsCounter: false, showWordsCounter: false, showPlaceholder: false } }, this.ownerDocument = "undefined" != typeof document ? document : null, this.ownerWindow = "undefined" != typeof window ? window : null, this.shadowRoot = null, this.zIndex = 0, this.readonly = false, this.disabled = false, this.activeButtonsInReadOnly = ["source", "fullsize", "print", "about", "dots", "selectall"], this.allowCommandsInReadOnly = ["selectall", "preview", "print"], this.toolbarButtonSize = "middle", this.allowTabNavigation = false, this.inline = false, this.theme = "default", this.saveModeInStorage = false, this.editorClassName = false, this.editorCssClass = false, this.className = false, this.style = false, this.containerStyle = false, this.styleValues = {}, this.triggerChangeEvent = true, this.direction = "", this.language = "auto", this.debugLanguage = false, this.i18n = false, this.tabIndex = -1, this.toolbar = true, this.statusbar = true, this.showTooltip = true, this.showTooltipDelay = 1e3, this.useNativeTooltip = false, this.defaultActionOnPaste = r2.INSERT_AS_HTML, this.enter = n2.PARAGRAPH, this.iframe = false, this.editHTMLDocumentMode = false, this.enterBlock = "br" !== this.enter ? this.enter : n2.PARAGRAPH, this.defaultMode = n2.MODE_WYSIWYG, this.useSplitMode = false, this.colors = { greyscale: ["#000000", "#434343", "#666666", "#999999", "#B7B7B7", "#CCCCCC", "#D9D9D9", "#EFEFEF", "#F3F3F3", "#FFFFFF"], palette: ["#980000", "#FF0000", "#FF9900", "#FFFF00", "#00F0F0", "#00FFFF", "#4A86E8", "#0000FF", "#9900FF", "#FF00FF"], full: ["#E6B8AF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#C9DAF8", "#CFE2F3", "#D9D2E9", "#EAD1DC", "#DD7E6B", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#A4C2F4", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#CC4125", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0", "#A61C00", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3C78D8", "#3D85C6", "#674EA7", "#A64D79", "#85200C", "#990000", "#B45F06", "#BF9000", "#38761D", "#134F5C", "#1155CC", "#0B5394", "#351C75", "#733554", "#5B0F00", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#1C4587", "#073763", "#20124D", "#4C1130"] }, this.colorPickerDefaultTab = "background", this.imageDefaultWidth = 300, this.removeButtons = [], this.disablePlugins = [], this.extraPlugins = [], this.extraButtons = [], this.extraIcons = {}, this.createAttributes = { table: { style: "border-collapse:collapse;width: 100%;" } }, this.sizeLG = 900, this.sizeMD = 700, this.sizeSM = 400, this.buttons = [{ group: "font-style", buttons: [] }, { group: "list", buttons: [] }, { group: "font", buttons: [] }, "---", { group: "script", buttons: [] }, { group: "media", buttons: [] }, "\n", { group: "state", buttons: [] }, { group: "clipboard", buttons: [] }, { group: "insert", buttons: [] }, { group: "indent", buttons: [] }, { group: "color", buttons: [] }, { group: "form", buttons: [] }, "---", { group: "history", buttons: [] }, { group: "search", buttons: [] }, { group: "source", buttons: [] }, { group: "other", buttons: [] }, { group: "info", buttons: [] }], this.buttonsMD = ["bold", "italic", "|", "ul", "ol", "eraser", "|", "font", "fontsize", "---", "image", "table", "|", "link", "\n", "brush", "paragraph", "align", "|", "hr", "copyformat", "fullsize", "---", "undo", "redo", "|", "dots"], this.buttonsSM = ["bold", "italic", "|", "ul", "ol", "eraser", "|", "fontsize", "brush", "paragraph", "---", "image", "table", "\n", "link", "|", "align", "|", "undo", "redo", "|", "copyformat", "fullsize", "---", "dots"], this.buttonsXS = ["bold", "brush", "paragraph", "eraser", "|", "fontsize", "---", "image", "\n", "align", "undo", "redo", "|", "link", "table", "---", "dots"], this.events = {}, this.textIcons = false, this.showBrowserColorPicker = true;
          }
          return Object.defineProperty(e3, "defaultOptions", { get: function() {
            return e3.__defaultOptions || (e3.__defaultOptions = new e3()), e3.__defaultOptions;
          }, enumerable: false, configurable: true }), e3;
        }();
        t2.Config = i, i.prototype.controls = {};
      }, 77536: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Async = void 0;
        var n2 = o2(20255), r2 = o2(4696), i = o2(42096), a = o2(79736), s = o2(26335), l = o2(24421), c = o2(61817), u = (o2(52378), function() {
          function e3() {
            var e4, t3, o3, n3, r3 = this;
            this.timers = /* @__PURE__ */ new Map(), this.__callbacks = /* @__PURE__ */ new Map(), this.promisesRejections = /* @__PURE__ */ new Set(), this.requestsIdle = /* @__PURE__ */ new Set(), this.requestsRaf = /* @__PURE__ */ new Set(), this.requestIdleCallbackNative = null !== (t3 = null === (e4 = window.requestIdleCallback) || void 0 === e4 ? void 0 : e4.bind(window)) && void 0 !== t3 ? t3 : function(e5, t4) {
              var o4, n4 = Date.now();
              return r3.setTimeout(function() {
                e5({ didTimeout: false, timeRemaining: function() {
                  return Math.max(0, 50 - (Date.now() - n4));
                } });
              }, null !== (o4 = null == t4 ? void 0 : t4.timeout) && void 0 !== o4 ? o4 : 1);
            }, this.cancelIdleCallbackNative = null !== (n3 = null === (o3 = window.cancelIdleCallback) || void 0 === o3 ? void 0 : o3.bind(window)) && void 0 !== n3 ? n3 : function(e5) {
              r3.clearTimeout(e5);
            }, this.isDestructed = false;
          }
          return e3.prototype.delay = function(e4) {
            var t3 = this;
            return this.promise(function(o3) {
              return t3.setTimeout(o3, e4);
            });
          }, e3.prototype.setTimeout = function(e4, t3) {
            for (var o3 = [], i2 = 2; arguments.length > i2; i2++) o3[i2 - 2] = arguments[i2];
            if (this.isDestructed) return 0;
            var a2 = {};
            (0, c.isNumber)(t3) || (t3 = (a2 = t3).timeout || 0), a2.label && this.clearLabel(a2.label);
            var s2 = r2.setTimeout.apply(void 0, n2.__spreadArray([e4, t3], n2.__read(o3), false)), l2 = a2.label || s2;
            return this.timers.set(l2, s2), this.__callbacks.set(l2, e4), s2;
          }, e3.prototype.updateTimeout = function(e4, t3) {
            if (!e4 || !this.timers.has(e4)) return null;
            var o3 = this.__callbacks.get(e4);
            return this.setTimeout(o3, { label: e4, timeout: t3 });
          }, e3.prototype.clearLabel = function(e4) {
            e4 && this.timers.has(e4) && ((0, r2.clearTimeout)(this.timers.get(e4)), this.timers.delete(e4), this.__callbacks.delete(e4));
          }, e3.prototype.clearTimeout = function(e4) {
            if ((0, l.isString)(e4)) return this.clearLabel(e4);
            (0, r2.clearTimeout)(e4), this.timers.delete(e4), this.__callbacks.delete(e4);
          }, e3.prototype.debounce = function(e4, t3, o3) {
            var l2 = this;
            void 0 === o3 && (o3 = false);
            var c2 = 0, u2 = false, d = [], p = function() {
              for (var t4 = [], o4 = 0; arguments.length > o4; o4++) t4[o4] = arguments[o4];
              if (!u2) {
                c2 = 0;
                var r3 = e4.apply(void 0, n2.__spreadArray([], n2.__read(t4), false));
                if (u2 = true, d.length) {
                  var i2 = function() {
                    d.forEach(function(e5) {
                      return e5();
                    }), d.length = 0;
                  };
                  (0, s.isPromise)(r3) ? r3.finally(i2) : i2();
                }
              }
            }, f = function() {
              for (var a2 = [], s2 = 0; arguments.length > s2; s2++) a2[s2] = arguments[s2];
              u2 = false, t3 ? (!c2 && o3 && p.apply(void 0, n2.__spreadArray([], n2.__read(a2), false)), (0, r2.clearTimeout)(c2), c2 = l2.setTimeout(function() {
                return p.apply(void 0, n2.__spreadArray([], n2.__read(a2), false));
              }, (0, i.isFunction)(t3) ? t3() : t3), l2.timers.set(e4, c2)) : p.apply(void 0, n2.__spreadArray([], n2.__read(a2), false));
            };
            return (0, a.isPlainObject)(t3) && t3.promisify ? function() {
              for (var e5 = [], t4 = 0; arguments.length > t4; t4++) e5[t4] = arguments[t4];
              var o4 = l2.promise(function(e6) {
                d.push(e6);
              });
              return f.apply(void 0, n2.__spreadArray([], n2.__read(e5), false)), o4;
            } : f;
          }, e3.prototype.throttle = function(e4, t3, o3) {
            var r3 = this;
            var a2, s2, l2, c2 = null;
            return function() {
              for (var o4 = [], u2 = 0; arguments.length > u2; u2++) o4[u2] = arguments[u2];
              a2 = true, l2 = o4, t3 ? c2 || (s2 = function() {
                a2 ? (e4.apply(void 0, n2.__spreadArray([], n2.__read(l2), false)), a2 = false, c2 = r3.setTimeout(s2, (0, i.isFunction)(t3) ? t3() : t3), r3.timers.set(s2, c2)) : c2 = null;
              })() : e4.apply(void 0, n2.__spreadArray([], n2.__read(l2), false));
            };
          }, e3.prototype.promise = function(e4) {
            var t3 = this, o3 = function() {
            }, n3 = new Promise(function(n4, r3) {
              return t3.promisesRejections.add(r3), o3 = r3, e4(n4, r3);
            });
            return n3.finally || (n3.finally = function(e5) {
              return n3.then(e5).catch(e5), n3;
            }), n3.finally(function() {
              t3.promisesRejections.delete(o3);
            }).catch(function() {
              return null;
            }), n3.rejectCallback = o3, n3;
          }, e3.prototype.promiseState = function(e4) {
            var t3 = this;
            if (e4.status) return e4.status;
            if (!Promise.race) return new Promise(function(o4) {
              e4.then(function(e5) {
                return o4("fulfilled"), e5;
              }, function(e5) {
                throw o4("rejected"), e5;
              }), t3.setTimeout(function() {
                o4("pending");
              }, 100);
            });
            var o3 = {};
            return Promise.race([e4, o3]).then(function(e5) {
              return e5 === o3 ? "pending" : "fulfilled";
            }, function() {
              return "rejected";
            });
          }, e3.prototype.requestIdleCallback = function(e4, t3) {
            var o3 = this.requestIdleCallbackNative(e4, t3);
            return this.requestsIdle.add(o3), o3;
          }, e3.prototype.requestIdlePromise = function(e4) {
            var t3 = this;
            return this.promise(function(o3) {
              var n3 = t3.requestIdleCallback(function() {
                return o3(n3);
              }, e4);
            });
          }, e3.prototype.cancelIdleCallback = function(e4) {
            return this.requestsIdle.delete(e4), this.cancelIdleCallbackNative(e4);
          }, e3.prototype.requestAnimationFrame = function(e4) {
            var t3 = requestAnimationFrame(e4);
            return this.requestsRaf.add(t3), t3;
          }, e3.prototype.cancelAnimationFrame = function(e4) {
            this.requestsRaf.delete(e4), cancelAnimationFrame(e4);
          }, e3.prototype.clear = function() {
            var e4 = this;
            this.requestsIdle.forEach(function(t3) {
              return e4.cancelIdleCallback(t3);
            }), this.requestsRaf.forEach(function(t3) {
              return e4.cancelAnimationFrame(t3);
            }), this.timers.forEach(function(t3) {
              return (0, r2.clearTimeout)(e4.timers.get(t3));
            }), this.timers.clear(), this.promisesRejections.forEach(function(e5) {
              return e5();
            }), this.promisesRejections.clear();
          }, e3.prototype.destruct = function() {
            this.clear(), this.isDestructed = true;
          }, e3;
        }());
        t2.Async = u;
      }, 22630: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(20255).__exportStar(o2(77536), t2);
      }, 45113: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Component = void 0;
        var n2 = o2(40332), r2 = o2(17332), i = o2(29411), a = o2(22630), s = /* @__PURE__ */ new Map(), l = function() {
          function e3() {
            this.async = new a.Async(), this.ownerWindow = window, this.__componentStatus = i.STATUSES.beforeInit, this.uid = "jodit-uid-" + (0, r2.uniqueUid)();
          }
          return Object.defineProperty(e3.prototype, "componentName", { get: function() {
            return this.__componentName || (this.__componentName = "jodit-" + (0, n2.kebabCase)(((0, n2.isFunction)(this.className) ? this.className() : "") || (0, n2.getClassName)(this))), this.__componentName;
          }, enumerable: false, configurable: true }), e3.prototype.getFullElName = function(e4, t3, o3) {
            var r3 = [this.componentName];
            return e4 && (e4 = e4.replace(/[^a-z0-9-]/gi, "-"), r3.push("__".concat(e4))), t3 && (r3.push("_", t3), r3.push("_", (0, n2.isVoid)(o3) ? "true" : o3.toString())), r3.join("");
          }, Object.defineProperty(e3.prototype, "ownerDocument", { get: function() {
            return this.ow.document;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "od", { get: function() {
            return this.ownerDocument;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "ow", { get: function() {
            return this.ownerWindow;
          }, enumerable: false, configurable: true }), e3.prototype.get = function(e4, t3) {
            return (0, n2.get)(e4, t3 || this);
          }, Object.defineProperty(e3.prototype, "isReady", { get: function() {
            return this.componentStatus === i.STATUSES.ready;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "isDestructed", { get: function() {
            return this.componentStatus === i.STATUSES.destructed;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "isInDestruct", { get: function() {
            return i.STATUSES.beforeDestruct === this.componentStatus || i.STATUSES.destructed === this.componentStatus;
          }, enumerable: false, configurable: true }), e3.prototype.bindDestruct = function(e4) {
            var t3 = this;
            return e4.hookStatus(i.STATUSES.beforeDestruct, function() {
              return !t3.isInDestruct && t3.destruct();
            }), this;
          }, e3.prototype.destruct = function() {
            this.setStatus(i.STATUSES.destructed), this.async.destruct(), s.get(this) && s.delete(this);
          }, Object.defineProperty(e3.prototype, "componentStatus", { get: function() {
            return this.__componentStatus;
          }, set: function(e4) {
            this.setStatus(e4);
          }, enumerable: false, configurable: true }), e3.prototype.setStatus = function(e4) {
            return this.setStatusComponent(e4, this);
          }, e3.prototype.setStatusComponent = function(e4, t3) {
            if (e4 !== this.__componentStatus) {
              t3 === this && (this.__componentStatus = e4);
              var o3 = Object.getPrototypeOf(this);
              o3 && (0, n2.isFunction)(o3.setStatusComponent) && o3.setStatusComponent(e4, t3);
              var r3 = s.get(this), i2 = null == r3 ? void 0 : r3[e4];
              i2 && i2.length && i2.forEach(function(e5) {
                return e5(t3);
              });
            }
          }, e3.prototype.hookStatus = function(e4, t3) {
            var o3 = s.get(this);
            o3 || s.set(this, o3 = {}), o3[e4] || (o3[e4] = []), o3[e4].push(t3);
          }, e3.isInstanceOf = function(e4, t3) {
            return e4 instanceof t3;
          }, e3.STATUSES = i.STATUSES, e3;
        }();
        t2.Component = l;
      }, 56562: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(29411), t2), n2.__exportStar(o2(45113), t2), n2.__exportStar(o2(39840), t2);
      }, 29411: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.STATUSES = void 0, t2.STATUSES = { beforeInit: "beforeInit", ready: "ready", beforeDestruct: "beforeDestruct", destructed: "destructed" };
      }, 39840: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ViewComponent = void 0;
        var n2 = o2(20255), r2 = function(e3) {
          function t3(t4) {
            var o3 = e3.call(this) || this;
            return o3.setParentView(t4), o3;
          }
          return n2.__extends(t3, e3), Object.defineProperty(t3.prototype, "j", { get: function() {
            return this.jodit;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "defaultTimeout", { get: function() {
            return this.j.defaultTimeout;
          }, enumerable: false, configurable: true }), t3.prototype.i18n = function(e4) {
            for (var t4, o3 = [], r3 = 1; arguments.length > r3; r3++) o3[r3 - 1] = arguments[r3];
            return (t4 = this.j).i18n.apply(t4, n2.__spreadArray([e4], n2.__read(o3), false));
          }, t3.prototype.setParentView = function(e4) {
            return this.jodit = e4, e4.components.add(this), this;
          }, t3.prototype.destruct = function() {
            return this.j.components.delete(this), e3.prototype.destruct.call(this);
          }, t3;
        }(o2(45113).Component);
        t2.ViewComponent = r2;
      }, 86893: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CLIPBOARD_ID = t2.lang = t2.TEMP_ATTR = t2.BASE_PATH = t2.KEY_ALIASES = t2.IS_MAC = t2.SAFE_COUNT_CHANGE_CALL = t2.INSERT_ONLY_TEXT = t2.INSERT_AS_TEXT = t2.INSERT_CLEAR_HTML = t2.INSERT_AS_HTML = t2.EMULATE_DBLCLICK_TIMEOUT = t2.MARKER_CLASS = t2.TEXT_RTF = t2.TEXT_HTML = t2.TEXT_PLAIN = t2.IS_IE = t2.MODE_SPLIT = t2.MODE_SOURCE = t2.MODE_WYSIWYG = t2.PARAGRAPH = t2.BR = t2.COMMAND_KEYS = t2.ACCURACY = t2.NEARBY = t2.KEY_F3 = t2.KEY_DELETE = t2.KEY_SPACE = t2.KEY_DOWN = t2.KEY_RIGHT = t2.KEY_UP = t2.KEY_LEFT = t2.KEY_ALT = t2.KEY_ESC = t2.KEY_ENTER = t2.KEY_TAB = t2.KEY_BACKSPACE = t2.KEY_META = t2.NO_EMPTY_TAGS = t2.INSEPARABLE_TAGS = t2.IS_INLINE = t2.IS_BLOCK = t2.SPACE_REG_EXP_END = t2.SPACE_REG_EXP_START = t2.SPACE_REG_EXP = t2.INVISIBLE_SPACE_REG_EXP_START = t2.INVISIBLE_SPACE_REG_EXP_END = t2.INVISIBLE_SPACE_REG_EXP = t2.NBSP_SPACE = t2.INVISIBLE_SPACE = void 0, t2.SOURCE_CONSUMER = void 0;
        var n2 = o2(20255);
        t2.INVISIBLE_SPACE = "\uFEFF", t2.NBSP_SPACE = " ", t2.INVISIBLE_SPACE_REG_EXP = function() {
          return /[\uFEFF]/g;
        }, t2.INVISIBLE_SPACE_REG_EXP_END = function() {
          return /[\uFEFF]+$/g;
        }, t2.INVISIBLE_SPACE_REG_EXP_START = function() {
          return /^[\uFEFF]+/g;
        }, t2.SPACE_REG_EXP = function() {
          return /[\s\n\t\r\uFEFF\u200b]+/g;
        }, t2.SPACE_REG_EXP_START = function() {
          return /^[\s\n\t\r\uFEFF\u200b]+/g;
        }, t2.SPACE_REG_EXP_END = function() {
          return /[\s\n\t\r\uFEFF\u200b]+$/g;
        }, t2.IS_BLOCK = /^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|CANVAS|DD|DFN|DIV|DL|DT|FIELDSET|FIGCAPTION|FIGURE|FOOTER|FORM|H[1-6]|HEADER|HGROUP|HR|LI|MAIN|NAV|NOSCRIPT|OUTPUT|P|PRE|RUBY|SCRIPT|STYLE|OBJECT|OL|SECTION|IFRAME|JODIT|JODIT-MEDIA|UL|TR|TD|TH|TBODY|THEAD|TFOOT|TABLE|BODY|HTML|VIDEO)$/i, t2.IS_INLINE = /^(STRONG|SPAN|I|EM|B|SUP|SUB|A|U)$/i;
        var r2 = ["img", "video", "svg", "iframe", "script", "input", "textarea", "link", "jodit", "jodit-media"];
        t2.INSEPARABLE_TAGS = new Set(n2.__spreadArray(n2.__spreadArray([], n2.__read(r2), false), ["br", "hr"], false)), t2.NO_EMPTY_TAGS = new Set(r2), t2.KEY_META = "Meta", t2.KEY_BACKSPACE = "Backspace", t2.KEY_TAB = "Tab", t2.KEY_ENTER = "Enter", t2.KEY_ESC = "Escape", t2.KEY_ALT = "Alt", t2.KEY_LEFT = "ArrowLeft", t2.KEY_UP = "ArrowUp", t2.KEY_RIGHT = "ArrowRight", t2.KEY_DOWN = "ArrowDown", t2.KEY_SPACE = "Space", t2.KEY_DELETE = "Delete", t2.KEY_F3 = "F3", t2.NEARBY = 5, t2.ACCURACY = 10, t2.COMMAND_KEYS = [t2.KEY_META, t2.KEY_BACKSPACE, t2.KEY_DELETE, t2.KEY_UP, t2.KEY_DOWN, t2.KEY_RIGHT, t2.KEY_LEFT, t2.KEY_ENTER, t2.KEY_ESC, t2.KEY_F3, t2.KEY_TAB], t2.BR = "br", t2.PARAGRAPH = "p", t2.MODE_WYSIWYG = 1, t2.MODE_SOURCE = 2, t2.MODE_SPLIT = 3, t2.IS_IE = "undefined" != typeof navigator && (-1 !== navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent)), t2.TEXT_PLAIN = t2.IS_IE ? "text" : "text/plain", t2.TEXT_HTML = t2.IS_IE ? "html" : "text/html", t2.TEXT_RTF = t2.IS_IE ? "rtf" : "text/rtf", t2.MARKER_CLASS = "jodit-selection_marker", t2.EMULATE_DBLCLICK_TIMEOUT = 300, t2.INSERT_AS_HTML = "insert_as_html", t2.INSERT_CLEAR_HTML = "insert_clear_html", t2.INSERT_AS_TEXT = "insert_as_text", t2.INSERT_ONLY_TEXT = "insert_only_text", t2.SAFE_COUNT_CHANGE_CALL = 10, t2.IS_MAC = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), t2.KEY_ALIASES = { add: "+", break: "pause", cmd: "meta", command: "meta", ctl: "control", ctrl: "control", del: "delete", down: "arrowdown", esc: "escape", ins: "insert", left: "arrowleft", mod: t2.IS_MAC ? "meta" : "control", opt: "alt", option: "alt", return: "enter", right: "arrowright", space: " ", spacebar: " ", up: "arrowup", win: "meta", windows: "meta" }, t2.BASE_PATH = function() {
          if ("undefined" == typeof document) return "";
          var e3 = document.currentScript, t3 = function(e4) {
            var t4 = e4.split("/");
            return /\.js/.test(t4[t4.length - 1]) ? t4.slice(0, t4.length - 1).join("/") + "/" : e4;
          };
          if (e3) return t3(e3.src);
          var o3 = document.querySelectorAll("script[src]");
          return o3 && o3.length ? t3(o3[o3.length - 1].src) : window.location.href;
        }(), t2.TEMP_ATTR = "data-jodit-temp", t2.lang = {}, t2.CLIPBOARD_ID = "clipboard", t2.SOURCE_CONSUMER = "source-consumer";
      }, 31897: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Create = void 0;
        var n2 = o2(40332), r2 = (o2(52378), o2(64968)), i = o2(86893), a = function() {
          function e3(e4, t3) {
            this.document = e4, this.createAttributes = t3;
          }
          return Object.defineProperty(e3.prototype, "doc", { get: function() {
            return (0, n2.isFunction)(this.document) ? this.document() : this.document;
          }, enumerable: false, configurable: true }), e3.prototype.element = function(e4, t3, o3) {
            var r3 = this, i2 = this.doc.createElement(e4.toLowerCase());
            return this.applyCreateAttributes(i2), t3 && ((0, n2.isPlainObject)(t3) ? (0, n2.attr)(i2, t3) : o3 = t3), o3 && (0, n2.asArray)(o3).forEach(function(e5) {
              return i2.appendChild((0, n2.isString)(e5) ? r3.fromHTML(e5) : e5);
            }), i2;
          }, e3.prototype.div = function(e4, t3, o3) {
            var n3 = this.element("div", t3, o3);
            return e4 && (n3.className = e4), n3;
          }, e3.prototype.sandbox = function() {
            var e4, t3 = this.element("iframe", { sandbox: "allow-same-origin" });
            this.doc.body.appendChild(t3);
            var o3 = null === (e4 = t3.contentWindow) || void 0 === e4 ? void 0 : e4.document;
            if (!o3) throw Error("Iframe error");
            return o3.open(), o3.write("<!DOCTYPE html><html><head></head><body></body></html>"), o3.close(), o3.body;
          }, e3.prototype.span = function(e4, t3, o3) {
            var n3 = this.element("span", t3, o3);
            return e4 && (n3.className = e4), n3;
          }, e3.prototype.a = function(e4, t3, o3) {
            var n3 = this.element("a", t3, o3);
            return e4 && (n3.className = e4), n3;
          }, e3.prototype.text = function(e4) {
            return this.doc.createTextNode(e4);
          }, e3.prototype.fake = function() {
            return this.text(i.INVISIBLE_SPACE);
          }, e3.prototype.fragment = function() {
            return this.doc.createDocumentFragment();
          }, e3.prototype.fromHTML = function(e4, t3) {
            var o3 = this.div();
            o3.innerHTML = e4.toString();
            var i2 = o3.firstChild === o3.lastChild && o3.firstChild ? o3.firstChild : o3;
            if (r2.Dom.safeRemove(i2), t3) {
              var a2 = (0, n2.refs)(i2);
              Object.keys(t3).forEach(function(e5) {
                var o4 = a2[e5];
                o4 && false === t3[e5] && r2.Dom.hide(o4);
              });
            }
            return i2;
          }, e3.prototype.applyCreateAttributes = function(e4) {
            if (this.createAttributes) {
              var t3 = this.createAttributes;
              if (t3 && t3[e4.tagName.toLowerCase()]) {
                var o3 = t3[e4.tagName.toLowerCase()];
                (0, n2.isFunction)(o3) ? o3(e4) : (0, n2.isPlainObject)(o3) && (0, n2.attr)(e4, o3);
              }
            }
          }, e3;
        }();
        t2.Create = a;
      }, 42841: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(20255).__exportStar(o2(31897), t2);
      }, 32358: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.cache = void 0;
        var n2 = o2(40332);
        t2.cache = function(e3, t3, o3) {
          var r2 = o3.get;
          if (!r2) throw (0, n2.error)("Getter property descriptor expected");
          o3.get = function() {
            var e4 = r2.call(this);
            return e4 && true === e4.noCache || Object.defineProperty(this, t3, { configurable: o3.configurable, enumerable: o3.enumerable, writable: false, value: e4 }), e4;
          };
        };
      }, 11441: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.component = void 0;
        var n2 = o2(20255);
        t2.component = function(e3) {
          var t3 = function(e4) {
            function t4() {
              for (var o3 = [], r2 = 0; arguments.length > r2; r2++) o3[r2] = arguments[r2];
              var i = e4.apply(this, n2.__spreadArray([], n2.__read(o3), false)) || this, a = i.constructor === t4;
              return a && (i instanceof t4 || Object.setPrototypeOf(i, t4.prototype), i.setStatus("ready")), i;
            }
            return n2.__extends(t4, e4), t4;
          }(e3);
          return t3;
        };
      }, 55773: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.throttle = t2.debounce = void 0;
        var n2 = o2(10172), r2 = o2(56562), i = o2(56964);
        function a(e3, t3, o3) {
          return void 0 === t3 && (t3 = false), void 0 === o3 && (o3 = "debounce"), function(a2, s) {
            var l = a2[s];
            if (!(0, n2.isFunction)(l)) throw (0, i.error)("Handler must be a Function");
            return a2.hookStatus(r2.STATUSES.ready, function(r3) {
              var i2 = r3.async, a3 = (0, n2.isFunction)(e3) ? e3(r3) : e3;
              Object.defineProperty(r3, s, { configurable: true, value: i2[o3](r3[s].bind(r3), (0, n2.isNumber)(a3) || (0, n2.isPlainObject)(a3) ? a3 : r3.defaultTimeout, t3) });
            }), { configurable: true, get: function() {
              return l.bind(this);
            } };
          };
        }
        o2(52378), t2.debounce = a, t2.throttle = function(e3, t3) {
          return void 0 === t3 && (t3 = false), a(e3, t3, "throttle");
        };
      }, 70669: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.derive = void 0;
        var n2 = o2(20255), r2 = o2(10172);
        t2.derive = function() {
          for (var e3 = [], t3 = 0; arguments.length > t3; t3++) e3[t3] = arguments[t3];
          return function(t4) {
            for (var o3 = t4.prototype, i = 0; e3.length > i; i++) for (var a = e3[i], s = Object.getOwnPropertyNames(a.prototype), l = function(e4) {
              var t5 = s[e4], i2 = Object.getOwnPropertyDescriptor(a.prototype, t5);
              null != i2 && (0, r2.isFunction)(i2.value) && !(0, r2.isFunction)(o3[t5]) && Object.defineProperty(o3, t5, { enumerable: true, configurable: true, writable: true, value: function() {
                for (var e5, t6 = [], o4 = 0; arguments.length > o4; o4++) t6[o4] = arguments[o4];
                return (e5 = i2.value).call.apply(e5, n2.__spreadArray([this], n2.__read(t6), false));
              } });
            }, c = 0; s.length > c; c++) l(c);
          };
        };
      }, 64522: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.hook = void 0;
        var n2 = o2(10172), r2 = o2(56964);
        t2.hook = function(e3) {
          return function(t3, o3) {
            if (!(0, n2.isFunction)(t3[o3])) throw (0, r2.error)("Handler must be a Function");
            t3.hookStatus(e3, function(e4) {
              e4[o3].call(e4);
            });
          };
        };
      }, 58682: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.idle = void 0;
        var n2 = o2(20255), r2 = o2(56562), i = o2(40332);
        t2.idle = function() {
          return function(e3, t3) {
            if (!(0, i.isFunction)(e3[t3])) throw (0, i.error)("Handler must be a Function");
            e3.hookStatus(r2.STATUSES.ready, function(e4) {
              var o3 = e4.async, r3 = e4[t3];
              e4[t3] = function() {
                for (var t4 = [], i2 = 0; arguments.length > i2; i2++) t4[i2] = arguments[i2];
                return o3.requestIdleCallback(r3.bind.apply(r3, n2.__spreadArray([e4], n2.__read(t4), false)));
              };
            });
          };
        };
      }, 43441: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.autobind = void 0;
        var n2 = o2(20255);
        n2.__exportStar(o2(32358), t2), n2.__exportStar(o2(11441), t2), n2.__exportStar(o2(55773), t2), n2.__exportStar(o2(58682), t2), n2.__exportStar(o2(64522), t2), n2.__exportStar(o2(91627), t2), n2.__exportStar(o2(31418), t2), n2.__exportStar(o2(67587), t2), n2.__exportStar(o2(46163), t2), n2.__exportStar(o2(70669), t2);
        var r2 = o2(70631);
        Object.defineProperty(t2, "autobind", { enumerable: true, get: function() {
          return r2.default;
        } });
      }, 91627: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.nonenumerable = void 0, t2.nonenumerable = function(e3, t3) {
          false !== (Object.getOwnPropertyDescriptor(e3, t3) || {}).enumerable && Object.defineProperty(e3, t3, { enumerable: false, set: function(e4) {
            Object.defineProperty(this, t3, { enumerable: false, writable: true, value: e4 });
          } });
        };
      }, 31418: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.persistent = void 0;
        var n2 = o2(56562), r2 = o2(96574);
        t2.persistent = function(e3, t3) {
          e3.hookStatus(n2.STATUSES.ready, function(e4) {
            var o3 = (0, r2.isViewObject)(e4) ? e4 : e4.jodit, n3 = "".concat(o3.options.namespace).concat(e4.componentName, "_prop_").concat(t3), i = e4[t3];
            Object.defineProperty(e4, t3, { get: function() {
              var e5;
              return null !== (e5 = o3.storage.get(n3)) && void 0 !== e5 ? e5 : i;
            }, set: function(e5) {
              o3.storage.set(n3, e5);
            } });
          });
        };
      }, 67587: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.wait = void 0;
        var n2 = o2(20255), r2 = o2(40332), i = o2(56562);
        t2.wait = function(e3) {
          return function(t3, o3) {
            if (!(0, r2.isFunction)(t3[o3])) throw (0, r2.error)("Handler must be a Function");
            t3.hookStatus(i.STATUSES.ready, function(t4) {
              var r3 = t4.async, i2 = t4[o3], a = 0;
              Object.defineProperty(t4, o3, { configurable: true, value: function o4() {
                for (var s = [], l = 0; arguments.length > l; l++) s[l] = arguments[l];
                r3.clearTimeout(a), e3(t4) ? i2.apply(t4, s) : a = r3.setTimeout(function() {
                  return o4.apply(void 0, n2.__spreadArray([], n2.__read(s), false));
                }, 10);
              } });
            });
          };
        };
      }, 46163: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.watch = t2.getPropertyDescriptor = void 0;
        var n2 = o2(20255), r2 = o2(42096), i = o2(79736), a = o2(96574), s = o2(88418), l = o2(29411), c = o2(14556), u = o2(56964);
        function d(e3, t3) {
          var o3;
          do {
            o3 = Object.getOwnPropertyDescriptor(e3, t3), e3 = Object.getPrototypeOf(e3);
          } while (!o3 && e3);
          return o3;
        }
        function p(e3, t3) {
          return function(o3, p2) {
            if (!(0, r2.isFunction)(o3[p2])) throw (0, u.error)("Handler must be a Function");
            var f = function(l2) {
              var u2 = function(e4) {
                for (var t4, o4 = [], r3 = 1; arguments.length > r3; r3++) o4[r3 - 1] = arguments[r3];
                if (!l2.isInDestruct) return (t4 = l2)[p2].apply(t4, n2.__spreadArray([e4], n2.__read(o4), false));
              };
              (0, c.splitArray)(e3).forEach(function(e4) {
                if (/:/.test(e4)) {
                  var c2 = n2.__read(e4.split(":"), 2), p3 = c2[0], f2 = c2[1], h = t3, m = (0, a.isViewObject)(l2) ? l2 : l2.jodit;
                  return p3.length && (h = l2.get(p3)), (0, r2.isFunction)(h) && (h = h(l2)), m.events.on(h || l2, f2, u2), h || m.events.on(f2, u2), void l2.hookStatus("beforeDestruct", function() {
                    m.events.off(h || l2, f2, u2).off(f2, u2);
                  });
                }
                var v = e4.split("."), g = n2.__read(v, 1)[0], y = v.slice(1), _ = l2[g];
                (0, i.isPlainObject)(_) && (0, s.observable)(_).on("change.".concat(y.join(".")), u2);
                var b = d(o3, g);
                Object.defineProperty(l2, g, { configurable: true, set: function(e5) {
                  var t4 = _;
                  t4 !== e5 && (_ = e5, b && b.set && b.set.call(l2, e5), (0, i.isPlainObject)(_) && (_ = (0, s.observable)(_)).on("change.".concat(y.join(".")), u2), u2(g, t4, _));
                }, get: function() {
                  return b && b.get ? b.get.call(l2) : _;
                } });
              });
            };
            (0, r2.isFunction)(o3.hookStatus) ? o3.hookStatus(l.STATUSES.ready, f) : f(o3);
          };
        }
        t2.getPropertyDescriptor = d, t2.watch = p, t2.default = p;
      }, 24263: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Dom = void 0;
        var n2 = o2(20255), r2 = o2(86893), i = o2(10172), a = o2(12557), s = o2(19035), l = o2(76502), c = o2(37204), u = o2(86893), d = function() {
          function e3() {
          }
          return e3.detach = function(e4) {
            for (; e4.firstChild; ) e4.removeChild(e4.firstChild);
          }, e3.wrapInline = function(t3, o3, n3) {
            var r3, a2 = t3, s2 = t3;
            n3.s.save();
            var l2 = false;
            do {
              l2 = false, (r3 = a2.previousSibling) && !e3.isBlock(r3) && (l2 = true, a2 = r3);
            } while (l2);
            do {
              l2 = false, (r3 = s2.nextSibling) && !e3.isBlock(r3) && (l2 = true, s2 = r3);
            } while (l2);
            var c2 = (0, i.isString)(o3) ? n3.createInside.element(o3) : o3;
            a2.parentNode && a2.parentNode.insertBefore(c2, a2);
            for (var u2 = a2; u2 && (u2 = a2.nextSibling, c2.appendChild(a2), a2 !== s2 && u2); ) a2 = u2;
            return n3.s.restore(), c2;
          }, e3.wrap = function(t3, o3, n3) {
            var r3 = (0, i.isString)(o3) ? n3.element(o3) : o3;
            if (e3.isNode(t3)) {
              if (!t3.parentNode) throw (0, l.error)("Element should be in DOM");
              t3.parentNode.insertBefore(r3, t3), r3.appendChild(t3);
            } else {
              var a2 = t3.extractContents();
              t3.insertNode(r3), r3.appendChild(a2);
            }
            return r3;
          }, e3.unwrap = function(t3) {
            var o3 = t3.parentNode;
            if (o3) {
              for (; t3.firstChild; ) o3.insertBefore(t3.firstChild, t3);
              e3.safeRemove(t3);
            }
          }, e3.between = function(e4, t3, o3) {
            for (var n3 = e4; n3 && n3 !== t3 && (e4 === n3 || !o3(n3)); ) {
              var r3 = n3.firstChild || n3.nextSibling;
              if (!r3) {
                for (; n3 && !n3.nextSibling; ) n3 = n3.parentNode;
                r3 = null == n3 ? void 0 : n3.nextSibling;
              }
              n3 = r3;
            }
          }, e3.replace = function(t3, o3, n3, r3, s2) {
            void 0 === r3 && (r3 = false), void 0 === s2 && (s2 = false), (0, i.isHTML)(o3) && (o3 = n3.fromHTML(o3));
            var l2 = (0, i.isString)(o3) ? n3.element(o3) : o3;
            if (!s2) for (; t3.firstChild; ) l2.appendChild(t3.firstChild);
            return r3 && e3.isElement(t3) && e3.isElement(l2) && (0, a.toArray)(t3.attributes).forEach(function(e4) {
              l2.setAttribute(e4.name, e4.value);
            }), t3.parentNode && t3.parentNode.replaceChild(l2, t3), l2;
          }, e3.isEmptyTextNode = function(t3) {
            return e3.isText(t3) && (!t3.nodeValue || 0 === t3.nodeValue.replace(r2.INVISIBLE_SPACE_REG_EXP(), "").trim().length);
          }, e3.isEmptyContent = function(t3) {
            return e3.each(t3, function(t4) {
              return e3.isEmptyTextNode(t4);
            });
          }, e3.isContentEditable = function(t3, o3) {
            return e3.isNode(t3) && !e3.closest(t3, function(t4) {
              return e3.isElement(t4) && "false" === t4.getAttribute("contenteditable");
            }, o3);
          }, e3.isEmpty = function(t3, o3) {
            if (void 0 === o3 && (o3 = u.NO_EMPTY_TAGS), !t3) return true;
            var n3;
            n3 = (0, i.isFunction)(o3) ? o3 : function(e4) {
              return o3.has(e4.nodeName.toLowerCase());
            };
            var r3 = function(e4) {
              return null == e4.nodeValue || 0 === (0, s.trim)(e4.nodeValue).length;
            };
            return e3.isText(t3) ? r3(t3) : !(e3.isElement(t3) && n3(t3)) && e3.each(t3, function(t4) {
              if (e3.isText(t4) && !r3(t4) || e3.isElement(t4) && n3(t4)) return false;
            });
          }, e3.isNode = function(e4) {
            return Boolean(e4 && (0, i.isString)(e4.nodeName) && "number" == typeof e4.nodeType && e4.childNodes && (0, i.isFunction)(e4.appendChild));
          }, e3.isCell = function(t3) {
            return e3.isNode(t3) && /^(td|th)$/i.test(t3.nodeName);
          }, e3.isImage = function(t3) {
            return e3.isNode(t3) && /^(img|svg|picture|canvas)$/i.test(t3.nodeName);
          }, e3.isBlock = function(t3) {
            return !(0, i.isVoid)(t3) && "object" == typeof t3 && e3.isNode(t3) && r2.IS_BLOCK.test(t3.nodeName);
          }, e3.isText = function(e4) {
            return Boolean(e4 && e4.nodeType === Node.TEXT_NODE);
          }, e3.isElement = function(t3) {
            var o3;
            if (!e3.isNode(t3)) return false;
            var n3 = null === (o3 = t3.ownerDocument) || void 0 === o3 ? void 0 : o3.defaultView;
            return Boolean(n3 && t3.nodeType === Node.ELEMENT_NODE);
          }, e3.isFragment = function(t3) {
            var o3;
            if (!e3.isNode(t3)) return false;
            var n3 = null === (o3 = t3.ownerDocument) || void 0 === o3 ? void 0 : o3.defaultView;
            return Boolean(n3 && t3.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
          }, e3.isHTMLElement = function(t3) {
            var o3;
            if (!e3.isNode(t3)) return false;
            var n3 = null === (o3 = t3.ownerDocument) || void 0 === o3 ? void 0 : o3.defaultView;
            return Boolean(n3 && t3 instanceof n3.HTMLElement);
          }, e3.isInlineBlock = function(t3) {
            return e3.isElement(t3) && !/^(BR|HR)$/i.test(t3.tagName) && -1 !== ["inline", "inline-block"].indexOf((0, l.css)(t3, "display").toString());
          }, e3.canSplitBlock = function(t3) {
            return !(0, i.isVoid)(t3) && e3.isHTMLElement(t3) && e3.isBlock(t3) && !/^(TD|TH|CAPTION|FORM)$/.test(t3.nodeName) && void 0 !== t3.style && !/^(fixed|absolute)/i.test(t3.style.position);
          }, e3.last = function(e4, t3) {
            var o3 = null == e4 ? void 0 : e4.lastChild;
            if (!o3) return null;
            do {
              if (t3(o3)) return o3;
              var n3 = o3.lastChild;
              if (n3 || (n3 = o3.previousSibling), !n3 && o3.parentNode !== e4) {
                do {
                  o3 = o3.parentNode;
                } while (o3 && !(null == o3 ? void 0 : o3.previousSibling) && o3.parentNode !== e4);
                n3 = null == o3 ? void 0 : o3.previousSibling;
              }
              o3 = n3;
            } while (o3);
            return null;
          }, e3.prev = function(t3, o3, n3, r3) {
            return void 0 === r3 && (r3 = true), e3.find(t3, o3, n3, false, r3);
          }, e3.next = function(t3, o3, n3, r3) {
            return void 0 === r3 && (r3 = true), e3.find(t3, o3, n3, true, r3);
          }, e3.prevWithClass = function(t3, o3) {
            return e3.prev(t3, function(t4) {
              return e3.isElement(t4) && t4.classList.contains(o3);
            }, t3.parentNode);
          }, e3.nextWithClass = function(t3, o3) {
            return e3.next(t3, function(t4) {
              return e3.isElement(t4) && t4.classList.contains(o3);
            }, t3.parentNode);
          }, e3.find = function(e4, t3, o3, n3, r3) {
            void 0 === n3 && (n3 = true), void 0 === r3 && (r3 = true);
            for (var i2 = this.nextGen(e4, o3, n3, r3), a2 = i2.next(); !a2.done; ) {
              if (t3(a2.value)) return a2.value;
              a2 = i2.next();
            }
            return null;
          }, e3.nextGen = function(e4, t3, o3, r3) {
            var i2, a2, s2;
            return void 0 === o3 && (o3 = true), void 0 === r3 && (r3 = true), n2.__generator(this, function(l2) {
              switch (l2.label) {
                case 0:
                  i2 = [], a2 = e4, l2.label = 1;
                case 1:
                  for (s2 = o3 ? a2.nextSibling : a2.previousSibling; s2; ) i2.unshift(s2), s2 = o3 ? s2.nextSibling : s2.previousSibling;
                  return [5, n2.__values(this.runInStack(e4, i2, o3, r3))];
                case 2:
                  l2.sent(), a2 = a2.parentNode, l2.label = 3;
                case 3:
                  if (a2 && a2 !== t3) return [3, 1];
                  l2.label = 4;
                case 4:
                  return [2, null];
              }
            });
          }, e3.each = function(e4, t3, o3) {
            void 0 === o3 && (o3 = true);
            for (var n3 = this.eachGen(e4, o3), r3 = n3.next(); !r3.done; ) {
              if (false === t3(r3.value)) return false;
              r3 = n3.next();
            }
            return true;
          }, e3.eachGen = function(e4, t3) {
            return void 0 === t3 && (t3 = true), this.runInStack(e4, [e4], t3);
          }, e3.runInStack = function(e4, t3, o3, r3) {
            var i2, a2;
            return void 0 === r3 && (r3 = true), n2.__generator(this, function(n3) {
              switch (n3.label) {
                case 0:
                  if (!t3.length) return [3, 3];
                  if (i2 = t3.pop(), r3) for (a2 = o3 ? i2.lastChild : i2.firstChild; a2; ) t3.push(a2), a2 = o3 ? a2.previousSibling : a2.nextSibling;
                  return e4 === i2 ? [3, 2] : [4, i2];
                case 1:
                  n3.sent(), n3.label = 2;
                case 2:
                  return [3, 0];
                case 3:
                  return [2];
              }
            });
          }, e3.findWithCurrent = function(t3, o3, n3, r3, i2) {
            void 0 === r3 && (r3 = "nextSibling"), void 0 === i2 && (i2 = "firstChild");
            var a2 = t3;
            do {
              if (o3(a2)) return a2 || null;
              if (i2 && a2 && a2[i2]) {
                var s2 = e3.findWithCurrent(a2[i2], o3, a2, r3, i2);
                if (s2) return s2;
              }
              for (; a2 && !a2[r3] && a2 !== n3; ) a2 = a2.parentNode;
              a2 && a2[r3] && a2 !== n3 && (a2 = a2[r3]);
            } while (a2 && a2 !== n3);
            return null;
          }, e3.findSibling = function(t3, o3, n3) {
            void 0 === o3 && (o3 = true), void 0 === n3 && (n3 = function(t4) {
              return !e3.isEmptyTextNode(t4);
            });
            for (var r3 = e3.sibling(t3, o3); r3 && !n3(r3); ) r3 = e3.sibling(r3, o3);
            return r3 && n3(r3) ? r3 : null;
          }, e3.findNotEmptySibling = function(t3, o3) {
            return e3.findSibling(t3, o3, function(t4) {
              var o4;
              return !e3.isEmptyTextNode(t4) && Boolean(!e3.isText(t4) || (null === (o4 = t4.nodeValue) || void 0 === o4 ? void 0 : o4.length) && (0, s.trim)(t4.nodeValue));
            });
          }, e3.findNotEmptyNeighbor = function(t3, o3, n3) {
            return (0, l.call)(o3 ? e3.prev : e3.next, t3, function(t4) {
              return Boolean(t4 && (!e3.isText(t4) || (0, s.trim)((null == t4 ? void 0 : t4.nodeValue) || "").length));
            }, n3);
          }, e3.sibling = function(e4, t3) {
            return t3 ? e4.previousSibling : e4.nextSibling;
          }, e3.up = function(e4, t3, o3, n3) {
            void 0 === n3 && (n3 = false);
            var r3 = e4;
            if (!r3) return null;
            do {
              if (t3(r3)) return r3;
              if (r3 === o3 || !r3.parentNode) break;
              r3 = r3.parentNode;
            } while (r3 && r3 !== o3);
            return r3 === o3 && n3 && t3(r3) ? r3 : null;
          }, e3.closest = function(t3, o3, n3) {
            var r3, a2 = function(e4) {
              return e4.toLowerCase();
            };
            if ((0, i.isFunction)(o3)) r3 = o3;
            else if ((0, i.isArray)(o3)) {
              var s2 = new Set(o3.map(a2));
              r3 = function(e4) {
                return Boolean(e4 && s2.has(a2(e4.nodeName)));
              };
            } else r3 = function(e4) {
              return Boolean(e4 && a2(o3) === a2(e4.nodeName));
            };
            return e3.up(t3, r3, n3);
          }, e3.furthest = function(e4, t3, o3) {
            for (var n3 = null, r3 = null == e4 ? void 0 : e4.parentElement; r3 && r3 !== o3; ) t3(r3) && (n3 = r3), r3 = null == r3 ? void 0 : r3.parentElement;
            return n3;
          }, e3.appendChildFirst = function(e4, t3) {
            var o3 = e4.firstChild;
            o3 ? o3 !== t3 && e4.insertBefore(t3, o3) : e4.appendChild(t3);
          }, e3.after = function(e4, t3) {
            var o3 = e4.parentNode;
            o3 && (o3.lastChild === e4 ? o3.appendChild(t3) : o3.insertBefore(t3, e4.nextSibling));
          }, e3.before = function(e4, t3) {
            var o3 = e4.parentNode;
            o3 && o3.insertBefore(t3, e4);
          }, e3.prepend = function(e4, t3) {
            e4.insertBefore(t3, e4.firstChild);
          }, e3.append = function(e4, t3) {
            var o3 = this;
            (0, i.isArray)(t3) ? t3.forEach(function(t4) {
              o3.append(e4, t4);
            }) : e4.appendChild(t3);
          }, e3.moveContent = function(t3, o3, n3, r3) {
            void 0 === n3 && (n3 = false), void 0 === r3 && (r3 = function() {
              return true;
            });
            var i2 = (t3.ownerDocument || document).createDocumentFragment();
            (0, a.toArray)(t3.childNodes).filter(function(t4) {
              return !!r3(t4) || (e3.safeRemove(t4), false);
            }).forEach(function(e4) {
              i2.appendChild(e4);
            }), n3 && o3.firstChild ? o3.insertBefore(i2, o3.firstChild) : o3.appendChild(i2);
          }, e3.isOrContains = function(e4, t3, o3) {
            return void 0 === o3 && (o3 = false), e4 === t3 ? !o3 : Boolean(t3 && e4 && this.up(t3, function(t4) {
              return t4 === e4;
            }, e4, true));
          }, e3.safeRemove = function() {
            for (var t3 = [], o3 = 0; arguments.length > o3; o3++) t3[o3] = arguments[o3];
            t3.forEach(function(t4) {
              return e3.isNode(t4) && t4.parentNode && t4.parentNode.removeChild(t4);
            });
          }, e3.safeInsertNode = function(t3, o3) {
            t3.collapsed || t3.deleteContents(), t3.insertNode(o3), t3.setStartBefore(o3), t3.collapse(true), [o3.nextSibling, o3.previousSibling].forEach(function(t4) {
              return e3.isText(t4) && !t4.nodeValue && e3.safeRemove(t4);
            });
          }, e3.hide = function(e4) {
            e4 && ((0, l.dataBind)(e4, "__old_display", e4.style.display), e4.style.display = "none");
          }, e3.show = function(e4) {
            if (e4) {
              var t3 = (0, l.dataBind)(e4, "__old_display");
              "none" === e4.style.display && (e4.style.display = t3 || "");
            }
          }, e3.isTag = function(e4, t3) {
            if (!this.isElement(e4)) return false;
            var o3 = e4.tagName.toLowerCase(), n3 = e4.tagName.toUpperCase();
            if (t3 instanceof Set) return t3.has(o3) || t3.has(n3);
            for (var r3 = (0, a.asArray)(t3).map(function(e5) {
              return String(e5).toLowerCase();
            }), i2 = 0; r3.length > i2; i2 += 1) if (o3 === r3[i2] || n3 === r3[i2]) return true;
            return false;
          }, e3.markTemporary = function(e4, t3) {
            return t3 && (0, l.attr)(e4, t3), (0, l.attr)(e4, u.TEMP_ATTR, true), e4;
          }, e3.isTemporary = function(t3) {
            return !!e3.isElement(t3) && ((0, c.isMarker)(t3) || "true" === (0, l.attr)(t3, u.TEMP_ATTR));
          }, e3.replaceTemporaryFromString = function(e4) {
            return e4.replace(/<([a-z]+)[^>]+data-jodit-temp[^>]+>(.+?)<\/\1>/gi, "$2");
          }, e3.temporaryList = function(e4) {
            return (0, l.$$)("[".concat(u.TEMP_ATTR, "]"), e4);
          }, e3;
        }();
        t2.Dom = d;
      }, 64968: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(24263), t2), n2.__exportStar(o2(33841), t2);
      }, 33841: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.LazyWalker = void 0;
        var n2 = o2(20255), r2 = o2(73852), i = o2(43441), a = o2(24263), s = function(e3) {
          function t3(t4, o3) {
            void 0 === o3 && (o3 = {});
            var n3 = e3.call(this) || this;
            return n3.async = t4, n3.options = o3, n3.workNodes = null, n3.hadAffect = false, n3.isWorked = false, n3.isFinished = false, n3.idleId = 0, n3;
          }
          return n2.__extends(t3, e3), t3.prototype.setWork = function(e4) {
            return this.isWorked && this.break(), this.workNodes = a.Dom.eachGen(e4, !this.options.reverse), this.isFinished = false, this.startIdleRequest(), this;
          }, t3.prototype.startIdleRequest = function() {
            var e4;
            this.idleId = this.async.requestIdleCallback(this.workPerform, { timeout: null !== (e4 = this.options.timeout) && void 0 !== e4 ? e4 : 10 });
          }, t3.prototype.break = function(e4) {
            this.isWorked && (this.stop(), this.emit("break", e4));
          }, t3.prototype.end = function() {
            this.isWorked && (this.stop(), this.emit("end", this.hadAffect), this.hadAffect = false);
          }, t3.prototype.stop = function() {
            this.isWorked = false, this.isFinished = true, this.workNodes = null, this.async.cancelIdleCallback(this.idleId);
          }, t3.prototype.destruct = function() {
            e3.prototype.destruct.call(this), this.stop();
          }, t3.prototype.workPerform = function(e4) {
            var t4;
            if (this.workNodes) {
              this.isWorked = true;
              for (var o3 = 0, n3 = null !== (t4 = this.options.timeoutChunkSize) && void 0 !== t4 ? t4 : 50; !this.isFinished && (e4.timeRemaining() > 0 || e4.didTimeout && n3 >= o3); ) {
                var r3 = this.workNodes.next();
                if (o3 += 1, this.visitNode(r3.value) && (this.hadAffect = true), r3.done) return void this.end();
              }
            } else this.end();
            this.isFinished || this.startIdleRequest();
          }, t3.prototype.visitNode = function(e4) {
            var t4;
            return !(!e4 || void 0 !== this.options.whatToShow && e4.nodeType !== this.options.whatToShow) && null !== (t4 = this.emit("visit", e4)) && void 0 !== t4 && t4;
          }, n2.__decorate([i.autobind], t3.prototype, "workPerform", null), t3;
        }(r2.Eventify);
        t2.LazyWalker = s;
      }, 3808: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.EventEmitter = void 0;
        var n2 = o2(20255), r2 = o2(83611), i = o2(24421), a = o2(42096), s = o2(49781), l = o2(56964), c = o2(14556), u = function() {
          function e3(e4) {
            var t3 = this;
            this.__mutedEvents = /* @__PURE__ */ new Set(), this.__key = "__JoditEventEmitterNamespaces", this.__doc = document, this.__prepareEvent = function(e5) {
              e5.cancelBubble || (e5.composed && (0, a.isFunction)(e5.composedPath) && e5.composedPath()[0] && Object.defineProperty(e5, "target", { value: e5.composedPath()[0], configurable: true, enumerable: true }), e5.type.match(/^touch/) && e5.changedTouches && e5.changedTouches.length && ["clientX", "clientY", "pageX", "pageY"].forEach(function(t4) {
                Object.defineProperty(e5, t4, { value: e5.changedTouches[0][t4], configurable: true, enumerable: true });
              }), e5.originalEvent || (e5.originalEvent = e5), "paste" === e5.type && void 0 === e5.clipboardData && t3.__doc.defaultView.clipboardData && Object.defineProperty(e5, "clipboardData", { get: function() {
                return t3.__doc.defaultView.clipboardData;
              }, configurable: true, enumerable: true }));
            }, this.currents = [], this.__stopped = [], this.__isDestructed = false, e4 && (this.__doc = e4), this.__key += (/* @__PURE__ */ new Date()).getTime();
          }
          return e3.prototype.mute = function(e4) {
            return this.__mutedEvents.add(null != e4 ? e4 : "*"), this;
          }, e3.prototype.isMuted = function(e4) {
            return !(!e4 || !this.__mutedEvents.has(e4)) || this.__mutedEvents.has("*");
          }, e3.prototype.unmute = function(e4) {
            return this.__mutedEvents.delete(null != e4 ? e4 : "*"), this;
          }, e3.prototype.__eachEvent = function(e4, t3) {
            var o3 = this;
            (0, c.splitArray)(e4).map(function(e5) {
              return e5.trim();
            }).forEach(function(e5) {
              var n3 = e5.split(".");
              t3.call(o3, n3[0], n3[1] || r2.defaultNameSpace);
            });
          }, e3.prototype.__getStore = function(e4) {
            if (!e4) throw (0, l.error)("Need subject");
            if (void 0 === e4[this.__key]) {
              var t3 = new r2.EventHandlersStore();
              Object.defineProperty(e4, this.__key, { enumerable: false, configurable: true, writable: true, value: t3 });
            }
            return e4[this.__key];
          }, e3.prototype.__removeStoreFromSubject = function(e4) {
            void 0 !== e4[this.__key] && Object.defineProperty(e4, this.__key, { enumerable: false, configurable: true, writable: true, value: void 0 });
          }, e3.prototype.__triggerNativeEvent = function(e4, t3) {
            var o3 = this.__doc.createEvent("HTMLEvents");
            (0, i.isString)(t3) ? o3.initEvent(t3, true, true) : (o3.initEvent(t3.type, t3.bubbles, t3.cancelable), ["screenX", "screenY", "clientX", "clientY", "target", "srcElement", "currentTarget", "timeStamp", "which", "keyCode"].forEach(function(e5) {
              Object.defineProperty(o3, e5, { value: t3[e5], enumerable: true });
            }), Object.defineProperty(o3, "originalEvent", { value: t3, enumerable: true })), e4.dispatchEvent(o3);
          }, Object.defineProperty(e3.prototype, "current", { get: function() {
            return this.currents[this.currents.length - 1];
          }, enumerable: false, configurable: true }), e3.prototype.on = function(e4, t3, o3, r3) {
            var c2, u2, d, p, f = this;
            if ((0, i.isString)(e4) || (0, i.isStringArray)(e4) ? (c2 = this, u2 = e4, d = t3, p = o3) : (c2 = e4, u2 = t3, d = o3, p = r3), !(0, i.isString)(u2) && !(0, i.isStringArray)(u2) || 0 === u2.length) throw (0, l.error)("Need events names");
            if (!(0, a.isFunction)(d)) throw (0, l.error)("Need event handler");
            if ((0, s.isArray)(c2)) return c2.forEach(function(e5) {
              f.on(e5, u2, d, p);
            }), this;
            var h = c2, m = this.__getStore(h), v = (0, a.isFunction)(h.addEventListener), g = this, y = function(e5) {
              for (var t4 = [], o4 = 1; arguments.length > o4; o4++) t4[o4 - 1] = arguments[o4];
              if (!g.isMuted(e5)) return d && d.call.apply(d, n2.__spreadArray([this], n2.__read(t4), false));
            };
            return v && (y = function(e5) {
              if (!g.isMuted(e5.type)) return g.__prepareEvent(e5), d && false === d.call(this, e5) ? (e5.preventDefault(), e5.stopImmediatePropagation(), false) : void 0;
            }), this.__eachEvent(u2, function(e5, t4) {
              if (0 === e5.length) throw (0, l.error)("Need event name");
              if (false === m.indexOf(e5, t4, d) && (m.set(e5, t4, { event: e5, originalCallback: d, syntheticCallback: y }, null == p ? void 0 : p.top), v)) {
                var o4 = !!["touchstart", "touchend", "scroll", "mousewheel", "mousemove", "touchmove"].includes(e5) && { passive: true };
                h.addEventListener(e5, y, o4);
              }
            }), this;
          }, e3.prototype.one = function(e4, t3, o3, r3) {
            var a2, s2, l2, c2, u2 = this;
            (0, i.isString)(e4) || (0, i.isStringArray)(e4) ? (a2 = this, s2 = e4, l2 = t3, c2 = o3) : (a2 = e4, s2 = t3, l2 = o3, c2 = r3);
            var d = function() {
              for (var e5 = [], t4 = 0; arguments.length > t4; t4++) e5[t4] = arguments[t4];
              return u2.off(a2, s2, d), l2.apply(void 0, n2.__spreadArray([], n2.__read(e5), false));
            };
            return this.on(a2, s2, d, c2), this;
          }, e3.prototype.off = function(e4, t3, o3) {
            var n3, l2, c2, u2 = this;
            if ((0, i.isString)(e4) || (0, i.isStringArray)(e4) ? (n3 = this, l2 = e4, c2 = t3) : (n3 = e4, l2 = t3, c2 = o3), (0, s.isArray)(n3)) return n3.forEach(function(e5) {
              u2.off(e5, l2, c2);
            }), this;
            var d = n3, p = this.__getStore(d);
            if (!(0, i.isString)(l2) && !(0, i.isStringArray)(l2) || 0 === l2.length) return p.namespaces().forEach(function(e5) {
              u2.off(d, "." + e5);
            }), this.__removeStoreFromSubject(d), this;
            var f = (0, a.isFunction)(d.removeEventListener), h = function(e5) {
              f && d.removeEventListener(e5.event, e5.syntheticCallback, false);
            }, m = function(e5, t4) {
              if ("" !== e5) {
                var o4 = p.get(e5, t4);
                if (o4 && o4.length) if ((0, a.isFunction)(c2)) {
                  var n4 = p.indexOf(e5, t4, c2);
                  false !== n4 && (h(o4[n4]), o4.splice(n4, 1), o4.length || p.clearEvents(t4, e5));
                } else o4.forEach(h), o4.length = 0, p.clearEvents(t4, e5);
              } else p.events(t4).forEach(function(e6) {
                "" !== e6 && m(e6, t4);
              });
            };
            return this.__eachEvent(l2, function(e5, t4) {
              t4 === r2.defaultNameSpace ? p.namespaces().forEach(function(t5) {
                m(e5, t5);
              }) : m(e5, t4);
            }), p.isEmpty() && this.__removeStoreFromSubject(d), this;
          }, e3.prototype.stopPropagation = function(e4, t3) {
            var o3 = this, n3 = (0, i.isString)(e4) ? this : e4, a2 = (0, i.isString)(e4) ? e4 : t3;
            if ("string" != typeof a2) throw (0, l.error)("Need event names");
            var s2 = this.__getStore(n3);
            this.__eachEvent(a2, function(e5, t4) {
              var i2 = s2.get(e5, t4);
              i2 && o3.__stopped.push(i2), t4 === r2.defaultNameSpace && s2.namespaces(true).forEach(function(t5) {
                return o3.stopPropagation(n3, e5 + "." + t5);
              });
            });
          }, e3.prototype.__removeStop = function(e4) {
            if (e4) {
              var t3 = this.__stopped.indexOf(e4);
              -1 !== t3 && this.__stopped.splice(0, t3 + 1);
            }
          }, e3.prototype.__isStopped = function(e4) {
            return void 0 !== e4 && -1 !== this.__stopped.indexOf(e4);
          }, e3.prototype.fire = function(e4, t3) {
            for (var o3, s2, c2 = this, u2 = [], d = 2; arguments.length > d; d++) u2[d - 2] = arguments[d];
            var p = (0, i.isString)(e4) ? this : e4, f = (0, i.isString)(e4) ? e4 : t3, h = (0, i.isString)(e4) ? n2.__spreadArray([t3], n2.__read(u2), false) : u2, m = (0, a.isFunction)(p.dispatchEvent);
            if (!m && !(0, i.isString)(f)) throw (0, l.error)("Need events names");
            var v = this.__getStore(p);
            return !(0, i.isString)(f) && m ? this.__triggerNativeEvent(p, t3) : this.__eachEvent(f, function(e5, t4) {
              if (m) c2.__triggerNativeEvent(p, e5);
              else {
                var i2 = v.get(e5, t4);
                if (i2) try {
                  n2.__spreadArray([], n2.__read(i2), false).every(function(t5) {
                    var r3;
                    return !c2.__isStopped(i2) && (c2.currents.push(e5), s2 = (r3 = t5.syntheticCallback).call.apply(r3, n2.__spreadArray([p, e5], n2.__read(h), false)), c2.currents.pop(), void 0 !== s2 && (o3 = s2), true);
                  });
                } finally {
                  c2.__removeStop(i2);
                }
                t4 !== r2.defaultNameSpace || m || v.namespaces().filter(function(e6) {
                  return e6 !== t4;
                }).forEach(function(t5) {
                  var r3 = c2.fire.apply(c2, n2.__spreadArray([p, e5 + "." + t5], n2.__read(h), false));
                  void 0 !== r3 && (o3 = r3);
                });
              }
            }), o3;
          }, e3.prototype.destruct = function() {
            this.__isDestructed && (this.__isDestructed = true, this.off(this), this.__getStore(this).clear(), this.__removeStoreFromSubject(this));
          }, e3;
        }();
        t2.EventEmitter = u;
      }, 73852: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Eventify = void 0;
        var n2 = o2(20255), r2 = function() {
          function e3() {
            this.__map = /* @__PURE__ */ new Map();
          }
          return e3.prototype.on = function(e4, t3) {
            var o3;
            return this.__map.has(e4) || this.__map.set(e4, /* @__PURE__ */ new Set()), null === (o3 = this.__map.get(e4)) || void 0 === o3 || o3.add(t3), this;
          }, e3.prototype.off = function(e4, t3) {
            var o3;
            return this.__map.has(e4) && (null === (o3 = this.__map.get(e4)) || void 0 === o3 || o3.delete(t3)), this;
          }, e3.prototype.destruct = function() {
            this.__map.clear();
          }, e3.prototype.emit = function(e4) {
            for (var t3, o3, r3 = [], i = 1; arguments.length > i; i++) r3[i - 1] = arguments[i];
            return this.__map.has(e4) && (null === (t3 = this.__map.get(e4)) || void 0 === t3 || t3.forEach(function(e5) {
              o3 = e5.apply(void 0, n2.__spreadArray([], n2.__read(r3), false));
            })), o3;
          }, e3;
        }();
        t2.Eventify = r2;
      }, 55395: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(3808), t2), n2.__exportStar(o2(73852), t2), n2.__exportStar(o2(88418), t2), n2.__exportStar(o2(83611), t2);
      }, 88418: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.observable = void 0;
        var n2 = o2(20255), r2 = o2(49781), i = o2(32756), a = o2(79736), s = o2(46163), l = Symbol("observable-object");
        function c(e3) {
          return void 0 !== e3[l];
        }
        t2.observable = function(e3) {
          if (c(e3)) return e3;
          var t3 = {}, o3 = {}, u = function(t4, n3) {
            return (0, r2.isArray)(t4) ? (t4.map(function(e4) {
              return u(e4, n3);
            }), e3) : (o3[t4] || (o3[t4] = []), o3[t4].push(n3), e3);
          }, d = function(i2) {
            for (var a2 = [], s2 = 1; arguments.length > s2; s2++) a2[s2 - 1] = arguments[s2];
            if ((0, r2.isArray)(i2)) i2.map(function(e4) {
              return d.apply(void 0, n2.__spreadArray([e4], n2.__read(a2), false));
            });
            else try {
              !t3[i2] && o3[i2] && (t3[i2] = true, o3[i2].forEach(function(t4) {
                return t4.call.apply(t4, n2.__spreadArray([e3], n2.__read(a2), false));
              }));
            } finally {
              t3[i2] = false;
            }
          }, p = function(t4, o4) {
            void 0 === o4 && (o4 = []);
            var r3 = {};
            c(t4) || (Object.defineProperty(t4, l, { enumerable: false, value: true }), Object.keys(t4).forEach(function(l2) {
              var c2 = l2, u2 = o4.concat(c2).filter(function(e4) {
                return e4.length;
              });
              r3[c2] = t4[c2];
              var f = (0, s.getPropertyDescriptor)(t4, c2);
              Object.defineProperty(t4, c2, { set: function(t5) {
                var o5 = r3[c2];
                if (!(0, i.isFastEqual)(r3[c2], t5)) {
                  d(["beforeChange", "beforeChange.".concat(u2.join("."))], c2, t5), (0, a.isPlainObject)(t5) && p(t5, u2), f && f.set ? f.set.call(e3, t5) : r3[c2] = t5;
                  var s2 = [];
                  d(n2.__spreadArray(["change"], n2.__read(u2.reduce(function(e4, t6) {
                    return s2.push(t6), e4.push("change.".concat(s2.join("."))), e4;
                  }, [])), false), u2.join("."), o5, (null == t5 ? void 0 : t5.valueOf) ? t5.valueOf() : t5);
                }
              }, get: function() {
                return f && f.get ? f.get.call(e3) : r3[c2];
              }, enumerable: true, configurable: true }), (0, a.isPlainObject)(r3[c2]) && p(r3[c2], u2);
            }), Object.defineProperty(e3, "on", { value: u }));
          };
          return p(e3), e3;
        };
      }, 83611: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.EventHandlersStore = t2.defaultNameSpace = void 0, o2(52378);
        var n2 = o2(1853);
        t2.defaultNameSpace = "JoditEventDefaultNamespace";
        var r2 = function() {
          function e3() {
            this.__store = /* @__PURE__ */ new Map();
          }
          return e3.prototype.get = function(e4, t3) {
            if (this.__store.has(t3)) return this.__store.get(t3)[e4];
          }, e3.prototype.indexOf = function(e4, t3, o3) {
            var n3 = this.get(e4, t3);
            if (n3) {
              for (var r3 = 0; n3.length > r3; r3 += 1) if (n3[r3].originalCallback === o3) return r3;
            }
            return false;
          }, e3.prototype.namespaces = function(e4) {
            void 0 === e4 && (e4 = false);
            var o3 = (0, n2.toArray)(this.__store.keys());
            return e4 ? o3.filter(function(e5) {
              return e5 !== t2.defaultNameSpace;
            }) : o3;
          }, e3.prototype.events = function(e4) {
            var t3 = this.__store.get(e4);
            return t3 ? Object.keys(t3) : [];
          }, e3.prototype.set = function(e4, t3, o3, n3) {
            void 0 === n3 && (n3 = false);
            var r3 = this.__store.get(t3);
            r3 || this.__store.set(t3, r3 = {}), void 0 === r3[e4] && (r3[e4] = []), n3 ? r3[e4].unshift(o3) : r3[e4].push(o3);
          }, e3.prototype.clear = function() {
            this.__store.clear();
          }, e3.prototype.clearEvents = function(e4, t3) {
            var o3 = this.__store.get(e4);
            o3 && o3[t3] && (delete o3[t3], Object.keys(o3).length || this.__store.delete(e4));
          }, e3.prototype.isEmpty = function() {
            return 0 === this.__store.size;
          }, e3;
        }();
        t2.EventHandlersStore = r2;
      }, 17332: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.eventEmitter = t2.getContainer = t2.extendLang = t2.modules = t2.pluginSystem = t2.uniqueUid = t2.instances = void 0;
        var n2 = o2(44540), r2 = o2(64968), i = o2(55395), a = o2(77892), s = o2(96574), l = o2(87247), c = o2(11278), u = o2(86893);
        t2.instances = {};
        var d = 1, p = /* @__PURE__ */ new Set();
        t2.uniqueUid = function() {
          function e3() {
            return d += 10 * (Math.random() + 1), Math.round(d).toString(16);
          }
          for (var t3 = e3(); p.has(t3); ) t3 = e3();
          return p.add(t3), t3;
        }, t2.pluginSystem = new n2.PluginSystem(), t2.modules = {}, t2.extendLang = function(e3) {
          Object.keys(e3).forEach(function(t3) {
            u.lang[t3] ? Object.assign(u.lang[t3], e3[t3]) : u.lang[t3] = e3[t3];
          });
        };
        var f = /* @__PURE__ */ new WeakMap();
        t2.getContainer = function(e3, t3, o3, n3) {
          void 0 === o3 && (o3 = "div"), void 0 === n3 && (n3 = false);
          var i2 = t3 ? (0, l.getClassName)(t3.prototype) : "jodit-utils", u2 = f.get(e3) || {}, d2 = i2 + o3, p2 = (0, s.isViewObject)(e3) ? e3 : e3.j;
          if (!u2[d2]) {
            var h = p2.c, m = (0, a.isJoditObject)(e3) && e3.o.shadowRoot ? e3.o.shadowRoot : e3.od.body;
            if (n3 && (0, a.isJoditObject)(e3) && e3.od !== e3.ed) {
              h = e3.createInside;
              var v = "style" === o3 ? e3.ed.head : e3.ed.body;
              m = (0, a.isJoditObject)(e3) && e3.o.shadowRoot ? e3.o.shadowRoot : v;
            }
            var g = h.element(o3, { className: "jodit jodit-".concat((0, c.kebabCase)(i2), "-container jodit-box") });
            g.classList.add("jodit_theme_".concat(p2.o.theme || "default")), m.appendChild(g), u2[d2] = g, e3.hookStatus("beforeDestruct", function() {
              r2.Dom.safeRemove(g), delete u2[d2], Object.keys(u2).length && f.delete(e3);
            }), f.set(e3, u2);
          }
          return u2[d2].classList.remove("jodit_theme_default", "jodit_theme_dark"), u2[d2].classList.add("jodit_theme_".concat(p2.o.theme || "default")), u2[d2];
        }, t2.eventEmitter = new i.EventEmitter();
      }, 34578: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.asArray = void 0;
        var n2 = o2(49781);
        t2.asArray = function(e3) {
          return (0, n2.isArray)(e3) ? e3 : [e3];
        };
      }, 12557: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.toArray = t2.splitArray = t2.asArray = void 0;
        var n2 = o2(34578);
        Object.defineProperty(t2, "asArray", { enumerable: true, get: function() {
          return n2.asArray;
        } });
        var r2 = o2(14556);
        Object.defineProperty(t2, "splitArray", { enumerable: true, get: function() {
          return r2.splitArray;
        } });
        var i = o2(1853);
        Object.defineProperty(t2, "toArray", { enumerable: true, get: function() {
          return i.toArray;
        } });
      }, 14556: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.splitArray = void 0, t2.splitArray = function(e3) {
          return Array.isArray(e3) ? e3 : e3.split(/[,\s]+/);
        };
      }, 1853: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.toArray = void 0;
        var n2 = o2(80861), r2 = o2(28069);
        t2.toArray = function() {
          for (var e3, t3 = [], o3 = 0; arguments.length > o3; o3++) t3[o3] = arguments[o3];
          var i = (0, r2.isNativeFunction)(Array.from) ? Array.from : null !== (e3 = (0, n2.reset)("Array.from")) && void 0 !== e3 ? e3 : Array.from;
          return i.apply(Array, t3);
        };
      }, 4696: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(20255).__exportStar(o2(27512), t2);
      }, 27512: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.clearTimeout = t2.setTimeout = void 0;
        var n2 = o2(20255);
        t2.setTimeout = function(e3, t3) {
          for (var o3 = [], r2 = 2; arguments.length > r2; r2++) o3[r2 - 2] = arguments[r2];
          return t3 ? window.setTimeout.apply(window, n2.__spreadArray([e3, t3], n2.__read(o3), false)) : (e3.call.apply(e3, n2.__spreadArray([null], n2.__read(o3), false)), 0);
        }, t2.clearTimeout = function(e3) {
          window.clearTimeout(e3);
        };
      }, 31553: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.hasBrowserColorPicker = void 0, t2.hasBrowserColorPicker = function() {
          var e3 = true;
          try {
            var t3 = document.createElement("input");
            t3.type = "color", t3.value = "!", e3 = "color" === t3.type && "!" !== t3.value;
          } catch (t4) {
            e3 = false;
          }
          return e3;
        };
      }, 10172: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(31553), t2), n2.__exportStar(o2(49781), t2), n2.__exportStar(o2(67749), t2), n2.__exportStar(o2(32756), t2), n2.__exportStar(o2(42096), t2), n2.__exportStar(o2(66869), t2), n2.__exportStar(o2(72543), t2), n2.__exportStar(o2(33156), t2), n2.__exportStar(o2(93578), t2), n2.__exportStar(o2(77892), t2), n2.__exportStar(o2(96574), t2), n2.__exportStar(o2(60280), t2), n2.__exportStar(o2(28069), t2), n2.__exportStar(o2(61817), t2), n2.__exportStar(o2(57649), t2), n2.__exportStar(o2(79736), t2), n2.__exportStar(o2(26335), t2), n2.__exportStar(o2(24421), t2), n2.__exportStar(o2(64350), t2), n2.__exportStar(o2(19179), t2), n2.__exportStar(o2(24021), t2), n2.__exportStar(o2(85994), t2), n2.__exportStar(o2(37204), t2);
      }, 49781: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isArray = void 0, t2.isArray = function(e3) {
          return Array.isArray(e3);
        };
      }, 67749: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isBoolean = void 0, t2.isBoolean = function(e3) {
          return "boolean" == typeof e3;
        };
      }, 32756: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isFastEqual = t2.isEqual = void 0;
        var n2 = o2(42554);
        t2.isEqual = function(e3, t3) {
          return e3 === t3 || (0, n2.stringify)(e3) === (0, n2.stringify)(t3);
        }, t2.isFastEqual = function(e3, t3) {
          return e3 === t3;
        };
      }, 42096: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isFunction = void 0, t2.isFunction = function(e3) {
          return "function" == typeof e3;
        };
      }, 72543: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isHtmlFromWord = void 0, t2.isHtmlFromWord = function(e3) {
          return -1 !== e3.search(/<meta.*?Microsoft Excel\s[\d].*?>/) || -1 !== e3.search(/<meta.*?Microsoft Word\s[\d].*?>/) || -1 !== e3.search(/style="[^"]*mso-/) && -1 !== e3.search(/<font/);
        };
      }, 66869: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isHTML = void 0;
        var n2 = o2(24421);
        t2.isHTML = function(e3) {
          return (0, n2.isString)(e3) && /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(e3.replace(/[\r\n]/g, ""));
        };
      }, 33156: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.hasContainer = t2.isDestructable = t2.isInitable = void 0;
        var n2 = o2(42096), r2 = o2(24263), i = o2(24021);
        t2.isInitable = function(e3) {
          return !(0, i.isVoid)(e3) && (0, n2.isFunction)(e3.init);
        }, t2.isDestructable = function(e3) {
          return !(0, i.isVoid)(e3) && (0, n2.isFunction)(e3.destruct);
        }, t2.hasContainer = function(e3) {
          return !(0, i.isVoid)(e3) && r2.Dom.isElement(e3.container);
        };
      }, 93578: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isInt = void 0;
        var n2 = o2(57649), r2 = o2(24421);
        t2.isInt = function(e3) {
          return (0, r2.isString)(e3) && (0, n2.isNumeric)(e3) && (e3 = parseFloat(e3)), "number" == typeof e3 && Number.isFinite(e3) && !(e3 % 1);
        };
      }, 77892: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isJoditObject = void 0;
        var n2 = o2(42096);
        t2.isJoditObject = function(e3) {
          return Boolean(e3 && e3 instanceof Object && (0, n2.isFunction)(e3.constructor) && ("undefined" != typeof Jodit && e3 instanceof Jodit || e3.isJodit));
        };
      }, 60280: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isLicense = void 0;
        var n2 = o2(24421);
        t2.isLicense = function(e3) {
          return (0, n2.isString)(e3) && 23 === e3.length && /^[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}$/i.test(e3);
        };
      }, 37204: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isMarker = void 0;
        var n2 = o2(24263), r2 = o2(86893);
        t2.isMarker = function(e3) {
          return n2.Dom.isNode(e3) && n2.Dom.isTag(e3, "span") && e3.hasAttribute("data-" + r2.MARKER_CLASS);
        };
      }, 28069: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isNativeFunction = void 0, t2.isNativeFunction = function(e3) {
          return Boolean(e3) && "function" === (typeof e3).toLowerCase() && (e3 === Function.prototype || /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code]\s*}\s*$/i.test(String(e3)));
        };
      }, 61817: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isNumber = void 0, t2.isNumber = function(e3) {
          return "number" == typeof e3 && !isNaN(e3) && isFinite(e3);
        };
      }, 57649: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isNumeric = void 0;
        var n2 = o2(24421);
        t2.isNumeric = function(e3) {
          if ((0, n2.isString)(e3)) {
            if (!e3.match(/^([+-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/)) return false;
            e3 = parseFloat(e3);
          }
          return "number" == typeof e3 && !isNaN(e3) && isFinite(e3);
        };
      }, 79736: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isPlainObject = void 0;
        var n2 = o2(85994);
        t2.isPlainObject = function(e3) {
          return !(!e3 || "object" != typeof e3 || e3.nodeType || (0, n2.isWindow)(e3) || e3.constructor && !{}.hasOwnProperty.call(e3.constructor.prototype, "isPrototypeOf"));
        };
      }, 26335: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isPromise = void 0, t2.isPromise = function(e3) {
          return e3 && "function" == typeof e3.then;
        };
      }, 24421: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isStringArray = t2.isString = void 0;
        var n2 = o2(49781);
        function r2(e3) {
          return "string" == typeof e3;
        }
        t2.isString = r2, t2.isStringArray = function(e3) {
          return (0, n2.isArray)(e3) && r2(e3[0]);
        };
      }, 64350: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isURL = void 0, t2.isURL = function(e3) {
          if (e3.includes(" ")) return false;
          if ("undefined" != typeof URL) try {
            var t3 = new URL(e3);
            return ["https:", "http:", "ftp:", "file:", "rtmp:"].includes(t3.protocol);
          } catch (e4) {
            return false;
          }
          var o2 = document.createElement("a");
          return o2.href = e3, Boolean(o2.hostname);
        };
      }, 19179: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isValidName = void 0, t2.isValidName = function(e3) {
          return !!e3.length && !/[^0-9A-Za-zа-яА-ЯЁё\w\-_.]/.test(e3);
        };
      }, 96574: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isViewObject = void 0;
        var n2 = o2(42096);
        t2.isViewObject = function(e3) {
          return Boolean(e3 && e3 instanceof Object && (0, n2.isFunction)(e3.constructor) && e3.isView);
        };
      }, 24021: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isVoid = void 0, t2.isVoid = function(e3) {
          return null == e3;
        };
      }, 85994: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isWindow = void 0, t2.isWindow = function(e3) {
          return null != e3 && e3 === e3.window;
        };
      }, 13203: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.colorToHex = void 0, t2.colorToHex = function(e3) {
          if ("rgba(0, 0, 0, 0)" === e3 || "" === e3) return false;
          if (!e3) return "#000000";
          if ("#" === e3.substr(0, 1)) return e3;
          var t3 = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(e3) || /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(e3);
          if (!t3) return "#000000";
          for (var o2 = parseInt(t3[2], 10), n2 = parseInt(t3[3], 10), r2 = (parseInt(t3[4], 10) | n2 << 8 | o2 << 16).toString(16).toUpperCase(); 6 > r2.length; ) r2 = "0" + r2;
          return t3[1] + "#" + r2;
        };
      }, 61354: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(20255).__exportStar(o2(13203), t2);
      }, 66546: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.applyStyles = void 0;
        var n2 = o2(24263), r2 = o2(76502), i = o2(33941);
        function a(e3) {
          return e3.replace(/mso-[a-z-]+:[\s]*[^;]+;/gi, "").replace(/mso-[a-z-]+:[\s]*[^";']+$/gi, "").replace(/border[a-z-]*:[\s]*[^;]+;/gi, "").replace(/([0-9.]+)(pt|cm)/gi, function(e4, t3, o3) {
            switch (o3.toLowerCase()) {
              case "pt":
                return (1.328 * parseFloat(t3)).toFixed(0) + "px";
              case "cm":
                return (0.02645833 * parseFloat(t3)).toFixed(0) + "px";
            }
            return e4;
          });
        }
        t2.applyStyles = function(e3) {
          if (-1 === e3.indexOf("<html ")) return e3;
          e3 = (e3 = e3.substring(e3.indexOf("<html "), e3.length)).substring(0, e3.lastIndexOf("</html>") + "</html>".length);
          var t3 = document.createElement("iframe");
          t3.style.display = "none", document.body.appendChild(t3);
          var o3 = "";
          try {
            var s = t3.contentDocument || (t3.contentWindow ? t3.contentWindow.document : null);
            if (s) {
              s.open(), s.write(e3), s.close();
              try {
                for (var l = function(e4) {
                  for (var t4 = s.styleSheets[e4].cssRules, o4 = function(e5) {
                    if ("" === t4[e5].selectorText) return "continue";
                    (0, r2.$$)(t4[e5].selectorText, s.body).forEach(function(o5) {
                      o5.style.cssText = a(t4[e5].style.cssText + ";" + o5.style.cssText);
                    });
                  }, n3 = 0; t4.length > n3; n3 += 1) o4(n3);
                }, c = 0; s.styleSheets.length > c; c += 1) l(c);
              } catch (e4) {
              }
              n2.Dom.each(s.body, function(e4) {
                if (n2.Dom.isElement(e4)) {
                  var t4 = e4, o4 = t4.getAttribute("style");
                  o4 && (t4.style.cssText = a(o4)), t4.hasAttribute("style") && !t4.getAttribute("style") && t4.removeAttribute("style");
                }
              }), o3 = s.firstChild ? (0, i.trim)(s.body.innerHTML) : "";
            }
          } catch (e4) {
          } finally {
            n2.Dom.safeRemove(t3);
          }
          return o3 && (e3 = o3), (0, i.trim)(e3.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, ""));
        };
      }, 33316: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.cleanFromWord = void 0;
        var n2 = o2(24263), r2 = o2(33941), i = o2(1853);
        t2.cleanFromWord = function(e3) {
          -1 !== e3.indexOf("<html ") && (e3 = (e3 = e3.substring(e3.indexOf("<html "), e3.length)).substring(0, e3.lastIndexOf("</html>") + "</html>".length));
          var t3 = "";
          try {
            var o3 = document.createElement("div");
            o3.innerHTML = e3;
            var a = [];
            o3.firstChild && n2.Dom.each(o3, function(e4) {
              if (e4) switch (e4.nodeType) {
                case Node.ELEMENT_NODE:
                  switch (e4.nodeName) {
                    case "STYLE":
                    case "LINK":
                    case "META":
                      a.push(e4);
                      break;
                    case "W:SDT":
                    case "W:SDTPR":
                    case "FONT":
                      n2.Dom.unwrap(e4);
                      break;
                    default:
                      (0, i.toArray)(e4.attributes).forEach(function(t4) {
                        -1 === ["src", "href", "rel", "content"].indexOf(t4.name.toLowerCase()) && e4.removeAttribute(t4.name);
                      });
                  }
                  break;
                case Node.TEXT_NODE:
                  break;
                default:
                  a.push(e4);
              }
            }), n2.Dom.safeRemove.apply(null, a), t3 = o3.innerHTML;
          } catch (e4) {
          }
          return t3 && (e3 = t3), (e3 = e3.split(/(\n)/).filter(r2.trim).join("\n")).replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "");
        };
      }, 46639: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.htmlspecialchars = void 0, t2.htmlspecialchars = function(e3) {
          var t3 = document.createElement("div");
          return t3.textContent = e3, t3.innerHTML;
        };
      }, 13098: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(66546), t2), n2.__exportStar(o2(33316), t2), n2.__exportStar(o2(46639), t2), n2.__exportStar(o2(11336), t2), n2.__exportStar(o2(67128), t2), n2.__exportStar(o2(86645), t2);
      }, 86645: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.nl2br = void 0, t2.nl2br = function(e3) {
          return e3.replace(/\r\n|\r|\n/g, "<br/>");
        };
      }, 67128: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.sanitizeHTMLElement = t2.safeHTML = void 0;
        var n2 = o2(76502), r2 = o2(24263);
        function i(e3, t3) {
          var o3 = void 0 === t3 ? { safeJavaScriptLink: true, removeOnError: true } : t3, i2 = o3.safeJavaScriptLink, a = o3.removeOnError;
          if (!r2.Dom.isElement(e3)) return false;
          var s = false;
          a && e3.hasAttribute("onerror") && ((0, n2.attr)(e3, "onerror", null), s = true);
          var l = e3.getAttribute("href");
          return i2 && l && 0 === l.trim().indexOf("javascript") && ((0, n2.attr)(e3, "href", location.protocol + "//" + l), s = true), s;
        }
        t2.safeHTML = function(e3, t3) {
          (r2.Dom.isElement(e3) || r2.Dom.isFragment(e3)) && (t3.removeOnError && (i(e3), (0, n2.$$)("[onerror]", e3).forEach(function(e4) {
            return i(e4, t3);
          })), t3.safeJavaScriptLink && (i(e3), (0, n2.$$)('a[href^="javascript"]', e3).forEach(function(e4) {
            return i(e4, t3);
          })));
        }, t2.sanitizeHTMLElement = i;
      }, 11336: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.stripTags = void 0;
        var n2 = o2(24421), r2 = o2(76502), i = o2(33941), a = o2(24263), s = /* @__PURE__ */ new Set(["div", "p", "br", "h1", "h2", "h3", "h4", "h5", "h6", "hr"]), l = /* @__PURE__ */ new Set(["script", "style"]);
        t2.stripTags = function e3(t3, o3, c) {
          void 0 === o3 && (o3 = document), void 0 === c && (c = null);
          var u = o3.createElement("div");
          return (0, n2.isString)(t3) ? u.innerHTML = t3 : u.appendChild(t3), (0, r2.$$)("*", u).forEach(function(t4) {
            var n3 = t4.parentNode;
            if (n3) {
              if (c && a.Dom.isTag(t4, c)) {
                var r3 = t4.nodeName.toLowerCase(), i2 = a.Dom.isTag(t4, ["br", "hr", "input"]) ? "%%%jodit-single-".concat(r3, "%%%") : "%%%jodit-".concat(r3, "%%%").concat(e3(t4.innerHTML, o3, c), "%%%/jodit-").concat(r3, "%%%");
                return a.Dom.before(t4, o3.createTextNode(i2)), void a.Dom.safeRemove(t4);
              }
              if (a.Dom.isTag(t4, l)) a.Dom.safeRemove(t4);
              else if (a.Dom.isTag(t4, s)) {
                var u2 = t4.nextSibling;
                a.Dom.isText(u2) && /^\s/.test(u2.nodeValue || "") || u2 && n3.insertBefore(o3.createTextNode(" "), u2);
              }
            }
          }), (0, i.trim)(u.innerText).replace(/%%%(\/)?jodit(-single)?-([\w\n]+)%%%/g, function(e4, t4, o4, n3) {
            return "<".concat(t4 ? "/" : "").concat(n3, ">");
          });
        };
      }, 40332: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(76502), t2), n2.__exportStar(o2(12557), t2), n2.__exportStar(o2(4696), t2), n2.__exportStar(o2(10172), t2), n2.__exportStar(o2(61354), t2), n2.__exportStar(o2(13098), t2), n2.__exportStar(o2(89693), t2), n2.__exportStar(o2(90954), t2), n2.__exportStar(o2(19035), t2);
      }, 89693: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(48926), t2), n2.__exportStar(o2(78648), t2), n2.__exportStar(o2(74504), t2), n2.__exportStar(o2(50870), t2), n2.__exportStar(o2(76787), t2), n2.__exportStar(o2(93251), t2), n2.__exportStar(o2(91518), t2), n2.__exportStar(o2(49353), t2), n2.__exportStar(o2(64274), t2);
      }, 64274: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeColor = void 0;
        var n2 = o2(61354), r2 = o2(19035);
        t2.normalizeColor = function(e3) {
          var t3 = ["#"], o3 = (0, n2.colorToHex)(e3);
          if (!o3) return false;
          if (3 === (o3 = (o3 = (0, r2.trim)(o3.toUpperCase())).substr(1)).length) {
            for (var i = 0; 3 > i; i += 1) t3.push(o3[i]), t3.push(o3[i]);
            return t3.join("");
          }
          return o3.length > 6 && (o3 = o3.substr(0, 6)), "#" + o3;
        };
      }, 49353: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeCssValue = t2.normalizeCssNumericValue = t2.NUMBER_FIELDS_REG = void 0;
        var n2 = o2(57649), r2 = o2(11278), i = o2(13203), a = o2(24021);
        t2.NUMBER_FIELDS_REG = /^(left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size)/i, t2.normalizeCssNumericValue = function(e3, o3) {
          return !(0, a.isVoid)(o3) && t2.NUMBER_FIELDS_REG.test(e3) && (0, n2.isNumeric)(o3.toString()) ? parseInt(o3.toString(), 10) + "px" : o3;
        }, t2.normalizeCssValue = function(e3, t3) {
          if ("font-weight" === (0, r2.kebabCase)(e3)) {
            switch (t3.toString().toLowerCase()) {
              case "700":
              case "bold":
                return 700;
              case "400":
              case "normal":
                return 400;
              case "900":
              case "heavy":
                return 900;
            }
            return (0, n2.isNumeric)(t3) ? Number(t3) : t3;
          }
          return /color/i.test(e3) && /^rgb/i.test(t3.toString()) && (0, i.colorToHex)(t3.toString()) || t3;
        };
      }, 48926: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeKeyAliases = void 0;
        var n2 = o2(33941), r2 = o2(86893);
        t2.normalizeKeyAliases = function(e3) {
          var t3 = {}, o3 = { meta: 1, ctrl: 2, control: 2, alt: 3, shift: 4 };
          return e3.replace(/\+\+/g, "+add").split(/[\s]*\+[\s]*/).map(function(e4) {
            return (0, n2.trim)(e4.toLowerCase());
          }).map(function(e4) {
            return r2.KEY_ALIASES[e4] || e4;
          }).sort(function(e4, t4) {
            return o3[e4] && !o3[t4] ? -1 : !o3[e4] && o3[t4] ? 1 : o3[e4] && o3[t4] ? o3[e4] - o3[t4] : e4 > t4 ? 1 : -1;
          }).filter(function(e4) {
            return !t3[e4] && "" !== e4 && (t3[e4] = true);
          }).join("+");
        };
      }, 78648: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeLicense = void 0, t2.normalizeLicense = function(e3, t3) {
          void 0 === t3 && (t3 = 8);
          for (var o2 = []; e3.length; ) o2.push(e3.substr(0, t3)), e3 = e3.substr(t3);
          return o2[1] = o2[1].replace(/./g, "*"), o2[2] = o2[2].replace(/./g, "*"), o2.join("-");
        };
      }, 74504: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeNode = void 0;
        var n2 = o2(86893), r2 = o2(24263);
        t2.normalizeNode = function e3(t3) {
          if (t3) {
            if (r2.Dom.isText(t3) && null != t3.nodeValue && t3.parentNode) for (; r2.Dom.isText(t3.nextSibling); ) null != t3.nextSibling.nodeValue && (t3.nodeValue += t3.nextSibling.nodeValue), t3.nodeValue = t3.nodeValue.replace((0, n2.INVISIBLE_SPACE_REG_EXP)(), ""), r2.Dom.safeRemove(t3.nextSibling);
            else e3(t3.firstChild);
            e3(t3.nextSibling);
          }
        };
      }, 50870: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizePath = void 0;
        var n2 = o2(19035);
        t2.normalizePath = function() {
          for (var e3 = [], t3 = 0; arguments.length > t3; t3++) e3[t3] = arguments[t3];
          return e3.filter(function(e4) {
            return (0, n2.trim)(e4).length;
          }).map(function(t4, o3) {
            return t4 = t4.replace(/([^:])[\\/]+/g, "$1/"), o3 && (t4 = t4.replace(/^\//, "")), o3 !== e3.length - 1 && (t4 = t4.replace(/\/$/, "")), t4;
          }).join("/");
        };
      }, 76787: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeRelativePath = void 0, t2.normalizeRelativePath = function(e3) {
          return e3.split("/").reduce(function(e4, t3) {
            switch (t3) {
              case "":
              case ".":
                break;
              case "..":
                e4.pop();
                break;
              default:
                e4.push(t3);
            }
            return e4;
          }, []).join("/") + (e3.endsWith("/") ? "/" : "");
        };
      }, 93251: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeSize = void 0, t2.normalizeSize = function(e3) {
          return /^[0-9]+$/.test(e3.toString()) ? e3 + "px" : e3.toString();
        };
      }, 91518: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeUrl = void 0, t2.normalizeUrl = function() {
          for (var e3 = [], t3 = 0; arguments.length > t3; t3++) e3[t3] = arguments[t3];
          return e3.filter(function(e4) {
            return e4.length;
          }).map(function(e4) {
            return e4.replace(/\/$/, "");
          }).join("/").replace(/([^:])[\\/]+/g, "$1/");
        };
      }, 1684: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getContentWidth = void 0, t2.getContentWidth = function(e3, t3) {
          var o2 = function(e4) {
            return parseInt(e4, 10);
          }, n2 = t3.getComputedStyle(e3);
          return e3.offsetWidth - o2(n2.getPropertyValue("padding-left") || "0") - o2(n2.getPropertyValue("padding-right") || "0");
        };
      }, 73874: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getScrollParent = void 0;
        var n2 = o2(76502), r2 = o2(24263);
        t2.getScrollParent = function e3(t3) {
          if (!t3) return null;
          var o3 = r2.Dom.isHTMLElement(t3), i = o3 && (0, n2.css)(t3, "overflowY");
          return o3 && "visible" !== i && "hidden" !== i && t3.scrollHeight >= t3.clientHeight ? t3 : e3(t3.parentNode) || document.scrollingElement || document.body;
        };
      }, 90954: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(1684), t2), n2.__exportStar(o2(73874), t2), n2.__exportStar(o2(83810), t2), n2.__exportStar(o2(98701), t2), n2.__exportStar(o2(81710), t2), n2.__exportStar(o2(16492), t2);
      }, 83810: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.innerWidth = void 0, t2.innerWidth = function(e3, t3) {
          var o2 = t3.getComputedStyle(e3);
          return e3.clientWidth - (parseFloat(o2.paddingLeft || "0") + parseFloat(o2.paddingRight || "0"));
        };
      }, 16492: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.size = void 0;
        var n2 = o2(10172);
        t2.size = function(e3) {
          return (0, n2.isString)(e3) || (0, n2.isArray)(e3) ? e3.length : (0, n2.isPlainObject)(e3) ? Object.keys(e3).length : 0;
        };
      }, 98701: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.offset = void 0, t2.offset = function(e3, o2, n2, r2) {
          var i;
          void 0 === r2 && (r2 = false);
          try {
            i = e3.getBoundingClientRect();
          } catch (e4) {
            i = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
          }
          var a, s, l = n2.body, c = n2.documentElement || { clientTop: 0, clientLeft: 0, scrollTop: 0, scrollLeft: 0 }, u = n2.defaultView || n2.parentWindow, d = u.pageYOffset || c.scrollTop || l.scrollTop, p = u.pageXOffset || c.scrollLeft || l.scrollLeft, f = c.clientTop || l.clientTop || 0, h = c.clientLeft || l.clientLeft || 0, m = o2.iframe;
          if (!r2 && o2 && o2.options && o2.o.iframe && m) {
            var v = (0, t2.offset)(m, o2, o2.od, true);
            a = i.top + v.top, s = i.left + v.left;
          } else a = i.top + d - f, s = i.left + p - h;
          return { top: Math.round(a), left: Math.round(s), width: i.width, height: i.height };
        };
      }, 81710: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.position = void 0;
        var n2 = o2(77892);
        t2.position = function e3(t3, o3, r2) {
          void 0 === r2 && (r2 = false);
          var i = t3.getBoundingClientRect(), a = i.left, s = i.top;
          if ((0, n2.isJoditObject)(o3) && o3.iframe && o3.ed.body.contains(t3) && !r2) {
            var l = e3(o3.iframe, o3, true);
            a += l.left, s += l.top;
          }
          return { left: Math.round(a), top: Math.round(s), width: Math.round(t3.offsetWidth), height: Math.round(t3.offsetHeight) };
        };
      }, 26596: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.camelCase = void 0, t2.camelCase = function(e3) {
          return e3.replace(/([-_])(.)/g, function(e4, t3, o2) {
            return o2.toUpperCase();
          });
        };
      }, 93163: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.fuzzySearchIndex = void 0;
        var n2 = o2(86893);
        t2.fuzzySearchIndex = function(e3, t3, o3, r2) {
          void 0 === o3 && (o3 = 0), void 0 === r2 && (r2 = 1);
          var i = 0, a = 0, s = -1, l = 0, c = 0;
          for (a = o3; e3.length > i && t3.length > a; ) e3[i].toLowerCase() === t3[a].toLowerCase() ? (i++, l++, c = 0, -1 === s && (s = a)) : i > 0 && (r2 > c || t3[a] === n2.INVISIBLE_SPACE ? (c++, l++) : (i = 0, s = -1, l = 0, c = 0, a--)), a++;
          return i === e3.length ? [s, l] : [-1, 0];
        };
      }, 11625: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.i18n = t2.sprintf = void 0;
        var n2 = o2(93166), r2 = o2(76502), i = o2(24421), a = o2(13449), s = o2(86893);
        t2.sprintf = function(e3, t3) {
          if (!t3 || !t3.length) return e3;
          for (var o3 = /%([sd])/g, n3 = o3.exec(e3), r3 = e3, i2 = 0; n3 && void 0 !== t3[i2]; ) r3 = r3.replace(n3[0], t3[i2].toString()), i2 += 1, n3 = o3.exec(e3);
          return r3;
        }, t2.i18n = function(e3, o3, l) {
          if (!(0, i.isString)(e3)) throw (0, r2.error)("i18n: Need string in first argument");
          if (!e3.length) return e3;
          var c = Boolean(null == l ? void 0 : l.debugLanguage), u = {}, d = function(e4) {
            return o3 && o3.length ? (0, t2.sprintf)(e4, o3) : e4;
          }, p = (0, r2.defaultLanguage)(n2.Config.defaultOptions.language, n2.Config.defaultOptions.language), f = (0, r2.defaultLanguage)(null == l ? void 0 : l.language, p), h = function(t3) {
            if (t3) {
              if ((0, i.isString)(t3[e3])) return d(t3[e3]);
              var o4 = e3.toLowerCase();
              if ((0, i.isString)(t3[o4])) return d(t3[o4]);
              var n3 = (0, a.ucfirst)(e3);
              return (0, i.isString)(t3[n3]) ? d(t3[n3]) : void 0;
            }
          };
          void 0 !== s.lang[f] ? u = s.lang[f] : c || (u = void 0 !== s.lang[p] ? s.lang[p] : s.lang.en);
          var m = null == l ? void 0 : l.i18n;
          if (m && m[f]) {
            var v = h(m[f]);
            if (v) return v;
          }
          return h(u) || (!c && s.lang.en && (0, i.isString)(s.lang.en[e3]) && s.lang.en[e3] ? d(s.lang.en[e3]) : c ? "{" + e3 + "}" : d(e3));
        };
      }, 19035: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(26596), t2), n2.__exportStar(o2(93163), t2), n2.__exportStar(o2(11625), t2), n2.__exportStar(o2(11278), t2), n2.__exportStar(o2(42554), t2), n2.__exportStar(o2(33941), t2), n2.__exportStar(o2(13449), t2);
      }, 11278: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CamelCaseToKebabCase = t2.kebabCase = void 0, t2.kebabCase = function(e3) {
          return e3.replace(/([A-Z])([A-Z])([a-z])/g, "$1-$2$3").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
        }, t2.CamelCaseToKebabCase = function(e3) {
          return e3.replace(/([A-Z])([A-Z])([a-z])/g, "$1-$2$3").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        };
      }, 42554: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.stringify = void 0, t2.stringify = function(e3, t3) {
          if (void 0 === t3 && (t3 = {}), "object" != typeof e3) return String(e3);
          var o2 = new Set(t3.excludeKeys), n2 = /* @__PURE__ */ new WeakMap();
          return JSON.stringify(e3, function(e4, t4) {
            if (!o2.has(e4)) {
              if ("object" == typeof t4 && null != t4) {
                if (n2.get(t4)) return "[refObject]";
                n2.set(t4, true);
              }
              return t4;
            }
          }, t3.prettify);
        };
      }, 33941: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.trimInv = t2.trim = void 0;
        var n2 = o2(86893);
        t2.trim = function(e3) {
          return e3.replace((0, n2.SPACE_REG_EXP_END)(), "").replace((0, n2.SPACE_REG_EXP_START)(), "");
        }, t2.trimInv = function(e3) {
          return e3.replace((0, n2.INVISIBLE_SPACE_REG_EXP_END)(), "").replace((0, n2.INVISIBLE_SPACE_REG_EXP_START)(), "");
        };
      }, 13449: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ucfirst = void 0, t2.ucfirst = function(e3) {
          return e3.length ? e3[0].toUpperCase() + e3.substr(1) : "";
        };
      }, 60303: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.alignElement = t2.clearAlign = t2.hAlignElement = void 0;
        var n2 = o2(64968), r2 = o2(26911);
        function i(e3) {
          n2.Dom.each(e3, function(e4) {
            n2.Dom.isHTMLElement(e4) && e4.style.textAlign && (e4.style.textAlign = "", e4.style.cssText.trim().length || e4.removeAttribute("style"));
          });
        }
        t2.hAlignElement = function(e3, t3) {
          t3 && "normal" !== t3 ? "center" !== t3 ? ((0, r2.css)(e3, "float", t3), (0, r2.clearCenterAlign)(e3)) : (0, r2.css)(e3, { float: "", display: "block", marginLeft: "auto", marginRight: "auto" }) : ((0, r2.css)(e3, "float") && -1 !== ["right", "left"].indexOf((0, r2.css)(e3, "float").toString().toLowerCase()) && (0, r2.css)(e3, "float", ""), (0, r2.clearCenterAlign)(e3));
        }, t2.clearAlign = i, t2.alignElement = function(e3, t3) {
          if (n2.Dom.isNode(t3) && n2.Dom.isElement(t3)) switch (i(t3), e3.toLowerCase()) {
            case "justifyfull":
              t3.style.textAlign = "justify";
              break;
            case "justifyright":
              t3.style.textAlign = "right";
              break;
            case "justifyleft":
              t3.style.textAlign = "left";
              break;
            case "justifycenter":
              t3.style.textAlign = "center";
          }
        };
      }, 62462: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.loadNextStyle = t2.loadNext = t2.appendStyleAsync = t2.appendScriptAsync = t2.appendScript = void 0;
        var n2 = o2(20255), r2 = o2(48240), i = o2(42096), a = o2(24421), s = /* @__PURE__ */ new Map(), l = function(e3) {
          return function(t3, o3) {
            return n2.__awaiter(void 0, void 0, Promise, function() {
              var r3;
              return n2.__generator(this, function(n3) {
                return s.has(o3) ? [2, s.get(o3)] : (r3 = e3(t3, o3), s.set(o3, r3), [2, r3]);
              });
            });
          };
        };
        t2.appendScript = function(e3, t3, o3) {
          var n3 = e3.c.element("script");
          return n3.type = "text/javascript", n3.async = true, (0, i.isFunction)(o3) && !e3.isInDestruct && e3.e.on(n3, "load", o3), n3.src || (n3.src = (0, r2.completeUrl)(t3)), e3.od.body.appendChild(n3), { callback: o3, element: n3 };
        }, t2.appendScriptAsync = l(function(e3, o3) {
          return new Promise(function(n3, r3) {
            var i2 = (0, t2.appendScript)(e3, o3, n3).element;
            !e3.isInDestruct && e3.e.on(i2, "error", r3);
          });
        }), t2.appendStyleAsync = l(function(e3, t3) {
          return new Promise(function(o3, n3) {
            var i2 = e3.c.element("link");
            i2.rel = "stylesheet", i2.media = "all", i2.crossOrigin = "anonymous", !e3.isInDestruct && e3.e.on(i2, "load", function() {
              return o3(i2);
            }).on(i2, "error", n3), i2.href = (0, r2.completeUrl)(t3), e3.o.shadowRoot ? e3.o.shadowRoot.appendChild(i2) : e3.od.body.appendChild(i2);
          });
        }), t2.loadNext = function(e3, o3, n3) {
          return void 0 === n3 && (n3 = 0), (0, a.isString)(o3[n3]) ? (0, t2.appendScriptAsync)(e3, o3[n3]).then(function() {
            return (0, t2.loadNext)(e3, o3, n3 + 1);
          }) : Promise.resolve();
        }, t2.loadNextStyle = function(e3, o3, n3) {
          return void 0 === n3 && (n3 = 0), (0, a.isString)(o3[n3]) ? (0, t2.appendStyleAsync)(e3, o3[n3]).then(function() {
            return (0, t2.loadNextStyle)(e3, o3, n3 + 1);
          }) : Promise.resolve();
        };
      }, 603: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.assert = void 0;
        var n2 = o2(20255), r2 = function(e3) {
          function t3(t4) {
            var o3 = e3.call(this, t4) || this;
            return o3.name = "AssertionError", o3;
          }
          return n2.__extends(t3, e3), t3;
        }(Error);
        t2.assert = function(e3, t3) {
          if (!e3) throw new r2("Assertion failed: ".concat(t3));
        };
      }, 37682: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.browser = void 0, t2.browser = function(e3) {
          var t3 = navigator.userAgent.toLowerCase(), o2 = /(firefox)[\s/]([\w.]+)/.exec(t3) || /(chrome)[\s/]([\w.]+)/.exec(t3) || /(webkit)[\s/]([\w.]+)/.exec(t3) || /(opera)(?:.*version)[\s/]([\w.]+)/.exec(t3) || /(msie)[\s]([\w.]+)/.exec(t3) || /(trident)\/([\w.]+)/.exec(t3) || 0 > t3.indexOf("compatible") || [];
          return "version" === e3 ? o2[2] : "webkit" === e3 ? "chrome" === o2[1] || "webkit" === o2[1] : "ff" === e3 ? "firefox" === o2[1] : "msie" === e3 ? "trident" === o2[1] || "msie" === o2[1] : o2[1] === e3;
        };
      }, 71567: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.buildQuery = void 0;
        var n2 = o2(79736);
        t2.buildQuery = function(e3, o3) {
          var r2 = [], i = encodeURIComponent;
          for (var a in e3) if (Object.prototype.hasOwnProperty.call(e3, a)) {
            var s = o3 ? o3 + "[" + a + "]" : a, l = e3[a];
            r2.push((0, n2.isPlainObject)(l) ? (0, t2.buildQuery)(l, s) : i(s) + "=" + i(l));
          }
          return r2.join("&");
        };
      }, 48240: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.completeUrl = void 0, t2.completeUrl = function(e3) {
          return "file:" === window.location.protocol && /^\/\//.test(e3) && (e3 = "https:" + e3), e3;
        };
      }, 64981: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ConfigFlatten = t2.ConfigProto = void 0;
        var n2 = o2(20255), r2 = o2(7935), i = o2(49781), a = o2(79736), s = o2(24421), l = o2(24021), c = o2(93166), u = o2(67309);
        t2.ConfigProto = function e3(t3, o3, u2) {
          if (void 0 === u2 && (u2 = 0), Object.getPrototypeOf(t3) !== Object.prototype) return t3;
          var d = c.Config.defaultOptions;
          if ((0, s.isString)(t3.preset)) {
            if (void 0 !== d.presets[t3.preset]) {
              var p = d.presets[t3.preset];
              Object.keys(p).forEach(function(e4) {
                (0, l.isVoid)(t3[e4]) && (t3[e4] = p[e4]);
              });
            }
            delete t3.preset;
          }
          var f = {};
          return Object.keys(t3).forEach(function(s2) {
            var l2 = t3[s2], c2 = o3 ? o3[s2] : null;
            f[s2] = (0, a.isPlainObject)(l2) && (0, a.isPlainObject)(c2) && !(0, r2.isAtom)(l2) ? e3(l2, c2, u2 + 1) : 0 !== u2 && (0, i.isArray)(l2) && !(0, r2.isAtom)(l2) && (0, i.isArray)(c2) ? n2.__spreadArray(n2.__spreadArray([], n2.__read(l2), false), n2.__read(c2.slice(l2.length)), false) : l2;
          }), Object.setPrototypeOf(f, o3), f;
        }, t2.ConfigFlatten = function(e3) {
          return (0, u.keys)(e3, false).reduce(function(t3, o3) {
            return t3[o3] = e3[o3], t3;
          }, {});
        };
      }, 42051: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.convertMediaUrlToVideoEmbed = void 0;
        var n2 = o2(64350), r2 = o2(67285);
        t2.convertMediaUrlToVideoEmbed = function(e3, t3, o3) {
          if (void 0 === t3 && (t3 = 400), void 0 === o3 && (o3 = 345), !(0, n2.isURL)(e3)) return e3;
          var i = document.createElement("a"), a = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
          i.href = e3, t3 || (t3 = 400), o3 || (o3 = 345);
          var s = i.protocol || "";
          switch (i.hostname) {
            case "www.vimeo.com":
            case "vimeo.com":
              return a.test(e3) ? e3.replace(a, '<iframe width="' + t3 + '" height="' + o3 + '" src="' + s + '//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>') : e3;
            case "youtube.com":
            case "www.youtube.com":
            case "youtu.be":
            case "www.youtu.be":
              var l = i.search ? (0, r2.parseQuery)(i.search) : { v: i.pathname.substr(1) };
              return l.v ? '<iframe width="' + t3 + '" height="' + o3 + '" src="' + s + "//www.youtube.com/embed/" + l.v + '" frameborder="0" allowfullscreen></iframe>' : e3;
          }
          return e3;
        };
      }, 26911: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.clearCenterAlign = t2.css = void 0;
        var n2 = o2(79736), r2 = o2(67749), i = o2(49353), a = o2(26596), s = o2(11278);
        function l(e3, t3, o3, c) {
          if (void 0 === c && (c = false), (0, r2.isBoolean)(o3) && (c = o3, o3 = void 0), (0, n2.isPlainObject)(t3) || void 0 !== o3) {
            var u = function(e4, t4, o4) {
              void 0 === (o4 = (0, i.normalizeCssNumericValue)(t4, o4)) || null != o4 && l(e4, t4, true) === (0, i.normalizeCssValue)(t4, o4) || (e4.style[t4] = o4);
            };
            if ((0, n2.isPlainObject)(t3)) for (var d = Object.keys(t3), p = 0; d.length > p; p += 1) u(e3, (0, a.camelCase)(d[p]), t3[d[p]]);
            else u(e3, (0, a.camelCase)(t3), o3);
            return "";
          }
          var f = (0, s.kebabCase)(t3), h = e3.ownerDocument || document, m = !!h && (h.defaultView || h.parentWindow), v = e3.style[t3], g = "";
          return void 0 !== v && "" !== v ? g = v : m && !c && (g = m.getComputedStyle(e3).getPropertyValue(f)), i.NUMBER_FIELDS_REG.test(t3) && /^[-+]?[0-9.]+px$/.test(g.toString()) && (g = parseInt(g.toString(), 10)), (0, i.normalizeCssValue)(t3, g);
        }
        t2.css = l, t2.clearCenterAlign = function(e3) {
          "block" === l(e3, "display") && l(e3, "display", "");
          var t3 = e3.style;
          "auto" === t3.marginLeft && "auto" === t3.marginRight && (t3.marginLeft = "", t3.marginRight = "");
        };
      }, 2522: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ctrlKey = void 0, t2.ctrlKey = function(e3) {
          if ("undefined" != typeof navigator && -1 !== navigator.userAgent.indexOf("Mac OS X")) {
            if (e3.metaKey && !e3.altKey) return true;
          } else if (e3.ctrlKey && !e3.altKey) return true;
          return false;
        };
      }, 63122: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.dataBind = void 0;
        var n2 = o2(96574), r2 = /* @__PURE__ */ new WeakMap();
        t2.dataBind = function(e3, t3, o3) {
          var i = r2.get(e3);
          if (!i) {
            r2.set(e3, i = {});
            var a = null;
            (0, n2.isViewObject)(e3.j) && (a = e3.j.e), (0, n2.isViewObject)(e3) && (a = e3.e), a && a.on("beforeDestruct", function() {
              r2.delete(e3);
            });
          }
          return void 0 === o3 ? i[t3] : (i[t3] = o3, o3);
        };
      }, 93351: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.defaultLanguage = void 0;
        var n2 = o2(24421);
        t2.defaultLanguage = function(e3, t3) {
          return void 0 === t3 && (t3 = "en"), "auto" !== e3 && (0, n2.isString)(e3) ? e3 : document.documentElement && document.documentElement.lang ? document.documentElement.lang : navigator.language ? navigator.language.substring(0, 2) : t3;
        };
      }, 41579: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isAbort = t2.abort = t2.options = t2.connection = t2.error = void 0;
        var n2 = o2(45339);
        t2.error = function(e3) {
          return new TypeError(e3);
        }, t2.connection = function(e3) {
          return new n2.ConnectionError(e3);
        }, t2.options = function(e3) {
          return new n2.OptionsError(e3);
        }, t2.abort = function(e3) {
          return new n2.AbortError(e3);
        }, t2.isAbort = function(e3) {
          return e3 instanceof n2.AbortError;
        };
      }, 86768: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.AbortError = void 0;
        var n2 = o2(20255), r2 = function(e3) {
          function t3(o3) {
            var n3 = e3.call(this, o3) || this;
            return Object.setPrototypeOf(n3, t3.prototype), n3;
          }
          return n2.__extends(t3, e3), t3;
        }(Error);
        t2.AbortError = r2;
      }, 43380: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ConnectionError = void 0;
        var n2 = o2(20255), r2 = function(e3) {
          function t3(o3) {
            var n3 = e3.call(this, o3) || this;
            return Object.setPrototypeOf(n3, t3.prototype), n3;
          }
          return n2.__extends(t3, e3), t3;
        }(Error);
        t2.ConnectionError = r2;
      }, 45339: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(86768), t2), n2.__exportStar(o2(43380), t2), n2.__exportStar(o2(47403), t2);
      }, 47403: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.OptionsError = void 0;
        var n2 = o2(20255), r2 = function(e3) {
          function t3(o3) {
            var n3 = e3.call(this, o3) || this;
            return Object.setPrototypeOf(n3, t3.prototype), n3;
          }
          return n2.__extends(t3, e3), t3;
        }(TypeError);
        t2.OptionsError = r2;
      }, 56964: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(41579), t2), n2.__exportStar(o2(45339), t2);
      }, 7935: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.fastClone = t2.markAsAtomic = t2.isAtom = void 0;
        var n2 = o2(42554);
        t2.isAtom = function(e3) {
          return e3 && e3.isAtom;
        }, t2.markAsAtomic = function(e3) {
          return Object.defineProperty(e3, "isAtom", { enumerable: false, value: true, configurable: false }), e3;
        }, t2.fastClone = function(e3) {
          return JSON.parse((0, n2.stringify)(e3));
        };
      }, 87247: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getClassName = t2.keepNames = void 0;
        var n2 = o2(42096);
        t2.keepNames = /* @__PURE__ */ new Map(), t2.getClassName = function(e3) {
          var o3;
          if ((0, n2.isFunction)(e3.className)) return e3.className();
          var r2 = (null === (o3 = e3.constructor) || void 0 === o3 ? void 0 : o3.originalConstructor) || e3.constructor;
          if (t2.keepNames.has(r2)) return t2.keepNames.get(r2);
          if (r2.name) return r2.name;
          var i = new RegExp(/^\s*function\s*(\S*)\s*\(/), a = r2.toString().match(i);
          return a ? a[1] : "";
        };
      }, 69384: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.get = void 0;
        var n2 = o2(20255), r2 = o2(24421), i = o2(24021);
        t2.get = function(e3, t3) {
          var o3, a;
          if (!(0, r2.isString)(e3) || !e3.length) return null;
          var s = e3.split("."), l = t3;
          try {
            try {
              for (var c = n2.__values(s), u = c.next(); !u.done; u = c.next()) {
                var d = u.value;
                if ((0, i.isVoid)(l[d])) return null;
                l = l[d];
              }
            } catch (e4) {
              o3 = { error: e4 };
            } finally {
              try {
                u && !u.done && (a = c.return) && a.call(c);
              } finally {
                if (o3) throw o3.error;
              }
            }
          } catch (e4) {
            return null;
          }
          return (0, i.isVoid)(l) ? null : l;
        };
      }, 6102: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.humanSizeToBytes = void 0, t2.humanSizeToBytes = function(e3) {
          if (/^[0-9.]+$/.test(e3.toString())) return parseFloat(e3);
          var t3 = e3.substr(-2, 2).toUpperCase(), o2 = ["KB", "MB", "GB", "TB"], n2 = parseFloat(e3.substr(0, e3.length - 2));
          return -1 !== o2.indexOf(t3) ? n2 * Math.pow(1024, o2.indexOf(t3) + 1) : parseInt(e3, 10);
        };
      }, 76502: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(60303), t2), n2.__exportStar(o2(62462), t2), n2.__exportStar(o2(52378), t2), n2.__exportStar(o2(37682), t2), n2.__exportStar(o2(71567), t2), n2.__exportStar(o2(48240), t2), n2.__exportStar(o2(64981), t2), n2.__exportStar(o2(42051), t2), n2.__exportStar(o2(26911), t2), n2.__exportStar(o2(2522), t2), n2.__exportStar(o2(63122), t2), n2.__exportStar(o2(93351), t2), n2.__exportStar(o2(56964), t2), n2.__exportStar(o2(7935), t2), n2.__exportStar(o2(69384), t2), n2.__exportStar(o2(87247), t2), n2.__exportStar(o2(6102), t2), n2.__exportStar(o2(47580), t2), n2.__exportStar(o2(67285), t2), n2.__exportStar(o2(21498), t2), n2.__exportStar(o2(80861), t2), n2.__exportStar(o2(9005), t2), n2.__exportStar(o2(54188), t2), n2.__exportStar(o2(21518), t2), n2.__exportStar(o2(37228), t2), n2.__exportStar(o2(67309), t2), n2.__exportStar(o2(22362), t2);
      }, 47580: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.markDeprecated = t2.cns = void 0;
        var n2 = o2(20255);
        t2.cns = console, t2.markDeprecated = function(e3, o3, r2) {
          return void 0 === o3 && (o3 = [""]), void 0 === r2 && (r2 = null), function() {
            for (var i = [], a = 0; arguments.length > a; a++) i[a] = arguments[a];
            return t2.cns.warn('Method "'.concat(o3[0], '" deprecated.') + (o3[1] ? ' Use "'.concat(o3[1], '" instead') : "")), e3.call.apply(e3, n2.__spreadArray([r2], n2.__read(i), false));
          };
        };
      }, 67285: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.parseQuery = void 0, t2.parseQuery = function(e3) {
          for (var t3 = {}, o2 = e3.substring(1).split("&"), n2 = 0; o2.length > n2; n2 += 1) {
            var r2 = o2[n2].split("=");
            t3[decodeURIComponent(r2[0])] = decodeURIComponent(r2[1] || "");
          }
          return t3;
        };
      }, 21498: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.previewBox = void 0;
        var n2 = o2(24421), r2 = o2(24263), i = o2(26911), a = o2(67309), s = o2(54188);
        t2.previewBox = function(e3, t3, o3, l) {
          void 0 === o3 && (o3 = "px"), void 0 === l && (l = null);
          var c = function(e4, t4) {
            var o4 = [];
            try {
              (0, s.$$)("img", e4.editor).forEach(function(n3) {
                var i2 = [(0, a.attr)(n3, "width"), (0, a.attr)(n3, "height"), n3.src];
                (0, a.attr)(n3, { width: n3.offsetWidth + t4, height: n3.offsetHeight + t4 });
                var s2 = e4.createInside.a();
                e4.ed.body.appendChild(s2), s2.href = n3.src, n3.src = s2.href, r2.Dom.safeRemove(s2), o4.push(function() {
                  var e5;
                  n3.src = null !== (e5 = i2[2]) && void 0 !== e5 ? e5 : "", (0, a.attr)(n3, { width: i2[0] || null, height: i2[1] || null });
                });
              });
            } catch (e5) {
              throw o4.forEach(function(e6) {
                return e6();
              }), o4.length = 0, e5;
            }
            return o4;
          }(e3, o3);
          try {
            var u = e3.e.fire("beforePreviewBox", t3, o3);
            if (null != u) return u;
            var d = e3.c.div("jodit__preview-box jodit-context");
            l && l.appendChild(d), (0, i.css)(d, { position: "relative", padding: 16 });
            var p = e3.value || "<div style='position: absolute;left:50%;top:50%;transform: translateX(-50%) translateY(-50%);color:#ccc;'>".concat(e3.i18n("Empty"), "</div>");
            if (e3.iframe) {
              var f = e3.create.element("iframe");
              (0, i.css)(f, { minWidth: 800, minHeight: 600, border: 0 }), d.appendChild(f);
              var h = f.contentWindow;
              if (h && (e3.e.fire("generateDocumentStructure.iframe", h.document, e3), d = h.document.body, "function" == typeof ResizeObserver)) {
                var m = new ResizeObserver(function(e4) {
                  f.style.height = h.document.body.offsetHeight + 20 + "px";
                });
                m.observe(h.document.body), e3.e.on("beforeDestruct", function() {
                  m.unobserve(h.document.body);
                });
              }
            } else (0, i.css)(d, { minWidth: 1024, minHeight: 600, border: 0 });
            var v = function(t4, o4) {
              var i2 = (0, n2.isString)(o4) ? e3.c.div() : o4;
              (0, n2.isString)(o4) && (i2.innerHTML = o4);
              for (var s2 = 0; i2.childNodes.length > s2; s2 += 1) {
                var l2 = i2.childNodes[s2];
                if (r2.Dom.isElement(l2)) {
                  for (var c2 = t4.ownerDocument.createElement(l2.nodeName), u2 = 0; l2.attributes.length > u2; u2 += 1) (0, a.attr)(c2, l2.attributes[u2].nodeName, l2.attributes[u2].nodeValue);
                  0 === l2.childNodes.length || r2.Dom.isTag(l2, ["table"]) ? "SCRIPT" === l2.nodeName ? l2.textContent && (c2.textContent = l2.textContent) : l2.innerHTML && (c2.innerHTML = l2.innerHTML) : v(c2, l2);
                  try {
                    t4.appendChild(c2);
                  } catch (e4) {
                  }
                } else try {
                  t4.appendChild(l2.cloneNode(true));
                } catch (e4) {
                }
              }
            };
            return v(d, p), e3.e.fire("afterPreviewBox", d), d;
          } finally {
            c.forEach(function(e4) {
              return e4();
            });
          }
        };
      }, 80861: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.reset = void 0;
        var n2 = o2(69384), r2 = o2(42096), i = {};
        t2.reset = function(e3) {
          var t3, o3;
          if (!(e3 in i)) {
            var a = document.createElement("iframe");
            try {
              if (a.src = "about:blank", document.body.appendChild(a), !a.contentWindow) return null;
              var s = (0, n2.get)(e3, a.contentWindow), l = (0, n2.get)(e3.split(".").slice(0, -1).join("."), a.contentWindow);
              (0, r2.isFunction)(s) && (i[e3] = s.bind(l));
            } catch (e4) {
            } finally {
              null === (t3 = a.parentNode) || void 0 === t3 || t3.removeChild(a);
            }
          }
          return null !== (o3 = i[e3]) && void 0 !== o3 ? o3 : null;
        };
      }, 9005: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.scrollIntoViewIfNeeded = t2.inView = void 0;
        var n2 = o2(24263);
        t2.inView = function(e3, t3, o3) {
          var n3 = e3.getBoundingClientRect(), r2 = e3, i = n3.top, a = n3.height;
          do {
            if (r2 && r2.parentNode) {
              if ((n3 = (r2 = r2.parentNode).getBoundingClientRect()).bottom < i) return false;
              if (n3.top >= i + a) return false;
            }
          } while (r2 && r2 !== t3 && r2.parentNode);
          return (o3.documentElement && o3.documentElement.clientHeight || 0) >= i;
        }, t2.scrollIntoViewIfNeeded = function(e3, o3, r2) {
          n2.Dom.isHTMLElement(e3) && !(0, t2.inView)(e3, o3, r2) && (o3.clientHeight !== o3.scrollHeight && (o3.scrollTop = e3.offsetTop), (0, t2.inView)(e3, o3, r2) || e3.scrollIntoView());
        };
      }, 54188: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.resolveElement = t2.cssPath = t2.refs = t2.getXPathByElement = t2.$$ = void 0;
        var n2 = o2(86893), r2 = o2(24421), i = o2(76502), a = o2(24263), s = o2(26596), l = o2(1853), c = o2(53929), u = o2(45113), d = 1;
        function p(e3, t3) {
          var o3;
          if (!/:scope/.test(e3) || !n2.IS_IE || t3 && t3.nodeType === Node.DOCUMENT_NODE) o3 = t3.querySelectorAll(e3);
          else {
            var r3 = t3.id, i2 = r3 || "_selector_id_" + String(Math.random()).slice(2) + ++d;
            e3 = e3.replace(/:scope/g, "#" + i2), !r3 && t3.setAttribute("id", i2), o3 = t3.parentNode.querySelectorAll(e3), r3 || t3.removeAttribute("id");
          }
          return [].slice.call(o3);
        }
        t2.$$ = p, t2.getXPathByElement = function(e3, o3) {
          if (!e3 || e3.nodeType !== Node.ELEMENT_NODE) return "";
          if (!e3.parentNode || o3 === e3) return "";
          if (e3.id) return "//*[@id='" + e3.id + "']";
          var n3 = [].filter.call(e3.parentNode.childNodes, function(t3) {
            return t3.nodeName === e3.nodeName;
          });
          return (0, t2.getXPathByElement)(e3.parentNode, o3) + "/" + e3.nodeName.toLowerCase() + (n3.length > 1 ? "[" + ((0, l.toArray)(n3).indexOf(e3) + 1) + "]" : "");
        }, t2.refs = function(e3) {
          return u.Component.isInstanceOf(e3, c.UIElement) && (e3 = e3.container), p("[ref],[data-ref]", e3).reduce(function(e4, t3) {
            var o3 = (0, i.attr)(t3, "-ref");
            return o3 && (0, r2.isString)(o3) && (e4[(0, s.camelCase)(o3)] = t3, e4[o3] = t3), e4;
          }, {});
        }, t2.cssPath = function(e3) {
          if (!a.Dom.isElement(e3)) return null;
          for (var t3 = [], o3 = e3; o3 && o3.nodeType === Node.ELEMENT_NODE; ) {
            var n3 = o3.nodeName.toLowerCase();
            if (o3.id) {
              t3.unshift(n3 += "#" + o3.id);
              break;
            }
            var r3 = o3, i2 = 1;
            do {
              (r3 = r3.previousElementSibling) && r3.nodeName.toLowerCase() === n3 && i2++;
            } while (r3);
            t3.unshift(n3 += ":nth-of-type(" + i2 + ")"), o3 = o3.parentNode;
          }
          return t3.join(" > ");
        }, t2.resolveElement = function(e3, t3) {
          var o3 = e3;
          if ((0, r2.isString)(e3)) try {
            o3 = t3.querySelector(e3);
          } catch (t4) {
            throw (0, i.error)('String "' + e3 + '" should be valid HTML selector');
          }
          if (!o3 || "object" != typeof o3 || !a.Dom.isElement(o3) || !o3.cloneNode) throw (0, i.error)('Element "' + e3 + '" should be string or HTMLElement instance');
          return o3;
        };
      }, 21518: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.set = void 0;
        var n2 = o2(24421), r2 = o2(57649), i = o2(49781), a = o2(79736);
        t2.set = function(e3, t3, o3) {
          if ((0, n2.isString)(e3) && e3.length) {
            for (var s = e3.split("."), l = o3, c = s[0], u = 0; s.length - 1 > u; u += 1) (0, i.isArray)(l[c = s[u]]) || (0, a.isPlainObject)(l[c]) || (l[c] = (0, r2.isNumeric)(s[u + 1]) ? [] : {}), l = l[c];
            l && (l[s[s.length - 1]] = t3);
          }
        };
      }, 37228: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.LimitedStack = void 0;
        var o2 = function() {
          function e3(e4) {
            this.limit = e4, this.stack = [];
          }
          return e3.prototype.push = function(e4) {
            return this.stack.push(e4), this.stack.length > this.limit && this.stack.shift(), this;
          }, e3.prototype.pop = function() {
            return this.stack.pop();
          }, e3.prototype.find = function(e4) {
            return this.stack.find(e4);
          }, e3;
        }();
        t2.LimitedStack = o2;
      }, 67309: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getDataTransfer = t2.memorizeExec = t2.keys = t2.loadImage = t2.callPromise = t2.markOwner = t2.attr = t2.call = void 0;
        var n2 = o2(20255), r2 = o2(42096), i = o2(26335), a = o2(24021), s = o2(79736), l = o2(24421), c = o2(63122), u = o2(26911), d = o2(11278);
        function p(e3, t3, o3) {
          if (!e3 || !(0, r2.isFunction)(e3.getAttribute)) return null;
          if (!(0, l.isString)(t3)) return Object.keys(t3).forEach(function(o4) {
            var n4 = t3[o4];
            (0, s.isPlainObject)(n4) && "style" === o4 ? (0, u.css)(e3, n4) : ("className" === o4 && (o4 = "class"), p(e3, o4, n4));
          }), null;
          var n3 = (0, d.CamelCaseToKebabCase)(t3);
          if (/^-/.test(n3)) {
            var i2 = p(e3, "data".concat(n3));
            if (i2) return i2;
            n3 = n3.substr(1);
          }
          if (void 0 !== o3) {
            if (null != o3) return e3.setAttribute(n3, o3.toString()), o3.toString();
            e3.hasAttribute(n3) && e3.removeAttribute(n3);
          }
          return e3.getAttribute(n3);
        }
        t2.call = function(e3) {
          for (var t3 = [], o3 = 1; arguments.length > o3; o3++) t3[o3 - 1] = arguments[o3];
          return e3.apply(void 0, n2.__spreadArray([], n2.__read(t3), false));
        }, t2.attr = p, t2.markOwner = function(e3, t3) {
          p(t3, "data-editor_id", e3.id), !t3.component && Object.defineProperty(t3, "jodit", { value: e3 });
        }, t2.callPromise = function(e3, t3) {
          return (0, i.isPromise)(e3) ? e3.finally(t3) : t3();
        }, t2.loadImage = function(e3, t3) {
          return t3.async.promise(function(o3, n3) {
            var r3 = new Image(), i2 = function() {
              t3.e.off(r3), null == n3 || n3();
            }, a2 = function() {
              t3.e.off(r3), o3(r3);
            };
            t3.e.one(r3, "load", a2).one(r3, "error", i2).one(r3, "abort", i2), r3.src = e3, r3.complete && a2();
          });
        }, t2.keys = function(e3, t3) {
          if (void 0 === t3 && (t3 = true), t3) return Object.keys(e3);
          var o3 = [];
          for (var n3 in e3) o3.push(n3);
          return o3;
        }, t2.memorizeExec = function(e3, t3, o3, n3) {
          var r3, i2 = o3.control, s2 = "button".concat(i2.command), l2 = null !== (r3 = i2.args && i2.args[0]) && void 0 !== r3 ? r3 : (0, c.dataBind)(e3, s2);
          if ((0, a.isVoid)(l2)) return false;
          (0, c.dataBind)(e3, s2, l2), n3 && (l2 = n3(l2)), e3.execCommand(i2.command, false, null != l2 ? l2 : void 0);
        }, t2.getDataTransfer = function(e3) {
          if (e3.clipboardData) return e3.clipboardData;
          try {
            return e3.dataTransfer || new DataTransfer();
          } catch (e4) {
            return null;
          }
        };
      }, 22362: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.val = void 0, t2.val = function(e3, t3, o2) {
          var n2 = e3.querySelector(t3);
          return n2 ? (o2 && (n2.value = o2), n2.value) : "";
        };
      }, 33286: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.init = t2.initInstance = void 0;
        var n2 = o2(10172), r2 = o2(90338);
        function i(e3, t3, o3, i2, a) {
          var s = o3.requires;
          if ((null == s ? void 0 : s.length) && !s.every(function(e4) {
            return i2.has(e4);
          })) return a[t3] = o3, false;
          if ((0, n2.isInitable)(o3)) try {
            o3.init(e3);
          } catch (e4) {
          }
          return i2.add(t3), delete a[t3], o3.hasStyle && (0, r2.loadStyle)(e3, t3).catch(function(e4) {
          }), true;
        }
        t2.initInstance = function(e3, t3, o3, n3, r3) {
          i(e3, t3, o3, n3, r3) && Object.keys(r3).forEach(function(t4) {
            i(e3, t4, r3[t4], n3, r3);
          });
        }, t2.init = i;
      }, 90338: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.loadExtras = t2.loadStyle = void 0;
        var n2 = o2(20255), r2 = o2(62462), i = o2(11278), a = o2(93498), s = /* @__PURE__ */ new Set();
        function l(e3, t3, o3) {
          return t3 = (0, i.kebabCase)(t3), e3.basePath + "plugins/" + t3 + "/" + t3 + "." + (o3 ? "js" : "css");
        }
        t2.loadStyle = function(e3, t3) {
          return n2.__awaiter(this, void 0, Promise, function() {
            var o3;
            return n2.__generator(this, function(n3) {
              return o3 = l(e3, t3, false), s.has(o3) ? [2] : (s.add(o3), [2, (0, r2.appendStyleAsync)(e3, o3)]);
            });
          });
        }, t2.loadExtras = function(e3, t3, o3, n3) {
          try {
            var i2 = o3.filter(function(t4) {
              return !e3.has((0, a.normalizeName)(t4.name));
            });
            i2.length && function(e4, t4, o4) {
              t4.map(function(t5) {
                var n4 = t5.url || l(e4, t5.name, true);
                return (0, r2.appendScriptAsync)(e4, n4).then(o4).catch(function() {
                  return null;
                });
              });
            }(t3, i2, n3);
          } catch (e4) {
          }
        };
      }, 24342: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.makeInstance = void 0;
        var n2 = o2(10172);
        t2.makeInstance = function(e3, t3) {
          try {
            try {
              return (0, n2.isFunction)(t3) ? new t3(e3) : t3;
            } catch (o3) {
              if ((0, n2.isFunction)(t3) && !t3.prototype) return t3(e3);
            }
          } catch (e4) {
          }
          return null;
        };
      }, 93498: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeName = void 0;
        var n2 = o2(11278);
        t2.normalizeName = function(e3) {
          return (0, n2.kebabCase)(e3).toLowerCase();
        };
      }, 57549: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(44540), t2), n2.__exportStar(o2(85605), t2);
      }, 13573: function() {
      }, 44540: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.PluginSystem = void 0;
        var n2 = o2(20255);
        o2(13573);
        var r2 = o2(10172), i = o2(12557), a = o2(17332), s = o2(90338), l = o2(93498), c = o2(24342), u = o2(33286), d = function() {
          function e3() {
            this.__items = /* @__PURE__ */ new Map();
          }
          return e3.prototype.add = function(e4, t3) {
            this.__items.set((0, l.normalizeName)(e4), t3), a.eventEmitter.fire("plugin:".concat(e4, ":ready"));
          }, e3.prototype.get = function(e4) {
            return this.__items.get((0, l.normalizeName)(e4));
          }, e3.prototype.remove = function(e4) {
            this.__items.delete((0, l.normalizeName)(e4));
          }, e3.prototype.__filter = function(e4) {
            var t3 = [];
            return this.__items.forEach(function(o3, n3) {
              e4 && !e4.has(n3) || t3.push([n3, o3]);
            }), t3;
          }, e3.prototype.__init = function(e4) {
            var t3 = this, o3 = function(e5) {
              return { extrasList: e5.o.extraPlugins.map(function(e6) {
                return (0, r2.isString)(e6) ? { name: e6 } : e6;
              }), disableList: new Set((0, i.splitArray)(e5.o.disablePlugins).map(l.normalizeName)), filter: e5.o.safeMode ? new Set(e5.o.safePluginsList) : null };
            }(e4), a2 = o3.extrasList, d2 = o3.disableList, p = o3.filter, f = /* @__PURE__ */ new Set(), h = {}, m = {};
            e4.__plugins = m;
            var v = function() {
              if (!e4.isInDestruct) {
                var o4 = false;
                t3.__filter(p).forEach(function(t4) {
                  var i2 = n2.__read(t4, 2), a3 = i2[0], s2 = i2[1];
                  if (!(d2.has(a3) || f.has(a3) || h[a3])) {
                    var l2 = null == s2 ? void 0 : s2.requires;
                    if (!(l2 && (0, r2.isArray)(l2) && Boolean(l2.some(function(e5) {
                      return d2.has(e5);
                    })))) {
                      o4 = true;
                      var p2 = (0, c.makeInstance)(e4, s2);
                      if (!p2) return f.add(a3), void delete h[a3];
                      (0, u.initInstance)(e4, a3, p2, f, h), m[a3] = p2;
                    }
                  }
                }), o4 && e4.e.fire("updatePlugins");
              }
            };
            a2 && a2.length || (0, s.loadExtras)(this.__items, e4, a2, v), v(), function(e5, t4) {
              e5.e.on("beforeDestruct", function() {
                Object.keys(t4).forEach(function(o4) {
                  var n3 = t4[o4];
                  (0, r2.isDestructable)(n3) && n3.destruct(e5), delete t4[o4];
                }), delete e5.__plugins;
              });
            }(e4, m);
          }, e3.prototype.wait = function(e4) {
            var t3 = this;
            return new Promise(function(o3) {
              if (t3.get(e4)) return o3();
              var n3 = function() {
                o3(), a.eventEmitter.off("plugin:".concat(e4, ":ready"), n3);
              };
              a.eventEmitter.on("plugin:".concat(e4, ":ready"), n3);
            });
          }, e3;
        }();
        t2.PluginSystem = d;
      }, 85605: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Plugin = void 0;
        var n2 = o2(20255), r2 = o2(56562), i = o2(43441), a = o2(40332), s = function(e3) {
          function t3(t4) {
            var o3 = e3.call(this, t4) || this;
            return o3.requires = [], o3.buttons = [], o3.hasStyle = false, t4.e.on("afterPluginSystemInit", function() {
              var e4;
              (0, a.isJoditObject)(t4) && (null === (e4 = o3.buttons) || void 0 === e4 || e4.forEach(function(e5) {
                t4.registerButton(e5);
              }));
            }).on("afterInit", function() {
              o3.setStatus(r2.STATUSES.ready), o3.afterInit(t4);
            }).on("beforeDestruct", o3.destruct), o3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "";
          }, t3.prototype.init = function(e4) {
          }, t3.prototype.destruct = function() {
            var t4, o3, n3;
            if (this.isReady) {
              this.setStatus(r2.STATUSES.beforeDestruct);
              var i2 = this.j;
              (0, a.isJoditObject)(i2) && (null === (t4 = this.buttons) || void 0 === t4 || t4.forEach(function(e4) {
                null == i2 || i2.unregisterButton(e4);
              })), null === (n3 = null === (o3 = this.j) || void 0 === o3 ? void 0 : o3.events) || void 0 === n3 || n3.off("beforeDestruct", this.destruct), this.beforeDestruct(this.j), e3.prototype.destruct.call(this);
            }
          }, n2.__decorate([i.autobind], t3.prototype, "destruct", null), t3;
        }(r2.ViewComponent);
        t2.Plugin = s;
      }, 9917: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Ajax = void 0;
        var n2 = o2(20255), r2 = o2(93166), i = o2(40332), a = o2(56964), s = o2(86101), l = o2(22630), c = o2(43441);
        o2(12144);
        var u = function() {
          function e3(e4, t3) {
            void 0 === t3 && (t3 = r2.Config.prototype.defaultAjaxOptions), this.__async = new l.Async(), this.__isFulfilled = false, this.__activated = false, this.__isDestructed = false, this.options = (0, i.ConfigProto)(e4 || {}, t3), this.xhr = this.o.xhr ? this.o.xhr() : new XMLHttpRequest();
          }
          return e3.prototype.__buildParams = function(e4, t3) {
            return (0, i.isPlainObject)(e4) && this.options.contentType && this.options.contentType.includes("application/json") ? JSON.stringify(e4) : (0, i.isFunction)(this.o.queryBuild) ? this.o.queryBuild.call(this, e4, t3) : (0, i.isString)(e4) || e4 instanceof window.FormData || "object" == typeof e4 && null != e4 && (0, i.isFunction)(e4.append) ? e4 : (0, i.buildQuery)(e4);
          }, Object.defineProperty(e3.prototype, "o", { get: function() {
            return this.options;
          }, enumerable: false, configurable: true }), e3.prototype.abort = function() {
            if (this.__isFulfilled) return this;
            try {
              this.__isFulfilled = true, this.xhr.abort();
            } catch (e4) {
            }
            return this;
          }, e3.prototype.send = function() {
            var e4 = this;
            this.__activated = true;
            var t3 = this.xhr, o3 = this.o, r3 = this.prepareRequest();
            return this.__async.promise(function(l2, c2) {
              return n2.__awaiter(e4, void 0, void 0, function() {
                var e5, u2, d, p, f, h = this;
                return n2.__generator(this, function(n3) {
                  switch (n3.label) {
                    case 0:
                      return e5 = function() {
                        h.__isFulfilled = true, c2(a.connection("Connection error"));
                      }, t3.onload = u2 = function() {
                        h.__isFulfilled = true, l2(new s.Response(r3, t3.status, t3.statusText, t3.responseType ? t3.response : t3.responseText));
                      }, t3.onabort = function() {
                        h.__isFulfilled = true, c2(a.abort("Abort connection"));
                      }, t3.onerror = e5, t3.ontimeout = e5, o3.responseType && (t3.responseType = o3.responseType), t3.onprogress = function(e6) {
                        var t4, o4, n4 = 0;
                        e6.lengthComputable && (n4 = e6.loaded / e6.total * 100), null === (o4 = (t4 = h.options).onProgress) || void 0 === o4 || o4.call(t4, n4);
                      }, t3.onreadystatechange = function() {
                        var e6, n4;
                        null === (n4 = (e6 = h.options).onProgress) || void 0 === n4 || n4.call(e6, 10), t3.readyState === XMLHttpRequest.DONE && (o3.successStatuses.includes(t3.status) ? u2() : t3.statusText && (h.__isFulfilled = true, c2(a.connection(t3.statusText))));
                      }, t3.withCredentials = null !== (f = o3.withCredentials) && void 0 !== f && f, d = r3.data, t3.open(r3.method, r3.url, true), o3.contentType && t3.setRequestHeader && t3.setRequestHeader("Content-type", o3.contentType), (0, i.isFunction)(p = o3.headers) ? [4, p.call(this)] : [3, 2];
                    case 1:
                      p = n3.sent(), n3.label = 2;
                    case 2:
                      return p && t3.setRequestHeader && Object.keys(p).forEach(function(e6) {
                        t3.setRequestHeader(e6, p[e6]);
                      }), this.__async.setTimeout(function() {
                        t3.send(d ? h.__buildParams(d) : void 0);
                      }, 0), [2];
                  }
                });
              });
            });
          }, e3.prototype.prepareRequest = function() {
            if (!this.o.url) throw a.error("Need URL for AJAX request");
            var t3 = this.o.url, o3 = this.o.data, r3 = (this.o.method || "get").toLowerCase();
            if ("get" === r3 && o3 && (0, i.isPlainObject)(o3)) {
              var s2 = t3.indexOf("?");
              if (-1 !== s2) {
                var l2 = (0, i.parseQuery)(t3);
                t3 = t3.substring(0, s2) + "?" + (0, i.buildQuery)(n2.__assign(n2.__assign({}, l2), o3));
              } else t3 += "?" + (0, i.buildQuery)(this.o.data);
            }
            var c2 = { url: t3, method: r3, data: o3 };
            return e3.log.splice(100), e3.log.push(c2), c2;
          }, e3.prototype.destruct = function() {
            this.__isDestructed || (this.__isDestructed = true, this.__activated && !this.__isFulfilled && (this.abort(), this.__isFulfilled = true), this.__async.destruct());
          }, e3.log = [], n2.__decorate([c.autobind], e3.prototype, "destruct", null), e3;
        }();
        t2.Ajax = u;
      }, 12144: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.defaultAjaxOptions = { successStatuses: [200, 201, 202], method: "GET", url: "", data: null, contentType: "application/x-www-form-urlencoded; charset=UTF-8", headers: { "X-REQUESTED-WITH": "XMLHttpRequest" }, withCredentials: false, xhr: function() {
          return new XMLHttpRequest();
        } };
      }, 30056: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(9917), t2), n2.__exportStar(o2(86101), t2);
      }, 86101: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Response = void 0;
        var n2 = o2(20255), r2 = function() {
          function e3(e4, t3, o3, n3) {
            this.request = e4, this.status = t3, this.statusText = o3, this.body = n3;
          }
          return Object.defineProperty(e3.prototype, "url", { get: function() {
            return this.request.url;
          }, enumerable: false, configurable: true }), e3.prototype.json = function() {
            return n2.__awaiter(this, void 0, Promise, function() {
              return n2.__generator(this, function(e4) {
                return [2, JSON.parse(this.body)];
              });
            });
          }, e3.prototype.text = function() {
            return Promise.resolve(this.body);
          }, e3.prototype.blob = function() {
            return n2.__awaiter(this, void 0, Promise, function() {
              return n2.__generator(this, function(e4) {
                return [2, this.body];
              });
            });
          }, e3;
        }();
        t2.Response = r2;
      }, 10109: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(287), t2), n2.__exportStar(o2(10264), t2);
      }, 287: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.moveNodeInsideStart = void 0;
        var n2 = o2(64968), r2 = o2(86893);
        t2.moveNodeInsideStart = function(e3, t3, o3) {
          for (var i = n2.Dom.findSibling(t3, o3), a = n2.Dom.findSibling(t3, !o3); n2.Dom.isElement(i) && !n2.Dom.isTag(i, r2.INSEPARABLE_TAGS) && n2.Dom.isContentEditable(i, e3.editor) && (!a || !n2.Dom.closest(t3, n2.Dom.isElement, e3.editor)); ) o3 || !i.firstChild ? i.appendChild(t3) : n2.Dom.before(i.firstChild, t3), i = n2.Dom.sibling(t3, o3), a = n2.Dom.sibling(t3, !o3);
        };
      }, 10264: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.moveTheNodeAlongTheEdgeOutward = void 0;
        var n2 = o2(64968);
        t2.moveTheNodeAlongTheEdgeOutward = function(e3, t3, o3) {
          for (var r2 = e3; r2 && r2 !== o3; ) {
            if (n2.Dom.findSibling(r2, t3)) return;
            (r2 = r2.parentElement) && r2 !== o3 && (t3 ? n2.Dom.before(r2, e3) : n2.Dom.after(r2, e3));
          }
        };
      }, 2123: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(70851), t2), n2.__exportStar(o2(77627), t2);
      }, 2047: function() {
      }, 77627: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Select = void 0;
        var n2 = o2(20255), r2 = o2(86893), i = o2(86893), a = o2(64968), s = o2(40332), l = o2(70851), c = o2(43441), u = o2(10109), d = (o2(52378), o2(10172));
        o2(2047);
        var p = function() {
          function e3(e4) {
            var t3 = this;
            this.jodit = e4, e4.e.on("removeMarkers", function() {
              t3.removeMarkers();
            });
          }
          return Object.defineProperty(e3.prototype, "j", { get: function() {
            return this.jodit;
          }, enumerable: false, configurable: true }), e3.prototype.errorNode = function(e4) {
            if (!a.Dom.isNode(e4)) throw (0, s.error)("Parameter node must be instance of Node");
          }, Object.defineProperty(e3.prototype, "area", { get: function() {
            return this.j.editor;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "win", { get: function() {
            return this.j.ew;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "doc", { get: function() {
            return this.j.ed;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "sel", { get: function() {
            return this.j.o.shadowRoot && (0, d.isFunction)(this.j.o.shadowRoot.getSelection) ? this.j.o.shadowRoot.getSelection() : this.win.getSelection();
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "range", { get: function() {
            var e4 = this.sel;
            return e4 && e4.rangeCount ? e4.getRangeAt(0) : this.createRange();
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "isInsideArea", { get: function() {
            var e4 = this.sel, t3 = (null == e4 ? void 0 : e4.rangeCount) ? e4.getRangeAt(0) : null;
            return !(!t3 || !a.Dom.isOrContains(this.area, t3.startContainer));
          }, enumerable: false, configurable: true }), e3.prototype.createRange = function(e4) {
            void 0 === e4 && (e4 = false);
            var t3 = this.doc.createRange();
            return e4 && this.selectRange(t3), t3;
          }, e3.prototype.remove = function() {
            var e4 = this.sel, t3 = this.current();
            if (e4 && t3) for (var o3 = 0; e4.rangeCount > o3; o3 += 1) e4.getRangeAt(o3).deleteContents(), e4.getRangeAt(o3).collapse(true);
          }, e3.prototype.clear = function() {
            var e4, t3;
            (null === (e4 = this.sel) || void 0 === e4 ? void 0 : e4.rangeCount) && (null === (t3 = this.sel) || void 0 === t3 || t3.removeAllRanges());
          }, e3.prototype.removeNode = function(e4) {
            if (!a.Dom.isOrContains(this.j.editor, e4, true)) throw (0, s.error)("Selection.removeNode can remove only editor's children");
            a.Dom.safeRemove(e4), this.j.e.fire("afterRemoveNode", e4);
          }, e3.prototype.insertCursorAtPoint = function(e4, t3) {
            var o3 = this;
            this.removeMarkers();
            try {
              var n3 = this.createRange();
              return function() {
                if (o3.doc.caretPositionFromPoint && (r3 = o3.doc.caretPositionFromPoint(e4, t3))) n3.setStart(r3.offsetNode, r3.offset);
                else if (o3.doc.caretRangeFromPoint) {
                  var r3 = o3.doc.caretRangeFromPoint(e4, t3);
                  n3.setStart(r3.startContainer, r3.startOffset);
                }
              }(), n3.collapse(true), this.selectRange(n3), true;
            } catch (e5) {
            }
            return false;
          }, Object.defineProperty(e3.prototype, "hasMarkers", { get: function() {
            return Boolean(this.markers.length);
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "markers", { get: function() {
            return (0, s.$$)("span[data-" + r2.MARKER_CLASS + "]", this.area);
          }, enumerable: false, configurable: true }), e3.prototype.removeMarkers = function() {
            a.Dom.safeRemove.apply(null, this.markers);
          }, e3.prototype.marker = function(e4, t3) {
            void 0 === e4 && (e4 = false);
            var o3 = null;
            t3 && (o3 = t3.cloneRange()).collapse(e4);
            var n3 = this.j.createInside.span();
            return n3.id = r2.MARKER_CLASS + "_" + Number(/* @__PURE__ */ new Date()) + "_" + String(Math.random()).slice(2), n3.style.lineHeight = "0", n3.style.display = "none", a.Dom.markTemporary(n3), (0, s.attr)(n3, "data-" + r2.MARKER_CLASS, e4 ? "start" : "end"), n3.appendChild(this.j.createInside.text(r2.INVISIBLE_SPACE)), o3 && a.Dom.isOrContains(this.area, e4 ? o3.startContainer : o3.endContainer) && o3.insertNode(n3), n3;
          }, e3.prototype.restore = function() {
            var e4 = false, t3 = function(e5) {
              return "span[data-".concat(r2.MARKER_CLASS, "=").concat(e5 ? "start" : "end", "]");
            }, o3 = this.area.querySelector(t3(true)), n3 = this.area.querySelector(t3(false));
            if (o3) {
              if (e4 = this.createRange(), n3) e4.setStartAfter(o3), a.Dom.safeRemove(o3), e4.setEndBefore(n3), a.Dom.safeRemove(n3);
              else {
                var i2 = o3.previousSibling;
                a.Dom.isText(i2) ? e4.setStart(i2, i2.nodeValue ? i2.nodeValue.length : 0) : e4.setStartBefore(o3), a.Dom.safeRemove(o3), e4.collapse(true);
              }
              e4 && this.selectRange(e4);
            }
          }, e3.prototype.save = function(e4) {
            if (void 0 === e4 && (e4 = false), this.hasMarkers) return [];
            var t3 = this.sel;
            if (!t3 || !t3.rangeCount) return [];
            for (var o3 = [], n3 = t3.rangeCount, r3 = [], i2 = 0; n3 > i2; i2 += 1) if (r3[i2] = t3.getRangeAt(i2), r3[i2].collapsed) {
              var a2 = this.marker(true, r3[i2]);
              o3[i2] = { startId: a2.id, collapsed: true, startMarker: a2.outerHTML };
            } else {
              a2 = this.marker(true, r3[i2]);
              var s2 = this.marker(false, r3[i2]);
              o3[i2] = { startId: a2.id, endId: s2.id, collapsed: false, startMarker: a2.outerHTML, endMarker: s2.outerHTML };
            }
            if (!e4) for (t3.removeAllRanges(), i2 = n3 - 1; i2 >= 0; --i2) {
              var l2 = this.doc.getElementById(o3[i2].startId);
              if (l2) {
                if (o3[i2].collapsed) r3[i2].setStartAfter(l2), r3[i2].collapse(true);
                else if (r3[i2].setStartBefore(l2), o3[i2].endId) {
                  var c2 = this.doc.getElementById(o3[i2].endId);
                  c2 && r3[i2].setEndAfter(c2);
                }
              }
              try {
                t3.addRange(r3[i2].cloneRange());
              } catch (e5) {
              }
            }
            return o3;
          }, e3.prototype.focus = function(e4) {
            var t3, o3;
            if (void 0 === e4 && (e4 = { preventScroll: true }), !this.isFocused()) {
              var n3 = (0, s.getScrollParent)(this.j.container), r3 = null == n3 ? void 0 : n3.scrollTop;
              this.j.iframe && "complete" === this.doc.readyState && this.j.iframe.focus(e4), this.win.focus(), this.area.focus(e4), r3 && (null == n3 ? void 0 : n3.scrollTo) && n3.scrollTo(0, r3);
              var i2 = this.sel, l2 = (null == i2 ? void 0 : i2.rangeCount) ? null == i2 ? void 0 : i2.getRangeAt(0) : null;
              if (!l2 || !a.Dom.isOrContains(this.area, l2.startContainer)) {
                var c2 = this.createRange();
                c2.setStart(this.area, 0), c2.collapse(true), this.selectRange(c2, false);
              }
              return this.j.editorIsActive || null === (o3 = null === (t3 = this.j) || void 0 === t3 ? void 0 : t3.events) || void 0 === o3 || o3.fire("focus"), true;
            }
            return false;
          }, e3.prototype.isCollapsed = function() {
            for (var e4 = this.sel, t3 = 0; e4 && e4.rangeCount > t3; t3 += 1) if (!e4.getRangeAt(t3).collapsed) return false;
            return true;
          }, e3.prototype.isFocused = function() {
            return this.doc.hasFocus && this.doc.hasFocus() && this.area === this.doc.activeElement;
          }, e3.prototype.current = function(e4) {
            if (void 0 === e4 && (e4 = true), this.j.getRealMode() === r2.MODE_WYSIWYG) {
              var t3 = this.sel;
              if (!t3 || 0 === t3.rangeCount) return null;
              var o3 = t3.getRangeAt(0), n3 = o3.startContainer, i2 = false, s2 = function(e5) {
                return i2 ? e5.lastChild : e5.firstChild;
              };
              if (a.Dom.isTag(n3, "br") && t3.isCollapsed) return n3;
              if (!a.Dom.isText(n3)) {
                if ((n3 = o3.startContainer.childNodes[o3.startOffset]) || (n3 = o3.startContainer.childNodes[o3.startOffset - 1], i2 = true), n3 && t3.isCollapsed && !a.Dom.isText(n3)) {
                  if (!i2 && a.Dom.isText(n3.previousSibling)) n3 = n3.previousSibling;
                  else if (e4) for (var l2 = s2(n3); l2; ) {
                    if (l2 && a.Dom.isText(l2)) {
                      n3 = l2;
                      break;
                    }
                    l2 = s2(l2);
                  }
                }
                if (n3 && !t3.isCollapsed && !a.Dom.isText(n3)) {
                  var c2 = n3, u2 = n3;
                  do {
                    c2 = c2.firstChild, u2 = u2.lastChild;
                  } while (c2 && u2 && !a.Dom.isText(c2));
                  c2 === u2 && c2 && a.Dom.isText(c2) && (n3 = c2);
                }
              }
              if (n3 && a.Dom.isOrContains(this.area, n3)) return n3;
            }
            return null;
          }, e3.prototype.insertNode = function(e4, t3, o3) {
            var n3 = this;
            void 0 === t3 && (t3 = true), void 0 === o3 && (o3 = true), this.errorNode(e4), this.j.e.fire("safeHTML", e4), !this.isFocused() && this.j.isEditorMode() && (this.focus(), this.restore());
            var r3 = this.sel;
            this.j.history.snapshot.transaction(function() {
              var o4;
              if (n3.isCollapsed() || n3.j.execCommand("Delete"), n3.j.e.fire("beforeInsertNode", e4), r3 && r3.rangeCount) {
                var s2 = r3.getRangeAt(0);
                a.Dom.isOrContains(n3.area, s2.commonAncestorContainer) ? a.Dom.isTag(s2.startContainer, i.INSEPARABLE_TAGS) && s2.collapsed ? null === (o4 = s2.startContainer.parentNode) || void 0 === o4 || o4.insertBefore(e4, s2.startContainer) : a.Dom.safeInsertNode(s2, e4) : n3.area.appendChild(e4);
              } else n3.area.appendChild(e4);
              t3 && (e4.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e4.lastChild && n3.setCursorAfter(e4.lastChild) : n3.setCursorAfter(e4));
            }), o3 && this.j.events && this.j.__imdSynchronizeValues(), this.j.events && this.j.e.fire("afterInsertNode", e4);
          }, e3.prototype.insertHTML = function(e4, t3) {
            if (void 0 === t3 && (t3 = true), "" !== e4) {
              var o3, n3 = this.j.createInside.div(), r3 = this.j.createInside.fragment();
              if (!this.isFocused() && this.j.isEditorMode() && (this.focus(), this.restore()), a.Dom.isNode(e4) ? n3.appendChild(e4) : n3.innerHTML = e4.toString(), (this.j.isEditorMode() || false !== this.j.e.fire("insertHTML", n3.innerHTML)) && (o3 = n3.lastChild)) {
                for (; n3.firstChild; ) o3 = n3.firstChild, r3.appendChild(n3.firstChild);
                this.insertNode(r3.firstChild && r3.firstChild === r3.lastChild ? r3.lastChild : r3, false, false), t3 && (o3 ? this.setCursorAfter(o3) : this.setCursorIn(r3)), this.j.__imdSynchronizeValues();
              }
            }
          }, e3.prototype.insertImage = function(e4, t3, o3) {
            void 0 === t3 && (t3 = null), void 0 === o3 && (o3 = null);
            var n3 = (0, d.isString)(e4) ? this.j.createInside.element("img") : e4;
            if ((0, d.isString)(e4) && n3.setAttribute("src", e4), null != o3) {
              var r3 = o3.toString();
              r3 && "auto" !== r3 && 0 > String(r3).indexOf("px") && 0 > String(r3).indexOf("%") && (r3 += "px"), (0, s.call)(this.j.o.resizer.forImageChangeAttributes ? s.attr : s.css, n3, "width", r3);
            }
            t3 && "object" == typeof t3 && (0, s.css)(n3, t3);
            var i2 = function() {
              (n3.offsetHeight > n3.naturalHeight || n3.offsetWidth > n3.naturalWidth) && (n3.style.width = "", n3.style.height = ""), n3.removeEventListener("load", i2);
            };
            this.j.e.on(n3, "load", i2), n3.complete && i2(), this.insertNode(n3), this.j.e.fire("afterInsertImage", n3);
          }, e3.prototype.eachSelection = function(e4) {
            var t3, o3 = this, n3 = this.sel;
            if (n3 && n3.rangeCount) {
              var r3 = n3.getRangeAt(0), l2 = r3.commonAncestorContainer;
              a.Dom.isHTMLElement(l2) || (l2 = l2.parentElement);
              var c2 = [], u2 = r3.startOffset, p2 = l2.childNodes.length, f = r3.startContainer === this.area ? l2.childNodes[p2 > u2 ? u2 : p2 - 1] : r3.startContainer, h = r3.endContainer === this.area ? l2.childNodes[r3.endOffset - 1] : r3.endContainer;
              a.Dom.isText(f) && f === r3.startContainer && r3.startOffset === (null === (t3 = f.nodeValue) || void 0 === t3 ? void 0 : t3.length) && f.nextSibling && (f = f.nextSibling), a.Dom.isText(h) && h === r3.endContainer && 0 === r3.endOffset && h.previousSibling && (h = h.previousSibling);
              var m = function(e5) {
                !e5 || e5 === l2 || a.Dom.isEmptyTextNode(e5) || (0, d.isMarker)(e5) || c2.push(e5);
              };
              m(f), f !== h && a.Dom.isOrContains(l2, f, true) && a.Dom.find(f, function(e5) {
                return m(e5), e5 === h || e5 && e5.contains && e5.contains(h);
              }, l2, true, false);
              var v = function(t4) {
                if (a.Dom.isOrContains(o3.j.editor, t4, true)) {
                  if (t4.nodeName.match(/^(UL|OL)$/)) return (0, s.toArray)(t4.childNodes).forEach(v);
                  if (a.Dom.isTag(t4, "li")) if (t4.firstChild) t4 = t4.firstChild;
                  else {
                    var n4 = o3.j.createInside.text(i.INVISIBLE_SPACE);
                    t4.appendChild(n4), t4 = n4;
                  }
                  e4(t4);
                }
              };
              0 === c2.length && a.Dom.isEmptyTextNode(f) && c2.push(f), 0 === c2.length && f.firstChild && c2.push(f.firstChild), c2.forEach(v);
            }
          }, e3.prototype.cursorInTheEdge = function(e4, t3, o3) {
            var n3, r3, l2 = this;
            void 0 === o3 && (o3 = null);
            var c2 = !e4, u2 = null === (n3 = this.sel) || void 0 === n3 ? void 0 : n3.getRangeAt(0);
            if (null != o3 || (o3 = this.current(false)), !u2 || !o3 || !a.Dom.isOrContains(t3, o3, true)) return null;
            var d2 = e4 ? u2.startContainer : u2.endContainer, p2 = e4 ? u2.startOffset : u2.endOffset, f = function(e5) {
              return Boolean(e5 && !a.Dom.isTag(e5, "br") && !a.Dom.isEmptyTextNode(e5) && !a.Dom.isTemporary(e5) && !(a.Dom.isElement(e5) && true === l2.j.e.fire("isInvisibleForCursor", e5)));
            };
            if (a.Dom.isText(d2)) {
              var h = (null === (r3 = d2.nodeValue) || void 0 === r3 ? void 0 : r3.length) ? d2.nodeValue : "";
              if (c2 && h.replace((0, i.INVISIBLE_SPACE_REG_EXP_END)(), "").length > p2) return false;
              var m = (0, i.INVISIBLE_SPACE_REG_EXP_START)().exec(h);
              if (e4 && (m && p2 > m[0].length || !m && p2 > 0)) return false;
            } else {
              var v = (0, s.toArray)(d2.childNodes);
              if (c2) {
                if (v.slice(p2).some(f)) return false;
              } else if (v.slice(0, p2).some(f)) return false;
            }
            for (var g = o3; g && g !== t3; ) {
              var y = a.Dom.sibling(g, e4);
              if (y) {
                if ((g = y) && f(g)) return false;
              } else g = g.parentNode;
            }
            return true;
          }, e3.prototype.cursorOnTheLeft = function(e4, t3) {
            return this.cursorInTheEdge(true, e4, t3);
          }, e3.prototype.cursorOnTheRight = function(e4, t3) {
            return this.cursorInTheEdge(false, e4, t3);
          }, e3.prototype.setCursorAfter = function(e4) {
            return this.setCursorNearWith(e4, false);
          }, e3.prototype.setCursorBefore = function(e4) {
            return this.setCursorNearWith(e4, true);
          }, e3.prototype.setCursorNearWith = function(e4, t3) {
            var o3, n3, i2 = this;
            if (this.errorNode(e4), !a.Dom.up(e4, function(e5) {
              return e5 === i2.area || e5 && e5.parentNode === i2.area;
            }, this.area)) throw (0, s.error)("Node element must be in editor");
            var l2 = this.createRange(), c2 = null;
            return a.Dom.isText(e4) ? t3 ? l2.setStart(e4, 0) : l2.setEnd(e4, null !== (n3 = null === (o3 = e4.nodeValue) || void 0 === o3 ? void 0 : o3.length) && void 0 !== n3 ? n3 : 0) : (c2 = this.j.createInside.text(r2.INVISIBLE_SPACE), t3 ? l2.setStartBefore(e4) : l2.setEndAfter(e4), l2.collapse(t3), a.Dom.safeInsertNode(l2, c2), l2.selectNode(c2)), l2.collapse(t3), this.selectRange(l2), c2;
          }, e3.prototype.setCursorIn = function(e4, t3) {
            var o3 = this;
            if (void 0 === t3 && (t3 = false), this.errorNode(e4), !a.Dom.up(e4, function(e5) {
              return e5 === o3.area || e5 && e5.parentNode === o3.area;
            }, this.area)) throw (0, s.error)("Node element must be in editor");
            var n3 = this.createRange(), i2 = e4, l2 = e4;
            do {
              if (a.Dom.isText(i2)) break;
              l2 = i2, i2 = t3 ? i2.firstChild : i2.lastChild;
            } while (i2);
            if (!i2) {
              var c2 = this.j.createInside.text(r2.INVISIBLE_SPACE);
              /^(img|br|input)$/i.test(l2.nodeName) ? i2 = l2 : (l2.appendChild(c2), l2 = c2);
            }
            return n3.selectNodeContents(i2 || l2), n3.collapse(t3), this.selectRange(n3), l2;
          }, e3.prototype.selectRange = function(e4, t3) {
            void 0 === t3 && (t3 = true);
            var o3 = this.sel;
            return t3 && !this.isFocused() && this.focus(), o3 && (o3.removeAllRanges(), o3.addRange(e4)), this.j.e.fire("changeSelection"), this;
          }, e3.prototype.select = function(e4, t3) {
            var o3 = this;
            if (void 0 === t3 && (t3 = false), this.errorNode(e4), !a.Dom.up(e4, function(e5) {
              return e5 === o3.area || e5 && e5.parentNode === o3.area;
            }, this.area)) throw (0, s.error)("Node element must be in editor");
            var n3 = this.createRange();
            return n3[t3 ? "selectNodeContents" : "selectNode"](e4), this.selectRange(n3);
          }, Object.defineProperty(e3.prototype, "html", { get: function() {
            var e4 = this.sel;
            if (e4 && e4.rangeCount > 0) {
              var t3 = e4.getRangeAt(0).cloneContents(), o3 = this.j.createInside.div();
              return o3.appendChild(t3), o3.innerHTML;
            }
            return "";
          }, enumerable: false, configurable: true }), e3.prototype.wrapInTagGen = function() {
            var e4, t3, o3, r3, l2, c2, u2, p2, f, h, m;
            return n2.__generator(this, function(v) {
              switch (v.label) {
                case 0:
                  return this.isCollapsed() ? (c2 = this.jodit.createInside.element("font", i.INVISIBLE_SPACE), this.insertNode(c2, false, false), e4 = n2.__read(this.markers, 1), (t3 = e4[0]) ? c2.appendChild(t3) : (this.setCursorIn(c2), this.save()), [4, c2]) : [3, 2];
                case 1:
                  return v.sent(), a.Dom.unwrap(c2), [2];
                case 2:
                  (0, s.$$)("*[style*=font-size]", this.area).forEach(function(e5) {
                    (0, s.attr)(e5, "data-font-size", e5.style.fontSize.toString()), e5.style.removeProperty("font-size");
                  }), this.isCollapsed() ? (c2 = this.j.createInside.element("font"), (0, s.attr)(c2, "size", 7), this.insertNode(c2, false, false)) : this.j.nativeExecCommand("fontsize", false, "7"), (0, s.$$)("*[data-font-size]", this.area).forEach(function(e5) {
                    var t4 = (0, s.attr)(e5, "data-font-size");
                    t4 && (e5.style.fontSize = t4, (0, s.attr)(e5, "data-font-size", null));
                  }), o3 = (0, s.$$)('font[size="7"]', this.area), v.label = 3;
                case 3:
                  v.trys.push([3, 8, 9, 10]), r3 = n2.__values(o3), l2 = r3.next(), v.label = 4;
                case 4:
                  return l2.done ? [3, 7] : (p2 = (c2 = l2.value).lastChild, (u2 = c2.firstChild) && u2 === p2 && (0, d.isMarker)(u2) ? (a.Dom.unwrap(c2), [3, 6]) : (u2 && (0, d.isMarker)(u2) && a.Dom.before(c2, u2), p2 && (0, d.isMarker)(p2) && a.Dom.after(c2, p2), [4, c2]));
                case 5:
                  v.sent(), a.Dom.unwrap(c2), v.label = 6;
                case 6:
                  return l2 = r3.next(), [3, 4];
                case 7:
                  return [3, 10];
                case 8:
                  return f = v.sent(), h = { error: f }, [3, 10];
                case 9:
                  try {
                    l2 && !l2.done && (m = r3.return) && m.call(r3);
                  } finally {
                    if (h) throw h.error;
                  }
                  return [7];
                case 10:
                  return [2];
              }
            });
          }, e3.prototype.wrapInTag = function(e4) {
            var t3, o3, r3 = [];
            try {
              for (var i2 = n2.__values(this.wrapInTagGen()), s2 = i2.next(); !s2.done; s2 = i2.next()) {
                var l2 = s2.value;
                try {
                  if (l2.firstChild && l2.firstChild === l2.lastChild && (0, d.isMarker)(l2.firstChild)) continue;
                  (0, d.isFunction)(e4) ? e4(l2) : r3.push(a.Dom.replace(l2, e4, this.j.createInside));
                } finally {
                  var c2 = l2.parentNode;
                  c2 && (a.Dom.unwrap(l2), a.Dom.isEmpty(c2) && a.Dom.unwrap(c2));
                }
              }
            } catch (e5) {
              t3 = { error: e5 };
            } finally {
              try {
                s2 && !s2.done && (o3 = i2.return) && o3.call(i2);
              } finally {
                if (t3) throw t3.error;
              }
            }
            return r3;
          }, e3.prototype.commitStyle = function(e4) {
            new l.CommitStyle(e4).apply(this.j);
          }, e3.prototype.applyStyle = function(e4, t3) {
            void 0 === t3 && (t3 = {}), this.commitStyle(n2.__assign({ style: e4 }, t3));
          }, e3.prototype.splitSelection = function(e4, t3) {
            if (!this.isCollapsed()) return null;
            var o3 = this.createRange(), n3 = this.range;
            o3.setStartBefore(e4);
            var r3 = this.cursorOnTheRight(e4, t3), i2 = this.cursorOnTheLeft(e4, t3), s2 = this.j.createInside.element("br"), l2 = this.j.createInside.fake(), c2 = l2.cloneNode();
            try {
              if (r3 || i2) {
                t3 ? a.Dom.before(t3, s2) : a.Dom.safeInsertNode(n3, s2);
                var u2 = function(e5, t4) {
                  for (var o4 = t4(e5); o4; ) {
                    var n4 = t4(o4);
                    if (!o4 || !a.Dom.isTag(o4, "br") && !a.Dom.isEmptyTextNode(o4)) break;
                    a.Dom.safeRemove(o4), o4 = n4;
                  }
                };
                u2(s2, function(e5) {
                  return e5.nextSibling;
                }), u2(s2, function(e5) {
                  return e5.previousSibling;
                }), a.Dom.after(s2, c2), a.Dom.before(s2, l2), r3 ? (o3.setEndBefore(s2), n3.setEndBefore(s2)) : (o3.setEndAfter(s2), n3.setEndAfter(s2));
              } else o3.setEnd(n3.startContainer, n3.startOffset);
              var d2 = o3.extractContents(), p2 = function(e5) {
                return a.Dom.each(e5, function(e6) {
                  return a.Dom.isEmptyTextNode(e6) && a.Dom.safeRemove(e6);
                });
              };
              try {
                if (p2(d2), p2(e4), e4.parentNode.insertBefore(d2, e4), !t3 && r3 && (null == s2 ? void 0 : s2.parentNode)) {
                  var f = this.createRange();
                  f.setStartBefore(s2), this.selectRange(f);
                }
              } catch (e5) {
              }
              var h = function(e5) {
                var t4, o4, n4;
                (null === (t4 = null == e5 ? void 0 : e5.parentNode) || void 0 === t4 ? void 0 : t4.firstChild) === (null === (o4 = null == e5 ? void 0 : e5.parentNode) || void 0 === o4 ? void 0 : o4.lastChild) && (null === (n4 = null == e5 ? void 0 : e5.parentNode) || void 0 === n4 || n4.appendChild(s2.cloneNode()));
              };
              h(l2), h(c2);
            } finally {
              a.Dom.safeRemove(l2), a.Dom.safeRemove(c2);
            }
            return e4.previousElementSibling;
          }, e3.prototype.expandSelection = function() {
            var e4 = this;
            if (this.isCollapsed()) return this;
            var t3 = this.range, o3 = t3.cloneRange();
            if (!a.Dom.isOrContains(this.j.editor, t3.commonAncestorContainer, true)) return this;
            var n3 = function(o4) {
              var n4 = e4.j.createInside.fake(), r4 = t3.cloneRange();
              return r4.collapse(o4), a.Dom.safeInsertNode(r4, n4), (0, u.moveTheNodeAlongTheEdgeOutward)(n4, o4, e4.j.editor), n4;
            }, r3 = n3(true), i2 = n3(false);
            o3.setStartAfter(r3), o3.setEndBefore(i2);
            var s2 = a.Dom.findSibling(r3, false), l2 = a.Dom.findSibling(i2, true);
            if (s2 !== l2) {
              var c2 = a.Dom.isElement(s2) && a.Dom.isOrContains(s2, i2), d2 = !c2 && a.Dom.isElement(l2) && a.Dom.isOrContains(l2, r3);
              if (c2 || d2) {
                for (var p2 = c2 ? s2 : l2, f = p2; a.Dom.isElement(p2); ) (p2 = c2 ? p2.firstElementChild : p2.lastElementChild) && a.Dom.isOrContains(p2, c2 ? i2 : r3) && (f = p2);
                c2 ? o3.setStart(f, 0) : o3.setEnd(f, f.childNodes.length);
              }
            }
            return this.selectRange(o3), a.Dom.safeRemove(r3, i2), this;
          }, n2.__decorate([c.autobind], e3.prototype, "createRange", null), n2.__decorate([c.autobind], e3.prototype, "focus", null), n2.__decorate([c.autobind], e3.prototype, "setCursorAfter", null), n2.__decorate([c.autobind], e3.prototype, "setCursorBefore", null), n2.__decorate([c.autobind], e3.prototype, "setCursorIn", null), e3;
        }();
        t2.Select = p;
      }, 77846: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.extractSelectedPart = void 0;
        var n2 = o2(67309), r2 = o2(33941), i = o2(24263), a = o2(37204);
        function s(e3, t3, o3) {
          var a2 = t3.extractContents();
          a2.textContent && (0, r2.trim)(a2.textContent).length || !a2.firstChild || i.Dom.unwrap(a2.firstChild), e3.parentNode && (0, n2.call)(o3 ? i.Dom.before : i.Dom.after, e3, a2);
        }
        t2.extractSelectedPart = function(e3, t3, o3) {
          var n3 = o3.s.createRange(), r3 = (0, a.isMarker)(t3.previousSibling) ? t3.previousSibling : t3;
          n3.setStartBefore(e3), n3.setEndBefore(r3), s(e3, n3, true);
          var i2 = (0, a.isMarker)(t3.nextSibling) ? t3.nextSibling : t3;
          n3.setStartAfter(i2), n3.setEndAfter(e3), s(e3, n3, false);
        };
      }, 95901: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.FiniteStateMachine = void 0, o2(24421), o2(603);
        var n2 = function() {
          function e3(e4, t3) {
            this.transitions = t3, this.silent = true, this.__previewsStates = /* @__PURE__ */ new Set(), this.setState(e4);
          }
          return e3.prototype.setState = function(e4) {
            this.__previewsStates.add(e4), this.__state = e4;
          }, e3.prototype.getState = function() {
            return this.__state;
          }, e3.prototype.disableSilent = function() {
            this.silent = false;
          }, e3.prototype.dispatch = function(e4, t3) {
            var o3 = this.transitions[this.getState()][e4];
            if (o3) {
              var n3 = o3.call(this, t3);
              return this.setState(n3.next), n3;
            }
            throw new Error("invalid action: ".concat(this.getState(), ".").concat(e4.toString()));
          }, e3;
        }();
        t2.FiniteStateMachine = n2;
      }, 65774: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getSuitChild = void 0;
        var n2 = o2(24263), r2 = o2(63150), i = o2(74477);
        t2.getSuitChild = function(e3, t3) {
          for (var o3 = t3.firstChild; o3 && !(0, r2.isNormalNode)(o3); ) if (!(o3 = o3.nextSibling)) return null;
          return o3 && !n2.Dom.next(o3, r2.isNormalNode, t3) && (0, i.isSuitElement)(e3, o3, false) ? o3 : null;
        };
      }, 66277: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getSuitParent = void 0;
        var n2 = o2(24263), r2 = o2(63150), i = o2(74477);
        t2.getSuitParent = function e3(t3, o3, a) {
          var s = o3.parentNode;
          return s === a || !n2.Dom.isHTMLElement(s) || n2.Dom.next(o3, r2.isNormalNode, s) || n2.Dom.prev(o3, r2.isNormalNode, s) ? null : t3.isElementCommit && t3.elementIsBlock && !n2.Dom.isBlock(s) ? e3(t3, s, a) : !(0, i.isSuitElement)(t3, s, false) || n2.Dom.isBlock(s) && !t3.elementIsBlock ? t3.isElementCommit && !n2.Dom.isBlock(s) ? e3(t3, s, a) : null : s;
        };
      }, 18387: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.hasSameStyleKeys = t2.hasSameStyle = void 0;
        var n2 = o2(26911), r2 = o2(24021), i = o2(49353), a = o2(24263);
        o2(52378), t2.hasSameStyle = function(e3, t3) {
          return Boolean(!a.Dom.isTag(e3, "font") && a.Dom.isHTMLElement(e3) && Object.keys(t3).every(function(o3) {
            var a2 = (0, n2.css)(e3, o3, true);
            return "" === a2 && ("" === t3[o3] || null == t3[o3]) || !(0, r2.isVoid)(a2) && "" !== a2 && !(0, r2.isVoid)(t3[o3]) && (0, i.normalizeCssValue)(o3, t3[o3]).toString().toLowerCase() === a2.toString().toLowerCase();
          }));
        }, document.createElement("div").style.color = "red", t2.hasSameStyleKeys = function(e3, t3) {
          return Boolean(!a.Dom.isTag(e3, "font") && a.Dom.isHTMLElement(e3) && Object.keys(t3).every(function(t4) {
            var o3 = (0, n2.css)(e3, t4, true);
            return !(0, r2.isVoid)(o3);
          }));
        };
      }, 66162: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(93217), t2), n2.__exportStar(o2(11651), t2), n2.__exportStar(o2(29271), t2), n2.__exportStar(o2(18387), t2), n2.__exportStar(o2(77846), t2), n2.__exportStar(o2(95901), t2), n2.__exportStar(o2(65774), t2), n2.__exportStar(o2(66277), t2), n2.__exportStar(o2(76991), t2), n2.__exportStar(o2(47508), t2), n2.__exportStar(o2(63150), t2), n2.__exportStar(o2(74477), t2), n2.__exportStar(o2(26707), t2), n2.__exportStar(o2(8298), t2), n2.__exportStar(o2(6278), t2);
      }, 76991: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isInsideInvisibleElement = void 0;
        var n2 = o2(24263);
        t2.isInsideInvisibleElement = function(e3, t3) {
          return Boolean(n2.Dom.closest(e3, ["style", "script"], t3));
        };
      }, 63150: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isNormalNode = void 0;
        var n2 = o2(24263), r2 = o2(37204);
        t2.isNormalNode = function(e3) {
          return Boolean(e3 && !n2.Dom.isEmptyTextNode(e3) && !n2.Dom.isTemporary(e3) && !(0, r2.isMarker)(e3));
        };
      }, 47508: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.elementsEqualAttributes = t2.isSameAttributes = void 0;
        var n2 = o2(76502), r2 = o2(16492), i = (o2(52378), o2(18387));
        t2.isSameAttributes = function(e3, t3) {
          return !e3.attributes.length && !(0, r2.size)(t3) || !(0, r2.size)(t3) || Object.keys(t3).every(function(o3) {
            return "class" === o3 ? e3.classList.contains(t3[o3]) : "style" === o3 ? (0, i.hasSameStyle)(e3, t3[o3]) : (0, n2.attr)(e3, o3) === t3[o3];
          });
        }, t2.elementsEqualAttributes = function(e3, t3) {
          return e3.attributes.length === t3.attributes.length && Array.from(e3.attributes).every(function(e4) {
            return t3.hasAttribute(e4.name) && t3.getAttribute(e4.name) === e4.value;
          });
        };
      }, 74477: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isSameStyleChild = t2.findSuitClosest = t2.isSuitElement = void 0;
        var n2 = o2(24263), r2 = o2(63150), i = o2(18387);
        function a(e3, t3, o3) {
          var a2;
          if (!t3) return false;
          var s = e3.element, l = e3.elementIsDefault, c = e3.options, u = Boolean((null === (a2 = c.attributes) || void 0 === a2 ? void 0 : a2.style) && (0, i.hasSameStyle)(t3, c.attributes.style)), d = t3.nodeName.toLowerCase() === s || n2.Dom.isTag(t3, ["ul", "ol"]) && e3.elementIsList;
          return !((l && o3 || !d) && (!u || !(0, r2.isNormalNode)(t3) || e3.elementIsList)) || Boolean(!d && !o3 && l && n2.Dom.isInlineBlock(t3));
        }
        t2.isSuitElement = a, t2.findSuitClosest = function(e3, t3, o3) {
          return n2.Dom.closest(t3, function(t4) {
            return a(e3, t4, true);
          }, o3);
        }, t2.isSameStyleChild = function(e3, t3) {
          var o3, n3, a2 = e3.element, s = e3.options;
          if (!t3 || !(0, r2.isNormalNode)(t3)) return false;
          var l = t3.nodeName.toLowerCase() === a2, c = Boolean((null === (o3 = s.attributes) || void 0 === o3 ? void 0 : o3.style) && (0, i.hasSameStyleKeys)(t3, null === (n3 = s.attributes) || void 0 === n3 ? void 0 : n3.style));
          return l && c;
        };
      }, 11651: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.toggleOrderedList = void 0;
        var n2 = o2(24263), r2 = (o2(52378), o2(77846)), i = o2(70851), a = o2(93217), s = o2(66162);
        function l(e3, t3, o3, a2, s2) {
          return a2.e.fire("".concat(i._PREFIX, "BeforeUnwrapList"), e3, t3, s2) || ((0, r2.extractSelectedPart)(t3, o3, a2), n2.Dom.unwrap(o3.parentElement), n2.Dom.replace(o3, a2.o.enter, a2.createInside));
        }
        t2.toggleOrderedList = function(e3, t3, o3, n3) {
          if (!t3) return n3;
          var r3 = t3.parentElement;
          if (!r3) return n3;
          var c = o3.e.fire("".concat(i._PREFIX, "BeforeToggleList"), n3, e3, r3);
          if (void 0 !== c) return c;
          var u = o3.e.fire.bind(o3.e, "".concat(i._PREFIX, "AfterToggleList"));
          if (n3 !== i.UNWRAP) {
            var d = (0, a.toggleAttributes)(e3, t3.parentElement, o3, i.INITIAL, true) === i.CHANGE;
            if (n3 === i.REPLACE || d || r3.tagName.toLowerCase() !== e3.element) {
              var p = l(i.REPLACE, r3, t3, o3, e3), f = (0, s.wrapList)(e3, p, o3);
              return u(i.REPLACE, f, e3), i.REPLACE;
            }
          }
          var h = l(i.UNWRAP, r3, t3, o3, e3);
          return u(i.UNWRAP, h, e3), i.UNWRAP;
        };
      }, 29271: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.wrapList = void 0;
        var n2 = o2(64968), r2 = o2(70851), i = o2(66162);
        t2.wrapList = function(e3, t3, o3) {
          var a = o3.e.fire("".concat(r2._PREFIX, "BeforeWrapList"), r2.REPLACE, t3, e3), s = null != a ? a : n2.Dom.replace(t3, "li", o3.createInside), l = s.previousElementSibling, c = s.nextElementSibling, u = n2.Dom.isTag(l, e3.element) ? l : null;
          return null != u || (u = n2.Dom.isTag(c, e3.element) ? c : null), n2.Dom.isTag(u, ["ul", "ol"]) && (0, i.isSameAttributes)(u, e3.options.attributes) || (u = o3.createInside.element(e3.element), (0, i.toggleAttributes)(e3, u, o3, r2.INITIAL), n2.Dom.before(s, u)), l === u ? n2.Dom.append(u, s) : n2.Dom.prepend(u, s), n2.Dom.isTag(u.nextElementSibling, e3.element) && (0, i.elementsEqualAttributes)(u, u.nextElementSibling) && (n2.Dom.append(u, Array.from(u.nextElementSibling.childNodes)), n2.Dom.safeRemove(u.nextElementSibling)), o3.e.fire("".concat(r2._PREFIX, "AfterWrapList"), r2.WRAP, u, e3), u;
        };
      }, 93217: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.toggleAttributes = void 0;
        var n2 = o2(76502), r2 = o2(26911), i = o2(63122), a = o2(11278), s = o2(49353), l = o2(16492), c = o2(24263), u = o2(70851), d = o2(17332), p = (o2(10172), "toggleAttributes");
        function f(e3, t3, o3) {
          return (0, n2.attr)(t3, "style") || ((0, n2.attr)(t3, "style", null), t3.tagName.toLowerCase() === e3.defaultTag && (c.Dom.unwrap(t3), o3 = u.UNWRAP)), o3;
        }
        t2.toggleAttributes = function(e3, t3, o3, h, m) {
          if (void 0 === m && (m = false), !m && e3.isApplied(t3, p)) return h;
          !m && e3.setApplied(t3, p);
          var v = e3.options.attributes;
          return v && (0, l.size)(v) > 0 && Object.keys(v).forEach(function(l2) {
            var p2 = v[l2];
            switch (l2) {
              case "style":
                h = function(e4, t4, o4, n3, l3, p3) {
                  return Object.keys(o4).forEach(function(h2) {
                    var m2 = n3.style.getPropertyValue((0, a.kebabCase)(h2)), v2 = o4[h2];
                    if ("" !== m2 || null != v2) {
                      if (function(e5, t5, o5) {
                        var n4 = e5.create.element(t5.tagName.toLowerCase());
                        n4.style.cssText = t5.style.cssText, function(e6) {
                          var t6;
                          if (void 0 !== (0, i.dataBind)(e6, "shadowRoot")) return (0, i.dataBind)(e6, "shadowRoot");
                          var o6 = (0, d.getContainer)(e6), n5 = document.createElement("iframe");
                          (0, r2.css)(n5, { width: 0, height: 0, position: "absolute", border: 0 }), n5.src = "about:blank", o6.appendChild(n5);
                          var a3 = null === (t6 = n5.contentWindow) || void 0 === t6 ? void 0 : t6.document, s2 = a3 ? a3.body : e6.od.body;
                          return (0, i.dataBind)(e6, "shadowRoot", s2), s2;
                        }(e5).appendChild(n4);
                        var a2 = (0, r2.css)(n4, o5);
                        return c.Dom.safeRemove(n4), a2;
                      }(t4, n3, h2) === (0, s.normalizeCssValue)(h2, v2)) {
                        if (!m2) return;
                        return !l3 && (0, r2.css)(n3, h2, null), void (p3 = f(e4, n3, p3 = u.UNSET));
                      }
                      p3 = u.CHANGE, l3 || ((0, r2.css)(n3, h2, v2), p3 = f(e4, n3, p3));
                    }
                  }), p3;
                }(e3, o3, p2, t3, m, h);
                break;
              case "class":
                h = function(e4, t4, o4, r3, i2) {
                  var a2 = e4.e.fire.bind(e4.e, "".concat(u._PREFIX, "AfterToggleAttribute"));
                  return o4.classList.contains(t4.toString()) ? (r3 = u.UNSET, i2 || (o4.classList.remove(t4), 0 === o4.classList.length && ((0, n2.attr)(o4, "class", null), a2(r3, o4, "class", null)))) : (r3 = u.CHANGE, i2 || (o4.classList.add(t4), a2(r3, o4, "class", t4))), r3;
                }(o3, p2, t3, h, m);
                break;
              default:
                h = function(e4, t4, o4, r3, i2, a2) {
                  var s2 = e4.e.fire.bind(e4.e, "".concat(u._PREFIX, "AfterToggleAttribute"));
                  return (0, n2.attr)(o4, r3) === t4 ? (!i2 && (0, n2.attr)(o4, r3, null), a2 = u.UNSET, !i2 && s2(a2, o4, r3, t4), a2) : (a2 = u.CHANGE, i2 || ((0, n2.attr)(o4, r3, t4), s2(a2, o4, r3, t4)), a2);
                }(o3, p2, t3, l2, m, h);
            }
          }), h;
        };
      }, 26707: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.unwrapChildren = void 0;
        var n2 = o2(24263), r2 = o2(40332), i = o2(18387), a = o2(74477);
        t2.unwrapChildren = function(e3, t3) {
          var o3, s, l = [], c = [], u = null === (o3 = e3.options.attributes) || void 0 === o3 ? void 0 : o3.style;
          if (t3.firstChild) for (var d = n2.Dom.eachGen(t3), p = d.next(), f = function() {
            var t4 = p.value;
            !(0, a.isSuitElement)(e3, t4, true) || u && !(0, i.hasSameStyleKeys)(t4, u) ? u && (0, a.isSameStyleChild)(e3, t4) ? (void 0 === s && (s = false), c.push(function() {
              (0, r2.css)(t4, Object.keys(u).reduce(function(e4, t5) {
                return e4[t5] = null, e4;
              }, {})), (0, r2.attr)(t4, "style") || (0, r2.attr)(t4, "style", null), (0, r2.attr)(t4, "style") || t4.nodeName.toLowerCase() !== e3.element || l.push(t4);
            })) : n2.Dom.isEmptyTextNode(t4) || void 0 === s && (s = false) : (void 0 === s && (s = true), l.push(t4)), p = d.next();
          }; !p.done; ) f();
          return c.forEach(function(e4) {
            return e4();
          }), l.forEach(n2.Dom.unwrap), Boolean(s);
        };
      }, 6278: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.wrapUnwrappedText = void 0;
        var n2 = o2(24263), r2 = o2(37204);
        t2.wrapUnwrappedText = function(e3, t3, o3) {
          var i = o3.editor, a = o3.createInside, s = function(e4, t4) {
            void 0 === t4 && (t4 = "previousSibling");
            for (var a2 = e4, s2 = e4; s2 && !(0, r2.isMarker)(s2) && !n2.Dom.isTag(s2, o3.o.enter) && (a2 = s2, s2 = s2[t4] ? s2[t4] : s2.parentNode && !n2.Dom.isBlock(s2.parentNode) && s2.parentNode !== i ? s2.parentNode : null, !n2.Dom.isBlock(s2)); ) ;
            return a2;
          }, l = s(t3), c = s(t3, "nextSibling"), u = o3.s.createRange();
          u.setStartBefore(l), u.setEndAfter(c);
          var d = u.extractContents(), p = a.element(e3.element);
          return p.appendChild(d), n2.Dom.safeInsertNode(u, p), e3.elementIsBlock && n2.Dom.isEmpty(p) && !n2.Dom.isTag(p.firstElementChild, "br") && p.appendChild(a.element("br")), p;
        };
      }, 8298: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.wrap = void 0;
        var n2 = o2(64968), r2 = o2(6278), i = o2(67309), a = o2(29271);
        t2.wrap = function(e3, t3, o3) {
          var s = function(e4, t4, o4) {
            return e4.elementIsBlock ? n2.Dom.up(t4, function(e5) {
              return n2.Dom.isBlock(e5) && !n2.Dom.isTag(e5, ["td", "th", "tr", "tbody", "table", "li", "ul", "ol"]);
            }, o4.editor) || (0, r2.wrapUnwrappedText)(e4, t4, o4) : ((0, i.attr)(t4, "size", null), t4);
          }(e3, t3, o3);
          return e3.elementIsList ? (0, a.wrapList)(e3, s, o3) : n2.Dom.replace(s, e3.element, o3.createInside, true);
        };
      }, 3097: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ApplyStyle = void 0;
        var n2 = o2(74504), r2 = o2(66162), i = o2(33090), a = o2(70851);
        t2.ApplyStyle = function(e3, t3) {
          var o3 = e3.s, s = e3.editor;
          o3.save(), (0, n2.normalizeNode)(s.firstChild);
          for (var l = e3.s.wrapInTagGen(), c = l.next(), u = { mode: a.INITIAL, element: c.value, next: i.states.START, jodit: e3, style: t3 }; c && !c.done; ) {
            var d = new r2.FiniteStateMachine(i.states.START, i.transactions);
            for (u.element = c.value; d.getState() !== i.states.END; ) u = d.dispatch("exec", u);
            c = l.next();
          }
          o3.restore();
        };
      }, 70851: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CommitStyle = t2._PREFIX = t2.REPLACE = t2.INITIAL = t2.UNSET = t2.CHANGE = t2.UNWRAP = t2.WRAP = void 0;
        var n2 = o2(86893), r2 = o2(26596), i = o2(3097);
        t2.WRAP = "wrap", t2.UNWRAP = "unwrap", t2.CHANGE = "change", t2.UNSET = "unset", t2.INITIAL = "initial", t2.REPLACE = "replace", t2._PREFIX = "commitStyle";
        var a = function() {
          function e3(e4) {
            var t3, o3, n3, r3;
            this.options = e4, this.__applyMap = /* @__PURE__ */ new WeakMap(), e4.attributes = (t3 = e4.attributes, r3 = (o3 = this.options).className, (n3 = o3.style) && (t3 ? t3.style = n3 : t3 = { style: n3 }, delete this.options.style), r3 && (t3 ? t3.class = r3 : t3 = { class: r3 }, delete this.options.className), t3);
          }
          return e3.prototype.isApplied = function(e4, t3) {
            var o3 = this.__applyMap.get(e4);
            return !!o3 && o3[t3];
          }, e3.prototype.setApplied = function(e4, t3) {
            var o3, n3 = null !== (o3 = this.__applyMap.get(e4)) && void 0 !== o3 ? o3 : {};
            n3[t3] = true, this.__applyMap.set(e4, n3);
          }, Object.defineProperty(e3.prototype, "elementIsList", { get: function() {
            return Boolean(this.options.element && ["ul", "ol"].includes(this.options.element));
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "element", { get: function() {
            return this.options.element || this.defaultTag;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "elementIsBlock", { get: function() {
            return Boolean(this.options.element && n2.IS_BLOCK.test(this.options.element));
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "isElementCommit", { get: function() {
            return Boolean(this.options.element && this.options.element !== this.options.defaultTag);
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "defaultTag", { get: function() {
            return this.options.defaultTag ? this.options.defaultTag : this.elementIsBlock ? "p" : "span";
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "elementIsDefault", { get: function() {
            return this.element === this.defaultTag;
          }, enumerable: false, configurable: true }), e3.prototype.apply = function(e4) {
            var o3 = this.options.hooks;
            try {
              o3 && Object.keys(o3).forEach(function(n3) {
                e4.e.on((0, r2.camelCase)(t2._PREFIX + "_" + n3), o3[n3]);
              }), (0, i.ApplyStyle)(e4, this);
            } finally {
              o3 && Object.keys(o3).forEach(function(n3) {
                e4.e.off((0, r2.camelCase)(t2._PREFIX + "_" + n3), o3[n3]);
              }), this.__applyMap = /* @__PURE__ */ new WeakMap();
            }
          }, e3;
        }();
        t2.CommitStyle = a;
      }, 33090: function(e2, t2, o2) {
        var n2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.transactions = t2.states = void 0;
        var r2 = o2(20255), i = o2(2123), a = o2(66162), s = o2(64968), l = o2(2123);
        o2(52378), t2.states = { START: "START", ELEMENT: "ELEMENT", UNWRAP: "UNWRAP", UNWRAP_CHILDREN: "UNWRAP_CHILDREN", CHANGE: "CHANGE", REPLACE_DEFAULT: "REPLACE_DEFAULT", LIST: "LIST", TOGGLE_LIST: "TOGGLE_LIST", WRAP: "WRAP", EXTRACT: "EXTRACT", END: "END" }, t2.transactions = ((n2 = {})[t2.states.START] = { exec: function(e3) {
          var o3 = e3.element, n3 = e3.jodit, i2 = e3.style, c = e3.mode;
          if ((0, a.isInsideInvisibleElement)(o3, n3.editor) || s.Dom.isEmptyContent(o3)) return r2.__assign(r2.__assign({}, e3), { next: t2.states.END });
          var u = (0, a.getSuitParent)(i2, o3, n3.editor) || (0, a.getSuitChild)(i2, o3);
          if (u) return r2.__assign(r2.__assign({}, e3), { next: t2.states.ELEMENT, element: u });
          var d = (0, a.findSuitClosest)(i2, o3, n3.editor);
          return i2.elementIsList && s.Dom.isTag(d, ["ul", "ol"]) ? r2.__assign(r2.__assign({}, e3), { next: t2.states.LIST }) : r2.__assign(r2.__assign({}, e3), d ? { next: t2.states.EXTRACT } : { next: c !== l.UNWRAP ? t2.states.UNWRAP_CHILDREN : t2.states.END });
        } }, n2[t2.states.LIST] = { exec: function(e3) {
          var o3 = e3.element, n3 = e3.jodit, a2 = e3.mode;
          if (a2 !== l.INITIAL && a2 !== l.UNWRAP && a2 !== i.REPLACE) return r2.__assign(r2.__assign({}, e3), { next: t2.states.END });
          var c = s.Dom.closest(o3, "li", n3.editor);
          if (!c) return r2.__assign(r2.__assign({}, e3), { next: t2.states.END });
          var u = s.Dom.closest(o3, ["ul", "ol"], n3.editor);
          return r2.__assign(r2.__assign({}, e3), u ? { element: c, next: t2.states.TOGGLE_LIST } : { next: t2.states.END });
        } }, n2[t2.states.TOGGLE_LIST] = { exec: function(e3) {
          return r2.__assign(r2.__assign({}, e3), { mode: (0, a.toggleOrderedList)(e3.style, e3.element, e3.jodit, e3.mode), next: t2.states.END });
        } }, n2[t2.states.EXTRACT] = { exec: function(e3) {
          var o3 = e3.element, n3 = e3.jodit, i2 = e3.style, s2 = (0, a.findSuitClosest)(i2, o3, n3.editor);
          return i2.elementIsBlock || (0, a.extractSelectedPart)(s2, o3, n3), r2.__assign(r2.__assign({}, e3), { element: s2, next: t2.states.ELEMENT });
        } }, n2[t2.states.UNWRAP_CHILDREN] = { exec: function(e3) {
          return (0, a.unwrapChildren)(e3.style, e3.element) ? r2.__assign(r2.__assign({}, e3), { mode: l.UNWRAP, next: t2.states.END }) : r2.__assign(r2.__assign({}, e3), { next: t2.states.WRAP });
        } }, n2[t2.states.WRAP] = { exec: function(e3) {
          var o3 = e3.style, n3 = (0, a.wrap)(o3, e3.element, e3.jodit);
          return r2.__assign(r2.__assign({}, e3), { next: o3.elementIsList ? t2.states.END : t2.states.CHANGE, mode: l.WRAP, element: n3 });
        } }, n2[t2.states.ELEMENT] = { exec: function(e3) {
          var o3 = e3.style, n3 = e3.element;
          return (0, a.toggleAttributes)(o3, n3, e3.jodit, l.INITIAL, true) !== l.INITIAL ? r2.__assign(r2.__assign({}, e3), { next: t2.states.CHANGE }) : s.Dom.isTag(n3, o3.element) ? r2.__assign(r2.__assign({}, e3), { next: t2.states.UNWRAP }) : r2.__assign(r2.__assign({}, e3), { next: t2.states.END });
        } }, n2[t2.states.CHANGE] = { exec: function(e3) {
          var o3 = e3.style, n3 = e3.element, i2 = e3.mode, c = (0, a.toggleAttributes)(o3, n3, e3.jodit, e3.mode);
          return i2 !== l.WRAP && c === l.UNSET && !n3.attributes.length && s.Dom.isTag(n3, o3.element) ? r2.__assign(r2.__assign({}, e3), { next: t2.states.UNWRAP }) : r2.__assign(r2.__assign({}, e3), { mode: c, next: t2.states.END });
        } }, n2[t2.states.UNWRAP] = { exec: function(e3) {
          return e3.element.attributes.length && s.Dom.isTag(e3.element, e3.style.element) ? r2.__assign(r2.__assign({}, e3), { next: t2.states.REPLACE_DEFAULT }) : (s.Dom.unwrap(e3.element), r2.__assign(r2.__assign({}, e3), { mode: l.UNWRAP, next: t2.states.END }));
        } }, n2[t2.states.REPLACE_DEFAULT] = { exec: function(e3) {
          return s.Dom.replace(e3.element, e3.style.defaultTag, e3.jodit.createInside, true), r2.__assign(r2.__assign({}, e3), { mode: i.REPLACE, next: t2.states.END });
        } }, n2[t2.states.END] = { exec: function(e3) {
          return e3;
        } }, n2);
      }, 75764: function(e2, t2) {
        var o2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.LocalStorageProvider = t2.canUsePersistentStorage = void 0, t2.canUsePersistentStorage = function() {
          return void 0 === o2 && (o2 = function() {
            var e3 = "___Jodit___" + Math.random().toString();
            try {
              localStorage.setItem(e3, "1");
              var t3 = "1" === localStorage.getItem(e3);
              return localStorage.removeItem(e3), t3;
            } catch (e4) {
            }
            return false;
          }()), o2;
        };
        var n2 = function() {
          function e3(e4) {
            this.rootKey = e4;
          }
          return e3.prototype.set = function(e4, t3) {
            try {
              var o3 = localStorage.getItem(this.rootKey), n3 = o3 ? JSON.parse(o3) : {};
              n3[e4] = t3, localStorage.setItem(this.rootKey, JSON.stringify(n3));
            } catch (e5) {
            }
            return this;
          }, e3.prototype.delete = function(e4) {
            try {
              localStorage.removeItem(this.rootKey);
            } catch (e5) {
            }
            return this;
          }, e3.prototype.get = function(e4) {
            try {
              var t3 = localStorage.getItem(this.rootKey), o3 = t3 ? JSON.parse(t3) : {};
              return void 0 !== o3[e4] ? o3[e4] : null;
            } catch (e5) {
            }
          }, e3.prototype.exists = function(e4) {
            return null != this.get(e4);
          }, e3.prototype.clear = function() {
            try {
              localStorage.removeItem(this.rootKey);
            } catch (e4) {
            }
            return this;
          }, e3;
        }();
        t2.LocalStorageProvider = n2;
      }, 79905: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.MemoryStorageProvider = void 0;
        var o2 = function() {
          function e3() {
            this.data = /* @__PURE__ */ new Map();
          }
          return e3.prototype.set = function(e4, t3) {
            return this.data.set(e4, t3), this;
          }, e3.prototype.delete = function(e4) {
            return this.data.delete(e4), this;
          }, e3.prototype.get = function(e4) {
            return this.data.get(e4);
          }, e3.prototype.exists = function(e4) {
            return this.data.has(e4);
          }, e3.prototype.clear = function() {
            return this.data.clear(), this;
          }, e3;
        }();
        t2.MemoryStorageProvider = o2;
      }, 77462: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(79905), t2), n2.__exportStar(o2(75764), t2), n2.__exportStar(o2(52015), t2);
      }, 52015: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Storage = t2.StorageKey = void 0;
        var n2 = o2(40332), r2 = o2(75764), i = o2(79905);
        t2.StorageKey = "Jodit_";
        var a = function() {
          function e3(e4, o3) {
            this.provider = e4, this.prefix = t2.StorageKey, o3 && (this.prefix += o3);
          }
          return e3.prototype.set = function(e4, t3) {
            return this.provider.set((0, n2.camelCase)(this.prefix + e4), t3), this;
          }, e3.prototype.delete = function(e4) {
            return this.provider.delete((0, n2.camelCase)(this.prefix + e4)), this;
          }, e3.prototype.get = function(e4) {
            return this.provider.get((0, n2.camelCase)(this.prefix + e4));
          }, e3.prototype.exists = function(e4) {
            return this.provider.exists((0, n2.camelCase)(this.prefix + e4));
          }, e3.prototype.clear = function() {
            return this.provider.clear(), this;
          }, e3.makeStorage = function(o3, n3) {
            var a2;
            return void 0 === o3 && (o3 = false), o3 && (0, r2.canUsePersistentStorage)() && (a2 = new r2.LocalStorageProvider(t2.StorageKey + n3)), a2 || (a2 = new i.MemoryStorageProvider()), new e3(a2, n3);
          }, e3;
        }();
        t2.Storage = a;
      }, 59363: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Dlgs = void 0;
        var n2 = o2(20255), r2 = o2(87837), i = o2(40332), a = function() {
          function e3() {
          }
          return e3.prototype.dlg = function(e4) {
            var t3 = new r2.Dialog(n2.__assign({ language: this.o.language, shadowRoot: this.o.shadowRoot, ownerWindow: this.o.ownerWindow, defaultTimeout: this.o.defaultTimeout, theme: this.o.theme, globalFullSize: this.o.globalFullSize }, e4));
            return (0, i.markOwner)(this, t3.container), t3.parent = this, t3.bindDestruct(this);
          }, e3.prototype.confirm = function(e4, t3, o3) {
            return (0, i.isString)(t3) && (t3 = this.i18n(t3)), r2.Confirm.call(this.dlg(), this.i18n(e4), t3, o3);
          }, e3.prototype.prompt = function(e4, t3, o3, n3, a2) {
            return (0, i.isString)(t3) && (t3 = this.i18n(t3)), (0, i.isString)(n3) && (n3 = this.i18n(n3)), r2.Prompt.call(this.dlg(), this.i18n(e4), t3, o3, n3, a2);
          }, e3.prototype.alert = function(e4, t3, o3, n3) {
            return (0, i.isString)(e4) && (e4 = this.i18n(e4)), (0, i.isString)(t3) && (t3 = this.i18n(t3)), r2.Alert.call(this.dlg(), e4, t3, o3, n3);
          }, e3;
        }();
        t2.Dlgs = a;
      }, 14089: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Elms = void 0;
        var n2 = o2(1853), r2 = function() {
          function e3() {
          }
          return e3.prototype.getElm = function(e4) {
            return this.container.querySelector(".".concat(this.getFullElName(e4)));
          }, e3.prototype.getElms = function(e4) {
            return (0, n2.toArray)(this.container.querySelectorAll(".".concat(this.getFullElName(e4))));
          }, e3;
        }();
        t2.Elms = r2;
      }, 59829: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(14089), t2), n2.__exportStar(o2(41681), t2), n2.__exportStar(o2(59363), t2);
      }, 41681: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Mods = void 0;
        var n2 = o2(1853), r2 = o2(24021), i = function() {
          function e3() {
          }
          return e3.prototype.afterSetMod = function(e4, t3) {
          }, e3.prototype.setMod = function(e4, t3, o3) {
            if (e4 = e4.toLowerCase(), this.mods[e4] === t3) return this;
            var i2 = "".concat(this.componentName, "_").concat(e4), a = (o3 || this.container).classList;
            return (0, n2.toArray)(a).forEach(function(e5) {
              0 === e5.indexOf(i2) && a.remove(e5);
            }), !(0, r2.isVoid)(t3) && "" !== t3 && a.add("".concat(i2, "_").concat(t3.toString().toLowerCase())), this.mods[e4] = t3, this.afterSetMod(e4, t3), this;
          }, e3.prototype.getMod = function(e4) {
            var t3;
            return null !== (t3 = this.mods[e4]) && void 0 !== t3 ? t3 : null;
          }, e3;
        }();
        t2.Mods = i;
      }, 96031: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Button = t2.UIButton = t2.UIButtonState = void 0;
        var n2 = o2(20255);
        o2(93330);
        var r2 = o2(53929), i = o2(24263), a = o2(76502), s = o2(24421), l = o2(42096), c = o2(77904), u = o2(47970), d = o2(43441), p = o2(29411);
        t2.UIButtonState = function() {
          return { size: "middle", type: "button", name: "", value: "", variant: "initial", disabled: false, activated: false, icon: { name: "empty", fill: "", iconURL: "" }, tooltip: "", text: "", tabIndex: void 0 };
        };
        var f = function(e3) {
          function o3(o4, n3) {
            var r3 = e3.call(this, o4) || this;
            return r3.isButton = true, r3.state = (0, t2.UIButtonState)(), r3.actionHandlers = [], r3.updateSize(), r3.onChangeSize(), r3.onChangeStatus(), n3 && r3.hookStatus(p.STATUSES.ready, function() {
              r3.setState(n3);
            }), r3;
          }
          return n2.__extends(o3, e3), o3.prototype.className = function() {
            return "UIButton";
          }, o3.prototype.setState = function(e4) {
            return Object.assign(this.state, e4), this;
          }, o3.prototype.onChangeSize = function() {
            this.setMod("size", this.state.size);
          }, o3.prototype.onChangeType = function() {
            (0, a.attr)(this.container, "type", this.state.type);
          }, o3.prototype.updateSize = function() {
            var e4 = this.closest(u.UIList);
            e4 && (this.state.size = e4.buttonSize);
          }, o3.prototype.onChangeStatus = function() {
            this.setMod("variant", this.state.variant);
          }, o3.prototype.onChangeText = function() {
            this.text.textContent = this.jodit.i18n(this.state.text);
          }, o3.prototype.onChangeTextSetMode = function() {
            this.setMod("text-icons", Boolean(this.state.text.trim().length));
          }, o3.prototype.onChangeDisabled = function() {
            (0, a.attr)(this.container, "disabled", this.state.disabled || null);
          }, o3.prototype.onChangeActivated = function() {
            (0, a.attr)(this.container, "aria-pressed", this.state.activated);
          }, o3.prototype.onChangeName = function() {
            this.container.classList.add("".concat(this.componentName, "_").concat(this.clearName(this.state.name))), this.name = this.state.name, (0, a.attr)(this.container, "data-ref", this.state.name), (0, a.attr)(this.container, "ref", this.state.name);
          }, o3.prototype.onChangeTooltip = function() {
            this.get("j.o.useNativeTooltip") && (0, a.attr)(this.container, "title", this.state.tooltip), (0, a.attr)(this.container, "aria-label", this.state.tooltip);
          }, o3.prototype.onChangeTabIndex = function() {
            (0, a.attr)(this.container, "tabindex", this.state.tabIndex);
          }, o3.prototype.onChangeIcon = function() {
            var e4 = this.get("j.o.textIcons");
            if (!(true === e4 || (0, l.isFunction)(e4) && e4(this.state.name))) {
              i.Dom.detach(this.icon);
              var t3 = c.Icon.makeIcon(this.j, this.state.icon);
              t3 && this.icon.appendChild(t3);
            }
          }, o3.prototype.focus = function() {
            this.container.focus();
          }, o3.prototype.isFocused = function() {
            var e4 = this.od.activeElement;
            return Boolean(e4 && i.Dom.isOrContains(this.container, e4));
          }, o3.prototype.createContainer = function() {
            var e4 = this.componentName, t3 = this.j.c.element("button", { class: e4, type: "button", role: "button", ariaPressed: false });
            return this.icon = this.j.c.span(e4 + "__icon"), this.text = this.j.c.span(e4 + "__text"), t3.appendChild(this.icon), t3.appendChild(this.text), this.j.e.on(t3, "click", this.onActionFire), t3;
          }, o3.prototype.destruct = function() {
            return this.j.e.off(this.container), e3.prototype.destruct.call(this);
          }, o3.prototype.onAction = function(e4) {
            return this.actionHandlers.push(e4), this;
          }, o3.prototype.onActionFire = function(e4) {
            var t3 = this;
            e4.buffer = { actionTrigger: this }, this.actionHandlers.forEach(function(o4) {
              return o4.call(t3, e4);
            });
          }, n2.__decorate([(0, d.watch)("state.size")], o3.prototype, "onChangeSize", null), n2.__decorate([(0, d.watch)("state.type")], o3.prototype, "onChangeType", null), n2.__decorate([(0, d.watch)("parentElement")], o3.prototype, "updateSize", null), n2.__decorate([(0, d.watch)("state.variant")], o3.prototype, "onChangeStatus", null), n2.__decorate([(0, d.watch)("state.text")], o3.prototype, "onChangeText", null), n2.__decorate([(0, d.watch)("state.text")], o3.prototype, "onChangeTextSetMode", null), n2.__decorate([(0, d.watch)("state.disabled")], o3.prototype, "onChangeDisabled", null), n2.__decorate([(0, d.watch)("state.activated")], o3.prototype, "onChangeActivated", null), n2.__decorate([(0, d.watch)("state.name")], o3.prototype, "onChangeName", null), n2.__decorate([(0, d.watch)("state.tooltip")], o3.prototype, "onChangeTooltip", null), n2.__decorate([(0, d.watch)("state.tabIndex")], o3.prototype, "onChangeTabIndex", null), n2.__decorate([(0, d.watch)("state.icon")], o3.prototype, "onChangeIcon", null), n2.__decorate([d.autobind], o3.prototype, "onActionFire", null), n2.__decorate([d.component], o3);
        }(r2.UIElement);
        t2.UIButton = f, t2.Button = function(e3, t3, o3, n3) {
          var r3 = new f(e3);
          return r3.state.tabIndex = e3.o.allowTabNavigation ? 0 : -1, (0, s.isString)(t3) ? (r3.state.icon.name = t3, r3.state.name = t3, n3 && (r3.state.variant = n3), o3 && (r3.state.text = o3)) : r3.setState(t3), r3;
        };
      }, 67252: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UIButtonGroup = void 0;
        var n2 = o2(20255);
        o2(45066);
        var r2 = o2(61479), i = o2(11441), a = o2(96031), s = (o2(52378), function(e3) {
          function t3(t4, o3) {
            void 0 === o3 && (o3 = { radio: true });
            var n3, r3, i2 = this;
            return (i2 = e3.call(this, t4, null === (n3 = o3.options) || void 0 === n3 ? void 0 : n3.map(function(e4) {
              var o4 = new a.UIButton(t4, { text: e4.text, value: e4.value, variant: "primary" });
              return o4.onAction(function() {
                i2.select(e4.value);
              }), o4;
            }), o3) || this).options = o3, i2.select(null !== (r3 = o3.value) && void 0 !== r3 ? r3 : 0), i2;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "UIButtonGroup";
          }, t3.prototype.render = function(e4) {
            return '<div>\n			<div class="&__label">~'.concat(e4.label, '~</div>\n			<div class="&__options"></div>\n		</div>');
          }, t3.prototype.appendChildToContainer = function(e4) {
            this.getElm("options").appendChild(e4);
          }, t3.prototype.select = function(e4) {
            var t4, o3, n3 = this;
            this.elements.forEach(function(t5, o4) {
              o4 === e4 || t5.state.value === e4 ? t5.state.activated = true : n3.options.radio && (t5.state.activated = false);
            });
            var r3 = this.elements.filter(function(e5) {
              return e5.state.activated;
            }).map(function(e5) {
              return { text: e5.state.text, value: e5.state.value };
            });
            this.jodit.e.fire(this, "select", r3), null === (o3 = (t4 = this.options).onChange) || void 0 === o3 || o3.call(t4, r3);
          }, n2.__decorate([i.component], t3);
        }(r2.UIGroup));
        t2.UIButtonGroup = s;
      }, 96516: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(96031), t2), n2.__exportStar(o2(67252), t2), n2.__exportStar(o2(33627), t2);
      }, 33627: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UITooltip = void 0;
        var n2 = o2(20255);
        o2(99895);
        var r2 = o2(40332), i = o2(17332), a = o2(43441), s = function(e3) {
          function t3(o3) {
            var n3 = e3.call(this, o3) || this;
            n3.__isOpened = false, n3.__useCount = 1, n3.__delayShowTimeout = 0, (0, i.getContainer)(o3, t3).appendChild(n3.container);
            var r3 = 0;
            return o3.e.off(".tooltip").on("showTooltip.tooltip", function(e4, t4) {
              o3.async.clearTimeout(r3), n3.__open(e4, t4);
            }).on("delayShowTooltip.tooltip", n3.__delayOpen).on("escape.tooltip", n3.__close).on("hideTooltip.tooltip change.tooltip scroll.tooltip changePlace.tooltip hidePopup.tooltip closeAllPopups.tooltip", function() {
              n3.j.async.clearTimeout(n3.__delayShowTimeout), r3 = o3.async.setTimeout(n3.__close, n3.j.defaultTimeout);
            }), n3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "UITooltip";
          }, t3.make = function(e4) {
            var o3 = (0, r2.dataBind)(e4, "ui-tooltip");
            return o3 ? (o3.__useCount += 1, o3) : (o3 = new t3(e4), (0, r2.dataBind)(e4, "ui-tooltip", o3), o3);
          }, t3.prototype.__delayOpen = function(e4, t4) {
            var o3 = this, n3 = this.j.o.showTooltipDelay || this.j.defaultTimeout;
            this.j.async.clearTimeout(this.__delayShowTimeout), this.__delayShowTimeout = this.j.async.setTimeout(function() {
              return o3.__open(e4, t4);
            }, { timeout: n3, label: "tooltip" });
          }, t3.prototype.__open = function(e4, t4) {
            this.setMod("visible", true), this.container.innerHTML = t4, this.__isOpened = true, this.__setPosition(e4);
          }, t3.prototype.__setPosition = function(e4) {
            var t4 = e4();
            (0, r2.css)(this.container, { left: t4.x, top: t4.y });
          }, t3.prototype.__close = function() {
            this.j.async.clearTimeout(this.__delayShowTimeout), this.__isOpened && (this.__isOpened = false, this.setMod("visible", false), (0, r2.css)(this.container, { left: -5e3 }));
          }, t3.prototype.destruct = function() {
            var t4;
            this.__useCount--, this.__useCount || (null === (t4 = this.j) || void 0 === t4 || t4.e.off(".tooltip"), this.__close(), e3.prototype.destruct.call(this));
          }, n2.__decorate([a.autobind], t3.prototype, "__delayOpen", null), n2.__decorate([a.autobind], t3.prototype, "__close", null), t3;
        }(o2(53929).UIElement);
        t2.UITooltip = s;
      }, 53929: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UIElement = void 0;
        var n2 = o2(20255), r2 = o2(56562), i = o2(24263), a = o2(59829), s = o2(24421), l = o2(77904), c = o2(43441), u = function(e3) {
          function t3(t4, o4) {
            var n3 = e3.call(this, t4) || this;
            return n3.name = "", n3.__parentElement = null, n3.mods = {}, n3.container = n3.createContainer(o4), Object.defineProperty(n3.container, "component", { value: n3, configurable: true }), n3;
          }
          var o3;
          return n2.__extends(t3, e3), o3 = t3, Object.defineProperty(t3.prototype, "parentElement", { get: function() {
            return this.__parentElement;
          }, set: function(e4) {
            var t4 = this;
            this.__parentElement = e4, e4 && e4.hookStatus("beforeDestruct", function() {
              return t4.destruct();
            }), this.updateParentElement(this);
          }, enumerable: false, configurable: true }), t3.prototype.bubble = function(e4) {
            for (var t4 = this.parentElement; t4; ) e4(t4), t4 = t4.parentElement;
            return this;
          }, t3.prototype.updateParentElement = function(e4) {
            var t4;
            return null === (t4 = this.__parentElement) || void 0 === t4 || t4.updateParentElement(e4), this;
          }, t3.prototype.get = function(t4, o4) {
            return e3.prototype.get.call(this, t4, o4) || this.getElm(t4);
          }, t3.prototype.closest = function(e4) {
            for (var t4 = "object" == typeof e4 ? function(t5) {
              return t5 === e4;
            } : function(t5) {
              return r2.Component.isInstanceOf(t5, e4);
            }, n3 = this.__parentElement; n3; ) {
              if (t4(n3)) return n3;
              n3 = !n3.parentElement && n3.container.parentElement ? o3.closestElement(n3.container.parentElement, o3) : n3.parentElement;
            }
            return null;
          }, t3.closestElement = function(e4, t4) {
            var o4 = i.Dom.up(e4, function(e5) {
              if (e5) {
                var o5 = e5.component;
                return o5 && r2.Component.isInstanceOf(o5, t4);
              }
              return false;
            });
            return o4 ? null == o4 ? void 0 : o4.component : null;
          }, t3.prototype.update = function() {
          }, t3.prototype.appendTo = function(e4) {
            return e4.appendChild(this.container), this;
          }, t3.prototype.clearName = function(e4) {
            return e4.replace(/[^a-zA-Z0-9]/g, "_");
          }, t3.prototype.render = function(e4) {
            return this.j.c.div(this.componentName);
          }, t3.prototype.createContainer = function(e4) {
            var t4 = this.render(e4);
            if ((0, s.isString)(t4)) {
              var o4 = this.parseTemplate(t4);
              return o4.classList.add(this.componentName), o4;
            }
            return t4;
          }, t3.prototype.parseTemplate = function(e4) {
            var t4 = this;
            return this.j.c.fromHTML(e4.replace(/\*([^*]+?)\*/g, function(e5, t5) {
              return l.Icon.get(t5) || "";
            }).replace(/&__/g, this.componentName + "__").replace(/~([^~]+?)~/g, function(e5, o4) {
              return t4.i18n(o4);
            }));
          }, t3.prototype.destruct = function() {
            return i.Dom.safeRemove(this.container), this.parentElement = null, e3.prototype.destruct.call(this);
          }, o3 = n2.__decorate([(0, c.derive)(a.Mods, a.Elms)], t3);
        }(r2.ViewComponent);
        t2.UIElement = u;
      }, 38318: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UIBlock = void 0;
        var n2 = o2(20255);
        o2(87682);
        var r2 = o2(61479), i = o2(76502), a = o2(11441), s = function(e3) {
          function t3(t4, o3, n3) {
            void 0 === n3 && (n3 = { align: "left" });
            var r3 = e3.call(this, t4, o3) || this;
            return r3.options = n3, r3.setMod("align", r3.options.align || "left"), r3.setMod("width", r3.options.width || ""), r3.options.mod && r3.setMod(r3.options.mod, true), r3.options.className && r3.container.classList.add(r3.options.className), (0, i.attr)(r3.container, "data-ref", n3.ref), (0, i.attr)(r3.container, "ref", n3.ref), r3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "UIBlock";
          }, n2.__decorate([a.component], t3);
        }(r2.UIGroup);
        t2.UIBlock = s;
      }, 26207: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UIForm = void 0;
        var n2 = o2(20255), r2 = o2(61479), i = o2(30194), a = o2(75840), s = o2(76502), l = o2(11441), c = o2(45113), u = function(e3) {
          function t3() {
            for (var t4 = [], o3 = 0; arguments.length > o3; o3++) t4[o3] = arguments[o3];
            var r3, i2, a2 = this;
            return (null === (r3 = (a2 = e3.apply(this, n2.__spreadArray([], n2.__read(t4), false)) || this).options) || void 0 === r3 ? void 0 : r3.className) && a2.container.classList.add(null === (i2 = a2.options) || void 0 === i2 ? void 0 : i2.className), a2;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "UIForm";
          }, t3.prototype.submit = function() {
            this.j.e.fire(this.container, "submit");
          }, t3.prototype.validate = function() {
            var e4, t4, o3, r3, s2 = this.allChildren.filter(function(e5) {
              return c.Component.isInstanceOf(e5, i.UIInput);
            });
            try {
              for (var l2 = n2.__values(s2), u2 = l2.next(); !u2.done; u2 = l2.next()) if (!u2.value.validate()) return false;
            } catch (t5) {
              e4 = { error: t5 };
            } finally {
              try {
                u2 && !u2.done && (t4 = l2.return) && t4.call(l2);
              } finally {
                if (e4) throw e4.error;
              }
            }
            var d = this.allChildren.filter(function(e5) {
              return c.Component.isInstanceOf(e5, a.UISelect);
            });
            try {
              for (var p = n2.__values(d), f = p.next(); !f.done; f = p.next()) if (!f.value.validate()) return false;
            } catch (e5) {
              o3 = { error: e5 };
            } finally {
              try {
                f && !f.done && (r3 = p.return) && r3.call(p);
              } finally {
                if (o3) throw o3.error;
              }
            }
            return true;
          }, t3.prototype.onSubmit = function(e4) {
            var t4 = this;
            this.j.e.on(this.container, "submit", function() {
              var o3 = t4.allChildren.filter(function(e5) {
                return c.Component.isInstanceOf(e5, i.UIInput);
              });
              return !!t4.validate() && (e4(o3.reduce(function(e5, t5) {
                return e5[t5.state.name] = t5.value, e5;
              }, {})), false);
            });
          }, t3.prototype.createContainer = function() {
            var e4 = this.j.c.element("form");
            return e4.classList.add(this.componentName), (0, s.attr)(e4, "dir", this.j.o.direction || "auto"), e4;
          }, n2.__decorate([l.component], t3);
        }(r2.UIGroup);
        t2.UIForm = u;
      }, 95963: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(26207), t2), n2.__exportStar(o2(63034), t2), n2.__exportStar(o2(38318), t2);
      }, 21639: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UITextArea = void 0;
        var n2 = o2(20255);
        o2(50905);
        var r2 = o2(30194), i = o2(11441), a = function(e3) {
          function t3(t4, r3) {
            var i2 = e3.call(this, t4, r3) || this;
            return i2.state = n2.__assign({}, o3.defaultState), Object.assign(i2.state, r3), false === i2.state.resizable && (i2.nativeInput.style.resize = "none"), i2;
          }
          var o3;
          return n2.__extends(t3, e3), o3 = t3, t3.prototype.className = function() {
            return "UITextArea";
          }, t3.prototype.createContainer = function(t4) {
            return this.nativeInput = this.j.create.element("textarea"), e3.prototype.createContainer.call(this, t4);
          }, t3.defaultState = n2.__assign(n2.__assign({}, r2.UIInput.defaultState), { size: 5, resizable: true }), o3 = n2.__decorate([i.component], t3);
        }(r2.UIInput);
        t2.UITextArea = a;
      }, 63747: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UICheckbox = void 0;
        var n2 = o2(20255);
        o2(70446);
        var r2 = o2(30194), i = o2(43441), a = o2(24263), s = function(e3) {
          function t3(t4, r3) {
            var i2 = e3.call(this, t4, n2.__assign(n2.__assign({}, r3), { type: "checkbox" })) || this;
            return i2.state = n2.__assign({}, o3.defaultState), Object.assign(i2.state, r3), i2;
          }
          var o3;
          return n2.__extends(t3, e3), o3 = t3, t3.prototype.className = function() {
            return "UICheckbox";
          }, t3.prototype.render = function() {
            return this.j.c.element("label", { className: this.componentName });
          }, t3.prototype.onChangeChecked = function() {
            this.value = this.state.checked.toString(), this.nativeInput.checked = this.state.checked, this.setMod("checked", this.state.checked);
          }, t3.prototype.onChangeNativeCheckBox = function() {
            this.state.checked = this.nativeInput.checked;
          }, t3.prototype.onChangeSwitch = function() {
            this.setMod("switch", this.state.switch);
            var e4 = this.getElm("switch-slider");
            this.state.switch ? (e4 || (e4 = this.j.c.div(this.getFullElName("switch-slider"))), a.Dom.after(this.nativeInput, e4)) : a.Dom.safeRemove(e4);
          }, t3.defaultState = n2.__assign(n2.__assign({}, r2.UIInput.defaultState), { checked: false, switch: false }), n2.__decorate([(0, i.watch)("state.checked"), (0, i.hook)("ready")], t3.prototype, "onChangeChecked", null), n2.__decorate([(0, i.watch)("nativeInput:change")], t3.prototype, "onChangeNativeCheckBox", null), n2.__decorate([(0, i.watch)("state.switch"), (0, i.hook)("ready")], t3.prototype, "onChangeSwitch", null), o3 = n2.__decorate([i.component], t3);
        }(r2.UIInput);
        t2.UICheckbox = s;
      }, 41374: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UIFileInput = void 0;
        var n2 = o2(20255);
        o2(18984);
        var r2 = o2(30194), i = o2(11441), a = o2(96031), s = function(e3) {
          function t3(t4, o3) {
            var i2 = e3.call(this, t4, n2.__assign({ type: "file" }, o3)) || this;
            return i2.state = n2.__assign(n2.__assign({}, r2.UIInput.defaultState), { type: "file", onlyImages: true }), i2;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "UIFileInput";
          }, t3.prototype.createContainer = function(e4) {
            this.button = new a.UIButton(this.j, { icon: { name: "plus" } });
            var t4 = this.button.container;
            this.nativeInput || (this.nativeInput = this.createNativeInput(e4));
            var o3 = this.nativeInput;
            return o3.classList.add(this.getFullElName("input")), t4.classList.add(this.componentName), t4.appendChild(o3), t4;
          }, t3.prototype.createNativeInput = function(e4) {
            return this.j.create.fromHTML('<input\n			type="file"\n			accept="'.concat(e4.onlyImages ? "image/*" : "*", '"\n			tabindex="-1"\n			dir="auto"\n			multiple=""\n		/>'));
          }, n2.__decorate([i.component], t3);
        }(r2.UIInput);
        t2.UIFileInput = s;
      }, 63034: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(30194), t2), n2.__exportStar(o2(21639), t2), n2.__exportStar(o2(63747), t2), n2.__exportStar(o2(75840), t2), n2.__exportStar(o2(41374), t2);
      }, 30194: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UIInput = void 0;
        var n2 = o2(20255);
        o2(4591);
        var r2 = o2(53929), i = o2(76502), a = o2(1853), s = o2(24263), l = o2(43441), c = o2(77904), u = o2(60081), d = function(e3) {
          function t3(t4, r3) {
            var i2 = e3.call(this, t4, r3) || this;
            return i2.label = i2.j.c.span(i2.getFullElName("label")), i2.icon = i2.j.c.span(i2.getFullElName("icon")), i2.clearButton = i2.j.c.span(i2.getFullElName("clear"), c.Icon.get("cancel")), i2.state = n2.__assign({}, o3.defaultState), i2.__errorBox = i2.j.c.span(i2.getFullElName("error")), i2.validators = /* @__PURE__ */ new Set([]), void 0 !== (null == r3 ? void 0 : r3.value) && (r3.value = r3.value.toString()), Object.assign(i2.state, r3), void 0 !== i2.state.clearButton && (i2.j.e.on(i2.clearButton, "click", function(e4) {
              e4.preventDefault(), i2.nativeInput.value = "", i2.j.e.fire(i2.nativeInput, "input"), i2.focus();
            }).on(i2.nativeInput, "input", function() {
              i2.state.clearButton = Boolean(i2.value.length);
            }), i2.state.clearButton = Boolean(i2.value.length)), i2.j.e.on(i2.nativeInput, "focus blur", function() {
              i2.onChangeFocus();
            }).on(i2.nativeInput, "input change", i2.onChangeValue), i2.onChangeState(), i2.onChangeClassName(), i2.onChangeStateValue(), i2;
          }
          var o3;
          return n2.__extends(t3, e3), o3 = t3, t3.prototype.className = function() {
            return "UIInput";
          }, t3.prototype.onChangeClear = function() {
            this.state.clearButton ? s.Dom.after(this.nativeInput, this.clearButton) : s.Dom.safeRemove(this.clearButton);
          }, t3.prototype.onChangeClassName = function(e4, t4) {
            t4 && this.container.classList.remove(t4), this.state.className && this.container.classList.add(this.state.className);
          }, t3.prototype.onChangeState = function() {
            this.name = this.state.name;
            var e4 = this.nativeInput, t4 = this.state, o4 = t4.name, n3 = t4.icon, r3 = t4.type, a2 = t4.ref, l2 = t4.required, u2 = t4.placeholder, d2 = t4.autocomplete, p = t4.label;
            (0, i.attr)(e4, "name", o4), (0, i.attr)(e4, "type", r3), (0, i.attr)(e4, "data-ref", a2 || o4), (0, i.attr)(e4, "ref", a2 || o4), (0, i.attr)(e4, "required", l2 || null), (0, i.attr)(e4, "autocomplete", d2 ? null : "off"), (0, i.attr)(e4, "placeholder", u2 ? this.j.i18n(u2) : ""), n3 && c.Icon.exists(n3) ? (s.Dom.before(e4, this.icon), this.icon.innerHTML = c.Icon.get(n3)) : s.Dom.safeRemove(this.icon), p ? (s.Dom.before(this.wrapper, this.label), this.label.innerText = this.j.i18n(p)) : s.Dom.safeRemove(this.label), this.updateValidators();
          }, t3.prototype.updateValidators = function() {
            var e4, t4 = this;
            this.validators.clear(), this.state.required && this.validators.add(u.inputValidators.required), null === (e4 = this.state.validators) || void 0 === e4 || e4.forEach(function(e5) {
              var o4 = u.inputValidators[e5];
              o4 && t4.validators.add(o4);
            });
          }, Object.defineProperty(t3.prototype, "error", { set: function(e4) {
            this.setMod("has-error", Boolean(e4)), e4 ? (this.__errorBox.innerText = this.j.i18n(e4, this.j.i18n(this.state.label || "")), this.container.appendChild(this.__errorBox)) : s.Dom.safeRemove(this.__errorBox);
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "value", { get: function() {
            return this.nativeInput.value;
          }, set: function(e4) {
            this.value !== e4 && (this.nativeInput.value = e4, this.onChangeValue());
          }, enumerable: false, configurable: true }), t3.prototype.onChangeStateValue = function() {
            var e4 = this.state.value.toString();
            e4 !== this.value && (this.value = e4);
          }, t3.prototype.onChangeValue = function() {
            var e4, t4, o4 = this.value;
            this.state.value !== o4 && (this.state.value = o4, this.j.e.fire(this, "change", o4), null === (t4 = (e4 = this.state).onChange) || void 0 === t4 || t4.call(e4, o4));
          }, t3.prototype.validate = function() {
            var e4 = this;
            return this.error = "", (0, a.toArray)(this.validators).every(function(t4) {
              return t4(e4);
            });
          }, t3.prototype.createContainer = function(t4) {
            var o4 = e3.prototype.createContainer.call(this);
            this.wrapper = this.j.c.div(this.getFullElName("wrapper")), this.nativeInput || (this.nativeInput = this.createNativeInput());
            var n3 = this.nativeInput;
            return n3.classList.add(this.getFullElName("input")), this.wrapper.appendChild(n3), o4.appendChild(this.wrapper), (0, i.attr)(n3, "dir", this.j.o.direction || "auto"), o4;
          }, t3.prototype.createNativeInput = function(e4) {
            return this.j.create.element("input");
          }, t3.prototype.focus = function() {
            this.nativeInput.focus();
          }, Object.defineProperty(t3.prototype, "isFocused", { get: function() {
            return this.nativeInput === this.j.od.activeElement;
          }, enumerable: false, configurable: true }), t3.prototype.onChangeFocus = function() {
            this.setMod("focused", this.isFocused);
          }, t3.defaultState = { className: "", autocomplete: true, name: "", value: "", icon: "", label: "", ref: "", type: "text", placeholder: "", required: false, validators: [] }, n2.__decorate([(0, l.watch)("state.clearButton")], t3.prototype, "onChangeClear", null), n2.__decorate([(0, l.watch)("state.className")], t3.prototype, "onChangeClassName", null), n2.__decorate([(0, l.watch)(["state.name", "state.type", "state.label", "state.placeholder", "state.autocomplete", "state.icon"]), (0, l.debounce)()], t3.prototype, "onChangeState", null), n2.__decorate([(0, l.watch)("state.value")], t3.prototype, "onChangeStateValue", null), n2.__decorate([l.autobind], t3.prototype, "onChangeValue", null), o3 = n2.__decorate([l.component], t3);
        }(r2.UIElement);
        t2.UIInput = d;
      }, 75840: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UISelect = void 0;
        var n2 = o2(20255);
        o2(64194);
        var r2 = o2(67309), i = o2(11441), a = o2(30194), s = o2(60081), l = function(e3) {
          function t3(t4, r3) {
            var i2 = e3.call(this, t4, r3) || this;
            return i2.state = n2.__assign({}, o3.defaultState), Object.assign(i2.state, r3), i2;
          }
          var o3;
          return n2.__extends(t3, e3), o3 = t3, t3.prototype.className = function() {
            return "UISelect";
          }, t3.prototype.createContainer = function(t4) {
            var o4, n3 = e3.prototype.createContainer.call(this, t4), i2 = this.j, a2 = this.nativeInput, s2 = function() {
              return i2.create.element("option");
            };
            if (void 0 !== t4.placeholder) {
              var l2 = s2();
              l2.value = "", l2.text = i2.i18n(t4.placeholder), a2.add(l2);
            }
            return null === (o4 = t4.options) || void 0 === o4 || o4.forEach(function(e4) {
              var t5 = s2();
              t5.value = e4.value.toString(), t5.text = i2.i18n(e4.text), a2.add(t5);
            }), t4.size && t4.size > 0 && (0, r2.attr)(a2, "size", t4.size), t4.multiple && (0, r2.attr)(a2, "multiple", ""), n3;
          }, t3.prototype.createNativeInput = function() {
            return this.j.create.element("select");
          }, t3.prototype.updateValidators = function() {
            e3.prototype.updateValidators.call(this), this.state.required && (this.validators.delete(s.inputValidators.required), this.validators.add(s.selectValidators.required));
          }, t3.defaultState = n2.__assign(n2.__assign({}, a.UIInput.defaultState), { options: [], size: 1, multiple: false }), o3 = n2.__decorate([i.component], t3);
        }(a.UIInput);
        t2.UISelect = l;
      }, 60081: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.selectValidators = t2.inputValidators = void 0, t2.inputValidators = o2(63355), t2.selectValidators = o2(65935);
      }, 63355: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.url = t2.required = void 0;
        var n2 = o2(64350), r2 = o2(33941);
        t2.required = function(e3) {
          return !!(0, r2.trim)(e3.value).length || (e3.error = "Please fill out this field", false);
        }, t2.url = function(e3) {
          return !!(0, n2.isURL)((0, r2.trim)(e3.value)) || (e3.error = "Please enter a web address", false);
        };
      }, 65935: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.required = void 0;
        var n2 = o2(33941);
        t2.required = function(e3) {
          return !!(0, n2.trim)(e3.value).length || (e3.error = "Please fill out this field", false);
        };
      }, 61479: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UIGroup = void 0;
        var n2 = o2(20255);
        o2(70375);
        var r2 = o2(53929), i = o2(43441), a = o2(40332), s = (o2(52378), o2(24263)), l = o2(45113), c = function(e3) {
          function t3(t4, o4, n3) {
            var r3 = e3.call(this, t4, n3) || this;
            return r3.options = n3, r3.syncMod = false, r3.elements = [], r3.buttonSize = "middle", null == o4 || o4.forEach(function(e4) {
              return e4 && r3.append(e4);
            }), (null == n3 ? void 0 : n3.name) && (r3.name = n3.name), r3;
          }
          var o3;
          return n2.__extends(t3, e3), o3 = t3, t3.prototype.className = function() {
            return "UIGroup";
          }, Object.defineProperty(t3.prototype, "allChildren", { get: function() {
            for (var e4 = [], t4 = n2.__spreadArray([], n2.__read(this.elements), false); t4.length; ) {
              var r3 = t4.shift();
              (0, a.isArray)(r3) ? t4.push.apply(t4, n2.__spreadArray([], n2.__read(r3), false)) : l.Component.isInstanceOf(r3, o3) ? t4.push.apply(t4, n2.__spreadArray([], n2.__read(r3.elements), false)) : r3 && e4.push(r3);
            }
            return e4;
          }, enumerable: false, configurable: true }), t3.prototype.update = function() {
            this.elements.forEach(function(e4) {
              return e4.update();
            }), this.setMod("size", this.buttonSize);
          }, t3.prototype.append = function(e4, t4) {
            var o4 = this;
            return (0, a.isArray)(e4) ? (e4.forEach(function(e5) {
              return o4.append(e5, t4);
            }), this) : (this.elements.push(e4), e4.name && e4.container.classList.add(this.getFullElName(e4.name)), t4 ? this.getElm(t4).appendChild(e4.container) : this.appendChildToContainer(e4.container), e4.parentElement = this, e4.update(), this);
          }, t3.prototype.afterSetMod = function(e4, t4) {
            this.syncMod && this.elements.forEach(function(o4) {
              return o4.setMod(e4, t4);
            });
          }, t3.prototype.appendChildToContainer = function(e4) {
            this.container.appendChild(e4);
          }, t3.prototype.remove = function(e4) {
            var t4 = this.elements.indexOf(e4);
            return -1 !== t4 && (this.elements.splice(t4, 1), s.Dom.safeRemove(e4.container), e4.parentElement = null), this;
          }, t3.prototype.clear = function() {
            return this.elements.forEach(function(e4) {
              return e4.destruct();
            }), this.elements.length = 0, this;
          }, t3.prototype.destruct = function() {
            return this.clear(), e3.prototype.destruct.call(this);
          }, n2.__decorate([(0, i.watch)("buttonSize")], t3.prototype, "update", null), o3 = n2.__decorate([i.component], t3);
        }(r2.UIElement);
        t2.UIGroup = c;
      }, 3249: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(61479), t2), n2.__exportStar(o2(47970), t2), n2.__exportStar(o2(75018), t2), n2.__exportStar(o2(58495), t2);
      }, 47970: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UIList = void 0;
        var n2 = o2(20255);
        o2(90235);
        var r2 = o2(32070), i = o2(43441), a = o2(61479), s = o2(75018), l = o2(58495), c = o2(96031), u = o2(97642), d = o2(38546), p = o2(14556), f = o2(45113), h = function(e3) {
          function t3(t4) {
            var o3 = e3.call(this, t4) || this;
            return o3.mode = "horizontal", o3.removeButtons = [], o3.onChangeMode(), o3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "UIList";
          }, t3.prototype.onChangeMode = function() {
            this.setMod("mode", this.mode);
          }, t3.prototype.makeGroup = function() {
            return new a.UIGroup(this.jodit);
          }, Object.defineProperty(t3.prototype, "buttons", { get: function() {
            return this.allChildren.filter(function(e4) {
              return f.Component.isInstanceOf(e4, c.UIButton);
            });
          }, enumerable: false, configurable: true }), t3.prototype.getButtonsNames = function() {
            return this.buttons.map(function(e4) {
              return e4 instanceof c.UIButton && e4.state.name || "";
            }).filter(function(e4) {
              return "" !== e4;
            });
          }, t3.prototype.setRemoveButtons = function(e4) {
            return this.removeButtons = e4 || [], this;
          }, t3.prototype.build = function(e4, t4) {
            var o3 = this;
            void 0 === t4 && (t4 = null), e4 = (0, p.splitArray)(e4), this.clear();
            var n3, i2 = false, a2 = this.makeGroup();
            this.append(a2), a2.setMod("line", true);
            var c2 = function(e5) {
              var r3 = null;
              switch (e5.name) {
                case "\n":
                  (a2 = o3.makeGroup()).setMod("line", true), n3 = o3.makeGroup(), a2.append(n3), o3.append(a2);
                  break;
                case "|":
                  i2 || (i2 = true, r3 = new s.UISeparator(o3.j));
                  break;
                case "---":
                  n3.setMod("before-spacer", true);
                  var c3 = new l.UISpacer(o3.j);
                  a2.append(c3), n3 = o3.makeGroup(), a2.append(n3), i2 = false;
                  break;
                default:
                  i2 = false, r3 = o3.makeButton(e5, t4);
              }
              r3 && (n3 || (n3 = o3.makeGroup(), a2.append(n3)), n3.append(r3));
            }, f2 = function(e5) {
              return !o3.removeButtons.includes(e5.name);
            };
            return e4.forEach(function(e5) {
              if ((0, u.isButtonGroup)(e5)) {
                var t5 = e5.buttons.filter(function(e6) {
                  return e6;
                });
                t5.length && ((n3 = o3.makeGroup()).setMod("separated", true).setMod("group", e5.group), a2.append(n3), (0, r2.getStrongControlTypes)(t5, o3.j.o.controls).filter(f2).forEach(c2));
              } else {
                n3 || (n3 = o3.makeGroup(), a2.append(n3));
                var i3 = (0, d.getControlType)(e5, o3.j.o.controls);
                f2(i3) && c2(i3);
              }
            }), this.update(), this;
          }, t3.prototype.makeButton = function(e4, t4) {
            return new c.UIButton(this.j);
          }, n2.__decorate([(0, i.watch)("mode")], t3.prototype, "onChangeMode", null), n2.__decorate([i.component], t3);
        }(a.UIGroup);
        t2.UIList = h;
      }, 75018: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UISeparator = void 0;
        var n2 = o2(20255), r2 = o2(53929), i = o2(11441), a = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "UISeparator";
          }, n2.__decorate([i.component], t3);
        }(r2.UIElement);
        t2.UISeparator = a;
      }, 58495: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UISpacer = void 0;
        var n2 = o2(20255), r2 = o2(53929), i = o2(11441), a = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "UISpacer";
          }, n2.__decorate([i.component], t3);
        }(r2.UIElement);
        t2.UISpacer = a;
      }, 97642: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.flatButtonsSet = t2.isButtonGroup = void 0;
        var n2 = o2(20255), r2 = o2(49781);
        t2.isButtonGroup = function(e3) {
          return (0, r2.isArray)(e3.buttons);
        }, t2.flatButtonsSet = function(e3, o3) {
          var r3 = o3.getRegisteredButtonGroups();
          return new Set(e3.reduce(function(e4, o4) {
            var i;
            return (0, t2.isButtonGroup)(o4) ? e4 = e4.concat(n2.__spreadArray(n2.__spreadArray([], n2.__read(o4.buttons), false), n2.__read(null !== (i = r3[o4.group]) && void 0 !== i ? i : []), false)) : e4.push(o4), e4;
          }, []));
        };
      }, 38546: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.findControlType = t2.getControlType = void 0;
        var n2 = o2(20255), r2 = o2(40332), i = o2(93166);
        function a(e3, t3) {
          var o3 = n2.__read(e3.split(/\./), 2), i2 = o3[0], a2 = o3[1], s = t3;
          return null != a2 ? void 0 !== t3[i2] && (s = t3[i2]) : a2 = i2, s[a2] ? n2.__assign({ name: a2 }, (0, r2.ConfigFlatten)(s[a2])) : void 0;
        }
        t2.getControlType = function(e3, t3) {
          var o3;
          return t3 || (t3 = i.Config.defaultOptions.controls), (0, r2.isString)(e3) ? o3 = a(e3, t3) || { name: e3, command: e3, tooltip: e3 } : void 0 !== t3[(o3 = n2.__assign({ name: "empty" }, (0, r2.ConfigFlatten)(e3))).name] && (o3 = n2.__assign(n2.__assign({}, (0, r2.ConfigFlatten)(t3[o3.name])), (0, r2.ConfigFlatten)(o3))), o3;
        }, t2.findControlType = a;
      }, 32070: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getStrongControlTypes = void 0;
        var n2 = o2(38546), r2 = o2(93166), i = o2(49781), a = o2(76502);
        t2.getStrongControlTypes = function(e3, t3) {
          return ((0, i.isArray)(e3) ? e3 : (0, a.keys)(e3, false).map(function(t4) {
            return (0, a.ConfigProto)({ name: t4 }, e3[t4] || {});
          })).map(function(e4) {
            return (0, n2.getControlType)(e4, t3 || r2.Config.defaultOptions.controls);
          });
        };
      }, 77904: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Icon = void 0;
        var n2 = o2(26911), r2 = o2(40332), i = function() {
          function e3() {
          }
          return e3.getIcon = function(t3) {
            return /<svg/i.test(t3) ? t3 : e3.icons[t3] || e3.icons[t3.replace(/-/g, "_")] || e3.icons[t3.replace(/_/g, "-")] || e3.icons[(0, r2.camelCase)(t3)] || e3.icons[(0, r2.kebabCase)(t3)] || e3.icons[t3.toLowerCase()];
          }, e3.exists = function(e4) {
            return void 0 !== this.getIcon(e4);
          }, e3.get = function(e4, t3) {
            return void 0 === t3 && (t3 = "<span></span>"), this.getIcon(e4) || t3;
          }, e3.set = function(e4, t3) {
            return this.icons[e4.replace("_", "-")] = t3, this;
          }, e3.makeIcon = function(t3, o3) {
            var r3, i2;
            if (o3) {
              var a = o3.name.replace(/[^a-zA-Z0-9]/g, "_");
              if (o3.iconURL) i2 = t3.c.span(), (0, n2.css)(i2, "backgroundImage", "url(" + o3.iconURL.replace("{basePath}", (null == t3 ? void 0 : t3.basePath) || "") + ")");
              else {
                var s = t3.e.fire("getIcon", o3.name, o3, a) || e3.get(o3.name, "") || (null === (r3 = t3.o.extraIcons) || void 0 === r3 ? void 0 : r3[o3.name]);
                s && (i2 = t3.c.fromHTML(s.trim()), /^<svg/i.test(o3.name) || i2.classList.add("jodit-icon_" + a));
              }
            }
            return i2 && (i2.classList.add("jodit-icon"), i2.style.fill = o3.fill), i2;
          }, e3.icons = {}, e3;
        }();
        t2.Icon = i;
      }, 2074: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(53929), t2), n2.__exportStar(o2(96516), t2), n2.__exportStar(o2(35799), t2), n2.__exportStar(o2(3249), t2), n2.__exportStar(o2(95963), t2), n2.__exportStar(o2(77904), t2), n2.__exportStar(o2(63682), t2);
      }, 35799: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(20255).__exportStar(o2(12680), t2);
      }, 12680: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Popup = void 0;
        var n2 = o2(20255);
        o2(88477);
        var r2 = o2(24263), i = o2(40332), a = (o2(52378), o2(53929)), s = o2(43441), l = o2(45113), c = o2(17332), u = function(e3) {
          function t3(t4, o3) {
            void 0 === o3 && (o3 = true);
            var n3 = e3.call(this, t4) || this;
            return n3.smart = o3, n3.isOpened = false, n3.strategy = "leftBottom", n3.viewBound = function() {
              return { left: 0, top: 0, width: n3.ow.innerWidth, height: n3.ow.innerHeight };
            }, n3.childrenPopups = /* @__PURE__ */ new Set(), (0, i.attr)(n3.container, "role", "popup"), n3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "Popup";
          }, t3.prototype.updateParentElement = function(o3) {
            var n3 = this;
            return o3 !== this && l.Component.isInstanceOf(o3, t3) && (this.childrenPopups.forEach(function(e4) {
              !o3.closest(e4) && e4.isOpened && e4.close();
            }), this.childrenPopups.has(o3) || this.j.e.on(o3, "beforeClose", function() {
              n3.childrenPopups.delete(o3);
            }), this.childrenPopups.add(o3)), e3.prototype.updateParentElement.call(this, o3);
          }, t3.prototype.setContent = function(e4) {
            r2.Dom.detach(this.container);
            var t4, o3 = this.j.c.div("".concat(this.componentName, "__content"));
            return l.Component.isInstanceOf(e4, a.UIElement) ? (t4 = e4.container, e4.parentElement = this) : t4 = (0, i.isString)(e4) ? this.j.c.fromHTML(e4) : e4, o3.appendChild(t4), this.container.appendChild(o3), this.updatePosition(), this;
          }, t3.prototype.open = function(e4, o3, n3) {
            if (void 0 === o3 && (o3 = false), (0, i.markOwner)(this.jodit, this.container), this.calculateZIndex(), this.isOpened = true, this.addGlobalListeners(), this.targetBound = o3 ? this.getKeepBound(e4) : e4, n3) n3.appendChild(this.container);
            else {
              var r3 = (0, c.getContainer)(this.jodit, t3);
              n3 !== this.container.parentElement && r3.appendChild(this.container);
            }
            return this.updatePosition(), this.j.e.fire(this, "afterOpen"), this;
          }, t3.prototype.calculateZIndex = function() {
            var e4 = this;
            if (!this.container.style.zIndex) {
              var t4 = function(t5) {
                var o4 = t5.container.style.zIndex || t5.o.zIndex;
                return !!o4 && (e4.setZIndex(1 + parseInt(o4.toString(), 10)), true);
              }, o3 = this.j;
              if (!t4(o3)) for (var n3 = this.parentElement; n3; ) {
                if (t4(o3)) return;
                if (n3.container.style.zIndex) return void this.setZIndex(1 + parseInt(n3.container.style.zIndex.toString(), 10));
                if (!n3.parentElement && n3.container.parentElement) {
                  var r3 = a.UIElement.closestElement(n3.container.parentElement, a.UIElement);
                  if (r3) {
                    n3 = r3;
                    continue;
                  }
                }
                n3 = n3.parentElement;
              }
            }
          }, t3.prototype.getKeepBound = function(e4) {
            var t4 = this, o3 = e4(), a2 = this.od.elementFromPoint(o3.left, o3.top);
            if (!a2) return e4;
            var s2 = r2.Dom.isHTMLElement(a2) ? a2 : a2.parentElement, l2 = (0, i.position)(s2, this.j);
            return function() {
              var o4 = e4(), r3 = (0, i.position)(s2, t4.j);
              return n2.__assign(n2.__assign({}, o4), { top: o4.top + (r3.top - l2.top), left: o4.left + (r3.left - l2.left) });
            };
          }, t3.prototype.updatePosition = function() {
            if (!this.isOpened) return this;
            var e4 = n2.__read(this.calculatePosition(this.targetBound(), this.viewBound(), (0, i.position)(this.container, this.j)), 2), t4 = e4[0];
            return this.setMod("strategy", e4[1]), (0, i.css)(this.container, { left: t4.left, top: t4.top }), this.childrenPopups.forEach(function(e5) {
              return e5.updatePosition();
            }), this;
          }, t3.prototype.throttleUpdatePosition = function() {
            this.updatePosition();
          }, t3.prototype.calculatePosition = function(e4, o3, r3, a2) {
            void 0 === a2 && (a2 = this.strategy);
            var s2 = { left: e4.left, right: e4.left - (r3.width - e4.width) }, l2 = { bottom: e4.top + e4.height, top: e4.top - r3.height }, c2 = Object.keys(s2).reduce(function(e5, t4) {
              return e5.concat(Object.keys(l2).map(function(e6) {
                return "".concat(t4).concat((0, i.ucfirst)(e6));
              }));
            }, []), u2 = function(e5) {
              var t4 = n2.__read((0, i.kebabCase)(e5).split("-"), 2);
              return { left: s2[t4[0]], top: l2[t4[1]], width: r3.width, height: r3.height };
            }, d = function(e5) {
              return t3.boxInView(u2(a2), e5) ? a2 : c2.find(function(o4) {
                if (t3.boxInView(u2(o4), e5)) return o4;
              }) || null;
            }, p = d((0, i.position)(this.j.container, this.j));
            return p && t3.boxInView(u2(p), o3) || (p = d(o3) || p || a2), [u2(p), p];
          }, t3.boxInView = function(e4, t4) {
            return !(-2 > e4.top - t4.top || -2 > e4.left - t4.left || -2 > t4.top + t4.height - (e4.top + e4.height) || -2 > t4.left + t4.width - (e4.left + e4.width));
          }, t3.prototype.close = function() {
            return this.isOpened ? (this.isOpened = false, this.childrenPopups.forEach(function(e4) {
              return e4.close();
            }), this.j.e.fire(this, "beforeClose"), this.j.e.fire("beforePopupClose", this), this.removeGlobalListeners(), r2.Dom.safeRemove(this.container), this) : this;
          }, t3.prototype.closeOnOutsideClick = function(e4) {
            this.isOpened && !this.isOwnClick(e4) && this.close();
          }, t3.prototype.isOwnClick = function(e4) {
            if (!e4.target) return false;
            var o3 = a.UIElement.closestElement(e4.target, t3);
            return Boolean(o3 && (this === o3 || o3.closest(this)));
          }, t3.prototype.addGlobalListeners = function() {
            var e4 = this, t4 = this.throttleUpdatePosition, o3 = this.ow;
            c.eventEmitter.on("closeAllPopups", this.close), this.smart && this.j.e.on("escape", this.close).on("mousedown touchstart", this.closeOnOutsideClick).on(o3, "mousedown touchstart", this.closeOnOutsideClick), this.j.e.on("closeAllPopups", this.close).on("resize", t4).on(this.container, "scroll mousewheel", t4).on(o3, "scroll", t4).on(o3, "resize", t4), r2.Dom.up(this.j.container, function(o4) {
              o4 && e4.j.e.on(o4, "scroll mousewheel", t4);
            });
          }, t3.prototype.removeGlobalListeners = function() {
            var e4 = this, t4 = this.throttleUpdatePosition, o3 = this.ow;
            c.eventEmitter.off("closeAllPopups", this.close), this.smart && this.j.e.off("escape", this.close).off("mousedown touchstart", this.closeOnOutsideClick).off(o3, "mousedown touchstart", this.closeOnOutsideClick), this.j.e.off("closeAllPopups", this.close).off("resize", t4).off(this.container, "scroll mousewheel", t4).off(o3, "scroll", t4).off(o3, "resize", t4), r2.Dom.up(this.j.container, function(o4) {
              o4 && e4.j.e.off(o4, "scroll mousewheel", t4);
            });
          }, t3.prototype.setZIndex = function(e4) {
            this.container.style.zIndex = e4.toString();
          }, t3.prototype.destruct = function() {
            return this.close(), e3.prototype.destruct.call(this);
          }, n2.__decorate([s.autobind], t3.prototype, "updatePosition", null), n2.__decorate([(0, s.throttle)(10), s.autobind], t3.prototype, "throttleUpdatePosition", null), n2.__decorate([s.autobind], t3.prototype, "close", null), n2.__decorate([s.autobind], t3.prototype, "closeOnOutsideClick", null), t3;
        }(a.UIElement);
        t2.Popup = u;
      }, 63682: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ProgressBar = void 0;
        var n2 = o2(20255);
        o2(50197);
        var r2 = o2(24263), i = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "ProgressBar";
          }, t3.prototype.render = function() {
            return "<div><div></div></div>";
          }, t3.prototype.show = function() {
            return (this.j.workplace || this.j.container).appendChild(this.container), this;
          }, t3.prototype.hide = function() {
            return r2.Dom.safeRemove(this.container), this;
          }, t3.prototype.progress = function(e4) {
            return this.container.style.width = e4.toFixed(2) + "%", this;
          }, t3.prototype.destruct = function() {
            return this.hide(), e3.prototype.destruct.call(this);
          }, t3;
        }(o2(53929).UIElement);
        t2.ProgressBar = i;
      }, 43608: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ViewWithToolbar = void 0;
        var n2 = o2(20255);
        o2(39008);
        var r2 = o2(75902), i = o2(40332), a = o2(64968), s = o2(81438), l = o2(56562), c = o2(97642), u = o2(43441), d = function(e3) {
          function t3(t4, o3) {
            void 0 === o3 && (o3 = false);
            var n3 = e3.call(this, t4, o3) || this;
            return n3.toolbar = (0, s.makeCollection)(n3), n3.defaultToolbarContainer = n3.c.div("jodit-toolbar__box"), n3.registeredButtons = /* @__PURE__ */ new Set(), n3.groupToButtons = {}, n3.isJodit = false, n3.isJodit = o3, n3.e.on("beforeToolbarBuild", n3.beforeToolbarBuild), n3;
          }
          return n2.__extends(t3, e3), Object.defineProperty(t3.prototype, "toolbarContainer", { get: function() {
            return this.o.fullsize || !(0, i.isString)(this.o.toolbar) && !a.Dom.isHTMLElement(this.o.toolbar) ? (this.o.toolbar && a.Dom.appendChildFirst(this.container, this.defaultToolbarContainer), this.defaultToolbarContainer) : (0, i.resolveElement)(this.o.toolbar, this.o.shadowRoot || this.od);
          }, enumerable: false, configurable: true }), t3.prototype.setPanel = function(e4) {
            this.o.toolbar = e4, this.buildToolbar();
          }, t3.prototype.buildToolbar = function() {
            if (this.o.toolbar) {
              var e4 = this.o.buttons ? (0, i.splitArray)(this.o.buttons) : [];
              this.toolbar.setRemoveButtons(this.o.removeButtons).build(e4.concat(this.o.extraButtons || [])).appendTo(this.toolbarContainer);
            }
          }, t3.prototype.getRegisteredButtonGroups = function() {
            return this.groupToButtons;
          }, t3.prototype.registerButton = function(e4) {
            var t4;
            this.registeredButtons.add(e4);
            var o3 = null !== (t4 = e4.group) && void 0 !== t4 ? t4 : "other";
            return this.groupToButtons[o3] || (this.groupToButtons[o3] = []), null != e4.position ? this.groupToButtons[o3][e4.position] = e4.name : this.groupToButtons[o3].push(e4.name), this;
          }, t3.prototype.unregisterButton = function(e4) {
            var t4;
            this.registeredButtons.delete(e4);
            var o3 = null !== (t4 = e4.group) && void 0 !== t4 ? t4 : "other", n3 = this.groupToButtons[o3];
            if (n3) {
              var r3 = n3.indexOf(e4.name);
              -1 !== r3 && n3.splice(r3, 1), 0 === n3.length && delete this.groupToButtons[o3];
            }
            return this;
          }, t3.prototype.beforeToolbarBuild = function(e4) {
            var t4 = this;
            if (Object.keys(this.groupToButtons).length) return e4.map(function(e5) {
              return (0, c.isButtonGroup)(e5) && e5.group && t4.groupToButtons[e5.group] ? { group: e5.group, buttons: n2.__spreadArray(n2.__spreadArray([], n2.__read(e5.buttons), false), n2.__read(t4.groupToButtons[e5.group]), false) } : e5;
            });
          }, t3.prototype.destruct = function() {
            this.isDestructed || (this.setStatus(l.STATUSES.beforeDestruct), this.e.off("beforeToolbarBuild", this.beforeToolbarBuild), this.toolbar.destruct(), e3.prototype.destruct.call(this));
          }, n2.__decorate([u.autobind], t3.prototype, "beforeToolbarBuild", null), t3;
        }(r2.View);
        t2.ViewWithToolbar = d;
      }, 75902: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.View = void 0;
        var n2 = o2(20255), r2 = o2(77462), i = o2(40332), a = o2(86893), s = o2(87837), l = o2(17332), c = o2(43441), u = o2(59829), d = o2(55395), p = o2(71014), f = function(e3) {
          function t3(t4, n3) {
            void 0 === n3 && (n3 = false);
            var i2 = e3.call(this) || this;
            return i2.isJodit = n3, i2.isView = true, i2.parent = null, i2.mods = {}, i2.components = /* @__PURE__ */ new Set(), i2.version = "3.24.9", i2.buffer = r2.Storage.makeStorage(), i2.storage = r2.Storage.makeStorage(true, i2.componentName), i2.OPTIONS = o3.defaultOptions, i2.__isFullSize = false, i2.__whoLocked = "", i2.isLockedNotBy = function(e4) {
              return i2.isLocked && i2.__whoLocked !== e4;
            }, i2.__modulesInstances = /* @__PURE__ */ new Map(), i2.id = (/* @__PURE__ */ new Date()).getTime().toString(), i2.buffer = r2.Storage.makeStorage(), i2.initOptions(t4), i2.initOwners(), i2.events = new d.EventEmitter(i2.od), i2.create = new s.Create(i2.od), i2.container = i2.c.div("jodit ".concat(i2.componentName)), i2.progressbar = new s.ProgressBar(i2), i2.message = new p.UIMessages(i2, i2.container), i2;
          }
          var o3;
          return n2.__extends(t3, e3), o3 = t3, Object.defineProperty(t3.prototype, "basePath", { get: function() {
            return this.o.basePath ? this.o.basePath : a.BASE_PATH;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "defaultTimeout", { get: function() {
            return (0, i.isVoid)(this.o.defaultTimeout) ? 100 : this.o.defaultTimeout;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "c", { get: function() {
            return this.create;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "container", { get: function() {
            return this.__container;
          }, set: function(e4) {
            this.__container = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "e", { get: function() {
            return this.events;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "options", { get: function() {
            return this.__options;
          }, set: function(e4) {
            this.__options = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "o", { get: function() {
            return this.options;
          }, enumerable: false, configurable: true }), t3.prototype.i18n = function(e4) {
            for (var t4 = [], o4 = 1; arguments.length > o4; o4++) t4[o4 - 1] = arguments[o4];
            return (0, i.i18n)(e4, t4, this.options);
          }, t3.prototype.toggleFullSize = function(e4) {
            void 0 === e4 && (e4 = !this.__isFullSize), e4 !== this.__isFullSize && (this.__isFullSize = e4, this.e.fire("toggleFullSize", e4));
          }, Object.defineProperty(t3.prototype, "isLocked", { get: function() {
            return "" !== this.__whoLocked;
          }, enumerable: false, configurable: true }), t3.prototype.lock = function(e4) {
            return void 0 === e4 && (e4 = "any"), !this.isLocked && (this.__whoLocked = e4, true);
          }, t3.prototype.unlock = function() {
            return !!this.isLocked && (this.__whoLocked = "", true);
          }, Object.defineProperty(t3.prototype, "isFullSize", { get: function() {
            return this.__isFullSize;
          }, enumerable: false, configurable: true }), t3.prototype.getVersion = function() {
            return "3.24.9";
          }, t3.getVersion = function() {
            return "3.24.9";
          }, t3.prototype.initOptions = function(e4) {
            this.options = (0, i.ConfigProto)(e4 || {}, (0, i.ConfigProto)(this.options || {}, o3.defaultOptions));
          }, t3.prototype.initOwners = function() {
            var e4;
            this.ownerWindow = null !== (e4 = this.o.ownerWindow) && void 0 !== e4 ? e4 : window;
          }, t3.prototype.attachEvents = function(e4) {
            var t4 = this;
            if (e4) {
              var o4 = null == e4 ? void 0 : e4.events;
              o4 && Object.keys(o4).forEach(function(e5) {
                return t4.e.on(e5, o4[e5]);
              });
            }
          }, t3.prototype.getInstance = function(e4, t4) {
            var o4 = this.e.fire((0, i.camelCase)("getInstance_" + e4), t4);
            if (o4) return o4;
            var n3 = l.modules[e4], r3 = this.__modulesInstances;
            if (!(0, i.isFunction)(n3)) throw (0, i.error)("Need real module name");
            if (!r3.has(e4)) {
              var a2 = n3.prototype instanceof s.ViewComponent ? new n3(this, t4) : new n3(t4);
              this.components.add(a2), r3.set(e4, a2);
            }
            return r3.get(e4);
          }, t3.prototype.addDisclaimer = function(e4) {
            this.container.appendChild(e4);
          }, t3.prototype.beforeDestruct = function() {
            this.e.fire(s.STATUSES.beforeDestruct, this), this.components.forEach(function(e4) {
              (0, i.isDestructable)(e4) && !e4.isInDestruct && e4.destruct();
            }), this.components.clear();
          }, t3.prototype.destruct = function() {
            this.isDestructed || (this.progressbar.destruct(), this.message.destruct(), this.async && this.async.destruct(), this.events && this.e.destruct(), this.buffer && this.buffer.clear(), s.Dom.safeRemove(this.container), e3.prototype.destruct.call(this));
          }, t3.esNext = false, n2.__decorate([(0, c.hook)(s.STATUSES.beforeDestruct)], t3.prototype, "beforeDestruct", null), o3 = n2.__decorate([(0, c.derive)(u.Mods, u.Elms)], t3);
        }(s.Component);
        t2.View = f, f.defaultOptions = { extraButtons: [], textIcons: false, namespace: "", removeButtons: [], zIndex: 100002, defaultTimeout: 100, fullsize: false, showTooltip: true, useNativeTooltip: false, buttons: [], globalFullSize: true, language: "auto" };
      }, 37920: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Jodit = void 0;
        var n2 = o2(20255), r2 = o2(93166), i = o2(86893), a = o2(87837), s = o2(40332), l = o2(77462), c = o2(86893), u = o2(17332), d = o2(43441), p = o2(59829), f = o2(30056), h = "data-jodit-default-style-display", m = "data-jodit-default-classes", Jodit2 = function(e3) {
          function Jodit3(o3, n3) {
            var r3 = e3.call(this, n3, true) || this;
            r3.isJodit = true, r3.commands = /* @__PURE__ */ new Map(), r3.__selectionLocked = null, r3.__wasReadOnly = false, r3.createInside = new a.Create(function() {
              return r3.ed;
            }, r3.o.createAttributes), r3.editorIsActive = false, r3.__mode = i.MODE_WYSIWYG, r3.__callChangeCount = 0, r3.__isSilentChange = false, r3.__elementToPlace = /* @__PURE__ */ new Map();
            try {
              var c2 = (0, s.resolveElement)(o3, r3.o.shadowRoot || r3.od);
              if (t3.isJoditAssigned(c2)) return c2.component;
            } catch (e4) {
              throw r3.destruct(), e4;
            }
            r3.setStatus(a.STATUSES.beforeInit), r3.id = (0, s.attr)((0, s.resolveElement)(o3, r3.o.shadowRoot || r3.od), "id") || (/* @__PURE__ */ new Date()).getTime().toString(), u.instances[r3.id] = r3, r3.storage = l.Storage.makeStorage(true, r3.id), r3.attachEvents(n3), r3.e.on(r3.ow, "resize", function() {
              r3.e && r3.e.fire("resize");
            }), r3.e.on("prepareWYSIWYGEditor", r3.__prepareWYSIWYGEditor), r3.selection = new a.Select(r3);
            var d2 = r3.beforeInitHook();
            return (0, s.callPromise)(d2, function() {
              r3.e.fire("beforeInit", r3), u.pluginSystem.__init(r3), r3.e.fire("afterPluginSystemInit", r3), r3.e.on("changePlace", function() {
                r3.setReadOnly(r3.o.readonly), r3.setDisabled(r3.o.disabled);
              }), r3.places.length = 0;
              var e4 = r3.addPlace(o3, n3);
              u.instances[r3.id] = r3, (0, s.callPromise)(e4, function() {
                r3.e && r3.e.fire("afterInit", r3), r3.afterInitHook(), r3.setStatus(a.STATUSES.ready), r3.e.fire("afterConstructor", r3);
              });
            }), r3;
          }
          var t3;
          return n2.__extends(Jodit3, e3), t3 = Jodit3, Jodit3.prototype.className = function() {
            return "Jodit";
          }, Jodit3.prototype.waitForReady = function() {
            var e4 = this;
            return this.isReady ? Promise.resolve(this) : this.async.promise(function(t4) {
              e4.hookStatus("ready", function() {
                return t4(e4);
              });
            });
          }, Object.defineProperty(Jodit3, "ready", { get: function() {
            return new Promise(function(e4) {
              u.eventEmitter.on("oditready", e4);
            });
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "text", { get: function() {
            if (this.editor) return this.editor.innerText || "";
            var e4 = this.createInside.div();
            return e4.innerHTML = this.getElementValue(), e4.innerText || "";
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "defaultTimeout", { get: function() {
            return (0, s.isNumber)(this.o.defaultTimeout) ? this.o.defaultTimeout : r2.Config.defaultOptions.defaultTimeout;
          }, enumerable: false, configurable: true }), Jodit3.atom = function(e4) {
            return (0, s.markAsAtomic)(e4);
          }, Jodit3.make = function(e4, t4) {
            return new this(e4, t4);
          }, Jodit3.isJoditAssigned = function(e4) {
            return e4 && (0, s.isJoditObject)(e4.component) && !e4.component.isInDestruct;
          }, Object.defineProperty(Jodit3, "defaultOptions", { get: function() {
            return r2.Config.defaultOptions;
          }, enumerable: false, configurable: true }), Jodit3.prototype.__setPlaceField = function(e4, t4) {
            this.currentPlace || (this.currentPlace = {}, this.places = [this.currentPlace]), this.currentPlace[e4] = t4;
          }, Object.defineProperty(Jodit3.prototype, "element", { get: function() {
            return this.currentPlace.element;
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "editor", { get: function() {
            return this.currentPlace.editor;
          }, set: function(e4) {
            this.__setPlaceField("editor", e4);
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "container", { get: function() {
            return this.currentPlace.container;
          }, set: function(e4) {
            this.__setPlaceField("container", e4);
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "workplace", { get: function() {
            return this.currentPlace.workplace;
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "statusbar", { get: function() {
            return this.currentPlace.statusbar;
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "iframe", { get: function() {
            return this.currentPlace.iframe;
          }, set: function(e4) {
            this.__setPlaceField("iframe", e4);
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "history", { get: function() {
            return this.currentPlace.history;
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "observer", { get: function() {
            return this.history;
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "editorWindow", { get: function() {
            return this.currentPlace.editorWindow;
          }, set: function(e4) {
            this.__setPlaceField("editorWindow", e4);
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "ew", { get: function() {
            return this.editorWindow;
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "editorDocument", { get: function() {
            return this.currentPlace.editorWindow.document;
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "ed", { get: function() {
            return this.editorDocument;
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "options", { get: function() {
            return this.currentPlace.options;
          }, set: function(e4) {
            this.__setPlaceField("options", e4);
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "s", { get: function() {
            return this.selection;
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "uploader", { get: function() {
            return this.getInstance("Uploader", this.o.uploader);
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "filebrowser", { get: function() {
            var e4 = this, t4 = (0, s.ConfigProto)({ defaultTimeout: e4.defaultTimeout, uploader: e4.o.uploader, language: e4.o.language, license: e4.o.license, theme: e4.o.theme, shadowRoot: e4.o.shadowRoot, defaultCallback: function(t5) {
              t5.files && t5.files.length && t5.files.forEach(function(o3, n3) {
                var r3 = t5.baseurl + o3;
                t5.isImages && t5.isImages[n3] ? e4.s.insertImage(r3, null, e4.o.imageDefaultWidth) : e4.s.insertNode(e4.createInside.fromHTML("<a href='".concat(r3, "' title='").concat(r3, "'>").concat(r3, "</a>")));
              });
            } }, this.o.filebrowser);
            return e4.getInstance("FileBrowser", t4);
          }, enumerable: false, configurable: true }), Object.defineProperty(Jodit3.prototype, "mode", { get: function() {
            return this.__mode;
          }, set: function(e4) {
            this.setMode(e4);
          }, enumerable: false, configurable: true }), Jodit3.prototype.getNativeEditorValue = function() {
            var e4 = this.e.fire("beforeGetNativeEditorValue");
            return (0, s.isString)(e4) ? e4 : this.editor ? this.editor.innerHTML : this.getElementValue();
          }, Jodit3.prototype.setNativeEditorValue = function(e4) {
            var t4 = { value: e4 };
            this.e.fire("beforeSetNativeEditorValue", t4) || this.editor && (this.editor.innerHTML = t4.value);
          }, Object.defineProperty(Jodit3.prototype, "value", { get: function() {
            return this.getEditorValue();
          }, set: function(e4) {
            this.setEditorValue(e4), this.history.__processChanges();
          }, enumerable: false, configurable: true }), Jodit3.prototype.synchronizeValues = function() {
            this.__imdSynchronizeValues();
          }, Jodit3.prototype.__imdSynchronizeValues = function() {
            this.setEditorValue();
          }, Jodit3.prototype.getEditorValue = function(e4, t4) {
            var o3;
            if (void 0 === e4 && (e4 = true), void 0 !== (o3 = this.e.fire("beforeGetValueFromEditor", t4))) return o3;
            o3 = this.getNativeEditorValue().replace(i.INVISIBLE_SPACE_REG_EXP(), ""), e4 && (o3 = o3.replace(/<span[^>]+id="jodit-selection_marker_[^>]+><\/span>/g, "")), "<br>" === o3 && (o3 = "");
            var n3 = { value: o3 };
            return this.e.fire("afterGetValueFromEditor", n3, t4), n3.value;
          }, Jodit3.prototype.setEditorValue = function(e4) {
            var t4 = this.e.fire("beforeSetValueToEditor", e4);
            if (false !== t4) if ((0, s.isString)(t4) && (e4 = t4), this.editor) {
              if (!(0, s.isString)(e4) && !(0, s.isVoid)(e4)) throw (0, s.error)("value must be string");
              (0, s.isVoid)(e4) || this.getNativeEditorValue() === e4 || this.setNativeEditorValue(e4), this.e.fire("postProcessSetEditorValue");
              var o3 = this.getElementValue(), n3 = this.getEditorValue();
              if (!this.__isSilentChange && o3 !== n3 && i.SAFE_COUNT_CHANGE_CALL > this.__callChangeCount) {
                this.__setElementValue(n3), this.__callChangeCount += 1;
                try {
                  this.history.__upTick(), this.e.fire("change", n3, o3), this.e.fire(this.history, "change", n3, o3);
                } finally {
                  this.__callChangeCount = 0;
                }
              }
            } else void 0 !== e4 && this.__setElementValue(e4);
          }, Jodit3.prototype.updateElementValue = function() {
            this.__setElementValue(this.getEditorValue());
          }, Jodit3.prototype.getElementValue = function() {
            return void 0 !== this.element.value ? this.element.value : this.element.innerHTML;
          }, Jodit3.prototype.setElementValue = function(e4) {
            var t4 = this.getElementValue();
            return (void 0 === e4 || (0, s.isString)(e4) && e4 !== t4) && (null != e4 || (e4 = t4), e4 !== this.getEditorValue() && this.setEditorValue(e4)), this.__setElementValue(e4);
          }, Jodit3.prototype.__setElementValue = function(e4) {
            var t4 = this;
            if (!(0, s.isString)(e4)) throw (0, s.error)("value must be string");
            if (this.element !== this.container && e4 !== this.getElementValue()) {
              var o3 = { value: e4 }, n3 = this.e.fire("beforeSetElementValue", o3);
              (0, s.callPromise)(n3, function() {
                void 0 !== t4.element.value ? t4.element.value = o3.value : t4.element.innerHTML = o3.value, t4.e.fire("afterSetElementValue", o3);
              });
            }
          }, Jodit3.prototype.registerCommand = function(e4, t4, o3) {
            var n3 = e4.toLowerCase(), r3 = this.commands.get(n3);
            if (void 0 === r3 && this.commands.set(n3, r3 = []), r3.push(t4), !(0, s.isFunction)(t4)) {
              var i2 = this.o.commandToHotkeys[n3] || this.o.commandToHotkeys[e4] || t4.hotkeys;
              i2 && this.registerHotkeyToCommand(i2, n3, null == o3 ? void 0 : o3.stopPropagation);
            }
            return this;
          }, Jodit3.prototype.registerHotkeyToCommand = function(e4, t4, o3) {
            var n3 = this;
            void 0 === o3 && (o3 = true);
            var r3 = (0, s.asArray)(e4).map(s.normalizeKeyAliases).map(function(e5) {
              return e5 + ".hotkey";
            }).join(" ");
            this.e.off(r3).on(r3, function(e5, r4) {
              return r4 && (r4.shouldStop = null == o3 || o3), n3.execCommand(t4);
            });
          }, Jodit3.prototype.execCommand = function(e4, t4, o3) {
            for (var r3, i2 = [], a2 = 3; arguments.length > a2; a2++) i2[a2 - 3] = arguments[a2];
            if (this.s.isFocused() || this.s.focus(), !this.o.readonly || this.o.allowCommandsInReadOnly.includes(e4)) {
              var s2;
              if (e4 = e4.toLowerCase(), false !== (s2 = (r3 = this.e).fire.apply(r3, n2.__spreadArray(["beforeCommand", e4, t4, o3], n2.__read(i2), false))) && (s2 = this.__execCustomCommands.apply(this, n2.__spreadArray([e4, t4, o3], n2.__read(i2), false))), false !== s2) if (this.s.focus(), "selectall" === e4) this.s.select(this.editor, true), this.s.expandSelection();
              else try {
                s2 = this.nativeExecCommand(e4, t4, o3);
              } catch (e5) {
              }
              return this.e.fire("afterCommand", e4, t4, o3), this.setEditorValue(), s2;
            }
          }, Jodit3.prototype.nativeExecCommand = function(e4, t4, o3) {
            this.__isSilentChange = true;
            try {
              return this.ed.execCommand(e4, t4, o3);
            } finally {
              this.__isSilentChange = false;
            }
          }, Jodit3.prototype.__execCustomCommands = function(e4, t4, o3) {
            for (var r3 = this, i2 = [], a2 = 3; arguments.length > a2; a2++) i2[a2 - 3] = arguments[a2];
            e4 = e4.toLowerCase();
            var l2, c2 = this.commands.get(e4);
            if (void 0 !== c2) return c2.forEach(function(a3) {
              var c3, u2 = (c3 = (0, s.isFunction)(a3) ? a3 : a3.exec).call.apply(c3, n2.__spreadArray([r3, e4, t4, o3], n2.__read(i2), false));
              void 0 !== u2 && (l2 = u2);
            }), l2;
          }, Jodit3.prototype.lock = function(t4) {
            return void 0 === t4 && (t4 = "any"), !!e3.prototype.lock.call(this, t4) && (this.__selectionLocked = this.s.save(), this.s.clear(), this.editor.classList.add("jodit_lock"), this.e.fire("lock", true), true);
          }, Jodit3.prototype.unlock = function() {
            return !!e3.prototype.unlock.call(this) && (this.editor.classList.remove("jodit_lock"), this.__selectionLocked && this.s.restore(), this.e.fire("lock", false), true);
          }, Jodit3.prototype.getMode = function() {
            return this.mode;
          }, Jodit3.prototype.isEditorMode = function() {
            return this.getRealMode() === i.MODE_WYSIWYG;
          }, Jodit3.prototype.getRealMode = function() {
            if (this.getMode() !== i.MODE_SPLIT) return this.getMode();
            var e4 = this.od.activeElement;
            return e4 && (e4 === this.iframe || a.Dom.isOrContains(this.editor, e4) || a.Dom.isOrContains(this.toolbar.container, e4)) ? i.MODE_WYSIWYG : i.MODE_SOURCE;
          }, Jodit3.prototype.setMode = function(e4) {
            var t4 = this, o3 = this.getMode(), n3 = { mode: parseInt(e4.toString(), 10) }, r3 = ["jodit-wysiwyg_mode", "jodit-source__mode", "jodit_split_mode"];
            false !== this.e.fire("beforeSetMode", n3) && (this.__mode = [i.MODE_SOURCE, i.MODE_WYSIWYG, i.MODE_SPLIT].includes(n3.mode) ? n3.mode : i.MODE_WYSIWYG, this.o.saveModeInStorage && this.storage.set("jodit_default_mode", this.mode), r3.forEach(function(e5) {
              t4.container.classList.remove(e5);
            }), this.container.classList.add(r3[this.mode - 1]), o3 !== this.getMode() && this.e.fire("afterSetMode"));
          }, Jodit3.prototype.toggleMode = function() {
            var e4 = this.getMode();
            [i.MODE_SOURCE, i.MODE_WYSIWYG, this.o.useSplitMode ? i.MODE_SPLIT : 9].includes(e4 + 1) ? e4 += 1 : e4 = i.MODE_WYSIWYG, this.setMode(e4);
          }, Jodit3.prototype.setDisabled = function(e4) {
            this.o.disabled = e4;
            var t4 = this.__wasReadOnly;
            this.setReadOnly(e4 || t4), this.__wasReadOnly = t4, this.editor && (this.editor.setAttribute("aria-disabled", e4.toString()), this.container.classList.toggle("jodit_disabled", e4), this.e.fire("disabled", e4));
          }, Jodit3.prototype.getDisabled = function() {
            return this.o.disabled;
          }, Jodit3.prototype.setReadOnly = function(e4) {
            this.__wasReadOnly !== e4 && (this.__wasReadOnly = e4, this.o.readonly = e4, e4 ? this.editor && this.editor.removeAttribute("contenteditable") : this.editor && this.editor.setAttribute("contenteditable", "true"), this.e && this.e.fire("readonly", e4));
          }, Jodit3.prototype.getReadOnly = function() {
            return this.o.readonly;
          }, Jodit3.prototype.focus = function() {
            this.getMode() !== i.MODE_SOURCE && this.s.focus();
          }, Object.defineProperty(Jodit3.prototype, "isFocused", { get: function() {
            return this.s.isFocused();
          }, enumerable: false, configurable: true }), Jodit3.prototype.beforeInitHook = function() {
          }, Jodit3.prototype.afterInitHook = function() {
          }, Jodit3.prototype.initOptions = function(e4) {
            this.options = (0, s.ConfigProto)(e4 || {}, r2.Config.defaultOptions);
          }, Jodit3.prototype.initOwners = function() {
            this.editorWindow = this.o.ownerWindow, this.ownerWindow = this.o.ownerWindow;
          }, Jodit3.prototype.addPlace = function(e4, t4) {
            var o3 = this, n3 = (0, s.resolveElement)(e4, this.o.shadowRoot || this.od);
            this.attachEvents(t4), n3.attributes && (0, s.toArray)(n3.attributes).forEach(function(e5) {
              var n4 = e5.name, i3 = e5.value;
              void 0 === r2.Config.defaultOptions[n4] || t4 && void 0 !== t4[n4] || (-1 !== ["readonly", "disabled"].indexOf(n4) && (i3 = "" === i3 || "true" === i3), /^[0-9]+(\.)?([0-9]+)?$/.test(i3.toString()) && (i3 = Number(i3)), o3.options[n4] = i3);
            });
            var i2 = this.c.div("jodit-container");
            i2.classList.add("jodit"), i2.classList.add("jodit-container"), i2.classList.add("jodit_theme_".concat(this.o.theme || "default")), v(this.o.className, i2), this.o.containerStyle && (0, s.css)(i2, this.o.containerStyle);
            var l2 = this.o.styleValues;
            Object.keys(l2).forEach(function(e5) {
              var t5 = (0, s.kebabCase)(e5);
              i2.style.setProperty("--jd-".concat(t5), l2[e5]);
            }), i2.setAttribute("contenteditable", "false");
            var c2 = null;
            this.o.inline && (-1 === ["TEXTAREA", "INPUT"].indexOf(n3.nodeName) && (i2 = n3, n3.setAttribute(m, n3.className.toString()), c2 = i2.innerHTML, i2.innerHTML = ""), i2.classList.add("jodit_inline"), i2.classList.add("jodit-container")), n3 !== i2 && (n3.style.display && n3.setAttribute(h, n3.style.display), n3.style.display = "none");
            var u2 = this.c.div("jodit-workplace", { contenteditable: false });
            i2.appendChild(u2), this.message.destruct(), this.message = new a.UIMessages(this, u2), n3.parentNode && n3 !== i2 && n3.parentNode.insertBefore(i2, n3), Object.defineProperty(n3, "component", { enumerable: false, configurable: true, value: this });
            var d2 = this.c.div("jodit-wysiwyg", { contenteditable: true, "aria-disabled": false, tabindex: this.o.tabIndex });
            u2.appendChild(d2);
            var p2 = { editor: d2, element: n3, container: i2, workplace: u2, statusbar: new a.StatusBar(this, i2), options: this.isReady ? (0, s.ConfigProto)(t4 || {}, r2.Config.defaultOptions) : this.options, history: new a.History(this), editorWindow: this.ow };
            this.__elementToPlace.set(d2, p2), this.setCurrentPlace(p2), this.places.push(p2), this.setNativeEditorValue(this.getElementValue());
            var f2 = this.__initEditor(c2), g = this.options;
            return (0, s.callPromise)(f2, function() {
              g.enableDragAndDropFileToEditor && g.uploader && (g.uploader.url || g.uploader.insertImageAsBase64URI) && o3.uploader.bind(o3.editor), o3.__elementToPlace.get(o3.editor) || o3.__elementToPlace.set(o3.editor, p2), o3.e.fire("afterAddPlace", p2);
            });
          }, Jodit3.prototype.addDisclaimer = function(e4) {
            this.workplace.appendChild(e4);
          }, Jodit3.prototype.setCurrentPlace = function(e4) {
            this.currentPlace !== e4 && (this.isEditorMode() || this.setMode(i.MODE_WYSIWYG), this.currentPlace = e4, this.buildToolbar(), this.isReady && this.e.fire("changePlace", e4));
          }, Jodit3.prototype.__initEditor = function(e4) {
            var t4 = this, o3 = this.__createEditor();
            return (0, s.callPromise)(o3, function() {
              if (!t4.isInDestruct) {
                if (t4.element !== t4.container) {
                  var o4 = t4.getElementValue();
                  o4 !== t4.getEditorValue() && t4.setEditorValue(o4);
                } else null != e4 && t4.setEditorValue(e4);
                var n3 = t4.o.defaultMode;
                if (t4.o.saveModeInStorage) {
                  var r3 = t4.storage.get("jodit_default_mode");
                  "string" == typeof r3 && (n3 = parseInt(r3, 10));
                }
                t4.setMode(n3), t4.o.readonly && (t4.__wasReadOnly = false, t4.setReadOnly(true)), t4.o.disabled && t4.setDisabled(true);
                try {
                  t4.ed.execCommand("defaultParagraphSeparator", false, t4.o.enter.toLowerCase());
                } catch (e5) {
                }
                try {
                  t4.ed.execCommand("enableObjectResizing", false, "false");
                } catch (e5) {
                }
                try {
                  t4.ed.execCommand("enableInlineTableEditing", false, "false");
                } catch (e5) {
                }
              }
            });
          }, Jodit3.prototype.__createEditor = function() {
            var e4 = this, t4 = this.editor, o3 = this.e.fire("createEditor", this);
            return (0, s.callPromise)(o3, function() {
              if (!e4.isInDestruct) {
                if ((false === o3 || (0, s.isPromise)(o3)) && a.Dom.safeRemove(t4), v(e4.o.editorClassName || e4.o.editorCssClass, e4.editor), e4.o.editorCssClass && e4.editor.classList.add(e4.o.editorCssClass), e4.o.style && (0, s.css)(e4.editor, e4.o.style), e4.e.on("synchro", function() {
                  e4.setEditorValue();
                }).on("focus", function() {
                  e4.editorIsActive = true;
                }).on("blur", function() {
                  return e4.editorIsActive = false;
                }), e4.__prepareWYSIWYGEditor(), e4.o.direction) {
                  var n3 = "rtl" === e4.o.direction.toLowerCase() ? "rtl" : "ltr";
                  e4.container.style.direction = n3, e4.container.setAttribute("dir", n3), e4.toolbar.setDirection(n3);
                }
                e4.o.triggerChangeEvent && e4.e.on("change", e4.async.debounce(function() {
                  e4.e && e4.e.fire(e4.element, "change");
                }, e4.defaultTimeout));
              }
            });
          }, Jodit3.prototype.__prepareWYSIWYGEditor = function() {
            var e4 = this, t4 = this.editor;
            if (this.o.direction) {
              var o3 = "rtl" === this.o.direction.toLowerCase() ? "rtl" : "ltr";
              this.editor.style.direction = o3, this.editor.setAttribute("dir", o3);
            }
            this.e.on(t4, "mousedown touchstart focus", function() {
              var o4 = e4.__elementToPlace.get(t4);
              o4 && e4.setCurrentPlace(o4);
            }).on(t4, "compositionend", this.synchronizeValues).on(t4, "selectionchange selectionstart keydown keyup input keypress dblclick mousedown mouseup click copy cut dragstart drop dragover paste resize touchstart touchend focus blur", function(t5) {
              if (!e4.o.readonly && !e4.__isSilentChange && !(t5 instanceof e4.ew.KeyboardEvent && t5.isComposing) && e4.e && e4.e.fire) {
                if (false === e4.e.fire(t5.type, t5)) return false;
                e4.synchronizeValues();
              }
            });
          }, Jodit3.prototype.fetch = function(e4, t4) {
            var o3 = this, r3 = new f.Ajax(n2.__assign({ url: e4 }, t4), this.o.defaultAjaxOptions), i2 = function() {
              o3.e.off("beforeDestruct", i2), o3.progressbar.progress(100).hide(), r3.destruct();
            };
            this.e.one("beforeDestruct", i2), this.progressbar.show().progress(30);
            var a2 = r3.send();
            return a2.finally(i2).catch(function() {
              return null;
            }), a2;
          }, Jodit3.prototype.destruct = function() {
            var t4 = this;
            if (!this.isInDestruct && (this.setStatus(a.STATUSES.beforeDestruct), this.__elementToPlace.clear(), this.editor)) {
              var o3 = this.getEditorValue();
              this.storage.clear(), this.buffer.clear(), this.commands.clear(), this.__selectionLocked = null, this.e.off(this.ow, "resize"), this.e.off(this.ow), this.e.off(this.od), this.e.off(this.od.body), this.places.forEach(function(e4) {
                var n3 = e4.container, r3 = e4.workplace, i2 = e4.statusbar, l2 = e4.element, c2 = e4.iframe, u2 = e4.editor, d2 = e4.history;
                if (l2 !== n3) if (l2.hasAttribute(h)) {
                  var p2 = (0, s.attr)(l2, h);
                  p2 && (l2.style.display = p2, l2.removeAttribute(h));
                } else l2.style.display = "";
                else l2.hasAttribute(m) && (l2.className = (0, s.attr)(l2, m) || "", l2.removeAttribute(m));
                l2.hasAttribute("style") && !(0, s.attr)(l2, "style") && l2.removeAttribute("style"), i2.destruct(), t4.e.off(n3), t4.e.off(l2), t4.e.off(u2), a.Dom.safeRemove(r3), a.Dom.safeRemove(u2), n3 !== l2 && a.Dom.safeRemove(n3), Object.defineProperty(l2, "component", { enumerable: false, configurable: true, value: null }), a.Dom.safeRemove(c2), n3 === l2 && (l2.innerHTML = o3), d2.destruct();
              }), this.places.length = 0, this.currentPlace = {}, delete u.instances[this.id], e3.prototype.destruct.call(this);
            }
          }, Jodit3.fatMode = false, Jodit3.plugins = u.pluginSystem, Jodit3.modules = u.modules, Jodit3.ns = u.modules, Jodit3.decorators = {}, Jodit3.constants = i, Jodit3.instances = u.instances, Jodit3.lang = c.lang, Jodit3.core = { Plugin: a.Plugin }, n2.__decorate([d.cache], Jodit3.prototype, "uploader", null), n2.__decorate([d.cache], Jodit3.prototype, "filebrowser", null), n2.__decorate([(0, d.throttle)()], Jodit3.prototype, "synchronizeValues", null), n2.__decorate([(0, d.watch)(":internalChange")], Jodit3.prototype, "updateElementValue", null), n2.__decorate([d.autobind], Jodit3.prototype, "__prepareWYSIWYGEditor", null), t3 = n2.__decorate([(0, d.derive)(p.Dlgs)], Jodit3);
        }(a.ViewWithToolbar);
        function v(e3, t3) {
          e3 && e3.split(/\s+/).forEach(function(e4) {
            return t3.classList.add(e4);
          });
        }
        t2.Jodit = Jodit2;
      }, 26435: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(10172), r2 = {}, i = o2(90643), a = o2(52532), s = o2(75178), l = o2(51048), c = o2(22999), u = o2(34145), d = o2(40272), p = o2(2978), f = o2(99113), h = o2(51923), m = o2(21268), v = o2(37289), g = o2(26501), y = o2(17084), _ = o2(96891), b = o2(31211), w = o2(31109), S = o2(79375), C = o2(21042), j = o2(73895);
        r2 = { ar: i, cs_cz: a, de: s, en: l, es: c, fr: u, he: d, hu: p, id: f, it: h, ja: m, ko: v, mn: g, nl: y, pl: _, pt_br: b, ru: w, tr: S, zh_cn: C, zh_tw: j };
        var E = o2(11399), x = function(e3) {
          return e3 ? e3.default || e3 : {};
        }, k = {};
        (0, n2.isArray)(x(E)) && x(E).forEach(function(e3, t3) {
          k[t3] = e3;
        }), Object.keys(r2).forEach(function(e3) {
          var t3 = x(r2[e3]);
          (0, n2.isArray)(t3) ? (r2[e3] = {}, t3.forEach(function(t4, o3) {
            r2[e3][k[o3]] = t4;
          })) : r2[e3] = t3;
        }), t2.default = r2;
      }, 60403: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ContextMenu = void 0;
        var n2 = o2(20255);
        o2(47086);
        var r2 = o2(35799), i = o2(96516), a = o2(10172), s = o2(11441), l = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "ContextMenu";
          }, t3.prototype.show = function(e4, t4, o3) {
            var n3 = this, r3 = this, s2 = this.j.c.div(this.getFullElName("actions"));
            (0, a.isArray)(o3) && (o3.forEach(function(e5) {
              if (e5) {
                var t5 = (0, i.Button)(n3.jodit, e5.icon || "empty", e5.title);
                n3.jodit && t5.setParentView(n3.jodit), t5.setMod("context", "menu"), t5.onAction(function(t6) {
                  var o4;
                  return null === (o4 = e5.exec) || void 0 === o4 || o4.call(r3, t6), r3.close(), false;
                }), s2.appendChild(t5.container);
              }
            }), this.setContent(s2).open(function() {
              return { left: e4, top: t4, width: 0, height: 0 };
            }, true));
          }, n2.__decorate([s.component], t3);
        }(r2.Popup);
        t2.ContextMenu = l;
      }, 97528: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Alert = void 0;
        var n2 = o2(6690), r2 = o2(40332), i = o2(64968), a = o2(2074);
        t2.Alert = function(e3, t3, o3, s) {
          void 0 === s && (s = "jodit-dialog_alert"), (0, r2.isFunction)(t3) && (o3 = t3, t3 = void 0);
          var l = this instanceof n2.Dialog ? this : new n2.Dialog(), c = l.c.div(s), u = (0, a.Button)(l, "ok", "Ok");
          return (0, r2.asArray)(e3).forEach(function(e4) {
            c.appendChild(i.Dom.isNode(e4) ? e4 : l.c.fromHTML(e4));
          }), u.onAction(function() {
            o3 && (0, r2.isFunction)(o3) && false === o3(l) || l.close();
          }), l.setFooter([u]), l.open(c, t3 || "&nbsp;", true, true), u.focus(), l;
        };
      }, 47360: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Confirm = void 0;
        var n2 = o2(6690), r2 = o2(42096), i = o2(96031);
        t2.Confirm = function(e3, t3, o3) {
          var a = this instanceof n2.Dialog ? this : new n2.Dialog(), s = a.c.fromHTML('<form class="jodit-dialog_prompt"></form>'), l = a.c.element("label");
          (0, r2.isFunction)(t3) && (o3 = t3, t3 = void 0), l.appendChild(a.c.fromHTML(e3)), s.appendChild(l);
          var c = function(e4) {
            return function() {
              o3 && false === o3(e4) || a.close();
            };
          }, u = (0, i.Button)(a, "cancel", "Cancel"), d = (0, i.Button)(a, "ok", "Yes");
          return u.onAction(c(false)), d.onAction(c(true)), a.e.on(s, "submit", function() {
            return c(true)(), false;
          }), a.setFooter([d, u]), a.open(s, t3 || "&nbsp;", true, true), d.focus(), a;
        };
      }, 6690: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Dialog = void 0;
        var n2 = o2(20255);
        o2(16462);
        var r2 = o2(93166), i = o2(86893), a = o2(40332), s = (o2(52378), o2(43608)), l = o2(64968), c = o2(56562), u = o2(17332), d = o2(43441), p = o2(75902), f = o2(2074), h = o2(71014);
        r2.Config.prototype.dialog = { namespace: "", extraButtons: [], resizable: true, draggable: true, buttons: ["dialog.close"], removeButtons: [], toolbarButtonSize: "middle", zIndex: "inherit" }, r2.Config.prototype.controls.dialog = { close: { icon: "cancel", exec: function(e3) {
          e3.close();
        } } };
        var m = function(e3) {
          function t3(t4) {
            void 0 === t4 && (t4 = {});
            var o3 = e3.call(this, t4) || this;
            o3.destroyAfterClose = false, o3.moved = false, o3.resizable = false, o3.draggable = false, o3.startX = 0, o3.startY = 0, o3.startPoint = { x: 0, y: 0, w: 0, h: 0 }, o3.lockSelect = function() {
              o3.setMod("moved", true);
            }, o3.unlockSelect = function() {
              o3.setMod("moved", false);
            }, o3.onResize = function() {
              o3.options && o3.o.resizable && !o3.moved && o3.isOpened && !o3.offsetX && !o3.offsetY && o3.setPosition();
            }, o3.isModal = false, o3.isOpened = false;
            var n3 = o3;
            n3.options = (0, a.ConfigProto)(t4, (0, a.ConfigProto)(r2.Config.prototype.dialog, p.View.defaultOptions)), l.Dom.safeRemove(n3.container);
            var i2 = o3.getFullElName.bind(o3);
            n3.container = o3.c.fromHTML('<div class="jodit jodit-dialog '.concat(o3.componentName, '">\n				<div class="').concat(i2("overlay"), '"></div>\n				<div class="').concat(o3.getFullElName("panel"), '">\n					<div class="').concat(i2("header"), '">\n						<div class="').concat(i2("header-title"), '"></div>\n						<div class="').concat(i2("header-toolbar"), '"></div>\n					</div>\n					<div class="').concat(i2("content"), '"></div>\n					<div class="').concat(i2("footer"), '"></div>\n					<div class="').concat(i2("resizer"), '">').concat(f.Icon.get("resize_handler"), "</div>\n				</div>\n			</div>")), o3.o.zIndex && (o3.container.style.zIndex = o3.o.zIndex.toString()), (0, a.attr)(n3.container, "role", "dialog"), Object.defineProperty(n3.container, "component", { value: o3 }), n3.setMod("theme", n3.o.theme || "default").setMod("resizable", Boolean(n3.o.resizable));
            var s2 = n3.getElm("panel"), c2 = n3.getElm("resizer"), d2 = n3.getElm("header-title"), m2 = n3.getElm("content"), v = n3.getElm("footer"), g = n3.getElm("header-toolbar");
            o3.message.destruct(), o3.message = new h.UIMessages(o3, s2), o3.dialog = s2, o3.resizer = c2, o3.dialogbox_header = d2, o3.dialogbox_content = m2, o3.dialogbox_footer = v, o3.dialogbox_toolbar = g, (0, a.css)(n3.dialog, { maxWidth: n3.options.maxWidth, minHeight: n3.options.minHeight, minWidth: n3.options.minWidth });
            var y = n3.getElm("header");
            y && n3.e.on(y, "pointerdown touchstart", n3.onHeaderMouseDown), n3.e.on(n3.resizer, "mousedown touchstart", n3.onResizerMouseDown);
            var _ = u.pluginSystem.get("fullsize");
            return (0, a.isFunction)(_) && _(n3), o3.e.on(n3.container, "close_dialog", n3.close).on(o3.ow, "keydown", o3.onEsc).on(o3.ow, "resize", o3.onResize), o3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "Dialog";
          }, Object.defineProperty(t3.prototype, "destination", { get: function() {
            var e4;
            return null !== (e4 = this.o.shadowRoot) && void 0 !== e4 ? e4 : this.od.body;
          }, enumerable: false, configurable: true }), t3.prototype.setElements = function(e4, t4) {
            var o3 = this, n3 = [];
            (0, a.asArray)(t4).forEach(function(t5) {
              if ((0, a.isArray)(t5)) {
                var r3 = o3.c.div(o3.getFullElName("column"));
                return n3.push(r3), e4.appendChild(r3), o3.setElements(r3, t5);
              }
              var i2;
              i2 = (0, a.isString)(t5) ? o3.c.fromHTML(t5) : (0, a.hasContainer)(t5) ? t5.container : t5, n3.push(i2), i2.parentNode !== e4 && e4.appendChild(i2);
            }), (0, a.toArray)(e4.childNodes).forEach(function(t5) {
              -1 === n3.indexOf(t5) && e4.removeChild(t5);
            });
          }, t3.prototype.onMouseUp = function() {
            (this.draggable || this.resizable) && (this.removeGlobalResizeListeners(), this.draggable = false, this.resizable = false, this.unlockSelect(), this.e && (this.removeGlobalResizeListeners(), this.e.fire(this, "endResize endMove")));
          }, t3.prototype.onHeaderMouseDown = function(e4) {
            var t4 = e4.target;
            !this.o.draggable || t4 && t4.nodeName.match(/^(INPUT|SELECT)$/) || (this.draggable = true, this.startX = e4.clientX, this.startY = e4.clientY, this.startPoint.x = (0, a.css)(this.dialog, "left"), this.startPoint.y = (0, a.css)(this.dialog, "top"), this.setMaxZIndex(), e4.cancelable && e4.preventDefault(), this.lockSelect(), this.addGlobalResizeListeners(), this.e && this.e.fire(this, "startMove"));
          }, t3.prototype.onMouseMove = function(e4) {
            this.draggable && this.o.draggable && (this.setPosition(this.startPoint.x + e4.clientX - this.startX, this.startPoint.y + e4.clientY - this.startY), this.e && this.e.fire(this, "move", e4.clientX - this.startX, e4.clientY - this.startY), e4.stopImmediatePropagation()), this.resizable && this.o.resizable && (this.setSize(this.startPoint.w + e4.clientX - this.startX, this.startPoint.h + e4.clientY - this.startY), this.e && this.e.fire(this, "resizeDialog", e4.clientX - this.startX, e4.clientY - this.startY));
          }, t3.prototype.onEsc = function(e4) {
            if (this.isOpened && e4.key === i.KEY_ESC && true !== this.getMod("static")) {
              var t4 = this.getMaxZIndexDialog();
              t4 ? t4.close() : this.close(), e4.stopImmediatePropagation();
            }
          }, t3.prototype.onResizerMouseDown = function(e4) {
            this.resizable = true, this.startX = e4.clientX, this.startY = e4.clientY, this.startPoint.w = this.dialog.offsetWidth, this.startPoint.h = this.dialog.offsetHeight, this.lockSelect(), this.addGlobalResizeListeners(), this.e && this.e.fire(this, "startResize");
          }, t3.prototype.addGlobalResizeListeners = function() {
            var e4 = this;
            e4.e.on(e4.ow, "pointermove touchmove", e4.onMouseMove).on(e4.ow, "pointerup touchend", e4.onMouseUp);
          }, t3.prototype.removeGlobalResizeListeners = function() {
            var e4 = this;
            e4.e.off(e4.ow, "mousemove pointermove", e4.onMouseMove).off(e4.ow, "mouseup pointerup", e4.onMouseUp);
          }, t3.prototype.setSize = function(e4, t4) {
            return null == e4 && (e4 = this.dialog.offsetWidth), null == t4 && (t4 = this.dialog.offsetHeight), (0, a.css)(this.dialog, { width: e4, height: t4 }), this;
          }, t3.prototype.calcAutoSize = function() {
            return this.setSize("auto", "auto"), this.setSize(), this;
          }, t3.prototype.setPosition = function(e4, t4) {
            var o3 = this.ow.innerWidth / 2 - this.dialog.offsetWidth / 2, n3 = this.ow.innerHeight / 2 - this.dialog.offsetHeight / 2;
            return 0 > o3 && (o3 = 0), 0 > n3 && (n3 = 0), void 0 !== e4 && void 0 !== t4 && (this.offsetX = e4, this.offsetY = t4, this.moved = Math.abs(e4 - o3) > 100 || Math.abs(t4 - n3) > 100), this.dialog.style.left = (e4 || o3) + "px", this.dialog.style.top = (t4 || n3) + "px", this;
          }, t3.prototype.setHeader = function(e4) {
            return this.setElements(this.dialogbox_header, e4), this;
          }, t3.prototype.setContent = function(e4) {
            return this.setElements(this.dialogbox_content, e4), this;
          }, t3.prototype.setFooter = function(e4) {
            return this.setElements(this.dialogbox_footer, e4), this.setMod("footer", Boolean(e4)), this;
          }, t3.prototype.getZIndex = function() {
            return parseInt((0, a.css)(this.container, "zIndex"), 10) || 0;
          }, t3.prototype.getMaxZIndexDialog = function() {
            var e4, t4, o3 = 0, n3 = this;
            return (0, a.$$)(".jodit-dialog", this.destination).forEach(function(r3) {
              e4 = r3.component, t4 = parseInt((0, a.css)(r3, "zIndex"), 10), e4.isOpened && !isNaN(t4) && t4 > o3 && (n3 = e4, o3 = t4);
            }), n3;
          }, t3.prototype.setMaxZIndex = function() {
            if (!this.getMod("static")) {
              var e4 = 20000004, t4 = 0;
              (0, a.$$)(".jodit-dialog", this.destination).forEach(function(o3) {
                t4 = parseInt((0, a.css)(o3, "zIndex"), 10), e4 = Math.max(isNaN(t4) ? 0 : t4, e4);
              }), this.container.style.zIndex = (e4 + 1).toString();
            }
          }, t3.prototype.toggleFullSize = function(t4) {
            (0, a.isVoid)(t4) && (t4 = !this.getMod("fullsize")), this.setMod("fullsize", t4), e3.prototype.toggleFullSize.call(this, t4);
          }, t3.prototype.open = function(e4, t4, o3, n3) {
            if (u.eventEmitter.fire("closeAllPopups hideHelpers"), false === this.e.fire(this, "beforeOpen")) return this;
            (0, a.isBoolean)(e4) && (o3 = e4), (0, a.isBoolean)(t4) && (n3 = t4), this.destroyAfterClose = true === o3;
            var r3 = (0, a.isBoolean)(e4) ? void 0 : e4, i2 = (0, a.isBoolean)(t4) ? void 0 : t4;
            return void 0 !== i2 && this.setHeader(i2), r3 && this.setContent(r3), this.setMod("active", true), this.isOpened = true, this.setModal(n3), this.destination.appendChild(this.container), true !== this.getMod("static") ? (this.setPosition(this.offsetX, this.offsetY), this.setMaxZIndex()) : this.container.style.removeProperty("z-index"), this.o.fullsize && this.toggleFullSize(true), this.e.fire("afterOpen", this), this;
          }, t3.prototype.setModal = function(e4) {
            return this.isModal = Boolean(e4), this.setMod("modal", this.isModal), this;
          }, t3.prototype.close = function() {
            return this.isDestructed || !this.isOpened || true === this.getMod("static") || false === this.e.fire("beforeClose", this) || (this.setMod("active", false), this.isOpened = false, this.isFullSize && this.toggleFullSize(false), l.Dom.safeRemove(this.container), this.removeGlobalResizeListeners(), this.destroyAfterClose && this.destruct(), this.e.fire(this, "afterClose"), this.e.fire(this.ow, "joditCloseDialog")), this;
          }, t3.prototype.buildToolbar = function() {
            this.o.buttons && this.toolbar.build((0, a.splitArray)(this.o.buttons)).setMod("mode", "header").appendTo(this.dialogbox_toolbar);
          }, t3.prototype.destruct = function() {
            this.isInDestruct || (this.setStatus(c.STATUSES.beforeDestruct), this.isOpened && this.close(), this.events && (this.removeGlobalResizeListeners(), this.events.off(this.container, "close_dialog", self.close).off(this.ow, "keydown", this.onEsc).off(this.ow, "resize", this.onResize)), e3.prototype.destruct.call(this));
          }, n2.__decorate([d.autobind], t3.prototype, "onMouseUp", null), n2.__decorate([d.autobind], t3.prototype, "onHeaderMouseDown", null), n2.__decorate([d.autobind], t3.prototype, "onMouseMove", null), n2.__decorate([d.autobind], t3.prototype, "onEsc", null), n2.__decorate([d.autobind], t3.prototype, "onResizerMouseDown", null), n2.__decorate([d.autobind], t3.prototype, "close", null), n2.__decorate([(0, d.hook)("ready")], t3.prototype, "buildToolbar", null), n2.__decorate([d.component], t3);
        }(s.ViewWithToolbar);
        t2.Dialog = m;
      }, 92080: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Confirm = t2.Prompt = t2.Alert = t2.Dialog = void 0;
        var n2 = o2(6690);
        Object.defineProperty(t2, "Dialog", { enumerable: true, get: function() {
          return n2.Dialog;
        } });
        var r2 = o2(97528);
        Object.defineProperty(t2, "Alert", { enumerable: true, get: function() {
          return r2.Alert;
        } });
        var i = o2(35789);
        Object.defineProperty(t2, "Prompt", { enumerable: true, get: function() {
          return i.Prompt;
        } });
        var a = o2(47360);
        Object.defineProperty(t2, "Confirm", { enumerable: true, get: function() {
          return a.Confirm;
        } });
      }, 35789: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Prompt = void 0;
        var n2 = o2(92080), r2 = o2(2074), i = o2(40332);
        t2.Prompt = function(e3, t3, o3, a, s) {
          var l = this instanceof n2.Dialog ? this : new n2.Dialog(), c = (0, r2.Button)(l, "cancel", "Cancel"), u = (0, r2.Button)(l, "ok", "Ok"), d = l.c.element("form", { class: "jodit-dialog_prompt" }), p = l.c.element("input", { autofocus: true, class: "jodit-input" }), f = l.c.element("label");
          (0, i.isFunction)(t3) && (o3 = t3, t3 = void 0), a && (0, i.attr)(p, "placeholder", a), f.appendChild(l.c.text(e3)), d.appendChild(f), d.appendChild(p), c.onAction(l.close);
          var h = function() {
            o3 && (0, i.isFunction)(o3) && false === o3(p.value) || l.close();
          };
          return u.onAction(h), l.e.on(d, "submit", function() {
            return h(), false;
          }), l.setFooter([u, c]), l.open(d, t3 || "&nbsp;", true, true), p.focus(), void 0 !== s && s.length && (p.value = s, p.select()), l;
        };
      }, 34468: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255), r2 = o2(64968), i = o2(40332), a = o2(46341), s = o2(2074), l = o2(21347), c = o2(35503), u = o2(66267), d = o2(36303), p = o2(48096), f = "jodit-filebrowser-preview", h = function(e3, t3) {
          return void 0 === e3 && (e3 = "next"), void 0 === t3 && (t3 = "right"), '<div class="'.concat(f, "__navigation ").concat(f, "__navigation_arrow_").concat(e3, '">') + "" + s.Icon.get("angle-" + t3) + "</a>";
        };
        t2.default = function(e3) {
          if (!e3.o.contextMenu) return function() {
          };
          var t3 = (0, a.makeContextMenu)(e3);
          return function(o3) {
            var a2 = (0, l.getItem)(o3.target, e3.container);
            if (a2) {
              var s2 = a2, m = e3.options, v = function(e4) {
                return (0, i.attr)(s2, e4) || "";
              };
              return e3.async.setTimeout(function() {
                var g = (0, l.elementToItem)(a2, (0, u.elementsMap)(e3));
                g && (e3.state.activeElements = [g], t3.show(o3.clientX, o3.clientY, [!("1" === v("data-is-file") || !m.editImage || !e3.dataProvider.canI("ImageResize") && !e3.dataProvider.canI("ImageCrop")) && { icon: "pencil", title: "Edit", exec: function() {
                  return c.openImageEditor.call(e3, v("href"), v("data-name"), v("data-path"), v("data-source"));
                } }, !!e3.dataProvider.canI("FileRename") && { icon: "italic", title: "Rename", exec: function() {
                  e3.e.fire("fileRename.filebrowser", v("data-name"), v("data-path"), v("data-source"));
                } }, !!e3.dataProvider.canI("FileRemove") && { icon: "bin", title: "Delete", exec: function() {
                  return n2.__awaiter(void 0, void 0, Promise, function() {
                    var t4;
                    return n2.__generator(this, function(o4) {
                      switch (o4.label) {
                        case 0:
                          return o4.trys.push([0, 2, , 3]), [4, (0, p.deleteFile)(e3, v("data-name"), v("data-source"))];
                        case 1:
                          return o4.sent(), [3, 3];
                        case 2:
                          return t4 = o4.sent(), [2, e3.status(t4)];
                        case 3:
                          return e3.state.activeElements = [], [2, (0, d.loadTree)(e3).catch(e3.status)];
                      }
                    });
                  });
                } }, !!m.preview && { icon: "eye", title: "Preview", exec: function() {
                  var t4 = e3.dlg({ buttons: ["fullsize", "dialog.close"] }), o4 = e3.c.div(f, '<div class="jodit-icon_loader"></div>'), n3 = e3.c.div(f + "__box"), a3 = e3.c.fromHTML(h()), l2 = e3.c.fromHTML(h("prev", "left")), c2 = function(i2) {
                    var c3 = e3.c.element("img");
                    c3.setAttribute("src", i2);
                    var u2 = function() {
                      var i3;
                      e3.isInDestruct || (e3.e.off(c3, "load"), r2.Dom.detach(o4), m.showPreviewNavigation && (r2.Dom.prevWithClass(s2, e3.files.getFullElName("item")) && o4.appendChild(l2), r2.Dom.nextWithClass(s2, e3.files.getFullElName("item")) && o4.appendChild(a3)), o4.appendChild(n3), n3.appendChild(c3), t4.setPosition(), null === (i3 = null == e3 ? void 0 : e3.events) || void 0 === i3 || i3.fire("previewOpenedAndLoaded"));
                    };
                    e3.e.on(c3, "load", u2), c3.complete && u2();
                  };
                  e3.e.on([a3, l2], "click", function() {
                    if (!(s2 = this === a3 ? r2.Dom.nextWithClass(s2, e3.files.getFullElName("item")) : r2.Dom.prevWithClass(s2, e3.files.getFullElName("item")))) throw (0, i.error)("Need element");
                    r2.Dom.detach(o4), r2.Dom.detach(n3), o4.innerHTML = '<div class="jodit-icon_loader"></div>', c2(v("href"));
                  }), e3.e.on("beforeDestruct", function() {
                    t4.destruct();
                  }), t4.container.classList.add(f + "__dialog"), t4.setContent(o4), t4.setPosition(), t4.open(), c2(v("href")), e3.events.on("beforeDestruct", function() {
                    t4.destruct();
                  }).fire("previewOpened");
                } }, { icon: "upload", title: "Download", exec: function() {
                  var t4 = v("href");
                  t4 && e3.ow.open(t4);
                } }]));
              }, e3.defaultTimeout), e3.e.on("beforeClose", function() {
                return t3.close();
              }).on("beforeDestruct", function() {
                return t3.destruct();
              }), o3.stopPropagation(), o3.preventDefault(), false;
            }
          };
        };
      }, 66267: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.elementsMap = void 0;
        var o2 = /* @__PURE__ */ new WeakMap();
        t2.elementsMap = function(e3) {
          var t3 = o2.get(e3);
          return t3 || o2.set(e3, t3 = {}), t3;
        };
      }, 63511: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.FileBrowserItem = void 0;
        var n2 = o2(40332), r2 = function() {
          function e3(e4) {
            var t3 = this;
            this.data = e4, Object.keys(e4).forEach(function(o3) {
              t3[o3] = e4[o3];
            });
          }
          return e3.create = function(t3) {
            return t3 instanceof e3 ? t3 : new e3(t3);
          }, Object.defineProperty(e3.prototype, "path", { get: function() {
            return (0, n2.normalizePath)(this.data.source.path ? this.data.source.path + "/" : "/");
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "imageURL", { get: function() {
            var e4 = this.time || (/* @__PURE__ */ new Date()).getTime().toString(), t3 = this.data, o3 = t3.source, r3 = t3.thumb || t3.file;
            return t3.thumbIsAbsolute && r3 ? r3 : (0, n2.normalizeUrl)(o3.baseurl, o3.path, r3 || "") + "?_tmst=" + encodeURIComponent(e4);
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "fileURL", { get: function() {
            var e4 = this.data.name, t3 = this.data, o3 = t3.file, r3 = t3.source;
            return void 0 !== o3 && (e4 = o3), t3.fileIsAbsolute && e4 ? e4 : (0, n2.normalizeUrl)(r3.baseurl, r3.path, e4 || "");
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "time", { get: function() {
            var e4 = this.data.changed;
            return e4 && ("number" == typeof e4 ? new Date(e4).toLocaleString() : e4) || "";
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "uniqueHashKey", { get: function() {
            var e4 = this.data;
            return [e4.sourceName, e4.name, e4.file, this.time, e4.thumb].join("_").toLowerCase().replace(/[^0-9a-z\-.]/g, "-");
          }, enumerable: false, configurable: true }), e3.prototype.toJSON = function() {
            return this.data;
          }, e3;
        }();
        t2.FileBrowserItem = r2;
      }, 38097: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255), r2 = o2(93166), i = o2(10172), a = o2(41374), s = o2(6102);
        r2.Config.prototype.filebrowser = { namespace: "", extraButtons: [], filter: function(e3, t3) {
          return t3 = t3.toLowerCase(), (0, i.isString)(e3) ? -1 !== e3.toLowerCase().indexOf(t3) : (0, i.isString)(e3.name) ? -1 !== e3.name.toLowerCase().indexOf(t3) : !(0, i.isString)(e3.file) || -1 !== e3.file.toLowerCase().indexOf(t3);
        }, sortBy: "changed-desc", sort: function(e3, t3, o3) {
          var r3 = n2.__read(o3.toLowerCase().split("-"), 2), a2 = r3[0], l = "asc" === r3[1], c = function(e4, t4) {
            return t4 > e4 ? l ? -1 : 1 : e4 > t4 ? l ? 1 : -1 : 0;
          };
          if ((0, i.isString)(e3)) return c(e3.toLowerCase(), t3.toLowerCase());
          if (void 0 === e3[a2] || "name" === a2) return (0, i.isString)(e3.name) ? c(e3.name.toLowerCase(), t3.name.toLowerCase()) : (0, i.isString)(e3.file) ? c(e3.file.toLowerCase(), t3.file.toLowerCase()) : 0;
          switch (a2) {
            case "changed":
              var u = new Date(e3.changed).getTime(), d = new Date(t3.changed).getTime();
              return l ? u - d : d - u;
            case "size":
              return u = (0, s.humanSizeToBytes)(e3.size), d = (0, s.humanSizeToBytes)(t3.size), l ? u - d : d - u;
          }
          return 0;
        }, editImage: true, preview: true, showPreviewNavigation: true, showSelectButtonInPreview: true, contextMenu: true, howLongShowMsg: 3e3, createNewFolder: true, deleteFolder: true, renameFolder: true, moveFolder: true, moveFile: true, permissionsPresets: { allowFileDownload: void 0, allowFileMove: void 0, allowFileRemove: void 0, allowFileRename: void 0, allowFileUpload: void 0, allowFileUploadRemote: void 0, allowFiles: void 0, allowFolderCreate: void 0, allowFolderMove: void 0, allowFolderRemove: void 0, allowFolderRename: void 0, allowFolderTree: void 0, allowFolders: void 0, allowGeneratePdf: void 0, allowImageCrop: void 0, allowImageResize: void 0 }, showFoldersPanel: true, storeLastOpenedFolder: true, width: 859, height: 400, buttons: ["filebrowser.upload", "filebrowser.remove", "filebrowser.update", "filebrowser.select", "filebrowser.edit", "|", "filebrowser.tiles", "filebrowser.list", "|", "filebrowser.filter", "|", "filebrowser.sort"], removeButtons: [], fullsize: false, showTooltip: true, view: null, isSuccess: function(e3) {
          return e3.success;
        }, getMessage: function(e3) {
          return void 0 !== e3.data.messages && (0, i.isArray)(e3.data.messages) ? e3.data.messages.join(" ") : "";
        }, showFileName: true, showFileSize: true, showFileChangeTime: true, saveStateInStorage: { storeLastOpenedFolder: true, storeView: true, storeSortBy: true }, pixelOffsetLoadNewChunk: 200, getThumbTemplate: function(e3, t3, o3) {
          var n3 = this.options, r3 = this.files.getFullElName("item"), i2 = n3.showFileName, a2 = n3.showFileSize && e3.size, s2 = n3.showFileChangeTime && e3.time, l = "";
          void 0 !== e3.file && (l = e3.file);
          var c = '<div class="'.concat(r3, '-info">').concat(i2 ? '<span class="'.concat(r3, '-info-filename">').concat(l, "</span>") : "").concat(a2 ? '<span class="'.concat(r3, '-info-filesize">').concat(e3.size, "</span>") : "").concat(s2 ? '<span class="'.concat(r3, '-info-filechanged">').concat(s2, "</span>") : "", "</div>");
          return '<a\n			data-jodit-filebrowser-item="true"\n			data-is-file="'.concat(e3.isImage ? 0 : 1, '"\n			draggable="true"\n			class="').concat(r3, '"\n			href="').concat(e3.fileURL, '"\n			data-source="').concat(o3, '"\n			data-path="').concat(e3.path, '"\n			data-name="').concat(l, '"\n			title="').concat(l, '"\n			data-url="').concat(e3.fileURL, '">\n				<img\n					data-is-file="').concat(e3.isImage ? 0 : 1, '"\n					data-src="').concat(e3.fileURL, '"\n					src="').concat(e3.imageURL, '"\n					alt="').concat(l, '"\n					loading="lazy"\n				/>\n				').concat(i2 || a2 || s2 ? c : "", "\n			</a>");
        }, ajax: n2.__assign(n2.__assign({}, r2.Config.prototype.defaultAjaxOptions), { url: "", data: {}, cache: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", method: "POST", processData: true, headers: {}, prepareData: function(e3) {
          return e3;
        }, process: function(e3) {
          return e3;
        } }), create: { data: { action: "folderCreate" } }, getLocalFileByUrl: { data: { action: "getLocalFileByUrl" } }, resize: { data: { action: "imageResize" } }, crop: { data: { action: "imageCrop" } }, fileMove: { data: { action: "fileMove" } }, folderMove: { data: { action: "folderMove" } }, fileRename: { data: { action: "fileRename" } }, folderRename: { data: { action: "folderRename" } }, fileRemove: { data: { action: "fileRemove" } }, folderRemove: { data: { action: "folderRemove" } }, items: { data: { action: "files" } }, folder: { data: { action: "folders" } }, permissions: { data: { action: "permissions" } } }, r2.Config.prototype.controls.filebrowser = { upload: { icon: "plus", isInput: true, isDisabled: function(e3) {
          return !e3.dataProvider.canI("FileUpload");
        }, getContent: function(e3) {
          var t3 = new a.UIFileInput(e3, { onlyImages: e3.state.onlyImages });
          return e3.e.fire("bindUploader.filebrowser", t3.container), t3.container;
        } }, remove: { icon: "bin", isDisabled: function(e3) {
          return !e3.state.activeElements.length || !e3.dataProvider.canI("FileRemove");
        }, exec: function(e3) {
          e3.e.fire("fileRemove.filebrowser");
        } }, update: { exec: function(e3) {
          e3.e.fire("update.filebrowser");
        } }, select: { icon: "check", isDisabled: function(e3) {
          return !e3.state.activeElements.length;
        }, exec: function(e3) {
          e3.e.fire("select.filebrowser");
        } }, edit: { icon: "pencil", isDisabled: function(e3) {
          var t3 = e3.state.activeElements;
          return 1 !== t3.length || !t3[0].isImage || !(e3.dataProvider.canI("ImageCrop") || e3.dataProvider.canI("ImageResize"));
        }, exec: function(e3) {
          e3.e.fire("edit.filebrowser");
        } }, tiles: { icon: "th", isActive: function(e3) {
          return "tiles" === e3.state.view;
        }, exec: function(e3) {
          e3.e.fire("view.filebrowser", "tiles");
        } }, list: { icon: "th-list", isActive: function(e3) {
          return "list" === e3.state.view;
        }, exec: function(e3) {
          e3.e.fire("view.filebrowser", "list");
        } }, filter: { isInput: true, getContent: function(e3, t3, o3) {
          var n3 = o3.container.querySelector(".jodit-input");
          if (n3) return n3;
          var r3 = e3.c.element("input", { class: "jodit-input", placeholder: e3.i18n("Filter") });
          return r3.value = e3.state.filterWord, e3.e.on(r3, "keydown mousedown", e3.async.debounce(function() {
            e3.e.fire("filter.filebrowser", r3.value);
          }, e3.defaultTimeout)), r3;
        } }, sort: { isInput: true, getContent: function(e3) {
          var t3 = e3.c.fromHTML('<select class="jodit-input jodit-select">' + '<option value="changed-asc">'.concat(e3.i18n("Sort by changed"), " (⬆)</option>") + '<option value="changed-desc">'.concat(e3.i18n("Sort by changed"), " (⬇)</option>") + '<option value="name-asc">'.concat(e3.i18n("Sort by name"), " (⬆)</option>") + '<option value="name-desc">'.concat(e3.i18n("Sort by name"), " (⬇)</option>") + '<option value="size-asc">'.concat(e3.i18n("Sort by size"), " (⬆)</option>") + '<option value="size-desc">'.concat(e3.i18n("Sort by size"), " (⬇)</option>") + "</select>");
          return t3.value = e3.state.sortBy, e3.e.on("sort.filebrowser", function(e4) {
            t3.value !== e4 && (t3.value = e4);
          }).on(t3, "change", function() {
            e3.e.fire("sort.filebrowser", t3.value);
          }), t3;
        } } };
      }, 82530: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DEFAULT_SOURCE_NAME = void 0;
        var n2 = o2(20255), r2 = o2(40332), i = o2(30056), a = o2(43441), s = o2(63511);
        t2.DEFAULT_SOURCE_NAME = "default";
        var l = function() {
          function e3(e4, t3) {
            this.parent = e4, this.options = t3, this.__currentPermissions = null, this.ajaxInstances = /* @__PURE__ */ new Map(), this.progressHandler = function(e5) {
            };
          }
          return Object.defineProperty(e3.prototype, "o", { get: function() {
            return this.options;
          }, enumerable: false, configurable: true }), e3.prototype.get = function(e4) {
            var t3 = this, o3 = this.ajaxInstances;
            if (o3.has(e4)) {
              var n3 = o3.get(e4);
              null == n3 || n3.abort(), o3.delete(e4);
            }
            var a2 = (0, r2.ConfigProto)(void 0 !== this.options[e4] ? this.options[e4] : {}, (0, r2.ConfigProto)({ onProgress: this.progressHandler }, this.o.ajax));
            a2.prepareData && (a2.data = a2.prepareData.call(this, a2.data));
            var s2 = new i.Ajax(a2);
            o3.set(e4, s2);
            var l2 = s2.send();
            return l2.finally(function() {
              s2.destruct(), o3.delete(e4), t3.progressHandler(100);
            }).catch(function() {
              return null;
            }), l2.then(function(e5) {
              return e5.json();
            }).then(function(e5) {
              if (e5 && !t3.isSuccess(e5)) throw new Error(t3.getMessage(e5));
              return e5;
            });
          }, e3.prototype.onProgress = function(e4) {
            this.progressHandler = e4;
          }, e3.prototype.permissions = function(e4, t3) {
            return n2.__awaiter(this, void 0, Promise, function() {
              var o3 = this;
              return n2.__generator(this, function(n3) {
                return this.o.permissions ? (this.o.permissions.data.path = e4, this.o.permissions.data.source = t3, this.o.permissions.url ? [2, this.get("permissions").then(function(e5) {
                  var t4 = o3.o.permissions.process;
                  if (t4 || (t4 = o3.o.ajax.process), t4) {
                    var n4 = t4.call(self, e5);
                    n4.data.permissions && (o3.__currentPermissions = n4.data.permissions);
                  }
                  return o3.__currentPermissions;
                })] : [2, null]) : [2, null];
              });
            });
          }, e3.prototype.canI = function(e4) {
            var t3 = "allow" + e4, o3 = this.o.permissionsPresets[t3];
            return void 0 !== o3 ? o3 : null == this.__currentPermissions || void 0 === this.__currentPermissions[t3] || this.__currentPermissions[t3];
          }, e3.prototype.__items = function(e4, t3, o3, n3) {
            var r3 = this, i2 = this.options;
            return i2.items ? (i2.items.data.path = e4, i2.items.data.source = t3, i2.items.data.mods = o3, this.get("items").then(function(e5) {
              var t4 = r3.o.items.process;
              return t4 || (t4 = r3.o.ajax.process), t4 && (e5 = t4.call(self, e5)), n3(e5);
            })) : Promise.reject("Set Items api options");
          }, e3.prototype.items = function(e4, t3, o3) {
            var n3 = this;
            return void 0 === o3 && (o3 = {}), this.__items(e4, t3, o3, function(e5) {
              return n3.generateItemsList(e5.data.sources, o3);
            });
          }, e3.prototype.itemsEx = function(e4, t3, o3) {
            var n3 = this;
            return void 0 === o3 && (o3 = {}), this.__items(e4, t3, o3, function(e5) {
              return { items: n3.generateItemsList(e5.data.sources, o3), loadedTotal: (t4 = e5.data.sources, t4.reduce(function(e6, t5) {
                return e6 + t5.files.length;
              }, 0)) };
              var t4;
            });
          }, e3.prototype.generateItemsList = function(e4, t3) {
            var o3 = this;
            void 0 === t3 && (t3 = {});
            var i2 = [];
            return e4.forEach(function(e5) {
              if (e5.files && e5.files.length) {
                var a2 = o3.o.sort;
                (0, r2.isFunction)(a2) && t3.sortBy && e5.files.sort(function(e6, o4) {
                  return a2(e6, o4, t3.sortBy);
                }), e5.files.forEach(function(r3) {
                  (function(e6) {
                    var n3;
                    return !(null === (n3 = t3.filterWord) || void 0 === n3 ? void 0 : n3.length) || void 0 === o3.o.filter || o3.o.filter(e6, t3.filterWord);
                  })(r3) && function(e6) {
                    return "folder" === e6.type || !t3.onlyImages || void 0 === e6.isImage || e6.isImage;
                  }(r3) && i2.push(s.FileBrowserItem.create(n2.__assign(n2.__assign({}, r3), { sourceName: e5.name, source: e5 })));
                });
              }
            }), i2;
          }, e3.prototype.tree = function(e4, t3) {
            return n2.__awaiter(this, void 0, Promise, function() {
              var o3 = this;
              return n2.__generator(this, function(n3) {
                switch (n3.label) {
                  case 0:
                    return e4 = (0, r2.normalizeRelativePath)(e4), this.o.folder ? [4, this.permissions(e4, t3)] : [2, Promise.reject("Set Folder Api options")];
                  case 1:
                    return n3.sent(), this.o.folder.data.path = e4, this.o.folder.data.source = t3, [2, this.get("folder").then(function(e5) {
                      var t4 = o3.o.folder.process;
                      return t4 || (t4 = o3.o.ajax.process), t4 && (e5 = t4.call(self, e5)), e5.data.sources;
                    })];
                }
              });
            });
          }, e3.prototype.getPathByUrl = function(e4) {
            var t3 = this;
            return (0, r2.set)("options.getLocalFileByUrl.data.url", e4, this), this.get("getLocalFileByUrl").then(function(e5) {
              if (t3.isSuccess(e5)) return e5.data;
              throw (0, r2.error)(t3.getMessage(e5));
            });
          }, e3.prototype.createFolder = function(e4, t3, o3) {
            var n3 = this, i2 = this.o.create;
            if (!i2) throw (0, r2.error)("Set Create api options");
            return i2.data.source = o3, i2.data.path = t3, i2.data.name = e4, this.get("create").then(function(e5) {
              if (n3.isSuccess(e5)) return true;
              throw (0, r2.error)(n3.getMessage(e5));
            });
          }, e3.prototype.move = function(e4, t3, o3, n3) {
            var i2 = this, a2 = n3 ? "fileMove" : "folderMove", s2 = this.options[a2];
            if (!s2) throw (0, r2.error)("Set Move api options");
            return s2.data.from = e4, s2.data.path = t3, s2.data.source = o3, this.get(a2).then(function(e5) {
              if (i2.isSuccess(e5)) return true;
              throw (0, r2.error)(i2.getMessage(e5));
            });
          }, e3.prototype.remove = function(e4, t3, o3, n3) {
            var i2 = this, a2 = this.o[e4];
            if (!a2) throw (0, r2.error)('Set "'.concat(e4, '" api options'));
            return a2.data.path = t3, a2.data.name = o3, a2.data.source = n3, this.get(e4).then(function(e5) {
              return a2.process && (e5 = a2.process.call(i2, e5)), i2.getMessage(e5);
            });
          }, e3.prototype.fileRemove = function(e4, t3, o3) {
            return this.remove("fileRemove", e4, t3, o3);
          }, e3.prototype.folderRemove = function(e4, t3, o3) {
            return this.remove("folderRemove", e4, t3, o3);
          }, e3.prototype.rename = function(e4, t3, o3, n3, i2) {
            var a2 = this, s2 = this.o[e4];
            if (!s2) throw (0, r2.error)('Set "'.concat(e4, '" api options'));
            return s2.data.path = t3, s2.data.name = o3, s2.data.newname = n3, s2.data.source = i2, this.get(e4).then(function(e5) {
              return s2.process && (e5 = s2.process.call(self, e5)), a2.getMessage(e5);
            });
          }, e3.prototype.folderRename = function(e4, t3, o3, n3) {
            return this.rename("folderRename", e4, t3, o3, n3);
          }, e3.prototype.fileRename = function(e4, t3, o3, n3) {
            return this.rename("fileRename", e4, t3, o3, n3);
          }, e3.prototype.changeImage = function(e4, t3, o3, n3, r3, i2) {
            this.o[e4] || (this.o[e4] = { data: {} });
            var a2 = this.o[e4];
            return void 0 === a2.data && (a2.data = { action: e4 }), a2.data.newname = r3 || n3, i2 && (a2.data.box = i2), a2.data.path = t3, a2.data.name = n3, a2.data.source = o3, this.get(e4).then(function() {
              return true;
            });
          }, e3.prototype.crop = function(e4, t3, o3, n3, r3) {
            return this.changeImage("crop", e4, t3, o3, n3, r3);
          }, e3.prototype.resize = function(e4, t3, o3, n3, r3) {
            return this.changeImage("resize", e4, t3, o3, n3, r3);
          }, e3.prototype.getMessage = function(e4) {
            return this.options.getMessage(e4);
          }, e3.prototype.isSuccess = function(e4) {
            return this.options.isSuccess(e4);
          }, e3.prototype.destruct = function() {
            this.ajaxInstances.forEach(function(e4) {
              return e4.destruct();
            }), this.ajaxInstances.clear();
          }, n2.__decorate([a.autobind], e3);
        }();
        t2.default = l;
      }, 46341: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.makeContextMenu = t2.makeDataProvider = void 0;
        var n2 = o2(82530), r2 = o2(60403);
        t2.makeDataProvider = function(e3, t3) {
          return new n2.default(e3, t3);
        }, t2.makeContextMenu = function(e3) {
          return new r2.ContextMenu(e3);
        };
      }, 48096: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.deleteFile = void 0, t2.deleteFile = function(e3, t3, o2) {
          return e3.dataProvider.fileRemove(e3.state.currentPath, t3, o2).then(function(o3) {
            e3.status(o3 || e3.i18n('File "%s" was deleted', t3), true);
          }).catch(e3.status);
        };
      }, 4253: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.loadItems = void 0, t2.loadItems = function(e3) {
          return e3.files.setMod("active", true), e3.files.setMod("loading", true), e3.dataProvider.items(e3.state.currentPath, e3.state.currentSource, { sortBy: e3.state.sortBy, onlyImages: e3.state.onlyImages, filterWord: e3.state.filterWord }).then(function(t3) {
            t3 && (e3.state.elements = t3, e3.state.activeElements = []);
          }).catch(e3.status).finally(function() {
            return e3.files.setMod("loading", false);
          });
        };
      }, 36303: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.loadTree = void 0;
        var n2 = o2(20255), r2 = o2(64968), i = o2(4253);
        t2.loadTree = function(e3) {
          return n2.__awaiter(this, void 0, Promise, function() {
            var t3, o3;
            return n2.__generator(this, function(n3) {
              return e3.tree.setMod("active", true), r2.Dom.detach(e3.tree.container), t3 = (0, i.loadItems)(e3), e3.o.showFoldersPanel ? (e3.tree.setMod("loading", true), o3 = e3.dataProvider.tree(e3.state.currentPath, e3.state.currentSource).then(function(t4) {
                e3.state.sources = t4;
              }).catch(e3.status).finally(function() {
                return e3.tree.setMod("loading", false);
              }), [2, Promise.all([o3, t3])]) : (e3.tree.setMod("active", false), [2, t3]);
            });
          });
        };
      }, 50885: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isFileBrowserFilesItem = t2.FileBrowser = void 0;
        var n2 = o2(20255);
        o2(40692);
        var r2 = o2(93166), i = o2(86893), a = o2(77462), s = o2(40332), l = o2(64968), c = o2(46341), u = o2(86774), d = o2(21347), p = o2(44734), f = o2(82530), h = o2(43441), m = o2(98782), v = o2(55395), g = o2(36303), y = o2(4253), _ = o2(56562), b = o2(59829), w = o2(43608);
        o2(38097);
        var S = function(e3) {
          function t3(t4) {
            var o3, n3 = this;
            (n3 = e3.call(this, t4) || this).browser = n3.c.div(n3.componentName), n3.status_line = n3.c.div(n3.getFullElName("status")), n3.tree = new m.FileBrowserTree(n3), n3.files = new m.FileBrowserFiles(n3), n3.state = (0, v.observable)({ currentPath: "", currentSource: f.DEFAULT_SOURCE_NAME, currentBaseUrl: "", activeElements: [], elements: [], sources: [], view: "tiles", sortBy: "changed-desc", filterWord: "", onlyImages: false }), n3.errorHandler = function(e4) {
              (0, s.isAbort)(e4) || (e4 instanceof Error ? n3.status(n3.i18n(e4.message)) : n3.status(n3.dataProvider.getMessage(e4)));
            }, n3.close = function() {
              n3._dialog.close();
            }, n3.attachEvents(t4);
            var i2 = n3;
            i2.options = (0, s.ConfigProto)(t4 || {}, r2.Config.defaultOptions.filebrowser), i2.storage = a.Storage.makeStorage(Boolean(n3.o.saveStateInStorage), n3.componentName), i2.dataProvider = (0, c.makeDataProvider)(i2, i2.options), i2._dialog = n3.dlg({ minWidth: Math.min(700, screen.width), minHeight: 300, buttons: null !== (o3 = n3.o.headerButtons) && void 0 !== o3 ? o3 : ["fullsize", "dialog.close"] }), n3.proxyDialogEvents(i2), i2.browser.component = n3, i2.container = i2.browser, i2.o.showFoldersPanel && i2.browser.appendChild(i2.tree.container), i2.browser.appendChild(i2.files.container), i2.browser.appendChild(i2.status_line), p.selfListeners.call(i2), d.nativeListeners.call(i2), u.stateListeners.call(i2), i2._dialog.setSize(i2.o.width, i2.o.height), ["getLocalFileByUrl", "crop", "resize", "create", "fileMove", "folderMove", "fileRename", "folderRename", "fileRemove", "folderRemove", "folder", "items", "permissions"].forEach(function(e4) {
              null != n3.options[e4] && (n3.options[e4] = (0, s.ConfigProto)(n3.options[e4], n3.o.ajax));
            });
            var l2 = n3.o.saveStateInStorage || { storeLastOpenedFolder: false, storeView: false, storeSortBy: false }, h2 = l2.storeSortBy, g2 = l2.storeLastOpenedFolder, y2 = l2.storeView && n3.storage.get("view");
            i2.state.view = y2 && null == n3.o.view ? "list" === y2 ? "list" : "tiles" : "list" === i2.o.view ? "list" : "tiles", i2.files.setMod("view", i2.state.view);
            var b2 = h2 && i2.storage.get("sortBy");
            if (b2) {
              var w2 = b2.split("-");
              i2.state.sortBy = ["changed", "name", "size"].includes(w2[0]) ? b2 : "changed-desc";
            } else i2.state.sortBy = i2.o.sortBy || "changed-desc";
            if (g2) {
              var S2 = i2.storage.get("currentPath"), C = i2.storage.get("currentSource");
              i2.state.currentPath = null != S2 ? S2 : "", i2.state.currentSource = null != C ? C : "";
            }
            return i2.initUploader(i2), i2.setStatus(_.STATUSES.ready), n3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "Filebrowser";
          }, t3.prototype.onSelect = function(e4) {
            var t4 = this;
            return function() {
              if (t4.state.activeElements.length) {
                var o3 = [], n3 = [];
                t4.state.activeElements.forEach(function(e5) {
                  var t5 = e5.fileURL;
                  t5 && (o3.push(t5), n3.push(e5.isImage || false));
                }), t4.close();
                var r3 = { baseurl: "", files: o3, isImages: n3 };
                (0, s.isFunction)(e4) && e4(r3), t4.close();
              }
              return false;
            };
          }, Object.defineProperty(t3.prototype, "isOpened", { get: function() {
            return this._dialog.isOpened && "none" !== this.browser.style.display;
          }, enumerable: false, configurable: true }), t3.prototype.status = function(e4, t4) {
            e4 && !(0, s.isAbort)(e4) && ((0, s.isString)(e4) || (e4 = e4.message), (0, s.isString)(e4) && (0, s.trim)(e4).length && this.message.message(e4, t4 ? "success" : "error", this.o.howLongShowMsg));
          }, t3.prototype.open = function(e4, t4) {
            var o3 = this;
            return void 0 === e4 && (e4 = this.o.defaultCallback), void 0 === t4 && (t4 = false), this.state.onlyImages = t4, this.async.promise(function(t5, n3) {
              if (!o3.o.items || !o3.o.items.url) throw (0, s.error)("Need set options.filebrowser.ajax.url");
              var r3 = 0;
              o3.e.off(o3.files.container, "dblclick").on(o3.files.container, "dblclick", o3.onSelect(e4)).on(o3.files.container, "touchstart", function() {
                var t6 = (/* @__PURE__ */ new Date()).getTime();
                i.EMULATE_DBLCLICK_TIMEOUT > t6 - r3 && o3.onSelect(e4)(), r3 = t6;
              }).off("select.filebrowser").on("select.filebrowser", o3.onSelect(e4));
              var a2 = o3.c.div();
              o3.toolbar.build(o3.__getButtons()).appendTo(a2), o3._dialog.open(o3.browser, a2), o3.e.fire("sort.filebrowser", o3.state.sortBy), (0, g.loadTree)(o3).then(t5, n3);
            });
          }, t3.prototype.__getButtons = function() {
            var e4, t4 = this;
            return (null !== (e4 = this.o.buttons) && void 0 !== e4 ? e4 : []).filter(function(e5) {
              if (!(0, s.isString)(e5)) return true;
              switch (e5) {
                case "filebrowser.upload":
                  return t4.dataProvider.canI("FileUpload");
                case "filebrowser.edit":
                  return t4.dataProvider.canI("ImageResize") || t4.dataProvider.canI("ImageCrop");
                case "filebrowser.remove":
                  return t4.dataProvider.canI("FileRemove");
              }
              return true;
            });
          }, t3.prototype.initUploader = function(e4) {
            var t4, o3 = this, n3 = this, i2 = null === (t4 = null == e4 ? void 0 : e4.options) || void 0 === t4 ? void 0 : t4.uploader, a2 = (0, s.ConfigProto)(i2 || {}, r2.Config.defaultOptions.uploader), l2 = function() {
              return (0, y.loadItems)(o3);
            };
            n3.uploader = n3.getInstance("Uploader", a2), n3.uploader.setPath(n3.state.currentPath).setSource(n3.state.currentSource).bind(n3.browser, l2, n3.errorHandler), this.state.on(["change.currentPath", "change.currentSource"], function() {
              o3.uploader.setPath(o3.state.currentPath).setSource(o3.state.currentSource);
            }), n3.e.on("bindUploader.filebrowser", function(e5) {
              n3.uploader.bind(e5, l2, n3.errorHandler);
            });
          }, t3.prototype.proxyDialogEvents = function(e4) {
            var t4 = this;
            ["afterClose", "beforeOpen"].forEach(function(o3) {
              e4._dialog.events.on(e4.dlg, o3, function() {
                t4.e.fire(o3);
              });
            });
          }, t3.prototype.destruct = function() {
            this.isInDestruct || (e3.prototype.destruct.call(this), this._dialog.destruct(), this.events && this.e.off(".filebrowser"), this.uploader && this.uploader.destruct());
          }, n2.__decorate([h.autobind], t3.prototype, "status", null), n2.__decorate([h.autobind], t3.prototype, "open", null), n2.__decorate([(0, h.derive)(b.Dlgs)], t3);
        }(w.ViewWithToolbar);
        t2.FileBrowser = S, t2.isFileBrowserFilesItem = function(e3) {
          return l.Dom.isElement(e3) && e3.classList.contains(m.FileBrowserFiles.prototype.getFullElName("item"));
        };
      }, 63463: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(20255).__exportStar(o2(50885), t2);
      }, 21347: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.nativeListeners = t2.elementToItem = t2.getItem = void 0;
        var n2 = o2(20255), r2 = o2(40332), i = o2(34468), a = o2(64968), s = o2(66267), l = o2(36303);
        t2.getItem = function(e3, t3, o3) {
          return void 0 === o3 && (o3 = "a"), a.Dom.closest(e3, function(e4) {
            return a.Dom.isTag(e4, o3);
          }, t3);
        }, t2.elementToItem = function(e3, t3) {
          return t3[e3.dataset.key || ""].item;
        }, t2.nativeListeners = function() {
          var e3 = this, o3 = false, a2 = (0, s.elementsMap)(this), c = this;
          c.e.on(c.tree.container, "dragstart", function(e4) {
            var n3 = (0, t2.getItem)(e4.target, c.container);
            n3 && c.o.moveFolder && (o3 = n3);
          }).on(c.tree.container, "drop", function(n3) {
            if ((c.o.moveFile || c.o.moveFolder) && o3) {
              var i2 = (0, r2.attr)(o3, "-path") || "";
              if (!c.o.moveFolder && o3.classList.contains(e3.tree.getFullElName("item"))) return false;
              if (o3.classList.contains(e3.files.getFullElName("item")) && (i2 += (0, r2.attr)(o3, "-name"), !c.o.moveFile)) return false;
              var a3 = (0, t2.getItem)(n3.target, c.container);
              if (!a3) return;
              c.dataProvider.move(i2, (0, r2.attr)(a3, "-path") || "", (0, r2.attr)(a3, "-source") || "", o3.classList.contains(e3.files.getFullElName("item"))).then(function() {
                return (0, l.loadTree)(e3);
              }).catch(c.status), o3 = false;
            }
          }).on(c.files.container, "contextmenu", (0, i.default)(c)).on(c.files.container, "click", function(t3) {
            (0, r2.ctrlKey)(t3) || (e3.state.activeElements = []);
          }).on(c.files.container, "click", function(e4) {
            var o4 = (0, t2.getItem)(e4.target, c.container);
            if (o4) {
              var i2 = (0, t2.elementToItem)(o4, a2);
              if (i2) return c.state.activeElements = (0, r2.ctrlKey)(e4) ? n2.__spreadArray(n2.__spreadArray([], n2.__read(c.state.activeElements), false), [i2], false) : [i2], e4.stopPropagation(), false;
            }
          }).on(c.files.container, "dragstart", function(e4) {
            if (c.o.moveFile) {
              var n3 = (0, t2.getItem)(e4.target, c.container);
              if (!n3) return;
              o3 = n3;
            }
          }).on(c.container, "drop", function(e4) {
            return e4.preventDefault();
          });
        };
      }, 44734: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.selfListeners = void 0;
        var n2 = o2(20255), r2 = o2(10172), i = o2(40332), a = o2(82530), s = o2(35503), l = o2(36303), c = o2(4253), u = o2(48096);
        t2.selfListeners = function() {
          var e3 = this, t3 = this.state, o3 = this.dataProvider, d = this;
          d.e.on("view.filebrowser", function(e4) {
            e4 !== t3.view && (t3.view = e4);
          }).on("sort.filebrowser", function(e4) {
            e4 !== t3.sortBy && (t3.sortBy = e4, (0, c.loadItems)(d));
          }).on("filter.filebrowser", function(e4) {
            e4 !== t3.filterWord && (t3.filterWord = e4, (0, c.loadItems)(d));
          }).on("openFolder.filebrowser", function(e4) {
            var t4;
            t4 = ".." === e4.name ? e4.path.split("/").filter(function(e5) {
              return e5.length;
            }).slice(0, -1).join("/") : (0, i.normalizePath)(e4.path, e4.name), d.state.currentPath = t4, d.state.currentSource = "." === e4.name ? a.DEFAULT_SOURCE_NAME : e4.source;
          }).on("removeFolder.filebrowser", function(e4) {
            d.confirm("Are you sure?", "Delete", function(t4) {
              t4 && o3.folderRemove(e4.path, e4.name, e4.source).then(function(e5) {
                return d.status(e5, true), (0, l.loadTree)(d);
              }).catch(d.status);
            });
          }).on("renameFolder.filebrowser", function(e4) {
            d.prompt("Enter new name", "Rename", function(t4) {
              if (!(0, r2.isValidName)(t4)) return d.status(d.i18n("Enter new name")), false;
              o3.folderRename(e4.path, e4.name, t4, e4.source).then(function(e5) {
                return d.state.activeElements = [], d.status(e5, true), (0, l.loadTree)(d);
              }).catch(d.status);
            }, "type name", e4.name);
          }).on("addFolder.filebrowser", function(e4) {
            d.prompt("Enter Directory name", "Create directory", function(t4) {
              o3.createFolder(t4, e4.path, e4.source).then(function() {
                return (0, l.loadTree)(d);
              }).catch(d.status);
            }, "type name");
          }).on("fileRemove.filebrowser", function() {
            d.state.activeElements.length && d.confirm("Are you sure?", "", function(e4) {
              if (e4) {
                var t4 = [];
                d.state.activeElements.forEach(function(e5) {
                  t4.push((0, u.deleteFile)(d, e5.file || e5.name || "", e5.sourceName));
                }), d.state.activeElements = [], Promise.all(t4).then(function() {
                  return (0, l.loadTree)(d).catch(d.status);
                }, d.status);
              }
            });
          }).on("edit.filebrowser", function() {
            if (1 === d.state.activeElements.length) {
              var t4 = n2.__read(e3.state.activeElements, 1)[0];
              s.openImageEditor.call(d, t4.fileURL, t4.file || "", t4.path, t4.sourceName);
            }
          }).on("fileRename.filebrowser", function(e4, t4, n3) {
            1 === d.state.activeElements.length && d.prompt("Enter new name", "Rename", function(i2) {
              if (!(0, r2.isValidName)(i2)) return d.status(d.i18n("Enter new name")), false;
              o3.fileRename(t4, e4, i2, n3).then(function(e5) {
                d.state.activeElements = [], d.status(e5, true), (0, c.loadItems)(d);
              }).catch(d.status);
            }, "type name", e4);
          }).on("update.filebrowser", function() {
            (0, l.loadTree)(e3).then(e3.status, e3.status);
          });
        };
      }, 86774: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.stateListeners = void 0;
        var n2 = o2(64968), r2 = o2(89693), i = o2(2074), a = o2(66267), s = o2(36303);
        t2.stateListeners = function() {
          var e3 = this, t3 = (0, a.elementsMap)(this), o3 = this, l = o3.state, c = o3.files, u = o3.create, d = o3.options;
          l.on(["change.currentPath", "change.currentSource"], this.async.debounce(function() {
            e3.o.saveStateInStorage && e3.o.saveStateInStorage.storeLastOpenedFolder && e3.storage.set("currentPath", e3.state.currentPath).set("currentSource", e3.state.currentSource), (0, s.loadTree)(e3).catch(e3.status);
          }, this.defaultTimeout)).on("beforeChange.activeElements", function() {
            l.activeElements.forEach(function(e4) {
              var o4 = t3[e4.uniqueHashKey].elm;
              o4 && o4.classList.remove(c.getFullElName("item", "active", true));
            });
          }).on("change.activeElements", function() {
            e3.e.fire("changeSelection"), l.activeElements.forEach(function(e4) {
              var o4 = t3[e4.uniqueHashKey].elm;
              o4 && o4.classList.add(c.getFullElName("item", "active", true));
            });
          }).on("change.view", function() {
            c.setMod("view", l.view), e3.o.saveStateInStorage && e3.o.saveStateInStorage.storeView && e3.storage.set("view", l.view);
          }).on("change.sortBy", function() {
            e3.o.saveStateInStorage && e3.o.saveStateInStorage.storeSortBy && e3.storage.set("sortBy", l.sortBy);
          }).on("change.elements", this.async.debounce(function() {
            n2.Dom.detach(c.container), l.elements.length ? l.elements.forEach(function(o4) {
              e3.files.container.appendChild(function(o5) {
                var n3 = o5.uniqueHashKey;
                if (t3[n3]) return t3[n3].elm;
                var r3 = u.fromHTML(d.getThumbTemplate.call(e3, o5, o5.source, o5.sourceName.toString()));
                return r3.dataset.key = n3, t3[n3] = { item: o5, elm: r3 }, t3[n3].elm;
              }(o4));
            }) : c.container.appendChild(u.div(e3.componentName + "_no-files_true", e3.i18n("There are no files")));
          }, this.defaultTimeout)).on("change.sources", this.async.debounce(function() {
            n2.Dom.detach(e3.tree.container), l.sources.forEach(function(t4) {
              var o4 = t4.name;
              if (o4 && "default" !== o4 && e3.tree.container.appendChild(u.div(e3.tree.getFullElName("source-title"), o4)), t4.folders.forEach(function(n4) {
                var a2, s2 = u.a(e3.tree.getFullElName("item"), { draggable: "draggable", href: "#", "data-path": (0, r2.normalizePath)(t4.path, n4 + "/"), "data-name": n4, "data-source": o4, "data-source-path": t4.path }, u.span(e3.tree.getFullElName("item-title"), n4)), l2 = function(i2) {
                  return function(a3) {
                    e3.e.fire("".concat(i2, ".filebrowser"), { name: n4, path: (0, r2.normalizePath)(t4.path + "/"), source: o4 }), a3.stopPropagation(), a3.preventDefault();
                  };
                };
                e3.e.on(s2, "click", l2("openFolder")), e3.tree.container.appendChild(s2), ".." !== n4 && "." !== n4 && (d.renameFolder && e3.dataProvider.canI("FolderRename") && ((a2 = (0, i.Button)(e3, { icon: { name: "pencil" }, name: "rename", tooltip: "Rename", size: "tiny" })).onAction(l2("renameFolder")), s2.appendChild(a2.container)), d.deleteFolder && e3.dataProvider.canI("FolderRemove") && ((a2 = (0, i.Button)(e3, { icon: { name: "cancel" }, name: "remove", tooltip: "Delete", size: "tiny" })).onAction(l2("removeFolder")), s2.appendChild(a2.container)));
              }), d.createNewFolder && e3.dataProvider.canI("FolderCreate")) {
                var n3 = (0, i.Button)(e3, "plus", "Add folder", "secondary");
                n3.onAction(function() {
                  e3.e.fire("addFolder", { path: (0, r2.normalizePath)(t4.path + "/"), source: o4 });
                }), e3.tree.append(n3);
              }
            });
          }, this.defaultTimeout));
        };
      }, 21505: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.FileBrowserFiles = void 0;
        var n2 = o2(20255);
        o2(27452);
        var r2 = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "FilebrowserFiles";
          }, t3;
        }(o2(2074).UIGroup);
        t2.FileBrowserFiles = r2;
      }, 98782: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(21505), t2), n2.__exportStar(o2(42472), t2);
      }, 42472: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.FileBrowserTree = void 0;
        var n2 = o2(20255);
        o2(51422);
        var r2 = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "FilebrowserTree";
          }, t3;
        }(o2(2074).UIGroup);
        t2.FileBrowserTree = r2;
      }, 3107: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Command = void 0;
        var o2 = function() {
          function e3(e4, t3, o3, n2) {
            this.oldValue = e4, this.newValue = t3, this.history = o3, this.tick = n2;
          }
          return e3.prototype.undo = function() {
            this.history.snapshot.restore(this.oldValue);
          }, e3.prototype.redo = function() {
            this.history.snapshot.restore(this.newValue);
          }, e3;
        }();
        t2.Command = o2;
      }, 15432: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.History = void 0;
        var n2 = o2(20255), r2 = o2(93166), i = o2(56562), a = o2(31648), s = o2(3621), l = o2(3107), c = o2(43441);
        r2.Config.prototype.history = { enable: true, maxHistoryLength: 1 / 0, timeout: 1e3 }, r2.Config.prototype.observer = r2.Config.prototype.history;
        var u = function(e3) {
          function t3(t4, o3, n3) {
            void 0 === o3 && (o3 = new s.Stack(t4.o.history.maxHistoryLength)), void 0 === n3 && (n3 = new a.Snapshot(t4));
            var r3 = e3.call(this, t4) || this;
            return r3.updateTick = 0, r3.__stack = o3, r3.snapshot = n3, t4.o.history.enable && t4.e.on("afterAddPlace.history", function() {
              r3.isInDestruct || (r3.startValue = r3.snapshot.make(), t4.events.on("internalChange internalUpdate", function() {
                r3.startValue = r3.snapshot.make();
              }).on(t4.editor, ["changeSelection", "selectionstart", "selectionchange", "mousedown", "mouseup", "keydown", "keyup"].map(function(e4) {
                return e4 + ".history";
              }).join(" "), function() {
                r3.startValue.html === r3.j.getNativeEditorValue() && (r3.startValue = r3.snapshot.make());
              }).on(r3, "change.history", r3.onChange));
            }), r3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "History";
          }, Object.defineProperty(t3.prototype, "startValue", { get: function() {
            return this.__startValue;
          }, set: function(e4) {
            this.__startValue = e4;
          }, enumerable: false, configurable: true }), t3.prototype.__upTick = function() {
            this.updateTick += 1;
          }, t3.prototype.onChange = function() {
            this.__processChanges();
          }, t3.prototype.__processChanges = function() {
            !this.snapshot.isBlocked && this.j.o.history.enable && this.updateStack();
          }, t3.prototype.updateStack = function(e4) {
            void 0 === e4 && (e4 = false);
            var t4 = this.snapshot.make();
            if (!a.Snapshot.equal(t4, this.startValue)) {
              var o3 = new l.Command(this.startValue, t4, this, this.updateTick);
              if (e4) {
                var n3 = this.__stack.current();
                n3 && this.updateTick === n3.tick && this.__stack.replace(o3);
              } else this.__stack.push(o3);
              this.startValue = t4, this.fireChangeStack();
            }
          }, t3.prototype.redo = function() {
            this.__stack.redo() && (this.startValue = this.snapshot.make(), this.fireChangeStack());
          }, t3.prototype.canRedo = function() {
            return this.__stack.canRedo();
          }, t3.prototype.undo = function() {
            this.__stack.undo() && (this.startValue = this.snapshot.make(), this.fireChangeStack());
          }, t3.prototype.canUndo = function() {
            return this.__stack.canUndo();
          }, t3.prototype.clear = function() {
            this.startValue = this.snapshot.make(), this.__stack.clear(), this.fireChangeStack();
          }, Object.defineProperty(t3.prototype, "length", { get: function() {
            return this.__stack.length;
          }, enumerable: false, configurable: true }), t3.prototype.fireChangeStack = function() {
            var e4;
            this.j && !this.j.isInDestruct && (null === (e4 = this.j.events) || void 0 === e4 || e4.fire("changeStack"));
          }, t3.prototype.destruct = function() {
            this.isInDestruct || (this.j.events && this.j.e.off(".history"), this.snapshot.destruct(), e3.prototype.destruct.call(this));
          }, n2.__decorate([(0, c.debounce)()], t3.prototype, "onChange", null), t3;
        }(i.ViewComponent);
        t2.History = u;
      }, 31648: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Snapshot = void 0;
        var n2 = o2(20255), r2 = o2(56562), i = o2(64968), a = o2(86893), s = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.__isBlocked = false, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "Snapshot";
          }, t3.equal = function(e4, t4) {
            return e4.html === t4.html && JSON.stringify(e4.range) === JSON.stringify(t4.range);
          }, t3.countNodesBeforeInParent = function(e4) {
            if (!e4.parentNode) return 0;
            for (var t4 = e4.parentNode.childNodes, o3 = 0, n3 = null, r3 = 0; t4.length > r3; r3 += 1) {
              if (!n3 || this.isIgnoredNode(t4[r3]) || i.Dom.isText(n3) && i.Dom.isText(t4[r3]) || (o3 += 1), t4[r3] === e4) return o3;
              n3 = t4[r3];
            }
            return 0;
          }, t3.strokeOffset = function(e4, t4) {
            for (; i.Dom.isText(e4); ) i.Dom.isText(e4 = e4.previousSibling) && e4.nodeValue && (t4 += e4.nodeValue.length);
            return t4;
          }, t3.prototype.calcHierarchyLadder = function(e4) {
            var o3 = [];
            if (!e4 || !e4.parentNode || !i.Dom.isOrContains(this.j.editor, e4)) return [];
            for (; e4 && e4 !== this.j.editor; ) e4 && !t3.isIgnoredNode(e4) && o3.push(t3.countNodesBeforeInParent(e4)), e4 = e4.parentNode;
            return o3.reverse();
          }, t3.prototype.getElementByLadder = function(e4) {
            var t4, o3 = this.j.editor;
            for (t4 = 0; o3 && e4.length > t4; t4 += 1) o3 = o3.childNodes[e4[t4]];
            return o3;
          }, Object.defineProperty(t3.prototype, "isBlocked", { get: function() {
            return this.__isBlocked;
          }, enumerable: false, configurable: true }), t3.prototype.__block = function(e4) {
            this.__isBlocked = e4;
          }, t3.prototype.transaction = function(e4) {
            this.__block(true);
            try {
              e4();
            } catch (e5) {
            }
            this.__block(false);
          }, t3.prototype.make = function() {
            var e4 = { html: "", range: { startContainer: [], startOffset: 0, endContainer: [], endOffset: 0 } };
            e4.html = this.removeJoditSelection(this.j.editor);
            var o3 = this.j.s.sel;
            if (o3 && o3.rangeCount) {
              var n3 = o3.getRangeAt(0), r3 = this.calcHierarchyLadder(n3.startContainer), i2 = this.calcHierarchyLadder(n3.endContainer), a2 = t3.strokeOffset(n3.startContainer, n3.startOffset), s2 = t3.strokeOffset(n3.endContainer, n3.endOffset);
              r3.length || n3.startContainer === this.j.editor || (a2 = 0), i2.length || n3.endContainer === this.j.editor || (s2 = 0), e4.range = { startContainer: r3, startOffset: a2, endContainer: i2, endOffset: s2 };
            }
            return e4;
          }, t3.prototype.restore = function(e4) {
            var t4 = this;
            this.transaction(function() {
              var o3 = t4.storeScrollState();
              t4.j.getNativeEditorValue() !== e4.html && (t4.j.value = e4.html), t4.restoreOnlySelection(e4), t4.restoreScrollState(o3);
            });
          }, t3.prototype.storeScrollState = function() {
            return [this.j.ow.scrollY, this.j.editor.scrollTop];
          }, t3.prototype.restoreScrollState = function(e4) {
            var t4 = this.j, o3 = t4.ow;
            o3.scrollTo(o3.scrollX, e4[0]), t4.editor.scrollTop = e4[1];
          }, t3.prototype.restoreOnlySelection = function(e4) {
            try {
              if (e4.range) {
                var t4 = this.j.ed.createRange();
                t4.setStart(this.getElementByLadder(e4.range.startContainer), e4.range.startOffset), t4.setEnd(this.getElementByLadder(e4.range.endContainer), e4.range.endOffset), this.j.s.selectRange(t4);
              }
            } catch (e5) {
              this.j.editor.lastChild && this.j.s.setCursorAfter(this.j.editor.lastChild);
            }
          }, t3.prototype.destruct = function() {
            this.__block(false), e3.prototype.destruct.call(this);
          }, t3.isIgnoredNode = function(e4) {
            return i.Dom.isText(e4) && !e4.nodeValue || i.Dom.isTemporary(e4);
          }, t3.prototype.removeJoditSelection = function(e4) {
            var t4 = e4.cloneNode(true);
            return t4.querySelectorAll("[".concat(a.TEMP_ATTR, "]")).forEach(i.Dom.unwrap), t4.innerHTML;
          }, t3;
        }(r2.ViewComponent);
        t2.Snapshot = s;
      }, 3621: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Stack = void 0;
        var o2 = function() {
          function e3(e4) {
            this.size = e4, this.commands = [], this.stackPosition = -1;
          }
          return Object.defineProperty(e3.prototype, "length", { get: function() {
            return this.commands.length;
          }, enumerable: false, configurable: true }), e3.prototype.clearRedo = function() {
            this.commands.length = this.stackPosition + 1;
          }, e3.prototype.clear = function() {
            this.commands.length = 0, this.stackPosition = -1;
          }, e3.prototype.push = function(e4) {
            this.clearRedo(), this.commands.push(e4), this.stackPosition += 1, this.commands.length > this.size && (this.commands.shift(), this.stackPosition -= 1);
          }, e3.prototype.replace = function(e4) {
            this.commands[this.stackPosition] = e4;
          }, e3.prototype.current = function() {
            return this.commands[this.stackPosition];
          }, e3.prototype.undo = function() {
            return !!this.canUndo() && (this.commands[this.stackPosition] && this.commands[this.stackPosition].undo(), this.stackPosition -= 1, true);
          }, e3.prototype.redo = function() {
            return !!this.canRedo() && (this.stackPosition += 1, this.commands[this.stackPosition] && this.commands[this.stackPosition].redo(), true);
          }, e3.prototype.canUndo = function() {
            return this.stackPosition >= 0;
          }, e3.prototype.canRedo = function() {
            return this.commands.length - 1 > this.stackPosition;
          }, e3;
        }();
        t2.Stack = o2;
      }, 95356: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(77904);
        n2.Config.prototype.imageeditor = { min_width: 20, min_height: 20, closeAfterSave: false, width: "85%", height: "85%", crop: true, resize: true, resizeUseRatio: true, resizeMinWidth: 20, resizeMinHeight: 20, cropUseRatio: true, cropDefaultWidth: "70%", cropDefaultHeight: "70%" }, r2.Icon.set("crop", o2(3610)).set("resize", o2(56170));
      }, 35503: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.openImageEditor = t2.ImageEditor = void 0;
        var n2 = o2(20255);
        o2(62820);
        var r2 = o2(93166), i = o2(56562), a = o2(40332), s = o2(64968), l = o2(96516), c = o2(9249), u = o2(43441);
        o2(95356);
        var d = "jodit-image-editor", p = "resize", f = "crop", h = function(e3) {
          function t3(t4) {
            var n3 = e3.call(this, t4) || this;
            n3.resizeUseRatio = true, n3.cropUseRatio = true, n3.clicked = false, n3.start_x = 0, n3.start_y = 0, n3.top_x = 0, n3.top_y = 0, n3.width = 0, n3.height = 0, n3.activeTab = p, n3.naturalWidth = 0, n3.naturalHeight = 0, n3.ratio = 0, n3.new_h = 0, n3.new_w = 0, n3.diff_x = 0, n3.diff_y = 0, n3.cropBox = { x: 0, y: 0, w: 0, h: 0 }, n3.resizeBox = { w: 0, h: 0 }, n3.calcCropBox = function() {
              var e4 = n3.crop_box.parentNode, t5 = 0.8 * e4.offsetWidth, o4 = 0.8 * e4.offsetHeight, r3 = t5, i3 = o4, s3 = n3.naturalWidth, l2 = n3.naturalHeight;
              t5 > s3 && o4 > l2 ? (r3 = s3, i3 = l2) : n3.ratio > t5 / o4 ? (r3 = t5, i3 = l2 * (t5 / s3)) : (r3 = s3 * (o4 / l2), i3 = o4), (0, a.css)(n3.crop_box, { width: r3, height: i3 });
            }, n3.showCrop = function() {
              if (n3.cropImage) {
                n3.calcCropBox();
                var e4 = n3.cropImage.offsetWidth || n3.image.offsetWidth || n3.image.naturalWidth;
                n3.new_w = o3.calcValueByPercent(e4, n3.o.cropDefaultWidth);
                var t5 = n3.cropImage.offsetHeight || n3.image.offsetHeight || n3.image.naturalHeight;
                n3.new_h = n3.cropUseRatio ? n3.new_w / n3.ratio : o3.calcValueByPercent(t5, n3.o.cropDefaultHeight), (0, a.css)(n3.cropHandler, { backgroundImage: "url(" + (0, a.attr)(n3.cropImage, "src") + ")", width: n3.new_w, height: n3.new_h, left: e4 / 2 - n3.new_w / 2, top: t5 / 2 - n3.new_h / 2 }), n3.j.e.fire(n3.cropHandler, "updatesize");
              }
            }, n3.updateCropBox = function() {
              if (n3.cropImage) {
                var e4 = n3.cropImage.offsetWidth / n3.naturalWidth, t5 = n3.cropImage.offsetHeight / n3.naturalHeight;
                n3.cropBox.x = (0, a.css)(n3.cropHandler, "left") / e4, n3.cropBox.y = (0, a.css)(n3.cropHandler, "top") / t5, n3.cropBox.w = n3.cropHandler.offsetWidth / e4, n3.cropBox.h = n3.cropHandler.offsetHeight / t5, n3.sizes.textContent = n3.cropBox.w.toFixed(0) + "x" + n3.cropBox.h.toFixed(0);
              }
            }, n3.updateResizeBox = function() {
              n3.resizeBox.w = n3.image.offsetWidth || n3.naturalWidth, n3.resizeBox.h = n3.image.offsetHeight || n3.naturalHeight;
            }, n3.setHandlers = function() {
              var e4 = n3, t5 = (0, a.refs)(n3.editor), o4 = t5.widthInput, r3 = t5.heightInput;
              e4.j.e.on([e4.editor.querySelector(".jodit_bottomright"), e4.cropHandler], "mousedown.".concat(d), n3.onResizeHandleMouseDown).on(n3.j.ow, "resize.".concat(d), function() {
                n3.j.e.fire(e4.resizeHandler, "updatesize"), e4.showCrop(), n3.j.e.fire(e4.cropHandler, "updatesize");
              }), e4.j.e.on((0, a.toArray)(n3.editor.querySelectorAll(".".concat(d, "__slider-title"))), "click", n3.onTitleModeClick).on([o4, r3], "input", n3.onChangeSizeInput);
              var i3 = (0, a.refs)(n3.editor), s3 = i3.keepAspectRatioResize, l2 = i3.keepAspectRatioCrop;
              s3 && s3.addEventListener("change", function() {
                n3.resizeUseRatio = s3.checked;
              }), l2 && l2.addEventListener("change", function() {
                n3.cropUseRatio = l2.checked;
              }), e4.j.e.on(e4.resizeHandler, "updatesize", function() {
                (0, a.css)(e4.resizeHandler, { top: 0, left: 0, width: e4.image.offsetWidth || e4.naturalWidth, height: e4.image.offsetHeight || e4.naturalHeight }), n3.updateResizeBox();
              }).on(e4.cropHandler, "updatesize", function() {
                if (e4.cropImage) {
                  var t6 = (0, a.css)(e4.cropHandler, "left"), o5 = (0, a.css)(e4.cropHandler, "top"), n4 = e4.cropHandler.offsetWidth, r4 = e4.cropHandler.offsetHeight;
                  0 > t6 && (t6 = 0), 0 > o5 && (o5 = 0), t6 + n4 > e4.cropImage.offsetWidth && (n4 = e4.cropImage.offsetWidth - t6, e4.cropUseRatio && (r4 = n4 / e4.ratio)), o5 + r4 > e4.cropImage.offsetHeight && (r4 = e4.cropImage.offsetHeight - o5, e4.cropUseRatio && (n4 = r4 * e4.ratio)), (0, a.css)(e4.cropHandler, { width: n4, height: r4, left: t6, top: o5, backgroundPosition: -t6 - 1 + "px " + (-o5 - 1) + "px", backgroundSize: e4.cropImage.offsetWidth + "px " + e4.cropImage.offsetHeight + "px" }), e4.updateCropBox();
                }
              }), Object.values(e4.buttons).forEach(function(t6) {
                t6.onAction(function() {
                  var n4 = { action: e4.activeTab, box: e4.activeTab === p ? e4.resizeBox : e4.cropBox };
                  switch (t6) {
                    case e4.buttons.saveas:
                      e4.j.prompt("Enter new name", "Save in new file", function(t7) {
                        if (!(0, a.trim)(t7)) return e4.j.alert("The name should not be empty"), false;
                        e4.onSave(t7, n4, e4.hide, function(t8) {
                          e4.j.alert(t8.message);
                        });
                      });
                      break;
                    case e4.buttons.save:
                      e4.onSave(void 0, n4, e4.hide, function(t7) {
                        e4.j.alert(t7.message);
                      });
                      break;
                    case e4.buttons.reset:
                      e4.activeTab === p ? ((0, a.css)(e4.image, { width: null, height: null }), o4.value = e4.naturalWidth.toString(), r3.value = e4.naturalHeight.toString(), e4.j.e.fire(e4.resizeHandler, "updatesize")) : e4.showCrop();
                  }
                });
              });
            }, n3.options = t4 && t4.o && t4.o.imageeditor ? t4.o.imageeditor : r2.Config.defaultOptions.imageeditor;
            var i2 = n3.options;
            n3.resizeUseRatio = i2.resizeUseRatio, n3.cropUseRatio = i2.cropUseRatio, n3.buttons = { reset: (0, l.Button)(n3.j, "update", "Reset"), save: (0, l.Button)(n3.j, "save", "Save"), saveas: (0, l.Button)(n3.j, "save", "Save as ...") }, n3.activeTab = i2.resize ? p : f, n3.editor = (0, c.form)(n3.j, n3.options);
            var s2 = (0, a.refs)(n3.editor), u2 = s2.cropBox;
            return n3.resize_box = s2.resizeBox, n3.crop_box = u2, n3.sizes = n3.editor.querySelector(".".concat(d, "__area.").concat(d, "__area_crop .jodit-image-editor__sizes")), n3.resizeHandler = n3.editor.querySelector(".".concat(d, "__resizer")), n3.cropHandler = n3.editor.querySelector(".".concat(d, "__croper")), n3._dialog = n3.j.dlg({ buttons: ["fullsize", "dialog.close"] }), n3._dialog.setContent(n3.editor), n3._dialog.setSize(n3.o.width, n3.o.height), n3._dialog.setHeader([n3.buttons.reset, n3.buttons.save, n3.buttons.saveas]), n3.setHandlers(), n3;
          }
          var o3;
          return n2.__extends(t3, e3), o3 = t3, t3.prototype.className = function() {
            return "ImageEditor";
          }, t3.prototype.onTitleModeClick = function(e4) {
            var t4 = this, o4 = e4.target, n3 = null == o4 ? void 0 : o4.parentElement;
            if (n3) {
              (0, a.$$)(".".concat(d, "__slider,.").concat(d, "__area"), t4.editor).forEach(function(e5) {
                return e5.classList.remove("".concat(d, "_active"));
              }), n3.classList.add("".concat(d, "_active")), this.activeTab = (0, a.attr)(n3, "-area") || p;
              var r3 = t4.editor.querySelector(".".concat(d, "__area.").concat(d, "__area_") + t4.activeTab);
              r3 && r3.classList.add("".concat(d, "_active")), t4.activeTab === f && t4.showCrop();
            }
          }, t3.prototype.onChangeSizeInput = function(e4) {
            var t4, o4 = this, n3 = e4.target, r3 = (0, a.refs)(this.editor), i2 = r3.widthInput, s2 = r3.heightInput, l2 = "widthInput" === (0, a.attr)(n3, "data-ref"), c2 = parseInt(n3.value, 10), u2 = l2 ? o4.o.min_height : o4.o.min_width;
            c2 > (l2 ? o4.o.min_width : o4.o.min_height) && ((0, a.css)(o4.image, l2 ? "width" : "height", c2), o4.resizeUseRatio && (t4 = l2 ? Math.round(c2 / o4.ratio) : Math.round(c2 * o4.ratio)) > u2 && ((0, a.css)(o4.image, l2 ? "height" : "width", t4), l2 ? s2.value = t4.toString() : i2.value = t4.toString())), this.j.e.fire(o4.resizeHandler, "updatesize");
          }, t3.prototype.onResizeHandleMouseDown = function(e4) {
            var t4 = this;
            t4.target = e4.target, e4.preventDefault(), e4.stopImmediatePropagation(), t4.clicked = true, t4.start_x = e4.clientX, t4.start_y = e4.clientY, t4.activeTab === f ? (t4.top_x = (0, a.css)(t4.cropHandler, "left"), t4.top_y = (0, a.css)(t4.cropHandler, "top"), t4.width = t4.cropHandler.offsetWidth, t4.height = t4.cropHandler.offsetHeight) : (t4.width = t4.image.offsetWidth, t4.height = t4.image.offsetHeight), t4.j.e.on(this.j.ow, "mousemove", this.onGlobalMouseMove).one(this.j.ow, "mouseup", this.onGlobalMouseUp);
          }, t3.prototype.onGlobalMouseUp = function(e4) {
            this.clicked && (this.clicked = false, e4.stopImmediatePropagation(), this.j.e.off(this.j.ow, "mousemove", this.onGlobalMouseMove));
          }, t3.prototype.onGlobalMouseMove = function(e4) {
            var t4 = this;
            if (t4.clicked) {
              var o4 = (0, a.refs)(this.editor), n3 = o4.widthInput, r3 = o4.heightInput;
              t4.diff_x = e4.clientX - t4.start_x, t4.diff_y = e4.clientY - t4.start_y, t4.activeTab === p && t4.resizeUseRatio || t4.activeTab === f && t4.cropUseRatio ? t4.diff_x ? (t4.new_w = t4.width + t4.diff_x, t4.new_h = Math.round(t4.new_w / t4.ratio)) : (t4.new_h = t4.height + t4.diff_y, t4.new_w = Math.round(t4.new_h * t4.ratio)) : (t4.new_w = t4.width + t4.diff_x, t4.new_h = t4.height + t4.diff_y), t4.activeTab === p ? (t4.new_w > t4.o.resizeMinWidth && ((0, a.css)(t4.image, "width", t4.new_w + "px"), n3.value = t4.new_w.toString()), t4.new_h > t4.o.resizeMinHeight && ((0, a.css)(t4.image, "height", t4.new_h + "px"), r3.value = t4.new_h.toString()), this.j.e.fire(t4.resizeHandler, "updatesize")) : (t4.target !== t4.cropHandler ? (t4.top_x + t4.new_w > t4.cropImage.offsetWidth && (t4.new_w = t4.cropImage.offsetWidth - t4.top_x), t4.top_y + t4.new_h > t4.cropImage.offsetHeight && (t4.new_h = t4.cropImage.offsetHeight - t4.top_y), (0, a.css)(t4.cropHandler, { width: t4.new_w, height: t4.new_h })) : (t4.top_x + t4.diff_x + t4.cropHandler.offsetWidth > t4.cropImage.offsetWidth && (t4.diff_x = t4.cropImage.offsetWidth - t4.top_x - t4.cropHandler.offsetWidth), (0, a.css)(t4.cropHandler, "left", t4.top_x + t4.diff_x), t4.top_y + t4.diff_y + t4.cropHandler.offsetHeight > t4.cropImage.offsetHeight && (t4.diff_y = t4.cropImage.offsetHeight - t4.top_y - t4.cropHandler.offsetHeight), (0, a.css)(t4.cropHandler, "top", t4.top_y + t4.diff_y)), this.j.e.fire(t4.cropHandler, "updatesize"));
            }
          }, Object.defineProperty(t3.prototype, "o", { get: function() {
            return this.options;
          }, enumerable: false, configurable: true }), t3.prototype.hide = function() {
            this._dialog.close();
          }, t3.prototype.open = function(e4, t4) {
            var o4 = this;
            return this.j.async.promise(function(n3) {
              var r3 = (/* @__PURE__ */ new Date()).getTime();
              o4.image = o4.j.c.element("img"), (0, a.$$)("img,.jodit-icon_loader", o4.resize_box).forEach(s.Dom.safeRemove), (0, a.$$)("img,.jodit-icon_loader", o4.crop_box).forEach(s.Dom.safeRemove), (0, a.css)(o4.cropHandler, "background", "transparent"), o4.onSave = t4, o4.resize_box.appendChild(o4.j.c.element("i", { class: "jodit-icon_loader" })), o4.crop_box.appendChild(o4.j.c.element("i", { class: "jodit-icon_loader" })), /\?/.test(e4) ? e4 += "&_tst=" + r3 : e4 += "?_tst=" + r3, o4.image.setAttribute("src", e4), o4._dialog.open();
              var i2 = (0, a.refs)(o4.editor), l2 = i2.widthInput, c2 = i2.heightInput, u2 = function() {
                o4.isDestructed || (o4.image.removeEventListener("load", u2), o4.naturalWidth = o4.image.naturalWidth, o4.naturalHeight = o4.image.naturalHeight, l2.value = o4.naturalWidth.toString(), c2.value = o4.naturalHeight.toString(), o4.ratio = o4.naturalWidth / o4.naturalHeight, o4.resize_box.appendChild(o4.image), o4.cropImage = o4.image.cloneNode(true), o4.crop_box.appendChild(o4.cropImage), s.Dom.safeRemove.apply(null, (0, a.$$)(".jodit-icon_loader", o4.editor)), o4.activeTab === f && o4.showCrop(), o4.j.e.fire(o4.resizeHandler, "updatesize"), o4.j.e.fire(o4.cropHandler, "updatesize"), o4._dialog.setPosition(), o4.j.e.fire("afterImageEditor"), n3(o4._dialog));
              };
              o4.image.addEventListener("load", u2), o4.image.complete && u2();
            });
          }, t3.prototype.destruct = function() {
            this.isDestructed || (this._dialog && !this._dialog.isInDestruct && this._dialog.destruct(), s.Dom.safeRemove(this.editor), this.j.e && this.j.e.off(this.j.ow, "mousemove", this.onGlobalMouseMove).off(this.j.ow, "mouseup", this.onGlobalMouseUp).off(this.ow, ".".concat(d)).off(".".concat(d)), e3.prototype.destruct.call(this));
          }, t3.calcValueByPercent = function(e4, t4) {
            var o4, n3 = t4.toString(), r3 = parseFloat(e4.toString());
            return (o4 = /^[-+]?[0-9]+(px)?$/.exec(n3)) ? parseInt(n3, 10) : (o4 = /^([-+]?[0-9.]+)%$/.exec(n3)) ? Math.round(r3 * (parseFloat(o4[1]) / 100)) : r3 || 0;
          }, n2.__decorate([u.autobind], t3.prototype, "onTitleModeClick", null), n2.__decorate([(0, u.debounce)(), u.autobind], t3.prototype, "onChangeSizeInput", null), n2.__decorate([u.autobind], t3.prototype, "onResizeHandleMouseDown", null), n2.__decorate([u.autobind], t3.prototype, "onGlobalMouseUp", null), n2.__decorate([(0, u.throttle)(10)], t3.prototype, "onGlobalMouseMove", null), n2.__decorate([u.autobind], t3.prototype, "hide", null), n2.__decorate([u.autobind], t3.prototype, "open", null), o3 = n2.__decorate([u.component], t3);
        }(i.ViewComponent);
        t2.ImageEditor = h, t2.openImageEditor = function(e3, t3, o3, n3, r3, i2) {
          var s2 = this;
          return this.getInstance("ImageEditor", this.o).open(e3, function(e4, l2, c2, u2) {
            return (0, a.call)("resize" === l2.action ? s2.dataProvider.resize : s2.dataProvider.crop, o3, n3, t3, e4, l2.box).then(function(e5) {
              e5 && (c2(), r3 && r3());
            }).catch(function(e5) {
              u2(e5), i2 && i2(e5);
            });
          });
        };
      }, 9249: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.form = void 0;
        var n2 = o2(2074), r2 = "jodit-image-editor", i = n2.Icon.get.bind(n2.Icon), a = function(e3, t3) {
          return void 0 === t3 && (t3 = "jodti-image-editor_active"), e3 ? t3 : "";
        };
        t2.form = function(e3, t3) {
          var o3 = e3.i18n.bind(e3), n3 = function(e4, t4, n4) {
            return void 0 === n4 && (n4 = true), '<div class="jodit-form__group">\n			<label>'.concat(o3(e4), "</label>\n\n			<label class='jodit-switcher'>\n				<input ").concat(a(n4, "checked"), ' data-ref="').concat(t4, '" type="checkbox"/>\n				<span class="jodit-switcher__slider"></span>\n			</label>\n	</div>');
          };
          return e3.create.fromHTML('<form class="'.concat(r2, ' jodit-properties">\n		<div class="jodit-grid jodit-grid_xs-column">\n			<div class="jodit_col-lg-3-4 jodit_col-sm-5-5">\n			').concat(t3.resize ? '<div class="'.concat(r2, "__area ").concat(r2, "__area_resize ").concat(r2, '_active">\n							<div data-ref="resizeBox" class="').concat(r2, '__box"></div>\n							<div class="').concat(r2, '__resizer">\n								<i class="jodit_bottomright"></i>\n							</div>\n						</div>') : "", "\n			").concat(t3.crop ? '<div class="'.concat(r2, "__area ").concat(r2, "__area_crop ").concat(a(!t3.resize), '">\n							<div data-ref="cropBox" class="').concat(r2, '__box">\n								<div class="').concat(r2, '__croper">\n									<i class="jodit_bottomright"></i>\n									<i class="').concat(r2, '__sizes"></i>\n								</div>\n							</div>\n						</div>') : "", '\n			</div>\n			<div class="jodit_col-lg-1-4 jodit_col-sm-5-5">\n			').concat(t3.resize ? '<div data-area="resize" class="'.concat(r2, "__slider ").concat(r2, '_active">\n							<div class="').concat(r2, '__slider-title">\n								').concat(i("resize"), "\n								").concat(o3("Resize"), '\n							</div>\n							<div class="').concat(r2, '__slider-content">\n								<div class="jodit-form__group">\n									<label>\n										').concat(o3("Width"), '\n									</label>\n									<input type="number" data-ref="widthInput" class="jodit-input"/>\n								</div>\n								<div class="jodit-form__group">\n									<label>\n										').concat(o3("Height"), '\n									</label>\n									<input type="number" data-ref="heightInput" class="jodit-input"/>\n								</div>\n								').concat(n3("Keep Aspect Ratio", "keepAspectRatioResize"), "\n							</div>\n						</div>") : "", "\n			").concat(t3.crop ? '<div data-area="crop" class="'.concat(r2, "__slider ").concat(a(!t3.resize), `'">
							<div class="`).concat(r2, '__slider-title">\n								').concat(i("crop"), "\n								").concat(o3("Crop"), '\n							</div>\n							<div class="').concat(r2, '__slider-content">\n								').concat(n3("Keep Aspect Ratio", "keepAspectRatioCrop"), "\n							</div>\n						</div>") : "", "\n			</div>\n		</div>\n	</form>"));
        };
      }, 87837: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.PluginSystem = t2.UIMessages = t2.Uploader = t2.ToolbarCollection = t2.ToolbarEditorCollection = t2.Table = t2.StatusBar = t2.CommitStyle = t2.Select = t2.Snapshot = t2.History = t2.ImageEditor = t2.Helpers = t2.ViewWithToolbar = t2.View = t2.Icon = t2.ProgressBar = t2.UIBlock = t2.UICheckbox = t2.UITextArea = t2.UIInput = t2.UIForm = t2.UIList = t2.UIGroup = t2.UISeparator = t2.Popup = t2.UIButton = t2.UIElement = t2.Create = t2.Plugin = t2.LazyWalker = t2.Dom = t2.ContextMenu = t2.STATUSES = t2.ViewComponent = t2.Component = t2.Async = void 0;
        var n2 = o2(20255);
        n2.__exportStar(o2(55395), t2);
        var r2 = o2(22630);
        Object.defineProperty(t2, "Async", { enumerable: true, get: function() {
          return r2.Async;
        } }), n2.__exportStar(o2(30056), t2);
        var i = o2(56562);
        Object.defineProperty(t2, "Component", { enumerable: true, get: function() {
          return i.Component;
        } }), Object.defineProperty(t2, "ViewComponent", { enumerable: true, get: function() {
          return i.ViewComponent;
        } }), Object.defineProperty(t2, "STATUSES", { enumerable: true, get: function() {
          return i.STATUSES;
        } });
        var a = o2(60403);
        Object.defineProperty(t2, "ContextMenu", { enumerable: true, get: function() {
          return a.ContextMenu;
        } }), n2.__exportStar(o2(92080), t2);
        var s = o2(64968);
        Object.defineProperty(t2, "Dom", { enumerable: true, get: function() {
          return s.Dom;
        } }), Object.defineProperty(t2, "LazyWalker", { enumerable: true, get: function() {
          return s.LazyWalker;
        } });
        var l = o2(57549);
        Object.defineProperty(t2, "Plugin", { enumerable: true, get: function() {
          return l.Plugin;
        } });
        var c = o2(42841);
        Object.defineProperty(t2, "Create", { enumerable: true, get: function() {
          return c.Create;
        } });
        var u = o2(2074);
        Object.defineProperty(t2, "UIElement", { enumerable: true, get: function() {
          return u.UIElement;
        } }), Object.defineProperty(t2, "UIButton", { enumerable: true, get: function() {
          return u.UIButton;
        } }), Object.defineProperty(t2, "Popup", { enumerable: true, get: function() {
          return u.Popup;
        } }), Object.defineProperty(t2, "UISeparator", { enumerable: true, get: function() {
          return u.UISeparator;
        } }), Object.defineProperty(t2, "UIGroup", { enumerable: true, get: function() {
          return u.UIGroup;
        } }), Object.defineProperty(t2, "UIList", { enumerable: true, get: function() {
          return u.UIList;
        } }), Object.defineProperty(t2, "UIForm", { enumerable: true, get: function() {
          return u.UIForm;
        } }), Object.defineProperty(t2, "UIInput", { enumerable: true, get: function() {
          return u.UIInput;
        } }), Object.defineProperty(t2, "UITextArea", { enumerable: true, get: function() {
          return u.UITextArea;
        } }), Object.defineProperty(t2, "UICheckbox", { enumerable: true, get: function() {
          return u.UICheckbox;
        } }), Object.defineProperty(t2, "UIBlock", { enumerable: true, get: function() {
          return u.UIBlock;
        } }), Object.defineProperty(t2, "ProgressBar", { enumerable: true, get: function() {
          return u.ProgressBar;
        } }), Object.defineProperty(t2, "Icon", { enumerable: true, get: function() {
          return u.Icon;
        } });
        var d = o2(75902);
        Object.defineProperty(t2, "View", { enumerable: true, get: function() {
          return d.View;
        } });
        var p = o2(43608);
        Object.defineProperty(t2, "ViewWithToolbar", { enumerable: true, get: function() {
          return p.ViewWithToolbar;
        } }), n2.__exportStar(o2(63463), t2);
        var f = o2(40332);
        t2.Helpers = f;
        var h = o2(35503);
        Object.defineProperty(t2, "ImageEditor", { enumerable: true, get: function() {
          return h.ImageEditor;
        } });
        var m = o2(15432);
        Object.defineProperty(t2, "History", { enumerable: true, get: function() {
          return m.History;
        } });
        var v = o2(31648);
        Object.defineProperty(t2, "Snapshot", { enumerable: true, get: function() {
          return v.Snapshot;
        } });
        var g = o2(2123);
        Object.defineProperty(t2, "Select", { enumerable: true, get: function() {
          return g.Select;
        } }), Object.defineProperty(t2, "CommitStyle", { enumerable: true, get: function() {
          return g.CommitStyle;
        } });
        var y = o2(38603);
        Object.defineProperty(t2, "StatusBar", { enumerable: true, get: function() {
          return y.StatusBar;
        } });
        var _ = o2(25120);
        Object.defineProperty(t2, "Table", { enumerable: true, get: function() {
          return _.Table;
        } });
        var b = o2(81698);
        Object.defineProperty(t2, "ToolbarEditorCollection", { enumerable: true, get: function() {
          return b.ToolbarEditorCollection;
        } });
        var w = o2(72719);
        Object.defineProperty(t2, "ToolbarCollection", { enumerable: true, get: function() {
          return w.ToolbarCollection;
        } }), n2.__exportStar(o2(3890), t2);
        var S = o2(50454);
        Object.defineProperty(t2, "Uploader", { enumerable: true, get: function() {
          return S.Uploader;
        } });
        var C = o2(71014);
        Object.defineProperty(t2, "UIMessages", { enumerable: true, get: function() {
          return C.UIMessages;
        } });
        var j = o2(44540);
        Object.defineProperty(t2, "PluginSystem", { enumerable: true, get: function() {
          return j.PluginSystem;
        } });
      }, 37762: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UIMessage = void 0;
        var n2 = o2(20255), r2 = o2(2074), i = o2(11441), a = function(e3) {
          function t3(t4, o3) {
            var n3 = e3.call(this, t4) || this;
            return n3.setMod("active", true), n3.setMod("variant", o3.variant), n3.container.textContent = o3.text, n3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "UIMessage";
          }, n2.__decorate([i.component], t3);
        }(r2.UIElement);
        t2.UIMessage = a;
      }, 71014: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UIMessages = void 0;
        var n2 = o2(20255);
        o2(63421);
        var r2 = o2(26911), i = o2(61479), a = o2(11441), s = o2(46163), l = o2(37762), c = function(e3) {
          function t3(t4, o3, n3) {
            void 0 === n3 && (n3 = { defaultTimeout: 3e3, defaultOffset: 5 });
            var r3 = e3.call(this, t4) || this;
            return r3.__box = o3, r3.options = n3, r3.__messages = /* @__PURE__ */ new Set(), r3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "UIMessages";
          }, t3.prototype.info = function(e4, t4) {
            this.__message(e4, "info", t4);
          }, t3.prototype.success = function(e4, t4) {
            this.__message(e4, "success", t4);
          }, t3.prototype.error = function(e4, t4) {
            this.__message(e4, "error", t4);
          }, t3.prototype.message = function(e4, t4, o3) {
            this.__message(e4, t4, o3);
          }, t3.prototype.__message = function(e4, t4, o3) {
            void 0 === t4 && (t4 = "info");
            var n3 = e4 + ":" + t4;
            if (this.__messages.has(n3)) this.async.updateTimeout(n3, o3 || this.options.defaultTimeout);
            else {
              this.__box.appendChild(this.container);
              var r3 = new l.UIMessage(this.j, { text: e4, variant: t4 });
              this.append(r3), this.__calcOffsets(), this.__messages.add(n3);
              var i2 = this.__getRemoveCallback(r3, n3);
              this.j.e.on(r3.container, "pointerdown", i2), this.async.setTimeout(i2, { label: n3, timeout: o3 || this.options.defaultTimeout });
            }
          }, t3.prototype.__getRemoveCallback = function(e4, t4) {
            var o3 = this, n3 = function(r3) {
              r3 && r3.preventDefault(), e4.isInDestruct || (o3.async.clearTimeout(t4), o3.j.e.off(e4.container, "pointerdown", n3), o3.__messages.delete(t4), e4.setMod("active", false), o3.async.setTimeout(function() {
                o3.remove(e4), e4.destruct(), o3.__calcOffsets();
              }, 300));
            };
            return n3;
          }, t3.prototype.__calcOffsets = function() {
            var e4 = this, t4 = 5;
            this.elements.forEach(function(o3) {
              (0, r2.css)(o3.container, "bottom", t4 + "px"), t4 += o3.container.offsetHeight + e4.options.defaultOffset;
            });
          }, n2.__decorate([(0, s.watch)(":errorMessage")], t3.prototype, "__message", null), n2.__decorate([a.component], t3);
        }(i.UIGroup);
        t2.UIMessages = c;
      }, 38603: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.StatusBar = void 0;
        var n2 = o2(20255);
        o2(32115);
        var r2 = o2(56562), i = o2(64968), a = o2(59829), s = o2(43441), l = function(e3) {
          function t3(t4, o3) {
            var n3 = e3.call(this, t4) || this;
            return n3.target = o3, n3.mods = {}, n3.container = t4.c.div("jodit-status-bar"), o3.appendChild(n3.container), n3.hide(), n3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "StatusBar";
          }, t3.prototype.hide = function() {
            this.container.classList.add("jodit_hidden");
          }, t3.prototype.show = function() {
            this.container.classList.remove("jodit_hidden");
          }, Object.defineProperty(t3.prototype, "isShown", { get: function() {
            return !this.container.classList.contains("jodit_hidden");
          }, enumerable: false, configurable: true }), t3.prototype.getHeight = function() {
            var e4, t4;
            return null !== (t4 = null === (e4 = this.container) || void 0 === e4 ? void 0 : e4.offsetHeight) && void 0 !== t4 ? t4 : 0;
          }, t3.prototype.findEmpty = function(e4) {
            void 0 === e4 && (e4 = false);
            for (var t4 = this.getElms(e4 ? "item-right" : "item"), o3 = 0; t4.length > o3; o3 += 1) if (!t4[o3].innerHTML.trim().length) return t4[o3];
          }, t3.prototype.append = function(e4, t4) {
            var o3;
            void 0 === t4 && (t4 = false);
            var n3 = this.findEmpty(t4) || this.j.c.div(this.getFullElName("item"));
            t4 && n3.classList.add(this.getFullElName("item-right")), n3.appendChild(e4), null === (o3 = this.container) || void 0 === o3 || o3.appendChild(n3), this.j.o.statusbar && this.show(), this.j.e.fire("resize");
          }, t3.prototype.destruct = function() {
            this.isInDestruct || (this.setStatus(r2.STATUSES.beforeDestruct), i.Dom.safeRemove(this.container), e3.prototype.destruct.call(this));
          }, n2.__decorate([s.component, (0, s.derive)(a.Mods, a.Elms)], t3);
        }(r2.ViewComponent);
        t2.StatusBar = l;
      }, 25120: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Table = void 0;
        var n2 = o2(20255), r2 = o2(86893), i = o2(64968), a = o2(40332), s = o2(56562), l = o2(17332), c = o2(43441), u = /* @__PURE__ */ new WeakMap(), d = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.selected = /* @__PURE__ */ new Set(), t4;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "Table";
          }, t3.prototype.recalculateStyles = function() {
            var e4 = (0, l.getContainer)(this.j, t3, "style", true), o3 = [];
            this.selected.forEach(function(e5) {
              var t4 = (0, a.cssPath)(e5);
              t4 && o3.push(t4);
            }), e4.innerHTML = o3.length ? o3.join(",") + "{".concat(this.jodit.options.table.selectionCellStyle, "}") : "";
          }, t3.prototype.addSelection = function(e4) {
            this.selected.add(e4), this.recalculateStyles();
            var o3 = i.Dom.closest(e4, "table", this.j.editor);
            if (o3) {
              var n3 = t3.selectedByTable.get(o3) || /* @__PURE__ */ new Set();
              n3.add(e4), t3.selectedByTable.set(o3, n3);
            }
          }, t3.prototype.removeSelection = function(e4) {
            this.selected.delete(e4), this.recalculateStyles();
            var o3 = i.Dom.closest(e4, "table", this.j.editor);
            if (o3) {
              var n3 = t3.selectedByTable.get(o3);
              n3 && (n3.delete(e4), n3.size || t3.selectedByTable.delete(o3));
            }
          }, t3.prototype.getAllSelectedCells = function() {
            return (0, a.toArray)(this.selected);
          }, t3.getSelectedCellsByTable = function(e4) {
            var o3 = t3.selectedByTable.get(e4);
            return o3 ? (0, a.toArray)(o3) : [];
          }, t3.prototype.destruct = function() {
            return this.selected.clear(), e3.prototype.destruct.call(this);
          }, t3.getRowsCount = function(e4) {
            return e4.rows.length;
          }, t3.getColumnsCount = function(e4) {
            return t3.formalMatrix(e4).reduce(function(e5, t4) {
              return Math.max(e5, t4.length);
            }, 0);
          }, t3.formalMatrix = function(e4, t4) {
            for (var o3 = [[]], n3 = (0, a.toArray)(e4.rows), r3 = function(e5, n4) {
              void 0 === o3[n4] && (o3[n4] = []);
              for (var r4, i3, a2 = e5.colSpan, s3 = e5.rowSpan, l3 = 0; o3[n4][l3]; ) l3 += 1;
              for (i3 = 0; s3 > i3; i3 += 1) for (r4 = 0; a2 > r4; r4 += 1) {
                if (void 0 === o3[n4 + i3] && (o3[n4 + i3] = []), t4 && false === t4(e5, n4 + i3, l3 + r4, a2, s3)) return false;
                o3[n4 + i3][l3 + r4] = e5;
              }
            }, i2 = 0; n3.length > i2; i2 += 1) for (var s2 = (0, a.toArray)(n3[i2].cells), l2 = 0; s2.length > l2; l2 += 1) if (false === r3(s2[l2], i2)) return o3;
            return o3;
          }, t3.formalCoordinate = function(e4, o3, n3) {
            void 0 === n3 && (n3 = false);
            var r3 = 0, i2 = 0, a2 = 1, s2 = 1;
            return t3.formalMatrix(e4, function(e5, t4, l2, c2, u2) {
              if (o3 === e5) return r3 = t4, i2 = l2, a2 = c2 || 1, s2 = u2 || 1, n3 && (i2 += (c2 || 1) - 1, r3 += (u2 || 1) - 1), false;
            }), [r3, i2, a2, s2];
          }, t3.appendRow = function(e4, o3, n3, r3) {
            var i2, s2;
            if (o3) s2 = o3.cloneNode(true), (0, a.$$)("td,th", o3).forEach(function(e5) {
              var t4 = (0, a.attr)(e5, "rowspan");
              if (t4 && parseInt(t4, 10) > 1) {
                var o4 = parseInt(t4, 10) - 1;
                (0, a.attr)(e5, "rowspan", o4 > 1 ? o4 : null);
              }
            }), (0, a.$$)("td,th", s2).forEach(function(e5) {
              e5.innerHTML = "";
            });
            else {
              var l2 = t3.getColumnsCount(e4);
              s2 = r3.element("tr");
              for (var c2 = 0; l2 > c2; c2 += 1) s2.appendChild(r3.element("td"));
            }
            n3 && o3 && o3.nextSibling ? o3.parentNode && o3.parentNode.insertBefore(s2, o3.nextSibling) : !n3 && o3 ? o3.parentNode && o3.parentNode.insertBefore(s2, o3) : ((null === (i2 = e4.getElementsByTagName("tbody")) || void 0 === i2 ? void 0 : i2[0]) || e4).appendChild(s2);
          }, t3.removeRow = function(e4, o3) {
            var n3, r3 = t3.formalMatrix(e4), s2 = e4.rows[o3];
            r3[o3].forEach(function(t4, l2) {
              if (n3 = false, 0 > o3 - 1 || r3[o3 - 1][l2] !== t4) if (r3[o3 + 1] && r3[o3 + 1][l2] === t4) {
                if (t4.parentNode === s2 && t4.parentNode.nextSibling) {
                  n3 = true;
                  for (var c2 = l2 + 1; r3[o3 + 1][c2] === t4; ) c2 += 1;
                  var u2 = i.Dom.next(t4.parentNode, function(e5) {
                    return i.Dom.isTag(e5, "tr");
                  }, e4);
                  u2 && (r3[o3 + 1][c2] ? u2.insertBefore(t4, r3[o3 + 1][c2]) : u2.appendChild(t4));
                }
              } else i.Dom.safeRemove(t4);
              else n3 = true;
              if (n3 && (t4.parentNode === s2 || t4 !== r3[o3][l2 - 1])) {
                var d2 = t4.rowSpan;
                (0, a.attr)(t4, "rowspan", d2 - 1 > 1 ? d2 - 1 : null);
              }
            }), i.Dom.safeRemove(s2);
          }, t3.appendColumn = function(e4, o3, n3, r3) {
            var s2, l2 = t3.formalMatrix(e4);
            for ((void 0 === o3 || 0 > o3) && (o3 = t3.getColumnsCount(e4) - 1), s2 = 0; l2.length > s2; s2 += 1) {
              var c2 = r3.element("td"), u2 = l2[s2][o3], d2 = false;
              n3 ? (l2[s2] && u2 && o3 + 1 >= l2[s2].length || u2 !== l2[s2][o3 + 1]) && (u2.nextSibling ? i.Dom.before(u2.nextSibling, c2) : u2.parentNode && u2.parentNode.appendChild(c2), d2 = true) : (0 > o3 - 1 || l2[s2][o3] !== l2[s2][o3 - 1] && l2[s2][o3].parentNode) && (i.Dom.before(l2[s2][o3], c2), d2 = true), d2 || (0, a.attr)(l2[s2][o3], "colspan", parseInt((0, a.attr)(l2[s2][o3], "colspan") || "1", 10) + 1);
            }
          }, t3.removeColumn = function(e4, o3) {
            var n3, r3 = t3.formalMatrix(e4);
            r3.forEach(function(e5, t4) {
              var s2 = e5[o3];
              if (n3 = false, 0 > o3 - 1 || r3[t4][o3 - 1] !== s2 ? e5.length > o3 + 1 && r3[t4][o3 + 1] === s2 ? n3 = true : i.Dom.safeRemove(s2) : n3 = true, n3 && (0 > t4 - 1 || s2 !== r3[t4 - 1][o3])) {
                var l2 = s2.colSpan;
                (0, a.attr)(s2, "colspan", l2 - 1 > 1 ? (l2 - 1).toString() : null);
              }
            });
          }, t3.getSelectedBound = function(e4, o3) {
            var n3, r3, i2, a2 = [[1 / 0, 1 / 0], [0, 0]], s2 = t3.formalMatrix(e4);
            for (n3 = 0; s2.length > n3; n3 += 1) for (r3 = 0; s2[n3] && s2[n3].length > r3; r3 += 1) o3.includes(s2[n3][r3]) && (a2[0][0] = Math.min(n3, a2[0][0]), a2[0][1] = Math.min(r3, a2[0][1]), a2[1][0] = Math.max(n3, a2[1][0]), a2[1][1] = Math.max(r3, a2[1][1]));
            for (n3 = a2[0][0]; a2[1][0] >= n3; n3 += 1) for (i2 = 1, r3 = a2[0][1]; a2[1][1] >= r3; r3 += 1) {
              for (; s2[n3] && s2[n3][r3 - i2] && s2[n3][r3] === s2[n3][r3 - i2]; ) a2[0][1] = Math.min(r3 - i2, a2[0][1]), a2[1][1] = Math.max(r3 - i2, a2[1][1]), i2 += 1;
              for (i2 = 1; s2[n3] && s2[n3][r3 + i2] && s2[n3][r3] === s2[n3][r3 + i2]; ) a2[0][1] = Math.min(r3 + i2, a2[0][1]), a2[1][1] = Math.max(r3 + i2, a2[1][1]), i2 += 1;
              for (i2 = 1; s2[n3 - i2] && s2[n3][r3] === s2[n3 - i2][r3]; ) a2[0][0] = Math.min(n3 - i2, a2[0][0]), a2[1][0] = Math.max(n3 - i2, a2[1][0]), i2 += 1;
              for (i2 = 1; s2[n3 + i2] && s2[n3][r3] === s2[n3 + i2][r3]; ) a2[0][0] = Math.min(n3 + i2, a2[0][0]), a2[1][0] = Math.max(n3 + i2, a2[1][0]), i2 += 1;
            }
            return a2;
          }, t3.normalizeTable = function(e4) {
            var o3, n3, r3, i2, s2 = [], l2 = t3.formalMatrix(e4);
            for (n3 = 0; l2[0].length > n3; n3 += 1) {
              for (r3 = 1e6, i2 = false, o3 = 0; l2.length > o3; o3 += 1) if (void 0 !== l2[o3][n3]) {
                if (2 > l2[o3][n3].colSpan) {
                  i2 = true;
                  break;
                }
                r3 = Math.min(r3, l2[o3][n3].colSpan);
              }
              if (!i2) for (o3 = 0; l2.length > o3; o3 += 1) void 0 !== l2[o3][n3] && t3.mark(l2[o3][n3], "colspan", l2[o3][n3].colSpan - r3 + 1, s2);
            }
            for (o3 = 0; l2.length > o3; o3 += 1) {
              for (r3 = 1e6, i2 = false, n3 = 0; l2[o3].length > n3; n3 += 1) if (void 0 !== l2[o3][n3]) {
                if (2 > l2[o3][n3].rowSpan) {
                  i2 = true;
                  break;
                }
                r3 = Math.min(r3, l2[o3][n3].rowSpan);
              }
              if (!i2) for (n3 = 0; l2[o3].length > n3; n3 += 1) void 0 !== l2[o3][n3] && t3.mark(l2[o3][n3], "rowspan", l2[o3][n3].rowSpan - r3 + 1, s2);
            }
            for (o3 = 0; l2.length > o3; o3 += 1) for (n3 = 0; l2[o3].length > n3; n3 += 1) void 0 !== l2[o3][n3] && (l2[o3][n3].hasAttribute("rowspan") && 1 === l2[o3][n3].rowSpan && (0, a.attr)(l2[o3][n3], "rowspan", null), l2[o3][n3].hasAttribute("colspan") && 1 === l2[o3][n3].colSpan && (0, a.attr)(l2[o3][n3], "colspan", null), l2[o3][n3].hasAttribute("class") && !(0, a.attr)(l2[o3][n3], "class") && (0, a.attr)(l2[o3][n3], "class", null));
            t3.unmark(s2);
          }, t3.mergeSelected = function(e4, o3) {
            var n3, s2 = [], l2 = t3.getSelectedBound(e4, t3.getSelectedCellsByTable(e4)), c2 = 0, u2 = null, d2 = 0, f = 0, h = 0, m = /* @__PURE__ */ new Set(), v = [];
            l2 && (l2[0][0] - l2[1][0] || l2[0][1] - l2[1][1]) && (t3.formalMatrix(e4, function(e5, r3, i2, g, y) {
              if (!(l2[0][0] > r3 || r3 > l2[1][0] || l2[0][1] > i2 || i2 > l2[1][1])) {
                if (m.has(n3 = e5)) return;
                m.add(n3), r3 === l2[0][0] && n3.style.width && (c2 += n3.offsetWidth), "" !== (0, a.trim)(e5.innerHTML.replace(/<br(\/)?>/g, "")) && s2.push(e5.innerHTML), g > 1 && (f += g - 1), y > 1 && (h += y - 1), u2 ? (t3.mark(n3, "remove", 1, v), p(o3).removeSelection(n3)) : (u2 = e5, d2 = i2);
              }
            }), f = l2[1][1] - l2[0][1] + 1, h = l2[1][0] - l2[0][0] + 1, u2 && (f > 1 && t3.mark(u2, "colspan", f, v), h > 1 && t3.mark(u2, "rowspan", h, v), c2 && (t3.mark(u2, "width", (c2 / e4.offsetWidth * 100).toFixed(r2.ACCURACY) + "%", v), d2 && t3.setColumnWidthByDelta(e4, d2, 0, true, v)), u2.innerHTML = s2.join("<br/>"), p(o3).addSelection(u2), m.delete(u2), t3.unmark(v), t3.normalizeTable(e4), (0, a.toArray)(e4.rows).forEach(function(e5, t4) {
              e5.cells.length || i.Dom.safeRemove(e5);
            })));
          }, t3.splitHorizontal = function(e4, o3) {
            var n3, r3, a2, s2, l2, c2 = [];
            t3.getSelectedCellsByTable(e4).forEach(function(u2) {
              (r3 = o3.createInside.element("td")).appendChild(o3.createInside.element("br")), a2 = o3.createInside.element("tr"), n3 = t3.formalCoordinate(e4, u2), 2 > u2.rowSpan ? (t3.formalMatrix(e4, function(e5, o4, r4) {
                n3[0] === o4 && n3[1] !== r4 && e5 !== u2 && t3.mark(e5, "rowspan", e5.rowSpan + 1, c2);
              }), i.Dom.after(i.Dom.closest(u2, "tr", e4), a2), a2.appendChild(r3)) : (t3.mark(u2, "rowspan", u2.rowSpan - 1, c2), t3.formalMatrix(e4, function(t4, o4, r4) {
                o4 > n3[0] && n3[0] + u2.rowSpan > o4 && n3[1] > r4 && t4.parentNode.rowIndex === o4 && (l2 = t4), o4 > n3[0] && t4 === u2 && (s2 = e4.rows[o4]);
              }), l2 ? i.Dom.after(l2, r3) : s2.insertBefore(r3, s2.firstChild)), u2.colSpan > 1 && t3.mark(r3, "colspan", u2.colSpan, c2), t3.unmark(c2), p(o3).removeSelection(u2);
            }), this.normalizeTable(e4);
          }, t3.splitVertical = function(e4, o3) {
            var n3, a2, s2, l2 = [];
            t3.getSelectedCellsByTable(e4).forEach(function(c2) {
              n3 = t3.formalCoordinate(e4, c2), 2 > c2.colSpan ? t3.formalMatrix(e4, function(e5, o4, r3) {
                n3[1] === r3 && n3[0] !== o4 && e5 !== c2 && t3.mark(e5, "colspan", e5.colSpan + 1, l2);
              }) : t3.mark(c2, "colspan", c2.colSpan - 1, l2), (a2 = o3.createInside.element("td")).appendChild(o3.createInside.element("br")), c2.rowSpan > 1 && t3.mark(a2, "rowspan", c2.rowSpan, l2);
              var u2 = c2.offsetWidth;
              i.Dom.after(c2, a2), t3.mark(c2, "width", (100 * (s2 = u2 / e4.offsetWidth / 2)).toFixed(r2.ACCURACY) + "%", l2), t3.mark(a2, "width", (100 * s2).toFixed(r2.ACCURACY) + "%", l2), t3.unmark(l2), p(o3).removeSelection(c2);
            }), t3.normalizeTable(e4);
          }, t3.setColumnWidthByDelta = function(e4, o3, n3, i2, a2) {
            for (var s2 = t3.formalMatrix(e4), l2 = 0, c2 = 0; s2.length > c2; c2 += 1) if (1 >= (u2 = s2[c2][o3]).colSpan || 1 >= s2.length) {
              t3.mark(u2, "width", ((u2.offsetWidth + n3) / e4.offsetWidth * 100).toFixed(r2.ACCURACY) + "%", a2), l2 = c2;
              break;
            }
            for (c2 = l2 + 1; s2.length > c2; c2 += 1) {
              var u2;
              t3.mark(u2 = s2[c2][o3], "width", null, a2);
            }
            i2 || t3.unmark(a2);
          }, t3.mark = function(e4, t4, o3, n3) {
            var r3;
            n3.push(e4);
            var i2 = null !== (r3 = u.get(e4)) && void 0 !== r3 ? r3 : {};
            i2[t4] = void 0 === o3 ? 1 : o3, u.set(e4, i2);
          }, t3.unmark = function(e4) {
            e4.forEach(function(e5) {
              var t4 = u.get(e5);
              t4 && (Object.keys(t4).forEach(function(o3) {
                var n3 = t4[o3];
                switch (o3) {
                  case "remove":
                    i.Dom.safeRemove(e5);
                    break;
                  case "rowspan":
                    (0, a.attr)(e5, "rowspan", (0, a.isNumber)(n3) && n3 > 1 ? n3 : null);
                    break;
                  case "colspan":
                    (0, a.attr)(e5, "colspan", (0, a.isNumber)(n3) && n3 > 1 ? n3 : null);
                    break;
                  case "width":
                    null == n3 ? (e5.style.removeProperty("width"), (0, a.attr)(e5, "style") || (0, a.attr)(e5, "style", null)) : e5.style.width = n3.toString();
                }
                delete t4[o3];
              }), u.delete(e5));
            });
          }, t3.selectedByTable = /* @__PURE__ */ new WeakMap(), n2.__decorate([(0, c.debounce)()], t3.prototype, "recalculateStyles", null), t3;
        }(s.ViewComponent);
        t2.Table = d;
        var p = function(e3) {
          return e3.getInstance("Table", e3.o);
        };
      }, 48197: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ToolbarButton = void 0;
        var n2 = o2(20255);
        o2(53362);
        var r2 = o2(96516), i = o2(43441), a = o2(64968), s = o2(12680), l = o2(81438), c = o2(40332), u = o2(77904), d = o2(72719), p = o2(29411), f = o2(38546), h = function(e3) {
          function t3(t4, o3, i2) {
            void 0 === i2 && (i2 = null);
            var a2 = e3.call(this, t4) || this;
            return a2.control = o3, a2.target = i2, a2.state = n2.__assign(n2.__assign({}, (0, r2.UIButtonState)()), { theme: "toolbar", currentValue: "", hasTrigger: false }), a2.openedPopup = null, t4.e.on([a2.button, a2.trigger], "mousedown", function(e4) {
              return e4.preventDefault();
            }), a2.onAction(a2.onClick), a2.hookStatus(p.STATUSES.ready, function() {
              a2.initFromControl(), a2.initTooltip(), a2.update();
            }), o3.mods && Object.keys(o3.mods).forEach(function(e4) {
              o3.mods && a2.setMod(e4, o3.mods[e4]);
            }), a2;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "ToolbarButton";
          }, Object.defineProperty(t3.prototype, "toolbar", { get: function() {
            return this.closest(d.ToolbarCollection);
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "button", { get: function() {
            return this.container.querySelector("button.".concat(this.componentName, "__button"));
          }, enumerable: false, configurable: true }), t3.prototype.update = function() {
            var t4 = this.control, o3 = this.state, n3 = this.closest(d.ToolbarCollection);
            o3.disabled = this.calculateDisabledStatus(n3), o3.activated = this.calculateActivatedStatus(n3), (0, c.isFunction)(t4.update) && n3 && t4.update(this, n3.jodit), e3.prototype.update.call(this);
          }, t3.prototype.calculateActivatedStatus = function(e4) {
            return !((0, c.isJoditObject)(this.j) && !this.j.editorIsActive) && (!(!(0, c.isFunction)(this.control.isActive) || !this.control.isActive(this.j, this.control, this)) || Boolean(e4 && e4.shouldBeActive(this)));
          }, t3.prototype.calculateDisabledStatus = function(e4) {
            return !!this.j.o.disabled || !(!this.j.o.readonly || this.j.o.activeButtonsInReadOnly && this.j.o.activeButtonsInReadOnly.includes(this.control.name)) || !(!(0, c.isFunction)(this.control.isDisabled) || !this.control.isDisabled(this.j, this.control, this)) || Boolean(e4 && e4.shouldBeDisabled(this));
          }, t3.prototype.onChangeActivated = function() {
            (0, c.attr)(this.button, "aria-pressed", this.state.activated), e3.prototype.onChangeActivated.call(this);
          }, t3.prototype.onChangeText = function() {
            (0, c.isFunction)(this.control.template) ? this.text.innerHTML = this.control.template(this.j, this.control.name, this.j.i18n(this.state.text)) : e3.prototype.onChangeText.call(this), this.setMod("text-icons", Boolean(this.text.innerText.trim().length));
          }, t3.prototype.onChangeTabIndex = function() {
            (0, c.attr)(this.button, "tabindex", this.state.tabIndex);
          }, t3.prototype.onChangeTooltip = function() {
            (0, c.attr)(this.button, "aria-label", this.state.tooltip), e3.prototype.onChangeTooltip.call(this);
          }, t3.prototype.createContainer = function() {
            var t4 = this.componentName, o3 = this.j.c.span(t4), n3 = e3.prototype.createContainer.call(this);
            return (0, c.attr)(o3, "role", "listitem"), n3.classList.remove(t4), n3.classList.add(t4 + "__button"), Object.defineProperty(n3, "component", { value: this }), o3.appendChild(n3), this.trigger = this.j.c.fromHTML('<span role="trigger" class="'.concat(t4, '__trigger">').concat(u.Icon.get("chevron"), "</span>")), o3;
          }, t3.prototype.focus = function() {
            var e4;
            null === (e4 = this.container.querySelector("button")) || void 0 === e4 || e4.focus();
          }, t3.prototype.onChangeHasTrigger = function() {
            this.state.hasTrigger ? this.container.appendChild(this.trigger) : a.Dom.safeRemove(this.trigger), this.setMod("with-trigger", this.state.hasTrigger || null);
          }, t3.prototype.onChangeDisabled = function() {
            var e4 = this.state.disabled ? "disabled" : null;
            (0, c.attr)(this.trigger, "disabled", e4), (0, c.attr)(this.button, "disabled", e4), (0, c.attr)(this.container, "disabled", e4);
          }, t3.prototype.initTooltip = function() {
            var e4 = this;
            this.j.o.textIcons || !this.j.o.showTooltip || this.j.o.useNativeTooltip || this.j.e.off(this.container, "mouseenter mouseleave").on(this.container, "mousemove", function(t4) {
              e4.state.tooltip && !e4.state.disabled && e4.j.e.fire("delayShowTooltip", function() {
                return { x: t4.clientX + 10, y: t4.clientY + 10 };
              }, e4.state.tooltip);
            }).on(this.container, "mouseleave", function() {
              e4.j.e.fire("hideTooltip");
            });
          }, t3.prototype.initFromControl = function() {
            var e4, t4 = this.control, o3 = this.state;
            this.updateSize(), o3.name = t4.name;
            var n3 = this.j.o.textIcons;
            if (true === n3 || (0, c.isFunction)(n3) && n3(t4.name) || t4.template) o3.icon = (0, r2.UIButtonState)().icon, o3.text = t4.text || t4.name;
            else {
              if (t4.iconURL) o3.icon.iconURL = t4.iconURL;
              else {
                var i2 = t4.icon || t4.name;
                o3.icon.name = u.Icon.exists(i2) || (null === (e4 = this.j.o.extraIcons) || void 0 === e4 ? void 0 : e4[i2]) ? i2 : "";
              }
              t4.iconURL || o3.icon.name || (o3.text = t4.text || t4.name);
            }
            t4.tooltip && (o3.tooltip = this.j.i18n((0, c.isFunction)(t4.tooltip) ? t4.tooltip(this.j, t4, this) : t4.tooltip)), o3.hasTrigger = Boolean(t4.list || t4.popup && t4.exec);
          }, t3.prototype.onTriggerClick = function(e4) {
            var t4, o3, n3, r3 = this;
            if (this.openedPopup) this.closePopup();
            else {
              var i2 = this.control;
              if (e4.buffer = { actionTrigger: this }, i2.list) return this.openControlList(i2);
              if ((0, c.isFunction)(i2.popup)) {
                var a2 = this.openPopup();
                if (a2.parentElement = this, false !== this.j.e.fire((0, c.camelCase)("before-".concat(i2.name, "-open-popup")), this.target, i2, a2)) {
                  var s2 = null !== (n3 = null !== (o3 = null === (t4 = this.toolbar) || void 0 === t4 ? void 0 : t4.getTarget(this)) && void 0 !== o3 ? o3 : this.target) && void 0 !== n3 ? n3 : null, l2 = i2.popup(this.j, s2, i2, this.closePopup, this);
                  l2 && a2.setContent((0, c.isString)(l2) ? this.j.c.fromHTML(l2) : l2).open(function() {
                    return (0, c.position)(r3.container);
                  }, false, this.j.o.allowTabNavigation ? this.container : void 0);
                }
                this.j.e.fire((0, c.camelCase)("after-".concat(i2.name, "-open-popup")), a2.container);
              }
            }
          }, t3.prototype.openControlList = function(e4) {
            var t4, o3 = this, r3 = null !== (t4 = this.jodit.options.controls) && void 0 !== t4 ? t4 : {}, i2 = function(e5) {
              return (0, f.findControlType)(e5, r3);
            }, a2 = e4.list, s2 = this.openPopup(), u2 = (0, l.makeCollection)(this.j);
            s2.parentElement = this, u2.parentElement = s2, u2.mode = "vertical";
            var d2 = function(t5, r4) {
              if ((0, c.isString)(r4) && i2(r4)) return n2.__assign({ name: r4.toString() }, i2(r4));
              if ((0, c.isString)(t5) && i2(t5)) return n2.__assign(n2.__assign({ name: t5.toString() }, i2(t5)), "object" == typeof r4 ? r4 : {});
              (function(e5) {
                return (0, c.isPlainObject)(e5) && "title" in e5 && "value" in e5;
              })(t5) && (r4 = t5.value, t5 = t5.title);
              var a3 = e4.childTemplate, s3 = { name: t5.toString(), template: a3 && function(e5, t6, n3) {
                return a3(e5, t6, n3, o3);
              }, exec: e4.childExec ? function(t6, o4, r5) {
                var i3;
                return null === (i3 = e4.childExec) || void 0 === i3 ? void 0 : i3.call(e4, t6, o4, n2.__assign(n2.__assign({}, r5), { parentControl: e4 }));
              } : e4.exec, data: e4.data, command: e4.command, isActive: e4.isChildActive, isDisabled: e4.isChildDisabled, mode: e4.mode, args: n2.__spreadArray(n2.__spreadArray([], n2.__read(e4.args ? e4.args : []), false), [t5, r4], false) };
              return (0, c.isString)(r4) && (s3.text = r4), s3;
            };
            u2.build((0, c.isArray)(a2) ? a2.map(d2) : (0, c.keys)(a2, false).map(function(e5) {
              return d2(e5, a2[e5]);
            }), this.target), s2.setContent(u2.container).open(function() {
              return (0, c.position)(o3.container);
            }, false, this.j.o.allowTabNavigation ? this.container : void 0), this.state.activated = true;
          }, t3.prototype.onOutsideClick = function(e4) {
            this.openedPopup && (e4 && a.Dom.isNode(e4.target) && (a.Dom.isOrContains(this.container, e4.target) || this.openedPopup.isOwnClick(e4)) || this.closePopup());
          }, t3.prototype.openPopup = function() {
            return this.closePopup(), this.openedPopup = new s.Popup(this.j, false), this.j.e.on(this.ow, "mousedown touchstart", this.onOutsideClick).on("escape closeAllPopups", this.onOutsideClick), this.openedPopup;
          }, t3.prototype.closePopup = function() {
            this.openedPopup && (this.j.e.off(this.ow, "mousedown touchstart", this.onOutsideClick).off("escape closeAllPopups", this.onOutsideClick), this.state.activated = false, this.openedPopup.close(), this.openedPopup.destruct(), this.openedPopup = null);
          }, t3.prototype.onClick = function(e4) {
            var t4, o3, n3, r3, i2, a2, s2, l2 = this.control;
            if ((0, c.isFunction)(l2.exec)) {
              var u2 = null !== (n3 = null !== (o3 = null === (t4 = this.toolbar) || void 0 === t4 ? void 0 : t4.getTarget(this)) && void 0 !== o3 ? o3 : this.target) && void 0 !== n3 ? n3 : null, d2 = l2.exec(this.j, u2, { control: l2, originalEvent: e4, button: this });
              if (false !== d2 && true !== d2 && (null === (i2 = null === (r3 = this.j) || void 0 === r3 ? void 0 : r3.e) || void 0 === i2 || i2.fire("synchro"), this.parentElement && this.parentElement.update(), null === (s2 = null === (a2 = this.j) || void 0 === a2 ? void 0 : a2.e) || void 0 === s2 || s2.fire("closeAllPopups afterExec")), false !== d2) return;
            }
            return l2.list ? this.openControlList(l2) : (0, c.isFunction)(l2.popup) ? this.onTriggerClick(e4) : void ((l2.command || l2.name) && ((0, c.call)((0, c.isJoditObject)(this.j) ? this.j.execCommand.bind(this.j) : this.j.od.execCommand.bind(this.j.od), l2.command || l2.name, false, l2.args && l2.args[0]), this.j.e.fire("closeAllPopups")));
          }, t3.prototype.destruct = function() {
            return this.closePopup(), e3.prototype.destruct.call(this);
          }, n2.__decorate([(0, i.watch)("state.tooltip")], t3.prototype, "onChangeTooltip", null), n2.__decorate([(0, i.watch)("state.hasTrigger")], t3.prototype, "onChangeHasTrigger", null), n2.__decorate([(0, i.watch)("trigger:click")], t3.prototype, "onTriggerClick", null), n2.__decorate([i.autobind], t3.prototype, "onOutsideClick", null), n2.__decorate([i.autobind], t3.prototype, "closePopup", null), n2.__decorate([i.component], t3);
        }(r2.UIButton);
        t2.ToolbarButton = h;
      }, 34375: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ToolbarContent = void 0;
        var n2 = o2(20255);
        o2(48904);
        var r2 = o2(96516), i = o2(64968), a = o2(40332), s = o2(43441), l = function(e3) {
          function t3(t4, o3, n3) {
            void 0 === n3 && (n3 = null);
            var r3 = e3.call(this, t4) || this;
            return r3.control = o3, r3.target = n3, r3.container.classList.add("".concat(r3.componentName, "_").concat(r3.clearName(o3.name))), (0, a.attr)(r3.container, "role", "content"), r3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "ToolbarContent";
          }, t3.prototype.update = function() {
            var t4 = this.control.getContent(this.j, this.control, this);
            ((0, a.isString)(t4) || t4.parentNode !== this.container) && (i.Dom.detach(this.container), this.container.appendChild((0, a.isString)(t4) ? this.j.create.fromHTML(t4) : t4)), e3.prototype.update.call(this);
          }, t3.prototype.createContainer = function() {
            return this.j.c.span(this.componentName);
          }, n2.__decorate([s.component], t3);
        }(r2.UIButton);
        t2.ToolbarContent = l;
      }, 3890: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(48197), t2), n2.__exportStar(o2(34375), t2);
      }, 72719: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ToolbarCollection = void 0;
        var n2 = o2(20255);
        o2(85796);
        var r2 = o2(40332), i = o2(2074), a = o2(81438), s = o2(43441), l = function(e3) {
          function t3(t4) {
            var o3 = e3.call(this, t4) || this;
            return o3.__listenEvents = "updatePlugins updateToolbar changeStack mousedown mouseup keydown change afterInit readonly afterResize selectionchange changeSelection focus afterSetMode touchstart focus blur", o3.update = o3.j.async.debounce(o3.__immediateUpdate, function() {
              return o3.j.defaultTimeout;
            }), o3.__tooltip = null, o3.__initEvents(), o3.__tooltip = i.UITooltip.make(t4), o3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "ToolbarCollection";
          }, Object.defineProperty(t3.prototype, "firstButton", { get: function() {
            return n2.__read(this.buttons, 1)[0] || null;
          }, enumerable: false, configurable: true }), t3.prototype.makeButton = function(e4, t4) {
            return void 0 === t4 && (t4 = null), (0, a.makeButton)(this.j, e4, t4);
          }, t3.prototype.shouldBeActive = function(e4) {
          }, t3.prototype.shouldBeDisabled = function(e4) {
          }, t3.prototype.getTarget = function(e4) {
            return e4.target || null;
          }, t3.prototype.__immediateUpdate = function() {
            this.isDestructed || this.j.isLocked || (e3.prototype.update.call(this), this.j.e.fire("afterUpdateToolbar"));
          }, t3.prototype.setDirection = function(e4) {
            this.container.style.direction = e4, this.container.setAttribute("dir", e4);
          }, t3.prototype.__initEvents = function() {
            this.j.e.on(this.__listenEvents, this.update).on("afterSetMode focus", this.__immediateUpdate);
          }, t3.prototype.hide = function() {
            this.container.remove();
          }, t3.prototype.show = function() {
            this.appendTo(this.j.toolbarContainer);
          }, t3.prototype.showInline = function(e4) {
            throw (0, r2.error)("The method is not implemented for this class.");
          }, t3.prototype.build = function(t4, o3) {
            void 0 === o3 && (o3 = null);
            var n3 = this.j.e.fire("beforeToolbarBuild", t4);
            return n3 && (t4 = n3), e3.prototype.build.call(this, t4, o3), this;
          }, t3.prototype.destruct = function() {
            var t4;
            this.isDestructed || (null === (t4 = this.__tooltip) || void 0 === t4 || t4.destruct(), this.j.e.off(this.__listenEvents, this.update).off("afterSetMode focus", this.__immediateUpdate), e3.prototype.destruct.call(this));
          }, n2.__decorate([s.autobind], t3.prototype, "__immediateUpdate", null), n2.__decorate([s.component], t3);
        }(i.UIList);
        t2.ToolbarCollection = l;
      }, 81698: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ToolbarEditorCollection = void 0;
        var n2 = o2(20255), r2 = o2(72719), i = o2(86893), a = o2(64968), s = o2(40332), l = o2(43441), c = function(e3) {
          function t3(t4) {
            var o3 = e3.call(this, t4) || this;
            return o3.checkActiveStatus = function(e4, t5) {
              var n3 = 0, r3 = 0;
              return Object.keys(e4).forEach(function(i2) {
                var a2 = e4[i2];
                (0, s.isFunction)(a2) ? a2(o3.j, (0, s.css)(t5, i2).toString()) && (n3 += 1) : -1 !== a2.indexOf((0, s.css)(t5, i2).toString()) && (n3 += 1), r3 += 1;
              }), r3 === n3;
            }, o3.prependInvisibleInput(o3.container), o3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "ToolbarEditorCollection";
          }, t3.prototype.shouldBeDisabled = function(t4) {
            var o3 = e3.prototype.shouldBeDisabled.call(this, t4);
            if (void 0 !== o3) return o3;
            var n3 = void 0 === t4.control.mode ? i.MODE_WYSIWYG : t4.control.mode;
            return !(n3 === i.MODE_SPLIT || n3 === this.j.getRealMode());
          }, t3.prototype.shouldBeActive = function(t4) {
            var o3 = this, n3 = e3.prototype.shouldBeActive.call(this, t4);
            if (void 0 !== n3) return n3;
            var r3 = this.j.selection ? this.j.s.current() : null;
            if (!r3) return false;
            if (t4.control.tags) {
              var i2 = t4.control.tags;
              if (a.Dom.up(r3, function(e4) {
                if (e4 && -1 !== i2.indexOf(e4.nodeName.toLowerCase())) return true;
              }, this.j.editor)) return true;
            }
            if (t4.control.css) {
              var s2 = t4.control.css;
              if (a.Dom.up(r3, function(e4) {
                if (e4 && !a.Dom.isText(e4)) return o3.checkActiveStatus(s2, e4);
              }, this.j.editor)) return true;
            }
            return false;
          }, t3.prototype.getTarget = function(e4) {
            return e4.target || this.j.s.current() || null;
          }, t3.prototype.prependInvisibleInput = function(e4) {
            var t4 = this.j.create.element("input", { tabIndex: -1, disabled: true, style: "width: 0; height:0; position: absolute; visibility: hidden;" });
            a.Dom.appendChildFirst(e4, t4);
          }, t3.prototype.showInline = function(e4) {
            this.jodit.e.fire("showInlineToolbar", e4);
          }, t3.prototype.hide = function() {
            this.jodit.e.fire("hidePopup"), e3.prototype.hide.call(this), this.jodit.e.fire("toggleToolbar");
          }, t3.prototype.show = function() {
            e3.prototype.show.call(this), this.jodit.e.fire("toggleToolbar");
          }, n2.__decorate([l.component], t3);
        }(r2.ToolbarCollection);
        t2.ToolbarEditorCollection = c;
      }, 81438: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.makeButton = t2.makeCollection = void 0;
        var n2 = o2(40332), r2 = o2(72719), i = o2(81698), a = o2(48197), s = o2(34375);
        t2.makeCollection = function(e3, t3) {
          var o3 = (0, n2.isJoditObject)(e3) ? new i.ToolbarEditorCollection(e3) : new r2.ToolbarCollection(e3);
          return e3.o.textIcons && o3.container.classList.add("jodit_text_icons"), t3 && (o3.parentElement = t3), e3.o.toolbarButtonSize && (o3.buttonSize = e3.o.toolbarButtonSize), o3;
        }, t2.makeButton = function(e3, t3, o3) {
          if (void 0 === o3 && (o3 = null), (0, n2.isFunction)(t3.getContent)) return new s.ToolbarContent(e3, t3, o3);
          var r3 = new a.ToolbarButton(e3, t3, o3);
          return r3.state.tabIndex = e3.o.allowTabNavigation ? 0 : -1, r3;
        };
      }, 36262: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255), r2 = o2(93166), i = o2(49781), a = o2(77892);
        r2.Config.prototype.enableDragAndDropFileToEditor = true, r2.Config.prototype.uploader = { url: "", insertImageAsBase64URI: false, imagesExtensions: ["jpg", "png", "jpeg", "gif"], headers: null, data: null, filesVariableName: function(e3) {
          return "files[".concat(e3, "]");
        }, withCredentials: false, pathVariableName: "path", format: "json", method: "POST", prepareData: function(e3) {
          return e3;
        }, isSuccess: function(e3) {
          return e3.success;
        }, getMessage: function(e3) {
          return void 0 !== e3.data.messages && (0, i.isArray)(e3.data.messages) ? e3.data.messages.join(" ") : "";
        }, processFileName: function(e3, t3, o3) {
          return [e3, t3, o3];
        }, process: function(e3) {
          return e3.data;
        }, error: function(e3) {
          this.j.e.fire("errorMessage", e3.message, "error", 4e3);
        }, getDisplayName: function(e3, t3) {
          return e3 + t3;
        }, defaultHandlerSuccess: function(e3) {
          var t3 = this, o3 = this.j || this;
          (0, a.isJoditObject)(o3) && e3.files && e3.files.length && e3.files.forEach(function(r3, i2) {
            var a2 = n2.__read(e3.isImages && e3.isImages[i2] ? ["img", "src"] : ["a", "href"], 2), s = a2[0], l = a2[1], c = o3.createInside.element(s);
            c.setAttribute(l, e3.baseurl + r3), "a" === s && (c.textContent = o3.o.uploader.getDisplayName.call(t3, e3.baseurl, r3)), "img" === s ? o3.s.insertImage(c, null, o3.o.imageDefaultWidth) : o3.s.insertNode(c);
          });
        }, defaultHandlerError: function(e3) {
          this.j.e.fire("errorMessage", e3.message);
        }, contentType: function(e3) {
          return (void 0 === this.ow.FormData || "string" == typeof e3) && "application/x-www-form-urlencoded; charset=UTF-8";
        } };
      }, 55778: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.buildData = void 0;
        var n2 = o2(40332);
        t2.buildData = function(e3, t3) {
          if ((0, n2.isFunction)(e3.o.buildData)) return e3.o.buildData.call(e3, t3);
          var o3 = e3.ow.FormData;
          if (void 0 !== o3) {
            if (t3 instanceof o3) return t3;
            if ((0, n2.isString)(t3)) return t3;
            var r2 = new o3();
            return Object.keys(t3).forEach(function(e4) {
              r2.append(e4, t3[e4]);
            }), r2;
          }
          return t3;
        };
      }, 98099: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.dataURItoBlob = void 0, t2.dataURItoBlob = function(e3) {
          for (var t3 = atob(e3.split(",")[1]), o2 = e3.split(",")[0].split(":")[1].split(";")[0], n2 = new ArrayBuffer(t3.length), r2 = new Uint8Array(n2), i = 0; t3.length > i; i += 1) r2[i] = t3.charCodeAt(i);
          return new Blob([r2], { type: o2 });
        };
      }, 41566: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.hasItems = t2.hasFiles = void 0;
        var n2 = o2(20255);
        n2.__exportStar(o2(32937), t2), n2.__exportStar(o2(98099), t2), n2.__exportStar(o2(55778), t2), n2.__exportStar(o2(30863), t2), n2.__exportStar(o2(20704), t2), t2.hasFiles = function(e3) {
          return Boolean(e3 && e3.files && e3.files.length > 0);
        }, t2.hasItems = function(e3) {
          return Boolean(e3 && e3.items && e3.items.length > 0);
        };
      }, 32937: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.processOldBrowserDrag = void 0;
        var n2 = o2(86893), r2 = o2(17332), i = o2(40332), a = o2(64968), s = o2(41566);
        t2.processOldBrowserDrag = function(e3, t3, o3, l, c) {
          if (t3 && (!t3.types.length || t3.types[0] !== n2.TEXT_PLAIN)) {
            var u = e3.j.c.div("", { tabindex: -1, style: "left: -9999px; top: 0; width: 0; height: 100%;line-height: 140%; overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;", contenteditable: true });
            (0, r2.getContainer)(e3.j, e3.constructor).appendChild(u);
            var d = (0, i.isJoditObject)(e3.j) ? e3.j.s.save() : null;
            u.focus(), e3.j.async.setTimeout(function() {
              var t4 = u.firstChild;
              if (a.Dom.safeRemove(u), t4 && t4.hasAttribute("src")) {
                var n3 = (0, i.attr)(t4, "src") || "";
                d && (0, i.isJoditObject)(e3.j) && e3.j.s.restore(), (0, s.sendFiles)(e3, [(0, s.dataURItoBlob)(n3)], o3, l).finally(c);
              }
            }, e3.j.defaultTimeout);
          }
        };
      }, 20704: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.sendFiles = void 0;
        var n2 = o2(20255), r2 = o2(40332), i = o2(30863);
        t2.sendFiles = function(e3, t3, o3, a, s) {
          if (!t3) return Promise.reject((0, r2.error)("Need files"));
          var l = e3.o, c = (0, r2.toArray)(t3);
          if (!c.length) return Promise.reject((0, r2.error)("Need files"));
          var u = [];
          if (l.insertImageAsBase64URI) {
            var d, p = void 0, f = function() {
              if ((d = c[p]) && d.type) {
                var t4 = d.type.match(/\/([a-z0-9]+)/i), n3 = t4[1] ? t4[1].toLowerCase() : "";
                if (l.imagesExtensions.includes(n3)) {
                  var i2 = new FileReader();
                  u.push(e3.j.async.promise(function(t5, n4) {
                    i2.onerror = n4, i2.onloadend = function() {
                      var n5 = { baseurl: "", files: [i2.result], isImages: [true] };
                      ((0, r2.isFunction)(o3) ? o3 : l.defaultHandlerSuccess).call(e3, n5), t5(n5);
                    }, i2.readAsDataURL(d);
                  })), c[p] = null;
                }
              }
            };
            for (p = 0; c.length > p; p += 1) f();
          }
          if ((c = c.filter(function(e4) {
            return e4;
          })).length) {
            var h = new FormData();
            h.append(l.pathVariableName, e3.path), h.append("source", e3.source);
            var m = void 0;
            for (p = 0; c.length > p; p += 1) if (m = c[p]) {
              var v = /\.[\d\w]+$/.test(m.name), g = m.type.match(/\/([a-z0-9]+)/i), y = g && g[1] ? g[1].toLowerCase() : "", _ = c[p].name || Math.random().toString().replace(".", "");
              if (!v && y) {
                var b = y;
                ["jpeg", "jpg"].includes(b) && (b = "jpeg|jpg"), new RegExp(".(" + b + ")$", "i").test(_) || (_ += "." + y);
              }
              var w = n2.__read(l.processFileName.call(e3, l.filesVariableName(p), c[p], _), 3);
              h.append(w[0], w[1], w[2]);
            }
            s && s(h), l.data && (0, r2.isPlainObject)(l.data) && Object.keys(l.data).forEach(function(e4) {
              h.append(e4, l.data[e4]);
            }), l.prepareData.call(e3, h), u.push((0, i.send)(e3, h).then(function(t4) {
              return l.isSuccess.call(e3, t4) ? (((0, r2.isFunction)(o3) ? o3 : l.defaultHandlerSuccess).call(e3, l.process.call(e3, t4)), t4) : (((0, r2.isFunction)(a) ? a : l.defaultHandlerError).call(e3, (0, r2.error)(l.getMessage.call(e3, t4))), t4);
            }).then(function() {
              e3.j.events && e3.j.e.fire("filesWereUploaded");
            }));
          }
          return Promise.all(u);
        };
      }, 30863: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.send = t2.ajaxInstances = void 0;
        var n2 = o2(30056), r2 = o2(40332), i = o2(55778);
        t2.ajaxInstances = /* @__PURE__ */ new WeakMap(), t2.send = function(e3, o3) {
          var a = (0, i.buildData)(e3, o3), s = function(o4) {
            var i2 = new n2.Ajax({ xhr: function() {
              var t3 = new XMLHttpRequest();
              return void 0 !== e3.j.ow.FormData && t3.upload ? (e3.j.progressbar.show().progress(10), t3.upload.addEventListener("progress", function(t4) {
                if (t4.lengthComputable) {
                  var o5 = t4.loaded / t4.total;
                  o5 *= 100, e3.j.progressbar.show().progress(o5), 100 > o5 || e3.j.progressbar.hide();
                }
              }, false)) : e3.j.progressbar.hide(), t3;
            }, method: e3.o.method || "POST", data: o4, url: (0, r2.isFunction)(e3.o.url) ? e3.o.url(o4) : e3.o.url, headers: e3.o.headers, queryBuild: e3.o.queryBuild, contentType: e3.o.contentType.call(e3, o4), withCredentials: e3.o.withCredentials || false }), a2 = t2.ajaxInstances.get(e3);
            return a2 || (a2 = /* @__PURE__ */ new Set(), t2.ajaxInstances.set(e3, a2)), a2.add(i2), e3.j.e.one("beforeDestruct", i2.destruct), i2.send().then(function(e4) {
              return e4.json();
            }).catch(function(t3) {
              e3.o.error.call(e3, t3);
            }).finally(function() {
              i2.destruct(), null == a2 || a2.delete(i2);
            });
          };
          return (0, r2.isPromise)(a) ? a.then(s).catch(function(t3) {
            e3.o.error.call(e3, t3);
          }) : s(a);
        };
      }, 50454: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Uploader = void 0;
        var n2 = o2(20255);
        o2(28654);
        var r2 = o2(93166), i = o2(86893), a = o2(40332), s = o2(56562), l = o2(41566);
        o2(36262);
        var c = function(e3) {
          function t3(t4, o3) {
            var n3 = e3.call(this, t4) || this;
            return n3.path = "", n3.source = "default", n3.options = (0, a.ConfigProto)(o3 || {}, (0, a.ConfigProto)(r2.Config.defaultOptions.uploader, (0, a.isJoditObject)(t4) ? t4.o.uploader : {})), n3;
          }
          return n2.__extends(t3, e3), Object.defineProperty(t3.prototype, "j", { get: function() {
            return this.jodit;
          }, enumerable: false, configurable: true }), t3.prototype.className = function() {
            return "Uploader";
          }, Object.defineProperty(t3.prototype, "o", { get: function() {
            return this.options;
          }, enumerable: false, configurable: true }), t3.prototype.setPath = function(e4) {
            return this.path = e4, this;
          }, t3.prototype.setSource = function(e4) {
            return this.source = e4, this;
          }, t3.prototype.bind = function(e4, t4, o3) {
            var n3 = function() {
              e4.classList.remove("jodit_drag_hover");
            }, r3 = this, a2 = function(e5) {
              var a3, s2, c2, u = e5.clipboardData, d = function(e6) {
                s2 && (e6.append("extension", c2), e6.append("mimetype", s2.type));
              };
              if (!i.IS_IE && (0, l.hasFiles)(u)) return (0, l.sendFiles)(r3, u.files, t4, o3).finally(n3), false;
              if (i.IS_IE) return (0, l.processOldBrowserDrag)(r3, u, t4, o3, n3);
              if ((0, l.hasItems)(u)) {
                var p = u.items;
                for (a3 = 0; p.length > a3; a3 += 1) if ("file" === p[a3].kind && "image/png" === p[a3].type) {
                  if (s2 = p[a3].getAsFile()) {
                    var f = s2.type.match(/\/([a-z0-9]+)/i);
                    c2 = f[1] ? f[1].toLowerCase() : "", (0, l.sendFiles)(r3, [s2], t4, o3, d).finally(n3);
                  }
                  e5.preventDefault();
                  break;
                }
              }
            };
            r3.j && r3.j.editor !== e4 ? r3.j.e.on(e4, "paste", a2) : r3.j.e.on("beforePaste", a2), this.attachEvents(e4, t4, o3, n3);
          }, t3.prototype.attachEvents = function(e4, t4, o3, n3) {
            var r3 = this;
            r3.j.e.on(e4, "dragend dragover dragenter dragleave drop", function(e5) {
              e5.preventDefault();
            }).on(e4, "dragover", function(t5) {
              ((0, l.hasFiles)(t5.dataTransfer) || (0, l.hasItems)(t5.dataTransfer)) && (e4.classList.add("jodit_drag_hover"), t5.preventDefault());
            }).on(e4, "dragend dragleave", function(t5) {
              e4.classList.remove("jodit_drag_hover"), (0, l.hasFiles)(t5.dataTransfer) && t5.preventDefault();
            }).on(e4, "drop", function(i3) {
              e4.classList.remove("jodit_drag_hover"), (0, l.hasFiles)(i3.dataTransfer) && (i3.preventDefault(), i3.stopImmediatePropagation(), (0, l.sendFiles)(r3, i3.dataTransfer.files, t4, o3).finally(n3));
            });
            var i2 = e4.querySelector("input[type=file]");
            i2 && r3.j.e.on(i2, "change", function() {
              (0, l.sendFiles)(r3, i2.files, t4, o3).then(function() {
                i2.value = "", /safari/i.test(navigator.userAgent) || (i2.type = "", i2.type = "file");
              }).finally(n3);
            });
          }, t3.prototype.uploadRemoteImage = function(e4, t4, o3) {
            var n3 = this, r3 = n3.o, i2 = (0, a.isFunction)(o3) ? o3 : r3.defaultHandlerError;
            (0, l.send)(n3, { action: "fileUploadRemote", url: e4 }).then(function(e5) {
              r3.isSuccess.call(n3, e5) ? ((0, a.isFunction)(t4) ? t4 : r3.defaultHandlerSuccess).call(n3, r3.process.call(n3, e5)) : i2.call(n3, (0, a.error)(r3.getMessage.call(n3, e5)));
            }).catch(function(e5) {
              return i2.call(n3, e5);
            });
          }, t3.prototype.destruct = function() {
            this.setStatus(s.STATUSES.beforeDestruct);
            var t4 = l.ajaxInstances.get(this);
            t4 && (t4.forEach(function(e4) {
              try {
                e4.destruct();
              } catch (e5) {
              }
            }), t4.clear()), e3.prototype.destruct.call(this);
          }, t3;
        }(s.ViewComponent);
        t2.Uploader = c;
      }, 75243: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ColorPickerWidget = void 0, o2(60819);
        var n2 = o2(40332), r2 = o2(2074), i = o2(64968);
        r2.Icon.set("palette", o2(95331)), t2.ColorPickerWidget = function(e3, t3, o3) {
          var a = "jodit-color-picker", s = (0, n2.normalizeColor)(o3), l = e3.c.div(a), c = e3.o.textIcons ? "<span>".concat(e3.i18n("palette"), "</span>") : r2.Icon.get("palette"), u = function(e4) {
            var t4 = [];
            return (0, n2.isPlainObject)(e4) ? Object.keys(e4).forEach(function(o4) {
              t4.push('<div class="'.concat(a, "__group ").concat(a, "__group-").concat(o4, '">')), t4.push(u(e4[o4])), t4.push("</div>");
            }) : (0, n2.isArray)(e4) && e4.forEach(function(e5) {
              t4.push("<span class='".concat(a, "__color-item ").concat(s === e5 ? a + "__color-item_active_true" : "", `' title="`).concat(e5, '" style="background-color:').concat(e5, '" data-color="').concat(e5, '"></span>'));
            }), t4.join("");
          };
          l.appendChild(e3.c.fromHTML('<div class="'.concat(a, '__groups">').concat(u(e3.o.colors), "</div>"))), l.appendChild(e3.c.fromHTML('<div data-ref="extra" class="'.concat(a, '__extra"></div>')));
          var d = (0, n2.refs)(l).extra;
          return e3.o.showBrowserColorPicker && (0, n2.hasBrowserColorPicker)() && (d.appendChild(e3.c.fromHTML('<div class="'.concat(a, '__native">').concat(c, '<input type="color" value="#ffffff"/></div>'))), e3.e.on(l, "change", function(e4) {
            e4.stopPropagation();
            var o4 = e4.target;
            if (o4 && o4.tagName && i.Dom.isTag(o4, "input")) {
              var r3 = o4.value || "";
              (0, n2.isFunction)(t3) && t3(r3), e4.preventDefault();
            }
          })), e3.e.on(l, "mousedown touchend", function(o4) {
            o4.stopPropagation(), o4.preventDefault();
            var r3 = o4.target;
            if (r3 && r3.tagName && !i.Dom.isTag(r3, "svg") && !i.Dom.isTag(r3, "path") || !r3.parentNode || (r3 = i.Dom.closest(r3.parentNode, "span", e3.editor)), i.Dom.isTag(r3, "span") && r3.classList.contains(a + "__color-item")) {
              var s2 = (0, n2.attr)(r3, "-color") || "";
              t3 && (0, n2.isFunction)(t3) && t3(s2);
            }
          }), e3.e.fire("afterGenerateColorPicker", l, d, t3, s), l;
        };
      }, 83029: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.FileSelectorWidget = void 0;
        var n2 = o2(40332), r2 = o2(64968), i = o2(2074), a = o2(60929);
        t2.FileSelectorWidget = function(e3, t3, o3, s, l) {
          var c;
          void 0 === l && (l = true);
          var u = [];
          if (t3.upload && e3.o.uploader && (e3.o.uploader.url || e3.o.uploader.insertImageAsBase64URI)) {
            var d = e3.c.fromHTML('<div class="jodit-drag-and-drop__file-box">' + "<strong>".concat(e3.i18n(l ? "Drop image" : "Drop file"), "</strong>") + "<span><br>".concat(e3.i18n("or click"), "</span>") + '<input type="file" accept="'.concat(l ? "image/*" : "*", '" tabindex="-1" dir="auto" multiple=""/>') + "</div>");
            e3.uploader.bind(d, function(o4) {
              var r3 = (0, n2.isFunction)(t3.upload) ? t3.upload : e3.o.uploader.defaultHandlerSuccess;
              (0, n2.isFunction)(r3) && r3.call(e3, o4), e3.e.fire("closeAllPopups");
            }, function(t4) {
              e3.e.fire("errorMessage", t4.message), e3.e.fire("closeAllPopups");
            }), u.push({ icon: "upload", name: "Upload", content: d });
          }
          if (t3.filebrowser && (e3.o.filebrowser.ajax.url || e3.o.filebrowser.items.url) && u.push({ icon: "folder", name: "Browse", content: function() {
            s && s(), t3.filebrowser && e3.filebrowser.open(t3.filebrowser, l);
          } }), t3.url) {
            var p = new i.UIButton(e3, { type: "submit", variant: "primary", text: "Insert" }), f = new i.UIForm(e3, [new i.UIInput(e3, { required: true, label: "URL", name: "url", type: "text", placeholder: "https://" }), new i.UIInput(e3, { name: "text", label: "Alternative text" }), new i.UIBlock(e3, [p])]);
            c = null, o3 && !r2.Dom.isText(o3) && (r2.Dom.isTag(o3, "img") || (0, n2.$$)("img", o3).length) && (c = "IMG" === o3.tagName ? o3 : (0, n2.$$)("img", o3)[0], (0, n2.val)(f.container, "input[name=url]", (0, n2.attr)(c, "src")), (0, n2.val)(f.container, "input[name=text]", (0, n2.attr)(c, "alt")), p.state.text = "Update"), o3 && r2.Dom.isTag(o3, "a") && ((0, n2.val)(f.container, "input[name=url]", (0, n2.attr)(o3, "href")), (0, n2.val)(f.container, "input[name=text]", (0, n2.attr)(o3, "title")), p.state.text = "Update"), f.onSubmit(function(o4) {
              (0, n2.isFunction)(t3.url) && t3.url.call(e3, o4.url, o4.text);
            }), u.push({ icon: "link", name: "URL", content: f.container });
          }
          return (0, a.TabsWidget)(e3, u);
        };
      }, 718: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(75243), t2), n2.__exportStar(o2(60929), t2), n2.__exportStar(o2(83029), t2);
      }, 60929: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.TabsWidget = void 0, o2(96410);
        var n2 = o2(40332), r2 = o2(42096), i = o2(2074), a = o2(56562), s = o2(24263);
        t2.TabsWidget = function(e3, t3, o3) {
          var l = e3.c.div("jodit-tabs"), c = e3.c.div("jodit-tabs__wrapper"), u = e3.c.div("jodit-tabs__buttons"), d = {}, p = [], f = "", h = 0;
          l.appendChild(u), l.appendChild(c);
          var m = function(e4) {
            d[e4] && (p.forEach(function(e5) {
              e5.state.activated = false;
            }), (0, n2.$$)(".jodit-tab", c).forEach(function(e5) {
              e5.classList.remove("jodit-tab_active");
            }), d[e4].button.state.activated = true, d[e4].tab.classList.add("jodit-tab_active"));
          };
          if (t3.forEach(function(n3) {
            var l2 = n3.icon, v2 = n3.name, g = n3.content, y = e3.c.div("jodit-tab"), _ = (0, i.Button)(e3, l2 || v2, v2);
            e3.e.on(_.container, "mousedown", function(e4) {
              return e4.preventDefault();
            }), f || (f = v2), u.appendChild(_.container), p.push(_), _.container.classList.add("jodit-tabs__button", "jodit-tabs__button_columns_" + t3.length), (0, r2.isFunction)(g) ? y.appendChild(e3.c.div("jodit-tab_empty")) : y.appendChild(a.Component.isInstanceOf(g, i.UIElement) ? g.container : g), c.appendChild(y), _.onAction(function() {
              return m(v2), (0, r2.isFunction)(g) && !s.Dom.isElement(g) && g.call(e3), o3 && (o3.__activeTab = v2), false;
            }), d[v2] = { button: _, tab: y }, h += 1;
          }), !h) return l;
          if ((0, n2.$$)("a", u).forEach(function(e4) {
            e4.style.width = (100 / h).toFixed(10) + "%";
          }), m(o3 && o3.__activeTab && d[o3.__activeTab] ? o3.__activeTab : f), o3) {
            var v = o3.__activeTab;
            Object.defineProperty(o3, "__activeTab", { configurable: true, enumerable: false, get: function() {
              return v;
            }, set: function(e4) {
              v = e4, m(e4);
            } });
          }
          return l;
        };
      }, 55692: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(33126);
        var n2 = o2(93166), r2 = o2(40332), i = o2(86893), a = o2(17332), s = o2(77904);
        n2.Config.prototype.controls.about = { exec: function(e3) {
          var t3 = e3.dlg(), o3 = e3.i18n.bind(e3);
          t3.setMod("theme", e3.o.theme).setHeader(o3("About Jodit")).setContent('<div class="jodit-about">\n					<div>'.concat(o3("Jodit Editor"), " v.").concat(e3.getVersion(), "</div>\n					<div>").concat(o3("License: %s", (0, r2.isLicense)(e3.o.license) ? (0, r2.normalizeLicense)(e3.o.license) : "MIT"), '</div>\n					<div>\n						<a href="').concat("https://xdsoft.net/jodit/", '" target="_blank">').concat("https://xdsoft.net/jodit/", '</a>\n					</div>\n					<div>\n						<a href="https://xdsoft.net/jodit/docs/" target="_blank">').concat(o3("Jodit User's Guide"), "</a>\n						").concat(o3("contains detailed help for using"), "\n					</div>\n					<div>").concat(o3("Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved."), "</div>\n				</div>")), (0, r2.css)(t3.dialog, { minHeight: 200, minWidth: 420 }), t3.open(true);
        }, tooltip: "About Jodit", mode: i.MODE_SOURCE + i.MODE_WYSIWYG }, a.pluginSystem.add("about", function(e3) {
          e3.registerButton({ name: "about", group: "info" });
        }), s.Icon.set("about", o2(84279));
      }, 66031: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.addNewLine = void 0;
        var n2 = o2(20255);
        o2(30724);
        var r2 = o2(87837), i = o2(40332), a = o2(43441), s = o2(17332);
        o2(46360);
        var l = "addnewline", c = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.line = t4.j.c.fromHTML('<div role="button" tabindex="-1" title="'.concat(t4.j.i18n("Break"), '" class="jodit-add-new-line"><span>').concat(r2.Icon.get("enter"), "</span></div>")), t4.isMatchedTag = function(e4) {
              return Boolean(e4 && t4.j.o.addNewLineTagsTriggers.includes(e4.nodeName.toLowerCase()));
            }, t4.preview = false, t4.lineInFocus = false, t4.isShown = false, t4.hideForce = function() {
              t4.isShown && (t4.isShown = false, t4.j.async.clearTimeout(t4.timeout), t4.lineInFocus = false, r2.Dom.safeRemove(t4.line), t4.line.style.setProperty("--jd-offset-handle", "0"));
            }, t4.canGetFocus = function(e4) {
              return null != e4 && r2.Dom.isBlock(e4) && !/^(img|table|iframe|hr)$/i.test(e4.nodeName);
            }, t4.onClickLine = function(e4) {
              var o3 = t4.j, n3 = o3.createInside.element(o3.o.enter);
              t4.preview && t4.current && t4.current.parentNode ? t4.current === o3.editor ? r2.Dom.prepend(o3.editor, n3) : t4.current.parentNode.insertBefore(n3, t4.current) : o3.editor.appendChild(n3), o3.s.setCursorIn(n3), (0, i.scrollIntoViewIfNeeded)(n3, o3.editor, o3.ed), o3.synchronizeValues(), t4.hideForce(), e4.preventDefault();
            }, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.show = function() {
            this.isShown || this.j.o.readonly || this.j.isLocked || (this.isShown = true, this.j.async.clearTimeout(this.timeout), this.line.classList.toggle("jodit-add-new-line_after", !this.preview), this.j.container.appendChild(this.line), this.line.style.width = this.j.container.clientWidth + "px");
          }, t3.prototype.onLock = function(e4) {
            e4 && this.isShown && this.hideForce();
          }, t3.prototype.hide = function() {
            this.isShown && !this.lineInFocus && (this.timeout = this.j.async.setTimeout(this.hideForce, { timeout: 500, label: "add-new-line-hide" }));
          }, t3.prototype.afterInit = function(e4) {
            var t4 = this;
            e4.o.addNewLine && (e4.e.on(this.line, "mousemove", function(e5) {
              e5.stopPropagation();
            }).on(this.line, "mousedown touchstart", this.onClickLine).on("change", this.hideForce).on(this.line, "mouseenter", function() {
              t4.j.async.clearTimeout(t4.timeout), t4.lineInFocus = true;
            }).on(this.line, "mouseleave", function() {
              t4.lineInFocus = false;
            }).on("changePlace", this.addEventListeners.bind(this)), this.addEventListeners());
          }, t3.prototype.addEventListeners = function() {
            var e4 = this.j;
            e4.e.off(e4.editor, "." + l).off(e4.container, "." + l).on([e4.ow, e4.ew, e4.editor], "scroll." + l, this.hideForce).on(e4.editor, "click." + l, this.hide).on(e4.container, "mouseleave." + l, this.hide).on(e4.editor, "mousemove." + l, this.onMouseMove);
          }, t3.prototype.onDblClickEditor = function(e4) {
            var t4 = this.j;
            if (!t4.o.readonly && t4.o.addNewLineOnDBLClick && e4.target === t4.editor && t4.s.isCollapsed()) {
              var o3 = (0, i.offset)(t4.editor, t4, t4.ed), n3 = e4.pageY - t4.ew.pageYOffset, r3 = t4.createInside.element(t4.o.enter);
              Math.abs(n3 - o3.top) < Math.abs(n3 - (o3.height + o3.top)) && t4.editor.firstChild ? t4.editor.insertBefore(r3, t4.editor.firstChild) : t4.editor.appendChild(r3), t4.s.setCursorIn(r3), t4.synchronizeValues(), this.hideForce(), e4.preventDefault();
            }
          }, t3.prototype.onMouseMove = function(e4) {
            var t4 = this.j, o3 = t4.ed.elementFromPoint(e4.clientX, e4.clientY);
            if (r2.Dom.isHTMLElement(o3) && !r2.Dom.isOrContains(this.line, o3) && r2.Dom.isOrContains(t4.editor, o3)) if (t4.editor === o3 || this.isMatchedTag(o3) || (o3 = r2.Dom.closest(o3, this.isMatchedTag, t4.editor)), o3) {
              if (this.isMatchedTag(o3)) {
                var n3 = r2.Dom.up(o3, r2.Dom.isBlock, t4.editor);
                n3 && n3 !== t4.editor && (o3 = n3);
              }
              var a2 = (0, i.position)(o3, this.j), s2 = false, l2 = e4.clientY, c2 = e4.clientX;
              if (this.j.iframe) {
                var u = (0, i.position)(this.j.iframe, this.j, true);
                l2 += u.top, c2 += u.left;
              }
              var d = this.j.o.addNewLineDeltaShow;
              Math.abs(l2 - a2.top) > d || (s2 = a2.top, this.preview = true), Math.abs(l2 - (a2.top + a2.height)) > d || (s2 = a2.top + a2.height, this.preview = false), false === s2 || (t4.editor !== o3 || this.preview) && (0, i.call)(this.preview ? r2.Dom.prev : r2.Dom.next, o3, this.canGetFocus, t4.editor) ? (this.current = false, this.hide()) : (this.line.style.top = s2 + "px", this.current = o3, this.show(), this.line.style.setProperty("--jd-offset-handle", c2 - a2.left - 10 + "px"));
            } else this.hide();
          }, t3.prototype.beforeDestruct = function() {
            this.j.async.clearTimeout(this.timeout), this.j.e.off(this.line).off("changePlace", this.addEventListeners), r2.Dom.safeRemove(this.line), this.j.e.off([this.j.ow, this.j.ew, this.j.editor], "." + l).off(this.j.container, "." + l);
          }, n2.__decorate([(0, a.watch)(":lock")], t3.prototype, "onLock", null), n2.__decorate([a.autobind], t3.prototype, "hide", null), n2.__decorate([(0, a.watch)(":dblclick")], t3.prototype, "onDblClickEditor", null), n2.__decorate([(0, a.debounce)(function(e4) {
            return 5 * e4.defaultTimeout;
          })], t3.prototype, "onMouseMove", null), t3;
        }(r2.Plugin);
        t2.addNewLine = c, s.pluginSystem.add("addNewLine", c);
      }, 46360: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(2074);
        n2.Config.prototype.addNewLine = true, n2.Config.prototype.addNewLineOnDBLClick = true, n2.Config.prototype.addNewLineTagsTriggers = ["table", "iframe", "img", "hr", "pre", "jodit"], n2.Config.prototype.addNewLineDeltaShow = 20, r2.Icon.set("enter", o2(11257));
      }, 91241: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.backspace = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(64968), a = o2(86893), s = o2(40332), l = o2(10109), c = o2(17332), u = o2(90089), d = o2(95441);
        o2(48229);
        var p = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.requires = ["hotkeys"], t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this;
            e4.e.on("afterCommand.delete", function(e5) {
              "delete" === e5 && t4.afterDeleteCommand();
            }), e4.registerCommand("deleteButton", { exec: function() {
              return t4.onDelete(false);
            }, hotkeys: e4.o.delete.hotkeys.delete }, { stopPropagation: false }).registerCommand("backspaceButton", { exec: function() {
              return t4.onDelete(true);
            }, hotkeys: e4.o.delete.hotkeys.backspace }, { stopPropagation: false }).registerCommand("deleteWordButton", { exec: function() {
              return t4.onDelete(false, "word");
            }, hotkeys: e4.o.delete.hotkeys.deleteWord }).registerCommand("backspaceWordButton", { exec: function() {
              return t4.onDelete(true, "word");
            }, hotkeys: e4.o.delete.hotkeys.backspaceWord }).registerCommand("deleteSentenceButton", { exec: function() {
              return t4.onDelete(false, "sentence");
            }, hotkeys: e4.o.delete.hotkeys.deleteSentence }).registerCommand("backspaceSentenceButton", { exec: function() {
              return t4.onDelete(true, "sentence");
            }, hotkeys: e4.o.delete.hotkeys.backspaceSentence });
          }, t3.prototype.beforeDestruct = function(e4) {
            e4.e.off("afterCommand.delete");
          }, t3.prototype.afterDeleteCommand = function() {
            var e4 = this.j, t4 = e4.s.current();
            if (t4 && i.Dom.isTag(t4.firstChild, "br") && e4.s.removeNode(t4.firstChild), !((0, s.trim)(e4.editor.textContent || "") || e4.editor.querySelector("img,table,jodit,iframe,hr") || t4 && i.Dom.closest(t4, "table", e4.editor))) {
              e4.editor.innerHTML = "";
              var o3 = e4.s.setCursorIn(e4.editor);
              e4.s.removeNode(o3);
            }
          }, t3.prototype.onDelete = function(e4, t4) {
            void 0 === t4 && (t4 = "char");
            var o3 = this.j, n3 = o3.selection;
            if (n3.isFocused() || n3.focus(), (0, d.checkNotCollapsed)(o3)) return false;
            var r3 = n3.range, c2 = o3.createInside.text(a.INVISIBLE_SPACE);
            try {
              if (i.Dom.safeInsertNode(r3, c2), !i.Dom.isOrContains(o3.editor, c2)) return;
              if (o3.e.fire("backSpaceBeforeCases", e4, c2)) return false;
              if ((0, l.moveNodeInsideStart)(o3, c2, e4), u.cases.some(function(n4) {
                if ((0, s.isFunction)(n4) && n4(o3, c2, e4, t4)) return true;
              })) return false;
            } catch (e5) {
              throw e5;
            } finally {
              o3.e.fire("backSpaceAfterDelete", e4, c2), this.safeRemoveEmptyNode(c2);
            }
            return false;
          }, t3.prototype.safeRemoveEmptyNode = function(e4) {
            var t4, o3, n3 = this.j.s.range;
            n3.startContainer === e4 && (e4.previousSibling ? i.Dom.isText(e4.previousSibling) ? n3.setStart(e4.previousSibling, null !== (o3 = null === (t4 = e4.previousSibling.nodeValue) || void 0 === t4 ? void 0 : t4.length) && void 0 !== o3 ? o3 : 0) : n3.setStartAfter(e4.previousSibling) : e4.nextSibling && (i.Dom.isText(e4.nextSibling) ? n3.setStart(e4.nextSibling, 0) : n3.setStartBefore(e4.nextSibling)), n3.collapse(true), this.j.s.selectRange(n3)), i.Dom.safeRemove(e4);
          }, t3;
        }(r2.Plugin);
        t2.backspace = p, c.pluginSystem.add("backspace", p);
      }, 31078: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkJoinNeighbors = void 0;
        var n2 = o2(24263), r2 = o2(30861);
        function i(e3, t3, o3, i2) {
          if (t3 && n2.Dom.isElement(o3)) {
            n2.Dom.moveContent(t3, o3, !i2, (0, r2.getMoveFilter)(e3));
            for (var a = t3; a && a !== e3.editor && n2.Dom.isEmpty(a); ) {
              var s = a.parentElement;
              n2.Dom.safeRemove(a), a = s;
            }
            return true;
          }
          return false;
        }
        t2.checkJoinNeighbors = function(e3, t3, o3) {
          for (var r3 = t3, a = r3; r3 && !n2.Dom.findNotEmptySibling(r3, o3) && r3.parentElement !== e3.editor; ) a = r3 = r3.parentElement;
          if (n2.Dom.isElement(a) && n2.Dom.isContentEditable(a, e3.editor)) {
            var s = n2.Dom.findNotEmptySibling(a, o3);
            if (s && (function(e4, t4, o4, r4) {
              var a2 = n2.Dom.isTag(o4, ["ol", "ul"]), s2 = n2.Dom.isTag(t4, ["ol", "ul"]), l = function(e5, t5) {
                return t5 ? e5.firstElementChild : e5.lastElementChild;
              };
              return s2 ? (o4 = e4.createInside.element(e4.o.enterBlock), n2.Dom.before(t4, o4), i(e4, l(t4, r4), o4, r4)) : !(!o4 || !a2 || s2) && i(e4, t4, l(o4, !r4), r4);
            }(e3, a, s, o3) || i(e3, a, s, o3))) return e3.s.setCursorBefore(t3), true;
          }
          return false;
        };
      }, 92156: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkJoinTwoLists = void 0;
        var n2 = o2(24263), r2 = o2(67309), i = o2(30861);
        t2.checkJoinTwoLists = function(e3, t3, o3) {
          var a = n2.Dom.findSibling(t3, o3), s = n2.Dom.findSibling(t3, !o3);
          if (!n2.Dom.closest(t3, n2.Dom.isElement, e3.editor) && n2.Dom.isTag(a, ["ul", "ol"]) && n2.Dom.isTag(s, ["ul", "ol"]) && n2.Dom.isTag(a.lastElementChild, "li") && n2.Dom.isTag(s.firstElementChild, "li")) {
            var l = e3.s, c = l.setCursorBefore, u = l.setCursorAfter, d = a.lastElementChild;
            return (0, r2.call)(o3 ? n2.Dom.prepend : n2.Dom.append, s.firstElementChild, t3), n2.Dom.moveContent(s, a, !o3, (0, i.getMoveFilter)(e3)), n2.Dom.safeRemove(s), (0, r2.call)(o3 ? n2.Dom.append : n2.Dom.prepend, d, t3), (0, r2.call)(o3 ? c : u, t3), true;
          }
          return false;
        };
      }, 95441: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkNotCollapsed = void 0, t2.checkNotCollapsed = function(e3) {
          return !e3.s.isCollapsed() && (e3.execCommand("Delete"), true);
        };
      }, 13116: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkRemoveChar = void 0;
        var n2 = o2(64968), r2 = o2(40332), i = o2(86893), a = o2(30861);
        t2.checkRemoveChar = function e3(t3, o3, s, l) {
          var c, u, d, p, f = s ? -1 : 1, h = n2.Dom.sibling(o3, !s), m = n2.Dom.sibling(o3, s), v = null, g = false, y = function(e4) {
            var o4 = n2.Dom.sibling(e4, s);
            return !o4 && e4.parentNode && e4.parentNode !== t3.editor && (o4 = (0, a.findMostNestedNeighbor)(e4, !s, t3.editor, true)), o4;
          };
          for (m || (m = y(o3)); m && (n2.Dom.isText(m) || n2.Dom.isInlineBlock(m)); ) {
            for (; n2.Dom.isInlineBlock(m); ) m = s ? null == m ? void 0 : m.lastChild : null == m ? void 0 : m.firstChild;
            if (!m) break;
            if (null === (c = m.nodeValue) || void 0 === c ? void 0 : c.length) {
              var _ = (0, r2.toArray)(m.nodeValue), b = _.length, w = s ? b - 1 : 0;
              if (_[w] === i.INVISIBLE_SPACE) for (; _[w] === i.INVISIBLE_SPACE; ) w += f;
              if (p = _[w], _[w + f] === i.INVISIBLE_SPACE) {
                for (w += f; _[w] === i.INVISIBLE_SPACE; ) w += f;
                w += s ? 1 : -1;
              }
              if (_ = s && 0 > w ? [] : _.slice(s ? 0 : w + 1, s ? w : b), !h || !n2.Dom.isText(h) || (s ? /^ / : / $/).test(null !== (u = h.nodeValue) && void 0 !== u ? u : "") || !(0, r2.trimInv)(h.nodeValue || "").length) for (var S = s ? _.length - 1 : 0; (s ? S >= 0 : _.length > S) && " " === _[S]; S += s ? -1 : 1) _[S] = i.NBSP_SPACE;
              m.nodeValue = _.join("");
            }
            if ((null === (d = m.nodeValue) || void 0 === d ? void 0 : d.length) || (v = m), !(0, r2.isVoid)(p) && p !== i.INVISIBLE_SPACE) {
              g = true, (0, r2.call)(s ? n2.Dom.after : n2.Dom.before, m, o3), ("sentence" === l || "word" === l && " " !== p && p !== i.NBSP_SPACE) && e3(t3, o3, s, l);
              break;
            }
            var C = y(m);
            v && (n2.Dom.safeRemove(v), v = null), m = C;
          }
          return v && (n2.Dom.safeRemove(v), v = null), g && (function(e4, t4) {
            for (var o4 = e4.parentElement; o4 && n2.Dom.isInlineBlock(o4) && n2.Dom.isTag(o4, t4); ) {
              var r3 = o4.parentElement;
              n2.Dom.isEmpty(o4) && (n2.Dom.after(o4, e4), n2.Dom.safeRemove(o4)), o4 = r3;
            }
          }(o3, ["a"]), function(e4, t4) {
            t4.parentElement !== e4.editor && n2.Dom.isBlock(t4.parentElement) && n2.Dom.each(t4.parentElement, n2.Dom.isEmptyTextNode) && n2.Dom.after(t4, e4.createInside.element("br"));
          }(t3, o3), t3.s.setCursorBefore(o3), n2.Dom.isTag(o3.previousSibling, "br") && !n2.Dom.findNotEmptySibling(o3, false) && n2.Dom.after(o3, t3.createInside.element("br"))), g;
        };
      }, 74217: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkRemoveContentNotEditable = void 0;
        var n2 = o2(64968), r2 = o2(40332), i = o2(10109);
        t2.checkRemoveContentNotEditable = function(e3, t3, o3) {
          var a = n2.Dom.findSibling(t3, o3);
          return !a && t3.parentElement && t3.parentElement !== e3.editor && (a = n2.Dom.findSibling(t3.parentElement, o3)), !(!n2.Dom.isElement(a) || n2.Dom.isContentEditable(a, e3.editor) || ((0, r2.call)(o3 ? n2.Dom.before : n2.Dom.after, a, t3), n2.Dom.safeRemove(a), (0, i.moveNodeInsideStart)(e3, t3, o3), (0, r2.call)(o3 ? e3.s.setCursorBefore : e3.s.setCursorAfter, t3), 0));
        };
      }, 34181: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkRemoveEmptyNeighbor = void 0;
        var n2 = o2(24263);
        t2.checkRemoveEmptyNeighbor = function(e3, t3, o3) {
          var r2 = n2.Dom.closest(t3, n2.Dom.isElement, e3.editor);
          if (!r2) return false;
          var i = n2.Dom.findNotEmptySibling(r2, o3);
          return !(!i || !n2.Dom.isEmpty(i) || (n2.Dom.safeRemove(i), e3.s.setCursorBefore(t3), 0));
        };
      }, 13890: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkRemoveEmptyParent = void 0;
        var n2 = o2(64968), r2 = o2(86893), i = o2(92156);
        t2.checkRemoveEmptyParent = function(e3, t3, o3) {
          var a = false, s = e3.s, l = s.setCursorBefore, c = s.setCursorIn, u = n2.Dom.closest(t3, n2.Dom.isElement, e3.editor);
          if (!u || !n2.Dom.isEmpty(u)) return false;
          var d = n2.Dom.findNotEmptyNeighbor(t3, o3, e3.editor);
          do {
            if (!u || !n2.Dom.isEmpty(u) || n2.Dom.isCell(u)) break;
            n2.Dom.after(u, t3);
            var p = n2.Dom.closest(u, function(e4) {
              return n2.Dom.isElement(e4) && e4 !== u;
            }, e3.editor);
            n2.Dom.safeRemove(u), a = true, u = p;
          } while (u);
          return !(!a || !(0, i.checkJoinTwoLists)(e3, t3, o3)) || (!d || n2.Dom.isText(d) || n2.Dom.isTag(d, r2.INSEPARABLE_TAGS) ? l(t3) : c(d, !o3), a);
        };
      }, 8249: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkRemoveUnbreakableElement = void 0;
        var n2 = o2(24263), r2 = o2(86893), i = o2(13890);
        t2.checkRemoveUnbreakableElement = function(e3, t3, o3) {
          var a = n2.Dom.findSibling(t3, o3);
          return !(!n2.Dom.isElement(a) || !n2.Dom.isTag(a, r2.INSEPARABLE_TAGS) && !n2.Dom.isEmpty(a) || (n2.Dom.safeRemove(a), n2.Dom.isTag(a, "br") && !n2.Dom.findNotEmptySibling(t3, false) && n2.Dom.after(t3, e3.createInside.element("br")), e3.s.setCursorBefore(t3), n2.Dom.isTag(a, "br") && (0, i.checkRemoveEmptyParent)(e3, t3, o3), 0));
        };
      }, 58368: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkTableCell = void 0;
        var n2 = o2(24263);
        t2.checkTableCell = function(e3, t3) {
          return !!n2.Dom.isCell(t3.parentElement);
        };
      }, 6028: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkUnwrapFirstListItem = void 0;
        var n2 = o2(24263), r2 = o2(76502);
        t2.checkUnwrapFirstListItem = function(e3, t3, o3) {
          var i, a = n2.Dom.closest(t3, n2.Dom.isElement, e3.editor), s = e3.s;
          if (n2.Dom.isTag(a, "li") && (null === (i = null == a ? void 0 : a.parentElement) || void 0 === i ? void 0 : i[o3 ? "firstElementChild" : "lastElementChild"]) === a && s.cursorInTheEdge(o3, a)) {
            var l = a.parentElement, c = e3.createInside.element(e3.o.enterBlock);
            return (0, r2.call)(o3 ? n2.Dom.before : n2.Dom.after, l, c), n2.Dom.moveContent(a, c), n2.Dom.safeRemove(a), n2.Dom.isEmpty(l) && n2.Dom.safeRemove(l), (0, r2.call)(o3 ? s.setCursorBefore : s.setCursorAfter, t3), true;
          }
          return false;
        };
      }, 90089: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.cases = void 0;
        var n2 = o2(8249), r2 = o2(74217), i = o2(13116), a = o2(58368), s = o2(13890), l = o2(34181), c = o2(92156), u = o2(31078), d = o2(6028);
        t2.cases = [n2.checkRemoveUnbreakableElement, r2.checkRemoveContentNotEditable, i.checkRemoveChar, a.checkTableCell, s.checkRemoveEmptyParent, l.checkRemoveEmptyNeighbor, c.checkJoinTwoLists, u.checkJoinNeighbors, d.checkUnwrapFirstListItem];
      }, 48229: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.delete = { hotkeys: { delete: ["delete", "cmd+backspace"], deleteWord: ["ctrl+delete", "cmd+alt+backspace", "ctrl+alt+backspace"], deleteSentence: ["ctrl+shift+delete", "cmd+shift+delete"], backspace: ["backspace"], backspaceWord: ["ctrl+backspace"], backspaceSentence: ["ctrl+shift+backspace", "cmd+shift+backspace"] } };
      }, 30861: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getMoveFilter = t2.findMostNestedNeighbor = void 0;
        var n2 = o2(64968);
        t2.findMostNestedNeighbor = function(e3, t3, o3, r2) {
          void 0 === r2 && (r2 = false);
          var i = function(e4) {
            return t3 ? e4.firstChild : e4.lastChild;
          }, a = n2.Dom.findNotEmptyNeighbor(e3, !t3, o3);
          if (r2 && n2.Dom.isElement(a) && !n2.Dom.isInlineBlock(a)) return null;
          if (a) do {
            if (!i(a)) return a;
            a = i(a);
          } while (a);
          return null;
        }, t2.getMoveFilter = function(e3) {
          return function(t3) {
            return true !== e3.e.fire("backSpaceIsMovedIgnore", t3);
          };
        };
      }, 87565: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.bold = void 0;
        var n2 = o2(20255), r2 = o2(93166), i = o2(40332), a = o2(17332), s = o2(77904);
        function l(e3) {
          var t3 = function(t4) {
            var o3, a2 = r2.Config.defaultOptions.controls[t4], s2 = n2.__assign({}, a2.css);
            return Object.keys(s2).forEach(function(e4) {
              o3 || (o3 = {}), o3[e4] = (0, i.isArray)(s2[e4]) ? s2[e4][0] : s2[e4];
            }), e3.s.applyStyle(o3, { element: a2.tags ? a2.tags[0] : void 0 }), e3.synchronizeValues(), false;
          };
          ["bold", "italic", "underline", "strikethrough"].forEach(function(t4) {
            e3.registerButton({ name: t4, group: "font-style" });
          }), ["superscript", "subscript"].forEach(function(t4) {
            e3.registerButton({ name: t4, group: "script" });
          }), e3.registerCommand("bold", { exec: t3, hotkeys: ["ctrl+b", "cmd+b"] }).registerCommand("italic", { exec: t3, hotkeys: ["ctrl+i", "cmd+i"] }).registerCommand("underline", { exec: t3, hotkeys: ["ctrl+u", "cmd+u"] }).registerCommand("strikethrough", { exec: t3 }).registerCommand("subscript", { exec: t3 }).registerCommand("superscript", { exec: t3 });
        }
        o2(58334), o2(90740), t2.bold = l, a.pluginSystem.add("bold", l), s.Icon.set("bold", o2(25141)).set("italic", o2(24557)).set("strikethrough", o2(10859)).set("subscript", o2(9813)).set("superscript", o2(93395)).set("underline", o2(98213));
      }, 90740: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166);
        n2.Config.prototype.controls.subscript = { tags: ["sub"], tooltip: "subscript" }, n2.Config.prototype.controls.superscript = { tags: ["sup"], tooltip: "superscript" }, n2.Config.prototype.controls.bold = { tagRegExp: /^(strong|b)$/i, tags: ["strong", "b"], css: { "font-weight": ["bold", "700"] }, tooltip: "Bold" }, n2.Config.prototype.controls.italic = { tagRegExp: /^(em|i)$/i, tags: ["em", "i"], css: { "font-style": "italic" }, tooltip: "Italic" }, n2.Config.prototype.controls.underline = { tagRegExp: /^(u)$/i, tags: ["u"], css: { "text-decoration-line": "underline" }, tooltip: "Underline" }, n2.Config.prototype.controls.strikethrough = { tagRegExp: /^(s)$/i, tags: ["s"], css: { "text-decoration-line": "line-through" }, tooltip: "Strike through" };
      }, 58334: function() {
      }, 60894: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.classSpan = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(93166), a = o2(64968), s = o2(40332), l = o2(17332), c = o2(2074);
        i.Config.prototype.controls.classSpan = { command: "applyClassName", exec: s.memorizeExec, list: ["enabled", "disabled", "activated", "text-left", "text-center", "text-right", "warning", "error"], isChildActive: function(e3, t3) {
          var o3 = e3.s.current();
          if (o3) {
            var n3 = a.Dom.closest(o3, a.Dom.isElement, e3.editor) || e3.editor;
            return Boolean(t3.args && n3.classList.contains(t3.args[0].toString()));
          }
          return false;
        }, isActive: function(e3, t3) {
          var o3 = e3.s.current();
          if (o3) {
            var n3 = a.Dom.closest(o3, a.Dom.isElement, e3.editor) || e3.editor, r3 = false;
            return t3.list && Object.keys(t3.list).forEach(function(e4) {
              n3.classList.contains(e4) && (r3 = true);
            }), Boolean(n3 && n3 !== e3.editor && void 0 !== t3.list && r3);
          }
          return false;
        }, childTemplate: function(e3, t3, o3) {
          return '<span class="'.concat(t3, '">').concat(e3.i18n(o3), "</span>");
        }, tooltip: "Insert className" };
        var u = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.buttons = [{ name: "classSpan", group: "font" }], t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            e4.registerCommand("applyClassName", function(t4, o3, n3) {
              return e4.s.applyStyle(void 0, { className: n3 }), false;
            });
          }, t3.prototype.beforeDestruct = function() {
          }, t3;
        }(r2.Plugin);
        t2.classSpan = u, l.pluginSystem.add("classSpan", u), c.Icon.set("class-span", o2(20026));
      }, 90302: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.cleanHtml = void 0;
        var n2 = o2(20255), r2 = o2(67128), i = o2(85605), a = o2(43441), s = o2(33841), l = o2(17332), c = o2(24263), u = o2(57713);
        o2(98889);
        var d = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.buttons = [{ name: "eraser", group: "font-style" }], t4.currentSelectionNode = null, t4.walker = new s.LazyWalker(t4.j.async, { timeout: t4.j.o.cleanHTML.timeout }), t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
          }, Object.defineProperty(t3.prototype, "isEditMode", { get: function() {
            return !(this.j.isInDestruct || !this.j.isEditorMode() || this.j.getReadOnly());
          }, enumerable: false, configurable: true }), t3.prototype.onChangeCleanHTML = function() {
            if (this.isEditMode) {
              var e4 = this.j;
              this.walker.setWork(e4.editor), this.currentSelectionNode = e4.s.current();
            }
          }, t3.prototype.startWalker = function() {
            var e4 = this, t4 = this.jodit, o3 = (0, u.getHash)(this.j.o.cleanHTML.allowTags), n3 = (0, u.getHash)(this.j.o.cleanHTML.denyTags);
            this.walker.on("visit", function(r3) {
              return (0, u.visitNodeWalker)(t4, r3, o3, n3, e4.currentSelectionNode);
            }).on("end", function(t5) {
              e4.j.e.fire(t5 ? "internalChange finishedCleanHTMLWorker" : "finishedCleanHTMLWorker");
            });
          }, t3.prototype.beforeCommand = function(e4) {
            if ("removeformat" === e4.toLowerCase()) return this.j.s.isCollapsed() ? (0, u.removeFormatForCollapsedSelection)(this.j) : (0, u.removeFormatForSelection)(this.j), false;
          }, t3.prototype.onBeforeSetNativeEditorValue = function(e4) {
            var t4 = this.j.o.cleanHTML.useIframeSandbox ? this.j.createInside.sandbox() : this.j.createInside.div();
            return t4.innerHTML = e4.value, this.onSafeHTML(t4), e4.value = t4.innerHTML, (0, r2.safeHTML)(t4, { safeJavaScriptLink: true, removeOnError: true }), c.Dom.safeRemove(t4), false;
          }, t3.prototype.onSafeHTML = function(e4) {
            (0, r2.safeHTML)(e4, this.j.o.cleanHTML);
          }, t3.prototype.beforeDestruct = function() {
            this.walker.destruct();
          }, n2.__decorate([(0, a.watch)([":change", ":afterSetMode", ":afterInit", ":mousedown", ":keydown"])], t3.prototype, "onChangeCleanHTML", null), n2.__decorate([(0, a.hook)("ready")], t3.prototype, "startWalker", null), n2.__decorate([(0, a.watch)(":beforeCommand")], t3.prototype, "beforeCommand", null), n2.__decorate([(0, a.watch)(":beforeSetNativeEditorValue")], t3.prototype, "onBeforeSetNativeEditorValue", null), n2.__decorate([(0, a.watch)(":safeHTML")], t3.prototype, "onSafeHTML", null), t3;
        }(i.Plugin);
        t2.cleanHtml = d, l.pluginSystem.add("cleanHtml", d);
      }, 98889: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(77904);
        n2.Config.prototype.cleanHTML = { timeout: 300, removeEmptyElements: true, fillEmptyParagraph: true, replaceNBSP: true, replaceOldTags: { i: "em", b: "strong" }, allowTags: false, denyTags: "script", useIframeSandbox: false, removeOnError: true, safeJavaScriptLink: true, disableCleanFilter: null }, n2.Config.prototype.controls.eraser = { command: "removeFormat", tooltip: "Clear Formatting" }, r2.Icon.set("eraser", o2(66911));
      }, 38655: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getHash = void 0;
        var n2 = o2(33941), r2 = o2(24421);
        t2.getHash = function(e3) {
          var t3 = /([^[]*)\[([^\]]+)]/, o3 = /[\s]*,[\s]*/, i = /^(.*)[\s]*=[\s]*(.*)$/, a = {};
          return (0, r2.isString)(e3) ? (e3.split(o3).map(function(e4) {
            e4 = (0, n2.trim)(e4);
            var r3 = t3.exec(e4), s = {};
            if (r3) {
              var l = r3[2].split(o3);
              r3[1] && (l.forEach(function(e5) {
                e5 = (0, n2.trim)(e5);
                var t4 = i.exec(e5);
                t4 ? s[t4[1]] = t4[2] : s[e5] = true;
              }), a[r3[1].toUpperCase()] = s);
            } else a[e4.toUpperCase()] = true;
          }), a) : !!e3 && (Object.keys(e3).forEach(function(t4) {
            a[t4.toUpperCase()] = e3[t4];
          }), a);
        };
      }, 57713: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(38655), t2), n2.__exportStar(o2(72170), t2), n2.__exportStar(o2(87783), t2), n2.__exportStar(o2(88972), t2);
      }, 72170: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isInlineBlock = t2.removeFormatForCollapsedSelection = void 0;
        var n2 = o2(24263), r2 = o2(86893);
        function i(e3) {
          return n2.Dom.isInlineBlock(e3) && !n2.Dom.isTag(e3, r2.INSEPARABLE_TAGS);
        }
        t2.removeFormatForCollapsedSelection = function(e3, t3) {
          var o3 = e3.s, r3 = t3;
          if (!r3) {
            r3 = e3.createInside.fake();
            var a = o3.range;
            n2.Dom.safeInsertNode(a, r3), a.collapse();
          }
          var s = n2.Dom.furthest(r3, i, e3.editor);
          if (s) if (o3.cursorOnTheLeft(s)) n2.Dom.before(s, r3);
          else if (o3.cursorOnTheRight(s)) n2.Dom.after(s, r3);
          else {
            var l = o3.splitSelection(s);
            l && n2.Dom.after(l, r3);
          }
          t3 || (o3.setCursorBefore(r3), n2.Dom.safeRemove(r3));
        }, t2.isInlineBlock = i;
      }, 87783: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.removeFormatForSelection = void 0;
        var n2 = o2(24263), r2 = o2(76502), i = o2(72170);
        t2.removeFormatForSelection = function(e3) {
          var t3 = e3.s, o3 = e3.editor, a = e3.createInside, s = t3.range, l = s.cloneRange(), c = s.cloneRange(), u = a.fake(), d = a.fake();
          l.collapse(true), c.collapse(false), n2.Dom.safeInsertNode(l, u), n2.Dom.safeInsertNode(c, d), s.setStartBefore(u), s.collapse(true), t3.selectRange(s), (0, i.removeFormatForCollapsedSelection)(e3, u), s.setEndAfter(d), s.collapse(false), t3.selectRange(s), (0, i.removeFormatForCollapsedSelection)(e3, d);
          var p = [];
          n2.Dom.between(u, d, function(e4) {
            (0, i.isInlineBlock)(e4) && !n2.Dom.isTag(e4, ["a"]) && p.push(e4), n2.Dom.isElement(e4) && (0, r2.attr)(e4, "style") && (0, r2.attr)(e4, "style", null);
          }), p.forEach(function(e4) {
            return n2.Dom.unwrap(e4);
          });
          var f = function(e4, t4) {
            if (!n2.Dom.findNotEmptySibling(e4, t4)) {
              var i2 = e4.parentNode;
              if (i2 && i2 !== o3 && (0, r2.attr)(i2, "style")) return (0, r2.attr)(i2, "style", null), f(i2, t4), true;
            }
          };
          f(u, true) && f(d, false), s.setStartAfter(u), s.setEndBefore(d), t3.selectRange(s), n2.Dom.safeRemove(u), n2.Dom.safeRemove(d);
        };
      }, 9948: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.allowAttributes = void 0;
        var n2 = o2(24263);
        t2.allowAttributes = function(e3, t3, o3, r2) {
          if (r2 && n2.Dom.isElement(t3) && true !== r2[t3.nodeName]) {
            var i = t3.attributes;
            if (i && i.length) {
              for (var a = [], s = 0; i.length > s; s += 1) {
                var l = r2[t3.nodeName][i[s].name];
                (!l || true !== l && l !== i[s].value) && a.push(i[s].name);
              }
              a.length && (o3 = true), a.forEach(function(e4) {
                t3.removeAttribute(e4);
              });
            }
          }
          return o3;
        };
      }, 74722: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.fillEmptyParagraph = void 0;
        var n2 = o2(24263), r2 = o2(86893);
        t2.fillEmptyParagraph = function(e3, t3, o3) {
          if (e3.o.cleanHTML.fillEmptyParagraph && n2.Dom.isBlock(t3) && n2.Dom.isEmpty(t3, r2.INSEPARABLE_TAGS)) {
            var i = e3.createInside.element("br");
            return t3.appendChild(i), true;
          }
          return o3;
        };
      }, 2549: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(55901), t2), n2.__exportStar(o2(9948), t2), n2.__exportStar(o2(74722), t2), n2.__exportStar(o2(75096), t2), n2.__exportStar(o2(28194), t2), n2.__exportStar(o2(94254), t2), n2.__exportStar(o2(64701), t2);
      }, 28194: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.removeEmptyTextNode = void 0;
        var n2 = o2(24263);
        t2.removeEmptyTextNode = function(e3, t3, o3, r2, i, a) {
          return n2.Dom.isText(t3) && !t3.nodeValue ? (t3 === a && e3.s.isCollapsed() && e3.s.setCursorAfter(t3), n2.Dom.safeRemove(t3), true) : o3;
        };
      }, 94254: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.removeInvTextNodes = void 0;
        var n2 = o2(86893), r2 = o2(24263);
        t2.removeInvTextNodes = function(e3, t3, o3, i, a, s) {
          return s !== t3 && r2.Dom.isText(t3) && null != t3.nodeValue && (0, n2.INVISIBLE_SPACE_REG_EXP)().test(t3.nodeValue) ? (t3.nodeValue = t3.nodeValue.replace((0, n2.INVISIBLE_SPACE_REG_EXP)(), ""), t3 === s && e3.s.isCollapsed() && e3.s.setCursorAfter(t3), t3.nodeValue || r2.Dom.safeRemove(t3), true) : o3;
        };
      }, 55901: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.replaceOldTags = void 0;
        var n2 = o2(24263);
        t2.replaceOldTags = function(e3, t3, o3) {
          var r2 = function(e4, t4, o4) {
            if (!o4 || !n2.Dom.isHTMLElement(t4)) return t4;
            var r3 = o4[t4.nodeName.toLowerCase()] || o4[t4.nodeName];
            return r3 ? n2.Dom.replace(t4, r3, e4.createInside, true, false) : t4;
          }(e3, t3, e3.o.cleanHTML.replaceOldTags);
          return t3 !== r2 ? (t3 = r2, true) : o3;
        };
      }, 64701: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.sanitizeAttributes = void 0;
        var n2 = o2(24263), r2 = o2(40332);
        t2.sanitizeAttributes = function(e3, t3, o3) {
          return !(!n2.Dom.isElement(t3) || !(0, r2.sanitizeHTMLElement)(t3, { safeJavaScriptLink: e3.options.cleanHTML.safeJavaScriptLink, removeOnError: e3.options.cleanHTML.removeOnError })) || o3;
        };
      }, 75096: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.tryRemoveNode = void 0;
        var n2 = o2(24263), r2 = o2(86893), i = o2(33941);
        t2.tryRemoveNode = function(e3, t3, o3, a, s, l) {
          return function(e4, t4, o4, a2, s2) {
            return !(n2.Dom.isText(t4) || !(a2 && !a2[t4.nodeName] || s2 && s2[t4.nodeName])) || e4.o.cleanHTML.removeEmptyElements && n2.Dom.isElement(t4) && null != t4.nodeName.match(r2.IS_INLINE) && !n2.Dom.isTemporary(t4) && 0 === (0, i.trim)(t4.innerHTML).length && (null == o4 || !n2.Dom.isOrContains(t4, o4));
          }(e3, t3, l, a, s) ? (n2.Dom.safeRemove(t3), true) : o3;
        };
      }, 88972: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.visitNodeWalker = void 0;
        var n2 = o2(20255), r2 = o2(2549), i = Object.keys(r2);
        t2.visitNodeWalker = function(e3, t3, o3, a, s) {
          var l, c, u = false, d = e3.o.cleanHTML.disableCleanFilter;
          try {
            for (var p = n2.__values(i), f = p.next(); !f.done; f = p.next()) {
              var h = f.value;
              if (!(d && d.has(h) || (u = (0, r2[h])(e3, t3, u, o3, a, s), t3.isConnected))) return true;
            }
          } catch (e4) {
            l = { error: e4 };
          } finally {
            try {
              f && !f.done && (c = p.return) && c.call(p);
            } finally {
              if (l) throw l.error;
            }
          }
          return u;
        };
      }, 92138: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.clipboard = void 0;
        var n2 = o2(86893), r2 = o2(40332), i = o2(17332);
        o2(31473);
        var a = function() {
          function e3() {
            this.buttons = [{ name: "cut", group: "clipboard" }, { name: "copy", group: "clipboard" }, { name: "paste", group: "clipboard" }, { name: "selectall", group: "clipboard" }];
          }
          return e3.prototype.init = function(e4) {
            var t3;
            null === (t3 = this.buttons) || void 0 === t3 || t3.forEach(function(t4) {
              return e4.registerButton(t4);
            }), e4.e.off("copy.".concat(n2.CLIPBOARD_ID, " cut.").concat(n2.CLIPBOARD_ID)).on("copy.".concat(n2.CLIPBOARD_ID, " cut.").concat(n2.CLIPBOARD_ID), function(t4) {
              var o3, i2 = e4.s.html, a2 = (0, r2.getDataTransfer)(t4) || (0, r2.getDataTransfer)(e4.ew) || (0, r2.getDataTransfer)(t4.originalEvent);
              a2 && (a2.setData(n2.TEXT_PLAIN, (0, r2.stripTags)(i2)), a2.setData(n2.TEXT_HTML, i2)), e4.buffer.set(n2.CLIPBOARD_ID, i2), e4.e.fire("pasteStack", { html: i2, action: e4.o.defaultActionOnPaste || n2.INSERT_AS_HTML }), "cut" === t4.type && (e4.s.remove(), e4.s.focus()), t4.preventDefault(), null === (o3 = null == e4 ? void 0 : e4.events) || void 0 === o3 || o3.fire("afterCopy", i2);
            });
          }, e3.prototype.destruct = function(e4) {
            var t3, o3;
            null === (t3 = null == e4 ? void 0 : e4.buffer) || void 0 === t3 || t3.set(n2.CLIPBOARD_ID, ""), null === (o3 = null == e4 ? void 0 : e4.events) || void 0 === o3 || o3.off("." + n2.CLIPBOARD_ID);
          }, e3;
        }();
        t2.clipboard = a, i.pluginSystem.add("clipboard", a);
      }, 31473: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(77904);
        n2.Config.prototype.controls.cut = { command: "cut", isDisabled: function(e3) {
          return e3.s.isCollapsed();
        }, tooltip: "Cut selection" }, n2.Config.prototype.controls.copy = { command: "copy", isDisabled: function(e3) {
          return e3.s.isCollapsed();
        }, tooltip: "Copy selection" }, n2.Config.prototype.controls.selectall = { icon: "select-all", command: "selectall", tooltip: "Select all" }, r2.Icon.set("copy", o2(50018)).set("cut", o2(99738)).set("paste", o2(9185)).set("select-all", o2(8619));
      }, 88412: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.color = void 0;
        var n2 = o2(40332), r2 = o2(17332);
        function i(e3) {
          e3.registerButton({ name: "brush", group: "color" });
          var t3 = function(t4, o3, r3) {
            var i2 = (0, n2.normalizeColor)(r3);
            switch (t4) {
              case "background":
                e3.s.applyStyle({ backgroundColor: i2 || "" });
                break;
              case "forecolor":
                e3.s.applyStyle({ color: i2 || "" });
            }
            return e3.synchronizeValues(), false;
          };
          e3.registerCommand("forecolor", t3).registerCommand("background", t3);
        }
        o2(21924), t2.color = i, r2.pluginSystem.add("color", i);
      }, 21924: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(40332), i = o2(718), a = o2(77904), s = o2(24263);
        a.Icon.set("brush", o2(73894)), n2.Config.prototype.controls.brush = { update: function(e3, t3) {
          var o3 = (0, r2.dataBind)(e3, "color"), n3 = function(o4, n4) {
            n4 && n4 !== (0, r2.css)(t3.editor, o4).toString() && (e3.state.icon.fill = n4);
          };
          if (o3) {
            var i2 = (0, r2.dataBind)(e3, "color");
            n3("color" === i2 ? i2 : "background-color", o3);
          } else {
            var a2 = t3.s.current();
            if (a2 && !e3.state.disabled) {
              var l = s.Dom.closest(a2, s.Dom.isElement, t3.editor) || t3.editor;
              n3("color", (0, r2.css)(l, "color").toString()), n3("background-color", (0, r2.css)(l, "background-color").toString());
            }
            e3.state.icon.fill = "", e3.state.activated = false;
          }
        }, popup: function(e3, t3, o3, n3, a2) {
          var l = "", c = "", u = [], d = null;
          return t3 && t3 !== e3.editor && s.Dom.isNode(t3) && (s.Dom.isElement(t3) && e3.s.isCollapsed() && !s.Dom.isTag(t3, ["br", "hr"]) && (d = t3), s.Dom.up(t3, function(e4) {
            if (s.Dom.isHTMLElement(e4)) {
              var t4 = (0, r2.css)(e4, "color", true), o4 = (0, r2.css)(e4, "background-color", true);
              if (t4) return l = t4.toString(), true;
              if (o4) return c = o4.toString(), true;
            }
          }, e3.editor)), u = [{ name: "Background", content: (0, i.ColorPickerWidget)(e3, function(t4) {
            d ? d.style.backgroundColor = t4 : e3.execCommand("background", false, t4), (0, r2.dataBind)(a2, "color", t4), (0, r2.dataBind)(a2, "color-mode", "background"), n3();
          }, c) }, { name: "Text", content: (0, i.ColorPickerWidget)(e3, function(t4) {
            d ? d.style.color = t4 : e3.execCommand("forecolor", false, t4), (0, r2.dataBind)(a2, "color", t4), (0, r2.dataBind)(a2, "color-mode", "color"), n3();
          }, l) }], "background" !== e3.o.colorPickerDefaultTab && (u = u.reverse()), (0, i.TabsWidget)(e3, u, d);
        }, exec: function(e3, t3, o3) {
          var n3 = o3.button, i2 = (0, r2.dataBind)(n3, "color-mode"), a2 = (0, r2.dataBind)(n3, "color");
          if (!i2) return false;
          if (t3 && t3 !== e3.editor && s.Dom.isNode(t3) && s.Dom.isElement(t3)) switch (i2) {
            case "color":
              t3.style.color = a2;
              break;
            case "background":
              t3.style.backgroundColor = a2;
          }
          else e3.execCommand("background" === i2 ? i2 : "forecolor", false, a2);
        }, tooltip: "Fill color or set the text color" };
      }, 79308: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.copyFormat = void 0;
        var n2 = o2(93166), r2 = o2(24263), i = o2(26911), a = o2(17332), s = o2(77904), l = "copy-format", c = ["fontWeight", "fontStyle", "fontSize", "color", "margin", "padding", "borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "textDecorationLine", "fontFamily"], u = function(e3, t3, o3, n3) {
          var r3 = (0, i.css)(o3, t3);
          return r3 === n3[t3] && (r3 = o3.parentNode && o3 !== e3.editor && o3.parentNode !== e3.editor ? u(e3, t3, o3.parentNode, n3) : void 0), r3;
        };
        function d(e3) {
          e3.registerButton({ name: "copyformat", group: "clipboard" }), (0, a.extendLang)(o2(9188));
        }
        n2.Config.prototype.controls.copyformat = { exec: function(e3, t3, o3) {
          var n3 = o3.button;
          if (t3) {
            if (e3.buffer.exists(l)) e3.buffer.delete(l), e3.e.off(e3.editor, "mouseup." + l);
            else {
              var a2 = {}, s2 = r2.Dom.up(t3, function(e4) {
                return e4 && !r2.Dom.isText(e4);
              }, e3.editor) || e3.editor, d2 = e3.createInside.span();
              e3.editor.appendChild(d2), c.forEach(function(e4) {
                a2[e4] = (0, i.css)(d2, e4);
              }), d2 !== e3.editor && r2.Dom.safeRemove(d2);
              var p = function(e4, t4, o4) {
                var n4 = {};
                return t4 && c.forEach(function(r3) {
                  n4[r3] = u(e4, r3, t4, o4), r3.match(/border(Style|Color)/) && !n4.borderWidth && (n4[r3] = void 0);
                }), n4;
              }(e3, s2, a2);
              e3.e.on(e3.editor, "mouseup." + l, function() {
                e3.buffer.delete(l);
                var t4 = e3.s.current();
                t4 && (r2.Dom.isTag(t4, "img") ? (0, i.css)(t4, p) : e3.s.applyStyle(p)), e3.e.off(e3.editor, "mouseup." + l);
              }), e3.buffer.set(l, true);
            }
            n3.update();
          }
        }, isActive: function(e3) {
          return e3.buffer.exists(l);
        }, tooltip: "Paint format" }, t2.copyFormat = d, a.pluginSystem.add("copyformat", d), s.Icon.set("copyformat", o2(83301));
      }, 9188: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.zh_tw = t2.zh_cn = t2.tr = t2.ru = t2.pt_br = t2.pl = t2.nl = t2.mn = t2.ko = t2.ja = t2.it = t2.id = t2.hu = t2.he = t2.fr = t2.fa = t2.es = t2.de = t2.cs_cz = t2.ar = void 0;
        var n2 = o2(80078);
        t2.ar = n2;
        var r2 = o2(16986);
        t2.cs_cz = r2;
        var i = o2(59347);
        t2.de = i;
        var a = o2(63640);
        t2.es = a;
        var s = o2(53434);
        t2.fa = s;
        var l = o2(85638);
        t2.fr = l;
        var c = o2(31743);
        t2.he = c;
        var u = o2(66219);
        t2.hu = u;
        var d = o2(50331);
        t2.id = d;
        var p = o2(25582);
        t2.it = p;
        var f = o2(82066);
        t2.ja = f;
        var h = o2(71925);
        t2.ko = h;
        var m = o2(12689);
        t2.mn = m;
        var v = o2(65274);
        t2.nl = v;
        var g = o2(58548);
        t2.pl = g;
        var y = o2(82958);
        t2.pt_br = y;
        var _ = o2(52315);
        t2.ru = _;
        var b = o2(87727);
        t2.tr = b;
        var w = o2(9396);
        t2.zh_cn = w;
        var S = o2(28765);
        t2.zh_tw = S;
      }, 9412: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.draggableTags = ["img", "jodit-media", "jodit"];
      }, 30598: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.dragAndDropElement = void 0;
        var n2, r2 = o2(20255), i = o2(40332), a = o2(57549), s = o2(64968), l = o2(17332), c = o2(43441);
        o2(9412), function(e3) {
          e3[e3.IDLE = 0] = "IDLE", e3[e3.WAIT_DRAGGING = 1] = "WAIT_DRAGGING", e3[e3.DRAGGING = 2] = "DRAGGING";
        }(n2 || (n2 = {}));
        var u = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.dragList = [], t4.draggable = null, t4.isCopyMode = false, t4.diffStep = 10, t4.startX = 0, t4.startY = 0, t4.state = n2.IDLE, t4;
          }
          return r2.__extends(t3, e3), t3.prototype.afterInit = function() {
            this.dragList = this.j.o.draggableTags ? (0, i.splitArray)(this.j.o.draggableTags).filter(Boolean).map(function(e4) {
              return e4.toLowerCase();
            }) : [], this.dragList.length && this.j.e.on("mousedown dragstart", this.onDragStart);
          }, t3.prototype.onDragStart = function(e4) {
            var t4 = this;
            if ("dragstart" === e4.type && this.draggable) return false;
            if (n2.IDLE >= this.state) {
              var o3 = e4.target;
              if (this.dragList.length && o3) {
                var r3 = function(e5) {
                  return Boolean(e5 && t4.dragList.includes(e5.nodeName.toLowerCase()));
                }, a2 = s.Dom.furthest(o3, r3, this.j.editor) || (r3(o3) ? o3 : null);
                a2 && (s.Dom.isTag(a2.parentElement, "a") && a2.parentElement.firstChild === a2 && a2.parentElement.lastChild === a2 && (a2 = a2.parentElement), this.startX = e4.clientX, this.startY = e4.clientY, this.isCopyMode = (0, i.ctrlKey)(e4), this.draggable = a2.cloneNode(true), (0, i.dataBind)(this.draggable, "target", a2), this.state = n2.WAIT_DRAGGING, this.addDragListeners());
              }
            }
          }, t3.prototype.onDrag = function(e4) {
            var o3, r3;
            if (this.draggable && this.state !== n2.IDLE) {
              var a2 = e4.clientY;
              if (this.state !== n2.WAIT_DRAGGING || Math.sqrt(Math.pow(e4.clientX - this.startX, 2) + Math.pow(a2 - this.startY, 2)) >= this.diffStep) {
                if (this.state === n2.WAIT_DRAGGING && (this.j.lock("drag-and-drop-element"), this.state = n2.DRAGGING), this.j.e.fire("hidePopup hideResizer"), !this.draggable.parentNode) {
                  var s2 = (0, i.dataBind)(this.draggable, "target");
                  (0, i.css)(this.draggable, { zIndex: 1e13, pointerEvents: "none", pointer: "drag", position: "fixed", opacity: 0.7, display: "inline-block", left: e4.clientX, top: e4.clientY, width: null !== (o3 = null == s2 ? void 0 : s2.offsetWidth) && void 0 !== o3 ? o3 : 100, height: null !== (r3 = null == s2 ? void 0 : s2.offsetHeight) && void 0 !== r3 ? r3 : 100 }), (0, l.getContainer)(this.j, t3).appendChild(this.draggable);
                }
                (0, i.css)(this.draggable, { left: e4.clientX, top: e4.clientY }), this.j.s.insertCursorAtPoint(e4.clientX, e4.clientY);
              }
            }
          }, t3.prototype.onDragEnd = function() {
            this.isInDestruct || (this.removeDragListeners(), this.j.unlock(), this.state = n2.IDLE, this.draggable && (s.Dom.safeRemove(this.draggable), this.draggable = null));
          }, t3.prototype.onDrop = function() {
            if (this.draggable && this.state >= n2.DRAGGING) {
              var e4 = (0, i.dataBind)(this.draggable, "target");
              this.onDragEnd(), this.isCopyMode && (e4 = e4.cloneNode(true));
              var t4 = e4.parentElement;
              this.j.s.insertNode(e4, true, false), t4 && s.Dom.isEmpty(t4) && !s.Dom.isTag(t4, ["td", "th"]) && s.Dom.safeRemove(t4), s.Dom.isTag(e4, "img") && this.j.e && this.j.e.fire("afterInsertImage", e4), this.j.e.fire("synchro");
            } else this.onDragEnd();
          }, t3.prototype.addDragListeners = function() {
            this.j.e.on(this.j.editor, "mousemove", this.onDrag).on("mouseup", this.onDrop).on([this.j.ew, this.ow], "mouseup", this.onDragEnd);
          }, t3.prototype.removeDragListeners = function() {
            this.j.e.off(this.j.editor, "mousemove", this.onDrag).off("mouseup", this.onDrop).off([this.j.ew, this.ow], "mouseup", this.onDragEnd);
          }, t3.prototype.beforeDestruct = function() {
            this.onDragEnd(), this.j.e.off("mousedown dragstart", this.onDragStart), this.removeDragListeners();
          }, r2.__decorate([c.autobind], t3.prototype, "onDragStart", null), r2.__decorate([(0, c.throttle)(function(e4) {
            return e4.defaultTimeout / 10;
          })], t3.prototype, "onDrag", null), r2.__decorate([c.autobind], t3.prototype, "onDragEnd", null), r2.__decorate([c.autobind], t3.prototype, "onDrop", null), t3;
        }(a.Plugin);
        t2.dragAndDropElement = u, l.pluginSystem.add("dragAndDropElement", u);
      }, 19268: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.dragAndDrop = void 0;
        var n2 = o2(20255), r2 = o2(86893), i = o2(24263), a = o2(40332), s = o2(57549), l = o2(43441), c = o2(63463), u = o2(17332), d = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.isFragmentFromEditor = false, t4.isCopyMode = false, t4.startDragPoint = { x: 0, y: 0 }, t4.draggable = null, t4.bufferRange = null, t4.getText = function(e4) {
              var t5 = (0, a.getDataTransfer)(e4);
              return t5 ? t5.getData(r2.TEXT_HTML) || t5.getData(r2.TEXT_PLAIN) : null;
            }, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function() {
            this.j.e.on([window, this.j.ed, this.j.editor], "dragstart.DragAndDrop", this.onDragStart);
          }, t3.prototype.onDragStart = function(e4) {
            var t4 = e4.target;
            if (this.onDragEnd(), this.isFragmentFromEditor = i.Dom.isOrContains(this.j.editor, t4, true), this.isCopyMode = !this.isFragmentFromEditor || (0, a.ctrlKey)(e4), this.isFragmentFromEditor) {
              var o3 = this.j.s.sel, n3 = o3 && o3.rangeCount ? o3.getRangeAt(0) : null;
              n3 && (this.bufferRange = n3.cloneRange());
            } else this.bufferRange = null;
            this.startDragPoint.x = e4.clientX, this.startDragPoint.y = e4.clientY, (0, c.isFileBrowserFilesItem)(t4) && (t4 = t4.querySelector("img")), i.Dom.isTag(t4, "img") && (this.draggable = t4.cloneNode(true), (0, a.dataBind)(this.draggable, "target", t4)), this.addDragListeners();
          }, t3.prototype.addDragListeners = function() {
            this.j.e.on("dragover", this.onDrag).on("drop.DragAndDrop", this.onDrop).on(window, "dragend.DragAndDrop drop.DragAndDrop mouseup.DragAndDrop", this.onDragEnd);
          }, t3.prototype.removeDragListeners = function() {
            this.j.e.off("dragover", this.onDrag).off("drop.DragAndDrop", this.onDrop).off(window, "dragend.DragAndDrop drop.DragAndDrop mouseup.DragAndDrop", this.onDragEnd);
          }, t3.prototype.onDrag = function(e4) {
            this.draggable && (this.j.e.fire("hidePopup"), this.j.s.insertCursorAtPoint(e4.clientX, e4.clientY), e4.preventDefault(), e4.stopPropagation());
          }, t3.prototype.onDragEnd = function() {
            this.draggable && (i.Dom.safeRemove(this.draggable), this.draggable = null), this.isCopyMode = false, this.removeDragListeners();
          }, t3.prototype.onDrop = function(e4) {
            if (!e4.dataTransfer || !e4.dataTransfer.files || !e4.dataTransfer.files.length) {
              if (!this.isFragmentFromEditor && !this.draggable) return this.j.e.fire("paste", e4), e4.preventDefault(), e4.stopPropagation(), false;
              var t4 = this.j.s.sel, o3 = this.bufferRange || (t4 && t4.rangeCount ? t4.getRangeAt(0) : null), r3 = null;
              if (!this.draggable && o3) r3 = this.isCopyMode ? o3.cloneContents() : o3.extractContents();
              else if (this.draggable) if (this.isCopyMode) {
                var s2 = n2.__read("1" === (0, a.attr)(this.draggable, "-is-file") ? ["a", "href"] : ["img", "src"], 2), l2 = s2[0], c2 = s2[1];
                (r3 = this.j.createInside.element(l2)).setAttribute(c2, (0, a.attr)(this.draggable, "data-src") || (0, a.attr)(this.draggable, "src") || ""), "a" === l2 && (r3.textContent = (0, a.attr)(r3, c2) || "");
              } else r3 = (0, a.dataBind)(this.draggable, "target");
              else this.getText(e4) && (r3 = this.j.createInside.fromHTML(this.getText(e4)));
              t4 && t4.removeAllRanges(), this.j.s.insertCursorAtPoint(e4.clientX, e4.clientY), r3 && (this.j.s.insertNode(r3, false, false), o3 && r3.firstChild && r3.lastChild && (o3.setStartBefore(r3.firstChild), o3.setEndAfter(r3.lastChild), this.j.s.selectRange(o3), this.j.e.fire("synchro")), i.Dom.isTag(r3, "img") && this.j.events && this.j.e.fire("afterInsertImage", r3)), e4.preventDefault(), e4.stopPropagation();
            }
            this.isFragmentFromEditor = false, this.removeDragListeners();
          }, t3.prototype.beforeDestruct = function() {
            this.onDragEnd(), this.j.e.off(window, ".DragAndDrop").off(".DragAndDrop").off([window, this.j.ed, this.j.editor], "dragstart.DragAndDrop", this.onDragStart);
          }, n2.__decorate([l.autobind], t3.prototype, "onDragStart", null), n2.__decorate([(0, l.throttle)(function(e4) {
            return e4.defaultTimeout / 10;
          })], t3.prototype, "onDrag", null), n2.__decorate([l.autobind], t3.prototype, "onDragEnd", null), n2.__decorate([l.autobind], t3.prototype, "onDrop", null), t3;
        }(s.Plugin);
        t2.dragAndDrop = d, u.pluginSystem.add("dragAndDrop", d);
      }, 95049: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(20255).__exportStar(o2(69516), t2);
      }, 69516: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.removeExtraBr = void 0;
        var n2 = o2(24263);
        t2.removeExtraBr = function(e3, t3) {
          if (e3.o.dtd.removeExtraBr && !n2.Dom.isTag(t3, "br")) {
            var o3 = n2.Dom.furthest(t3, n2.Dom.isBlock, e3.editor);
            if (o3 && !n2.Dom.isTag(o3, ["table", "pre", "blockquote", "code"])) {
              var r2 = n2.Dom.isTag(t3, "br") ? t3 : n2.Dom.findNotEmptySibling(t3, false);
              if (!n2.Dom.isTag(r2, "br")) return;
              e3.s.setCursorBefore(r2), n2.Dom.safeRemove(r2);
            }
          }
        };
      }, 73967: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkBlockNesting = void 0;
        var n2 = o2(24263);
        t2.checkBlockNesting = function(e3, t3) {
          if (n2.Dom.isFragment(t3) && (t3 = t3.firstChild), e3.o.dtd.checkBlockNesting && n2.Dom.isBlock(t3)) {
            var o3 = n2.Dom.furthest(e3.s.current(), n2.Dom.isBlock, e3.editor);
            o3 && !e3.o.dtd.blockLimits[o3.tagName.toLowerCase()] && (e3.s.setCursorAfter(o3), n2.Dom.isEmpty(o3) && n2.Dom.safeRemove(o3));
          }
        };
      }, 73690: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(20255).__exportStar(o2(73967), t2);
      }, 20173: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.dtd = { removeExtraBr: true, checkBlockNesting: true, blockLimits: { article: 1, aside: 1, audio: 1, body: 1, caption: 1, details: 1, dir: 1, div: 1, dl: 1, fieldset: 1, figcaption: 1, figure: 1, footer: 1, form: 1, header: 1, hgroup: 1, main: 1, menu: 1, nav: 1, ol: 1, section: 1, table: 1, td: 1, th: 1, tr: 1, ul: 1, video: 1 } };
      }, 96899: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255), r2 = o2(57549), i = o2(17332), a = o2(46163);
        o2(20173);
        var s = o2(73690), l = o2(95049), c = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
          }, t3.prototype.beforeDestruct = function(e4) {
          }, t3.prototype.__onBeforeInsertNode = function(e4) {
            var t4 = this;
            Object.keys(s).forEach(function(o3) {
              s[o3](t4.j, e4);
            });
          }, t3.prototype.__onAfterInsertNode = function(e4) {
            var t4 = this;
            Object.keys(l).forEach(function(o3) {
              l[o3](t4.j, e4);
            });
          }, n2.__decorate([(0, a.watch)(":beforeInsertNode")], t3.prototype, "__onBeforeInsertNode", null), n2.__decorate([(0, a.watch)(":afterInsertNode")], t3.prototype, "__onAfterInsertNode", null), t3;
        }(r2.Plugin);
        i.pluginSystem.add("dtd", c);
      }, 33122: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.enter = void 0;
        var n2 = o2(20255), r2 = o2(24263), i = o2(85605), a = o2(86893), s = o2(43441), l = o2(67749), c = o2(23217), u = o2(17332);
        o2(26231);
        var d = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this, o3 = e4.o.enter.toLowerCase(), n3 = o3 === a.BR.toLowerCase();
            e4.o.enterBlock || (e4.o.enterBlock = n3 ? a.PARAGRAPH : o3), e4.registerCommand("enter", function(e5, o4, n4) {
              return void 0 === n4 && (n4 = {}), t4.onEnter(n4);
            });
          }, t3.prototype.onEnterKeyDown = function(e4) {
            if (e4.key === a.KEY_ENTER) {
              var t4 = this.j, o3 = t4.e.fire("beforeEnter", e4);
              return void 0 !== o3 ? o3 : (t4.s.isCollapsed() || t4.execCommand("Delete"), t4.s.focus(), this.onEnter(e4), t4.e.fire("afterEnter", e4), t4.synchronizeValues(), false);
            }
          }, t3.prototype.onEnter = function(e4) {
            var t4 = this.jodit, o3 = t4.createInside.fake();
            try {
              r2.Dom.safeInsertNode(t4.s.range, o3), (0, c.moveCursorOutFromSpecialTags)(t4, o3, ["a"]);
              var n3 = (0, c.getBlockWrapper)(o3, t4), i2 = r2.Dom.isTag(n3, "li");
              if ((!i2 || (null == e4 ? void 0 : e4.shiftKey)) && (0, c.checkBR)(o3, t4, null == e4 ? void 0 : e4.shiftKey)) return false;
              if (n3 || (0, c.hasPreviousBlock)(o3, t4) || (n3 = (0, c.wrapText)(o3, t4)), !n3) return (0, c.insertParagraph)(o3, t4, i2 ? "li" : t4.o.enter), false;
              if (!(0, c.checkUnsplittableBox)(o3, t4, n3)) return false;
              if (i2 && this.__isEmptyListLeaf(n3)) return (0, c.processEmptyLILeaf)(o3, t4, n3), false;
              (0, c.splitFragment)(o3, t4, n3);
            } finally {
              o3.isConnected && t4.s.setCursorBefore(o3), r2.Dom.safeRemove(o3);
            }
          }, t3.prototype.__isEmptyListLeaf = function(e4) {
            var t4 = this.j.e.fire("enterIsEmptyListLeaf", e4);
            return (0, l.isBoolean)(t4) ? t4 : r2.Dom.isEmpty(e4);
          }, t3.prototype.beforeDestruct = function(e4) {
            e4.e.off("keydown.enter");
          }, n2.__decorate([(0, s.watch)(":keydown.enter")], t3.prototype, "onEnterKeyDown", null), t3;
        }(i.Plugin);
        t2.enter = d, u.pluginSystem.add("enter", d);
      }, 94149: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkBR = void 0;
        var n2 = o2(24263), r2 = o2(9005), i = o2(86893);
        function a(e3) {
          if (!e3) return false;
          var t3 = n2.Dom.findSibling(e3, true);
          return !(!t3 || !n2.Dom.isTag(t3, "br")) && t3;
        }
        t2.checkBR = function(e3, t3, o3) {
          var s = Boolean(n2.Dom.closest(e3, ["pre", "blockquote"], t3.editor));
          if (t3.o.enter.toLowerCase() === i.BR.toLowerCase() || o3 && !s || !o3 && s) {
            if (s && function(e4) {
              var t4 = a(a(e4));
              return !!t4 && (n2.Dom.safeRemove(a(e4)), n2.Dom.safeRemove(t4), true);
            }(e3)) return false;
            var l = t3.createInside.element("br");
            if (n2.Dom.before(e3, l), !n2.Dom.findNotEmptySibling(l, false)) {
              var c = l.cloneNode();
              n2.Dom.after(l, c), n2.Dom.before(c, e3);
            }
            return (0, r2.scrollIntoViewIfNeeded)(l, t3.editor, t3.ed), true;
          }
          return false;
        };
      }, 58921: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.checkUnsplittableBox = void 0;
        var n2 = o2(24263);
        t2.checkUnsplittableBox = function(e3, t3, o3) {
          return !!n2.Dom.canSplitBlock(o3) || (n2.Dom.before(e3, t3.createInside.element("br")), false);
        };
      }, 70638: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getBlockWrapper = void 0;
        var n2 = o2(86893), r2 = o2(24263);
        t2.getBlockWrapper = function e3(t3, o3, i) {
          void 0 === i && (i = n2.IS_BLOCK);
          var a = t3, s = o3.editor;
          do {
            if (!a || a === s) break;
            if (i.test(a.nodeName)) return r2.Dom.isTag(a, "li") ? a : e3(a.parentNode, o3, /^li$/i) || a;
            a = a.parentNode;
          } while (a && a !== s);
          return null;
        };
      }, 50781: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.hasPreviousBlock = void 0;
        var n2 = o2(24263);
        t2.hasPreviousBlock = function(e3, t3) {
          return Boolean(n2.Dom.prev(e3, function(e4) {
            return n2.Dom.isBlock(e4) || n2.Dom.isImage(e4);
          }, t3.editor));
        };
      }, 23217: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(94149), t2), n2.__exportStar(o2(58921), t2), n2.__exportStar(o2(92291), t2), n2.__exportStar(o2(70638), t2), n2.__exportStar(o2(50781), t2), n2.__exportStar(o2(90443), t2), n2.__exportStar(o2(52521), t2), n2.__exportStar(o2(81512), t2), n2.__exportStar(o2(29575), t2);
      }, 90443: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.insertParagraph = void 0;
        var n2 = o2(24263), r2 = o2(9005);
        t2.insertParagraph = function(e3, t3, o3, i) {
          var a = "br" === o3.toLowerCase(), s = t3.createInside, l = s.element(o3), c = s.element("br");
          return a || l.appendChild(c), i && i.cssText && l.setAttribute("style", i.cssText), n2.Dom.after(e3, l), n2.Dom.before(a ? l : c, e3), (0, r2.scrollIntoViewIfNeeded)(l, t3.editor, t3.ed), l;
        };
      }, 29575: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.moveCursorOutFromSpecialTags = void 0;
        var n2 = o2(24263);
        t2.moveCursorOutFromSpecialTags = function(e3, t3, o3) {
          var r2 = e3.s, i = n2.Dom.closest(t3, o3, e3.editor);
          i && (r2.cursorOnTheRight(i, t3) ? n2.Dom.after(i, t3) : r2.cursorOnTheLeft(i, t3) && n2.Dom.before(i, t3));
        };
      }, 92291: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.processEmptyLILeaf = void 0;
        var n2 = o2(24263), r2 = o2(54188), i = o2(90443);
        t2.processEmptyLILeaf = function(e3, t3, o3) {
          var a = n2.Dom.closest(o3, ["ol", "ul"], t3.editor);
          if (a) {
            var s = a.parentElement, l = n2.Dom.isTag(s, "li"), c = l ? s : a, u = t3.s.createRange();
            u.setStartAfter(o3), u.setEndAfter(a);
            var d = u.extractContents();
            n2.Dom.after(c, e3), n2.Dom.safeRemove(o3), (0, r2.$$)("li", a).length || n2.Dom.safeRemove(a);
            var p = (0, i.insertParagraph)(e3, t3, l ? "li" : t3.o.enter);
            d.querySelector("li") && (l ? p.appendChild(d) : n2.Dom.after(p, d));
          }
        };
      }, 52521: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.splitFragment = void 0;
        var n2 = o2(9005), r2 = o2(24263), i = o2(90443);
        t2.splitFragment = function(e3, t3, o3) {
          var a = t3.s, s = t3.o.enter.toLowerCase(), l = r2.Dom.isTag(o3, "li"), c = o3.tagName.toLowerCase() === s || l, u = a.cursorOnTheRight(o3, e3), d = a.cursorOnTheLeft(o3, e3);
          if (!c && (u || d)) return u ? r2.Dom.after(o3, e3) : r2.Dom.before(o3, e3), (0, i.insertParagraph)(e3, t3, s), void (d && !u && r2.Dom.prepend(o3, e3));
          var p = a.splitSelection(o3, e3);
          (0, n2.scrollIntoViewIfNeeded)(p, t3.editor, t3.ed);
        };
      }, 81512: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.wrapText = void 0;
        var n2 = o2(24263);
        t2.wrapText = function(e3, t3) {
          var o3 = e3;
          n2.Dom.up(o3, function(e4) {
            e4 && e4.hasChildNodes() && e4 !== t3.editor && (o3 = e4);
          }, t3.editor);
          var r2 = n2.Dom.wrapInline(o3, t3.o.enter, t3);
          if (n2.Dom.isEmpty(r2)) {
            var i = t3.createInside.element("br");
            r2.appendChild(i), n2.Dom.before(i, e3);
          }
          return r2;
        };
      }, 26231: function() {
      }, 10135: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.file = void 0;
        var n2 = o2(93166), r2 = o2(24263), i = o2(718), a = o2(17332);
        function s(e3) {
          e3.registerButton({ name: "file", group: "media" });
        }
        n2.Config.prototype.controls.file = { popup: function(e3, t3, o3, n3) {
          var a2 = function(t4, o4) {
            void 0 === o4 && (o4 = ""), e3.s.insertNode(e3.createInside.fromHTML('<a href="'.concat(t4, '" title="').concat(o4, '">').concat(o4 || t4, "</a>")));
          }, s2 = null;
          return t3 && (r2.Dom.isTag(t3, "a") || r2.Dom.closest(t3, "a", e3.editor)) && (s2 = r2.Dom.isTag(t3, "a") ? t3 : r2.Dom.closest(t3, "a", e3.editor)), (0, i.FileSelectorWidget)(e3, { filebrowser: function(e4) {
            e4.files && e4.files.forEach(function(t4) {
              return a2(e4.baseurl + t4);
            }), n3();
          }, upload: true, url: function(e4, t4) {
            s2 ? (s2.setAttribute("href", e4), s2.setAttribute("title", t4)) : a2(e4, t4), n3();
          } }, s2, n3, false);
        }, tags: ["a"], tooltip: "Insert file" }, t2.file = s, a.pluginSystem.add("file", s);
      }, 66994: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.focus = void 0;
        var n2 = o2(93166), r2 = o2(64968), i = o2(17332);
        function a(e3) {
          e3.o.saveSelectionOnBlur && e3.e.on("blur", function() {
            e3.isEditorMode() && e3.s.save(true);
          }).on("focus", function() {
            e3.s.restore();
          });
          var t3 = function() {
            if (e3.s.focus(), "end" === e3.o.cursorAfterAutofocus) {
              var t4 = r2.Dom.last(e3.editor, function(e4) {
                return r2.Dom.isText(e4);
              });
              t4 && e3.s.setCursorIn(t4, false);
            }
          };
          e3.e.on("afterInit", function() {
            e3.o.autofocus && (e3.defaultTimeout ? e3.async.setTimeout(t3, 300) : t3());
          }), e3.e.on("afterInit afterAddPlace", function() {
            e3.e.off(e3.editor, "mousedown.autofocus").on(e3.editor, "mousedown.autofocus", function(t4) {
              e3.isEditorMode() && t4.target && r2.Dom.isBlock(t4.target) && !t4.target.childNodes.length && (e3.editor === t4.target ? e3.s.focus() : e3.s.setCursorIn(t4.target));
            });
          });
        }
        n2.Config.prototype.autofocus = false, n2.Config.prototype.cursorAfterAutofocus = "end", n2.Config.prototype.saveSelectionOnBlur = true, t2.focus = a, i.pluginSystem.add("focus", a);
      }, 8082: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255), r2 = o2(93166), i = o2(24263), a = o2(76502), s = o2(77904);
        r2.Config.prototype.defaultFontSizePoints = "px", s.Icon.set("font", o2(84142)).set("fontsize", o2(57292)), r2.Config.prototype.controls.fontsize = { command: "fontsize", data: { cssRule: "font-size" }, list: ["8", "9", "10", "11", "12", "14", "16", "18", "24", "30", "36", "48", "60", "72", "96"], exec: function(e3, t3, o3) {
          var n3 = o3.control;
          return (0, a.memorizeExec)(e3, t3, { control: n3 }, function(t4) {
            var o4;
            return "fontsize" === (null === (o4 = n3.command) || void 0 === o4 ? void 0 : o4.toLowerCase()) ? "".concat(t4).concat(e3.o.defaultFontSizePoints) : t4;
          });
        }, childTemplate: function(e3, t3, o3) {
          return "".concat(o3).concat(e3.o.defaultFontSizePoints);
        }, tooltip: "Font size", isChildActive: function(e3, t3) {
          var o3, n3, r3 = e3.s.current(), s2 = (null === (o3 = t3.data) || void 0 === o3 ? void 0 : o3.cssRule) || "font-size", l = (null === (n3 = t3.data) || void 0 === n3 ? void 0 : n3.normalize) || function(t4) {
            return /pt$/i.test(t4) && "pt" === e3.o.defaultFontSizePoints ? t4.replace(/pt$/i, "") : t4;
          };
          if (r3) {
            var c = i.Dom.closest(r3, i.Dom.isElement, e3.editor) || e3.editor, u = (0, a.css)(c, s2);
            return Boolean(u && t3.args && l(t3.args[0].toString()) === l(u.toString()));
          }
          return false;
        } }, r2.Config.prototype.controls.font = n2.__assign(n2.__assign({}, r2.Config.prototype.controls.fontsize), { command: "fontname", list: { "": "Default", "helvetica,sans-serif": "Helvetica", "arial,helvetica,sans-serif": "Arial", "georgia,palatino,serif": "Georgia", "impact,charcoal,sans-serif": "Impact", "tahoma,geneva,sans-serif": "Tahoma", "times new roman,times,serif": "Times New Roman", "verdana,geneva,sans-serif": "Verdana" }, childTemplate: function(e3, t3, o3) {
          var n3 = false;
          try {
            n3 = -1 === t3.indexOf("dings") && document.fonts.check("16px ".concat(t3), o3);
          } catch (e4) {
          }
          return '<span data-style="'.concat(t3, '" style="').concat(n3 ? "font-family: ".concat(t3, "!important;") : "", '">').concat(o3, "</span>");
        }, data: { cssRule: "font-family", normalize: function(e3) {
          return e3.toLowerCase().replace(/['"]+/g, "").replace(/[^a-z0-9]+/g, ",");
        } }, tooltip: "Font family" });
      }, 54798: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.font = void 0;
        var n2 = o2(40332), r2 = o2(17332);
        function i(e3) {
          e3.registerButton({ name: "font", group: "font" }).registerButton({ name: "fontsize", group: "font" });
          var t3 = function(t4, o3, r3) {
            switch (t4) {
              case "fontsize":
                e3.s.applyStyle({ fontSize: (0, n2.normalizeSize)(r3) });
                break;
              case "fontname":
                e3.s.applyStyle({ fontFamily: r3 });
            }
            return e3.synchronizeValues(), false;
          };
          e3.registerCommand("fontsize", t3).registerCommand("fontname", t3);
        }
        o2(8082), t2.font = i, r2.pluginSystem.add("font", i);
      }, 12908: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.formatBlock = void 0;
        var n2 = o2(93166), r2 = o2(87837), i = o2(40332), a = o2(17332);
        function s(e3) {
          e3.registerButton({ name: "paragraph", group: "font" }), e3.registerCommand("formatblock", function(t3, o3, n3) {
            return e3.s.applyStyle(void 0, { element: n3 }), e3.synchronizeValues(), false;
          });
        }
        o2(77904).Icon.set("paragraph", o2(18019)), n2.Config.prototype.controls.paragraph = { command: "formatBlock", update: function(e3, t3) {
          var o3 = e3.control, n3 = t3.s.current();
          if (n3 && t3.o.textIcons) {
            var i2 = (r2.Dom.closest(n3, r2.Dom.isBlock, t3.editor) || t3.editor).nodeName.toLowerCase(), a2 = o3.list;
            e3 && o3.data && o3.data.currentValue !== i2 && a2 && a2[i2] && (t3.o.textIcons ? e3.state.text = i2 : e3.state.icon.name = i2, o3.data.currentValue = i2);
          }
          return false;
        }, exec: i.memorizeExec, data: { currentValue: "left" }, list: { p: "Normal", h1: "Heading 1", h2: "Heading 2", h3: "Heading 3", h4: "Heading 4", blockquote: "Quote", pre: "Code" }, isChildActive: function(e3, t3) {
          var o3 = e3.s.current();
          if (o3) {
            var n3 = r2.Dom.closest(o3, r2.Dom.isBlock, e3.editor);
            return Boolean(n3 && n3 !== e3.editor && void 0 !== t3.args && n3.nodeName.toLowerCase() === t3.args[0]);
          }
          return false;
        }, isActive: function(e3, t3) {
          var o3 = e3.s.current();
          if (o3) {
            var n3 = r2.Dom.closest(o3, r2.Dom.isBlock, e3.editor);
            return Boolean(n3 && n3 !== e3.editor && void 0 !== t3.list && !r2.Dom.isTag(n3, "p") && void 0 !== t3.list[n3.nodeName.toLowerCase()]);
          }
          return false;
        }, childTemplate: function(e3, t3, o3) {
          return "<".concat(t3, ' style="margin:0;padding:0"><span>').concat(e3.i18n(o3), "</span></").concat(t3, ">");
        }, tooltip: "Insert format block" }, t2.formatBlock = s, a.pluginSystem.add("formatBlock", s);
      }, 15045: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(14320);
        var n2 = o2(93166), r2 = o2(86893), i = o2(77904);
        n2.Config.prototype.fullsize = false, n2.Config.prototype.globalFullSize = true, i.Icon.set("fullsize", o2(45146)).set("shrink", o2(53576)), n2.Config.prototype.controls.fullsize = { exec: function(e3) {
          e3.toggleFullSize();
        }, update: function(e3, t3) {
          var o3 = t3.isFullSize ? "shrink" : "fullsize";
          e3.state.activated = t3.isFullSize, t3.o.textIcons ? e3.state.text = o3 : e3.state.icon.name = o3;
        }, tooltip: "Open in fullsize", mode: r2.MODE_SOURCE + r2.MODE_WYSIWYG };
      }, 65123: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.fullsize = void 0, o2(14320);
        var n2 = o2(26911), r2 = o2(77892), i = o2(17332);
        o2(15045);
        var a = /* @__PURE__ */ new Set();
        function s(e3) {
          e3.registerButton({ name: "fullsize" });
          var t3 = false, o3 = 0, i2 = 0, s2 = false, l = function() {
            var r3 = e3.container;
            e3.events && (t3 ? (o3 = (0, n2.css)(r3, "height", true), i2 = (0, n2.css)(r3, "width", true), (0, n2.css)(r3, { height: e3.ow.innerHeight, width: e3.ow.innerWidth }), s2 = true) : s2 && (0, n2.css)(r3, { height: o3 || "auto", width: i2 || "auto" }));
          }, c = function(o4) {
            var i3 = e3.container, s3 = e3.events;
            if (i3) {
              if (void 0 === o4 && (o4 = !i3.classList.contains("jodit_fullsize")), e3.setMod("fullsize", o4), e3.o.fullsize = o4, t3 = o4, i3.classList.toggle("jodit_fullsize", o4), e3.toolbar && ((0, r2.isJoditObject)(e3) && e3.toolbarContainer.appendChild(e3.toolbar.container), (0, n2.css)(e3.toolbar.container, "width", "auto")), o4 ? a.add(i3) : a.delete(i3), e3.o.globalFullSize && (1 === a.size && o4 || 0 === a.size && !o4)) {
                for (var c2 = i3.parentNode; c2 && c2.nodeType !== Node.DOCUMENT_NODE && c2.nodeType !== Node.DOCUMENT_FRAGMENT_NODE; ) c2.classList.toggle("jodit_fullsize-box_true", o4), c2 = c2.parentNode;
                l();
              }
              s3.fire("afterResize");
            }
          };
          e3.o.globalFullSize && e3.e.on(e3.ow, "resize", l), e3.e.on("afterInit afterOpen", function() {
            var t4;
            e3.toggleFullSize(null === (t4 = null == e3 ? void 0 : e3.options) || void 0 === t4 ? void 0 : t4.fullsize);
          }).on("toggleFullSize", c).on("beforeDestruct", function() {
            t3 && c(false);
          }).on("beforeDestruct", function() {
            e3.events && e3.e.off(e3.ow, "resize", l);
          });
        }
        t2.fullsize = s, i.pluginSystem.add("fullsize", s);
      }, 16829: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.commandToHotkeys = { removeFormat: ["ctrl+shift+m", "cmd+shift+m"], insertOrderedList: ["ctrl+shift+7", "cmd+shift+7"], insertUnorderedList: ["ctrl+shift+8, cmd+shift+8"], selectall: ["ctrl+a", "cmd+a"] };
      }, 83228: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.hotkeys = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(40332), a = o2(86893), s = o2(17332);
        o2(16829);
        var l = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.onKeyPress = function(e4) {
              var o3 = t4.specialKeys[e4.which], n3 = (e4.key || String.fromCharCode(e4.which)).toLowerCase(), r3 = [o3 || n3];
              return ["alt", "ctrl", "shift", "meta"].forEach(function(t5) {
                e4[t5 + "Key"] && o3 !== t5 && r3.push(t5);
              }), (0, i.normalizeKeyAliases)(r3.join("+"));
            }, t4.specialKeys = { 8: "backspace", 9: "tab", 10: "return", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 59: ";", 61: "=", 91: "meta", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this;
            (0, i.keys)(e4.o.commandToHotkeys, false).forEach(function(t5) {
              var o4 = e4.o.commandToHotkeys[t5];
              o4 && ((0, i.isArray)(o4) || (0, i.isString)(o4)) && e4.registerHotkeyToCommand(o4, t5);
            });
            var o3 = false;
            e4.e.off(".hotkeys").on([e4.ow, e4.ew], "keydown.hotkeys", function(e5) {
              if (e5.key === a.KEY_ESC) return t4.j.e.fire("escape", e5);
            }).on("keydown.hotkeys", function(n3) {
              var r3 = t4.onKeyPress(n3), i2 = { shouldStop: true };
              if (false === t4.j.e.fire(r3 + ".hotkey", n3.type, i2)) {
                if (i2.shouldStop) return o3 = true, e4.e.stopPropagation("keydown"), false;
                n3.preventDefault();
              }
            }, { top: true }).on("keyup.hotkeys", function() {
              if (o3) return o3 = false, e4.e.stopPropagation("keyup"), false;
            }, { top: true });
          }, t3.prototype.beforeDestruct = function(e4) {
            e4.events && e4.e.off(".hotkeys");
          }, t3;
        }(r2.Plugin);
        t2.hotkeys = l, s.pluginSystem.add("hotkeys", l);
      }, 43889: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.hr = void 0;
        var n2 = o2(93166), r2 = o2(64968), i = o2(17332);
        function a(e3) {
          e3.registerButton({ name: "hr", group: "insert" }), e3.registerCommand("insertHorizontalRule", function() {
            var t3 = e3.createInside.element("hr");
            e3.s.insertNode(t3, false, false);
            var o3 = r2.Dom.closest(t3.parentElement, r2.Dom.isBlock, e3.editor);
            o3 && r2.Dom.isEmpty(o3) && o3 !== e3.editor && (r2.Dom.after(o3, t3), r2.Dom.safeRemove(o3));
            var n3 = r2.Dom.next(t3, r2.Dom.isBlock, e3.editor, false);
            return n3 || (n3 = e3.createInside.element(e3.o.enter), r2.Dom.after(t3, n3)), e3.s.setCursorIn(n3), false;
          });
        }
        o2(77904).Icon.set("hr", o2(14655)), n2.Config.prototype.controls.hr = { command: "insertHorizontalRule", tags: ["hr"], tooltip: "Insert Horizontal Line" }, t2.hr = a, i.pluginSystem.add("hr", a);
      }, 2509: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166);
        n2.Config.prototype.iframeBaseUrl = "", n2.Config.prototype.iframeTitle = "Jodit Editor", n2.Config.prototype.iframeDoctype = "<!DOCTYPE html>", n2.Config.prototype.iframeDefaultSrc = "about:blank", n2.Config.prototype.iframeStyle = 'html{margin:0;padding:0;min-height: 100%;}body{box-sizing:border-box;font-size:13px;line-height:1.6;padding:10px;margin:0;background:transparent;color:#000;position:relative;z-index:2;user-select:auto;margin:0px;overflow:auto;outline:none;}table{width:100%;border:none;border-collapse:collapse;empty-cells: show;max-width: 100%;}th,td{padding: 2px 5px;border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}p{margin-top:0;}.jodit_editor .jodit_iframe_wrapper{display: block;clear: both;user-select: none;position: relative;}.jodit_editor .jodit_iframe_wrapper:after {position:absolute;content:"";z-index:1;top:0;left:0;right: 0;bottom: 0;cursor: pointer;display: block;background: rgba(0, 0, 0, 0);} .jodit_disabled{user-select: none;-o-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none}', n2.Config.prototype.iframeCSSLinks = [];
      }, 93300: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.iframe = void 0;
        var n2 = o2(40332), r2 = o2(40332), i = o2(86893), a = o2(17332);
        function s(e3) {
          var t3 = e3.options;
          e3.e.on("afterSetMode", function() {
            e3.isEditorMode() && e3.s.focus();
          }).on("generateDocumentStructure.iframe", function(e4, o3) {
            var r3 = e4 || o3.iframe.contentWindow.document;
            if (r3.open(), r3.write(t3.iframeDoctype + '<html dir="'.concat(t3.direction, '" class="jodit" lang="').concat((0, n2.defaultLanguage)(t3.language), '">') + "<head>" + "<title>".concat(t3.iframeTitle, "</title>") + (t3.iframeBaseUrl ? '<base href="'.concat(t3.iframeBaseUrl, '"/>') : "") + '</head><body class="jodit-wysiwyg"></body></html>'), r3.close(), t3.iframeCSSLinks && t3.iframeCSSLinks.forEach(function(e5) {
              var t4 = r3.createElement("link");
              t4.setAttribute("rel", "stylesheet"), t4.setAttribute("href", e5), r3.head && r3.head.appendChild(t4);
            }), t3.iframeStyle) {
              var i2 = r3.createElement("style");
              i2.innerHTML = t3.iframeStyle, r3.head && r3.head.appendChild(i2);
            }
          }).on("createEditor", function() {
            if (t3.iframe) {
              var o3 = e3.c.element("iframe");
              o3.style.display = "block", o3.src = "about:blank", o3.className = "jodit-wysiwyg_iframe", o3.setAttribute("allowtransparency", "true"), o3.setAttribute("tabindex", t3.tabIndex.toString()), o3.setAttribute("frameborder", "0"), e3.workplace.appendChild(o3), e3.iframe = o3;
              var a2 = e3.e.fire("generateDocumentStructure.iframe", null, e3);
              return (0, n2.callPromise)(a2, function() {
                if (!e3.iframe) return false;
                var o4 = e3.iframe.contentWindow.document;
                e3.editorWindow = e3.iframe.contentWindow;
                var a3 = function() {
                  (0, n2.attr)(o4.body, "contenteditable", e3.getMode() !== i.MODE_SOURCE && !e3.getReadOnly() || null);
                }, s2 = function(e4) {
                  var t4 = /<body.*<\/body>/im, o5 = "{%%BODY%%}", n3 = t4.exec(e4);
                  return n3 && (e4 = e4.replace(t4, o5).replace(/<span([^>]*?)>(.*?)<\/span>/gim, "").replace(/&lt;span([^&]*?)&gt;(.*?)&lt;\/span&gt;/gim, "").replace(o5, n3[0].replace(/(<body[^>]+?)min-height["'\s]*:[\s"']*[0-9]+(px|%)/im, "$1").replace(/(<body[^>]+?)([\s]*["'])?contenteditable["'\s]*=[\s"']*true["']?/im, "$1").replace(/<(style|script|span)[^>]+jodit[^>]+>.*?<\/\1>/g, "")).replace(/(class\s*=\s*)(['"])([^"']*)(jodit-wysiwyg|jodit)([^"']*\2)/g, "$1$2$3$5").replace(/(<[^<]+?)\sclass="[\s]*"/gim, "$1").replace(/(<[^<]+?)\sstyle="[\s;]*"/gim, "$1").replace(/(<[^<]+?)\sdir="[\s]*"/gim, "$1")), e4;
                };
                if (t3.editHTMLDocumentMode) {
                  var l = e3.element.tagName;
                  if ("TEXTAREA" !== l && "INPUT" !== l) throw (0, r2.error)("If enable `editHTMLDocumentMode` - source element should be INPUT or TEXTAREA");
                  e3.e.on("beforeGetNativeEditorValue", function() {
                    return s2(e3.o.iframeDoctype + o4.documentElement.outerHTML);
                  }).on("beforeSetNativeEditorValue", function(t4) {
                    var n3 = t4.value;
                    return !e3.isLocked && (/<(html|body)/i.test(n3) ? s2(o4.documentElement.outerHTML) !== s2(n3) && (o4.open(), o4.write(e3.o.iframeDoctype + s2(n3)), o4.close(), e3.editor = o4.body, e3.e.fire("safeHTML", e3.editor), a3(), e3.e.fire("prepareWYSIWYGEditor"), e3.e.stopPropagation("beforeSetNativeEditorValue")) : o4.body.innerHTML = n3, true);
                  }, { top: true });
                }
                if (e3.editor = o4.body, e3.e.on("afterSetMode afterInit afterAddPlace", a3), "auto" === t3.height) {
                  o4.documentElement && (o4.documentElement.style.overflowY = "hidden");
                  var c = e3.async.throttle(function() {
                    if (e3.editor && e3.iframe && "auto" === t3.height) {
                      var o5 = e3.ew.getComputedStyle(e3.editor), r3 = parseInt(o5.marginTop || "0", 10) + parseInt(o5.marginBottom || "0", 10);
                      (0, n2.css)(e3.iframe, "height", e3.editor.offsetHeight + r3);
                    }
                  }, e3.defaultTimeout / 2);
                  if (e3.e.on("change afterInit afterSetMode resize", c).on([e3.iframe, e3.ew, o4.documentElement], "load", c).on(o4, "readystatechange DOMContentLoaded", c), "function" == typeof ResizeObserver) {
                    var u = new ResizeObserver(c);
                    u.observe(o4.body), e3.e.on("beforeDestruct", function() {
                      u.unobserve(o4.body);
                    });
                  }
                }
                return o4.documentElement && e3.e.on(o4.documentElement, "mousedown touchend", function() {
                  e3.s.isFocused() || (e3.s.focus(), e3.editor === o4.body && e3.s.setCursorIn(o4.body));
                }).on(e3.ew, "mousedown touchstart keydown keyup touchend click mouseup mousemove scroll", function(t4) {
                  var o5;
                  null === (o5 = e3.events) || void 0 === o5 || o5.fire(e3.ow, t4);
                }), false;
              });
            }
          });
        }
        o2(2509), t2.iframe = s, a.pluginSystem.add("iframe", s);
      }, 18226: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.imageProcessor = { replaceDataURIToBlobIdInView: true };
      }, 92575: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.imageProcessor = void 0;
        var n2 = o2(20255), r2 = o2(40332), i = o2(57549), a = o2(43441), s = o2(86893), l = o2(17332);
        o2(18226);
        var c = "__jodit_imageprocessor_binded", u = "__jodit_imageprocessor_bindedblob-id", d = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
          }, t3.prototype.beforeDestruct = function(e4) {
            var t4, o3, r3 = e4.buffer.get(u);
            if (r3) {
              var i2 = Object.keys(r3);
              try {
                for (var a2 = n2.__values(i2), s2 = a2.next(); !s2.done; s2 = a2.next()) URL.revokeObjectURL(s2.value);
              } catch (e5) {
                t4 = { error: e5 };
              } finally {
                try {
                  s2 && !s2.done && (o3 = a2.return) && o3.call(a2);
                } finally {
                  if (t4) throw t4.error;
                }
              }
              e4.buffer.delete(u);
            }
          }, t3.prototype.onAfterGetValueFromEditor = function(e4, t4) {
            if (t4 !== s.SOURCE_CONSUMER) return this.onBeforeSetElementValue(e4);
          }, t3.prototype.onBeforeSetElementValue = function(e4) {
            var t4, o3, r3 = this.jodit;
            if (r3.o.imageProcessor.replaceDataURIToBlobIdInView) {
              var i2 = r3.buffer.get(u);
              if (i2) {
                var a2 = Object.keys(i2);
                try {
                  for (var s2 = n2.__values(a2), l2 = s2.next(); !l2.done; l2 = s2.next()) for (var c2 = l2.value; e4.value.includes(c2); ) e4.value = e4.value.replace(c2, i2[c2]);
                } catch (e5) {
                  t4 = { error: e5 };
                } finally {
                  try {
                    l2 && !l2.done && (o3 = s2.return) && o3.call(s2);
                  } finally {
                    if (t4) throw t4.error;
                  }
                }
              }
            }
          }, t3.prototype.afterChange = function(e4) {
            return n2.__awaiter(this, void 0, Promise, function() {
              var e5;
              return n2.__generator(this, function(t4) {
                return (e5 = this.jodit).editor ? ((0, r2.$$)("img", e5.editor).forEach(function(t5) {
                  (0, r2.dataBind)(t5, c) || ((0, r2.dataBind)(t5, c, true), t5.complete || e5.e.on(t5, "load", function o3() {
                    var n3;
                    !e5.isInDestruct && (null === (n3 = e5.e) || void 0 === n3 || n3.fire("resize")), e5.e.off(t5, "load", o3);
                  }), t5.src && /^data:/.test(t5.src) && function(e6, t6) {
                    if (e6.o.imageProcessor.replaceDataURIToBlobIdInView && "undefined" != typeof ArrayBuffer && "undefined" != typeof URL) {
                      var o3 = t6.src, n3 = function(e7) {
                        for (var t7 = atob(e7.split(",")[1]), o4 = e7.split(",")[0].split(":")[1].split(";")[0], n4 = new ArrayBuffer(t7.length), r4 = new Uint8Array(n4), i2 = 0; t7.length > i2; i2++) r4[i2] = t7.charCodeAt(i2);
                        return new Blob([n4], { type: o4 });
                      }(o3);
                      t6.src = URL.createObjectURL(n3), e6.e.fire("internalUpdate");
                      var r3 = e6.buffer.get(u) || {};
                      r3[t6.src] = o3, e6.buffer.set(u, r3);
                    }
                  }(e5, t5), e5.e.on(t5, "mousedown touchstart", function() {
                    e5.s.select(t5);
                  }));
                }), [2]) : [2];
              });
            });
          }, n2.__decorate([(0, a.watch)(":afterGetValueFromEditor")], t3.prototype, "onAfterGetValueFromEditor", null), n2.__decorate([(0, a.watch)(":beforeSetElementValue")], t3.prototype, "onBeforeSetElementValue", null), n2.__decorate([(0, a.watch)([":change", ":afterInit", ":changePlace"]), (0, a.debounce)()], t3.prototype, "afterChange", null), t3;
        }(i.Plugin);
        t2.imageProcessor = d, l.pluginSystem.add("imageProcessor", d);
      }, 1601: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.image = { dialogWidth: 600, openOnDblClick: true, editSrc: true, useImageEditor: true, editTitle: true, editAlt: true, editLink: true, editSize: true, editBorderRadius: true, editMargins: true, editClass: true, availableClasses: [], editStyle: true, editId: true, editAlign: true, showPreview: true, selectImageAfterClose: true };
      }, 15747: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.imageProperties = void 0;
        var n2 = o2(20255);
        o2(9947);
        var r2 = o2(87837), i = o2(40332), a = o2(718), s = o2(96516), l = o2(43441), c = o2(35503), u = o2(17332), d = o2(49391), p = o2(27506), f = o2(50109);
        o2(1601);
        var h = function(e3) {
          return e3 = (0, i.trim)(e3), /^[0-9]+$/.test(e3) ? e3 + "px" : e3;
        }, m = function(e3) {
          return /^[-+]?[0-9.]+px$/.test(e3.toString()) ? parseFloat(e3.toString()) : e3;
        }, v = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.state = { image: new Image(), get ratio() {
              return this.image.naturalWidth / this.image.naturalHeight || 1;
            }, sizeIsLocked: true, marginIsLocked: true }, t4.activeTabState = { __activeTab: "Image" }, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.onChangeMarginIsLocked = function() {
            var e4 = this;
            if (this.form) {
              var t4 = (0, i.refs)(this.form), o3 = t4.lockMargin;
              [t4.marginRight, t4.marginBottom, t4.marginLeft].forEach(function(t5) {
                (0, i.attr)(t5, "disabled", e4.state.marginIsLocked || null);
              }), o3.innerHTML = r2.Icon.get(this.state.marginIsLocked ? "lock" : "unlock");
            }
          }, t3.prototype.onChangeSizeIsLocked = function() {
            if (this.form) {
              var e4 = (0, i.refs)(this.form), t4 = e4.lockSize, o3 = e4.imageWidth;
              t4.innerHTML = r2.Icon.get(this.state.sizeIsLocked ? "lock" : "unlock"), t4.classList.remove("jodit-properties__lock"), t4.classList.remove("jodit-properties__unlock"), t4.classList.add(this.state.sizeIsLocked ? "jodit-properties__lock" : "jodit-properties__unlock"), this.j.e.fire(o3, "change");
            }
          }, t3.prototype.open = function() {
            return this.makeForm(), this.activeTabState.__activeTab = "Image", this.j.e.fire("hidePopup"), (0, i.markOwner)(this.j, this.dialog.container), this.state.marginIsLocked = true, this.state.sizeIsLocked = true, this.onChangeMarginIsLocked(), this.onChangeSizeIsLocked(), this.updateValues(), this.dialog.open().setModal(true).setPosition(), false;
          }, t3.prototype.makeForm = function() {
            var e4 = this;
            if (!this.dialog) {
              this.dialog = this.j.dlg({ minWidth: Math.min(400, screen.width), minHeight: 590, buttons: ["fullsize", "dialog.close"] });
              var t4 = this.j, o3 = t4.o, n3 = t4.i18n.bind(t4), r3 = { check: (0, s.Button)(t4, "ok", "Apply", "primary"), remove: (0, s.Button)(t4, "bin", "Delete") };
              t4.e.on(this.dialog, "afterClose", function() {
                e4.state.image.parentNode && o3.image.selectImageAfterClose && t4.s.select(e4.state.image);
              }), r3.remove.onAction(function() {
                t4.s.removeNode(e4.state.image), e4.dialog.close();
              });
              var l2 = this.dialog;
              l2.setHeader(n3("Image properties"));
              var c2 = (0, d.form)(t4);
              this.form = c2, l2.setContent(c2);
              var u2 = (0, i.refs)(this.form).tabsBox;
              u2 && u2.appendChild((0, a.TabsWidget)(t4, [{ name: "Image", content: (0, p.mainTab)(t4) }, { name: "Advanced", content: (0, f.positionTab)(t4) }], this.activeTabState)), r3.check.onAction(this.onApply);
              var h2 = (0, i.refs)(this.form), m2 = h2.editImage;
              t4.e.on(h2.changeImage, "click", this.openImagePopup), o3.image.useImageEditor && t4.e.on(m2, "click", this.openImageEditor);
              var v2 = (0, i.refs)(c2), g = v2.lockSize, y = v2.lockMargin, _ = v2.imageWidth, b = v2.imageHeight;
              g && t4.e.on(g, "click", function() {
                e4.state.sizeIsLocked = !e4.state.sizeIsLocked;
              }), t4.e.on(y, "click", function(t5) {
                e4.state.marginIsLocked = !e4.state.marginIsLocked, t5.preventDefault();
              });
              var w = function(t5) {
                if ((0, i.isNumeric)(_.value) && (0, i.isNumeric)(b.value)) {
                  var o4 = parseFloat(_.value), n4 = parseFloat(b.value);
                  t5.target === _ ? b.value = Math.round(o4 / e4.state.ratio).toString() : _.value = Math.round(n4 * e4.state.ratio).toString();
                }
              };
              t4.e.on([_, b], "change keydown mousedown paste", function(o4) {
                e4.state.sizeIsLocked && t4.async.setTimeout(w.bind(e4, o4), { timeout: t4.defaultTimeout, label: "image-properties-changeSize" });
              }), l2.setFooter([r3.remove, r3.check]), l2.setSize(this.j.o.image.dialogWidth);
            }
          }, t3.prototype.updateValues = function() {
            var e4, t4, o3 = this, n3 = this.j.o, a2 = this.state.image, s2 = (0, i.refs)(this.form), l2 = s2.marginTop, c2 = s2.marginRight, u2 = s2.marginBottom, d2 = s2.marginLeft, p2 = s2.imageSrc, f2 = s2.id, h2 = s2.classes, v2 = s2.align, g = s2.style, y = s2.imageTitle, _ = s2.imageAlt, b = s2.borderRadius, w = s2.imageLink, S = s2.imageWidth, C = s2.imageHeight, j = s2.imageLinkOpenInNewTab, E = s2.imageViewSrc, x = s2.lockSize;
            s2.lockMargin.checked = o3.state.marginIsLocked, x.checked = o3.state.sizeIsLocked, p2.value = (0, i.attr)(a2, "src") || "", E && (0, i.attr)(E, "src", (0, i.attr)(a2, "src") || ""), function() {
              y.value = (0, i.attr)(a2, "title") || "", _.value = (0, i.attr)(a2, "alt") || "";
              var e5 = r2.Dom.closest(a2, "a", o3.j.editor);
              e5 ? (w.value = (0, i.attr)(e5, "href") || "", j.checked = "_blank" === (0, i.attr)(e5, "target")) : (w.value = "", j.checked = false);
            }(), e4 = (0, i.attr)(a2, "width") || (0, i.css)(a2, "width", true) || false, t4 = (0, i.attr)(a2, "height") || (0, i.css)(a2, "height", true) || false, S.value = false !== e4 ? m(e4).toString() : a2.offsetWidth.toString(), C.value = false !== t4 ? m(t4).toString() : a2.offsetHeight.toString(), o3.state.sizeIsLocked = function() {
              if (!(0, i.isNumeric)(S.value) || !(0, i.isNumeric)(C.value)) return false;
              var e5 = parseFloat(S.value), t5 = parseFloat(C.value);
              return 1 > Math.abs(e5 - t5 * o3.state.ratio);
            }(), function() {
              if (n3.image.editMargins) {
                var e5 = true, t5 = false;
                [l2, c2, u2, d2].forEach(function(o4) {
                  var n4 = (0, i.attr)(o4, "data-ref") || "", r3 = a2.style.getPropertyValue((0, i.kebabCase)(n4));
                  if (!r3) return t5 = true, void (o4.value = "");
                  /^[0-9]+(px)?$/.test(r3) && (r3 = parseInt(r3, 10)), o4.value = r3.toString() || "", (t5 && o4.value || e5 && "marginTop" !== n4 && o4.value !== l2.value) && (e5 = false);
                }), o3.state.marginIsLocked = e5;
              }
            }(), h2.value = ((0, i.attr)(a2, "class") || "").replace(/jodit_focused_image[\s]*/, ""), f2.value = (0, i.attr)(a2, "id") || "", b.value = (parseInt(a2.style.borderRadius || "0", 10) || "0").toString(), a2.style.cssFloat && -1 !== ["left", "right"].indexOf(a2.style.cssFloat.toLowerCase()) ? v2.value = (0, i.css)(a2, "float") : "block" === (0, i.css)(a2, "display") && "auto" === a2.style.marginLeft && "auto" === a2.style.marginRight && (v2.value = "center"), g.value = (0, i.attr)(a2, "style") || "";
          }, t3.prototype.onApply = function() {
            var e4 = (0, i.refs)(this.form), t4 = e4.imageSrc, o3 = e4.borderRadius, n3 = e4.imageTitle, a2 = e4.imageAlt, s2 = e4.imageLink, l2 = e4.imageWidth, c2 = e4.imageHeight, u2 = e4.marginTop, d2 = e4.marginRight, p2 = e4.marginBottom, f2 = e4.marginLeft, m2 = e4.imageLinkOpenInNewTab, v2 = e4.align, g = e4.classes, y = e4.id, _ = this.j.o, b = this.state.image;
            if (_.image.editStyle && (0, i.attr)(b, "style", e4.style.value || null), !t4.value) return r2.Dom.safeRemove(b), void this.dialog.close();
            (0, i.attr)(b, "src", t4.value), b.style.borderRadius = "0" !== o3.value && /^[0-9]+$/.test(o3.value) ? o3.value + "px" : "", (0, i.attr)(b, "title", n3.value || null), (0, i.attr)(b, "alt", a2.value || null);
            var w = r2.Dom.closest(b, "a", this.j.editor);
            if (s2.value ? (w || (w = r2.Dom.wrap(b, "a", this.j.createInside)), (0, i.attr)(w, "href", s2.value), (0, i.attr)(w, "target", m2.checked ? "_blank" : null)) : w && w.parentNode && w.parentNode.replaceChild(b, w), l2.value !== b.offsetWidth.toString() || c2.value !== b.offsetHeight.toString()) {
              var S = (0, i.trim)(l2.value) ? h(l2.value) : null, C = (0, i.trim)(c2.value) ? h(c2.value) : null;
              (0, i.css)(b, { width: S, height: C }), (0, i.attr)(b, "width", (0, i.attr)(b, "width") ? S : null), (0, i.attr)(b, "height", (0, i.attr)(b, "height") ? C : null);
            }
            var j = [u2, d2, p2, f2];
            _.image.editMargins && (this.state.marginIsLocked ? (0, i.css)(b, "margin", h(u2.value)) : j.forEach(function(e5) {
              var t5 = (0, i.attr)(e5, "data-ref") || "";
              (0, i.css)(b, t5, h(e5.value));
            })), _.image.editClass && (0, i.attr)(b, "class", g.value || null), _.image.editId && (0, i.attr)(b, "id", y.value || null), _.image.editAlign && (0, i.hAlignElement)(b, v2.value), this.j.synchronizeValues(), this.dialog.close();
          }, t3.prototype.openImageEditor = function() {
            var e4 = this, t4 = (0, i.attr)(this.state.image, "src") || "", o3 = this.j.c.element("a"), n3 = function() {
              o3.host === location.host || e4.j.confirm("You can only edit your own images. Download this image on the host?", function(t5) {
                t5 && e4.j.uploader && e4.j.uploader.uploadRemoteImage(o3.href.toString(), function(t6) {
                  e4.j.alert("The image has been successfully uploaded to the host!", function() {
                    (0, i.isString)(t6.newfilename) && ((0, i.attr)(e4.state.image, "src", t6.baseurl + t6.newfilename), e4.updateValues());
                  });
                }, function(t6) {
                  e4.j.alert("There was an error loading %s", t6.message);
                });
              });
            };
            o3.href = t4, this.j.filebrowser.dataProvider.getPathByUrl(o3.href.toString()).then(function(n4) {
              c.openImageEditor.call(e4.j.filebrowser, o3.href, n4.name, n4.path, n4.source, function() {
                var o4 = (/* @__PURE__ */ new Date()).getTime();
                (0, i.attr)(e4.state.image, "src", t4 + (-1 !== t4.indexOf("?") ? "" : "?") + "&_tmp=" + o4.toString()), e4.updateValues();
              }, function(t5) {
                e4.j.alert(t5.message);
              });
            }).catch(function(t5) {
              e4.j.alert(t5.message, n3);
            });
          }, t3.prototype.openImagePopup = function(e4) {
            var t4 = this, o3 = new r2.Popup(this.j), n3 = (0, i.refs)(this.form).changeImage;
            o3.setZIndex(this.dialog.getZIndex() + 1), o3.setContent((0, a.FileSelectorWidget)(this.j, { upload: function(e5) {
              e5.files && e5.files.length && (0, i.attr)(t4.state.image, "src", e5.baseurl + e5.files[0]), t4.updateValues(), o3.close();
            }, filebrowser: function(e5) {
              e5 && (0, i.isArray)(e5.files) && e5.files.length && ((0, i.attr)(t4.state.image, "src", e5.files[0]), o3.close(), t4.updateValues());
            } }, this.state.image, o3.close)).open(function() {
              return (0, i.position)(n3);
            }), e4.stopPropagation();
          }, t3.prototype.afterInit = function(e4) {
            var t4 = this, o3 = this;
            e4.e.on("afterConstructor changePlace", function() {
              e4.e.off(e4.editor, ".imageproperties").on(e4.editor, "dblclick.imageproperties", function(n3) {
                var i2 = n3.target;
                if (r2.Dom.isTag(i2, "img")) if (e4.o.image.openOnDblClick) {
                  if (false === t4.j.e.fire("openOnDblClick", i2)) return;
                  o3.state.image = i2, e4.o.readonly || (n3.stopImmediatePropagation(), n3.preventDefault(), o3.open());
                } else n3.stopImmediatePropagation(), e4.s.select(i2);
              });
            }).on("openImageProperties.imageproperties", function(e5) {
              t4.state.image = e5, t4.open();
            });
          }, t3.prototype.beforeDestruct = function(e4) {
            this.dialog && this.dialog.destruct(), e4.e.off(e4.editor, ".imageproperties").off(".imageproperties");
          }, n2.__decorate([(0, l.watch)("state.marginIsLocked")], t3.prototype, "onChangeMarginIsLocked", null), n2.__decorate([(0, l.watch)("state.sizeIsLocked")], t3.prototype, "onChangeSizeIsLocked", null), n2.__decorate([l.autobind], t3.prototype, "onApply", null), n2.__decorate([l.autobind], t3.prototype, "openImageEditor", null), n2.__decorate([l.autobind], t3.prototype, "openImagePopup", null), t3;
        }(r2.Plugin);
        t2.imageProperties = v, u.pluginSystem.add("imageProperties", v);
      }, 49391: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.form = void 0;
        var n2 = o2(77904);
        t2.form = function(e3) {
          var t3 = e3.o.image, o3 = t3.showPreview, r2 = t3.editSize, i = n2.Icon.get.bind(n2.Icon);
          return e3.c.fromHTML('<form class="jodit-properties">\n		<div class="jodit-grid jodit-grid_xs-column">\n			<div class="jodit_col-lg-2-5 jodit_col-xs-5-5">\n				<div class="jodit-properties_view_box">\n					<div style="'.concat(o3 ? "" : "display:none", '" class="jodit-properties_image_view">\n						<img data-ref="imageViewSrc" src="" alt=""/>\n					</div>\n					<div style="').concat(r2 ? "" : "display:none", '" class="jodit-form__group jodit-properties_image_sizes">\n						<input data-ref="imageWidth" type="text" class="jodit-input"/>\n						<a data-ref="lockSize" class="jodit-properties__lock">').concat(i("lock"), '</a>\n						<input data-ref="imageHeight" type="text" class="imageHeight jodit-input"/>\n					</div>\n				</div>\n			</div>\n			<div data-ref="tabsBox" class="jodit_col-lg-3-5 jodit_col-xs-5-5"></div>\n		</div>\n	</form>'));
        };
      }, 27506: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.mainTab = void 0;
        var n2 = o2(77904);
        t2.mainTab = function(e3) {
          var t3 = e3.o, o3 = e3.i18n.bind(e3), r2 = n2.Icon.get.bind(n2.Icon), i = t3.filebrowser.ajax.url || t3.uploader.url, a = t3.image.useImageEditor;
          return e3.c.fromHTML('<div style="'.concat(t3.image.editSrc ? "" : "display:none", '" class="jodit-form__group">\n			<label>').concat(o3("Src"), '</label>\n			<div class="jodit-input_group">\n				<input data-ref="imageSrc" class="jodit-input" type="text"/>\n				<div\n					class="jodit-input_group-buttons"\n					style="').concat(i ? "" : "display: none", '"\n				>\n						<a\n							data-ref="changeImage"\n							class="jodit-button"\n						>').concat(r2("image"), '</a>\n						<a\n							data-ref="editImage"\n							class="jodit-button"\n							style="').concat(a ? "" : "display: none", '"\n						>').concat(r2("crop"), '</a>\n				</div>\n			</div>\n		</div>\n		<div style="').concat(t3.image.editTitle ? "" : "display:none", '" class="jodit-form__group">\n			<label>').concat(o3("Title"), '</label>\n			<input data-ref="imageTitle" type="text" class="jodit-input"/>\n		</div>\n		<div style="').concat(t3.image.editAlt ? "" : "display:none", '" class="jodit-form__group">\n			<label>').concat(o3("Alternative"), '</label>\n			<input data-ref="imageAlt" type="text" class="jodit-input"/>\n		</div>\n		<div style="').concat(t3.image.editLink ? "" : "display:none", '" class="jodit-form__group">\n			<label>').concat(o3("Link"), '</label>\n			<input data-ref="imageLink" type="text" class="jodit-input"/>\n		</div>\n		<div style="').concat(t3.image.editLink ? "" : "display:none", '" class="jodit-form__group">\n			<label class="jodit_vertical_middle">\n				<input data-ref="imageLinkOpenInNewTab" type="checkbox" class="jodit-checkbox"/>\n				<span>').concat(o3("Open link in new tab"), "</span>\n			</label>\n		</div>"));
        };
      }, 50109: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.positionTab = void 0;
        var n2 = o2(77904);
        t2.positionTab = function(e3) {
          var t3 = e3.o, o3 = e3.i18n.bind(e3), r2 = n2.Icon.get.bind(n2.Icon), i = [];
          return t3.image.availableClasses.length > 0 ? (i.push('<select data-ref="classes" class="jodit-input jodit-select">'), t3.image.availableClasses.forEach(function(e4) {
            i.push("string" == typeof e4 ? '<option value="'.concat(e4, '">').concat(e4, "</option>") : '<option value="'.concat(e4[0], '">').concat(e4[1], "</option>"));
          }), i.push("</select>")) : i.push('<input data-ref="classes" type="text" class="jodit-input"/>'), e3.c.fromHTML('<div style="'.concat(t3.image.editMargins ? "" : "display:none", '" class="jodit-form__group">\n			<label>').concat(o3("Margins"), '</label>\n			<div class="jodit-grid jodit_vertical_middle">\n				<input class="jodit_col-lg-1-5 jodit-input" data-ref="marginTop" type="text" placeholder="').concat(o3("top"), '"/>\n				<a style="text-align: center;" data-ref="lockMargin" class="jodit-properties__lock jodit_col-lg-1-5">').concat(r2("lock"), '</a>\n				<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginRight" type="text" placeholder="').concat(o3("right"), '"/>\n				<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginBottom" type="text" placeholder="').concat(o3("bottom"), '"/>\n				<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginLeft" type="text" placeholder="').concat(o3("left"), '"/>\n			</div>\n		</div>\n		<div\n			style="').concat(t3.image.editAlign ? "" : "display:none", '"\n			class="jodit-form__group"\n		>\n			<label>').concat(o3("Align"), '</label>\n			<select data-ref="align" class="jodit-select">\n				<option value="">').concat(o3("--Not Set--"), '</option>\n				<option value="left">').concat(o3("Left"), '</option>\n				<option value="center">').concat(o3("Center"), '</option>\n				<option value="right">').concat(o3("Right"), '</option>\n			</select>\n		</div>\n		<div style="').concat(t3.image.editStyle ? "" : "display:none", '" class="jodit-form__group">\n			<label>').concat(o3("Styles"), '</label>\n			<input data-ref="style" type="text" class="jodit-input"/>\n		</div>\n		<div style="').concat(t3.image.editClass ? "" : "display:none", '" class="jodit-form__group">\n			<label>').concat(o3("Classes"), "</label>\n			").concat(i.join(""), '\n		</div>\n		<div style="').concat(t3.image.editId ? "" : "display:none", '" class="jodit-form__group">\n			<label>Id</label>\n			<input data-ref="id" type="text" class="jodit-input"/>\n		</div>\n		<div\n			style="').concat(t3.image.editBorderRadius ? "" : "display:none", '"\n			class="jodit-form__group"\n		>\n			<label>').concat(o3("Border radius"), '</label>\n				<input data-ref="borderRadius" type="number" class="jodit-input"/>\n		</div>'));
        };
      }, 67547: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.image = void 0;
        var n2 = o2(20255), r2 = o2(64968), i = o2(40332), a = o2(718), s = o2(93166), l = o2(17332);
        function c(e3) {
          e3.registerButton({ name: "image", group: "media" });
        }
        o2(77904).Icon.set("image", o2(53477)), s.Config.prototype.controls.image = { popup: function(e3, t3, o3, s2) {
          var l2 = null;
          return t3 && !r2.Dom.isText(t3) && r2.Dom.isHTMLElement(t3) && (r2.Dom.isTag(t3, "img") || (0, i.$$)("img", t3).length) && (l2 = r2.Dom.isTag(t3, "img") ? t3 : (0, i.$$)("img", t3)[0]), e3.s.save(), (0, a.FileSelectorWidget)(e3, { filebrowser: function(t4) {
            e3.s.restore(), t4.files && t4.files.forEach(function(o4) {
              return e3.s.insertImage(t4.baseurl + o4, null, e3.o.imageDefaultWidth);
            }), s2();
          }, upload: true, url: function(t4, o4) {
            return n2.__awaiter(void 0, void 0, void 0, function() {
              var r3;
              return n2.__generator(this, function(n3) {
                switch (n3.label) {
                  case 0:
                    return e3.s.restore(), /^[a-z\d_-]+(\.[a-z\d_-]+)+/i.test(t4) && (t4 = "//" + t4), (r3 = l2 || e3.createInside.element("img")).setAttribute("src", t4), r3.setAttribute("alt", o4), l2 ? [3, 2] : [4, e3.s.insertImage(r3, null, e3.o.imageDefaultWidth)];
                  case 1:
                    n3.sent(), n3.label = 2;
                  case 2:
                    return s2(), [2];
                }
              });
            });
          } }, l2, s2);
        }, tags: ["img"], tooltip: "Insert Image" }, t2.image = c, l.pluginSystem.add("image", c);
      }, 2916: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(64968), i = o2(77904), a = o2(26011);
        i.Icon.set("indent", o2(90053)).set("outdent", o2(72230)), n2.Config.prototype.controls.indent = { tooltip: "Increase Indent" }, n2.Config.prototype.controls.outdent = { isDisabled: function(e3) {
          var t3 = e3.s.current();
          if (t3) {
            var o3 = r2.Dom.closest(t3, r2.Dom.isBlock, e3.editor);
            if (o3) {
              var n3 = (0, a.getKey)(e3.o.direction, o3);
              return !o3.style[n3] || 0 >= parseInt(o3.style[n3], 10);
            }
          }
          return true;
        }, tooltip: "Decrease Indent" }, n2.Config.prototype.indentMargin = 10;
      }, 26011: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getKey = void 0;
        var n2 = o2(24263);
        t2.getKey = function(e3, t3) {
          return "".concat(n2.Dom.isCell(t3) ? "padding" : "margin").concat("rtl" === e3 ? "Right" : "Left");
        };
      }, 71838: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.indent = void 0;
        var n2 = o2(86893), r2 = o2(64968), i = o2(40332), a = o2(17332);
        o2(2916);
        var s = o2(26011);
        function l(e3) {
          e3.registerButton({ name: "indent", group: "indent" }).registerButton({ name: "outdent", group: "indent" });
          var t3 = function(t4) {
            var o3 = [];
            return e3.s.eachSelection(function(a2) {
              e3.s.save();
              var l2 = !!a2 && r2.Dom.up(a2, r2.Dom.isBlock, e3.editor), c = e3.o.enter;
              if (!l2 && a2 && (l2 = r2.Dom.wrapInline(a2, c !== n2.BR ? c : n2.PARAGRAPH, e3)), !l2) return e3.s.restore(), false;
              var u = o3.includes(l2);
              if (l2 && !u) {
                var d = (0, s.getKey)(e3.o.direction, l2);
                o3.push(l2);
                var p = l2.style[d] ? parseInt(l2.style[d], 10) : 0;
                l2.style[d] = (p += e3.o.indentMargin * ("outdent" === t4 ? -1 : 1)) > 0 ? p + "px" : "", (0, i.attr)(l2, "style") || (0, i.attr)(l2, "style", null);
              }
              e3.s.restore();
            }), e3.synchronizeValues(), false;
          };
          e3.registerCommand("indent", { exec: t3, hotkeys: ["ctrl+]", "cmd+]"] }), e3.registerCommand("outdent", { exec: t3, hotkeys: ["ctrl+[", "cmd+["] });
        }
        t2.indent = l, a.pluginSystem.add("indent", l);
      }, 70022: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(55692), o2(66031), o2(91241), o2(87565), o2(60894), o2(90302), o2(92138), o2(88412), o2(79308), o2(19268), o2(30598), o2(33122), o2(10135), o2(66994), o2(54798), o2(12908), o2(65123), o2(83228), o2(43889), o2(93300), o2(67547), o2(92575), o2(15747), o2(71838), o2(54752), o2(54452), o2(46324), o2(27738), o2(61421), o2(27582), o2(76303), o2(19806), o2(52598), o2(19483), o2(15428), o2(47224), o2(83211), o2(88297), o2(72930), o2(51197), o2(2327), o2(47608), o2(90523), o2(69257), o2(14889), o2(95323), o2(37458), o2(71003), o2(86030), o2(17002), o2(1557), o2(82808), o2(48560), o2(32246), o2(45842), o2(23308), o2(19889), o2(20728), o2(96899), o2(18238);
      }, 35387: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(77904);
        n2.Config.prototype.toolbarInline = true, n2.Config.prototype.toolbarInlineForSelection = false, n2.Config.prototype.toolbarInlineDisableFor = [], n2.Config.prototype.toolbarInlineDisabledButtons = ["source"], r2.Icon.set("addcolumn", o2(78321)).set("addrow", o2(77654)).set("merge", o2(43371)).set("th", o2(52242)).set("splitg", o2(44563)).set("splitv", o2(53183)).set("th-list", o2(18548)), n2.Config.prototype.popup = { a: o2(27487).Z, img: o2(97425).default, cells: o2(59500).Z, toolbar: o2(55350).Z, jodit: o2(66686).Z, iframe: o2(66686).Z, "jodit-media": o2(66686).Z, selection: ["bold", "underline", "italic", "ul", "ol", "\n", "outdent", "indent", "fontsize", "brush", "cut", "\n", "paragraph", "link", "align", "dots"] };
      }, 27487: function(e2, t2, o2) {
        var n2 = o2(76502);
        t2.Z = [{ name: "eye", tooltip: "Open link", exec: function(e3, t3) {
          var o3 = (0, n2.attr)(t3, "href");
          t3 && o3 && e3.ow.open(o3);
        } }, { name: "link", tooltip: "Edit link", icon: "pencil" }, "unlink", "brush", "file"];
      }, 59500: function(e2, t2, o2) {
        var n2 = o2(10172), r2 = o2(26911), i = o2(718), a = function(e3) {
          return e3.args && (0, n2.isString)(e3.args[0]) ? e3.args[0].toLowerCase() : "";
        };
        t2.Z = [{ name: "brush", popup: function(e3, t3, o3, a2) {
          if ((0, n2.isJoditObject)(e3)) {
            var s = e3.getInstance("Table", e3.o).getAllSelectedCells();
            if (!s.length) return false;
            var l = function(t4) {
              return (0, i.ColorPickerWidget)(e3, function(o4) {
                s.forEach(function(e4) {
                  (0, r2.css)(e4, t4, o4);
                }), e3.lock(), e3.synchronizeValues(), a2(), e3.unlock();
              }, (0, r2.css)(s[0], t4));
            };
            return (0, i.TabsWidget)(e3, [{ name: "Background", content: l("background-color") }, { name: "Text", content: l("color") }, { name: "Border", content: l("border-color") }]);
          }
        }, tooltip: "Background" }, { name: "valign", list: ["Top", "Middle", "Bottom", "Normal"], childTemplate: function(e3, t3, o3) {
          return o3;
        }, exec: function(e3, t3, o3) {
          var n3 = a(o3.control);
          e3.getInstance("Table", e3.o).getAllSelectedCells().forEach(function(e4) {
            (0, r2.css)(e4, "vertical-align", "normal" === n3 ? "" : n3);
          });
        }, tooltip: "Vertical align" }, { name: "splitv", list: { tablesplitv: "Split vertical", tablesplitg: "Split horizontal" }, tooltip: "Split" }, { name: "align", icon: "left" }, "\n", { name: "merge", command: "tablemerge", tooltip: "Merge" }, { name: "addcolumn", list: { tableaddcolumnbefore: "Insert column before", tableaddcolumnafter: "Insert column after" }, exec: function(e3, t3, o3) {
          var r3 = o3.control;
          if ((0, n2.isJoditObject)(e3)) {
            var i2 = a(r3);
            e3.execCommand(i2, false, t3);
          }
        }, tooltip: "Add column" }, { name: "addrow", list: { tableaddrowbefore: "Insert row above", tableaddrowafter: "Insert row below" }, exec: function(e3, t3, o3) {
          var r3 = o3.control;
          if ((0, n2.isJoditObject)(e3)) {
            var i2 = a(r3);
            e3.execCommand(i2, false, t3);
          }
        }, tooltip: "Add row" }, { name: "delete", icon: "bin", list: { tablebin: "Delete table", tablebinrow: "Delete row", tablebincolumn: "Delete column", tableempty: "Empty cell" }, exec: function(e3, t3, o3) {
          var r3 = o3.control;
          if ((0, n2.isJoditObject)(e3)) {
            var i2 = a(r3);
            e3.execCommand(i2, false, t3), e3.e.fire("hidePopup");
          }
        }, tooltip: "Delete" }];
      }, 66686: function(e2, t2, o2) {
        var n2 = o2(97425);
        t2.Z = [{ name: "bin", tooltip: "Delete", exec: function(e3, t3) {
          t3 && e3.s.removeNode(t3);
        } }, n2.align];
      }, 97425: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.align = void 0;
        var n2 = o2(64968), r2 = o2(24421), i = o2(26911), a = o2(60303);
        t2.align = { name: "left", childTemplate: function(e3, t3, o3) {
          return o3;
        }, list: ["Left", "Right", "Center", "Normal"], exec: function(e3, t3, o3) {
          var i2 = o3.control;
          if (n2.Dom.isTag(t3, ["img", "jodit", "jodit-media"])) {
            var s = i2.args && (0, r2.isString)(i2.args[0]) ? i2.args[0].toLowerCase() : "";
            if (!s) return false;
            (0, a.hAlignElement)(t3, s), n2.Dom.isTag(t3, ["jodit", "jodit-media"]) && t3.firstElementChild && (0, a.hAlignElement)(t3.firstElementChild, s), e3.synchronizeValues(), e3.e.fire("recalcPositionPopup");
          }
        }, tooltip: "Horizontal align" }, t2.default = [{ name: "delete", icon: "bin", tooltip: "Delete", exec: function(e3, t3) {
          t3 && e3.s.removeNode(t3);
        } }, { name: "pencil", exec: function(e3, t3) {
          "img" === t3.tagName.toLowerCase() && e3.e.fire("openImageProperties", t3);
        }, tooltip: "Edit" }, { name: "valign", list: ["Top", "Middle", "Bottom", "Normal"], tooltip: "Vertical align", exec: function(e3, t3, o3) {
          var a2 = o3.control;
          if (n2.Dom.isTag(t3, "img")) {
            var s = a2.args && (0, r2.isString)(a2.args[0]) ? a2.args[0].toLowerCase() : "";
            if (!s) return false;
            (0, i.css)(t3, "vertical-align", "normal" === s ? "" : s), e3.e.fire("recalcPositionPopup");
          }
        } }, t2.align];
      }, 55350: function(e2, t2) {
        t2.Z = ["bold", "italic", "|", "ul", "ol", "eraser", "|", "fontsize", "brush", "paragraph", "---", "image", "table", "\n", "link", "|", "align", "|", "undo", "redo", "|", "copyformat", "fullsize", "---", "dots"];
      }, 54752: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.inlinePopup = void 0;
        var n2 = o2(20255);
        o2(45109);
        var r2 = o2(57549), i = o2(81438), a = o2(35799), s = o2(40332), l = o2(64968), c = o2(2074), u = o2(43441), d = o2(17332);
        o2(35387);
        var p = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.requires = ["select"], t4.type = null, t4.popup = new a.Popup(t4.jodit, false), t4.toolbar = (0, i.makeCollection)(t4.jodit, t4.popup), t4.snapRange = null, t4.elmsList = (0, s.keys)(t4.j.o.popup, false).filter(function(e4) {
              return !t4.isExcludedTarget(e4);
            }), t4;
          }
          return n2.__extends(t3, e3), t3.prototype.onClick = function(e4) {
            var t4 = this, o3 = this.elmsList, n3 = l.Dom.isTag(e4, "img") ? e4 : l.Dom.closest(e4, o3, this.j.editor);
            if (n3 && this.canShowPopupForType(n3.nodeName.toLowerCase())) return this.showPopup(function() {
              return (0, s.position)(n3, t4.j);
            }, n3.nodeName.toLowerCase(), n3), false;
          }, t3.prototype.showPopup = function(e4, t4, o3) {
            if (t4 = t4.toLowerCase(), !this.canShowPopupForType(t4)) return false;
            if (this.type !== t4 || o3 !== this.previousTarget) {
              this.previousTarget = o3;
              var n3 = this.j.o.popup[t4], r3 = void 0;
              r3 = (0, s.isFunction)(n3) ? n3(this.j, o3, this.popup.close) : n3, (0, s.isArray)(r3) && (this.toolbar.build(r3, o3), this.toolbar.buttonSize = this.j.o.toolbarButtonSize, r3 = this.toolbar.container), this.popup.setContent(r3), this.type = t4;
            }
            return this.popup.open(e4), true;
          }, t3.prototype.hidePopup = function(e4) {
            (0, s.isString)(e4) && e4 !== this.type || this.popup.close();
          }, t3.prototype.onOutsideClick = function() {
            this.popup.close();
          }, t3.prototype.canShowPopupForType = function(e4) {
            var t4 = this.j.o.popup[e4.toLowerCase()];
            return !(this.j.o.readonly || !this.j.o.toolbarInline || !t4 || this.isExcludedTarget(e4));
          }, t3.prototype.isExcludedTarget = function(e4) {
            return (0, s.splitArray)(this.j.o.toolbarInlineDisableFor).map(function(e5) {
              return e5.toLowerCase();
            }).includes(e4.toLowerCase());
          }, t3.prototype.afterInit = function(e4) {
            var t4 = this;
            this.j.e.on("getDiffButtons.mobile", function(o3) {
              if (t4.toolbar === o3) {
                var n3 = t4.toolbar.getButtonsNames();
                return (0, s.toArray)(e4.registeredButtons).filter(function(e5) {
                  return !t4.j.o.toolbarInlineDisabledButtons.includes(e5.name);
                }).filter(function(e5) {
                  var t5 = (0, s.isString)(e5) ? e5 : e5.name;
                  return t5 && "|" !== t5 && "\n" !== t5 && !n3.includes(t5);
                });
              }
            }).on("hidePopup", this.hidePopup).on("showInlineToolbar", this.showInlineToolbar).on("showPopup", function(e5, o3, n3) {
              t4.showPopup(o3, n3 || ((0, s.isString)(e5) ? e5 : e5.nodeName), (0, s.isString)(e5) ? void 0 : e5);
            }).on("mousedown keydown", this.onSelectionStart).on("change", function() {
              t4.popup.isOpened && t4.previousTarget && !t4.previousTarget.parentNode && (t4.hidePopup(), t4.previousTarget = void 0);
            }).on([this.j.ew, this.j.ow], "mouseup keyup", this.onSelectionEnd), this.addListenersForElements();
          }, t3.prototype.onSelectionStart = function() {
            this.snapRange = this.j.s.range.cloneRange();
          }, t3.prototype.onSelectionEnd = function(e4) {
            if (!(e4 && e4.target && c.UIElement.closestElement(e4.target, a.Popup))) {
              var t4 = this.snapRange, o3 = this.j.s.range;
              t4 && !o3.collapsed && o3.startContainer === t4.startContainer && o3.startOffset === t4.startOffset && o3.endContainer === t4.endContainer && o3.endOffset === t4.endOffset || this.onSelectionChange();
            }
          }, t3.prototype.onSelectionChange = function() {
            if (this.j.o.toolbarInlineForSelection) {
              var e4 = "selection", t4 = this.j.s.sel, o3 = this.j.s.range;
              (null == t4 ? void 0 : t4.isCollapsed) || this.isSelectedTarget(o3) || this.tableModule.getAllSelectedCells().length ? this.type === e4 && this.popup.isOpened && this.hidePopup() : this.j.s.current() && this.showPopup(function() {
                return o3.getBoundingClientRect();
              }, e4);
            }
          }, t3.prototype.isSelectedTarget = function(e4) {
            var t4 = e4.startContainer;
            return l.Dom.isElement(t4) && t4 === e4.endContainer && l.Dom.isTag(t4.childNodes[e4.startOffset], (0, s.keys)(this.j.o.popup, false)) && e4.startOffset === e4.endOffset - 1;
          }, Object.defineProperty(t3.prototype, "tableModule", { get: function() {
            return this.j.getInstance("Table", this.j.o);
          }, enumerable: false, configurable: true }), t3.prototype.beforeDestruct = function(e4) {
            e4.e.off("showPopup").off([this.j.ew, this.j.ow], "mouseup keyup", this.onSelectionEnd), this.removeListenersForElements();
          }, t3.prototype._eventsList = function() {
            var e4 = this.elmsList;
            return e4.map(function(e5) {
              return (0, s.camelCase)("click_".concat(e5));
            }).concat(e4.map(function(e5) {
              return (0, s.camelCase)("touchstart_".concat(e5));
            })).join(" ");
          }, t3.prototype.addListenersForElements = function() {
            this.j.e.on(this._eventsList(), this.onClick);
          }, t3.prototype.removeListenersForElements = function() {
            this.j.e.off(this._eventsList(), this.onClick);
          }, t3.prototype.showInlineToolbar = function(e4) {
            var t4 = this;
            this.showPopup(function() {
              return e4 || t4.j.s.range.getBoundingClientRect();
            }, "toolbar");
          }, n2.__decorate([u.autobind], t3.prototype, "onClick", null), n2.__decorate([(0, u.wait)(function(e4) {
            return !e4.j.isLocked;
          })], t3.prototype, "showPopup", null), n2.__decorate([(0, u.watch)(":clickEditor"), u.autobind], t3.prototype, "hidePopup", null), n2.__decorate([(0, u.watch)(":outsideClick")], t3.prototype, "onOutsideClick", null), n2.__decorate([u.autobind], t3.prototype, "onSelectionStart", null), n2.__decorate([u.autobind], t3.prototype, "onSelectionEnd", null), n2.__decorate([(0, u.debounce)(function(e4) {
            return e4.defaultTimeout;
          })], t3.prototype, "onSelectionChange", null), n2.__decorate([u.autobind], t3.prototype, "showInlineToolbar", null), t3;
        }(r2.Plugin);
        t2.inlinePopup = p, d.pluginSystem.add("inlinePopup", p);
      }, 54452: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.justify = void 0;
        var n2 = o2(93166), r2 = o2(24263), i = o2(26911), a = o2(60303), s = o2(17332);
        function l(e3) {
          e3.registerButton({ name: "align", group: "indent" });
          var t3 = function(t4) {
            return e3.s.focus(), e3.s.eachSelection(function(o3) {
              if (o3) {
                var n3 = r2.Dom.up(o3, r2.Dom.isBlock, e3.editor);
                n3 || (n3 = r2.Dom.wrapInline(o3, e3.o.enterBlock, e3)), (0, a.alignElement)(t4, n3);
              }
            }), false;
          };
          e3.registerCommand("justifyfull", t3), e3.registerCommand("justifyright", t3), e3.registerCommand("justifyleft", t3), e3.registerCommand("justifycenter", t3);
        }
        o2(77904).Icon.set("justify", o2(87498)), n2.Config.prototype.controls.align = { name: "left", tooltip: "Align", update: function(e3, t3) {
          var o3 = e3.control, n3 = t3.s.current();
          if (n3) {
            var a2 = r2.Dom.closest(n3, r2.Dom.isBlock, t3.editor) || t3.editor, s2 = (0, i.css)(a2, "text-align").toString();
            o3.defaultValue && -1 !== o3.defaultValue.indexOf(s2) && (s2 = "left"), o3.data && o3.data.currentValue !== s2 && o3.list && -1 !== o3.list.indexOf(s2) && (t3.o.textIcons ? e3.state.text = s2 : e3.state.icon.name = s2, o3.data.currentValue = s2);
          }
        }, isActive: function(e3, t3) {
          var o3 = e3.s.current();
          if (o3 && t3.defaultValue) {
            var n3 = r2.Dom.closest(o3, r2.Dom.isBlock, e3.editor) || e3.editor;
            return -1 === t3.defaultValue.indexOf((0, i.css)(n3, "text-align").toString());
          }
          return false;
        }, defaultValue: ["left", "start", "inherit"], data: { currentValue: "left" }, list: ["center", "left", "right", "justify"] }, n2.Config.prototype.controls.center = { command: "justifyCenter", css: { "text-align": "center" }, tooltip: "Align Center" }, n2.Config.prototype.controls.justify = { command: "justifyFull", css: { "text-align": "justify" }, tooltip: "Align Justify" }, n2.Config.prototype.controls.left = { command: "justifyLeft", css: { "text-align": "left" }, tooltip: "Align Left" }, n2.Config.prototype.controls.right = { command: "justifyRight", css: { "text-align": "right" }, tooltip: "Align Right" }, t2.justify = l, s.pluginSystem.add("justify", l);
      }, 46324: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.keyArrowOutside = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(43441), a = o2(86893), s = o2(24263), l = o2(17332), c = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
          }, t3.prototype.beforeDestruct = function(e4) {
          }, t3.prototype.onKeyDownArrow = function(e4) {
            var t4;
            if (e4.key === a.KEY_RIGHT && this.j.selection.isCollapsed()) {
              var o3 = this.j.selection.range, n3 = o3.endContainer, r3 = o3.endOffset;
              if (s.Dom.isText(n3) && (null === (t4 = n3.nodeValue) || void 0 === t4 ? void 0 : t4.length) === r3) {
                var i2 = n3.parentNode;
                s.Dom.isInlineBlock(i2) && !s.Dom.findNotEmptyNeighbor(i2, false, this.j.editor) && s.Dom.after(i2, this.j.createInside.text(a.NBSP_SPACE));
              }
            }
          }, n2.__decorate([(0, i.watch)(":keydown")], t3.prototype, "onKeyDownArrow", null), t3;
        }(r2.Plugin);
        t2.keyArrowOutside = c, l.pluginSystem.add("keyArrowOutside", c);
      }, 19250: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166);
        n2.Config.prototype.limitWords = false, n2.Config.prototype.limitChars = false, n2.Config.prototype.limitHTML = false;
      }, 27738: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.limit = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(86893), a = o2(43441), s = o2(17332);
        o2(19250);
        var l = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this, o3 = e4.o;
            if (e4 && (o3.limitWords || o3.limitChars)) {
              var n3 = null;
              e4.e.off(".limit").on("beforePaste.limit", function() {
                n3 = e4.history.snapshot.make();
              }).on("keydown.limit keyup.limit beforeEnter.limit", this.checkPreventKeyPressOrPaste).on("change.limit", this.checkPreventChanging).on("afterPaste.limit", function() {
                if (t4.__shouldDenyInput(true) && n3) return e4.history.snapshot.restore(n3), e4.e.fire("denyPaste.limit"), false;
              });
            }
          }, t3.prototype.shouldPreventInsertHTML = function(e4) {
            return (!e4 || !(i.COMMAND_KEYS.includes(e4.key) || e4.ctrlKey || e4.metaKey)) && this.__shouldDenyInput(false);
          }, t3.prototype.__shouldDenyInput = function(e4) {
            var t4 = this.jodit, o3 = t4.o, n3 = o3.limitWords, r3 = o3.limitChars, i2 = this.__splitWords(t4.o.limitHTML ? t4.value : t4.text);
            if (n3 && c(i2.length, n3, e4)) return t4.e.fire("denyWords.limit limit.limit"), true;
            var a2 = Boolean(r3 && c(i2.join("").length, r3, e4));
            return a2 && t4.e.fire("denyChars.limit limit.limit"), a2;
          }, t3.prototype.checkPreventKeyPressOrPaste = function(e4) {
            if (this.shouldPreventInsertHTML(e4)) return false;
          }, t3.prototype.checkPreventChanging = function(e4, t4) {
            var o3 = this.jodit;
            this.__shouldDenyInput(true) && (o3.value = t4);
          }, t3.prototype.__splitWords = function(e4) {
            return e4.replace((0, i.INVISIBLE_SPACE_REG_EXP)(), "").split((0, i.SPACE_REG_EXP)()).filter(function(e5) {
              return e5.length;
            });
          }, t3.prototype.beforeDestruct = function(e4) {
            e4.e.off(".limit");
          }, n2.__decorate([a.autobind], t3.prototype, "checkPreventKeyPressOrPaste", null), n2.__decorate([a.autobind], t3.prototype, "checkPreventChanging", null), t3;
        }(r2.Plugin);
        function c(e3, t3, o3) {
          return o3 ? e3 > t3 : e3 >= t3;
        }
        t2.limit = l, s.pluginSystem.add("limit", l);
      }, 29490: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(40332), i = o2(77904);
        n2.Config.prototype.defaultLineHeight = null, i.Icon.set("line-height", o2(7986)), n2.Config.prototype.controls.lineHeight = { command: "applyLineHeight", tags: ["ol"], tooltip: "Line height", list: [1, 1.1, 1.2, 1.3, 1.4, 1.5, 2], exec: function(e3, t3, o3) {
          return (0, r2.memorizeExec)(e3, t3, { control: o3.control }, function(e4) {
            return e4;
          });
        } };
      }, 26752: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.zh_tw = t2.zh_cn = t2.tr = t2.ru = t2.pt_br = t2.pl = t2.nl = t2.mn = t2.ko = t2.ja = t2.it = t2.id = t2.hu = t2.he = t2.fr = t2.fa = t2.es = t2.de = t2.cs_cz = t2.ar = void 0;
        var n2 = o2(47762);
        t2.ar = n2;
        var r2 = o2(97495);
        t2.cs_cz = r2;
        var i = o2(80131);
        t2.de = i;
        var a = o2(1201);
        t2.es = a;
        var s = o2(89912);
        t2.fa = s;
        var l = o2(3405);
        t2.fr = l;
        var c = o2(14129);
        t2.he = c;
        var u = o2(93729);
        t2.hu = u;
        var d = o2(16106);
        t2.id = d;
        var p = o2(89690);
        t2.it = p;
        var f = o2(33216);
        t2.ja = f;
        var h = o2(17282);
        t2.ko = h;
        var m = o2(52841);
        t2.mn = m;
        var v = o2(91761);
        t2.nl = v;
        var g = o2(61675);
        t2.pl = g;
        var y = o2(69709);
        t2.pt_br = y;
        var _ = o2(82591);
        t2.ru = _;
        var b = o2(87649);
        t2.tr = b;
        var w = o2(60268);
        t2.zh_cn = w;
        var S = o2(58214);
        t2.zh_tw = S;
      }, 61421: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.lineHeight = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(40332), a = o2(43441), s = o2(24263), l = o2(17332);
        o2(29490);
        var c = function(e3) {
          function t3(t4) {
            var n3 = e3.call(this, t4) || this;
            return n3.buttons = [{ name: "lineHeight", group: "font" }], (0, l.extendLang)(o2(26752)), n3;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            (0, i.css)(e4.editor, { lineHeight: e4.o.defaultLineHeight }), e4.registerCommand("applyLineHeight", this.applyLineHeight);
          }, t3.prototype.applyLineHeight = function(e4, t4, o3) {
            var n3, r3 = this.j, a2 = r3.s, l2 = r3.createInside, c2 = r3.editor, u = r3.o;
            a2.isFocused() || a2.focus(), a2.save();
            var d = function(e5) {
              var t5 = s.Dom.closest(e5, s.Dom.isBlock, c2);
              t5 || (t5 = s.Dom.wrap(e5, u.enter, l2));
              var r4 = (0, i.css)(t5, "lineHeight");
              void 0 === n3 && (n3 = r4.toString() !== o3.toString()), (0, i.css)(t5, "lineHeight", n3 ? o3 : null);
            };
            try {
              if (a2.isCollapsed()) {
                var p = l2.fake();
                a2.insertNode(p, false, false), d(p), s.Dom.safeRemove(p);
              } else a2.eachSelection(d);
            } finally {
              a2.restore();
            }
          }, t3.prototype.beforeDestruct = function(e4) {
            (0, i.css)(e4.editor, { lineHeight: null });
          }, n2.__decorate([a.autobind], t3.prototype, "applyLineHeight", null), t3;
        }(r2.Plugin);
        t2.lineHeight = c, l.pluginSystem.add("lineHeight", c);
      }, 56367: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(54238), i = o2(24263), a = o2(77904);
        n2.Config.prototype.link = { formTemplate: r2.formTemplate, followOnDblClick: false, processVideoLink: true, processPastedLink: true, noFollowCheckbox: true, openInNewTabCheckbox: true, modeClassName: "input", selectMultipleClassName: true, selectSizeClassName: 3, selectOptionsClassName: [], hotkeys: ["ctrl+k", "cmd+k"] }, a.Icon.set("link", o2(23075)).set("unlink", o2(10655)), n2.Config.prototype.controls.unlink = { exec: function(e3, t3) {
          var o3 = i.Dom.closest(t3, "a", e3.editor);
          o3 && i.Dom.unwrap(o3), e3.synchronizeValues(), e3.e.fire("hidePopup");
        }, tooltip: "Unlink" }, n2.Config.prototype.controls.link = { isActive: function(e3) {
          var t3 = e3.s.current();
          return Boolean(t3 && i.Dom.closest(t3, "a", e3.editor));
        }, popup: function(e3, t3, o3, n3) {
          return e3.e.fire("generateLinkForm.link", t3, n3);
        }, tags: ["a"], tooltip: "Insert link" };
      }, 27582: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.link = void 0;
        var n2 = o2(20255), r2 = o2(64968), i = o2(40332), a = o2(57549), s = o2(43441), l = o2(17332);
        o2(56367);
        var c = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.buttons = [{ name: "link", group: "insert" }], t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this;
            e4.o.link.followOnDblClick && e4.e.on("dblclick.link", this.onDblClickOnLink), e4.o.link.processPastedLink && e4.e.on("processPaste.link", this.onProcessPasteLink), e4.e.on("generateLinkForm.link", this.__generateForm), e4.registerCommand("openLinkDialog", { exec: function() {
              var o3 = e4.dlg({ resizable: false }), n3 = t4.__generateForm(e4.s.current(), function() {
                o3.close();
              });
              n3.container.classList.add("jodit-dialog_alert"), o3.setContent(n3), o3.open(), e4.async.requestIdleCallback(function() {
                var e5 = (0, i.refs)(n3.container).url_input;
                null == e5 || e5.focus();
              });
            }, hotkeys: e4.o.link.hotkeys });
          }, t3.prototype.onDblClickOnLink = function(e4) {
            if (r2.Dom.isTag(e4.target, "a")) {
              var t4 = (0, i.attr)(e4.target, "href");
              t4 && (location.href = t4, e4.preventDefault());
            }
          }, t3.prototype.onProcessPasteLink = function(e4, t4) {
            var o3 = this.jodit;
            if ((0, i.isURL)(t4) && o3.o.link.processPastedLink) {
              if (o3.e.stopPropagation("processPaste"), o3.o.link.processVideoLink) {
                var n3 = (0, i.convertMediaUrlToVideoEmbed)(t4);
                if (n3 !== t4) return o3.createInside.fromHTML(n3);
              }
              if (o3.s.isCollapsed()) {
                var r3 = o3.createInside.element("a");
                return r3.setAttribute("href", t4), r3.textContent = t4, o3.e.fire("applyLink", o3, r3, null), r3;
              }
              return o3.s.applyStyle(void 0, { element: "a", attributes: { href: t4 } }), true;
            }
          }, t3.prototype.__generateForm = function(e4, t4) {
            var o3, n3 = this.jodit, a2 = n3.i18n.bind(n3), s2 = n3.o.link, l2 = s2.openInNewTabCheckbox, c2 = s2.noFollowCheckbox, u = s2.formClassName, d = s2.modeClassName, p = (0, s2.formTemplate)(n3), f = (0, i.isString)(p) ? n3.c.fromHTML(p, { target_checkbox_box: l2, nofollow_checkbox_box: c2 }) : p, h = r2.Dom.isElement(f) ? f : f.container, m = (0, i.refs)(h), v = m.insert, g = m.unlink, y = m.content_input_box, _ = m.target_checkbox, b = m.nofollow_checkbox, w = m.url_input, S = r2.Dom.isImage(e4), C = m.content_input, j = m.className_input, E = m.className_select;
            C || (C = n3.c.element("input", { type: "hidden", ref: "content_input" })), u && h.classList.add(u), S && r2.Dom.hide(y);
            var x = function() {
              return o3 ? o3.innerText : (0, i.stripTags)(n3.s.range.cloneContents(), n3.ed);
            };
            if (o3 = !(!e4 || !r2.Dom.closest(e4, "a", n3.editor)) && r2.Dom.closest(e4, "a", n3.editor), !S && e4 && (C.value = x()), o3) {
              if (w.value = (0, i.attr)(o3, "href") || "", d) switch (d) {
                case "input":
                  j && (j.value = (0, i.attr)(o3, "class") || "");
                  break;
                case "select":
                  if (E) {
                    for (var k = 0; E.selectedOptions.length > k; k++) {
                      var T = E.options.item(k);
                      T && (T.selected = false);
                    }
                    ((0, i.attr)(o3, "class") || "").split(" ").forEach(function(e5) {
                      if (e5) for (var t5 = 0; E.options.length > t5; t5++) {
                        var o4 = E.options.item(t5);
                        (null == o4 ? void 0 : o4.value) && o4.value === e5 && (o4.selected = true);
                      }
                    });
                  }
              }
              l2 && _ && (_.checked = "_blank" === (0, i.attr)(o3, "target")), c2 && b && (b.checked = "nofollow" === (0, i.attr)(o3, "rel")), v.textContent = a2("Update");
            } else r2.Dom.hide(g);
            n3.editor.normalize();
            var I = n3.history.snapshot.make();
            g && n3.e.on(g, "click", function(e5) {
              n3.s.restore(), n3.history.snapshot.restore(I), o3 && r2.Dom.unwrap(o3), n3.synchronizeValues(), t4(), e5.preventDefault();
            });
            var P = function() {
              if (!w.value.trim().length) return w.focus(), w.classList.add("jodit_error"), false;
              var e5;
              n3.s.restore(), n3.s.removeMarkers(), n3.editor.normalize(), n3.history.snapshot.restore(I);
              var a3 = x() !== C.value.trim(), s3 = n3.createInside;
              if (o3) e5 = [o3];
              else {
                if (n3.s.isCollapsed()) {
                  var u2 = s3.element("a");
                  n3.s.insertNode(u2, false, false), e5 = [u2];
                } else {
                  var p2 = n3.s.current();
                  e5 = r2.Dom.isTag(p2, ["img"]) ? [r2.Dom.wrap(p2, "a", s3)] : n3.s.wrapInTag("a");
                }
                e5.forEach(function(e6) {
                  return n3.s.select(e6);
                });
              }
              return e5.forEach(function(e6) {
                var t5;
                if ((0, i.attr)(e6, "href", w.value), d && (null != j ? j : E)) {
                  if ("input" === d) "" === j.value && e6.hasAttribute("class") && (0, i.attr)(e6, "class", null), "" !== j.value && (0, i.attr)(e6, "class", j.value);
                  else if ("select" === d) {
                    e6.hasAttribute("class") && (0, i.attr)(e6, "class", null);
                    for (var o4 = 0; E.selectedOptions.length > o4; o4++) {
                      var r3 = null === (t5 = E.selectedOptions.item(o4)) || void 0 === t5 ? void 0 : t5.value;
                      r3 && e6.classList.add(r3);
                    }
                  }
                }
                if (!S) {
                  var s4 = e6.textContent;
                  C.value.trim().length ? a3 && (s4 = C.value) : s4 = w.value, s4 !== e6.textContent && (e6.textContent = s4);
                }
                l2 && _ && (0, i.attr)(e6, "target", _.checked ? "_blank" : null), c2 && b && (0, i.attr)(e6, "rel", b.checked ? "nofollow" : null), n3.e.fire("applyLink", n3, e6, f);
              }), n3.synchronizeValues(), t4(), false;
            };
            return r2.Dom.isElement(f) ? n3.e.on(f, "submit", function(e5) {
              return e5.preventDefault(), e5.stopImmediatePropagation(), P(), false;
            }) : f.onSubmit(P), f;
          }, t3.prototype.beforeDestruct = function(e4) {
            e4.e.off("generateLinkForm.link", this.__generateForm).off("dblclick.link", this.onDblClickOnLink).off("processPaste.link", this.onProcessPasteLink);
          }, n2.__decorate([s.autobind], t3.prototype, "onDblClickOnLink", null), n2.__decorate([s.autobind], t3.prototype, "onProcessPasteLink", null), n2.__decorate([s.autobind], t3.prototype, "__generateForm", null), t3;
        }(a.Plugin);
        t2.link = c, l.pluginSystem.add("link", c);
      }, 54238: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.formTemplate = void 0;
        var n2 = o2(95963), r2 = o2(96516);
        t2.formTemplate = function(e3) {
          var t3 = e3.o.link, o3 = t3.openInNewTabCheckbox, i = t3.noFollowCheckbox, a = t3.modeClassName, s = t3.selectSizeClassName, l = t3.selectMultipleClassName, c = t3.selectOptionsClassName;
          return new n2.UIForm(e3, [new n2.UIBlock(e3, [new n2.UIInput(e3, { name: "url", type: "text", ref: "url_input", label: "URL", placeholder: "http://", required: true })]), new n2.UIBlock(e3, [new n2.UIInput(e3, { name: "content", ref: "content_input", label: "Text" })], { ref: "content_input_box" }), a ? new n2.UIBlock(e3, ["input" === a ? new n2.UIInput(e3, { name: "className", ref: "className_input", label: "Class name" }) : "select" === a ? new n2.UISelect(e3, { name: "className", ref: "className_select", label: "Class name", size: s, multiple: l, options: c }) : null]) : null, o3 ? new n2.UICheckbox(e3, { name: "target", ref: "target_checkbox", label: "Open in new tab" }) : null, i ? new n2.UICheckbox(e3, { name: "nofollow", ref: "nofollow_checkbox", label: "No follow" }) : null, new n2.UIBlock(e3, [new r2.UIButton(e3, { name: "unlink", variant: "default", text: "Unlink" }), new r2.UIButton(e3, { name: "insert", type: "submit", variant: "primary", text: "Insert" })], { align: "full" })]);
        };
      }, 11737: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166);
        n2.Config.prototype.mediaFakeTag = "jodit-media", n2.Config.prototype.mediaInFakeBlock = true, n2.Config.prototype.mediaBlocks = ["video", "audio"];
      }, 76303: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.media = void 0;
        var n2 = o2(86893), r2 = o2(76502), i = o2(17332);
        function a(e3) {
          var t3 = "jodit_fake_wrapper", o3 = e3.options, i2 = o3.mediaFakeTag, a2 = o3.mediaBlocks;
          o3.mediaInFakeBlock && e3.e.on("afterGetValueFromEditor", function(e4) {
            var o4 = new RegExp("<".concat(i2, "[^>]+data-").concat(t3, "[^>]+>([^]+?)</").concat(i2, ">"), "ig");
            o4.test(e4.value) && (e4.value = e4.value.replace(o4, "$1"));
          }).on("change afterInit afterSetMode changePlace", e3.async.debounce(function() {
            e3.isDestructed || e3.getMode() === n2.MODE_SOURCE || (0, r2.$$)(a2.join(","), e3.editor).forEach(function(o4) {
              (0, r2.dataBind)(o4, t3) || ((0, r2.dataBind)(o4, t3, true), function(o5) {
                var n3;
                if (o5.parentNode && (0, r2.attr)(o5.parentNode, "data-jodit_iframe_wrapper")) o5 = o5.parentNode;
                else {
                  var a3 = e3.createInside.element(i2, ((n3 = { "data-jodit-temp": 1, contenteditable: false, draggable: true })["data-".concat(t3)] = 1, n3));
                  (0, r2.attr)(a3, "style", (0, r2.attr)(o5, "style")), a3.style.display = "inline-block" === o5.style.display ? "inline-block" : "block", a3.style.width = o5.offsetWidth + "px", a3.style.height = o5.offsetHeight + "px", o5.parentNode && o5.parentNode.insertBefore(a3, o5), a3.appendChild(o5), o5 = a3;
                }
                e3.e.off(o5, "mousedown.select touchstart.select").on(o5, "mousedown.select touchstart.select", function() {
                  e3.s.setCursorAfter(o5);
                });
              }(o4));
            });
          }, e3.defaultTimeout));
        }
        o2(11737), t2.media = a, i.pluginSystem.add("media", a);
      }, 8860: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(86893), i = o2(81438), a = o2(40332), s = o2(72719);
        n2.Config.prototype.mobileTapTimeout = 300, n2.Config.prototype.toolbarAdaptive = true, n2.Config.prototype.controls.dots = { mode: r2.MODE_SOURCE + r2.MODE_WYSIWYG, popup: function(e3, t3, o3, n3, r3) {
          var l = o3.data;
          return void 0 === l && (l = { toolbar: (0, i.makeCollection)(e3), rebuild: function() {
            var t4;
            if (r3) {
              var o4 = e3.e.fire("getDiffButtons.mobile", r3.closest(s.ToolbarCollection));
              if (o4 && l) {
                l.toolbar.build((0, a.splitArray)(o4));
                var n4 = (null === (t4 = e3.toolbar.firstButton) || void 0 === t4 ? void 0 : t4.container.offsetWidth) || 36;
                l.toolbar.container.style.width = 3 * (n4 + 4) + "px";
              }
            }
          } }, o3.data = l), l.rebuild(), l.toolbar;
        }, tooltip: "Show all" };
      }, 19806: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.mobile = void 0;
        var n2 = o2(40332), r2 = o2(97642), i = o2(17332);
        function a(e3) {
          var t3 = 0, o3 = (0, n2.splitArray)(e3.o.buttons);
          e3.o.mobileTapTimeout && e3.e.on("touchend", function(o4) {
            if (o4.changedTouches && o4.changedTouches.length) {
              var n3 = (/* @__PURE__ */ new Date()).getTime(), r3 = n3 - t3;
              r3 > e3.o.mobileTapTimeout && (t3 = n3, 1.5 * e3.o.mobileTapTimeout > r3 && e3.s.insertCursorAtPoint(o4.clientX, o4.clientY));
            }
          }), e3.e.on("getDiffButtons.mobile", function(t4) {
            if (t4 === e3.toolbar) {
              var i2 = (0, r2.flatButtonsSet)((0, n2.splitArray)(e3.o.buttons), e3), a2 = (0, r2.flatButtonsSet)(o3, e3);
              return (0, n2.toArray)(i2).reduce(function(e4, t5) {
                return a2.has(t5) || e4.push(t5), e4;
              }, []);
            }
          }), e3.o.toolbarAdaptive && e3.e.on("resize afterInit recalcAdaptive changePlace afterAddPlace", function() {
            var t4;
            if (e3.o.toolbar) {
              var r3 = (null !== (t4 = e3.container.parentElement) && void 0 !== t4 ? t4 : e3.container).offsetWidth, i2 = (0, n2.splitArray)(e3.isFullSize || r3 >= e3.o.sizeLG ? e3.o.buttons : e3.o.sizeMD > r3 ? e3.o.sizeSM > r3 ? e3.o.buttonsXS : e3.o.buttonsSM : e3.o.buttonsMD);
              i2.toString() !== o3.toString() && (o3 = i2, e3.e.fire("closeAllPopups"), e3.toolbar.setRemoveButtons(e3.o.removeButtons).build(o3.concat(e3.o.extraButtons)));
            }
          }).on(e3.ow, "load resize", function() {
            return e3.e.fire("recalcAdaptive");
          });
        }
        o2(8860), t2.mobile = a, i.pluginSystem.add("mobile", a);
      }, 73013: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(63122), i = function(e3, t3, o3) {
          var n3, i2 = o3.control, a = "button".concat(i2.command), s = null !== (n3 = i2.args && i2.args[0]) && void 0 !== n3 ? n3 : (0, r2.dataBind)(e3, a);
          (0, r2.dataBind)(e3, a, s), e3.execCommand(i2.command, false, "default" === s ? null : s);
        };
        o2(77904).Icon.set("ol", o2(15476)).set("ul", o2(59403)), n2.Config.prototype.controls.ul = { command: "insertUnorderedList", tags: ["ul"], tooltip: "Insert Unordered List", list: { default: "Default", circle: "Circle", disc: "Dot", square: "Quadrate" }, exec: i }, n2.Config.prototype.controls.ol = { command: "insertOrderedList", tags: ["ol"], tooltip: "Insert Ordered List", list: { default: "Default", "lower-alpha": "Lower Alpha", "lower-greek": "Lower Greek", "lower-roman": "Lower Roman", "upper-alpha": "Upper Alpha", "upper-roman": "Upper Roman" }, exec: i };
      }, 52598: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.orderedList = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(43441), a = o2(17332);
        o2(73013);
        var s = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.buttons = [{ name: "ul", group: "list" }, { name: "ol", group: "list" }], t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            e4.registerCommand("insertUnorderedList", this.onCommand).registerCommand("insertOrderedList", this.onCommand);
          }, t3.prototype.onCommand = function(e4, t4, o3) {
            return this.jodit.s.applyStyle({ listStyleType: null != o3 ? o3 : null }, { element: "insertunorderedlist" === e4 ? "ul" : "ol" }), this.jodit.synchronizeValues(), false;
          }, t3.prototype.beforeDestruct = function(e4) {
          }, n2.__decorate([i.autobind], t3.prototype, "onCommand", null), t3;
        }(r2.Plugin);
        t2.orderedList = s, a.pluginSystem.add("orderedList", s);
      }, 47470: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(86893);
        n2.Config.prototype.askBeforePasteFromWord = true, n2.Config.prototype.processPasteFromWord = true, n2.Config.prototype.defaultActionOnPasteFromWord = null, n2.Config.prototype.pasteFromWordActionList = [{ value: r2.INSERT_AS_HTML, text: "Keep" }, { value: r2.INSERT_AS_TEXT, text: "Clean" }, { value: r2.INSERT_ONLY_TEXT, text: "Insert only Text" }];
      }, 15428: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.pasteFromWord = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(40332), a = o2(86893), s = o2(43441), l = o2(64280), c = o2(17332);
        o2(47470);
        var u = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.requires = ["paste"], t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
          }, t3.prototype.beforeDestruct = function(e4) {
          }, t3.prototype.processWordHTML = function(e4, t4, o3) {
            var n3 = this, r3 = this.j, a2 = r3.o, s2 = a2.askBeforePasteFromWord, c2 = a2.defaultActionOnPasteFromWord, u2 = a2.defaultActionOnPaste, d = a2.pasteFromWordActionList;
            return !(!a2.processPasteFromWord || !(0, i.isHtmlFromWord)(t4) || (s2 ? (0, l.askInsertTypeDialog)(r3, "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?", "Word Paste Detected", function(r4) {
              n3.insertFromWordByType(e4, t4, r4, o3);
            }, d) : this.insertFromWordByType(e4, t4, c2 || u2, o3), 0));
          }, t3.prototype.insertFromWordByType = function(e4, t4, o3, n3) {
            var r3;
            switch (o3) {
              case a.INSERT_AS_HTML:
                t4 = (0, i.applyStyles)(t4);
                var s2 = null === (r3 = this.j.events) || void 0 === r3 ? void 0 : r3.fire("beautifyHTML", t4);
                (0, i.isString)(s2) && (t4 = s2);
                break;
              case a.INSERT_AS_TEXT:
                t4 = (0, i.cleanFromWord)(t4);
                break;
              case a.INSERT_ONLY_TEXT:
                t4 = (0, i.stripTags)((0, i.cleanFromWord)(t4));
            }
            (0, l.pasteInsertHtml)(e4, this.j, t4);
          }, n2.__decorate([(0, s.watch)(":processHTML")], t3.prototype, "processWordHTML", null), t3;
        }(r2.Plugin);
        t2.pasteFromWord = u, c.pluginSystem.add("pasteFromWord", u);
      }, 47224: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.pasteStorage = void 0;
        var n2 = o2(20255);
        o2(71708);
        var r2 = o2(86893), i = o2(85605), a = o2(24263), s = o2(40332), l = o2(96031), c = o2(17332), u = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.currentIndex = 0, t4.list = [], t4.container = null, t4.listBox = null, t4.previewBox = null, t4.dialog = null, t4.paste = function() {
              if (t4.j.s.focus(), t4.j.s.insertHTML(t4.list[t4.currentIndex]), 0 !== t4.currentIndex) {
                var e4 = t4.list[0];
                t4.list[0] = t4.list[t4.currentIndex], t4.list[t4.currentIndex] = e4;
              }
              t4.dialog && t4.dialog.close(), t4.j.synchronizeValues(), t4.j.e.fire("afterPaste");
            }, t4.onKeyDown = function(e4) {
              var o3 = t4.currentIndex;
              -1 !== [r2.KEY_UP, r2.KEY_DOWN, r2.KEY_ENTER].indexOf(e4.key) && (e4.key === r2.KEY_UP && (0 === o3 ? o3 = t4.list.length - 1 : o3 -= 1), e4.key === r2.KEY_DOWN && (o3 === t4.list.length - 1 ? o3 = 0 : o3 += 1), e4.key !== r2.KEY_ENTER ? (o3 !== t4.currentIndex && t4.selectIndex(o3), e4.stopImmediatePropagation(), e4.preventDefault()) : t4.paste());
            }, t4.selectIndex = function(e4) {
              t4.listBox && (0, s.toArray)(t4.listBox.childNodes).forEach(function(o3, n3) {
                o3.classList.remove("jodit_active"), e4 === n3 && t4.previewBox && (o3.classList.add("jodit_active"), t4.previewBox.innerHTML = t4.list[e4], o3.focus());
              }), t4.currentIndex = e4;
            }, t4.showDialog = function() {
              2 > t4.list.length || (t4.dialog || t4.createDialog(), t4.listBox && (t4.listBox.innerHTML = ""), t4.previewBox && (t4.previewBox.innerHTML = ""), t4.list.forEach(function(e4, o3) {
                var n3 = t4.j.c.element("a");
                n3.textContent = o3 + 1 + ". " + e4.replace((0, r2.SPACE_REG_EXP)(), ""), t4.j.e.on(n3, "keydown", t4.onKeyDown), (0, s.attr)(n3, "href", "#"), (0, s.attr)(n3, "data-index", o3.toString()), (0, s.attr)(n3, "tab-index", "-1"), t4.listBox && t4.listBox.appendChild(n3);
              }), t4.dialog && t4.dialog.open(), t4.j.async.setTimeout(function() {
                t4.selectIndex(0);
              }, 100));
            }, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.createDialog = function() {
            var e4 = this;
            this.dialog = this.j.dlg();
            var t4 = (0, l.Button)(this.j, "paste", "Paste", "primary");
            t4.onAction(this.paste);
            var o3 = (0, l.Button)(this.j, "", "Cancel");
            o3.onAction(this.dialog.close), this.container = this.j.c.div(), this.container.classList.add("jodit-paste-storage"), this.listBox = this.j.c.div(), this.previewBox = this.j.c.div(), this.container.appendChild(this.listBox), this.container.appendChild(this.previewBox), this.dialog.setHeader(this.j.i18n("Choose Content to Paste")), this.dialog.setContent(this.container), this.dialog.setFooter([t4, o3]), this.j.e.on(this.listBox, "click dblclick", function(t5) {
              var o4 = t5.target;
              return a.Dom.isTag(o4, "a") && o4.hasAttribute("data-index") && e4.selectIndex(parseInt((0, s.attr)(o4, "-index") || "0", 10)), "dblclick" === t5.type && e4.paste(), false;
            });
          }, t3.prototype.afterInit = function() {
            var e4 = this;
            this.j.e.off("afterCopy.paste-storage").on("pasteStorageList.paste-storage", function() {
              return e4.list.length;
            }).on("afterCopy.paste-storage", function(t4) {
              -1 !== e4.list.indexOf(t4) && e4.list.splice(e4.list.indexOf(t4), 1), e4.list.unshift(t4), e4.list.length > 5 && (e4.list.length = 5);
            }), this.j.registerCommand("showPasteStorage", { exec: this.showDialog, hotkeys: ["ctrl+shift+v", "cmd+shift+v"] });
          }, t3.prototype.beforeDestruct = function() {
            this.dialog && this.dialog.destruct(), this.j.e.off(".paste-storage"), a.Dom.safeRemove(this.previewBox), a.Dom.safeRemove(this.listBox), a.Dom.safeRemove(this.container), this.container = null, this.listBox = null, this.previewBox = null, this.dialog = null, this.list = [];
          }, t3;
        }(i.Plugin);
        t2.pasteStorage = u, c.pluginSystem.add("pasteStorage", u);
      }, 24703: function(e2, t2, o2) {
        var n2;
        Object.defineProperty(t2, "__esModule", { value: true });
        var r2 = o2(20255), i = o2(86893), a = o2(93166), s = o2(64280);
        a.Config.prototype.askBeforePasteHTML = true, a.Config.prototype.processPasteHTML = true, a.Config.prototype.pasteHTMLActionList = [{ value: i.INSERT_AS_HTML, text: "Keep" }, { value: i.INSERT_AS_TEXT, text: "Insert as Text" }, { value: i.INSERT_ONLY_TEXT, text: "Insert only Text" }], a.Config.prototype.memorizeChoiceWhenPasteFragment = false, a.Config.prototype.nl2brInPlainText = true;
        var l = "pasteStorage";
        a.Config.prototype.controls.paste = { tooltip: "Paste from clipboard", exec: function(e3, t3, o3) {
          var n3 = o3.control;
          return r2.__awaiter(this, void 0, void 0, function() {
            var t4, o4, a2, c, u;
            return r2.__generator(this, function(r3) {
              switch (r3.label) {
                case 0:
                  if (n3.name === l) return e3.execCommand("showPasteStorage"), [2];
                  if (e3.s.focus(), t4 = "", o4 = true, !navigator.clipboard) return [3, 11];
                  r3.label = 1;
                case 1:
                  return r3.trys.push([1, 6, , 7]), [4, navigator.clipboard.read()];
                case 2:
                  return (a2 = r3.sent()) && a2.length ? [4, a2[0].getType(i.TEXT_PLAIN)] : [3, 5];
                case 3:
                  return c = r3.sent(), [4, new Response(c).text()];
                case 4:
                  t4 = r3.sent(), r3.label = 5;
                case 5:
                  return o4 = false, [3, 7];
                case 6:
                  return r3.sent(), [3, 7];
                case 7:
                  if (!o4) return [3, 11];
                  r3.label = 8;
                case 8:
                  return r3.trys.push([8, 10, , 11]), [4, navigator.clipboard.readText()];
                case 9:
                  return t4 = r3.sent(), o4 = false, [3, 11];
                case 10:
                  return r3.sent(), [3, 11];
                case 11:
                  return o4 && (t4 = e3.buffer.get(i.CLIPBOARD_ID) || "", o4 = 0 === t4.length), u = e3.value, o4 ? (e3.ed.execCommand("paste"), !(o4 = u === e3.value) && e3.e.fire("afterPaste")) : t4.length ? ((0, s.pasteInsertHtml)(null, e3, t4), e3.e.fire("afterPaste")) : o4 && e3.alert("Your browser doesn't support direct access to the clipboard.", function() {
                    e3.s.focus();
                  }), [2];
              }
            });
          });
        }, list: (n2 = {}, n2[l] = "Paste Storage", n2), isChildDisabled: function(e3) {
          return 2 > e3.e.fire("pasteStorageList");
        } };
      }, 64280: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.askInsertTypeDialog = t2.getAllTypes = t2.pasteInsertHtml = void 0;
        var n2 = o2(20255), r2 = o2(10172), i = o2(24263), a = o2(86893), s = o2(96031);
        t2.pasteInsertHtml = function(e3, t3, o3) {
          if (!t3.isInDestruct) {
            (function(e4) {
              return Boolean(e4 && "drop" === e4.type);
            })(e3) && t3.s.insertCursorAtPoint(e3.clientX, e3.clientY);
            var n3 = t3.e.fire("beforePasteInsert", o3);
            !(0, r2.isVoid)(n3) && ((0, r2.isString)(n3) || (0, r2.isNumber)(n3) || i.Dom.isNode(n3)) && (o3 = n3), (0, r2.isString)(o3) && (o3 = function(e4) {
              var t4 = (e4 = e4.replace(/<meta[^>]+?>/g, "")).search(/<!--StartFragment-->/i);
              -1 !== t4 && (e4 = e4.substring(t4 + 20));
              var o4 = e4.search(/<!--EndFragment-->/i);
              return -1 !== o4 && (e4 = e4.substring(0, o4)), e4;
            }(o3)), t3.s.insertHTML(o3);
          }
        }, t2.getAllTypes = function(e3) {
          var t3 = e3.types, o3 = "";
          if ((0, r2.isArray)(t3) || "[object DOMStringList]" === {}.toString.call(t3)) for (var n3 = 0; t3.length > n3; n3 += 1) o3 += t3[n3] + ";";
          else o3 = (t3 || a.TEXT_PLAIN).toString() + ";";
          return o3;
        }, t2.askInsertTypeDialog = function(e3, t3, o3, r3, i2) {
          if (false !== e3.e.fire("beforeOpenPasteDialog", t3, o3, r3, i2)) {
            var a2 = e3.confirm('<div style="word-break: normal; white-space: normal">'.concat(e3.i18n(t3), "</div>"), e3.i18n(o3)), l = i2.map(function(t4) {
              var o4 = t4.text, n3 = t4.value;
              return (0, s.Button)(e3, { text: o4, name: o4.toLowerCase(), tabIndex: 0 }).onAction(function() {
                a2.close(), r3(n3);
              });
            });
            a2.e.one(a2, "afterClose", function() {
              e3.s.isFocused() || e3.s.focus();
            });
            var c = (0, s.Button)(e3, { text: "Cancel", tabIndex: 0 }).onAction(function() {
              a2.close();
            });
            return a2.setFooter(n2.__spreadArray(n2.__spreadArray([], n2.__read(l), false), [c], false)), l[0].focus(), l[0].state.variant = "primary", e3.e.fire("afterOpenPasteDialog", a2, t3, o3, r3, i2), a2;
          }
        };
      }, 19483: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.paste = void 0;
        var n2 = o2(20255), r2 = o2(85605), i = o2(86893), a = o2(24263), s = o2(43441), l = o2(40332), c = o2(17332), u = o2(64280);
        o2(24703);
        var d = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.pasteStack = new l.LimitedStack(20), t4._isDialogOpened = false, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this;
            e4.e.on("paste.paste", this.onPaste).on("pasteStack.paste", function(e5) {
              return t4.pasteStack.push(e5);
            }), e4.o.nl2brInPlainText && this.j.e.on("processPaste.paste", this.onProcessPasteReplaceNl2Br);
          }, t3.prototype.beforeDestruct = function(e4) {
            e4.e.off("paste.paste", this.onPaste).off("processPaste.paste", this.onProcessPasteReplaceNl2Br).off(".paste");
          }, t3.prototype.onPaste = function(e4) {
            try {
              if (false === this.customPasteProcess(e4) || false === this.j.e.fire("beforePaste", e4)) return e4.preventDefault(), false;
              this.defaultPasteProcess(e4);
            } finally {
              this.j.e.fire("afterPaste", e4);
            }
          }, t3.prototype.customPasteProcess = function(e4) {
            if (this.j.o.processPasteHTML) {
              var t4, o3 = (0, l.getDataTransfer)(e4), n3 = { html: null == o3 ? void 0 : o3.getData(i.TEXT_HTML), plain: null == o3 ? void 0 : o3.getData(i.TEXT_PLAIN), rtf: null == o3 ? void 0 : o3.getData(i.TEXT_RTF) };
              for (t4 in n3) {
                var r3 = n3[t4];
                if ((0, l.isHTML)(r3) && (this.j.e.fire("processHTML", e4, r3, n3) || this.processHTML(e4, r3))) return false;
              }
            }
          }, t3.prototype.defaultPasteProcess = function(e4) {
            var t4 = (0, l.getDataTransfer)(e4), o3 = (null == t4 ? void 0 : t4.getData(i.TEXT_HTML)) || (null == t4 ? void 0 : t4.getData(i.TEXT_PLAIN));
            if (t4 && o3 && "" !== (0, l.trim)(o3)) {
              var n3 = this.j.e.fire("processPaste", e4, o3, (0, u.getAllTypes)(t4));
              void 0 !== n3 && (o3 = n3), ((0, l.isString)(o3) || a.Dom.isNode(o3)) && this.insertByType(e4, o3, this.j.o.defaultActionOnPaste), e4.preventDefault(), e4.stopPropagation();
            }
          }, t3.prototype.processHTML = function(e4, t4) {
            var o3 = this;
            if (this.j.o.askBeforePasteHTML) {
              if (this.j.o.memorizeChoiceWhenPasteFragment) {
                var n3 = this.pasteStack.find(function(e5) {
                  return e5.html === t4;
                });
                if (n3) return this.insertByType(e4, t4, n3.action || this.j.o.defaultActionOnPaste), true;
              }
              if (this._isDialogOpened) return true;
              var r3 = (0, u.askInsertTypeDialog)(this.j, "Your code is similar to HTML. Keep as HTML?", "Paste as HTML", function(n4) {
                o3._isDialogOpened = false, o3.insertByType(e4, t4, n4);
              }, this.j.o.pasteHTMLActionList);
              return r3 && (this._isDialogOpened = true, r3.e.on("beforeClose", function() {
                o3._isDialogOpened = false;
              })), true;
            }
            return false;
          }, t3.prototype.insertByType = function(e4, t4, o3) {
            if (this.pasteStack.push({ html: t4, action: o3 }), (0, l.isString)(t4)) switch (this.j.buffer.set(i.CLIPBOARD_ID, t4), o3) {
              case i.INSERT_CLEAR_HTML:
                t4 = (0, l.cleanFromWord)(t4);
                break;
              case i.INSERT_ONLY_TEXT:
                t4 = (0, l.stripTags)(t4);
                break;
              case i.INSERT_AS_TEXT:
                t4 = (0, l.htmlspecialchars)(t4);
            }
            (0, u.pasteInsertHtml)(e4, this.j, t4);
          }, t3.prototype.onProcessPasteReplaceNl2Br = function(e4, t4, o3) {
            if (o3 === i.TEXT_PLAIN + ";" && !(0, l.isHTML)(t4)) return (0, l.nl2br)(t4);
          }, n2.__decorate([s.autobind], t3.prototype, "onPaste", null), n2.__decorate([s.autobind], t3.prototype, "onProcessPasteReplaceNl2Br", null), t3;
        }(r2.Plugin);
        t2.paste = d, c.pluginSystem.add("paste", d);
      }, 76952: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166);
        n2.Config.prototype.showPlaceholder = true, n2.Config.prototype.placeholder = "Type something", n2.Config.prototype.useInputsPlaceholder = true;
      }, 83211: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.placeholder = t2.isEditorEmpty = void 0;
        var n2 = o2(20255);
        o2(51629);
        var r2 = o2(86893), i = o2(67309), a = o2(26911), s = o2(37204), l = o2(24263), c = o2(85605), u = o2(86893), d = o2(43441), p = o2(17332);
        function f(e3) {
          var t3;
          if (!e3.firstChild) return true;
          var o3 = e3.firstChild;
          if (u.INSEPARABLE_TAGS.has(null === (t3 = o3.nodeName) || void 0 === t3 ? void 0 : t3.toLowerCase()) || /^(TABLE)$/i.test(o3.nodeName)) return false;
          var n3 = l.Dom.next(o3, function(e4) {
            return e4 && !l.Dom.isEmptyTextNode(e4);
          }, e3);
          return l.Dom.isText(o3) && !n3 ? l.Dom.isEmptyTextNode(o3) : !n3 && l.Dom.each(o3, function(e4) {
            return !l.Dom.isTag(e4, ["ul", "li", "ol"]) && (l.Dom.isEmpty(e4) || l.Dom.isTag(e4, "br"));
          });
        }
        o2(76952), t2.isEditorEmpty = f;
        var h = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.addNativeListeners = function() {
              t4.j.e.off(t4.j.editor, "input.placeholder keydown.placeholder").on(t4.j.editor, "input.placeholder keydown.placeholder", t4.toggle);
            }, t4.addEvents = function() {
              var e4 = t4.j;
              e4.o.useInputsPlaceholder && e4.element.hasAttribute("placeholder") && (t4.placeholderElm.innerHTML = (0, i.attr)(e4.element, "placeholder") || ""), e4.e.fire("placeholder", t4.placeholderElm.innerHTML), e4.e.off(".placeholder").on("changePlace.placeholder", t4.addNativeListeners).on("change.placeholder focus.placeholder keyup.placeholder mouseup.placeholder keydown.placeholder mousedown.placeholder afterSetMode.placeholder changePlace.placeholder", t4.toggle).on(window, "load", t4.toggle), t4.addNativeListeners(), t4.toggle();
            }, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this;
            e4.o.showPlaceholder && (this.placeholderElm = e4.c.fromHTML('<span data-ref="placeholder" style="display: none;" class="jodit-placeholder">'.concat(e4.i18n(e4.o.placeholder), "</span>")), "rtl" === e4.o.direction && (this.placeholderElm.style.right = "0px", this.placeholderElm.style.direction = "rtl"), e4.e.on("readonly", function(e5) {
              e5 ? t4.hide() : t4.toggle();
            }).on("changePlace", this.addEvents), this.addEvents());
          }, t3.prototype.show = function() {
            var e4 = this.j;
            if (!e4.o.readonly) {
              var t4 = 0, o3 = 0, n3 = e4.s.current(), r3 = n3 && l.Dom.closest(n3, l.Dom.isBlock, e4.editor) || e4.editor, i2 = e4.ew.getComputedStyle(r3), c2 = e4.ew.getComputedStyle(e4.editor);
              e4.workplace.appendChild(this.placeholderElm);
              var u2 = e4.editor.firstChild;
              if (l.Dom.isElement(u2) && !(0, s.isMarker)(u2)) {
                var d2 = e4.ew.getComputedStyle(u2);
                t4 = parseInt(d2.getPropertyValue("margin-top"), 10), o3 = parseInt(d2.getPropertyValue("margin-left"), 10), this.placeholderElm.style.fontSize = parseInt(d2.getPropertyValue("font-size"), 10) + "px", this.placeholderElm.style.lineHeight = d2.getPropertyValue("line-height");
              } else this.placeholderElm.style.fontSize = parseInt(i2.getPropertyValue("font-size"), 10) + "px", this.placeholderElm.style.lineHeight = i2.getPropertyValue("line-height");
              (0, a.css)(this.placeholderElm, { display: "block", textAlign: i2.getPropertyValue("text-align"), paddingTop: parseInt(c2.paddingTop, 10) + "px", paddingLeft: parseInt(c2.paddingLeft, 10) + "px", paddingRight: parseInt(c2.paddingRight, 10) + "px", marginTop: Math.max(parseInt(i2.getPropertyValue("margin-top"), 10), t4), marginLeft: Math.max(parseInt(i2.getPropertyValue("margin-left"), 10), o3) });
            }
          }, t3.prototype.hide = function() {
            l.Dom.safeRemove(this.placeholderElm);
          }, t3.prototype.toggle = function() {
            var e4 = this.j;
            e4.editor && !e4.isInDestruct && (e4.getRealMode() === r2.MODE_WYSIWYG && f(e4.editor) ? this.show() : this.hide());
          }, t3.prototype.beforeDestruct = function(e4) {
            this.hide(), e4.e.off(".placeholder").off(window, "load", this.toggle);
          }, n2.__decorate([(0, d.debounce)(function(e4) {
            return e4.defaultTimeout / 10;
          }, true)], t3.prototype, "toggle", null), t3;
        }(c.Plugin);
        t2.placeholder = h, p.pluginSystem.add("placeholder", h);
      }, 88297: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.poweredByJodit = void 0;
        var n2 = o2(17332);
        function r2(e3) {
          var t3 = e3.o;
          t3.hidePoweredByJodit || t3.inline || !(t3.showCharsCounter || t3.showWordsCounter || t3.showXPathInStatusbar) || e3.hookStatus("ready", function() {
            e3.statusbar.append(e3.create.fromHTML('<a\n						tabindex="-1"\n						style="text-transform: uppercase"\n						class="jodit-status-bar-link"\n						target="_blank"\n						href="https://xdsoft.net/jodit/">\n							Powered by Jodit\n						</a>'), true);
          });
        }
        t2.poweredByJodit = r2, n2.pluginSystem.add("poweredByJodit", r2);
      }, 72930: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.preview = void 0, o2(54860);
        var n2 = o2(93166), r2 = o2(86893), i = o2(21498), a = o2(17332);
        function s(e3) {
          e3.registerButton({ name: "preview" }), e3.registerCommand("preview", function(t3, o3, n3) {
            var r3 = e3.dlg();
            r3.setSize(1024, 600).open("", e3.i18n("Preview")).setModal(true), (0, i.previewBox)(e3, n3, "px", r3.getElm("content"));
          });
        }
        n2.Config.prototype.controls.preview = { icon: "eye", command: "preview", mode: r2.MODE_SOURCE + r2.MODE_WYSIWYG, tooltip: "Preview" }, t2.preview = s, a.pluginSystem.add("preview", s);
      }, 20137: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.generateCriticalCSS = void 0;
        var n2 = o2(20255), r2 = o2(1853);
        t2.generateCriticalCSS = function(e3) {
          var t3 = function(e4, t4) {
            return void 0 === t4 && (t4 = e4.ownerDocument.styleSheets), (0, r2.toArray)(t4).map(function(e5) {
              try {
                return (0, r2.toArray)(e5.cssRules);
              } catch (e6) {
              }
              return [];
            }).flat().filter(function(t5) {
              try {
                return Boolean(t5 && e4.matches(t5.selectorText));
              } catch (e5) {
              }
              return false;
            });
          }, o3 = function() {
            function o4(o5, r3, i) {
              var a = this;
              this.css = {};
              var s = i || {}, l = function(t4) {
                var o6 = t4.selectorText.split(",").map(function(e4) {
                  return e4.trim();
                }).sort().join(",");
                false === Boolean(a.css[o6]) && (a.css[o6] = {});
                for (var r4 = t4.style.cssText.split(/;(?![A-Za-z0-9])/), i2 = 0; r4.length > i2; i2++) if (r4[i2]) {
                  var s2 = r4[i2].split(":");
                  s2[0] = s2[0].trim(), s2[1] = s2[1].trim(), a.css[o6][s2[0]] = s2[1].replace(/var\(([^)]+)\)/g, function(t5, o7) {
                    var r5 = n2.__read(o7.split(","), 2), i3 = r5[0], a2 = r5[1];
                    return (e3.ew.getComputedStyle(e3.editor).getPropertyValue(i3.trim()) || a2 || t5).trim();
                  });
                }
              };
              !function() {
                for (var n3 = o5.innerHeight, i2 = r3.createTreeWalker(e3.editor, NodeFilter.SHOW_ELEMENT, function() {
                  return NodeFilter.FILTER_ACCEPT;
                }); i2.nextNode(); ) {
                  var a2 = i2.currentNode;
                  if (n3 > a2.getBoundingClientRect().top || s.scanFullPage) {
                    var c = t3(a2);
                    if (c) for (var u = 0; c.length > u; u++) l(c[u]);
                  }
                }
              }();
            }
            return o4.prototype.generateCSS = function() {
              var e4 = "";
              for (var t4 in this.css) if (!/:not\(/.test(t4)) {
                for (var o5 in e4 += t4 + " { ", this.css[t4]) e4 += o5 + ": " + this.css[t4][o5] + "; ";
                e4 += "}\n";
              }
              return e4;
            }, o4;
          }();
          try {
            return new o3(e3.ew, e3.ed, { scanFullPage: true }).generateCSS();
          } catch (e4) {
          }
          return "";
        };
      }, 51197: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.print = void 0;
        var n2 = o2(93166), r2 = o2(17332), i = o2(64968), a = o2(93351), s = o2(86893), l = o2(17332), c = o2(77904), u = o2(20137), d = o2(21498);
        function p(e3) {
          e3.registerButton({ name: "print" });
        }
        c.Icon.set("print", o2(22860)), n2.Config.prototype.controls.print = { exec: function(e3) {
          var t3 = e3.create.element("iframe");
          Object.assign(t3.style, { position: "fixed", right: 0, bottom: 0, width: 0, height: 0, border: 0 }), (0, r2.getContainer)(e3, n2.Config).appendChild(t3);
          var o3 = function() {
            e3.e.off(e3.ow, "mousemove", o3), i.Dom.safeRemove(t3);
          }, s2 = t3.contentWindow;
          if (s2) {
            e3.e.on(s2, "onbeforeunload onafterprint", o3).on(e3.ow, "mousemove", o3), e3.o.iframe ? (e3.e.fire("generateDocumentStructure.iframe", s2.document, e3), s2.document.body.innerHTML = e3.value) : (s2.document.write('<!doctype html><html lang="' + (0, a.defaultLanguage)(e3.o.language) + '"><head><title></title></head><style>' + (0, u.generateCriticalCSS)(e3) + "</style><body></body></html>"), s2.document.close(), (0, d.previewBox)(e3, void 0, "px", s2.document.body));
            var l2 = s2.document.createElement("style");
            l2.innerHTML = "@media print {\n					body {\n							-webkit-print-color-adjust: exact;\n					}\n			}", s2.document.head.appendChild(l2), s2.focus(), s2.print();
          }
        }, mode: s.MODE_SOURCE + s.MODE_WYSIWYG, tooltip: "Print" }, t2.print = p, l.pluginSystem.add("print", p);
      }, 2327: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.redoUndo = void 0;
        var n2 = o2(20255), r2 = o2(93166), i = o2(86893), a = o2(85605), s = o2(17332);
        o2(77904).Icon.set("redo", o2(95600)).set("undo", o2(76214)), r2.Config.prototype.controls.redo = { mode: i.MODE_SPLIT, isDisabled: function(e3) {
          return !e3.history.canRedo();
        }, tooltip: "Redo" }, r2.Config.prototype.controls.undo = { mode: i.MODE_SPLIT, isDisabled: function(e3) {
          return !e3.history.canUndo();
        }, tooltip: "Undo" };
        var l = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.buttons = [{ name: "undo", group: "history" }, { name: "redo", group: "history" }], t4;
          }
          return n2.__extends(t3, e3), t3.prototype.beforeDestruct = function() {
          }, t3.prototype.afterInit = function(e4) {
            var t4 = function(t5) {
              return e4.history[t5](), false;
            };
            e4.registerCommand("redo", { exec: t4, hotkeys: ["ctrl+y", "ctrl+shift+z", "cmd+y", "cmd+shift+z"] }), e4.registerCommand("undo", { exec: t4, hotkeys: ["ctrl+z", "cmd+z"] });
          }, t3;
        }(a.Plugin);
        t2.redoUndo = l, s.pluginSystem.add("redoUndo", l);
      }, 52444: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.tableAllowCellResize = true;
      }, 47608: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.resizeCells = void 0;
        var n2 = o2(20255);
        o2(47818);
        var r2 = o2(86893), i = o2(87837), a = o2(40332), s = o2(43441), l = o2(24263), c = o2(17332);
        o2(52444);
        var u = "table_processor_observer-resize", d = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.selectMode = false, t4.resizeDelta = 0, t4.createResizeHandle = function() {
              t4.resizeHandler || (t4.resizeHandler = t4.j.c.div("jodit-table-resizer"), t4.j.e.on(t4.resizeHandler, "mousedown.table touchstart.table", t4.onHandleMouseDown).on(t4.resizeHandler, "mouseenter.table", function() {
                t4.j.async.clearTimeout(t4.hideTimeout);
              }));
            }, t4.hideTimeout = 0, t4.drag = false, t4.minX = 0, t4.maxX = 0, t4.startX = 0, t4;
          }
          return n2.__extends(t3, e3), Object.defineProperty(t3.prototype, "module", { get: function() {
            return this.j.getInstance("Table", this.j.o);
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "isRTL", { get: function() {
            return "rtl" === this.j.o.direction;
          }, enumerable: false, configurable: true }), t3.prototype.showResizeHandle = function() {
            this.j.async.clearTimeout(this.hideTimeout), this.j.workplace.appendChild(this.resizeHandler);
          }, t3.prototype.hideResizeHandle = function() {
            var e4 = this;
            this.hideTimeout = this.j.async.setTimeout(function() {
              l.Dom.safeRemove(e4.resizeHandler);
            }, { timeout: this.j.defaultTimeout, label: "hideResizer" });
          }, t3.prototype.onHandleMouseDown = function(e4) {
            var t4 = this;
            if (!this.j.isLocked) {
              this.drag = true, this.j.e.on(this.j.ow, "mouseup.resize-cells touchend.resize-cells", this.onMouseUp).on(this.j.ew, "mousemove.table touchmove.table", this.onMouseMove), this.startX = e4.clientX, this.j.lock(u), this.resizeHandler.classList.add("jodit-table-resizer_moved");
              var o3, n3 = this.workTable.getBoundingClientRect();
              if (this.minX = 0, this.maxX = 1e6, null != this.wholeTable) n3 = this.workTable.parentNode.getBoundingClientRect(), this.minX = n3.left, this.maxX = this.minX + n3.width;
              else {
                var a2 = i.Table.formalCoordinate(this.workTable, this.workCell, true);
                i.Table.formalMatrix(this.workTable, function(e5, n4, i2) {
                  a2[1] === i2 && (o3 = e5.getBoundingClientRect(), t4.minX = Math.max(o3.left + r2.NEARBY / 2, t4.minX)), a2[1] + (t4.isRTL ? -1 : 1) === i2 && (o3 = e5.getBoundingClientRect(), t4.maxX = Math.min(o3.left + o3.width - r2.NEARBY / 2, t4.maxX));
                });
              }
              return false;
            }
          }, t3.prototype.onMouseMove = function(e4) {
            if (this.drag) {
              this.j.e.fire("closeAllPopups");
              var t4 = e4.clientX, o3 = (0, a.offset)(this.resizeHandler.parentNode || this.j.od.documentElement, this.j, this.j.od, true);
              this.minX > t4 && (t4 = this.minX), t4 > this.maxX && (t4 = this.maxX), this.resizeDelta = t4 - this.startX + (this.j.o.iframe ? o3.left : 0), this.resizeHandler.style.left = t4 - (this.j.o.iframe ? 0 : o3.left) + "px";
              var n3 = this.j.s.sel;
              n3 && n3.removeAllRanges();
            }
          }, t3.prototype.onMouseUp = function(e4) {
            (this.selectMode || this.drag) && (this.selectMode = false, this.j.unlock()), this.resizeHandler && this.drag && (this.drag = false, this.j.e.off(this.j.ew, "mousemove.table touchmove.table", this.onMouseMove), this.resizeHandler.classList.remove("jodit-table-resizer_moved"), this.startX !== e4.clientX && (null == this.wholeTable ? this.resizeColumns() : this.resizeTable()), this.j.synchronizeValues(), this.j.s.focus());
          }, t3.prototype.resizeColumns = function() {
            var e4 = this.resizeDelta, t4 = [];
            i.Table.setColumnWidthByDelta(this.workTable, i.Table.formalCoordinate(this.workTable, this.workCell, true)[1], e4, true, t4);
            var o3 = (0, a.call)(this.isRTL ? l.Dom.prev : l.Dom.next, this.workCell, l.Dom.isCell, this.workCell.parentNode);
            i.Table.setColumnWidthByDelta(this.workTable, i.Table.formalCoordinate(this.workTable, o3)[1], -e4, false, t4);
          }, t3.prototype.resizeTable = function() {
            var e4 = this.resizeDelta * (this.isRTL ? -1 : 1), t4 = this.workTable.offsetWidth, o3 = (0, a.getContentWidth)(this.workTable.parentNode, this.j.ew), n3 = !this.wholeTable;
            if (this.isRTL ? !n3 : n3) this.workTable.style.width = (t4 + e4) / o3 * 100 + "%";
            else {
              var r3 = this.isRTL ? "marginRight" : "marginLeft", i2 = parseInt(this.j.ew.getComputedStyle(this.workTable)[r3] || "0", 10);
              this.workTable.style.width = (t4 - e4) / o3 * 100 + "%", this.workTable.style[r3] = (i2 + e4) / o3 * 100 + "%";
            }
          }, t3.prototype.setWorkCell = function(e4, t4) {
            void 0 === t4 && (t4 = null), this.wholeTable = t4, this.workCell = e4, this.workTable = l.Dom.up(e4, function(e5) {
              return l.Dom.isTag(e5, "table");
            }, this.j.editor);
          }, t3.prototype.calcHandlePosition = function(e4, t4, o3, n3) {
            void 0 === o3 && (o3 = 0), void 0 === n3 && (n3 = 0);
            var i2 = (0, a.offset)(t4, this.j, this.j.ed);
            if (o3 > r2.NEARBY && i2.width - r2.NEARBY > o3) this.hideResizeHandle();
            else {
              var s2 = (0, a.offset)(this.j.workplace, this.j, this.j.od, true), c2 = (0, a.offset)(e4, this.j, this.j.ed);
              if (this.resizeHandler.style.left = (o3 > r2.NEARBY ? i2.left + i2.width : i2.left) - s2.left + n3 + "px", Object.assign(this.resizeHandler.style, { height: c2.height + "px", top: c2.top - s2.top + "px" }), this.showResizeHandle(), o3 > r2.NEARBY) {
                var u2 = (0, a.call)(this.isRTL ? l.Dom.prev : l.Dom.next, t4, l.Dom.isCell, t4.parentNode);
                this.setWorkCell(t4, !!u2 && null);
              } else {
                var d2 = (0, a.call)(this.isRTL ? l.Dom.next : l.Dom.prev, t4, l.Dom.isCell, t4.parentNode);
                this.setWorkCell(d2 || t4, !d2 || null);
              }
            }
          }, t3.prototype.afterInit = function(e4) {
            var t4 = this;
            e4.o.tableAllowCellResize && e4.e.off(this.j.ow, ".resize-cells").off(".resize-cells").on("change.resize-cells afterCommand.resize-cells afterSetMode.resize-cells", function() {
              (0, a.$$)("table", e4.editor).forEach(t4.observe);
            }).on(this.j.ow, "scroll.resize-cells", function() {
              if (t4.drag) {
                var o3 = l.Dom.up(t4.workCell, function(e5) {
                  return l.Dom.isTag(e5, "table");
                }, e4.editor);
                if (o3) {
                  var n3 = o3.getBoundingClientRect();
                  t4.resizeHandler.style.top = n3.top + "px";
                }
              }
            }).on("beforeSetMode.resize-cells", function() {
              t4.module.getAllSelectedCells().forEach(function(o3) {
                t4.module.removeSelection(o3), i.Table.normalizeTable(l.Dom.closest(o3, "table", e4.editor));
              });
            });
          }, t3.prototype.observe = function(e4) {
            var t4 = this;
            (0, a.dataBind)(e4, u) || ((0, a.dataBind)(e4, u, true), this.j.e.on(e4, "mouseleave.resize-cells", function(e5) {
              t4.resizeHandler && t4.resizeHandler !== e5.relatedTarget && t4.hideResizeHandle();
            }).on(e4, "mousemove.resize-cells touchmove.resize-cells", this.j.async.throttle(function(o3) {
              if (!t4.j.isLocked) {
                var n3 = l.Dom.up(o3.target, l.Dom.isCell, e4);
                n3 && t4.calcHandlePosition(e4, n3, o3.offsetX);
              }
            }, { timeout: this.j.defaultTimeout })), this.createResizeHandle());
          }, t3.prototype.beforeDestruct = function(e4) {
            e4.events && (e4.e.off(this.j.ow, ".resize-cells"), e4.e.off(".resize-cells"));
          }, n2.__decorate([s.autobind], t3.prototype, "onHandleMouseDown", null), n2.__decorate([s.autobind], t3.prototype, "onMouseMove", null), n2.__decorate([s.autobind], t3.prototype, "onMouseUp", null), n2.__decorate([s.autobind], t3.prototype, "observe", null), t3;
        }(i.Plugin);
        t2.resizeCells = d, c.pluginSystem.add("resizeCells", d);
      }, 91637: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166);
        n2.Config.prototype.allowResizeX = false, n2.Config.prototype.allowResizeY = true;
      }, 90523: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.resizeHandler = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(64968), a = o2(43441), s = o2(2074), l = o2(17332);
        o2(91637);
        var c = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.isResized = false, t4.start = { x: 0, y: 0, w: 0, h: 0 }, t4.handle = t4.j.c.div("jodit-editor__resize", s.Icon.get("resize_handler")), t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this, o3 = e4.o, n3 = o3.height, r3 = o3.width, i2 = e4.o.allowResizeY;
            "auto" === n3 && "auto" !== r3 && (i2 = false), "auto" === n3 && "auto" === r3 || !o3.allowResizeX && !i2 || (e4.statusbar.setMod("resize-handle", true), e4.e.on("toggleFullSize.resizeHandler", function() {
              t4.handle.style.display = e4.isFullSize ? "none" : "block";
            }).on(this.handle, "mousedown touchstart", this.onHandleResizeStart).on(e4.ow, "mouseup touchend", this.onHandleResizeEnd), e4.container.appendChild(this.handle));
          }, t3.prototype.onHandleResizeStart = function(e4) {
            this.isResized = true, this.start.x = e4.clientX, this.start.y = e4.clientY, this.start.w = this.j.container.offsetWidth, this.start.h = this.j.container.offsetHeight, this.j.lock(), this.j.e.on(this.j.ow, "mousemove touchmove", this.onHandleResize), e4.preventDefault();
          }, t3.prototype.onHandleResize = function(e4) {
            this.isResized && (this.j.o.allowResizeY && this.j.e.fire("setHeight", this.start.h + e4.clientY - this.start.y), this.j.o.allowResizeX && this.j.e.fire("setWidth", this.start.w + e4.clientX - this.start.x), this.j.e.fire("resize"));
          }, t3.prototype.onHandleResizeEnd = function() {
            this.isResized && (this.isResized = false, this.j.e.off(this.j.ow, "mousemove touchmove", this.onHandleResize), this.j.unlock());
          }, t3.prototype.beforeDestruct = function() {
            i.Dom.safeRemove(this.handle), this.j.e.off(this.j.ow, "mouseup touchsend", this.onHandleResizeEnd);
          }, t3.requires = ["size"], n2.__decorate([a.autobind], t3);
        }(r2.Plugin);
        t2.resizeHandler = c, l.pluginSystem.add("resizeHandler", c);
      }, 36560: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166);
        n2.Config.prototype.allowResizeTags = ["img", "iframe", "table", "jodit"], n2.Config.prototype.resizer = { showSize: true, hideSizeTimeout: 1e3, forImageChangeAttributes: true, min_width: 10, min_height: 10, useAspectRatio: ["img"] };
      }, 69257: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.resizer = void 0;
        var n2 = o2(20255);
        o2(6316);
        var r2 = o2(86893), i = o2(86893), a = o2(24263), s = o2(40332), l = o2(85605), c = o2(17332), u = o2(43441), d = o2(17332);
        o2(36560);
        var p = "__jodit-resizer_binded", f = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.LOCK_KEY = "resizer", t4.element = null, t4.isResizeMode = false, t4.isShown = false, t4.startX = 0, t4.startY = 0, t4.width = 0, t4.height = 0, t4.ratio = 0, t4.rect = t4.j.c.fromHTML('<div title="'.concat(t4.j.i18n("Press Alt for custom resizing"), '" class="jodit-resizer">\n				<div class="jodit-resizer__top-left"></div>\n				<div class="jodit-resizer__top-right"></div>\n				<div class="jodit-resizer__bottom-right"></div>\n				<div class="jodit-resizer__bottom-left"></div>\n				<span>100x100</span>\n			</div>')), t4.sizeViewer = t4.rect.getElementsByTagName("span")[0], t4.pointerX = 0, t4.pointerY = 0, t4.isAltMode = false, t4.onClickElement = function(e4) {
              t4.isResizeMode || t4.element === e4 && t4.isShown || (t4.element = e4, t4.show(), a.Dom.isTag(t4.element, "img") && !t4.element.complete && t4.j.e.one(t4.element, "load", t4.updateSize));
            }, t4.updateSize = function() {
              if (!t4.isInDestruct && t4.isShown && t4.element && t4.rect) {
                var e4 = t4.getWorkplacePosition(), o3 = (0, s.offset)(t4.element, t4.j, t4.j.ed), n3 = parseInt(t4.rect.style.left || "0", 10), r3 = parseInt(t4.rect.style.top || "0", 10), i2 = o3.top - e4.top, a2 = o3.left - e4.left;
                r3 === i2 && n3 === a2 && t4.rect.offsetWidth === t4.element.offsetWidth && t4.rect.offsetHeight === t4.element.offsetHeight || ((0, s.css)(t4.rect, { top: i2, left: a2, width: t4.element.offsetWidth, height: t4.element.offsetHeight }), t4.j.events && (t4.j.e.fire(t4.element, "changesize"), isNaN(n3) || t4.j.e.fire("resize")));
              }
            }, t4.hideSizeViewer = function() {
              t4.sizeViewer.style.opacity = "0";
            }, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this;
            (0, s.$$)("div", this.rect).forEach(function(o3) {
              e4.e.on(o3, "mousedown.resizer touchstart.resizer", t4.onStartResizing.bind(t4, o3));
            }), c.eventEmitter.on("hideHelpers", this.hide), e4.e.on("readonly", function(e5) {
              e5 && t4.hide();
            }).on("afterInit changePlace", this.addEventListeners.bind(this)).on("afterGetValueFromEditor.resizer", function(e5) {
              var t5 = /<jodit[^>]+data-jodit_iframe_wrapper[^>]+>(.*?<iframe[^>]*>.*?<\/iframe>.*?)<\/jodit>/gi;
              t5.test(e5.value) && (e5.value = e5.value.replace(t5, "$1"));
            }).on("hideResizer", this.hide).on("change afterInit afterSetMode", this.onChangeEditor), this.addEventListeners(), this.onChangeEditor();
          }, t3.prototype.onEditorClick = function(e4) {
            for (var t4 = e4.target, o3 = this.j, n3 = o3.editor, r3 = o3.options.allowResizeTags; t4 && t4 !== n3; ) {
              if (a.Dom.isTag(t4, r3)) return this.bind(t4), void this.onClickElement(t4);
              t4 = t4.parentNode;
            }
          }, t3.prototype.addEventListeners = function() {
            var e4 = this, t4 = this.j;
            t4.e.off(t4.editor, ".resizer").off(t4.ow, ".resizer").on(t4.editor, "keydown.resizer", function(t5) {
              e4.isShown && t5.key === r2.KEY_DELETE && e4.element && !a.Dom.isTag(e4.element, "table") && e4.onDelete(t5);
            }).on(t4.ow, "resize.resizer", this.updateSize).on("resize.resizer", this.updateSize).on([t4.ow, t4.editor], "scroll.resizer", function() {
              e4.isShown && !e4.isResizeMode && e4.hide();
            }).on(t4.ow, "keydown.resizer", this.onKeyDown).on(t4.ow, "keyup.resizer", this.onKeyUp).on(t4.ow, "mouseup.resizer touchend.resizer", this.onClickOutside);
          }, t3.prototype.onStartResizing = function(e4, t4) {
            if (!this.element || !this.element.parentNode) return this.hide(), false;
            this.handle = e4, t4.cancelable && t4.preventDefault(), t4.stopImmediatePropagation(), this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.ratio = this.width / this.height, this.isResizeMode = true, this.startX = t4.clientX, this.startY = t4.clientY, this.pointerX = t4.clientX, this.pointerY = t4.clientY;
            var o3 = this.j;
            o3.e.fire("hidePopup"), o3.lock(this.LOCK_KEY), o3.e.on(o3.ow, "mousemove.resizer touchmove.resizer", this.onResize);
          }, t3.prototype.onEndResizing = function() {
            var e4 = this.j;
            e4.unlock(), this.isResizeMode = false, this.isAltMode = false, e4.synchronizeValues(), e4.e.off(e4.ow, "mousemove.resizer touchmove.resizer", this.onResize);
          }, t3.prototype.onResize = function(e4) {
            if (this.isResizeMode) {
              if (!this.element) return;
              this.pointerX = e4.clientX, this.pointerY = e4.clientY;
              var t4 = void 0, o3 = void 0;
              if (this.j.options.iframe) {
                var n3 = this.getWorkplacePosition();
                t4 = e4.clientX + n3.left - this.startX, o3 = e4.clientY + n3.top - this.startY;
              } else t4 = this.pointerX - this.startX, o3 = this.pointerY - this.startY;
              var r3 = this.handle.className, i2 = 0, l2 = 0, c2 = this.j.o.resizer.useAspectRatio;
              !this.isAltMode && (true === c2 || Array.isArray(c2) && a.Dom.isTag(this.element, c2)) ? (t4 ? (i2 = this.width + (r3.match(/left/) ? -1 : 1) * t4, l2 = Math.round(i2 / this.ratio)) : (l2 = this.height + (r3.match(/top/) ? -1 : 1) * o3, i2 = Math.round(l2 * this.ratio)), i2 > (0, s.innerWidth)(this.j.editor, this.j.ow) && (i2 = (0, s.innerWidth)(this.j.editor, this.j.ow), l2 = Math.round(i2 / this.ratio))) : (i2 = this.width + (r3.match(/left/) ? -1 : 1) * t4, l2 = this.height + (r3.match(/top/) ? -1 : 1) * o3), i2 > this.j.o.resizer.min_width && this.applySize(this.element, "width", this.rect.parentNode.offsetWidth > i2 ? i2 : "100%"), l2 > this.j.o.resizer.min_height && this.applySize(this.element, "height", l2), this.updateSize(), this.showSizeViewer(this.element.offsetWidth, this.element.offsetHeight), e4.stopImmediatePropagation();
            }
          }, t3.prototype.onKeyDown = function(e4) {
            this.isAltMode = e4.key === i.KEY_ALT, !this.isAltMode && this.isResizeMode && this.onEndResizing();
          }, t3.prototype.onKeyUp = function() {
            this.isAltMode && this.isResizeMode && this.element && (this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.ratio = this.width / this.height, this.startX = this.pointerX, this.startY = this.pointerY), this.isAltMode = false;
          }, t3.prototype.onClickOutside = function(e4) {
            if (this.isShown) {
              if (!this.isResizeMode) return this.hide();
              e4.stopImmediatePropagation(), this.onEndResizing();
            }
          }, t3.prototype.getWorkplacePosition = function() {
            return (0, s.offset)(this.rect.parentNode || this.j.od.documentElement, this.j, this.j.od, true);
          }, t3.prototype.applySize = function(e4, t4, o3) {
            var n3 = a.Dom.isImage(e4) && this.j.o.resizer.forImageChangeAttributes;
            n3 && (0, s.attr)(e4, t4, o3), n3 && !e4.style[t4] || (0, s.css)(e4, t4, o3);
          }, t3.prototype.onDelete = function(e4) {
            this.element && ("JODIT" !== this.element.tagName ? this.j.s.select(this.element) : (a.Dom.safeRemove(this.element), this.hide(), e4.preventDefault()));
          }, t3.prototype.onChangeEditor = function() {
            this.isShown && (this.element && this.element.parentNode ? this.updateSize() : this.hide()), (0, s.$$)("iframe", this.j.editor).forEach(this.bind);
          }, t3.prototype.bind = function(e4) {
            var t4 = this;
            if (a.Dom.isHTMLElement(e4) && this.j.o.allowResizeTags.includes(e4.tagName.toLowerCase()) && !(0, s.dataBind)(e4, p)) {
              var o3;
              if ((0, s.dataBind)(e4, p, true), a.Dom.isTag(e4, "iframe")) {
                var n3 = e4;
                a.Dom.isHTMLElement(e4.parentNode) && (0, s.attr)(e4.parentNode, "-jodit_iframe_wrapper") ? e4 = e4.parentNode : (o3 = this.j.createInside.element("jodit", { "data-jodit-temp": 1, contenteditable: false, draggable: true, "data-jodit_iframe_wrapper": 1 }), (0, s.attr)(o3, "style", (0, s.attr)(e4, "style")), (0, s.css)(o3, { display: "inline-block" === e4.style.display ? "inline-block" : "block", width: e4.offsetWidth, height: e4.offsetHeight }), e4.parentNode && e4.parentNode.insertBefore(o3, e4), o3.appendChild(e4), this.j.e.on(o3, "click", function() {
                  (0, s.attr)(o3, "data-jodit-wrapper_active", true);
                }), e4 = o3), this.j.e.off(e4, "mousedown.select touchstart.select").on(e4, "mousedown.select touchstart.select", function() {
                  t4.j.s.select(e4);
                }).off(e4, "changesize").on(e4, "changesize", function() {
                  n3.setAttribute("width", e4.offsetWidth + "px"), n3.setAttribute("height", e4.offsetHeight + "px");
                });
              }
              this.j.e.on(e4, "dragstart", this.hide), i.IS_IE && this.j.e.on(e4, "mousedown", function(t5) {
                a.Dom.isTag(e4, "img") && t5.preventDefault();
              });
            }
          }, t3.prototype.showSizeViewer = function(e4, t4) {
            this.j.o.resizer.showSize && (this.sizeViewer.offsetWidth > e4 || this.sizeViewer.offsetHeight > t4 ? this.hideSizeViewer() : (this.sizeViewer.style.opacity = "1", this.sizeViewer.textContent = "".concat(e4, " x ").concat(t4), this.j.async.setTimeout(this.hideSizeViewer, { timeout: this.j.o.resizer.hideSizeTimeout, label: "hideSizeViewer" })));
          }, t3.prototype.show = function() {
            this.j.o.readonly || this.isShown || (this.isShown = true, this.rect.parentNode || ((0, s.markOwner)(this.j, this.rect), this.j.workplace.appendChild(this.rect)), this.j.isFullSize && (this.rect.style.zIndex = (0, s.css)(this.j.container, "zIndex").toString()), this.updateSize());
          }, t3.prototype.hide = function() {
            this.isResizeMode || (this.isResizeMode = false, this.isShown = false, this.element = null, a.Dom.safeRemove(this.rect), (0, s.$$)("[data-jodit-wrapper_active='true']", this.j.editor).forEach(function(e4) {
              return (0, s.attr)(e4, "data-jodit-wrapper_active", false);
            }));
          }, t3.prototype.beforeDestruct = function(e4) {
            this.hide(), c.eventEmitter.off("hideHelpers", this.hide), e4.e.off(this.j.ow, ".resizer").off(".resizer");
          }, n2.__decorate([(0, u.watch)(":click")], t3.prototype, "onEditorClick", null), n2.__decorate([u.autobind], t3.prototype, "onStartResizing", null), n2.__decorate([u.autobind], t3.prototype, "onEndResizing", null), n2.__decorate([u.autobind], t3.prototype, "onResize", null), n2.__decorate([u.autobind], t3.prototype, "onKeyDown", null), n2.__decorate([u.autobind], t3.prototype, "onKeyUp", null), n2.__decorate([u.autobind], t3.prototype, "onClickOutside", null), n2.__decorate([(0, u.debounce)()], t3.prototype, "onChangeEditor", null), n2.__decorate([u.autobind], t3.prototype, "bind", null), n2.__decorate([u.autobind], t3.prototype, "hide", null), t3;
        }(l.Plugin);
        t2.resizer = f, d.pluginSystem.add("resizer", f);
      }, 61975: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(77904);
        o2(59535), n2.Config.prototype.useSearch = true, n2.Config.prototype.search = { lazyIdleTimeout: 0 }, r2.Icon.set("search", o2(41197)), n2.Config.prototype.controls.find = { tooltip: "Find", icon: "search", exec: function(e3, t3, o3) {
          var n3 = o3.control;
          switch (n3.args && n3.args[0]) {
            case "findPrevious":
              e3.e.fire("searchPrevious");
              break;
            case "findNext":
              e3.e.fire("searchNext");
              break;
            case "replace":
              e3.execCommand("openReplaceDialog");
              break;
            default:
              e3.execCommand("openSearchDialog");
          }
        }, list: { search: "Find", findNext: "Find Next", findPrevious: "Find Previous", replace: "Replace" }, childTemplate: function(e3, t3, o3) {
          return o3;
        } };
      }, 73934: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(18562), t2), n2.__exportStar(o2(3928), t2);
      }, 18562: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.SentenceFinder = void 0;
        var n2 = o2(20255), r2 = o2(93163), i = function() {
          function e3(e4) {
            void 0 === e4 && (e4 = r2.fuzzySearchIndex), this.searchIndex = e4, this.queue = [], this.value = "";
          }
          return e3.prototype.add = function(e4) {
            var t3, o3 = (null !== (t3 = e4.nodeValue) && void 0 !== t3 ? t3 : "").toLowerCase();
            if (o3.length) {
              var n3 = this.value.length;
              this.queue.push({ startIndex: n3, endIndex: n3 + o3.length, node: e4 }), this.value += o3;
            }
          }, e3.prototype.ranges = function(e4, t3) {
            var o3;
            void 0 === t3 && (t3 = 0);
            var r3 = [], i2 = t3, a = 0, s = 0;
            do {
              if (a = (o3 = n2.__read(this.searchIndex(e4, this.value, i2), 2))[1], -1 !== (i2 = o3[0])) {
                for (var l = void 0, c = 0, u = void 0, d = 0, p = s; this.queue.length > p; p += 1) if (!l && this.queue[p].endIndex > i2 && (l = this.queue[p].node, c = i2 - this.queue[p].startIndex), l && this.queue[p].endIndex >= i2 + a) {
                  u = this.queue[p].node, d = i2 + a - this.queue[p].startIndex, s = p;
                  break;
                }
                l && u && r3.push({ startContainer: l, startOffset: c, endContainer: u, endOffset: d }), i2 += a;
              }
            } while (-1 !== i2);
            return 0 === r3.length ? null : r3;
          }, e3;
        }();
        t2.SentenceFinder = i;
      }, 3928: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isSelectionWrapper = t2.clearSelectionWrappersFromHTML = t2.clearSelectionWrappers = t2.getSelectionWrappers = t2.wrapRangesTextsInTmpSpan = void 0;
        var n2 = o2(20255), r2 = o2(24263), i = o2(54188), a = "jd-tmp-selection";
        function s(e3) {
          return (0, i.$$)("[".concat(a, "]"), e3);
        }
        function l(e3) {
          return r2.Dom.isElement(e3) && e3.hasAttribute(a);
        }
        t2.wrapRangesTextsInTmpSpan = function(e3, t3, o3, i2) {
          var s2, c, u;
          if (null != e3.startContainer.nodeValue && null != e3.endContainer.nodeValue) {
            var d = o3.element("span", ((s2 = {})[a] = true, s2));
            r2.Dom.markTemporary(d);
            var p = e3.startContainer.nodeValue, f = 0;
            if (0 !== e3.startOffset) {
              var h = o3.text(p.substring(0, e3.startOffset));
              e3.startContainer.nodeValue = p.substring(e3.startOffset), r2.Dom.before(e3.startContainer, h), e3.startContainer === e3.endContainer && (e3.endOffset -= f = e3.startOffset), e3.startOffset = 0;
            }
            var m = e3.endContainer.nodeValue;
            if (e3.endOffset !== m.length) {
              h = o3.text(m.substring(e3.endOffset)), e3.endContainer.nodeValue = m.substring(0, e3.endOffset), r2.Dom.after(e3.endContainer, h);
              try {
                for (var v = n2.__values(t3), g = v.next(); !g.done; g = v.next()) {
                  var y = g.value;
                  if (y.startContainer !== e3.endContainer) break;
                  y.startContainer = h, y.startOffset = y.startOffset - e3.endOffset - f, y.endContainer === e3.endContainer && (y.endContainer = h, y.endOffset = y.endOffset - e3.endOffset - f);
                }
              } catch (e4) {
                c = { error: e4 };
              } finally {
                try {
                  g && !g.done && (u = v.return) && u.call(v);
                } finally {
                  if (c) throw c.error;
                }
              }
              e3.endOffset = e3.endContainer.nodeValue.length;
            }
            var _ = e3.startContainer;
            do {
              if (!_) break;
              if (r2.Dom.isText(_) && !l(_.parentNode) && r2.Dom.wrap(_, d.cloneNode(), o3), _ === e3.endContainer) break;
              var b = _.firstChild || _.nextSibling;
              if (!b) {
                for (; _ && !_.nextSibling && _ !== i2; ) _ = _.parentNode;
                b = null == _ ? void 0 : _.nextSibling;
              }
              _ = b;
            } while (_ && _ !== i2);
          }
        }, t2.getSelectionWrappers = s, t2.clearSelectionWrappers = function(e3) {
          s(e3).forEach(function(e4) {
            return r2.Dom.unwrap(e4);
          });
        }, t2.clearSelectionWrappersFromHTML = function(e3) {
          return e3.replace(RegExp("<span[^>]+".concat(a, "[^>]+>(.*?)</span>"), "g"), "$1");
        }, t2.isSelectionWrapper = l;
      }, 59535: function() {
      }, 14889: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.search = void 0;
        var n2 = o2(20255), r2 = o2(64968), i = o2(57549), a = o2(43441), s = o2(72235), l = o2(40332), c = o2(17332), u = o2(73934);
        o2(61975);
        var d = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.buttons = [{ name: "find", group: "search" }], t4.previousQuery = "", t4.drawPromise = null, t4.walker = null, t4.walkerCount = null, t4.cache = {}, t4.wrapFrameRequest = 0, t4;
          }
          return n2.__extends(t3, e3), Object.defineProperty(t3.prototype, "ui", { get: function() {
            return new s.UISearch(this.j);
          }, enumerable: false, configurable: true }), t3.prototype.updateCounters = function() {
            return n2.__awaiter(this, void 0, Promise, function() {
              var e4;
              return n2.__generator(this, function(t4) {
                switch (t4.label) {
                  case 0:
                    return this.ui.isOpened ? (e4 = this.ui, [4, this.calcCounts(this.ui.query)]) : [2];
                  case 1:
                    return e4.count = t4.sent(), [2];
                }
              });
            });
          }, t3.prototype.onPressReplaceButton = function() {
            this.findAndReplace(this.ui.query), this.updateCounters();
          }, t3.prototype.tryScrollToElement = function(e4) {
            var t4 = r2.Dom.closest(e4, r2.Dom.isElement, this.j.editor);
            t4 || (t4 = r2.Dom.prev(e4, r2.Dom.isElement, this.j.editor)), t4 && t4 !== this.j.editor && (0, l.scrollIntoViewIfNeeded)(t4, this.j.editor, this.j.ed);
          }, t3.prototype.calcCounts = function(e4) {
            return n2.__awaiter(this, void 0, Promise, function() {
              return n2.__generator(this, function(t4) {
                switch (t4.label) {
                  case 0:
                    return [4, this.findQueryBounds(e4, "walkerCount")];
                  case 1:
                    return [2, t4.sent().length];
                }
              });
            });
          }, t3.prototype.findQueryBounds = function(e4, t4) {
            return n2.__awaiter(this, void 0, Promise, function() {
              var o3;
              return n2.__generator(this, function(n3) {
                return (o3 = this[t4]) && o3.break(), o3 = new r2.LazyWalker(this.j.async, { timeout: this.j.o.search.lazyIdleTimeout }), this[t4] = o3, [2, this.find(o3, e4).catch(function(e5) {
                  return [];
                })];
              });
            });
          }, t3.prototype.findAndReplace = function(e4) {
            return n2.__awaiter(this, void 0, Promise, function() {
              var t4, o3, i2, a2, s2;
              return n2.__generator(this, function(n3) {
                switch (n3.label) {
                  case 0:
                    return [4, this.findQueryBounds(e4, "walker")];
                  case 1:
                    if (!(t4 = n3.sent()).length) return [2, false];
                    if (-1 === (o3 = this.findCurrentIndexInRanges(t4, this.j.s.range)) && (o3 = 0), !(i2 = t4[o3])) return [3, 6];
                    n3.label = 2;
                  case 2:
                    return n3.trys.push([2, , 4, 5]), (a2 = this.j.ed.createRange()).setStart(i2.startContainer, i2.startOffset), a2.setEnd(i2.endContainer, i2.endOffset), a2.deleteContents(), s2 = this.j.createInside.text(this.ui.replace), r2.Dom.safeInsertNode(a2, s2), (0, u.clearSelectionWrappers)(this.j.editor), this.j.s.setCursorAfter(s2), this.tryScrollToElement(s2), this.cache = {}, this.ui.currentIndex = o3, [4, this.findAndSelect(e4, true).catch(function(e5) {
                      return null;
                    })];
                  case 3:
                    return n3.sent(), [3, 5];
                  case 4:
                    return this.j.synchronizeValues(), [7];
                  case 5:
                    return this.j.e.fire("afterFindAndReplace"), [2, true];
                  case 6:
                    return [2, false];
                }
              });
            });
          }, t3.prototype.findAndSelect = function(e4, t4) {
            var o3;
            return n2.__awaiter(this, void 0, Promise, function() {
              var r3, i2, a2, s2;
              return n2.__generator(this, function(n3) {
                switch (n3.label) {
                  case 0:
                    return [4, this.findQueryBounds(e4, "walker")];
                  case 1:
                    if (!(r3 = n3.sent()).length) return [2, false];
                    if (this.previousQuery === e4 && (0, u.getSelectionWrappers)(this.j.editor).length || (null === (o3 = this.drawPromise) || void 0 === o3 || o3.rejectCallback(), this.j.async.cancelAnimationFrame(this.wrapFrameRequest), (0, u.clearSelectionWrappers)(this.j.editor), this.drawPromise = this.drawSelectionRanges(r3)), this.previousQuery = e4, this.ui.currentIndex = (i2 = -1 == (i2 = this.ui.currentIndex - 1) ? 0 : t4 ? i2 === r3.length - 1 ? 0 : i2 + 1 : 0 === i2 ? r3.length - 1 : i2 - 1) + 1, !(a2 = r3[i2])) return [3, 4];
                    s2 = this.j.ed.createRange();
                    try {
                      s2.setStart(a2.startContainer, a2.startOffset), s2.setEnd(a2.endContainer, a2.endOffset), this.j.s.selectRange(s2);
                    } catch (e5) {
                    }
                    return this.tryScrollToElement(a2.startContainer), [4, this.updateCounters()];
                  case 2:
                    return n3.sent(), [4, this.drawPromise];
                  case 3:
                    return n3.sent(), this.j.e.fire("afterFindAndSelect"), [2, true];
                  case 4:
                    return [2, false];
                }
              });
            });
          }, t3.prototype.findCurrentIndexInRanges = function(e4, t4) {
            return e4.findIndex(function(e5) {
              return e5.startContainer === t4.startContainer && e5.startOffset === t4.startOffset && e5.endContainer === t4.startContainer && e5.endOffset === t4.endOffset;
            });
          }, t3.prototype.isValidCache = function(e4) {
            return n2.__awaiter(this, void 0, Promise, function() {
              return n2.__generator(this, function(t4) {
                switch (t4.label) {
                  case 0:
                    return [4, e4];
                  case 1:
                    return [2, t4.sent().every(function(e5) {
                      var t5, o3, n3, r3;
                      return e5.startContainer.isConnected && e5.startOffset <= (null !== (o3 = null === (t5 = e5.startContainer.nodeValue) || void 0 === t5 ? void 0 : t5.length) && void 0 !== o3 ? o3 : 0) && e5.endContainer.isConnected && e5.endOffset <= (null !== (r3 = null === (n3 = e5.endContainer.nodeValue) || void 0 === n3 ? void 0 : n3.length) && void 0 !== r3 ? r3 : 0);
                    })];
                }
              });
            });
          }, t3.prototype.find = function(e4, t4) {
            return n2.__awaiter(this, void 0, Promise, function() {
              var o3, i2, a2 = this;
              return n2.__generator(this, function(n3) {
                switch (n3.label) {
                  case 0:
                    return t4.length ? (i2 = o3 = this.cache[t4]) ? [4, this.isValidCache(o3)] : [3, 2] : [2, []];
                  case 1:
                    i2 = n3.sent(), n3.label = 2;
                  case 2:
                    return i2 ? [2, o3] : (this.cache[t4] = this.j.async.promise(function(o4) {
                      var n4 = new u.SentenceFinder(a2.j.o.search.fuzzySearch);
                      e4.on("break", function() {
                        o4([]);
                      }).on("visit", function(e5) {
                        return r2.Dom.isText(e5) && n4.add(e5), false;
                      }).on("end", function() {
                        var e5;
                        o4(null !== (e5 = n4.ranges(t4)) && void 0 !== e5 ? e5 : []);
                      }).setWork(a2.j.editor);
                    }), [2, this.cache[t4]]);
                }
              });
            });
          }, t3.prototype.drawSelectionRanges = function(e4) {
            var t4 = this, o3 = this.j, r3 = o3.async, i2 = o3.createInside, a2 = o3.editor;
            r3.cancelAnimationFrame(this.wrapFrameRequest);
            var s2, l2 = n2.__spreadArray([], n2.__read(e4), false), c2 = 0;
            return r3.promise(function(e5) {
              var o4 = function() {
                do {
                  (s2 = l2.shift()) && (0, u.wrapRangesTextsInTmpSpan)(s2, l2, i2, a2), c2 += 1;
                } while (s2 && 5 >= c2);
                l2.length ? t4.wrapFrameRequest = r3.requestAnimationFrame(o4) : e5();
              };
              o4();
            });
          }, t3.prototype.onAfterGetValueFromEditor = function(e4) {
            e4.value = (0, u.clearSelectionWrappersFromHTML)(e4.value);
          }, t3.prototype.afterInit = function(e4) {
            var t4 = this;
            if (e4.o.useSearch) {
              var o3 = this;
              e4.e.on("beforeSetMode.search", function() {
                t4.ui.close();
              }).on(this.ui, "afterClose", function() {
                (0, u.clearSelectionWrappers)(e4.editor), t4.ui.currentIndex = 0, t4.ui.count = 0, t4.cache = {};
              }).on("click", function() {
                t4.ui.currentIndex = 0, (0, u.clearSelectionWrappers)(e4.editor);
              }).on("change.search", function() {
                t4.cache = {};
              }).on("keydown.search mousedown.search", e4.async.debounce(function() {
                t4.ui.selInfo && (e4.s.removeMarkers(), t4.ui.selInfo = null), t4.ui.isOpened && t4.updateCounters();
              }, e4.defaultTimeout)).on("searchNext.search searchPrevious.search", function() {
                return t4.ui.isOpened || t4.ui.open(), o3.findAndSelect(o3.ui.query, "searchNext" === e4.e.current).catch(function(e5) {
                });
              }).on("search.search", function(e5, n3) {
                return void 0 === n3 && (n3 = true), t4.ui.currentIndex = 0, o3.findAndSelect(e5 || "", n3).catch(function(e6) {
                });
              }), e4.registerCommand("search", { exec: function(e5, t5, n3) {
                return void 0 === n3 && (n3 = true), t5 && o3.findAndSelect(t5, n3).catch(function(e6) {
                }), false;
              } }).registerCommand("openSearchDialog", { exec: function(e5, t5) {
                return o3.ui.open(t5), false;
              }, hotkeys: ["ctrl+f", "cmd+f"] }).registerCommand("openReplaceDialog", { exec: function(t5, n3, r3) {
                return e4.o.readonly || o3.ui.open(n3, r3, true), false;
              }, hotkeys: ["ctrl+h", "cmd+h"] });
            }
          }, t3.prototype.beforeDestruct = function(e4) {
            this.ui.destruct(), e4.e.off(".search");
          }, n2.__decorate([a.cache], t3.prototype, "ui", null), n2.__decorate([(0, a.watch)("ui:needUpdateCounters")], t3.prototype, "updateCounters", null), n2.__decorate([(0, a.watch)("ui:pressReplaceButton")], t3.prototype, "onPressReplaceButton", null), n2.__decorate([a.autobind], t3.prototype, "findQueryBounds", null), n2.__decorate([a.autobind], t3.prototype, "findAndReplace", null), n2.__decorate([a.autobind], t3.prototype, "findAndSelect", null), n2.__decorate([a.autobind], t3.prototype, "find", null), n2.__decorate([(0, a.watch)(":afterGetValueFromEditor")], t3.prototype, "onAfterGetValueFromEditor", null), t3;
        }(i.Plugin);
        t2.search = d, c.pluginSystem.add("search", d);
      }, 72235: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UISearch = void 0;
        var n2 = o2(20255);
        o2(88582);
        var r2 = o2(2074), i = o2(40332), a = o2(86893), s = o2(86893), l = o2(43441), c = o2(64968), u = function(e3) {
          function t3(t4) {
            var o3 = e3.call(this, t4) || this;
            o3.selInfo = null, o3._currentIndex = 0, o3.isOpened = false;
            var n3 = (0, i.refs)(o3.container), r3 = n3.replace, a2 = n3.cancel, l2 = n3.next, c2 = n3.prev, u2 = n3.replaceBtn, d = n3.current, p = n3.count;
            return o3.queryInput = n3.query, o3.replaceInput = r3, o3.closeButton = a2, o3.replaceButton = u2, o3.currentBox = d, o3.countBox = p, t4.e.on(o3.closeButton, "pointerdown", function() {
              return o3.close(), false;
            }).on(o3.queryInput, "input", function() {
              o3.currentIndex = 0;
            }).on(o3.queryInput, "pointerdown", function() {
              t4.s.isFocused() && (t4.s.removeMarkers(), o3.selInfo = t4.s.save());
            }).on(o3.replaceButton, "pointerdown", function() {
              return t4.e.fire(o3, "pressReplaceButton"), false;
            }).on(l2, "pointerdown", function() {
              return t4.e.fire("searchNext"), false;
            }).on(c2, "pointerdown", function() {
              return t4.e.fire("searchPrevious"), false;
            }).on(o3.queryInput, "input", function() {
              o3.setMod("empty-query", !(0, i.trim)(o3.queryInput.value).length);
            }).on(o3.queryInput, "keydown", o3.j.async.debounce(function(e4) {
              e4.key === s.KEY_ENTER ? (e4.preventDefault(), e4.stopImmediatePropagation(), t4.e.fire("searchNext") && o3.close()) : t4.e.fire(o3, "needUpdateCounters");
            }, o3.j.defaultTimeout)), o3;
          }
          return n2.__extends(t3, e3), t3.prototype.className = function() {
            return "UISearch";
          }, t3.prototype.render = function() {
            return '<div>\n			<div class="&__box">\n				<div class="&__inputs">\n					<input data-ref="query" tabindex="0" placeholder="~Search for~" type="text"/>\n					<input data-ref="replace" tabindex="0" placeholder="~Replace with~" type="text"/>\n				</div>\n				<div class="&__counts">\n					<span data-ref="counter-box">\n						<span data-ref="current">0</span><span>/</span><span data-ref="count">0</span>\n					</span>\n				</div>\n				<div class="&__buttons">\n					<button data-ref="next" tabindex="0" type="button">'.concat(r2.Icon.get("angle-down"), '</button>\n					<button data-ref="prev" tabindex="0" type="button">').concat(r2.Icon.get("angle-up"), '</button>\n					<button data-ref="cancel" tabindex="0" type="button">').concat(r2.Icon.get("cancel"), '</button>\n					<button data-ref="replace-btn" tabindex="0" type="button" class="jodit-ui-button">~Replace~</button>\n				</div>\n			</div>\n		</div>');
          }, Object.defineProperty(t3.prototype, "currentIndex", { get: function() {
            return this._currentIndex;
          }, set: function(e4) {
            this._currentIndex = e4, this.currentBox.innerText = e4.toString();
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "count", { set: function(e4) {
            this.countBox.innerText = e4.toString();
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "query", { get: function() {
            return this.queryInput.value;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "replace", { get: function() {
            return this.replaceInput.value;
          }, enumerable: false, configurable: true }), t3.prototype.onEditorKeyDown = function(e4) {
            if (this.isOpened) {
              var t4 = this.j;
              if (t4.getRealMode() === a.MODE_WYSIWYG) switch (e4.key) {
                case s.KEY_ESC:
                  this.close();
                  break;
                case s.KEY_F3:
                  this.queryInput.value && (t4.e.fire(e4.shiftKey ? "searchPrevious" : "searchNext"), e4.preventDefault());
              }
            }
          }, t3.prototype.open = function(e4, t4, o3) {
            void 0 === o3 && (o3 = false), this.isOpened || (this.j.workplace.appendChild(this.container), this.isOpened = true), this.calcSticky(this.j.e.fire("getStickyState.sticky") || false), this.j.e.fire("hidePopup"), this.setMod("replace", o3);
            var n3 = null != e4 ? e4 : (this.j.s.sel || "").toString();
            n3 && (this.queryInput.value = n3), t4 && (this.replaceInput.value = t4), this.setMod("empty-query", !n3.length), this.j.e.fire(this, "needUpdateCounters"), n3 ? this.queryInput.select() : this.queryInput.focus();
          }, t3.prototype.close = function() {
            this.isOpened && (this.j.s.restore(), c.Dom.safeRemove(this.container), this.isOpened = false, this.j.e.fire(this, "afterClose"));
          }, t3.prototype.calcSticky = function(e4) {
            if (this.isOpened) if (this.setMod("sticky", e4), e4) {
              var t4 = (0, i.position)(this.j.toolbarContainer);
              (0, i.css)(this.container, { top: t4.top + t4.height, left: t4.left + t4.width });
            } else (0, i.css)(this.container, { top: null, left: null });
          }, n2.__decorate([(0, l.watch)([":keydown", "queryInput:keydown"])], t3.prototype, "onEditorKeyDown", null), n2.__decorate([l.autobind], t3.prototype, "open", null), n2.__decorate([l.autobind], t3.prototype, "close", null), n2.__decorate([(0, l.watch)(":toggleSticky")], t3.prototype, "calcSticky", null), n2.__decorate([l.component], t3);
        }(r2.UIElement);
        t2.UISearch = u;
      }, 14189: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.tableAllowCellSelection = true;
      }, 37458: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.selectCells = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(87837), a = o2(24263), s = o2(40332), l = o2(86893), c = o2(43441), u = o2(17332);
        o2(14189);
        var d = "table_processor_observer", p = "onMoveTableSelectCell", f = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.requires = ["select"], t4.selectedCell = null, t4.isSelectionMode = false, t4;
          }
          return n2.__extends(t3, e3), Object.defineProperty(t3.prototype, "module", { get: function() {
            return this.j.getInstance("Table", this.j.o);
          }, enumerable: false, configurable: true }), t3.prototype.afterInit = function(e4) {
            var t4 = this;
            e4.o.tableAllowCellSelection && e4.e.on("keydown.select-cells", function(e5) {
              e5.key === l.KEY_TAB && t4.unselectCells();
            }).on("beforeCommand.select-cells", this.onExecCommand).on("afterCommand.select-cells", this.onAfterCommand).on(["clickEditor", "mousedownTd", "mousedownTh", "touchstartTd", "touchstartTh"].map(function(e5) {
              return e5 + ".select-cells";
            }).join(" "), this.onStartSelection).on("clickTr clickTbody", function() {
              var e5, o3 = t4.module.getAllSelectedCells().length;
              if (o3) return o3 > 1 && (null === (e5 = t4.j.s.sel) || void 0 === e5 || e5.removeAllRanges()), false;
            });
          }, t3.prototype.onStartSelection = function(e4) {
            if (!this.j.o.readonly && (this.unselectCells(), e4 !== this.j.editor)) {
              var t4 = a.Dom.closest(e4, "table", this.j.editor);
              if (e4 && t4) return e4.firstChild || e4.appendChild(this.j.createInside.element("br")), this.isSelectionMode = true, this.selectedCell = e4, this.module.addSelection(e4), this.j.e.on(t4, "mousemove.select-cells touchmove.select-cells", this.j.async.throttle(this.onMove.bind(this, t4), { label: p, timeout: this.j.defaultTimeout / 2 })).on(t4, "mouseup.select-cells touchend.select-cells", this.onStopSelection.bind(this, t4)), false;
            }
          }, t3.prototype.onOutsideClick = function() {
            this.selectedCell = null, this.onRemoveSelection();
          }, t3.prototype.onChange = function() {
            this.j.isLocked || this.isSelectionMode || this.onRemoveSelection();
          }, t3.prototype.onMove = function(e4, t4) {
            var o3, n3 = this;
            if ((!this.j.o.readonly || this.j.isLocked) && !this.j.isLockedNotBy(d)) {
              var r3 = this.j.ed.elementFromPoint(t4.clientX, t4.clientY);
              if (r3) {
                var s2 = a.Dom.closest(r3, ["td", "th"], e4);
                if (s2 && this.selectedCell) {
                  s2 !== this.selectedCell && this.j.lock(d), this.unselectCells();
                  for (var l2 = i.Table.getSelectedBound(e4, [s2, this.selectedCell]), c2 = i.Table.formalMatrix(e4), u2 = l2[0][0]; l2[1][0] >= u2; u2 += 1) for (var p2 = l2[0][1]; l2[1][1] >= p2; p2 += 1) this.module.addSelection(c2[u2][p2]);
                  var f2;
                  this.module.getAllSelectedCells().length > 1 && (null === (o3 = this.j.s.sel) || void 0 === o3 || o3.removeAllRanges()), this.j.e.fire("hidePopup"), t4.stopPropagation(), f2 = n3.j.createInside.fromHTML('<div style="color:rgba(0,0,0,0.01);width:0;height:0">&nbsp;</div>'), s2.appendChild(f2), n3.j.async.setTimeout(function() {
                    var e5;
                    null === (e5 = f2.parentNode) || void 0 === e5 || e5.removeChild(f2);
                  }, n3.j.defaultTimeout / 5);
                }
              }
            }
          }, t3.prototype.onRemoveSelection = function(e4) {
            var t4;
            if (!(null === (t4 = null == e4 ? void 0 : e4.buffer) || void 0 === t4 ? void 0 : t4.actionTrigger) && !this.selectedCell && this.module.getAllSelectedCells().length) return this.j.unlock(), this.unselectCells(), void this.j.e.fire("hidePopup", "cells");
            this.isSelectionMode = false, this.selectedCell = null;
          }, t3.prototype.onStopSelection = function(e4, t4) {
            var o3 = this;
            if (this.selectedCell) {
              this.isSelectionMode = false, this.j.unlock();
              var n3 = this.j.ed.elementFromPoint(t4.clientX, t4.clientY);
              if (n3) {
                var r3 = a.Dom.closest(n3, ["td", "th"], e4);
                if (r3) {
                  var l2 = a.Dom.closest(r3, "table", e4);
                  if (!l2 || l2 === e4) {
                    var c2 = i.Table.getSelectedBound(e4, [r3, this.selectedCell]), u2 = i.Table.formalMatrix(e4), d2 = u2[c2[1][0]][c2[1][1]], f2 = u2[c2[0][0]][c2[0][1]];
                    this.j.e.fire("showPopup", e4, function() {
                      var e5 = (0, s.position)(f2, o3.j), t5 = (0, s.position)(d2, o3.j);
                      return { left: e5.left, top: e5.top, width: t5.left - e5.left + t5.width, height: t5.top - e5.top + t5.height };
                    }, "cells"), (0, s.$$)("table", this.j.editor).forEach(function(e5) {
                      o3.j.e.off(e5, "mousemove.select-cells touchmove.select-cells mouseup.select-cells touchend.select-cells");
                    }), this.j.async.clearTimeout(p);
                  }
                }
              }
            }
          }, t3.prototype.unselectCells = function(e4) {
            var t4 = this.module, o3 = t4.getAllSelectedCells();
            o3.length && o3.forEach(function(o4) {
              e4 && e4 === o4 || t4.removeSelection(o4);
            });
          }, t3.prototype.onExecCommand = function(e4) {
            if (/table(splitv|splitg|merge|empty|bin|binrow|bincolumn|addcolumn|addrow)/.test(e4)) {
              e4 = e4.replace("table", "");
              var t4 = this.module.getAllSelectedCells();
              if (t4.length) {
                var o3 = n2.__read(t4, 1)[0];
                if (!o3) return;
                var r3 = a.Dom.closest(o3, "table", this.j.editor);
                if (!r3) return;
                switch (e4) {
                  case "splitv":
                    i.Table.splitVertical(r3, this.j);
                    break;
                  case "splitg":
                    i.Table.splitHorizontal(r3, this.j);
                    break;
                  case "merge":
                    i.Table.mergeSelected(r3, this.j);
                    break;
                  case "empty":
                    t4.forEach(function(e5) {
                      return a.Dom.detach(e5);
                    });
                    break;
                  case "bin":
                    a.Dom.safeRemove(r3);
                    break;
                  case "binrow":
                    new Set(t4.map(function(e5) {
                      return e5.parentNode;
                    })).forEach(function(e5) {
                      i.Table.removeRow(r3, e5.rowIndex);
                    });
                    break;
                  case "bincolumn":
                    var s2 = /* @__PURE__ */ new Set();
                    t4.reduce(function(e5, t5) {
                      return s2.has(t5.cellIndex) || (e5.push(t5), s2.add(t5.cellIndex)), e5;
                    }, []).forEach(function(e5) {
                      i.Table.removeColumn(r3, e5.cellIndex);
                    });
                    break;
                  case "addcolumnafter":
                  case "addcolumnbefore":
                    i.Table.appendColumn(r3, o3.cellIndex, "addcolumnafter" === e4, this.j.createInside);
                    break;
                  case "addrowafter":
                  case "addrowbefore":
                    i.Table.appendRow(r3, o3.parentNode, "addrowafter" === e4, this.j.createInside);
                }
              }
              return false;
            }
          }, t3.prototype.onAfterCommand = function(e4) {
            /^justify/.test(e4) && this.module.getAllSelectedCells().forEach(function(t4) {
              return (0, s.alignElement)(e4, t4);
            });
          }, t3.prototype.beforeDestruct = function(e4) {
            this.onRemoveSelection(), e4.e.off(".select-cells");
          }, n2.__decorate([c.autobind], t3.prototype, "onStartSelection", null), n2.__decorate([(0, c.watch)(":outsideClick")], t3.prototype, "onOutsideClick", null), n2.__decorate([(0, c.watch)(":change")], t3.prototype, "onChange", null), n2.__decorate([c.autobind], t3.prototype, "onRemoveSelection", null), n2.__decorate([c.autobind], t3.prototype, "onStopSelection", null), n2.__decorate([c.autobind], t3.prototype, "onExecCommand", null), n2.__decorate([c.autobind], t3.prototype, "onAfterCommand", null), t3;
        }(r2.Plugin);
        t2.selectCells = f, u.pluginSystem.add("selectCells", f);
      }, 33100: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.select = { normalizeSelectionBeforeCutAndCopy: false };
      }, 95323: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.select = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(43441), a = o2(26596), s = o2(24263), l = o2(2074), c = o2(17332);
        o2(33100);
        var u = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.proxyEventsList = ["click", "mousedown", "touchstart", "mouseup", "touchend"], t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this;
            this.proxyEventsList.forEach(function(o3) {
              e4.e.on(o3 + ".select", t4.onStartSelection);
            });
          }, t3.prototype.beforeDestruct = function(e4) {
            var t4 = this;
            this.proxyEventsList.forEach(function(o3) {
              e4.e.on(o3 + ".select", t4.onStartSelection);
            });
          }, t3.prototype.onStartSelection = function(e4) {
            for (var t4, o3 = this.j, n3 = e4.target; void 0 === t4 && n3 && n3 !== o3.editor; ) t4 = o3.e.fire((0, a.camelCase)(e4.type + "_" + n3.nodeName.toLowerCase()), n3, e4), n3 = n3.parentElement;
            "click" === e4.type && void 0 === t4 && n3 === o3.editor && o3.e.fire(e4.type + "Editor", n3, e4);
          }, t3.prototype.onOutsideClick = function(e4) {
            var t4 = this, o3 = e4.target;
            s.Dom.up(o3, function(e5) {
              return e5 === t4.j.editor;
            }) || l.UIElement.closestElement(o3, l.Popup) || this.j.e.fire("outsideClick", e4);
          }, t3.prototype.beforeCommandCut = function(e4) {
            var t4 = this.j.s;
            if ("cut" === e4 && !t4.isCollapsed()) {
              var o3 = t4.current();
              o3 && s.Dom.isOrContains(this.j.editor, o3) && this.onCopyNormalizeSelectionBound();
            }
          }, t3.prototype.onCopyNormalizeSelectionBound = function(e4) {
            var t4 = this.j, o3 = t4.editor;
            t4.o.select.normalizeSelectionBeforeCutAndCopy && !t4.s.isCollapsed() && (!e4 || e4.isTrusted && s.Dom.isNode(e4.target) && s.Dom.isOrContains(o3, e4.target)) && this.jodit.s.expandSelection();
          }, n2.__decorate([i.autobind], t3.prototype, "onStartSelection", null), n2.__decorate([(0, i.watch)("ow:click")], t3.prototype, "onOutsideClick", null), n2.__decorate([(0, i.watch)([":beforeCommand"])], t3.prototype, "beforeCommandCut", null), n2.__decorate([(0, i.watch)([":copy", ":cut"])], t3.prototype, "onCopyNormalizeSelectionBound", null), t3;
        }(r2.Plugin);
        t2.select = u, c.pluginSystem.add("select", u);
      }, 53387: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166);
        n2.Config.prototype.minWidth = 200, n2.Config.prototype.maxWidth = "100%", n2.Config.prototype.minHeight = 200, n2.Config.prototype.maxHeight = "auto", n2.Config.prototype.saveHeightInStorage = false;
      }, 71003: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.size = void 0;
        var n2 = o2(20255);
        o2(30962);
        var r2 = o2(61817), i = o2(26911), a = o2(85605), s = o2(43441), l = o2(17332);
        o2(53387);
        var c = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.__resizeWorkspaces = t4.j.async.debounce(t4.__resizeWorkspaceImd, t4.j.defaultTimeout, true), t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            e4.e.on("setHeight.size", this.__setHeight).on("setWidth.size", this.__setWidth).on("afterInit.size changePlace.size", this.__initialize, { top: true }).on(e4.ow, "load.size", this.__resizeWorkspaces).on("afterInit.size resize.size afterUpdateToolbar.size scroll.size afterResize.size", this.__resizeWorkspaces).on("toggleFullSize.size toggleToolbar.size", this.__resizeWorkspaceImd), this.__initialize();
          }, t3.prototype.__initialize = function() {
            var e4 = this.j;
            if (!e4.o.inline) {
              var t4 = e4.o.height;
              if (e4.o.saveHeightInStorage && "auto" !== t4) {
                var o3 = e4.storage.get("height");
                o3 && (t4 = o3);
              }
              (0, i.css)(e4.editor, { minHeight: "100%" }), (0, i.css)(e4.container, { minHeight: e4.o.minHeight, maxHeight: e4.o.maxHeight, minWidth: e4.o.minWidth, maxWidth: e4.o.maxWidth }), this.__setHeight(t4), this.__setWidth(e4.o.width);
            }
          }, t3.prototype.__setHeight = function(e4) {
            if ((0, r2.isNumber)(e4)) {
              var t4 = this.j.o, o3 = t4.minHeight, n3 = t4.maxHeight;
              (0, r2.isNumber)(o3) && o3 > e4 && (e4 = o3), (0, r2.isNumber)(n3) && e4 > n3 && (e4 = n3);
            }
            (0, i.css)(this.j.container, "height", e4), this.j.o.saveHeightInStorage && this.j.storage.set("height", e4), this.__resizeWorkspaceImd();
          }, t3.prototype.__setWidth = function(e4) {
            if ((0, r2.isNumber)(e4)) {
              var t4 = this.j.o, o3 = t4.minWidth, n3 = t4.maxWidth;
              (0, r2.isNumber)(o3) && o3 > e4 && (e4 = o3), (0, r2.isNumber)(n3) && e4 > n3 && (e4 = n3);
            }
            (0, i.css)(this.j.container, "width", e4), this.__resizeWorkspaceImd();
          }, t3.prototype.__getNotWorkHeight = function() {
            var e4, t4;
            return ((null === (e4 = this.j.toolbarContainer) || void 0 === e4 ? void 0 : e4.offsetHeight) || 0) + ((null === (t4 = this.j.statusbar) || void 0 === t4 ? void 0 : t4.getHeight()) || 0) + 2;
          }, t3.prototype.__resizeWorkspaceImd = function() {
            if (this.j && !this.j.isDestructed && this.j.o && !this.j.o.inline && this.j.container && this.j.container.parentNode) {
              var e4 = ((0, i.css)(this.j.container, "minHeight") || 0) - this.__getNotWorkHeight();
              if ((0, r2.isNumber)(e4) && e4 > 0 && ([this.j.workplace, this.j.iframe, this.j.editor].map(function(t5) {
                t5 && (0, i.css)(t5, "minHeight", e4);
              }), this.j.e.fire("setMinHeight", e4)), (0, r2.isNumber)(this.j.o.maxHeight)) {
                var t4 = this.j.o.maxHeight - this.__getNotWorkHeight();
                [this.j.workplace, this.j.iframe, this.j.editor].map(function(e5) {
                  e5 && (0, i.css)(e5, "maxHeight", t4);
                }), this.j.e.fire("setMaxHeight", t4);
              }
              this.j.container && (0, i.css)(this.j.workplace, "height", "auto" !== this.j.o.height || this.j.isFullSize ? this.j.container.offsetHeight - this.__getNotWorkHeight() : "auto");
            }
          }, t3.prototype.beforeDestruct = function(e4) {
            e4.e.off(e4.ow, "load.size", this.__resizeWorkspaces).off(".size");
          }, n2.__decorate([(0, s.throttle)()], t3.prototype, "__initialize", null), n2.__decorate([s.autobind], t3.prototype, "__resizeWorkspaceImd", null), n2.__decorate([s.autobind], t3);
        }(a.Plugin);
        t2.size = c, l.pluginSystem.add("size", c);
      }, 13985: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(86893), i = o2(77904);
        n2.Config.prototype.beautifyHTML = !r2.IS_IE, n2.Config.prototype.sourceEditor = "ace", n2.Config.prototype.sourceEditorNativeOptions = { showGutter: true, theme: "ace/theme/idle_fingers", mode: "ace/mode/html", wrap: true, highlightActiveLine: true }, n2.Config.prototype.sourceEditorCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.2/ace.js"], n2.Config.prototype.beautifyHTMLCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.4/beautify.min.js", "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.4/beautify-html.min.js"], i.Icon.set("source", o2(9342)), n2.Config.prototype.controls.source = { mode: r2.MODE_SPLIT, exec: function(e3) {
          e3.toggleMode();
        }, isActive: function(e3) {
          return e3.getRealMode() === r2.MODE_SOURCE;
        }, tooltip: "Change mode" };
      }, 34186: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.AceEditor = void 0;
        var n2 = o2(20255), r2 = o2(86893), i = o2(40332), a = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.className = "jodit_ace_editor", t4.proxyOnBlur = function(e4) {
              t4.j.e.fire("blur", e4);
            }, t4.proxyOnFocus = function(e4) {
              t4.j.e.fire("focus", e4);
            }, t4.proxyOnMouseDown = function(e4) {
              t4.j.e.fire("mousedown", e4);
            }, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.aceExists = function() {
            return void 0 !== this.j.ow.ace;
          }, t3.prototype.getLastColumnIndex = function(e4) {
            return this.instance.session.getLine(e4).length;
          }, t3.prototype.getLastColumnIndices = function() {
            for (var e4 = this.instance.session.getLength(), t4 = [], o3 = 0, n3 = 0; e4 > n3; n3++) o3 += this.getLastColumnIndex(n3), n3 > 0 && (o3 += 1), t4[n3] = o3;
            return t4;
          }, t3.prototype.getRowColumnIndices = function(e4) {
            var t4 = this.getLastColumnIndices();
            if (t4[0] >= e4) return { row: 0, column: e4 };
            for (var o3 = 1, n3 = 1; t4.length > n3; n3++) e4 > t4[n3] && (o3 = n3 + 1);
            return { row: o3, column: e4 - t4[o3 - 1] - 1 };
          }, t3.prototype.setSelectionRangeIndices = function(e4, t4) {
            var o3 = this.getRowColumnIndices(e4), n3 = this.getRowColumnIndices(t4);
            this.instance.getSelection().setSelectionRange({ start: o3, end: n3 });
          }, t3.prototype.getIndexByRowColumn = function(e4, t4) {
            return this.getLastColumnIndices()[e4] - this.getLastColumnIndex(e4) + t4;
          }, t3.prototype.init = function(e4) {
            var t4 = this, o3 = function() {
              if (void 0 === t4.instance && t4.aceExists()) {
                var o4 = t4.j.c.div("jodit-source__mirror-fake");
                t4.container.appendChild(o4), t4.instance = e4.ow.ace.edit(o4), t4.instance.setTheme(e4.o.sourceEditorNativeOptions.theme), t4.instance.renderer.setShowGutter(e4.o.sourceEditorNativeOptions.showGutter), t4.instance.getSession().setMode(e4.o.sourceEditorNativeOptions.mode), t4.instance.setHighlightActiveLine(e4.o.sourceEditorNativeOptions.highlightActiveLine), t4.instance.getSession().setUseWrapMode(true), t4.instance.setOption("indentedSoftWrap", false), t4.instance.setOption("wrap", e4.o.sourceEditorNativeOptions.wrap), t4.instance.getSession().setUseWorker(false), t4.instance.$blockScrolling = 1 / 0, t4.instance.on("change", t4.toWYSIWYG), t4.instance.on("focus", t4.proxyOnFocus), t4.instance.on("mousedown", t4.proxyOnMouseDown), t4.instance.on("blur", t4.proxyOnBlur), e4.getRealMode() !== r2.MODE_WYSIWYG && t4.setValue(t4.getValue());
                var n3 = t4.j.async.debounce(function() {
                  e4.isInDestruct || (t4.instance.setOption("maxLines", "auto" !== e4.o.height ? e4.workplace.offsetHeight / t4.instance.renderer.lineHeight : 1 / 0), t4.instance.resize());
                }, 2 * t4.j.defaultTimeout);
                e4.e.on("afterResize afterSetMode", n3), n3(), t4.onReady();
              }
            };
            e4.e.on("afterSetMode", function() {
              e4.getRealMode() !== r2.MODE_SOURCE && e4.getMode() !== r2.MODE_SPLIT || (t4.fromWYSIWYG(), o3());
            }), o3(), this.aceExists() || (0, i.loadNext)(e4, e4.o.sourceEditorCDNUrlsJS).then(function() {
              e4.isInDestruct || o3();
            }).catch(function() {
              return null;
            });
          }, t3.prototype.destruct = function() {
            var e4, t4;
            this.instance.off("change", this.toWYSIWYG), this.instance.off("focus", this.proxyOnFocus), this.instance.off("mousedown", this.proxyOnMouseDown), this.instance.destroy(), null === (t4 = null === (e4 = this.j) || void 0 === e4 ? void 0 : e4.events) || void 0 === t4 || t4.off("aceInited.source");
          }, t3.prototype.setValue = function(e4) {
            if (!this.j.o.editHTMLDocumentMode && this.j.o.beautifyHTML) {
              var t4 = this.j.e.fire("beautifyHTML", e4);
              (0, i.isString)(t4) && (e4 = t4);
            }
            this.instance.setValue(e4), this.instance.clearSelection();
          }, t3.prototype.getValue = function() {
            return this.instance.getValue();
          }, t3.prototype.setReadOnly = function(e4) {
            this.instance.setReadOnly(e4);
          }, Object.defineProperty(t3.prototype, "isFocused", { get: function() {
            return this.instance.isFocused();
          }, enumerable: false, configurable: true }), t3.prototype.focus = function() {
            this.instance.focus();
          }, t3.prototype.blur = function() {
            this.instance.blur();
          }, t3.prototype.getSelectionStart = function() {
            var e4 = this.instance.selection.getRange();
            return this.getIndexByRowColumn(e4.start.row, e4.start.column);
          }, t3.prototype.getSelectionEnd = function() {
            var e4 = this.instance.selection.getRange();
            return this.getIndexByRowColumn(e4.end.row, e4.end.column);
          }, t3.prototype.selectAll = function() {
            this.instance.selection.selectAll();
          }, t3.prototype.insertRaw = function(e4) {
            var t4 = this.instance.selection.getCursor(), o3 = this.instance.session.insert(t4, e4);
            this.instance.selection.setRange({ start: t4, end: o3 }, false);
          }, t3.prototype.setSelectionRange = function(e4, t4) {
            this.setSelectionRangeIndices(e4, t4);
          }, t3.prototype.setPlaceHolder = function(e4) {
          }, t3.prototype.replaceUndoManager = function() {
            var e4 = this.jodit.history;
            this.instance.commands.addCommand({ name: "Undo", bindKey: { win: "Ctrl-Z", mac: "Command-Z" }, exec: function() {
              e4.undo();
            } }), this.instance.commands.addCommand({ name: "Redo", bindKey: { win: "Ctrl-Shift-Z", mac: "Command-Shift-Z" }, exec: function() {
              e4.redo();
            } });
          }, t3;
        }(o2(36729).SourceEditor);
        t2.AceEditor = a;
      }, 58633: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.TextAreaEditor = void 0;
        var n2 = o2(20255), r2 = o2(26911), i = o2(24263), a = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.autosize = t4.j.async.debounce(function() {
              t4.instance.style.height = "auto", t4.instance.style.height = t4.instance.scrollHeight + "px";
            }, t4.j.defaultTimeout), t4;
          }
          return n2.__extends(t3, e3), t3.prototype.init = function(e4) {
            var t4 = this;
            this.instance = e4.c.element("textarea", { class: "jodit-source__mirror" }), this.container.appendChild(this.instance), e4.e.on(this.instance, "mousedown keydown touchstart input", e4.async.debounce(this.toWYSIWYG, e4.defaultTimeout)).on("setMinHeight.source", function(e5) {
              (0, r2.css)(t4.instance, "minHeight", e5);
            }).on(this.instance, "change keydown mousedown touchstart input", this.autosize).on("afterSetMode.source", this.autosize).on(this.instance, "mousedown focus", function(t5) {
              e4.e.fire(t5.type, t5);
            }), this.autosize(), this.onReady();
          }, t3.prototype.destruct = function() {
            i.Dom.safeRemove(this.instance);
          }, t3.prototype.getValue = function() {
            return this.instance.value;
          }, t3.prototype.setValue = function(e4) {
            this.instance.value = e4;
          }, t3.prototype.insertRaw = function(e4) {
            var t4 = this.getValue();
            if (0 > this.getSelectionStart()) this.setValue(t4 + e4);
            else {
              var o3 = this.getSelectionStart(), n3 = this.getSelectionEnd();
              this.setValue(t4.substring(0, o3) + e4 + t4.substring(n3, t4.length));
            }
          }, t3.prototype.getSelectionStart = function() {
            return this.instance.selectionStart;
          }, t3.prototype.getSelectionEnd = function() {
            return this.instance.selectionEnd;
          }, t3.prototype.setSelectionRange = function(e4, t4) {
            void 0 === t4 && (t4 = e4), this.instance.setSelectionRange(e4, t4);
          }, Object.defineProperty(t3.prototype, "isFocused", { get: function() {
            return this.instance === this.j.od.activeElement;
          }, enumerable: false, configurable: true }), t3.prototype.focus = function() {
            this.instance.focus();
          }, t3.prototype.blur = function() {
            this.instance.blur();
          }, t3.prototype.setPlaceHolder = function(e4) {
            this.instance.setAttribute("placeholder", e4);
          }, t3.prototype.setReadOnly = function(e4) {
            e4 ? this.instance.setAttribute("readonly", "true") : this.instance.removeAttribute("readonly");
          }, t3.prototype.selectAll = function() {
            this.instance.select();
          }, t3.prototype.replaceUndoManager = function() {
            var e4 = this, t4 = this.jodit.history;
            this.j.e.on(this.instance, "keydown", function(o3) {
              if ((o3.ctrlKey || o3.metaKey) && "z" === o3.key) return o3.shiftKey ? t4.redo() : t4.undo(), e4.setSelectionRange(e4.getValue().length), false;
            });
          }, t3;
        }(o2(36729).SourceEditor);
        t2.TextAreaEditor = a;
      }, 52834: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        n2.__exportStar(o2(58633), t2), n2.__exportStar(o2(34186), t2);
      }, 94785: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.createSourceEditor = void 0;
        var n2 = o2(40332), r2 = o2(52834);
        t2.createSourceEditor = function(e3, t3, o3, i, a) {
          var s;
          if ((0, n2.isFunction)(e3)) s = e3(t3);
          else switch (e3) {
            case "ace":
              if (!t3.o.shadowRoot) {
                s = new r2.AceEditor(t3, o3, i, a);
                break;
              }
            default:
              s = new r2.TextAreaEditor(t3, o3, i, a);
          }
          return s.init(t3), s.onReadyAlways(function() {
            s.setReadOnly(t3.o.readonly);
          }), s;
        };
      }, 36729: function(e2, t2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.SourceEditor = void 0;
        var o2 = function() {
          function e3(e4, t3, o3, n2) {
            this.jodit = e4, this.container = t3, this.toWYSIWYG = o3, this.fromWYSIWYG = n2, this.className = "", this.isReady = false;
          }
          return Object.defineProperty(e3.prototype, "j", { get: function() {
            return this.jodit;
          }, enumerable: false, configurable: true }), e3.prototype.onReady = function() {
            this.replaceUndoManager(), this.isReady = true, this.j.e.fire(this, "ready");
          }, e3.prototype.onReadyAlways = function(e4) {
            var t3;
            this.isReady ? e4() : null === (t3 = this.j.events) || void 0 === t3 || t3.on(this, "ready", e4);
          }, e3;
        }();
        t2.SourceEditor = o2;
      }, 86030: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.source = void 0;
        var n2 = o2(20255);
        o2(68197);
        var r2 = o2(86893), i = o2(86893), a = o2(57549), s = o2(24263), l = o2(40332), c = o2(43441), u = o2(17332), d = o2(94785);
        o2(13985);
        var p = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.buttons = [{ name: "source", group: "source" }], t4.__lock = false, t4.__oldMirrorValue = "", t4.tempMarkerStart = "{start-jodit-selection}", t4.tempMarkerStartReg = /{start-jodit-selection}/g, t4.tempMarkerEnd = "{end-jodit-selection}", t4.tempMarkerEndReg = /{end-jodit-selection}/g, t4.getSelectionStart = function() {
              var e4, o3;
              return null !== (o3 = null === (e4 = t4.sourceEditor) || void 0 === e4 ? void 0 : e4.getSelectionStart()) && void 0 !== o3 ? o3 : 0;
            }, t4.getSelectionEnd = function() {
              var e4, o3;
              return null !== (o3 = null === (e4 = t4.sourceEditor) || void 0 === e4 ? void 0 : e4.getSelectionEnd()) && void 0 !== o3 ? o3 : 0;
            }, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.onInsertHTML = function(e4) {
            var t4;
            if (!this.j.o.readonly && !this.j.isEditorMode()) return null === (t4 = this.sourceEditor) || void 0 === t4 || t4.insertRaw(e4), this.toWYSIWYG(), false;
          }, t3.prototype.fromWYSIWYG = function(e4) {
            if (void 0 === e4 && (e4 = false), !this.__lock || true === e4) {
              this.__lock = true;
              var t4 = this.j.getEditorValue(false, i.SOURCE_CONSUMER);
              t4 !== this.getMirrorValue() && this.setMirrorValue(t4), this.__lock = false;
            }
          }, t3.prototype.toWYSIWYG = function() {
            if (!this.__lock) {
              var e4 = this.getMirrorValue();
              e4 !== this.__oldMirrorValue && (this.__lock = true, this.j.value = e4, this.__lock = false, this.__oldMirrorValue = e4);
            }
          }, t3.prototype.getNormalPosition = function(e4, t4) {
            for (t4 = t4.replace(/<(script|style|iframe)[^>]*>[^]*?<\/\1>/im, function(e5) {
              for (var t5 = "", o4 = 0; e5.length > o4; o4 += 1) t5 += i.INVISIBLE_SPACE;
              return t5;
            }); e4 > 0 && t4[e4] === i.INVISIBLE_SPACE; ) e4--;
            for (var o3 = e4; o3 > 0; ) {
              if ("<" === t4[--o3] && void 0 !== t4[o3 + 1] && t4[o3 + 1].match(/[\w/]+/i)) return o3;
              if (">" === t4[o3]) return e4;
            }
            return e4;
          }, t3.prototype.clnInv = function(e4) {
            return e4.replace(r2.INVISIBLE_SPACE_REG_EXP(), "");
          }, t3.prototype.onSelectAll = function(e4) {
            var t4;
            if ("selectall" === e4.toLowerCase() && this.j.getRealMode() === i.MODE_SOURCE) return null === (t4 = this.sourceEditor) || void 0 === t4 || t4.selectAll(), false;
          }, t3.prototype.getMirrorValue = function() {
            var e4;
            return (null === (e4 = this.sourceEditor) || void 0 === e4 ? void 0 : e4.getValue()) || "";
          }, t3.prototype.setMirrorValue = function(e4) {
            var t4;
            null === (t4 = this.sourceEditor) || void 0 === t4 || t4.setValue(e4);
          }, t3.prototype.setFocusToMirror = function() {
            var e4;
            null === (e4 = this.sourceEditor) || void 0 === e4 || e4.focus();
          }, t3.prototype.saveSelection = function() {
            if (this.j.getRealMode() === r2.MODE_WYSIWYG) this.j.s.save(), this.j.synchronizeValues(), this.fromWYSIWYG(true);
            else {
              if (this.j.o.editHTMLDocumentMode) return;
              var e4 = this.getMirrorValue();
              if (this.getSelectionStart() === this.getSelectionEnd()) {
                var t4 = this.j.s.marker(true), o3 = this.getNormalPosition(this.getSelectionStart(), this.getMirrorValue());
                this.setMirrorValue(e4.substring(0, o3) + this.clnInv(t4.outerHTML) + e4.substring(o3));
              } else {
                var n3 = this.j.s.marker(true), i2 = this.j.s.marker(false), a2 = (o3 = this.getNormalPosition(this.getSelectionStart(), e4), this.getNormalPosition(this.getSelectionEnd(), e4));
                this.setMirrorValue(e4.substring(0, o3) + this.clnInv(n3.outerHTML) + e4.substring(o3, a2 - o3) + this.clnInv(i2.outerHTML) + e4.substring(a2));
              }
              this.toWYSIWYG();
            }
          }, t3.prototype.removeSelection = function() {
            if (this.j.getRealMode() === r2.MODE_WYSIWYG) return this.__lock = true, this.j.s.restore(), void (this.__lock = false);
            var e4 = this.getMirrorValue(), t4 = 0, o3 = 0;
            try {
              if (e4 = e4.replace(/<span[^>]+data-jodit-selection_marker=(["'])start\1[^>]*>[<>]*?<\/span>/gim, this.tempMarkerStart).replace(/<span[^>]+data-jodit-selection_marker=(["'])end\1[^>]*>[<>]*?<\/span>/gim, this.tempMarkerEnd), !this.j.o.editHTMLDocumentMode && this.j.o.beautifyHTML) {
                var n3 = this.j.e.fire("beautifyHTML", e4);
                (0, l.isString)(n3) && (e4 = n3);
              }
              if (o3 = t4 = e4.indexOf(this.tempMarkerStart), e4 = e4.replace(this.tempMarkerStartReg, ""), -1 !== t4) {
                var i2 = e4.indexOf(this.tempMarkerEnd);
                -1 !== i2 && (o3 = i2);
              }
              e4 = e4.replace(this.tempMarkerEndReg, "");
            } finally {
              e4 = e4.replace(this.tempMarkerEndReg, "").replace(this.tempMarkerStartReg, "");
            }
            this.setMirrorValue(e4), this.setMirrorSelectionRange(t4, o3), this.toWYSIWYG(), this.setFocusToMirror();
          }, t3.prototype.setMirrorSelectionRange = function(e4, t4) {
            var o3;
            null === (o3 = this.sourceEditor) || void 0 === o3 || o3.setSelectionRange(e4, t4);
          }, t3.prototype.onReadonlyReact = function() {
            var e4;
            null === (e4 = this.sourceEditor) || void 0 === e4 || e4.setReadOnly(this.j.o.readonly);
          }, t3.prototype.afterInit = function(e4) {
            var t4 = this;
            if (this.mirrorContainer = e4.c.div("jodit-source"), e4.workplace.appendChild(this.mirrorContainer), e4.e.on("afterAddPlace changePlace afterInit", function() {
              e4.workplace.appendChild(t4.mirrorContainer);
            }), this.sourceEditor = (0, d.createSourceEditor)("area", e4, this.mirrorContainer, this.toWYSIWYG, this.fromWYSIWYG), e4.e.on(e4.ow, "keydown", function(e5) {
              var o4;
              e5.key === i.KEY_ESC && (null === (o4 = t4.sourceEditor) || void 0 === o4 ? void 0 : o4.isFocused) && t4.sourceEditor.blur();
            }), this.onReadonlyReact(), e4.e.on("placeholder.source", function(e5) {
              var o4;
              null === (o4 = t4.sourceEditor) || void 0 === o4 || o4.setPlaceHolder(e5);
            }).on("change.source", this.syncValueFromWYSIWYG).on("beautifyHTML", function(e5) {
              return e5;
            }), e4.o.beautifyHTML) {
              var o3 = function() {
                var t5, o4 = e4.ow.html_beautify;
                return !(!o4 || e4.isInDestruct || (null === (t5 = e4.events) || void 0 === t5 || t5.off("beautifyHTML").on("beautifyHTML", function(e5) {
                  return o4(e5);
                }), 0));
              };
              o3() || (0, l.loadNext)(e4, e4.o.beautifyHTMLCDNUrlsJS).then(o3);
            }
            this.syncValueFromWYSIWYG(true), this.initSourceEditor(e4);
          }, t3.prototype.syncValueFromWYSIWYG = function(e4) {
            void 0 === e4 && (e4 = false);
            var t4 = this.j;
            t4.getMode() !== i.MODE_SPLIT && t4.getMode() !== i.MODE_SOURCE || this.fromWYSIWYG(e4);
          }, t3.prototype.initSourceEditor = function(e4) {
            var t4, o3 = this;
            if ("area" !== e4.o.sourceEditor) {
              var n3 = (0, d.createSourceEditor)(e4.o.sourceEditor, e4, this.mirrorContainer, this.toWYSIWYG, this.fromWYSIWYG);
              n3.onReadyAlways(function() {
                var t5, r3;
                null === (t5 = o3.sourceEditor) || void 0 === t5 || t5.destruct(), o3.sourceEditor = n3, o3.syncValueFromWYSIWYG(true), null === (r3 = e4.events) || void 0 === r3 || r3.fire("sourceEditorReady", e4);
              });
            } else null === (t4 = this.sourceEditor) || void 0 === t4 || t4.onReadyAlways(function() {
              var t5;
              o3.syncValueFromWYSIWYG(true), null === (t5 = e4.events) || void 0 === t5 || t5.fire("sourceEditorReady", e4);
            });
          }, t3.prototype.beforeDestruct = function() {
            this.sourceEditor && (this.sourceEditor.destruct(), delete this.sourceEditor), s.Dom.safeRemove(this.mirrorContainer);
          }, n2.__decorate([(0, c.watch)(":insertHTML.source")], t3.prototype, "onInsertHTML", null), n2.__decorate([c.autobind], t3.prototype, "fromWYSIWYG", null), n2.__decorate([c.autobind], t3.prototype, "toWYSIWYG", null), n2.__decorate([c.autobind], t3.prototype, "getNormalPosition", null), n2.__decorate([(0, c.watch)(":beforeCommand.source")], t3.prototype, "onSelectAll", null), n2.__decorate([(0, c.watch)(":beforeSetMode.source")], t3.prototype, "saveSelection", null), n2.__decorate([(0, c.watch)(":afterSetMode.source")], t3.prototype, "removeSelection", null), n2.__decorate([c.autobind], t3.prototype, "setMirrorSelectionRange", null), n2.__decorate([(0, c.watch)(":readonly.source")], t3.prototype, "onReadonlyReact", null), n2.__decorate([c.autobind], t3.prototype, "syncValueFromWYSIWYG", null), t3;
        }(a.Plugin);
        t2.source = p, u.pluginSystem.add("source", p);
      }, 50876: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(77904);
        n2.Config.prototype.spellcheck = false, r2.Icon.set("spellcheck", o2(69546)), n2.Config.prototype.controls.spellcheck = { isActive: function(e3) {
          return e3.o.spellcheck;
        }, icon: o2(69546), name: "spellcheck", command: "toggleSpellcheck", tooltip: "Spellcheck" };
      }, 87882: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.zh_tw = t2.zh_cn = t2.tr = t2.ru = t2.pt_br = t2.pl = t2.nl = t2.mn = t2.ko = t2.ja = t2.it = t2.id = t2.hu = t2.he = t2.fr = t2.fa = t2.es = t2.de = t2.cs_cz = t2.ar = void 0;
        var n2 = o2(5586);
        t2.ar = n2;
        var r2 = o2(66023);
        t2.cs_cz = r2;
        var i = o2(65860);
        t2.de = i;
        var a = o2(86055);
        t2.es = a;
        var s = o2(50037);
        t2.fa = s;
        var l = o2(7118);
        t2.fr = l;
        var c = o2(30298);
        t2.he = c;
        var u = o2(52107);
        t2.hu = u;
        var d = o2(31240);
        t2.id = d;
        var p = o2(4101);
        t2.it = p;
        var f = o2(69286);
        t2.ja = f;
        var h = o2(13402);
        t2.ko = h;
        var m = o2(1242);
        t2.mn = m;
        var v = o2(89574);
        t2.nl = v;
        var g = o2(63630);
        t2.pl = g;
        var y = o2(72212);
        t2.pt_br = y;
        var _ = o2(82570);
        t2.ru = _;
        var b = o2(19323);
        t2.tr = b;
        var w = o2(50279);
        t2.zh_cn = w;
        var S = o2(98364);
        t2.zh_tw = S;
      }, 17002: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.spellcheck = void 0;
        var n2 = o2(20255), r2 = o2(57549), i = o2(67309), a = o2(43441), s = o2(17332);
        o2(50876);
        var l = function(e3) {
          function t3(t4) {
            var n3 = e3.call(this, t4) || this;
            return n3.buttons = [{ group: "state", name: "spellcheck" }], (0, s.extendLang)(o2(87882)), n3;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this;
            e4.e.on("afterInit afterAddPlace prepareWYSIWYGEditor", this.toggleSpellcheck), this.toggleSpellcheck(), e4.registerCommand("toggleSpellcheck", function() {
              t4.jodit.o.spellcheck = !t4.jodit.o.spellcheck, t4.toggleSpellcheck(), t4.j.e.fire("updateToolbar");
            });
          }, t3.prototype.toggleSpellcheck = function() {
            (0, i.attr)(this.jodit.editor, "spellcheck", this.jodit.o.spellcheck);
          }, t3.prototype.beforeDestruct = function(e4) {
          }, n2.__decorate([a.autobind], t3.prototype, "toggleSpellcheck", null), t3;
        }(r2.Plugin);
        t2.spellcheck = l, s.pluginSystem.add("spellcheck", l);
      }, 59818: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166);
        n2.Config.prototype.showCharsCounter = true, n2.Config.prototype.countHTMLChars = false, n2.Config.prototype.showWordsCounter = true;
      }, 1557: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.stat = void 0;
        var n2 = o2(20255), r2 = o2(86893), i = o2(85605), a = o2(24263), s = o2(17332);
        o2(59818);
        var l = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.charCounter = null, t4.wordCounter = null, t4.reInit = function() {
              t4.j.o.showCharsCounter && t4.charCounter && t4.j.statusbar.append(t4.charCounter, true), t4.j.o.showWordsCounter && t4.wordCounter && t4.j.statusbar.append(t4.wordCounter, true), t4.j.e.off("change keyup", t4.calc).on("change keyup", t4.calc), t4.calc();
            }, t4.calc = t4.j.async.throttle(function() {
              var e4 = t4.j.text;
              if (t4.j.o.showCharsCounter && t4.charCounter) {
                var o3 = t4.j.o.countHTMLChars ? t4.j.value : e4.replace((0, r2.SPACE_REG_EXP)(), "");
                t4.charCounter.textContent = t4.j.i18n("Chars: %d", o3.length);
              }
              t4.j.o.showWordsCounter && t4.wordCounter && (t4.wordCounter.textContent = t4.j.i18n("Words: %d", e4.replace((0, r2.INVISIBLE_SPACE_REG_EXP)(), "").split((0, r2.SPACE_REG_EXP)()).filter(function(e5) {
                return e5.length;
              }).length));
            }, t4.j.defaultTimeout), t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function() {
            this.charCounter = this.j.c.span(), this.wordCounter = this.j.c.span(), this.j.e.on("afterInit changePlace afterAddPlace", this.reInit), this.reInit();
          }, t3.prototype.beforeDestruct = function() {
            a.Dom.safeRemove(this.charCounter), a.Dom.safeRemove(this.wordCounter), this.j.e.off("afterInit changePlace afterAddPlace", this.reInit), this.charCounter = null, this.wordCounter = null;
          }, t3;
        }(i.Plugin);
        t2.stat = l, s.pluginSystem.add("stat", l);
      }, 40790: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166);
        n2.Config.prototype.toolbarSticky = true, n2.Config.prototype.toolbarDisableStickyForMobile = true, n2.Config.prototype.toolbarStickyOffset = 0;
      }, 82808: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.sticky = void 0;
        var n2 = o2(20255);
        o2(60057);
        var r2 = o2(86893), i = o2(85605), a = o2(24263), s = o2(40332), l = o2(43441), c = o2(17332);
        o2(40790);
        var u = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.isToolbarSticked = false, t4.createDummy = function(e4) {
              r2.IS_IE && !t4.dummyBox && (t4.dummyBox = t4.j.c.div(), t4.dummyBox.classList.add("jodit_sticky-dummy_toolbar"), t4.j.container.insertBefore(t4.dummyBox, e4));
            }, t4.addSticky = function(e4) {
              t4.isToolbarSticked || (t4.createDummy(e4), t4.j.container.classList.add("jodit_sticky"), t4.isToolbarSticked = true), (0, s.css)(e4, { top: t4.j.o.toolbarStickyOffset || null, width: t4.j.container.offsetWidth - 2 }), r2.IS_IE && t4.dummyBox && (0, s.css)(t4.dummyBox, { height: e4.offsetHeight });
            }, t4.removeSticky = function(e4) {
              t4.isToolbarSticked && ((0, s.css)(e4, { width: "", top: "" }), t4.j.container.classList.remove("jodit_sticky"), t4.isToolbarSticked = false);
            }, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this;
            e4.e.on(e4.ow, "scroll.sticky wheel.sticky mousewheel.sticky resize.sticky", this.onScroll).on("getStickyState.sticky", function() {
              return t4.isToolbarSticked;
            });
          }, t3.prototype.onScroll = function() {
            var e4 = this.jodit, t4 = e4.ow.pageYOffset || e4.od.documentElement && e4.od.documentElement.scrollTop || 0, o3 = (0, s.offset)(e4.container, e4, e4.od, true), n3 = e4.getMode() === r2.MODE_WYSIWYG && t4 + e4.o.toolbarStickyOffset > o3.top && o3.top + o3.height > t4 + e4.o.toolbarStickyOffset && !(e4.o.toolbarDisableStickyForMobile && this.isMobile());
            if (e4.o.toolbarSticky && true === e4.o.toolbar && this.isToolbarSticked !== n3) {
              var i2 = e4.toolbarContainer;
              i2 && (n3 ? this.addSticky(i2) : this.removeSticky(i2)), e4.e.fire("toggleSticky", n3);
            }
          }, t3.prototype.isMobile = function() {
            return this.j && this.j.options && this.j.container && this.j.o.sizeSM >= this.j.container.offsetWidth;
          }, t3.prototype.beforeDestruct = function(e4) {
            this.dummyBox && a.Dom.safeRemove(this.dummyBox), e4.e.off(e4.ow, "scroll.sticky wheel.sticky mousewheel.sticky resize.sticky", this.onScroll).off(".sticky");
          }, n2.__decorate([(0, l.throttle)()], t3.prototype, "onScroll", null), t3;
        }(i.Plugin);
        t2.sticky = u, c.pluginSystem.add("sticky", u);
      }, 31750: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(77904);
        n2.Config.prototype.usePopupForSpecialCharacters = false, n2.Config.prototype.specialCharacters = ["!", "&quot;", "#", "$", "%", "&amp;", "'", "(", ")", "*", "+", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "&lt;", "=", "&gt;", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "&euro;", "&lsquo;", "&rsquo;", "&ldquo;", "&rdquo;", "&ndash;", "&mdash;", "&iexcl;", "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", "&ordf;", "&laquo;", "&raquo;", "&not;", "&reg;", "&macr;", "&deg;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&frac14;", "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&OElig;", "&oelig;", "&#372;", "&#374", "&#373", "&#375;", "&sbquo;", "&#8219;", "&bdquo;", "&hellip;", "&trade;", "&#9658;", "&bull;", "&rarr;", "&rArr;", "&hArr;", "&diams;", "&asymp;"], r2.Icon.set("symbols", o2(43158)), n2.Config.prototype.controls.symbols = { hotkeys: ["ctrl+shift+i", "cmd+shift+i"], tooltip: "Insert Special Character", popup: function(e3, t3, o3, n3) {
          var r3 = e3.e.fire("generateSpecialCharactersTable.symbols");
          if (r3) {
            if (e3.o.usePopupForSpecialCharacters) {
              var i = e3.c.div();
              return i.classList.add("jodit-symbols"), i.appendChild(r3), e3.e.on(r3, "close_dialog", n3), i;
            }
            e3.alert(r3, "Select Special Character", void 0, "jodit-symbols").bindDestruct(e3);
            var a = r3.querySelector("a");
            a && a.focus();
          }
        } };
      }, 21236: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.zh_tw = t2.zh_cn = t2.tr = t2.ru = t2.pt_br = t2.pl = t2.nl = t2.mn = t2.ko = t2.ja = t2.it = t2.id = t2.hu = t2.he = t2.fr = t2.fa = t2.es = t2.de = t2.cs_cz = t2.ar = void 0;
        var n2 = o2(54261);
        t2.ar = n2;
        var r2 = o2(60425);
        t2.cs_cz = r2;
        var i = o2(7057);
        t2.de = i;
        var a = o2(48356);
        t2.es = a;
        var s = o2(11428);
        t2.fa = s;
        var l = o2(29084);
        t2.fr = l;
        var c = o2(22876);
        t2.he = c;
        var u = o2(20890);
        t2.hu = u;
        var d = o2(75987);
        t2.id = d;
        var p = o2(60379);
        t2.it = p;
        var f = o2(99950);
        t2.ja = f;
        var h = o2(60934);
        t2.ko = h;
        var m = o2(45913);
        t2.mn = m;
        var v = o2(21994);
        t2.nl = v;
        var g = o2(38128);
        t2.pl = g;
        var y = o2(71515);
        t2.pt_br = y;
        var _ = o2(58194);
        t2.ru = _;
        var b = o2(65802);
        t2.tr = b;
        var w = o2(86628);
        t2.zh_cn = w;
        var S = o2(32210);
        t2.zh_tw = S;
      }, 48560: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.symbols = void 0;
        var n2 = o2(20255);
        o2(33393);
        var r2 = o2(86893), i = o2(85605), a = o2(24263), s = o2(76502), l = o2(17332);
        o2(31750);
        var c = function(e3) {
          function t3(t4) {
            var n3 = e3.call(this, t4) || this;
            return n3.buttons = [{ name: "symbols", group: "insert" }], n3.countInRow = 17, (0, l.extendLang)(o2(21236)), n3;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            var t4 = this;
            e4.e.on("generateSpecialCharactersTable.symbols", function() {
              for (var o3 = e4.c.fromHTML('<div class="jodit-symbols__container">\n						<div class="jodit-symbols__container_table">\n							<table class="jodit-symbols__table"><tbody></tbody></table>\n						</div>\n						<div class="jodit-symbols__container_preview">\n							<div class="jodit-symbols__preview"></div>\n						</div>\n					</div>'), n3 = o3.querySelector(".jodit-symbols__preview"), i2 = o3.querySelector("table").tBodies[0], l2 = [], c2 = 0; e4.o.specialCharacters.length > c2; ) {
                for (var u = e4.c.element("tr"), d = 0; t4.countInRow > d && e4.o.specialCharacters.length > c2; d += 1, c2 += 1) {
                  var p = e4.c.element("td"), f = e4.c.fromHTML('<a\n									data-index="'.concat(c2, '"\n									data-index-j="').concat(d, '"\n									role="option"\n									tabindex="-1"\n							>').concat(e4.o.specialCharacters[c2], "</a>"));
                  l2.push(f), p.appendChild(f), u.appendChild(p);
                }
                i2.appendChild(u);
              }
              var h = t4;
              return e4.e.on(l2, "focus", function() {
                n3.innerHTML = this.innerHTML;
              }).on(l2, "mousedown", function(t5) {
                a.Dom.isTag(this, "a") && (e4.s.focus(), e4.s.insertHTML(this.innerHTML), e4.e.fire(this, "close_dialog"), t5 && t5.preventDefault(), t5 && t5.stopImmediatePropagation());
              }).on(l2, "mouseenter", function() {
                a.Dom.isTag(this, "a") && this.focus();
              }).on(l2, "keydown", function(t5) {
                var o4 = t5.target;
                if (a.Dom.isTag(o4, "a")) {
                  var n4 = parseInt((0, s.attr)(o4, "-index") || "0", 10), i3 = parseInt((0, s.attr)(o4, "data-index-j") || "0", 10), c3 = void 0;
                  switch (t5.key) {
                    case r2.KEY_UP:
                    case r2.KEY_DOWN:
                      void 0 === l2[c3 = t5.key === r2.KEY_UP ? n4 - h.countInRow : n4 + h.countInRow] && (c3 = t5.key === r2.KEY_UP ? Math.floor(l2.length / h.countInRow) * h.countInRow + i3 : i3) > l2.length - 1 && (c3 -= h.countInRow), l2[c3] && l2[c3].focus();
                      break;
                    case r2.KEY_RIGHT:
                    case r2.KEY_LEFT:
                      void 0 === l2[c3 = t5.key === r2.KEY_LEFT ? n4 - 1 : n4 + 1] && (c3 = t5.key === r2.KEY_LEFT ? l2.length - 1 : 0), l2[c3] && l2[c3].focus();
                      break;
                    case r2.KEY_ENTER:
                      e4.e.fire(o4, "mousedown"), t5.stopImmediatePropagation(), t5.preventDefault();
                  }
                }
              }), o3;
            });
          }, t3.prototype.beforeDestruct = function(e4) {
            e4.e.off("generateSpecialCharactersTable.symbols");
          }, t3;
        }(i.Plugin);
        t2.symbols = c, l.pluginSystem.add("symbols", c);
      }, 15797: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(20255).__exportStar(o2(41170), t2);
      }, 41170: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.onTabInsideLi = void 0;
        var n2 = o2(20255), r2 = o2(24263);
        o2(603), t2.onTabInsideLi = function(e3, t3) {
          if (void 0 === t3 && (t3 = false), !e3.o.tab.tabInsideLiInsertNewList) return false;
          var o3 = n2.__read(function(e4) {
            var t4 = e4.createInside.fake(), o4 = e4.createInside.fake(), n3 = e4.s.range.cloneRange();
            n3.collapse(true), n3.insertNode(t4);
            var r3 = e4.s.range.cloneRange();
            return r3.collapse(false), r3.insertNode(o4), [t4, o4];
          }(e3), 2), i = o3[0], a = o3[1];
          try {
            var s = function(e4, t4, o4) {
              var n3 = r2.Dom.closest(t4, "li", e4.editor);
              return !!n3 && !(!o4 && !r2.Dom.isTag(n3.previousElementSibling, "li")) && !(o4 && !r2.Dom.closest(n3, "li", e4.editor)) && n3;
            }(e3, i, t3);
            if (!s) return false;
            if (!function(e4, t4, o4) {
              var n3 = r2.Dom.closest(o4, "li", t4.editor);
              return !(!n3 || n3 !== e4 && !e4.contains(n3));
            }(s, e3, i)) return false;
            var l = r2.Dom.closest(s, ["ol", "ul"], e3.editor);
            return !(!l || t3 && !r2.Dom.closest(l, "li", e3.editor) || (t3 ? function(e4, t4, o4) {
              var n3 = r2.Dom.closest(t4, "li", e4.editor), i2 = Array.from(t4.children).filter(function(e5) {
                return r2.Dom.isTag(e5, "li");
              });
              r2.Dom.after(n3, o4);
              var a2 = i2.indexOf(o4);
              if (0 !== a2 && 1 !== i2.length || r2.Dom.safeRemove(t4), a2 !== i2.length - 1) {
                var s2 = t4.cloneNode();
                r2.Dom.append(o4, s2);
                for (var l2 = a2 + 1; i2.length > l2; l2 += 1) r2.Dom.append(s2, i2[l2]);
              }
            }(e3, l, s) : function(e4, t4, o4) {
              var n3 = o4.previousElementSibling, i2 = n3.lastElementChild, a2 = r2.Dom.isTag(i2, t4.tagName) ? i2 : e4.createInside.element(t4.tagName, Array.from(t4.attributes).reduce(function(e5, t5) {
                return e5[t5.name] = t5.value, e5;
              }, {}));
              a2.appendChild(o4), i2 !== a2 && n3.appendChild(a2);
            }(e3, l, s), 0));
          } finally {
            var c = e3.s.createRange();
            c.setStartAfter(i), c.setEndBefore(a), e3.s.selectRange(c), r2.Dom.safeRemove(i), r2.Dom.safeRemove(a);
          }
          return false;
        };
      }, 56198: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.tab = { tabInsideLiInsertNewList: true };
      }, 32246: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255), r2 = o2(57549), i = o2(43441), a = o2(86893), s = o2(17332), l = o2(15797);
        o2(56198);
        var c = function(e3) {
          function t3() {
            return null !== e3 && e3.apply(this, arguments) || this;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
          }, t3.prototype.__onTab = function(e4) {
            if (e4.key === a.KEY_TAB && this.__onShift(e4.shiftKey)) return false;
          }, t3.prototype.__onCommand = function(e4) {
            if (("indent" === e4 || "outdent" === e4) && this.__onShift("outdent" === e4)) return false;
          }, t3.prototype.__onShift = function(e4) {
            var t4 = (0, l.onTabInsideLi)(this.j, e4);
            return t4 && this.j.e.fire("afterTab", e4), t4;
          }, t3.prototype.beforeDestruct = function(e4) {
          }, n2.__decorate([(0, i.watch)(":keydown.tab")], t3.prototype, "__onTab", null), n2.__decorate([(0, i.watch)(":beforeCommand.tab")], t3.prototype, "__onCommand", null), t3;
        }(r2.Plugin);
        s.pluginSystem.add("tab", c);
      }, 23308: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.tableKeyboardNavigation = void 0;
        var n2 = o2(86893), r2 = o2(24263), i = o2(25120), a = o2(17332);
        function s(e3) {
          e3.e.off(".tableKeyboardNavigation").on("keydown.tableKeyboardNavigation", function(t3) {
            var o3, a2;
            if ((t3.key === n2.KEY_TAB || t3.key === n2.KEY_LEFT || t3.key === n2.KEY_RIGHT || t3.key === n2.KEY_UP || t3.key === n2.KEY_DOWN) && (o3 = e3.s.current(), a2 = r2.Dom.up(o3, function(e4) {
              return e4 && e4.nodeName && /^td|th$/i.test(e4.nodeName);
            }, e3.editor))) {
              var s2 = e3.s.range;
              if (t3.key === n2.KEY_TAB || o3 === a2 || (t3.key !== n2.KEY_LEFT && t3.key !== n2.KEY_UP || !(r2.Dom.prev(o3, function(e4) {
                return t3.key === n2.KEY_UP ? r2.Dom.isTag(e4, "br") : Boolean(e4);
              }, a2) || t3.key !== n2.KEY_UP && r2.Dom.isText(o3) && 0 !== s2.startOffset)) && (t3.key !== n2.KEY_RIGHT && t3.key !== n2.KEY_DOWN || !(r2.Dom.next(o3, function(e4) {
                return t3.key === n2.KEY_DOWN ? r2.Dom.isTag(e4, "br") : Boolean(e4);
              }, a2) || t3.key !== n2.KEY_DOWN && r2.Dom.isText(o3) && o3.nodeValue && s2.startOffset !== o3.nodeValue.length))) {
                var l = r2.Dom.up(a2, function(e4) {
                  return e4 && /^table$/i.test(e4.nodeName);
                }, e3.editor), c = null;
                switch (t3.key) {
                  case n2.KEY_TAB:
                  case n2.KEY_LEFT:
                    var u = t3.key === n2.KEY_LEFT || t3.shiftKey ? "prev" : "next";
                    (c = r2.Dom[u](a2, function(e4) {
                      return e4 && /^td|th$/i.test(e4.tagName);
                    }, l)) || (i.Table.appendRow(l, "next" !== u && l.querySelector("tr"), "next" === u, e3.createInside), c = r2.Dom[u](a2, r2.Dom.isCell, l));
                    break;
                  case n2.KEY_UP:
                  case n2.KEY_DOWN:
                    var d = 0, p = 0, f = i.Table.formalMatrix(l, function(e4, t4, o4) {
                      e4 === a2 && (d = t4, p = o4);
                    });
                    t3.key === n2.KEY_UP ? void 0 !== f[d - 1] && (c = f[d - 1][p]) : void 0 !== f[d + 1] && (c = f[d + 1][p]);
                }
                if (c) {
                  if (c.firstChild) t3.key === n2.KEY_TAB ? e3.s.select(c, true) : e3.s.setCursorIn(c, t3.key === n2.KEY_RIGHT || t3.key === n2.KEY_DOWN);
                  else {
                    var h = e3.createInside.element("br");
                    c.appendChild(h), e3.s.setCursorBefore(h);
                  }
                  return false;
                }
              }
            }
          });
        }
        t2.tableKeyboardNavigation = s, a.pluginSystem.add("tableKeyboardNavigation", s);
      }, 30739: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(64968), i = o2(76502), a = o2(40332), s = o2(77904);
        n2.Config.prototype.table = { selectionCellStyle: "border: 1px double #1e88e5 !important;", useExtraClassesOptions: false }, s.Icon.set("table", o2(51716)), n2.Config.prototype.controls.table = { data: { cols: 10, rows: 10, classList: { "table table-bordered": "Bootstrap Bordered", "table table-striped": "Bootstrap Striped", "table table-dark": "Bootstrap Dark" } }, popup: function(e3, t3, o3, n3, s2) {
          for (var l = o3.data && o3.data.rows ? o3.data.rows : 10, c = o3.data && o3.data.cols ? o3.data.cols : 10, u = e3.c.fromHTML('<form class="jodit-form jodit-form__inserter"><div class="jodit-form__table-creator-box"><div class="jodit-form__container"></div><div class="jodit-form__options">' + function() {
            if (!e3.o.table.useExtraClassesOptions) return "";
            var t4 = [];
            if (o3.data) {
              var n4 = o3.data.classList;
              Object.keys(n4).forEach(function(e4) {
                t4.push('<label class="jodit_vertical_middle"><input class="jodit-checkbox" value="'.concat(e4, '" type="checkbox"/>').concat(n4[e4], "</label>"));
              });
            }
            return t4.join("");
          }() + '</div></div><label class="jodit-form__center"><span>1</span> &times; <span>1</span></label></form>'), d = u.querySelectorAll("span")[0], p = u.querySelectorAll("span")[1], f = u.querySelector(".jodit-form__container"), h = u.querySelector(".jodit-form__options"), m = [], v = l * c, g = 0; v > g; g += 1) m[g] || m.push(e3.c.element("span", { dataIndex: g }));
          if (e3.e.on(f, "mousemove", function(e4, t4) {
            var o4 = e4.target;
            if (r2.Dom.isTag(o4, "span")) {
              for (var n4 = void 0 === t4 || isNaN(t4) ? parseInt((0, i.attr)(o4, "-index") || "0", 10) : t4 || 0, a2 = Math.ceil((n4 + 1) / c), s3 = n4 % c + 1, l2 = 0; m.length > l2; l2 += 1) m[l2].className = l2 % c + 1 > s3 || a2 < Math.ceil((l2 + 1) / c) ? "" : "jodit_hovered";
              p.textContent = s3.toString(), d.textContent = a2.toString();
            }
          }).on(f, "touchstart mousedown", function(t4) {
            var o4 = t4.target;
            if (t4.preventDefault(), t4.stopImmediatePropagation(), r2.Dom.isTag(o4, "span")) {
              var s3 = parseInt((0, i.attr)(o4, "-index") || "0", 10), l2 = Math.ceil((s3 + 1) / c), u2 = s3 % c + 1, d2 = e3.createInside, p2 = d2.element("tbody"), f2 = d2.element("table");
              f2.appendChild(p2);
              for (var m2, v2, g2 = null, y2 = 1; l2 >= y2; y2 += 1) {
                m2 = d2.element("tr");
                for (var _2 = 1; u2 >= _2; _2 += 1) v2 = d2.element("td"), g2 || (g2 = v2), (0, a.css)(v2, "width", (100 / u2).toFixed(4) + "%"), v2.appendChild(d2.element("br")), m2.appendChild(d2.text("\n")), m2.appendChild(d2.text("	")), m2.appendChild(v2);
                p2.appendChild(d2.text("\n")), p2.appendChild(m2);
              }
              (0, a.$$)("input[type=checkbox]:checked", h).forEach(function(e4) {
                e4.value.split(/[\s]+/).forEach(function(e5) {
                  f2.classList.add(e5);
                });
              }), e3.editor.firstChild && e3.s.insertNode(d2.text("\n"), false, false), e3.s.insertNode(f2, false), g2 && (e3.s.setCursorIn(g2), (0, a.scrollIntoViewIfNeeded)(g2, e3.editor, e3.ed)), n3();
            }
          }), s2 && s2.parentElement) {
            for (g = 0; l > g; g += 1) {
              for (var y = e3.c.div(), _ = 0; c > _; _ += 1) y.appendChild(m[g * c + _]);
              f.appendChild(y);
            }
            m[0] && (m[0].className = "hovered");
          }
          return u;
        }, tooltip: "Insert table" };
      }, 45842: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.table = void 0, o2(51057);
        var n2 = o2(17332);
        function r2(e3) {
          e3.registerButton({ name: "table", group: "insert" });
        }
        o2(30739), t2.table = r2, n2.pluginSystem.add("table", r2);
      }, 79114: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(93166), r2 = o2(718), i = o2(40332), a = o2(95963), s = o2(96516);
        o2(77904).Icon.set("video", o2(49222)), n2.Config.prototype.controls.video = { popup: function(e3, t3, o3, n3) {
          var l = new a.UIForm(e3, [new a.UIBlock(e3, [new a.UIInput(e3, { name: "url", required: true, label: "URL", placeholder: "https://", validators: ["url"] })]), new a.UIBlock(e3, [(0, s.Button)(e3, "", "Insert", "primary").onAction(function() {
            return l.submit();
          })])]), c = new a.UIForm(e3, [new a.UIBlock(e3, [new a.UITextArea(e3, { name: "code", required: true, label: "Embed code" })]), new a.UIBlock(e3, [(0, s.Button)(e3, "", "Insert", "primary").onAction(function() {
            return c.submit();
          })])]), u = [], d = function(t4) {
            e3.s.restore(), e3.s.insertHTML(t4), n3();
          };
          return e3.s.save(), u.push({ icon: "link", name: "Link", content: l.container }, { icon: "source", name: "Code", content: c.container }), l.onSubmit(function(e4) {
            d((0, i.convertMediaUrlToVideoEmbed)(e4.url));
          }), c.onSubmit(function(e4) {
            d(e4.code);
          }), (0, r2.TabsWidget)(e3, u);
        }, tags: ["iframe"], tooltip: "Insert youtube/vimeo video" };
      }, 19889: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(17332);
        o2(79114), n2.pluginSystem.add("video", function(e3) {
          e3.registerButton({ name: "video", group: "media" });
        });
      }, 64401: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.wrapNodes = { exclude: ["hr", "style", "br"], emptyBlockAfterInit: true };
      }, 20728: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255), r2 = o2(57549), i = o2(64968), a = o2(24421), s = o2(43441), l = o2(17332);
        o2(64401);
        var c = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.isSuitableStart = function(e4) {
              return i.Dom.isText(e4) && (0, a.isString)(e4.nodeValue) && /[^\s]/.test(e4.nodeValue) || t4.isNotClosed(e4) && !i.Dom.isTemporary(e4);
            }, t4.isSuitable = function(e4) {
              return i.Dom.isText(e4) || t4.isNotClosed(e4);
            }, t4.isNotClosed = function(e4) {
              return i.Dom.isElement(e4) && !(i.Dom.isBlock(e4) || i.Dom.isTag(e4, t4.j.o.wrapNodes.exclude));
            }, t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function(e4) {
            "br" !== e4.o.enter.toLowerCase() && e4.e.on("drop.wtn focus.wtn keydown.wtn mousedown.wtn afterInit.wtn", this.preprocessInput, { top: true }).on("afterInit.wtn postProcessSetEditorValue.wtn", this.postProcessSetEditorValue);
          }, t3.prototype.beforeDestruct = function(e4) {
            e4.e.off(".wtn");
          }, t3.prototype.postProcessSetEditorValue = function() {
            var e4 = this.jodit;
            if (e4.isEditorMode()) {
              for (var t4 = e4.editor.firstChild, o3 = false; t4; ) {
                if (t4 = this.checkAloneListLeaf(t4, e4), this.isSuitableStart(t4)) {
                  o3 || e4.s.save(), o3 = true;
                  var n3 = e4.createInside.element(e4.o.enter);
                  for (i.Dom.before(t4, n3); t4 && this.isSuitable(t4); ) {
                    var r3 = t4.nextSibling;
                    n3.appendChild(t4), t4 = r3;
                  }
                  n3.normalize(), t4 = n3;
                }
                t4 = t4 && t4.nextSibling;
              }
              o3 && (e4.s.restore(), "afterInit" === e4.e.current && e4.e.fire("internalChange"));
            }
          }, t3.prototype.checkAloneListLeaf = function(e4, t4) {
            var o3 = e4, n3 = e4;
            do {
              if (!i.Dom.isElement(n3) || !i.Dom.isTag(n3, "li") || i.Dom.isTag(n3.parentElement, ["ul", "ol"])) break;
              var r3 = i.Dom.findNotEmptySibling(n3, false);
              i.Dom.isTag(o3, "ul") ? o3.appendChild(n3) : o3 = i.Dom.wrap(n3, "ul", t4.createInside), n3 = r3;
            } while (n3);
            return o3;
          }, t3.prototype.preprocessInput = function() {
            var e4 = this.jodit, t4 = "afterInit" === e4.e.current;
            if (e4.isEditorMode() && !e4.editor.firstChild && (e4.o.wrapNodes.emptyBlockAfterInit || !t4)) {
              var o3 = e4.createInside.element(e4.o.enter), n3 = e4.createInside.element("br");
              i.Dom.append(o3, n3), i.Dom.append(e4.editor, o3), e4.s.isFocused() && e4.s.setCursorBefore(n3), e4.e.fire("internalChange");
            }
          }, n2.__decorate([s.autobind], t3.prototype, "postProcessSetEditorValue", null), n2.__decorate([s.autobind], t3.prototype, "preprocessInput", null), t3;
        }(r2.Plugin);
        l.pluginSystem.add("wrapNodes", c);
      }, 71707: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(93166).Config.prototype.showXPathInStatusbar = true;
      }, 18238: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true });
        var n2 = o2(20255);
        o2(64618);
        var r2 = o2(86893), i = o2(60403), a = o2(64968), s = o2(40332), l = o2(57549), c = o2(81438), u = o2(17332);
        o2(71707);
        var d = function(e3) {
          function t3() {
            var t4 = null !== e3 && e3.apply(this, arguments) || this;
            return t4.onContext = function(e4, o3) {
              return t4.menu || (t4.menu = new i.ContextMenu(t4.j)), t4.menu.show(o3.clientX, o3.clientY, [{ icon: "bin", title: e4 === t4.j.editor ? "Clear" : "Remove", exec: function() {
                e4 !== t4.j.editor ? a.Dom.safeRemove(e4) : t4.j.value = "", t4.j.synchronizeValues();
              } }, { icon: "select-all", title: "Select", exec: function() {
                t4.j.s.select(e4);
              } }]), false;
            }, t4.onSelectPath = function(e4, o3) {
              t4.j.s.focus();
              var n3 = (0, s.attr)(o3.target, "-path") || "/";
              if ("/" === n3) return t4.j.execCommand("selectall"), false;
              try {
                var r3 = t4.j.ed.evaluate(n3, t4.j.editor, null, XPathResult.ANY_TYPE, null).iterateNext();
                if (r3) return t4.j.s.select(r3), false;
              } catch (e5) {
              }
              return t4.j.s.select(e4), false;
            }, t4.tpl = function(e4, o3, n3, r3) {
              var i2 = t4.j.c.fromHTML('<span class="jodit-xpath__item"><a role="button" data-path="'.concat(o3, '" title="').concat(r3, `" tabindex="-1"'>`).concat((0, s.trim)(n3), "</a></span>")), a2 = i2.firstChild;
              return t4.j.e.on(a2, "click", t4.onSelectPath.bind(t4, e4)).on(a2, "contextmenu", t4.onContext.bind(t4, e4)), i2;
            }, t4.removeSelectAll = function() {
              t4.selectAllButton && (t4.selectAllButton.destruct(), delete t4.selectAllButton);
            }, t4.appendSelectAll = function() {
              t4.removeSelectAll(), t4.selectAllButton = (0, c.makeButton)(t4.j, n2.__assign({ name: "selectall" }, t4.j.o.controls.selectall)), t4.selectAllButton.state.size = "tiny", t4.container && t4.container.insertBefore(t4.selectAllButton.container, t4.container.firstChild);
            }, t4.calcPathImd = function() {
              if (!t4.isDestructed) {
                var e4, o3, n3, i2 = t4.j.s.current();
                t4.container && (t4.container.innerHTML = r2.INVISIBLE_SPACE), i2 && a.Dom.up(i2, function(r3) {
                  r3 && t4.j.editor !== r3 && !a.Dom.isText(r3) && (e4 = r3.nodeName.toLowerCase(), o3 = (0, s.getXPathByElement)(r3, t4.j.editor).replace(/^\//, ""), n3 = t4.tpl(r3, o3, e4, t4.j.i18n("Select %s", e4)), t4.container && t4.container.insertBefore(n3, t4.container.firstChild));
                }, t4.j.editor), t4.appendSelectAll();
              }
            }, t4.calcPath = t4.j.async.debounce(t4.calcPathImd, 2 * t4.j.defaultTimeout), t4;
          }
          return n2.__extends(t3, e3), t3.prototype.afterInit = function() {
            var e4 = this;
            this.j.o.showXPathInStatusbar && (this.container = this.j.c.div("jodit-xpath"), this.j.e.off(".xpath").on("mouseup.xpath change.xpath keydown.xpath changeSelection.xpath", this.calcPath).on("afterSetMode.xpath afterInit.xpath changePlace.xpath", function() {
              e4.j.o.showXPathInStatusbar && e4.container && (e4.j.statusbar.append(e4.container), e4.j.getRealMode() === r2.MODE_WYSIWYG ? e4.calcPath() : (e4.container && (e4.container.innerHTML = r2.INVISIBLE_SPACE), e4.appendSelectAll()));
            }), this.calcPath());
          }, t3.prototype.beforeDestruct = function() {
            this.j && this.j.events && this.j.e.off(".xpath"), this.removeSelectAll(), this.menu && this.menu.destruct(), a.Dom.safeRemove(this.container), delete this.menu, delete this.container;
          }, t3;
        }(l.Plugin);
        u.pluginSystem.add("xpath", d);
      }, 89019: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), o2(61227), o2(690), o2(66622), o2(69220), o2(10444), Array.prototype.includes || (Array.prototype.includes = function(e3) {
          return this.indexOf(e3) > -1;
        }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", { value: function(e3, t3) {
          if (null == e3) throw new TypeError("Cannot convert undefined or null to object");
          for (var o3 = Object(e3), n2 = 1; arguments.length > n2; n2++) {
            var r2 = arguments[n2];
            if (null != r2) for (var i in r2) Object.prototype.hasOwnProperty.call(r2, i) && (o3[i] = r2[i]);
          }
          return o3;
        }, writable: true, configurable: true }), Array.prototype.find || (Array.prototype.find = function(e3) {
          return this.indexOf(e3) > -1 ? e3 : void 0;
        }), String.prototype.endsWith || (String.prototype.endsWith = function(e3) {
          return this[this.length - 1] === e3;
        });
      }, 15261: function(e2, t2, o2) {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.valign = t2.upload = t2.update = t2.unlock = t2.settings = t2.save = t2.right = t2.resize_handler = t2.plus = t2.pencil = t2.ok = t2.lock = t2.left = t2.info_circle = t2.folder = t2.file = t2.eye = t2.dots = t2.chevron = t2.check = t2.center = t2.cancel = t2.bin = t2.angle_up = t2.angle_right = t2.angle_left = t2.angle_down = void 0;
        var n2 = o2(1755);
        t2.angle_down = n2;
        var r2 = o2(74911);
        t2.angle_left = r2;
        var i = o2(8805);
        t2.angle_right = i;
        var a = o2(16547);
        t2.angle_up = a;
        var s = o2(10856);
        t2.bin = s;
        var l = o2(98441);
        t2.cancel = l;
        var c = o2(52488);
        t2.center = c;
        var u = o2(9370);
        t2.check = u;
        var d = o2(66543);
        t2.chevron = d;
        var p = o2(608);
        t2.dots = p;
        var f = o2(42840);
        t2.eye = f;
        var h = o2(79096);
        t2.file = h;
        var m = o2(33014);
        t2.folder = m;
        var v = o2(91677);
        t2.info_circle = v;
        var g = o2(8259);
        t2.left = g;
        var y = o2(64467);
        t2.lock = y;
        var _ = o2(86934);
        t2.ok = _;
        var b = o2(76133);
        t2.pencil = b;
        var w = o2(45519);
        t2.plus = w;
        var S = o2(90265);
        t2.resize_handler = S;
        var C = o2(81279);
        t2.right = C;
        var j = o2(68899);
        t2.save = j;
        var E = o2(70744);
        t2.settings = E;
        var x = o2(19201);
        t2.unlock = x;
        var k = o2(84930);
        t2.update = k;
        var T = o2(99704);
        t2.upload = T;
        var I = o2(2304);
        t2.valign = I;
      }, 80078: function(e2) {
        e2.exports = { "copy-format": "نسخ التنسيق" };
      }, 16986: function(e2) {
        e2.exports = { "copy-format": "Kopírovat formát" };
      }, 59347: function(e2) {
        e2.exports = { "copy-format": "Format kopierenт" };
      }, 63640: function(e2) {
        e2.exports = { "copy-format": "Copiar formato" };
      }, 53434: function(e2) {
        e2.exports = { "copy-format": "کپی کردن قالب" };
      }, 85638: function(e2) {
        e2.exports = { "copy-format": "Format de copie" };
      }, 31743: function(e2) {
        e2.exports = { "copy-format": "העתק עיצוב" };
      }, 66219: function(e2) {
        e2.exports = { "copy-format": "Formátum másolás" };
      }, 50331: function(e2) {
        e2.exports = { "copy-format": "salin format" };
      }, 25582: function(e2) {
        e2.exports = { "copy-format": "Copia il formato" };
      }, 82066: function(e2) {
        e2.exports = { "copy-format": "copyformat" };
      }, 71925: function(e2) {
        e2.exports = { "copy-format": "복사 형식" };
      }, 12689: function(e2) {
        e2.exports = { "copy-format": "Формат хуулах" };
      }, 65274: function(e2) {
        e2.exports = { "copy-format": "opmaak kopiëren" };
      }, 58548: function(e2) {
        e2.exports = { "copy-format": "format kopii" };
      }, 82958: function(e2) {
        e2.exports = { "copy-format": "Copiar formato" };
      }, 52315: function(e2) {
        e2.exports = { "copy-format": "Копировать формат" };
      }, 87727: function(e2) {
        e2.exports = { "copy-format": "Kopyalama Biçimi" };
      }, 9396: function(e2) {
        e2.exports = { "copy-format": "复制格式" };
      }, 28765: function(e2) {
        e2.exports = { "copy-format": "複製格式" };
      }, 47762: function(e2) {
        e2.exports = { "Line height": "ارتفاع الخط" };
      }, 97495: function(e2) {
        e2.exports = { "Line height": "Výška čáry" };
      }, 80131: function(e2) {
        e2.exports = { "Line height": "Zeilenhöhe" };
      }, 1201: function(e2) {
        e2.exports = { "Line height": "Altura de la línea" };
      }, 89912: function(e2) {
        e2.exports = { "Line height": "ارتفاع خط" };
      }, 3405: function(e2) {
        e2.exports = { "Line height": "Hauteur de ligne" };
      }, 14129: function(e2) {
        e2.exports = { "Line height": "גובה שורה" };
      }, 93729: function(e2) {
        e2.exports = { "Line height": "Vonal magassága" };
      }, 16106: function(e2) {
        e2.exports = { "Line height": "Tinggi baris" };
      }, 89690: function(e2) {
        e2.exports = { "Line height": "Altezza linea" };
      }, 33216: function(e2) {
        e2.exports = { "Line height": "ラインの高さ" };
      }, 17282: function(e2) {
        e2.exports = { "Line height": "선 높이" };
      }, 52841: function(e2) {
        e2.exports = { "Line height": "Зураасны өндөр" };
      }, 91761: function(e2) {
        e2.exports = { "Line height": "Lijnhoogte" };
      }, 61675: function(e2) {
        e2.exports = { "Line height": "Wysokość linii" };
      }, 69709: function(e2) {
        e2.exports = { "Line height": "Altura da linha" };
      }, 82591: function(e2) {
        e2.exports = { "Line height": "Высота линии" };
      }, 87649: function(e2) {
        e2.exports = { "Line height": "Çizgi yüksekliği" };
      }, 60268: function(e2) {
        e2.exports = { "Line height": "线高" };
      }, 58214: function(e2) {
        e2.exports = { "Line height": "ความสูงเส้น" };
      }, 5586: function(e2) {
        e2.exports = { Spellcheck: "التدقيق الإملائي" };
      }, 66023: function(e2) {
        e2.exports = { Spellcheck: "Kontrola pravopisu" };
      }, 65860: function(e2) {
        e2.exports = { Spellcheck: "Rechtschreibprüfung" };
      }, 86055: function(e2) {
        e2.exports = { Spellcheck: "Corrección ortográfica" };
      }, 50037: function(e2) {
        e2.exports = { Spellcheck: "غلطیابی املایی" };
      }, 7118: function(e2) {
        e2.exports = { Spellcheck: "Vérification Orthographique" };
      }, 30298: function(e2) {
        e2.exports = { Spellcheck: "בדיקת איות" };
      }, 52107: function(e2) {
        e2.exports = { Spellcheck: "Helyesírás-ellenőrzés" };
      }, 31240: function(e2) {
        e2.exports = { Spellcheck: "Spellchecking" };
      }, 4101: function(e2) {
        e2.exports = { Spellcheck: "Controllo ortografico" };
      }, 69286: function(e2) {
        e2.exports = { Spellcheck: "スペルチェック" };
      }, 13402: function(e2) {
        e2.exports = { Spellcheck: "맞춤법 검사" };
      }, 1242: function(e2) {
        e2.exports = { Spellcheck: "Дүрмийн алдаа шалгах" };
      }, 89574: function(e2) {
        e2.exports = { Spellcheck: "Spellingcontrole" };
      }, 63630: function(e2) {
        e2.exports = { Spellcheck: "Sprawdzanie pisowni" };
      }, 72212: function(e2) {
        e2.exports = { Spellcheck: "Verificação ortográfica" };
      }, 82570: function(e2) {
        e2.exports = { Spellcheck: "Проверка орфографии" };
      }, 19323: function(e2) {
        e2.exports = { Spellcheck: "Yazım denetimi" };
      }, 50279: function(e2) {
        e2.exports = { Spellcheck: "拼写检查" };
      }, 98364: function(e2) {
        e2.exports = { Spellcheck: "สะกดคำ" };
      }, 54261: function(e2) {
        e2.exports = { symbols: "رمز" };
      }, 60425: function(e2) {
        e2.exports = { symbols: "symbol" };
      }, 7057: function(e2) {
        e2.exports = { symbols: "Symbol" };
      }, 48356: function(e2) {
        e2.exports = { symbols: "Símbolo" };
      }, 11428: function(e2) {
        e2.exports = { symbols: "سمبل" };
      }, 29084: function(e2) {
        e2.exports = { symbols: "caractère" };
      }, 22876: function(e2) {
        e2.exports = { symbols: "תו מיוחד" };
      }, 20890: function(e2) {
        e2.exports = { symbols: "Szimbólum" };
      }, 75987: function(e2) {
        e2.exports = { symbols: "simbol" };
      }, 60379: function(e2) {
        e2.exports = { symbols: "Simbolo" };
      }, 99950: function(e2) {
        e2.exports = { symbols: "symbol" };
      }, 60934: function(e2) {
        e2.exports = { symbols: "기호" };
      }, 45913: function(e2) {
        e2.exports = { symbols: "тэмдэгт" };
      }, 21994: function(e2) {
        e2.exports = { symbols: "symbool" };
      }, 38128: function(e2) {
        e2.exports = { symbols: "symbol" };
      }, 71515: function(e2) {
        e2.exports = { symbols: "Símbolo" };
      }, 58194: function(e2) {
        e2.exports = { symbols: "символ" };
      }, 65802: function(e2) {
        e2.exports = { symbols: "Sembol" };
      }, 86628: function(e2) {
        e2.exports = { symbols: "符号" };
      }, 32210: function(e2) {
        e2.exports = { symbols: "符號" };
      }, 52378: function(e2) {
        e2.exports = { assert() {
        } };
      } }, o = {};
      function n(e2) {
        var r2 = o[e2];
        if (void 0 !== r2) return r2.exports;
        var i = o[e2] = { exports: {} };
        return t[e2].call(i.exports, i, i.exports, n), i.exports;
      }
      n.m = t, e = [], n.O = function(t2, o2, r2, i) {
        if (!o2) {
          var a = 1 / 0;
          for (u = 0; e.length > u; u++) {
            o2 = e[u][0], r2 = e[u][1], i = e[u][2];
            for (var s = true, l = 0; o2.length > l; l++) (false & i || a >= i) && Object.keys(n.O).every(function(e2) {
              return n.O[e2](o2[l]);
            }) ? o2.splice(l--, 1) : (s = false, a > i && (a = i));
            if (s) {
              e.splice(u--, 1);
              var c = r2();
              void 0 !== c && (t2 = c);
            }
          }
          return t2;
        }
        i = i || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
        e[u] = [o2, r2, i];
      }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window) return window;
        }
      }(), n.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, n.r = function(e2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, function() {
        var e2 = { 670: 0 };
        n.O.j = function(t3) {
          return 0 === e2[t3];
        };
        var t2 = function(t3, o3) {
          var r2, i, a = o3[0], s = o3[1], l = o3[2], c = 0;
          if (a.some(function(t4) {
            return 0 !== e2[t4];
          })) {
            for (r2 in s) n.o(s, r2) && (n.m[r2] = s[r2]);
            if (l) var u = l(n);
          }
          for (t3 && t3(o3); a.length > c; c++) n.o(e2, i = a[c]) && e2[i] && e2[i][0](), e2[i] = 0;
          return n.O(u);
        }, o2 = self.webpackChunkjodit = self.webpackChunkjodit || [];
        o2.forEach(t2.bind(null, 0)), o2.push = t2.bind(null, o2.push.bind(o2));
      }();
      var r = {};
      return function() {
        var e2 = r;
        Object.defineProperty(e2, "__esModule", { value: true }), e2.CommitMode = e2.Jodit = void 0, n(90176), "undefined" != typeof window && n(89019);
        var t2 = n(37920);
        Object.defineProperty(e2, "Jodit", { enumerable: true, get: function() {
          return t2.Jodit;
        } });
        var o2 = n(26435), i = n(43441), a = n(86893), s = n(87837), l = n(15261);
        n(70022), n(91147), Object.keys(a).forEach(function(e3) {
          t2.Jodit[e3] = a[e3];
        });
        var c = function(e3) {
          return "__esModule" !== e3;
        };
        Object.keys(l).filter(c).forEach(function(e3) {
          s.Icon.set(e3.replace("_", "-"), l[e3]);
        }), Object.keys(s).filter(c).forEach(function(e3) {
          t2.Jodit.modules[e3] = s[e3];
        }), Object.keys(i).filter(c).forEach(function(e3) {
          t2.Jodit.decorators[e3] = i[e3];
        }), ["Confirm", "Alert", "Prompt"].forEach(function(e3) {
          t2.Jodit[e3] = s[e3];
        }), Object.keys(o2.default).filter(c).forEach(function(e3) {
          t2.Jodit.lang[e3] = o2.default[e3];
        }), e2.CommitMode = function() {
        };
      }(), n.O(r);
    }();
  });
})(jodit_min$2);
var jodit_minExports = jodit_min$2.exports;
const jodit_min = /* @__PURE__ */ getDefaultExportFromCjs(jodit_minExports);
const jodit_min$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jodit_min
}, [jodit_minExports]);
export {
  jodit_min$1 as j
};
