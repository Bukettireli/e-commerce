import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles, setUser } from '../../../actions/clientActions';
import axiosInstance from '../../../api/axiosInstance';
import { Loader2 } from 'lucide-react';

function SignupForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const roles = useSelector((state) => state.client.roles);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            role_id: '3' 
        }
    });

    const selectedRole = watch('role_id');
    const password = watch('password');

    useEffect(() => {
        dispatch(fetchRoles());
    }, [dispatch]);

    const onSubmit = async (data) => {
        setLoading(true);
        setError('');

        try {
            const formData = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: data.role_id
            };

            const storeRole = roles.find(role => role.code === 'store');
            if (storeRole && data.role_id === storeRole.id.toString()) {
                formData.store = {
                    name: data.store_name,
                    phone: data.store_phone,
                    tax_no: data.store_tax_no,
                    bank_account: data.store_bank_account
                };
            }

            const response = await axiosInstance.post('/signup', formData);

            dispatch(setUser({
                name: data.name,
                email: data.email,
                role_id: data.role_id
            }));

            alert('You need to click link in email to activate your account!');
            setTimeout(() => {
                navigate('/');
            }, 100);

        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                        {error}
                    </div>
                )}

                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        {...register('name', {
                            required: 'Name is required',
                            minLength: {
                                value: 3,
                                message: 'Name must be at least 3 characters'
                            }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent"
                        placeholder="John Doe"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent"
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-2">
                        Password *
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters'
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: 'Password must include uppercase, lowercase, number and special character (@$!%*?&)'
                                }
                            })}
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                    )}
                    <p className="mt-1 text-xs text-[#737373]">
                        Min 8 characters, must include: uppercase, lowercase, number, special char (@$!%*?&)
                    </p>
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-2">
                        Confirm Password *
                    </label>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            {...register('confirmPassword', {
                                required: 'Please confirm your password',
                                validate: value => value === password || 'Passwords do not match'
                            })}
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent"
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            {showConfirmPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#252B42] mb-2">
                        Role *
                    </label>
                    <select
                        {...register('role_id', { required: 'Role is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent"
                    >
                        {roles.map(role => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                    {errors.role_id && (
                        <p className="mt-1 text-sm text-red-600">{errors.role_id.message}</p>
                    )}
                </div>

                {roles.find(r => r.code === 'store')?.id.toString() === selectedRole && (
                    <div className="space-y-6 pt-4 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-[#252B42]">Store Information</h3>

                        <div>
                            <label className="block text-sm font-bold text-[#252B42] mb-2">
                                Store Name *
                            </label>
                            <input
                                type="text"
                                {...register('store_name', {
                                    required: selectedRole === roles.find(r => r.code === 'store')?.id.toString() ? 'Store name is required' : false,
                                    minLength: {
                                        value: 3,
                                        message: 'Store name must be at least 3 characters'
                                    }
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent"
                                placeholder="My Store"
                            />
                            {errors.store_name && (
                                <p className="mt-1 text-sm text-red-600">{errors.store_name.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#252B42] mb-2">
                                Store Phone *
                            </label>
                            <input
                                type="tel"
                                {...register('store_phone', {
                                    required: selectedRole === roles.find(r => r.code === 'store')?.id.toString() ? 'Phone is required' : false,
                                    pattern: {
                                        value: /^(\+90|0)?[1-9]\d{9}$/,
                                        message: 'Invalid Turkey phone number'
                                    }
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent"
                                placeholder="+905551234567"
                            />
                            {errors.store_phone && (
                                <p className="mt-1 text-sm text-red-600">{errors.store_phone.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#252B42] mb-2">
                                Store Tax ID *
                            </label>
                            <input
                                type="text"
                                {...register('store_tax_no', {
                                    required: selectedRole === roles.find(r => r.code === 'store')?.id.toString() ? 'Tax ID is required' : false,
                                    pattern: {
                                        value: /^T\d{4}V\d{6}$/,
                                        message: 'Tax ID must match pattern TXXXXVXXXXXX'
                                    }
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent"
                                placeholder="T1234V123456"
                            />
                            {errors.store_tax_no && (
                                <p className="mt-1 text-sm text-red-600">{errors.store_tax_no.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-[#252B42] mb-2">
                                Store Bank Account (IBAN) *
                            </label>
                            <input
                                type="text"
                                {...register('store_bank_account', {
                                    required: selectedRole === roles.find(r => r.code === 'store')?.id.toString() ? 'IBAN is required' : false,
                                    pattern: {
                                        value: /^TR\d{24}$/,
                                        message: 'Invalid Turkish IBAN (TR + 24 digits)'
                                    }
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent"
                                placeholder="TR330006100519786457841326"
                            />
                            {errors.store_bank_account && (
                                <p className="mt-1 text-sm text-red-600">{errors.store_bank_account.message}</p>
                            )}
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#23A6F0] text-white py-3 px-4 rounded-md font-bold hover:bg-[#1a8cd8] transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            Creating Account...
                        </>
                    ) : (
                        'Sign Up'
                    )}
                </button>

                <p className="text-center text-sm text-[#737373]">
                    Already have an account?{' '}
                    <a href="/login" className="text-[#23A6F0] font-bold hover:underline">
                        Login
                    </a>
                </p>

            </form>
        </div>
    );
}

export default SignupForm;