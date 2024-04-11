import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table,Image, NavLink } from "react-bootstrap";
import { Nav } from 'react-bootstrap';


import style from "./CSS/Ui.module.css";


export default function Profile () {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div style={{position:"relative",zIndex:"1"}}>
       <nav className="navbar bg-body-tertiary">
          <div  style={{marginLeft:"30px"}} className="container">
            <a className="navbar-brand" href="#">
             <Image
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESEBIPEBISExUQFxcXFxUQFRkQFRUWFRIWGBUWFRUYHSggGBolGxcXITEjJS0rLi4uFx80ODMtNygtLisBCgoKDg0OGxAQGy0mICUxLS8tMi0tMi0tLi0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKwBJQMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUDCAL/xABNEAABAwICAwsFDAkBCQAAAAABAAIDBBEFEgYhMQcTIkFRYXGBkaHRFlJTkpMjMkJicnOCorHBwtIUFyUzNUNUsuHwJDRjdIOUo7Px/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EADgRAAIBAwAGBggHAAMBAAAAAAABAgMEEQUSITFBURMVUmGB8BQiMlNxkbHRFiMzQqHB4QZD8ST/2gAMAwEAAhEDEQA/ALxQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBp4hicMDc0rw2+wbXHoaNZXWlRqVXiCyR7i6pW8c1JYIvXac7RBF9KU/hb4q0paJf/AGS+RQ1/+Q8KMPF/Zfc5M2l1W7Y9rfksb+IFS46Mt1vWfH7YK2enLyW5pfBL+8n4ZpXWD+bfpYz7mrZ6Ot3+3+Wax01eL9/8L7G/S6bzD95Gx4+Ldh+8dyj1NEwfsNr47SZR/wCQ1k/zIp/DZ9yS4VpLTz2aHZHn4MnBJ6DsP2qtr2NaltayuaLy10rb3GxPD5M7F1DLIygCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAjGk+lAgvDDZ0vGdrWeLubt5FZWWj3W9eeyP1KTSellb/l09sv4X+kKp4J6qU5Q6R52knZzknUB/oK7lOlbQ27EeYp0q95U2Zk+fncSzDtB2AA1EhcfNj4LeguOs9yqa2lpPZTWPiX9t/x+CWa0svkt33+h3INHaRosIGH5YzntddQZXleW+T+haw0ZawWFTXjt+p6PwOlO2CLqYB9i1V1WX738zd2Fs/8Arj8jl1uhtM/93miPxTmHWHfcQpVLSdaPtbSBX0FbVPZzF93+kSxnR2enu5wzs89msD5Q2t+znVvbX1Kts3Pkzz15oqvbbXtjzX98jawTS6WEZJAZWjZc2c3mzHaOlcbnRsKnrQ2P+CTY6ZqUFqVPWXDmjqM0/jP8h/rDwULqqXaRZPT8F+x/M9fLlnoX+sPBZ6pn2kafiKn7tjy4Z6F/rDwWeqZ9pD8RU/dseXLPQv8AWHgnVM+0jP4ip+7Zjy6Z6B/rDwTqifaQ/ENPsMx5ds9A/wBYeCdUT7SM/iGn2GY8vGegf6w8FnqefaQ/EFPsMeXrPQP9YeCdTz7aM/iCHYZjy+Z6B/rDwWep59tDr+HYfzMeX7PQP9YeCdTT7aHX8Ow/mY/WBH6B/rDwWepp9tGevodhmP1gs/p3+sPBOpZ9tDr6HYZj9Ycf9O/1h4J1LPtoz17DsMfrDj/p3+sPBOpZ9tGevYdhnvTboFMTZ7JWc9g8dxv3LnPQ1dey0zpDTdCTxJNEiw3FYKgXhka+20A2cOlp1jrVfVt6lF4nFos6NxTrLMJZN1cTsEAQBAEAQBAEAQBAEAQEf0vxz9HiysPustw34o43eHP0KfYWvTzzL2Vv+xVaVvvRqeI+093d3kHwHCX1cuUEho1veddgT3uOvvV5dXMbaGePBeeB5exsp3lXHDi/PEs7D6COBgjiaGgdpPKTxleYq1Z1Za03tPb0LenQhqU1hG0uZ2CAIAgMOF9RQw1kgWl2jIjBqIBwNr2D4Pxm/F5uLo2Xuj79z/LqPbwf9HltLaKVNOtRWziuXeu4rfSHD8zTMwcJg12+E0feFYV6eVrLeV9jcar6OW57viRxkiiqRbOJ+s62ya4GdMjAzJkYGZMjAzJkYGZMjAzJkYGZMjAzIMDMmRgZkyMDMmRg9I6l7djnDr+5bKpJbmaSpxlvR08Pxx7HBxJa5ux7OC4dn3Luq6ktWoso4O3cXrUnhlsaH6bCYtgqSM7tTJRqa88QdxB3ceY7aq+0ZqLpaO2PLl/hbWOk9eXRVtkufMnCpi6CAIAgCAIAgCAIAgMOOq54kMN4KhxqvdU1LpBc5nZWD4t7MA5zt6SV662oqhRSfxf9ng7ytK6uHJcdi+HAs3AMLbTQNiFs2155XHb1cQ5gvM3Vd16jm/D4HsrK1jbUlBb+PxNfFtK6GmJbPUxNc3awOzyD/ptu7uUclkRxTdfpWXFPDNMeIvtAw9Zu76qAiOKbquIy3EW9U4OzI3fHj6T7j6oQHFptL8Ua50zauoOzNmO+Rj6DgWN6gFhySeGzOGSXC916sZYVEMMw5WXgd1nhNPYFkwS7DN1jD5LCUTQH47N8b1Ojue0BASzDcZpapp/R54ZhbhCN7XkD4zdo60Www0nsZW+lGF/o1Q5g947hM+SeLqNx2L1ljcdPSTe9bGeG0laejV2lue1ee4rTFqbepnNHvTwm9B4uo3HUo9WGpNos7ep0tJS48TXDljJ0wWro9uYU1RSQVDp52umja8huSwLm3sLtvZVtS9nGbikiyp2UJRTbIXpzgTKGrNNG972hjXXkte7r3GoAcSl29V1IazIlxRVOeER/Mu5wwdjRDCBWVsNK5zmtkzZnMtcBsbnXFxbaAOtcq1To4OSOtCkqk1FlmHchpeKoqP8Ax/lVf6fPkiw9AhzKgq4HRyPieLOic5jhyOa4tcO0FWkZayTRVyjqtokWgGi4xCeSN7nsjiZmc5lr5i4BjdYI18I/RUe5r9FFNbyRbUFVe3cTPFtymnjp5pY553Pjje5rXZLOc1hIBs3YSLKLC+k5JNIlTsYKLaZUuZWeSswdzRHRmbEJjFEQ1rADJI4XDAdmrjcbGw5jyLjWrqkss7UaDqvCLWo9yzD2NtIJpTxudIWdgZa3eq2V7Ve7YWUbKkltNTFNyWleCaeWWF3EHWmZ1g2d3raF/Ne1tNJ2MHu2FP18G9SyRZmv3tzm5mXLXZSQS242alaRlrRTKycdWTR7YbW5HZXHgu7jyqVb19R4e4i16OusreXtoHjxqYTHIbywWBJ2uafeu6dRB6L8ap9J2aoVNaPsy/juLjRl301PVl7SJQqwswgCAIAgCAIAgCA4+ltVvdHM4bS3KPpkN+9S7Gn0lxFedm0g6Sq9HbTkuWPnsIJoNSCSsYTsiBf1iwb3kHqV9pSpqW7S47DzWh6KqXKb4bfsWmvLHszTxDCqecZZ4YpR/wARjX26LjUgK73QdAqGCinq6dj4nxBpDWvLmHNI1pBa69hY8VkBUIdyjs1oD9Mmym7SQfi3BWGk94zg/b6t52gO53gE+t77vWqppbthtrPiXzhG51hsQDjBvp1653GQaj5nve5INuO0w95KqaljjaGRMZG0bGxtDB2BbmCMbotHmp2TccT7fRfqPeGq20RV1azhzX08spNOUdagp8Yv+H5RTWlsfBjk5CW9ouPsParW9jsUio0ZLbKHicBrlETLJo+ldBv4ZRfMR/2BUlb9SXxZeUfYRUe7Gf2ofmo/xKxsv0vErr1fmEHupZDwWFuKU2avkk4ooXes97QO4OUK+l6iXeTbKPrtl3KrLQondgwnecQ34Dg1bQ/mzss14H1XfTVtZ1NanjkVV5TxPPMnu5BhO84eJnCz6pxfr25BwYx0WBd9NQ7yetUxyJdpDVp55k3e0EEHYRY9BUUlHyvVwGKR8R2xOcw9LHFp+xegjLKTKCccSaLx3HKRrMMbIBrnkkc4/JdvYHRZneVU3ks1Mci1tIpUzO6fpZUUEcH6OxvuxeDI8FzWZQ2zQNmZ1ydfE06jxLWjGo3rGbmtKmlqkLj3Wao080UsbN9ewiOWLgZXHVdzSSCQCSCLawBbXcSnZR1k09hF9MlqtNFd3U0gi6DBP9zXFSypgJOp53l3OHWDe/IepSLmHT2T5x2/L/DjbS6C7XJ/3/peK8senCAIAgCAIAgCAICL7orrUfTIwdzj9ys9ELNx4MqNNP8A+bxRxdzIe6znkY0drj4Kbpt+rBd7IGgF6833IkeMaaYdS3E9XC0t2sad9eOmOO7h2Lz56Y7wcCLg6jxoDk6UYX+mUc9K14aZWgBx1gEODhe3FcLGQUnX6BYjESDTOeB8KEiUHoA4XaAsg57dGa4mwo6vrgkA7S2yA7mDbm1fM9u+x7xHcXfKRmtx5WAkk9NhzoC68JmzxBxFrl395UWzqOpSUmuf1OtaKjPCNxSjkcXTJgNDPfiaD2PaR9imaPeLmHxIOk4p2s88ijNKf936HN+8L0l6vy/E8vo39bwZFmOVai6aPpnQT+GUXzEf9gVNW/Ul8S4pewiod2U/tQ/NR/iVhZ/p+JAvF65BrqVkiYLg3CKX3Krn858cY+g0uP8A7Aq6+ltSLGyjiLZYlbizIqinpnanVQkydMTWuI7CexQ1BuLfIluSTS5nA3TNG3V1LG2Me6RysLTyNe4Mk6gHZz8hdbar0css5V6evHBJLxU1PxMipo+prI2fcAuO2Uu9nXZFfAxg9cKinhqALCeNkltts7A63esyjqya5CLykz543QaXesUrGcshf7Vok/Eri3lmmipuI4qMnW45pXE2M4dM8McHF0JccoeH63MufhZrkcubmUS8pPOuiXaVVjVZalTTMkYY5WNe121r2hzT0g6ioKbW1ExpPYyCaS7llJM1zqX/AGaXaMt3ROPI5h96OdtrchUqndzj7W1Eapawlu2MpTEaOSCV8Ezcr4nFrmniI+0HaDxghWcZKSTRWyg4vDNa6zk1wSDRSYh1x8F7HDpv/hT7XbSmn52EO52VIPzvPpReRPVBAEAQBAEAQBAEBG90CLNQvPmOY762X8SsdFSxcrvyVml461q+7BSGlrniAZXODS8B4a4gOBBtmA1OF7beVWemoZpRlyf1KrQU8VpR5r6EXjAtbiXmz1BeWiNaZqGmkJzHew1xPnR8B3e0qtqrE2i3oNOmmdmOQtN2kg8o1LRSa2o6SipLDR1aTGDseL841H/KkwuH+4h1LRb4m+/EWWuLnm2dpXZ1o4I6t55wzRnr3nYco5tvbtXGVaTJELeK7zXfUu2lxHXrXNzfM6qnHdg6OD1WcObe+W23n/8Aik0J6yaIlzT1Wmc/T2fJQyDjeWNHrgnuBVvoyGtcx7sv+Ck0tPVtZd+EUbpZLaBrfOeO4E+Cv794ppd55/Rkc1W+SIwwqsRcNH05oH/C6H5iL+wKnrfqS+Jb0/YRT+7Q79qn5mP8SsLP9Mg3S9cggdzqURcH0DuNUuTCmPt++kkf2P3sdzAqm6eahaWyxTIvux4y6DEaB0fvqVu/AXtfNLsPMRFboK72sNaEk+JxuZ6s4ls0NWyaKOaM3ZK1r2nla5oIPYVBaw8MmJ5WSC7tGN7xQtpmmz6t2XkO9ss6Q9ZyN6HFSbSGZ55HC5niGOZ19y+q3zCaU+a1zPZyOYO4Bc7hYqM3ovNNFYbtlLkxJr7apoWOvyua57D3Bqm2cvUwQ7uPr5IbSYVPLFLNFE98dPl3xzRfKHXsSNpGo3ts2mykOcU0m95HVOTWUdbANO6+ksI53PYP5c/urLcgvraPkkLnO3hPgdIVpxPojBq7f6aCoLSzfo2SZTtbnYHW6rqqktVtFpF5WSkd2uNrcUBbtfBG53Oc0jbn6LW9isrN/l+JX3a9cgV1KIuCW6CUhklibb97MwfRDhc9l+xTqL6O1qTfJ/QhVVr3EILuPoteTPUBAEAQBAEAQBAEBq4pSCaGSE/zGObfkJGo9R1rpRqOnUjNcGcq9NVKcoPiihsWoy+OSFws7WLHie06r9BC9jcUlcUHFcVs+qPG21R29dSfB7foyDx32HURqI5DyLxbTTwz2yaayi29x4Omp5oBb3GS+s7GytuPrNeolai5yyidQrxhDDJnVUz4/ft1cu0HrUadOUN5MhVhP2WeAZf3pseQ6wtMHTLR7Q1WQFrwb82sdq3jJJbTnKGs8o831mvKwEk8Q1krXWb3G2qltZtU2DTSa5DvY5PfO7NgXeFvKXtbCPUu4R2R2neoKBkLbMB17S43J6VLhTjBYRAq1ZVHmRBN0zFA6SOlaf3fDf8AKcOCOkNufpBel0LbtRdV8di/vz3Hl9N3ClJUlw2sp7SuqzStjH8sXPS7/AHaul/UzUUeX9mNG0tWm5vj/RyAVERNaPp7QL+F0P8Ay8X9gVRW9t/Etafso681FE85nxxuPK5oce0haZZthEG3YaOJmFSOZHG0h8WtrA0/vBxgKRat9IjjXitRkm0JpN6w2jjIsRDGT8pzQ53eSuNV5m2dKaxFIpPdhq8+LTN9CyKP6gf9ryrG1WKZCuXmZYm4pjW/UBpnG76N2Xbc72+7oz2529DAol1DE88yRbyzDBW26vjn6TiUoabspvcW69V2E74enOXDoaFLtoasPiRriWtMsbcMqs+HSRn+VO8DocxjvtLlFu16+STbP1DkbvtJqo5xxGWM9YY5v9rlvZy2tGl1HKTJPuRx0rMNjbTyske7hz5TwmyuAu1zdoygBo5Q2/GuNw5Oe060ElBYO1Nofhz5N9dR0xfe5O9t1nlcLWJ6Vp0s8Yyzfo48jpYjXxU8Tpp3tjjjFy5xsByAcp4gBrK0UXJ4Rs2kss+Z9MsfNdWzVViGuIaxp2tjaLNvznaedxVtRhqQSKyrPXlk5EMZe4NbrLjYLvCLlLVRxk1FNsubcowP3QzkcCnGRp5ZHDhHqaT64XXS1VUqMbePHf8AD/X9Dlouk6tWVeXh57kWmvOF+EAQBAEAQBAEAQBAVjui4KYpv0pg4E3vrfBkt+Ia+kFem0PdKcOilvW74f4eZ0vaak+ljue/4/6RrRfROhq6pwqZJmOdrayNzWMkNuECS0uB49RF9ai6WsnF9NDc9/3JWib3MehnvW77FuaPaNUlC1zaSER57ZnXc97st7ZnvJJtc8fGVRl4dZzQRYi4PLrQbjk1mAsdrjJjPNrb2cXUo87eL3bCVTu5x2S2mtFo4SfdJSRyMGXvN1orXmzrK9ePVR2KSijiFo2hvPtJ6SdZUmMIx3IhzqSm8yZsLY0OVpHjbKSEyOsXHUxnG53gOMqTaWsripqLdxfIi3d1G3p6z38EUni+Jkb5USm5JLjyucTqA+zmXr5OFvS2bluPJQjO5q7d73lfSSl7nPdrLiSetefcnKTk+J6JRUYqK3IzdbGMG/FjlWxoYyqqWtaLBrJ5GtaBsAAdYBa6keRupyXE/flDW/1lX/3Ev5ljUjyRnpJczyqsYqZW5JaiokadrZZXyNNtnBcSFlRityMOcnvZ6DSCsGoVdUAOIVEoA6OEsakeSM9JLmaU9Q97i+R7nudtc9xe48Wtx1lbLZuNHl7WetHiE0JJhlliLtpie6Im2y5aRdGk96MxbjuPBzySSSSTrJOsk8pWTU2aTE54gRDPNEHayIpHxAnlIaRdauKe9G0ZNbhV4rUSgNmnmlANwJZXyAG1rgOJsbEoopbkHJveeVLVyRPEkUj43jY6NxjcOhzSCstJ7zCbW4kMe6HizRlFbLb4zY3n1nMJXLoKfI69NM4+K41U1Lg6pnlmI2b44kN+S3Y3qC6RhGO5GkpSlvNSGNz3BrQXE8QXSEXJ4ic5NRWZbidaF6JSTSBjNbjbO+12xN+8/b0XKsG6djT6Sptk9y8/yyu9e8qdHT9nj5+iL4wvD2U8TIYhZrBbnJ43HnJ1rzFatKtNznvZ6SjSjSgoR3I21yOgQBAEAQBAEAQBAEBr19IyaN0UgzNeLEfeOQg67renUlTkpxe1HOrTjUi4SWxlPaR4FLRS2Nywm8cg1XtrAJGx4/yF7CzvKd1Dv4rzwPJ3dnO2n3cH54kq0Y09FhDWaiNQmGsH5wDYecddtqqr3Q7Tc6Hy+xZ2elk/UrfP7k7hma9oexzXNdrDmkOBHMRtVFKLi8SWGXcZKSynlHosGwQBARzSHTCnpgWgiWXzGHUD8d2xvRt5lYWmja1xtxiPN/0QLrSNKgsb3y+5V2K4pNVSmWUlzjsDRqaORreIL1FGjStaeFsXFnma1WpcTzLazh4jgE1S4Xc9jW7G72Tr4yde1V1xJXEvawkSKFd20f023z8o8m6CP9I72R/MuatY9tG70pP3T8+BnyFf6V3sj+Zbeix7aMdZz90/PgY8hn+kd7I/mT0WPbXnxM9Zz90/PgPId/pHeyP5ln0WPbXnxHWU/dPz4GPIh/pHeyP5k9Ej2158TPWU/dPz4GPIl/pHeyP5k9Ej2158R1lP3T8+BjyJf6R3sj+ZZ9Ej2158TPWM/dPz4GPIt/pHeyPinoke2vPiOsZe7fnwMeRj/Pf7I+Kehx7a8+JnrCXu358DHka/z3+yPis+hx7a8+I6wl7t+fAeRr/Pf7I+Kehx7a8+Jn0+fu358DHkc/z3+yPis+hQ7a8+Jn0+fu358DHke/zn+yPinoUPeLz4j06fu358DfoNA5XkWjqJOhhY3rdbV2rDo2tPbUqL5r/0K4uamynTJ5o9uZvFjNlhbxsjs+Q8xdrA6da4VdK0aS1beOe/ztZ2p6MrVXrV5eHnYix8Nw6KCMRQsDGjiG0nlJ2k85VFVrTqy15vLLqlShSjqwWEba5nUIAgCAIAgCAIAgCAIAgPCto45mOilYHtdtDv9ajzrenUlTkpQeGjSpTjUjqyWUV1j+59Kwl9Id8b6NxAeOgnU4dh6V6K00zCXq1tj58CgudESW2ltXLiRWCsqqR5a10sDtpabsv0sOo9YVrKlQuY5aUl54ldGpWt5YTaZ26fdBrmixMT+d7LH6pAUKehbaT2ZXj9yXHS1wltw/A9ZN0WsOxsDehrj9rlotB263t/x9jZ6Yr8EvPicfEdJ6ycZZJ3WPwWWjB5iG2v13Uylo+3pbYxXjt+pFq3txV2OXy2G1gmh1XUEHJvLPPlGXV8Vm09w51yudKUKOxPWfJfc6W+ja1V5awu8szR7RyCkbaMZnkcKR3vjzDzRzDvXmbu9q3Msy3cFwPRWtnTt16u/mdhRCUEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAeNTSRyNyysY9vI9oeOwraE5QeYvHwNZQjJYksnGn0NoHm5p2j5Dnx9zXAKZDSd1HdN+O36kWWj7aW+H9HmzQfDwb7xfpkkPdmWz0rdv9/8AC+xqtG2y/b/LOrQ4PTQ64oYmHla0ZvW2qLUuatT25N+JIp0KVP2YpG8uJ2CAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAID/2Q=="
                alt="Kochiva Logo"
                width="100"
                height="60"
              /> 
            </a>
            <div className={style.top}>
              <div >
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
        width="50"
        height="30"
      alt="User Thumbnail" className="userthumb" />
        <span style={{marginRight:'0px',fontSize:"14px"}}>Navreenkaur99@gmail.com</span>
      </div>
                <button className={style.dropdown} onClick={() => setIsOpen((prev) => !prev)}>
                <a href="#navbar" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
              
                  <Image
                    src="https://cdn.vectorstock.com/i/1000x1000/91/84/modern-menu-icon-for-mobile-apps-and-websites-vector-16849184.webp"
                    alt="Menu Icon"
                    width="50"
                    height="30"
                  />
                </a>
                </button>
                

                {isOpen && (
                     <div className={style.button}>
                  <Table >
                <tbody  style={{marginRight:"20px"}} className="collapse list-unstyled" id="navbar">
                      <tr>
                        <td>
                      <Nav.Link href="/Ui">HOME</Nav.Link>
                     </td>
                     </tr>
                      <tr >
                        <td>
                          <Nav.Link href="/Ui">HOME</Nav.Link>
                        </td>

                        </tr>
                        <tr >
                          <td>
                      <Nav.Link href="/Ui">My submission</Nav.Link>
                      </td>
                        </tr>
                        <tr >
                          <td>
                      <Nav.Link href="/favorites">Favorites</Nav.Link>
                      </td>
                        </tr>

                        </tbody>
                    </Table>
                     </div>  
                  
              
                )}
                </div>
          </div>
        </nav>

    </div>
  )
}
