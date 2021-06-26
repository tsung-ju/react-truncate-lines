import React, { useState } from "react";
import { TruncateLines } from "react-truncate-lines";
import "water.css/out/water.css";

function DemoPage() {
  const [lines, setLines] = useState<number>(3);
  const [text, setText] = useState<string>(defaultText);
  const [whiteSpace, setWhiteSpace] =
    useState<React.CSSProperties["whiteSpace"]>("pre-line");
  const [lineBreak, setLineBreak] =
    useState<React.CSSProperties["lineBreak"]>("auto");

  return (
    <main>
      <form>
        <input
          type="number"
          min="1"
          value={lines}
          onChange={(e) => setLines(parseInt(e.target.value))}
        />
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <select
          value={whiteSpace}
          onChange={(e) =>
            setWhiteSpace(e.target.value as React.CSSProperties["whiteSpace"])
          }
        >
          <option>normal</option>
          <option>nowrap</option>
          <option>pre</option>
          <option>pre-wrap</option>
          <option>pre-line</option>
          <option>break-spaces</option>
        </select>
        <select
          value={lineBreak}
          onChange={(e) =>
            setLineBreak(e.target.value as React.CSSProperties["lineBreak"])
          }
        >
          <option>auto</option>
          <option>loose</option>
          <option>normal</option>
          <option>strict</option>
          <option>anywhere</option>
        </select>
      </form>
      <hr />
      <div style={{ width: "500px" }}>
        <TruncateLines
          lines={lines}
          ellipsis={
            <span style={{ color: "blue" }} onClick={() => setLines(Infinity)}>
              ...ReadMore
            </span>
          }
          style={{ whiteSpace, lineBreak }}
        >
          {text}
        </TruncateLines>
      </div>
    </main>
  );
}

const defaultText = `岡部りん太郎さま
おひさしぶりです｡あまねすずはです｡はしだタイターの娘です｡
あなたにとっては､つい数時間前以来のことかもしれない｡
今は西暦二000年の､6月13日です｡これをあなたが読んでいる､大体10年前ということになります｡
結論だけ書く｡
失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した
あたしは失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗したあたしは失敗した失敗
今は､西暦二000年の､6月14日です｡
これをあなたが読んでいる､だいたい9年前､10年前になります｡
失敗した｡
あたしがあたしだということを思い出したのはほんの1年前だった
恐怖の大王が落ちるとか言われてた日
バカだバカだなにが恐怖の大王だどうせなら落ちてくれればよかった
あたしはこの24年間､記憶を失っていた｡
覚えていたのは名前ぐらいだった｡

思い出したのはほんの1年前だった
恐怖の大王が落ちると言われて落ちなかった日
恐怖の大王なんてどこにもないけどあたしは死にたい
修理が完全じゃなかったタイムマシンは不具合があったあたしは1975年に跳んだときはなにも覚えていなかったそれを今になって思い出す
あたしは真っ白でどうしたらいいか分からず施設に保護された
今は独り暮らしをしているけれどそれは橋田鈴というまっさらな人間として普通に生活してきただけで阿万音鈴羽としての使命は完全に忘れていて去年思い出した
失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗した失敗したあたしは失敗
なにが原因なのタイムトラベルはうまくいかなかった父さんの修理が完全じゃなかったんだ
でも父さんは悪くないあたしが悪いんだ
まっすぐな1975年へ跳んでいればよかった2010年に寄り道するべきじゃなかったワガママを言っている場合じゃなかったこれじゃ未来は変わらない
IBN5100は手に入らなかった
ゴメン｡
ゴメンね｡
あたしは､なんのためにこの歳まで生まれてきたんだろう｡

使命を忘れて､ただのうのうと生きてきた｡
こんな人生､なんの意味もない｡
意味がない｡意味がない｡意味がない｡
思い出さなければよかった｡
思い出せてよかった｡
君に謝ることができてよかった｡
許して許して許して許して許して許して｡
あたしの計画は狂ってしまった｡
その原因を､この1年考え続けていた｡
そして､分かった｡
あたしが､1975年へ跳ぶのを1日でもためらわなければ､こんなことにはならなかった｡
岡部りん太郎｡
君はあのタイムマシンオフ会の後､1975年へ跳ぼうとしたあたしを引き留めた｡
それはとてもうれしかったけど､でもそこで引き留めたのは失敗だったんだ｡
あたしは､あの日跳ばなければならなかったんだ｡あの日を逃したらダメだったんだ｡
引き留めたれたから､その夜に雷雨があってタイムマシンが壊れてたんだ｡

もしも､時間を戻せるなら､あの日あたしを､引き留めないようにしてほしい｡
そうすればあたしは､君たちにIBN5100を届けられる｡
使命を､果たせる｡
あたしは､使命をはたしたい｡
父さんと､約束したから｡
父さんの､意思だから｡
あたしの未来を､変えたいから｡
ゴメン｡
ゴメン｡
ゴメン｡
こんな人生は､無意味だった
`;

export default DemoPage;
