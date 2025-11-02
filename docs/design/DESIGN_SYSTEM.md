# デザインシステム - 戸山流居合道会本部ウェブサイト

**Version**: 1.0.0
**最終更新**: 2025-10-03
**目的**: 戸山流居合道会本部ウェブサイトの統一的なデザインルールとUIパターンの定義

---

## 1. デザイン哲学

### 1.1 コンセプト
- **武道らしさ**: ビジネスライクではなく、伝統的な武道の格調と威厳を表現
- **親しみやすさ**: 初心者から高齢者まで、誰でも気軽にアクセスできる温かみ
- **可読性重視**: 高齢者でも読みやすい大きなフォントサイズと高いコントラスト
- **シンプルさ**: 装飾的な要素を排除し、本質的な情報を明確に伝達

### 1.2 デザイン原則
1. **アイコン使用禁止**: ハート、矢印などの装飾的アイコンは使用しない（武道らしくない）
2. **角のあるデザイン**: ボタンや重要要素以外はborder-radius控えめ（0-2px）
3. **重厚感**: 太いborder、box-shadow、グラデーションで威厳を表現
4. **コントラスト確保**: 背景とテキストの明確な色分け、読みやすさ最優先

---

## 2. カラーパレット

### 2.1 メインカラー

```css
:root {
  --color-toyama-dark: #264653;    /* ダークブルーグリーン - メインカラー */
  --color-toyama-teal: #2A9D8F;    /* ティール - アクセント */
  --color-toyama-yellow: #E9C46A;  /* イエロー - ハイライト */
  --color-toyama-orange: #F4A261;  /* オレンジ - CTA */
  --color-toyama-base: #F8F9FA;    /* ライトグレー - 背景 */
}
```

### 2.2 カラー使用ルール

| 用途 | カラー | 使用例 |
|------|--------|--------|
| **ナビゲーション背景** | `toyama-dark` (95% opacity) | 固定ヘッダー |
| **メインタイトル** | `toyama-dark` | セクションタイトル、見出し |
| **アクセント** | `toyama-yellow` | ハイライトテキスト、divider |
| **CTA（行動喚起）** | `toyama-orange` | プライマリボタン |
| **ホバー効果** | `toyama-teal` | リンク、カードボーダー |
| **背景（白）** | `#ffffff` | ウェルカムセクション |
| **背景（グレー）** | `#e8eef0` | アバウトセクション |

### 2.3 グラデーション使用

```css
/* タイムラインセクション背景 */
background: linear-gradient(135deg, var(--color-toyama-dark) 0%, #1a3540 100%);

/* ヒーローオーバーレイ */
background-image: linear-gradient(rgba(38, 70, 83, 0.2), rgba(38, 70, 83, 0.3));
```

---

## 3. タイポグラフィ

### 3.1 フォントファミリー

```css
--font-serif: 'Noto Serif JP', serif;  /* 見出し用 */
--font-sans: 'Noto Sans JP', sans-serif;  /* 本文用 */
```

| 要素 | フォント | ウェイト | 用途 |
|------|----------|----------|------|
| **h1, h2, h3, h4, h5, h6** | Noto Serif JP | 700-900 | 全見出し |
| **body, p, a, button** | Noto Sans JP | 300-700 | 本文、リンク、ボタン |

### 3.2 フォントサイズ体系

#### ヒーローセクション
```css
.hero-title {
  font-size: clamp(2rem, 8vw, 4.5rem);  /* モバイル32px → デスク72px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem);  /* モバイル16px → デスク24px */
  font-weight: 400;
  letter-spacing: 0.02em;
}
```

#### セクションタイトル
```css
.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);  /* モバイル40px → デスク64px */
  font-weight: 900;
  letter-spacing: 0.05em;
}

.section-description {
  font-size: clamp(1.25rem, 3vw, 1.75rem);  /* モバイル20px → デスク28px */
  font-weight: 500;
  line-height: 2;
}
```

#### カード・コンテンツ
```css
.card-title {
  font-size: 1.5rem;  /* 24px */
  font-weight: 900;
  letter-spacing: 0.05em;
}

.card-text {
  font-size: 1.125rem;  /* 18px */
  font-weight: 500;
  line-height: 1.9;
}
```

