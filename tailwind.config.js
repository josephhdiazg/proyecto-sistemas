module.exports = {
    content: [
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                hxkr: {
                    bg:       '#080c08',
                    surface:  '#0d120d',
                    panel:    '#111911',
                    border:   '#1a2e1a',
                    glow:     '#00ff41',
                    green:    '#00ff41',
                    dim:      '#00c832',
                    muted:    '#007a1f',
                    ghost:    '#003d0f',
                    amber:    '#ffb300',
                    red:      '#ff2244',
                    cyan:     '#00ffe7',
                    comment:  '#3a5e3a',
                    text:     '#b8d4b8',
                    bright:   '#e8ffe8',
                }
            },
            fontFamily: {
                mono:    ['"Share Tech Mono"', 'monospace'],
                display: ['"VT323"', 'monospace'],
                hud:     ['"Orbitron"', 'monospace'],
            },
            boxShadow: {
                glow:      '0 0 8px #00ff41, 0 0 20px #00ff4155',
                'glow-lg': '0 0 16px #00ff41, 0 0 40px #00ff4133, 0 0 80px #00ff4111',
                'glow-red':'0 0 8px #ff2244, 0 0 20px #ff224455',
                'glow-cyan':'0 0 8px #00ffe7, 0 0 20px #00ffe755',
                'inset-glow': 'inset 0 0 12px #00ff4122',
            },
            animation: {
                'scan':      'scan 4s linear infinite',
                'blink':     'blink 1s step-end infinite',
                'flicker':   'flicker 0.15s infinite',
                'boot':      'boot 1.2s ease-out forwards',
                'glitch':    'glitch 3s infinite',
                'pulse-slow':'pulse 3s ease-in-out infinite',
                'scroll-up': 'scrollUp 12s linear infinite',
                'typewrite': 'typewrite 2s steps(30) forwards',
            },
            keyframes: {
                scan: {
                    '0%':   { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '0 100%' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%':       { opacity: '0' },
                },
                flicker: {
                    '0%, 100%': { opacity: '1' },
                    '50%':       { opacity: '0.92' },
                    '25%, 75%':  { opacity: '0.95' },
                },
                boot: {
                    '0%':   { opacity: '0', transform: 'scaleY(0.02)' },
                    '20%':  { opacity: '1', transform: 'scaleY(0.02)' },
                    '100%': { opacity: '1', transform: 'scaleY(1)' },
                },
                glitch: {
                    '0%, 90%, 100%': { transform: 'translate(0)' },
                    '92%': { transform: 'translate(-3px, 1px)', filter: 'hue-rotate(90deg)' },
                    '94%': { transform: 'translate(3px, -1px)', filter: 'hue-rotate(-90deg)' },
                    '96%': { transform: 'translate(0)', filter: 'none' },
                },
                scrollUp: {
                    '0%':   { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
            }
        }
    }
}