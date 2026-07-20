"""Generates on-brand placeholder JPGs for Gori Valley.

Each image is a soft diagonal gradient built from the site's actual Tailwind
palette, with a small label card showing the filename and what it represents
-- so it's immediately obvious what to swap and where, and the site still
looks intentional before any real photography exists.
"""

from PIL import Image, ImageDraw, ImageFont
import numpy as np
import os

OUT_DIR = "public/images"
os.makedirs(OUT_DIR, exist_ok=True)

# Matches tailwind.config.ts exactly
PALETTE = {
    "cream": (247, 244, 238),
    "forest": (38, 55, 42),
    "forest_dark": (22, 33, 26),
    "forest_light": (63, 86, 65),
    "stone": (167, 156, 138),
    "stone_light": (216, 208, 192),
    "stone_dark": (110, 99, 83),
    "slate": (75, 86, 91),
    "brown": (107, 74, 52),
    "gold": (176, 141, 87),
    "gold_light": (201, 171, 124),
}

# filename, width, height, color_a, color_b, label
IMAGES = [
    ("hero.jpg", 2000, 1333, "forest_dark", "slate", "Hero — Himalayan peaks at sunrise"),
    ("askot.jpg", 1200, 1500, "forest", "stone_dark", "Askot"),
    ("munsiyari.jpg", 1200, 1500, "slate", "forest_dark", "Munsiyari"),
    ("gori-valley.jpg", 1200, 1500, "forest_light", "brown", "Gori Ganga Valley"),
    ("panchachuli.jpg", 1200, 1500, "stone_dark", "forest_dark", "Panchachuli"),
    ("sanctuary.jpg", 1400, 1050, "forest", "forest_dark", "Wildlife Sanctuary Walks"),
    ("homestay.jpg", 1400, 1050, "brown", "stone_dark", "Village Homestays"),
    ("trails.jpg", 1400, 1050, "slate", "forest", "Mountain Trails"),
    ("food.jpg", 1400, 1050, "gold", "brown", "Traditional Food Experiences"),
    ("thulma.jpg", 1200, 1200, "brown", "stone_dark", "Handwoven Thulma Blanket"),
    ("honey.jpg", 1200, 1200, "gold", "brown", "Wild Himalayan Honey"),
    ("ringal.jpg", 1200, 1200, "stone", "brown", "Ringal Bamboo Craft"),
    ("herbs.jpg", 1200, 1200, "forest", "gold_light", "Mountain Herbs"),
    ("village.jpg", 1200, 1500, "forest_dark", "brown", "Kumaoni Village (Story section)"),
    ("journal-1.jpg", 1600, 1000, "forest", "stone_dark", "Hidden Villages of Kumaon"),
    ("journal-2.jpg", 1600, 1000, "slate", "forest_dark", "Askot Wildlife Sanctuary Guide"),
    ("journal-3.jpg", 1600, 1000, "brown", "gold", "The Story Behind Thulma Blankets"),
    ("journal-4.jpg", 1600, 1000, "forest_light", "slate", "The Rivers of Gori Valley"),
    ("gori-river.jpg", 2000, 1333, "slate", "forest", "Gori Ganga River (Explore page)"),
    ("about.jpg", 2000, 1333, "forest_dark", "brown", "About Gori Valley"),
    ("waitlist-bg.jpg", 2000, 1333, "forest_dark", "forest", "Join The Waitlist banner"),
    ("og-image.jpg", 1200, 630, "forest_dark", "brown", "Social share image (OG/Twitter)"),
]


def get_font(size, bold=True):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def make_gradient(w, h, c1, c2):
    """Diagonal-ish gradient from top-left (c1) to bottom-right (c2), vectorized."""
    y_grid, x_grid = np.mgrid[0:h, 0:w]
    t = np.clip(0.4 * x_grid / w + 0.6 * y_grid / h, 0, 1).astype(np.float32)
    c1_arr = np.array(c1, dtype=np.float32)
    c2_arr = np.array(c2, dtype=np.float32)
    arr = c1_arr[None, None, :] * (1 - t[:, :, None]) + c2_arr[None, None, :] * t[:, :, None]
    return Image.fromarray(arr.astype(np.uint8), mode="RGB")


for filename, w, h, c1key, c2key, label in IMAGES:
    c1, c2 = PALETTE[c1key], PALETTE[c2key]
    img = make_gradient(w, h, c1, c2)
    draw = ImageDraw.Draw(img, "RGBA")

    # subtle inner border, editorial framing touch
    draw.rectangle([0, 0, w - 1, h - 1], outline=(255, 255, 255, 35), width=2)

    font_size = max(20, w // 32)
    small_size = max(13, w // 68)
    font = get_font(font_size)
    small_font = get_font(small_size, bold=False)

    bbox = draw.textbbox((0, 0), label, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    sbbox = draw.textbbox((0, 0), filename, font=small_font)
    stw, sth = sbbox[2] - sbbox[0], sbbox[3] - sbbox[1]

    cx, cy = w // 2, h // 2
    pad_x, pad_y, gap = 36, 26, 12
    box_w = max(tw, stw) + pad_x * 2
    box_h = th + sth + pad_y * 2 + gap
    box = [cx - box_w // 2, cy - box_h // 2, cx + box_w // 2, cy + box_h // 2]
    draw.rounded_rectangle(box, radius=6, fill=(247, 244, 238, 232))

    draw.text(
        (cx - tw // 2, box[1] + pad_y - bbox[1]),
        label,
        font=font,
        fill=(22, 33, 26, 255),
    )
    draw.text(
        (cx - stw // 2, box[1] + pad_y + th + gap - sbbox[1]),
        filename,
        font=small_font,
        fill=(107, 74, 52, 255),
    )

    img.save(os.path.join(OUT_DIR, filename), "JPEG", quality=87)
    print(f"generated {filename} ({w}x{h})")

print(f"done — {len(IMAGES)} images written to {OUT_DIR}/")