#### FAQ
```css
.faq-question {
  font-size: 1.5rem;  /* 24px */
  font-weight: 700;
  line-height: 1.6;
}

.faq-answer {
  font-size: 1.25rem;  /* 20px */
  font-weight: 500;
  line-height: 2;
}
```

#### タイムライン
```css
.timeline-title {
  font-size: clamp(2rem, 5vw, 3.5rem);  /* モバイル32px → デスク56px */
  font-weight: 900;
  letter-spacing: 0.1em;
}

.timeline-year {
  font-size: 1.25rem;  /* 20px */
  font-weight: 900;
  letter-spacing: 0.05em;
}

.timeline-text {
  font-size: 1.375rem;  /* 22px */
  font-weight: 500;
  line-height: 2;
}
```

### 3.3 テキストシャドウ

#### ヒーロータイトル（強調）
```css
text-shadow:
  2px 2px 4px rgba(0, 0, 0, 0.8),
  -1px -1px 2px rgba(0, 0, 0, 0.6),
  1px -1px 2px rgba(0, 0, 0, 0.6),
  -1px 1px 2px rgba(0, 0, 0, 0.6),
  1px 1px 2px rgba(0, 0, 0, 0.6);
```

#### ヒーローサブタイトル（読みやすさ）
```css
text-shadow:
  1px 1px 3px rgba(0, 0, 0, 0.8),
  -1px -1px 2px rgba(0, 0, 0, 0.6);
```

#### タイムラインタイトル（威厳）
```css
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
```

---

## 4. スペーシングシステム

### 4.1 セクション間隔
```css
.section {
  padding: 6rem 0;  /* 上下96px */
}
```

### 4.2 コンテナ幅
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

### 4.3 グリッドギャップ
```css
.grid {
  gap: 1.5rem;  /* 24px */
}
```

### 4.4 カード内部
```css
.card {
  padding: 2.5rem 2rem;  /* 上下40px 左右32px */
}

.principle-card {
  padding: 2rem;  /* 全方向32px */
}
```

### 4.5 マージン体系
- **section-header bottom**: 4rem (64px)
- **タイトル下divider**: 2rem (32px)
- **FAQ項目間**: 1.5rem (24px)
- **タイムラインアイテム間**: 2rem (32px)

---

## 5. ボタンデザイン

### 5.1 基本スタイル
```css
.btn {
  padding: 1rem 2.5rem;
  font-weight: 600;
  font-size: 1.125rem;  /* 18px */
  letter-spacing: 0.02em;
  border-radius: 50px;  /* 完全に丸いボタン */
  transition: all 200ms ease;
}
```

### 5.2 ボタンバリエーション

#### プライマリボタン（CTA）
```css
.btn-primary {
  background: var(--color-toyama-orange);
  color: white;
  border: none;
}

.btn-primary:hover {
  background: var(--color-toyama-yellow);
  color: var(--color-toyama-dark);
  /* scale, translateYなし（シンプルに） */
}
```

#### セカンダリボタン
```css
.btn-secondary {
  border: 2px solid white;
  color: white;
  background: transparent;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: var(--color-toyama-yellow);
}
```

#### 大型ボタン
```css
.btn-large {
  padding: 1.25rem 3rem;
  font-size: 1.25rem;  /* 20px */
}
```

### 5.3 ボタンホバー原則
- **アニメーション禁止**: scale, translateYなどの動きは使用しない
- **色変化のみ**: 背景色と文字色のスムーズな変化のみ
- **トランジション**: 200ms ease統一

---

## 6. カードデザイン

### 6.1 ウェルカムセクション カード
```css
.card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 0;  /* 角なし */
  border: 3px solid var(--color-toyama-dark);
  transition: all 300ms ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px -5px rgba(38, 70, 83, 0.3);
  border-color: var(--color-toyama-teal);
}
```

