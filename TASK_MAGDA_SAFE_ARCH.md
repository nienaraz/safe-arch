# TASK: SAFE ARCH / Magdalena Przybysz — homepage refinement

## Cel

Dopracować istniejącą stronę homepage dla dr Magdaleny Przybysz / SAFE ARCH na bazie dostarczonych materiałów, uwag i assetów.

To nie jest zadanie na redesign od zera.  
To jest zadanie na uporządkowanie, dopracowanie i wdrożenie poprawek w istniejącym projekcie.

Strona ma być:
- premium,
- spokojna,
- nowoczesna,
- mobile-first,
- czytelna dla pacjenta,
- zgodna z marką osobistą Magdaleny Przybysz,
- przygotowana pod późniejszą edycję materiałów przez CMS.

## Najważniejsza zasada

Nie wymyślaj nowej identyfikacji wizualnej.

Nie twórz nowej palety kolorów od zera.  
Nie projektuj nowego design systemu od zera.  
Nie migruj projektu do innego frameworka.  
Nie przebudowuj całej strony i podstron jednocześnie.

Pracuj na istniejącym repo, istniejącym stacku i dostarczonych assetach.

## Źródła prawdy

### 1. Gradient

Dostarczony gradient jest głównym assetem wizualnym i źródłem prawdy dla atmosfery strony.

Użyj gradientu jako pliku graficznego / assetu, nie odtwarzaj go od zera w CSS.

Gradient ma prowadzić kierunek:
- miękki,
- jasny,
- spokojny,
- organiczny,
- premium,
- bardziej medical wellness / spa niż techniczna klinika.

Gradient powinien być używany jako:
- tło wybranych sekcji,
- subtelny visual background,
- element przejść między sekcjami,
- atmosfera hero / CTA / sekcji premium.

Nie zastępuj go agresywnymi kolorami ani nową paletą.

### 2. Materiały klientki

Klientka posiada komplet materiałów:
- logo / sygnaturę,
- gradient,
- zdjęcia Magdy,
- zdjęcia kliniki,
- filmy,
- metamorfozy,
- treści,
- materiały do opinii,
- materiały pod CMS.

Jeśli asset nie jest jeszcze w repo, zostaw jasne TODO i strukturę pod jego podmianę.

## Zakres pierwszego etapu

Pierwszy etap dotyczy tylko:

- homepage,
- headera,
- hero,
- sekcji statystyk,
- sekcji o Magdzie,
- cytatu,
- sekcji filmów,
- metamorfoz,
- obaw pacjenta,
- etapów leczenia,
- FAQ,
- kontaktu,
- mobile sticky CTA,
- globalnych styli potrzebnych dla homepage.

Nie ruszaj artykułów, podstron i większej architektury, jeśli nie jest to konieczne dla homepage.

## Tryb pracy dla Codexu

Najpierw wykonaj audit.  
Nie wdrażaj od razu całego zadania.

W pierwszej odpowiedzi / pierwszym etapie:

1. Przejrzyj repo.
2. Wskaż pliki odpowiedzialne za:
   - homepage,
   - style,
   - JavaScript,
   - media/assets,
   - SEO,
   - formularz,
   - sekcje strony.
3. Wskaż, które sekcje już istnieją.
4. Wskaż, które sekcje wymagają przebudowy.
5. Zaproponuj mały plan pierwszego PR-a.
6. Wskaż brakujące assety albo rzeczy do podmiany.
7. Nie rób migracji frameworka.
8. Nie instaluj dużych bibliotek bez konieczności.

Dopiero po audicie przejdź do wdrożenia pierwszego małego zakresu.

## Techniczne założenia

Zachowaj obecny stack projektu.

Repo wygląda na projekt oparty o HTML/CSS/JS.  
Nie migruj go do Next.js, Reacta, Astro ani innego frameworka bez wyraźnej potrzeby.

Preferowane podejście:
- uporządkować istniejące pliki,
- wydzielić dane do struktur JS / JSON-like,
- przygotować sekcje tak, aby później dało się je podłączyć pod CMS,
- nie hardcodować materiałów tam, gdzie powinny być wymienne.

## CMS-ready / data-driven structure

Strona ma być przygotowana pod późniejszy CMS.

Każda sekcja powinna być możliwie data-driven.

Przygotuj strukturę danych dla:

- hero,
- statystyk,
- bio Magdy,
- cytatu,
- filmów,
- opinii,
- metamorfoz,
- obaw pacjenta,
- etapów leczenia,
- FAQ,
- kontaktu,
- social links,
- SEO.

