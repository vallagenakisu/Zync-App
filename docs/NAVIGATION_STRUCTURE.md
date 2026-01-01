## Navigation Structure

### File Structure
```
app/
├── search.tsx          # Search screen with trending topics
├── notifications.tsx   # Notifications feed
├── profile.tsx        # User profile with posts grid
├── (newsfeed)/        # Newsfeed screens
│   ├── Feed.tsx
│   └── index.tsx
└── (onboarding)/      # Onboarding screens
    ├── SignIn.tsx
    ├── Onboarding1.tsx
    └── ...
```

### Navigation Flow

#### From Newsfeed (Post Component):
- **Profile Icon** → `/profile` - User profile page
- **Notification Bell** → `/notifications` - Notifications feed
- **Search Icon** → `/search` - Search with trending topics

#### Features by Screen:

**Search Screen** (`/search`):
- Search bar with auto-focus
- Recent searches history
- Trending topics with post counts
- Clear functionality
- Back button to return

**Notifications Screen** (`/notifications`):
- Three tabs: All, Mentions, Following
- Unread indicator (blue dot)
- Different notification types (likes, comments, follows, mentions, system)
- Mark all as read functionality
- Post thumbnails for context
- Back button to return

**Profile Screen** (`/profile`):
- Profile header with avatar
- Stats: Posts, Followers, Following
- Bio and user info
- Edit Profile and Share Profile buttons
- Story highlights carousel
- Three tabs: Posts, Saved, Liked
- Grid view of posts (3 columns)
- Back button to return

### Key Components Used:
- `SafeAreaView` from `react-native-safe-area-context`
- `StatusBar` with dynamic styling
- `router` from `expo-router` for navigation
- Tailwind CSS (NativeWind) for styling
- DM Sans font family

### Navigation Methods:
```typescript
// Navigate forward
router.push('/search')
router.push('/notifications')
router.push('/profile')

// Navigate back
router.back()
```

### Assets Required:
- ✅ Profile icon (exists)
- ✅ Notification icon (exists)
- ✅ Search icon (exists)
- ✅ Back arrow (created as SVG, may need PNG conversion)
- ✅ Other icons (bookmark, heart, share, etc.)