### 6.2 原則カード（戸山流とは）
```css
.principle-card {
  background: white;
  padding: 2rem;
  border-radius: 2px;  /* わずかな丸み */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 300ms ease;
}

.principle-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

### 6.3 FAQカード
```css
.faq-item {
  background: white;
  padding: 1.5rem;
  border-radius: 2px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.faq-item:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
```

### 6.4 カードルール
- **アイコン禁止**: カード内にハート、矢印などの装飾アイコンを使用しない
- **タイトルのみ**: タイトル（h3）+ 説明テキスト（p）のシンプル構成
- **ホバーエフェクト**: translateY、box-shadowのみ（回転、scaleなし）

---

## 7. ナビゲーション

### 7.1 固定ヘッダー
```css
.nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  background: rgba(38, 70, 83, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-content {
  height: 80px;
}
```

### 7.2 ロゴ
```css
.nav-logo-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.nav-title-main {
  color: white;
  font-weight: 700;
  font-size: 1.25rem;  /* 20px */
  letter-spacing: -0.02em;
}

.nav-title-sub {
  color: rgba(233, 196, 106, 0.8);
  font-size: 0.75rem;  /* 12px */
  letter-spacing: 0.1em;
}
```

### 7.3 ナビゲーションリンク
```css
.nav-link {
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;  /* 14px */
  letter-spacing: 0.02em;
  border-radius: 4px;
}

.nav-link:hover {
  color: var(--color-toyama-yellow);
  background: rgba(255, 255, 255, 0.05);
}
```

### 7.4 モバイルメニュー
- **1024px未満**: ハンバーガーメニュー表示
- **1024px以上**: 横並びナビゲーション表示

---

## 8. ヒーローセクション

### 8.1 スライダー仕様
```css
.hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  filter: blur(1px);  /* 背景にぼかし効果 */
  transition: opacity 1s ease;
}

.hero-slide.active {
  opacity: 1;
  z-index: 2;
}
```

### 8.2 スライドオーバーレイ
```css
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, transparent, rgba(38, 70, 83, 0.2));
}
```

### 8.3 コンテンツレイヤー
- **z-index: 10**: 背景スライド（z-index: 1-2）より前面
- **単一コンテンツ**: 全スライド共通のテキストとボタン（スライドごとに変えない）

### 8.4 スライドインジケーター
```css
.hero-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.6);
}

.hero-indicator.active {
  background: var(--color-toyama-yellow);
  border-color: var(--color-toyama-yellow);
  width: 32px;
  border-radius: 6px;  /* 横長の楕円形 */
}
```

### 8.5 ナビゲーション矢印
```css
.hero-prev, .hero-next {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.hero-prev:hover, .hero-next:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: var(--color-toyama-yellow);
  transform: translateY(-50%) scale(1.1);
}
```

### 8.6 スライド自動再生
- **間隔**: 8秒（8000ms）
- **手動操作時**: タイマーリセット

---

## 9. タイムラインセクション（歴史の系譜）

### 9.1 セクション背景
```css
.timeline-section {
  background: linear-gradient(135deg, var(--color-toyama-dark) 0%, #1a3540 100%);
  border: 4px solid var(--color-toyama-yellow);
  padding: 4rem 3rem;
  margin-top: 6rem;
  margin-bottom: 4rem;
}
```

### 9.2 年号ボックス
```css
.timeline-year {
  width: 240px;
  background: var(--color-toyama-yellow);
  color: var(--color-toyama-dark);
  padding: 1.5rem 2rem;
  border-radius: 0;  /* 角なし */
  font-weight: 900;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  text-align: center;
  border: 3px solid var(--color-toyama-dark);
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
  white-space: nowrap;
}
```

### 9.3 コンテンツエリア
```css
.timeline-content {
  flex: 1;
  border-left: 6px solid var(--color-toyama-yellow);
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
}

.timeline-item:hover .timeline-content {
  border-color: var(--color-toyama-orange);
  background: rgba(255, 255, 255, 0.1);
}
```

### 9.4 タイムラインレイアウト
```css
.timeline-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
```

---

## 10. フッター

### 10.1 基本スタイル
```css
.footer {
  background: var(--color-toyama-dark);
  color: white;
  padding: 4rem 1rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;  /* モバイル */
  gap: 3rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr;  /* デスク */
  }
}
```

### 10.2 ロゴ
```css
.footer-logo-img {
  width: 56px;
  height: 56px;
  object-fit: contain;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-subtitle {
  color: rgba(233, 196, 106, 0.8);
  font-size: 0.875rem;
  letter-spacing: 0.1em;
}
```

### 10.3 リンク
```css
.footer-link {
  color: rgba(255, 255, 255, 0.7);
  transition: color 200ms ease;
}

.footer-link:hover {
  color: var(--color-toyama-yellow);
}
```

---

## 11. アニメーション・トランジション

### 11.1 トランジション基準
```css
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
```

### 11.2 許可されたアニメーション
- **色変化**: background, color, border-color
- **影変化**: box-shadow
- **透明度**: opacity
- **移動（限定）**: translateY (カードホバー-5pxのみ)
- **スケール（限定）**: scale (ナビゲーション矢印1.1倍のみ)

### 11.3 禁止されたアニメーション
- ❌ **回転**: rotate
- ❌ **スキュー**: skew
- ❌ **複雑な移動**: translateX（ホバー時）
- ❌ **バウンス**: bounce（スクロールアイコン以外）
- ❌ **フェードイン**: fade-in on scroll

### 11.4 唯一の複雑アニメーション（スクロールアイコン）
```css
@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}
```

---

## 12. レスポンシブデザイン

### 12.1 ブレークポイント
```css
/* モバイル: 〜639px */
/* タブレット: 640px〜1023px */
/* デスクトップ: 1024px〜 */

