import React, { useState } from 'react';
import { registerWithEmail, loginWithEmail, loginWithGoogle } from '../firebase/auth';
import './AuthModal.css';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const result = isLogin
                ? await loginWithEmail(email, password)
                : await registerWithEmail(email, password);

            if (result.success) {
                onClose();
                setEmail('');
                setPassword('');
            } else {
                setError(result.error || 'Произошла ошибка');
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        setLoading(true);

        try {
            const result = await loginWithGoogle();
            if (result.success) {
                onClose();
            } else {
                setError(result.error || 'Ошибка входа через Google');
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-modal-overlay" onClick={onClose}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <button className="auth-modal-close" onClick={onClose}>✖</button>

                <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>

                <form onSubmit={handleSubmit}>
                    <div className="auth-form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={loading}
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="auth-form-group">
                        <label>Пароль</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={loading}
                            minLength={6}
                            placeholder="••••••"
                        />
                    </div>

                    {error && <div className="auth-error">{error}</div>}

                    <button type="submit" disabled={loading} className="auth-submit">
                        {loading ? 'Загрузка...' : (isLogin ? 'Войти' : 'Зарегистрироваться')}
                    </button>
                </form>

                <div className="auth-divider">или</div>

                <button
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="auth-google"
                >
                    <img
                        src="https://www.google.com/favicon.ico"
                        alt="Google"
                        style={{ width: 18, height: 18, marginRight: 8 }}
                    />
                    Войти через Google
                </button>

                <div className="auth-toggle">
                    {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
                    <button onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Зарегистрироваться' : 'Войти'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;