Każdy element powinien mieć tam, gdzie ma to sens:

- `id`,
- `title`,
- `subtitle`,
- `description`,
- `image`,
- `videoUrl`,
- `ctaLabel`,
- `ctaUrl`,
- `category`,
- `isVisible`,
- `order`.

Nie trzeba wdrażać pełnego CMS w tym etapie.  
Chodzi o przygotowanie logicznej struktury, która później będzie łatwa do podłączenia.

## Opinie i metamorfozy

Opinie i metamorfozy mogą być zaciągane ze źródeł zewnętrznych, jeśli da się to zrobić stabilnie.

Źródła:
- opinie: ZnanyLekarz / Google / materiały klientki,
- metamorfozy: Laser Dental Clinic / materiały klientki.

Zasada:
- jeśli istnieje stabilne API albo bezpieczna integracja, przygotuj pobieranie danych,
- jeśli nie ma API, nie rób kruchego scrapingu,
- w takim przypadku przygotuj strukturę CMS/data-driven i przykładowe rekordy,
- wszystkie opinie i metamorfozy muszą być później łatwe do podmiany w CMS.

## Kierunek komunikacji

Strona nie ma mówić językiem zimnej kliniki.

Ma mówić językiem marki osobistej Magdy:
- spokojnie,
- jasno,
- po ludzku,
- ekspercko,
- bez nadmiernego marketingu,
- bez straszenia,
- bez żargonu medycznego bez wyjaśnienia.

Teksty powinny być bardziej „od Magdy” i w razie potrzeby w pierwszej osobie.

## Kluczowe komunikaty

Wykorzystaj kierunek:

### Hero

H1:
`Chirurgia implantologiczna wymaga wiedzy, doświadczenia i spokoju.`

Lead:
`Od 2003 roku pomagam pacjentom odzyskać komfort, pewność siebie i poczucie bezpieczeństwa w leczeniu. Każde leczenie zaczynam od rozmowy, rzetelnej diagnostyki i jasnego planu działania.`

CTA:
- `Umów konsultację`
- `Zobacz, jak wygląda leczenie`

### Statystyki

- `20 lat doświadczenia pracy z pacjentami`
- `15 000+ wszczepionych implantów`
- `4.9/5 w opiniach pacjentów`

### Bio

Uwzględnij:
- `lek. dent. Magdalena Przybysz`
- `LEKARZ DENTYSTA`
- `Absolwentka Akademii Medycznej w Gdańsku`
- `European Master Degree in Oral Laser Applications`

Kierunek tekstu:

`Na co dzień zajmuję się chirurgią i leczeniem protetycznym. Wdrażam procedury laserowe przy zabiegach stomatologicznych. Przeprowadzam zabiegi implantologiczne, przywracam uśmiech i pewność siebie.`

`Nieustannie podnoszę kwalifikacje, uczestnicząc w kursach i szkoleniach krajowych i zagranicznych. Nigdy się nie poddaję i zawsze szukam rozwiązania problemu.`

### Cytat

Zachowaj cytat:

`Moim celem jest, aby każdy pacjent — niezależnie od tego, jak bardzo się bał, jak długo zwlekał, jak trudna jest jego sytuacja — czuł się przy mnie bezpiecznie. Nie spieszę. Tłumaczę każdy krok. Leczenie zaczyna się od rozmowy, nie od wiertła.`

## Sekcje do uporządkowania

### Header

- wymienić logo na sygnaturę `LDC Magdalena Przybysz`,
- sticky header,
- blur / delikatne tło po scrollu,
- prosta nawigacja,
- widoczne CTA,
- na mobile hamburger lub prosty panel.

### Hero

- użyć gradientu jako assetu / tła,
- premium, spokojny układ,
- krótszy tekst na mobile,
- dwa CTA,
- bez autoplay video z dźwiękiem.

### Statystyki

- liczby czytelne,
- `15 000+` jako licznik, jeśli jest to proste do wdrożenia,
- rating z gwiazdkami,
- spokojna, premium ekspozycja.

### O Magdzie

- bardziej osobisty ton,
- lepszy układ zdjęcie + tekst,
- bez przeładowania,
- jasna hierarchia.

### Cytat

- osobna sekcja,
- dużo oddechu,
- elegancka typografia,
- bez nadmiaru dekoracji.

### Filmy

Przygotować video library.

