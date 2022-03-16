# ススット(スーパーの業務管理システム)

## 作品概要

### 初めに

- 管理画面と従業員画面があり、管理画面は PC の想定、従業員画面はスマホを想定して作っています。
- バックエンド、クラウドに関しては[こちら](https://github.com/SatoSouma/susutto-api)に記述してあります。

### この作品を作ろうと思った理由

- スーパーでアルバイトをしていた時に、業務の伝達漏れや社員間で業務に対して異なる意見を持っていたりと、アルバイトの身として困惑した経験があったのでこのアプリを作ろうと考えました。

### システムの流れ

1. 管理画面で部署ごとに業務を作成します。
2. 従業員側で担当したい業務を選択します。
3. 担当した業務が完了次第完了ボタンをクリックします。
4. 管理側は`Todo(担当者の決まっていない業務)`・`Doing(現在遂行中の業務)`・`Not archived(期限切れの業務)`・`Done(完了済みの業務)`の項目で大まかな進捗のチェックが可能。
5. 管理者側で期限切れの業務のみ期限を延長させることが可能。

### こだわったポイント

- 部署ごとに異なる色を設定し、視覚的に判断しやすくしました。
- 業務は押しミスを防ぐために、リスト表示されている業務をクリックしてから完了ボタンや修正ボタンを表示させるようにしています。

### デモ

- [デモ画面](https://drive.google.com/file/d/15qjlGJzTaRax3B_WiizJqUlqoi5uCykV/view?usp=sharing)← こちらに説明動画がございます。

### 使用技術

#### フロントエンド

- Next.js
  - Redux
  - TypeScript
  - ChakraUI
  - Customhook
  - sass(レスポンシブの部分でのみ使用)
- Docker(デプロイしていた時に image 作成用として使っていました、開発環境用の DockerFile、docker-compose はありません)

### 改善点・反省点

#### 今後実装したい機能

- 出退勤を管理できようにし、誰が出勤しているかの確認をできるようにしたい。
- 業務を作成するタイミングで、出勤中の特定の社員に対し業務を課せられるようにしたい。
- 業務の優先度を設定できるようにしたい。
- スーパーは天気によって業務内容が大きく異なるので、天気の情報を逐一確認または知らせてくれるようにしたい。

#### 技術的な反省点

- 今回コンポーネントのディレクトリ構成として`AtomicDesign`を採用しましたが、うまく分けられた自信がないので研究を進めていきたい。
- UI についてまだまだ追求不足であるので、もっと使用者の気持ちになって考えたい。
- 命名規則の設計をきちんとしてなくて、自分でも戸惑ったりしたので次の制作ではきちんと定義したい。
- socket を実装する上でのの最適解が分からないので勉強する必要がある。
