# 戸山流居合道会本部 ウェブサイト - デザイン決定事項

**Date**: 2025-10-03
**Session**: デザインシステム確立とブランディング更新

## 重要な決定事項

### 1. ブランディング統一
- **正式名称**: 戸山流居合道会本部（Toyama-ryu Iaido Association）
- **ロゴ**: `images/parts/ロゴ2.jpg`
  - ナビゲーション: 48×48px
  - フッター: 56×56px
- **使用禁止**: SVGアイコン、装飾的アイコン全般

### 2. デザイン哲学
- **武道らしさ優先**: ビジネスライクなデザイン排除
- **重厚感**: 太いボーダー（3-6px）、box-shadow、グラデーション
- **可読性重視**: 高齢者対応の大きなフォント（最小14px）
- **シンプルさ**: 装飾排除、本質的情報のみ

### 3. カラーシステム
```css
--color-toyama-dark: #264653;    /* メイン */
--color-toyama-teal: #2A9D8F;    /* アクセント */
--color-toyama-yellow: #E9C46A;  /* ハイライト */
--color-toyama-orange: #F4A261;  /* CTA */
--color-toyama-base: #F8F9FA;    /* 背景（未使用） */
```

### 4. セクション背景パターン
- **Welcome Section**: `linear-gradient(135deg, #264653 0%, #1a3540 100%)`
- **About Section**: `#e8eef0`
- **Timeline Section**: `linear-gradient(135deg, #264653 0%, #1a3540 100%)` + 4px黄色ボーダー
- **Quote Section**: `#264653`

### 5. カード・コンテンツボックススタイル
暗い背景セクション用の統一スタイル：
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(4px);
border-left: 6px solid var(--color-toyama-yellow);
transition: all 300ms ease;
```

ホバー時:
```css
background: rgba(255, 255, 255, 0.1);
border-left-color: var(--color-toyama-orange);
```

### 6. タイムライン構造（歴史の系譜）
1. **1925年～終戦**: 陸軍戸山学校にて実戦的な軍刀術として発展
2. **1976年**: 戸山流居合道振興会 設立
3. **1980年**: 大日本戸山流居合道会 に改称
4. **2015年**: 戸山流居合道会本部としてNPO法人化
5. **現在**: 英国にも支部ができ、普及が進む

### 7. ボタンデザイン
- **形状**: `border-radius: 50px`（完全に丸い）
- **ホバー**: 色変化のみ（scale、translateY禁止）
- **プライマリ**: オレンジ → ホバー時黄色
- **セカンダリ**: 透明+白ボーダー → ホバー時半透明白背景

### 8. アニメーション制限
**許可:**
- 色変化（background, color, border-color）
- 影変化（box-shadow）
- 透明度（opacity）
- 限定的移動（translateY -5px カードホバーのみ）

**禁止:**
- rotate, skew
- 複雑なtranslate
- bounce（スクロールアイコン以外）
- fade-in on scroll

### 9. レスポンシブブレークポイント
- **640px**: タブレット（ボタン横並び開始）
- **768px**: タブレット大（グリッド2列）
- **1024px**: デスクトップ（グリッド4列、ナビゲーション横並び）

### 10. アクセシビリティ
- **コントラスト比**: 最低4.5:1（WCAG AA）
- **フォーカス表示**: 2px黄色アウトライン
- **aria属性**: 全インタラクティブ要素に必須

## ファイル構成
- **デザインシステム**: `docs/design/DESIGN_SYSTEM.md`（完全定義済み）
- **HTML**: `index.html`
- **CSS**: `css/styles.css`
- **JS**: `js/main.js`
- **画像**: `images/parts/`, `images/top/slide/`

## 次回セッション時の注意事項
1. デザイン変更時は必ず `DESIGN_SYSTEM.md` を参照
2. 新規コンポーネント追加時はデザインレビューチェックリスト実施
3. カラーパレット5色以外の使用禁止
4. アイコン追加禁止（既存SVGも削除済み）