Kategorie:
- edukacja,
- koszty / pierwsze obawy,
- opinie pacjentów,
- metamorfozy,
- historie pacjentów,
- SAFE ARCH,
- zabiegi / konsultacje,
- dbanie o implanty.

Każdy film jako rekord danych:
- tytuł,
- kategoria,
- link YouTube,
- miniatura,
- opcjonalny opis,
- kolejność,
- widoczność.

Nie ładować wszystkich iframe od razu.  
Użyć lazy loading / kliknięcia do odtworzenia / linku.

### Metamorfozy

- przygotować estetyczny layout premium,
- nie robić surowej galerii medycznej,
- struktura pod before/after,
- możliwość podpięcia case studies z CMS,
- mobile jako karuzela lub pojedyncze karty.

### Obawy pacjenta

Przebudować jako bańki / myśli pacjenta.

Przykładowe obawy:
- `Boję się, że będzie bolało`
- `Nie wiem, czy w moim przypadku da się jeszcze coś zrobić`
- `Nie chcę czuć się potraktowana jak kolejny przypadek`
- `Boję się, że podejmę złą decyzję`

Do każdej dodać spokojną odpowiedź Magdy.

### Etapy leczenia

Uporządkować proces jako timeline / numbered cards:

1. Konsultacja i diagnostyka
2. Planowanie pracy tymczasowej
3. Zabieg implantologiczny
4. Proces gojenia i integracji implantów
5. Praca docelowa

Język ma być prosty, spokojny i zrozumiały.

### FAQ

- accordion,
- pytania językiem pacjenta,
- odpowiedzi krótkie i spokojne,
- dobre touch targety,
- dane przygotowane jako struktura CMS/data.

### Kontakt

- CTA: `Pierwszym krokiem jest spokojna konsultacja`
- formularz: imię, telefon, wiadomość, RODO,
- telefon jako link,
- WhatsApp, jeśli jest używany,
- adres, godziny, mapa, jeśli są dostępne.

## Mobile-first

To jest priorytet.

Sprawdź i napraw:

- overflow,
- elementy wychodzące poza viewport,
- za małe fonty,
- za ciasne odstępy,
- zbyt duże sekcje,
- niedziałające sticky/fixed,
- za małe CTA,
- problemy grid/flex,
- ucinające się zdjęcia,
- nieczytelne karty,
- zbyt długie linie tekstu.

Wymagania:
- touch targets minimum 44x44px,
- preferowane 48x48px,
- sticky CTA na dole na mobile,
- czytelny formularz,
- jedna kolumna tam, gdzie trzeba,
- galerie i video przyjazne dotykowi.

## Typografia i język polski

Popraw:

- wiszące spójniki,
- sieroty typograficzne,
- zbyt długie linie,
- podwójne spacje,
- interpunkcję,
- nienaturalne zdania,
- niespójny tone of voice,
- zbyt marketingowe sformułowania.

Nie zmieniaj sensu tekstów.  
Poprawiaj rytm i czytelność.

## SEO / performance / accessibility

Uwzględnij:

- `html lang="pl"`,
- meta title,
- meta description,
- Open Graph,
- alt texty,
- sitemap / robots, jeśli już są,
- lazy loading obrazów,
- optymalizację grafik,
- focus states,
- aria labels,
- semantic HTML,
- kontrast WCAG AA.

## Output po pracy

Po wykonaniu Codex ma opisać:

1. Jakie pliki zmienił.
2. Jakie sekcje przebudował.
3. Jak działa struktura data-driven / CMS-ready.
4. Jak użył gradientu jako assetu.
5. Co zostało przygotowane pod podmianę materiałów.
6. Jak rozwiązano mobile.
7. Co wymaga jeszcze materiałów / decyzji.
8. Jak przetestować stronę lokalnie.

## Kryteria akceptacji

- [ ] Codex nie wymyślił nowego brandingu.
- [ ] Gradient został użyty jako asset / visual source of truth.
- [ ] Homepage jest bardziej premium, spokojny i nowoczesny.
- [ ] Strona jest mobile-first.
- [ ] Sekcje są uporządkowane.
- [ ] Materiały są wymienne / przygotowane pod CMS.
- [ ] Filmy mają logiczną strukturę.
- [ ] Opinie i metamorfozy mają strukturę pod zaciąganie lub CMS.
- [ ] Nie ma overflow ani problemów z responsywnością.
- [ ] Copy jest bardziej osobiste i spokojne.
- [ ] SEO, accessibility i performance nie zostały pogorszone.