@media (min-width: 640px) { /* タブレット */ }
@media (min-width: 768px) { /* タブレット大 */ }
@media (min-width: 1024px) { /* デスクトップ */ }
```

### 12.2 グリッドレスポンス
```css
.grid-4 {
  grid-template-columns: 1fr;  /* モバイル: 1列 */
}

@media (min-width: 768px) {
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);  /* タブレット: 2列 */
  }
}

@media (min-width: 1024px) {
  .grid-4 {
    grid-template-columns: repeat(4, 1fr);  /* デスク: 4列 */
  }
}
```

### 12.3 ヒーローボタン
```css
.hero-buttons {
  flex-direction: column;  /* モバイル: 縦並び */
  gap: 1rem;
}

@media (min-width: 640px) {
  .hero-buttons {
    flex-direction: row;  /* タブレット以上: 横並び */
  }
}
```

---

## 13. アクセシビリティ

### 13.1 コントラスト比
- **タイトル**: 最低4.5:1（WCAG AA）
- **本文**: 最低4.5:1（WCAG AA）
- **大きいテキスト（18px以上）**: 最低3:1（WCAG AA）

### 13.2 フォーカス表示
```css
button:focus,
a:focus {
  outline: 2px solid var(--color-toyama-yellow);
  outline-offset: 2px;
}
```

### 13.3 aria属性
```html
<button aria-label="メニュー">
<button aria-label="前のスライド">
<button aria-label="次のスライド">
<button data-slide="0" aria-label="スライド1">
```

---

## 14. 画像使用ルール

### 14.1 ヒーロー画像
- **形式**: JPG
- **配置**: `images/top/slide/`
- **サイズ**: 横幅1920px以上推奨
- **加工**: linear-gradient オーバーレイ + blur(1px)

### 14.2 ロゴ画像
- **形式**: JPG
- **配置**: `images/parts/ロゴ2.jpg`
- **ナビゲーション**: 48×48px
- **フッター**: 56×56px

### 14.3 object-fit
```css
.nav-logo-img,
.footer-logo-img {
  object-fit: contain;
}
```

---

## 15. セクション背景パターン

### 15.1 交互背景
```css
.welcome-section {
  background: #ffffff;
}

