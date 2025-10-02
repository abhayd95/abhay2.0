# Profile Image Setup Guide

## How to Add Your Profile Image

The portfolio uses a robust `ProfileImage` component that handles image loading, cropping, and fallbacks automatically.

### Option 1: Local Image File (Recommended)

1. **Place your image in the `public` folder:**
   ```
   public/abhay.jpeg
   ```

2. **Update the Hero component:**
   ```jsx
   <ProfileImage
       src="/abhay.jpeg"  // Path relative to public folder
       alt="Abhay Tiwari"
       fallbackText="AT"
       size="large"
   />
   ```

### Option 2: External URL

```jsx
<ProfileImage
    src="https://example.com/your-photo.jpg"
    alt="Abhay Tiwari"
    fallbackText="AT"
    size="large"
/>
```

### Option 3: Base64 Encoded Image

```jsx
<ProfileImage
    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
    alt="Abhay Tiwari"
    fallbackText="AT"
    size="large"
/>
```

## Image Requirements

- **Format**: JPEG, PNG, or WebP
- **Size**: Recommended 400x400px or larger (square aspect ratio works best)
- **Content**: Make sure your face is centered in the image
- **File Size**: Keep under 2MB for optimal loading

## Size Options

- `small`: 64x64px
- `medium`: 96x96px  
- `large`: 128x128px (mobile) / 160x160px (desktop)
- `xlarge`: 192x192px (mobile) / 224x224px (desktop)

## Features

✅ **Automatic Cropping**: Uses `object-position: center 30%` to focus on face area  
✅ **Responsive Design**: Adapts to all screen sizes  
✅ **Fallback Handling**: Shows initials if image fails to load  
✅ **Loading States**: Smooth transitions and loading indicators  
✅ **Error Recovery**: Graceful handling of broken image URLs  
✅ **Accessibility**: Proper alt text and ARIA labels  

## Troubleshooting

### Image Not Showing?
1. Check file path is correct
2. Ensure image is in `public` folder
3. Verify image format is supported
4. Check browser console for errors

### Image Cropped Incorrectly?
1. Use a square image (1:1 aspect ratio)
2. Center your face in the image
3. The component automatically crops to focus on the upper-center area

### Fallback Showing Instead?
1. Check image URL is accessible
2. Verify image format is valid
3. Check network connectivity
4. The fallback will show your initials (AT) as a backup
