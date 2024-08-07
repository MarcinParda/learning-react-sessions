# Nazewnictwo elementów w Reactcie

## Komponenty

1. Używaj PascalCase dla nazw komponentów. Przykładowo: UserProfileCard, a nie userProfileCard lub user-profile-card.
2. Zawsze staraj się używać suffixu, który opisuje czym ten komponent właściwie jest. Czy jest to button czy może formularz. Przykładowo: Button, SettingsForm.
3. Używaj nazw, które dokładnie opisują przeznaczenie komponentu lub jego kontekstu. Przykładowo: UserProfileCard, CheckoutPaymentForm, AdminDashboardHeader.
4. Jeśli komponent jest wielokrotnego użytku, użyj nazwy ogólnej, a następnie dodaj modyfikator wskazujący na konkretne zastosowanie. Przykładowo: Button, PrimaryButton, ErrorMessage.
5. Unikaj nazw, które powtarzają nazwę rodzica. Jeśli komponent UserProfileCard ma komponent Avatar, nazwij go po prostu Avatar, a nie UserProfileCardAvatar. Oczywiście należy wtedy zachować odpowiednią hierarchię w strukturze plików.
6. Unikaj skrótów i akronimów, chyba że są powszechnie znane i zrozumiałe dla zespołu. Zamiast UPCard użyj UserProfileCard.

`UserPrimaryCard` - Przykład tworzenia komponentu: kontekst (User) + stan (Primary) + typ komponentu (Card).


## Propsy

Propsy komponentu to jego API, interfejs za pomocą którego następuje komunikacja z komponentem. W takim razie dobrze mieć spójne nazewnictwo propsów w całym komponencie.

Na początku skupmy się na tym, że jeśli mamy komponent dziecko i rodzic, to komunikacja może następować w dwie strony. Z rodzica do dziecka i z dziecka do rodzica.

### Jeśli chodzi o komunikację z rodzica do dziecka dzieli się ona na dwa różne rodzaje propsów:

1. Statyczne/dynamiczne propsy np. 
```tsx
<Person firstname=”Jack” lastname=”Sparrow” age={age} />   
```

Są to zmienne z konkretną przypisaną wartością (statyczną), lub wartością która może się zmieniać (dynamiczną).
Nazywamy je używając czasu teraźniejszego.

Czasem chcemy zaznaczyć, że zmienna jest konkretną struktrurą/typem.
- W przypadku zmiennych typu boolean używa się przedrostka `is` np. `isEnabled`.
- Używając liczby mnogiej przy listach np. users={[„John”, „Barbara”]}
- Można też to zaznaczyć poprzez użycie przyrostka np. userList, headerComponent, personObject. Od tego jednak się odchodzi ze względu na powszechne użycie typów, dzięki czemu można szybko sprawdzić strukturę propsa.

2. Komendy (command) są reakcją na zdarzenie (event), dlatego używamy ich jako **wartość** dla propsów nasłuchujących na zdarzenia (eventy) Np.
```tsx
<Button onClick={handleSendLoginForm} onHover={handleCheckFormErrors} />
<Button onClick={sendLoginForm} onHover={checkFormErrors} />
```

Są to funkcje, do którego nazewnictwa używamy czas teraźniejszy + opcjonalnie przedrostek handle. Staramy się nie używać nazewnictwa w stylu `handleOnClick`, ponieważ mało mówi o tym co funkcja robi, w nazwie komendy powinno być zawarte co się stanie po jej wywołaniu.


### Jeśli chodzi o komunikację z dziecka do rodzica to używamy propsów, które nazywają się zdarzeniami (eventami).

Zdarzenie obsługuję akcję, która już wystąpiła np. kliknięcie przycisku. Zazwyczaj akcje są wykonywane na elemencie DOM (przewijanie strony, ruszanie myszą, wciśnięcie przycisku). Przykładowe zdarzenia:

```tsx
function Button({onClick}) {
  return <button onClick={onClick} />;
}

function Button({onClick}) {
  const handleButtonClick() {
    // some side effect
    onClick()
  }
  return <button onClick={handleButtonClick} />;
}
```

Zdarzenia nazywamy używając czasu teraźniejszego oraz przedrosteka `on`. Przykładowo `onClick`, `onHover`, `onSubmit`, `onScroll`. Dobrą praktyką jest używanie typu zdarzenia na końcu (`onButtonClick` a nie `onClickButton`). 

Podsumowując, zdarzenia (`onClick`) wykorzystujemy, gdy chcemy przekazać informację z dziecka do rodzica. Komendy (`handleSaveForm`) i statyczne/dynamiczne propsy (`isEnabled`) wykorzystujemy, gdy chcemy przekazać informację z rodzica do dziecka.

