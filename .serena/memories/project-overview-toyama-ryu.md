# 戸山流居合道会ホームページ - プロジェクト概要

**最終更新**: 2025-10-03
**ステータス**: 初期セットアップ完了・要件定義待ち

## プロジェクト基本情報

- **プロジェクト名**: 戸山流居合道会（Toyama-ryu Iaido Association）公式ホームページ
- **リポジトリ**: toyama-ryu-main
- **デプロイ先**: Vercel（設定完了・未接続）
- **プロジェクトタイプ**: 武道団体公式Webサイト

## 技術スタック概要

```yaml
frontend:
  framework: React 18 (TypeScript strict mode)
  build_tool: Vite 5
  styling: Tailwind CSS (custom Toyama palette)
  icons: lucide-react
  fonts: Noto Serif JP, Noto Sans

backend:
  planned: Supabase (未統合)
  
deployment:
  platform: Vercel
  auto_deploy: main branch push
  preview: all branches
  
quality:
  linting: ESLint (TypeScript rules)
  type_checking: TypeScript strict mode
  testing: not configured yet
```

## カスタムデザインシステム

### Toyamaカラーパレット（Tailwind）
```css
toyama-dark: #264653    /* Primary dark */
toyama-teal: #2A9D8F    /* Accent teal */
toyama-yellow: #E9C46A  /* Highlight yellow */
toyama-orange: #F4A261  /* CTA orange */
toyama-base: #F8F9FA    /* Base background */
```

### タイポグラフィ
- **Serif**: Noto Serif JP（見出し・強調用）
- **Sans**: Noto Sans（本文・UI用）

## 現在のコンポーネント構成

```
App (Single Page Layout)
├── Navigation        # トップナビゲーション
├── Hero             # フルスクリーンヒーロー（背景画像・CTA）
├── WelcomeSection   # ウェルカムメッセージ
├── About            # 道場紹介セクション
├── StyleGuide       # スタイルガイド（開発用）
└── Footer           # フッター
```

## ディレクトリ構造

```
toyama-ryu-main/
├── docs/              # ドキュメント管理
├── public/            # 静的アセット（ルート配信）
├── src/
│   ├── components/   # Reactコンポーネント
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vercel.json       # Vercelデプロイ設定
└── [config files]    # vite/tailwind/tsconfig等
```

## 開発ワークフロー

### 開発コマンド
```bash
npm run dev        # 開発サーバー（http://localhost:5173）
npm run build      # 本番ビルド → dist/
npm run preview    # ビルド結果プレビュー
npm run lint       # ESLint実行
npm run typecheck  # TypeScript型チェック
```

### デプロイフロー
1. mainブランチpush → Vercel自動デプロイ（本番）
2. 他ブランチpush → Vercelプレビューデプロイ
3. ビルド: `npm install && npm run build`
4. 出力: `dist/` → Vercel配信

## Vercel設定詳細

### vercel.json主要設定
- **framework**: vite（自動認識）
- **outputDirectory**: dist
- **SPA routing**: 全パス → /index.html リライト
- **セキュリティヘッダー**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- **キャッシング**: /assets/* を1年間キャッシュ（immutable）

## 次の実装予定機能（推測）

### コンテンツセクション
- 稽古スケジュール
- 料金案内
- アクセス情報
- 師範・指導員紹介
- 歴史・理念

### インタラクティブ機能
- 見学/体験申込フォーム
- 問い合わせフォーム
- イベント告知

### 技術的追加
- Supabase統合（DB・認証）
- SEO最適化（メタタグ・OGP・sitemap）
- テストフレームワーク（Vitest推奨）
- パフォーマンス監視

## プロジェクト特性

### ターゲットユーザー
- 年齢層: 子供〜80代まで幅広い
- ニーズ: 見学・体験申込、稽古情報確認、道場理解

### コンテンツ言語
- 日本語メイン
- 一部専門用語（居合道用語）

### 技術的注意点
- lucide-react: Vite最適化除外設定済み（vite.config.ts）
- Supabase依存関係: package.jsonに存在（未初期化）
- テストフレームワーク: 未設定（導入推奨）
- 型安全: strict mode有効（noUnusedLocals/Parameters）

## ドキュメント管理

### 配置場所
- `docs/requirements/`: 要件定義書
- `docs/design/`: デザイン仕様
- `docs/architecture/`: システム設計
- `docs/meeting-notes/`: 議事録
- `docs/assets/`: 図表・画像

### 命名規則
- 日付プレフィックス推奨: `2025-10-03_filename.md`
- Markdown形式
- Git管理

## プロジェクトステータス

### 完了
- ✅ プロジェクト基盤構築（Vite + React + TypeScript + Tailwind）
- ✅ Vercelデプロイ設定完了
- ✅ ドキュメント管理基盤確立
- ✅ CLAUDE.md開発ガイド作成
- ✅ 基本コンポーネント実装（Navigation, Hero, Footer等）

### 未完了・要対応
- ⏳ 要件定義書作成
- ⏳ デザイン仕様策定
- ⏳ Vercelプロジェクト作成・GitHub連携
- ⏳ Supabase統合
- ⏳ 実装コンテンツ拡充
- ⏳ テストフレームワーク導入
- ⏳ SEO最適化

## 重要ファイル参照

- `CLAUDE.md`: プロジェクト開発ガイド（最新情報）
- `docs/architecture/directory-structure.md`: ディレクトリ構成詳細
- `vercel.json`: デプロイ設定
- `tailwind.config.js`: カスタムToyamaパレット定義
- `package.json`: 依存関係・スクリプト定義

## Serenaメモリ参照

関連メモリ:
- `project-initialization-2025-10-03`: 初期セットアップセッション詳細