.about-section {
  background: #e8eef0;
}
```

**ルール**: 隣接セクションは必ず異なる背景色を使用

### 15.2 特殊背景

#### タイムラインセクション
```css
background: linear-gradient(135deg, var(--color-toyama-dark) 0%, #1a3540 100%);
border: 4px solid var(--color-toyama-yellow);
```

#### クオートセクション
```css
background: var(--color-toyama-dark);
border-radius: 2px;
padding: 3rem 2rem;
```

---

## 16. デザイントークン一覧

### 16.1 スペーシング
```yaml
spacing-xs: 0.5rem   # 8px
spacing-sm: 0.75rem  # 12px
spacing-md: 1rem     # 16px
spacing-lg: 1.5rem   # 24px
spacing-xl: 2rem     # 32px
spacing-2xl: 3rem    # 48px
spacing-3xl: 4rem    # 64px
spacing-4xl: 6rem    # 96px
```

### 16.2 ボーダー
```yaml
border-thin: 1px
border-medium: 2px
border-thick: 3px
border-extra-thick: 4px
border-super-thick: 6px  # タイムラインコンテンツ左ボーダー
```

### 16.3 ボーダー半径
```yaml
radius-none: 0
radius-minimal: 2px
radius-small: 4px
radius-medium: 6px
radius-full: 50px  # ボタン、インジケーター
radius-circle: 50%  # ナビゲーション矢印
```

### 16.4 シャドウ
```yaml
shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
shadow-card-hover: 0 15px 30px -5px rgba(38, 70, 83, 0.3)
shadow-timeline-box: 4px 4px 0 rgba(0, 0, 0, 0.3)
```

---

## 17. コンポーネントカタログ

### 17.1 ボタン
- `.btn` + `.btn-primary`
- `.btn` + `.btn-secondary`
- `.btn` + `.btn-primary` + `.btn-large`

### 17.2 カード
- `.card` (ウェルカムセクション)
- `.principle-card` (戸山流とは)
- `.faq-item` (FAQ)

### 17.3 セクション
- `.section` + `.welcome-section`
- `.section` + `.about-section`

### 17.4 タイムライン
- `.timeline-section`
- `.timeline-item`
- `.timeline-year`
- `.timeline-content`

### 17.5 その他
- `.quote-section`
- `.cta-section`
- `.hero`
- `.nav`
- `.footer`

---

## 18. 禁止事項リスト

### ❌ 絶対に使用禁止

1. **装飾的アイコン**: ハート、矢印、星、チェックマークなどのSVGアイコン
2. **過度なアニメーション**: rotate, skew, bounce（スクロール以外）
3. **ビジネスライクな要素**: グラフ、チャート、統計カード（数字強調以外）
4. **丸すぎるデザイン**: カード、セクションのborder-radius > 2px
5. **細すぎるフォント**: font-weight < 300
6. **小さすぎるテキスト**: font-size < 0.875rem（14px）本文

### ⚠️ 慎重に使用

1. **グラデーション**: タイムライン、特殊セクションのみ
2. **backdrop-filter**: ナビゲーション、ヒーロー要素のみ
3. **transform**: translateY（カードホバー）、scale（ナビ矢印）のみ
4. **opacity transition**: スライダーのみ

---

## 19. 更新履歴

| 日付 | バージョン | 変更内容 |
|------|------------|----------|
| 2025-10-03 | 1.0.0 | 初版作成 - 現行デザインシステム完全定義 |

---

## 20. デザインレビューチェックリスト

新規コンポーネント追加時の確認項目：

- [ ] カラーパレットの5色のみ使用している
- [ ] フォントサイズが14px以上（小テキスト除く）
- [ ] 装飾的アイコンを使用していない
- [ ] border-radius が適切（ボタン50px、その他0-2px）
- [ ] ホバーアニメーションがシンプル（色変化中心）
- [ ] コントラスト比が4.5:1以上
- [ ] レスポンシブ対応（モバイル/タブレット/デスク）
- [ ] aria属性が適切に設定されている
- [ ] text-shadowが必要な場所に適用されている
- [ ] トランジションが200ms/300msで統一されている

---

**Document Status**: ✅ デザインシステム確立・実装済み全要素定義完了
**Maintenance**: デザイン変更時は必ずこのドキュメントを更新
**Reference**: 全デザイン・実装判断の唯一の情報源
