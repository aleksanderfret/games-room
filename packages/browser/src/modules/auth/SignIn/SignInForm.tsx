import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';

import { setIsAuthenticated } from 'context';
import { Path } from 'router';
import { setAccessToken } from 'modules/auth/token';
import { AuthControls, AuthHeader } from 'modules/auth/components';
import { useSignInMutation } from './useSignInMutation';
import { useAppDispatch } from 'hooks';
import { AsyncButton } from 'ui/Button';
import { TextField } from 'ui/TextField';
import { Form, FormData } from 'ui/Form';
import { IntroView } from 'ui/View';
import Feedback from 'ui/Feedback';

interface SignInFormData extends FormData {
  email: string | null;
  password: string | null;
}

const formValues: SignInFormData = {
  email: '',
  password: '',
};

export const SignInForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signIn, { error, loading }] = useSignInMutation({
    onCompleted: data => {
      setAccessToken(data.signIn.accessToken);
      dispatch(setIsAuthenticated(true));
      navigate(Path.Home);
    },
  });

  const { handleSubmit, control } = useForm({
    defaultValues: {
      ...formValues,
    },
  });

  const handleSignIn = handleSubmit((data: SignInFormData) => {
    const { email, password } = data;

    if (!email || !password) {
      return;
    }

    signIn({ variables: { email, password } });
  });

  return (
    <IntroView>
      <Form onSubmit={handleSignIn}>
        <AuthHeader>
          <FormattedMessage id="auth.header.sign-in" />
        </AuthHeader>
        <AuthControls>
          <TextField
            control={control}
            disabled={loading}
            label={<FormattedMessage id="email" />}
            name="email"
            type="email"
          />
          <TextField
            control={control}
            disabled={loading}
            label={<FormattedMessage id="password" />}
            name="password"
            type="password"
          />
          <AsyncButton loading={loading} type="submit">
            <FormattedMessage id="sign-in" />
          </AsyncButton>
          <div>
            <Link to={Path.ForgotPassword}>
              <FormattedMessage id="password.forgot" />
            </Link>
          </div>
          {error && (
            <Feedback message={<FormattedMessage id="error.general" />} />
          )}
        </AuthControls>
      </Form>
    </IntroView>
  );
};

export default SignInForm;
