/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { listProfiles } from "../graphql/queries";
import {
  createAvatar,
  updateAvatar,
  updateProfile,
} from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function AvatarCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    color: "",
    Profile: undefined,
  };
  const [color, setColor] = React.useState(initialValues.color);
  const [Profile, setProfile] = React.useState(initialValues.Profile);
  const [ProfileLoading, setProfileLoading] = React.useState(false);
  const [profileRecords, setProfileRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setColor(initialValues.color);
    setProfile(initialValues.Profile);
    setCurrentProfileValue(undefined);
    setCurrentProfileDisplayValue("");
    setErrors({});
  };
  const [currentProfileDisplayValue, setCurrentProfileDisplayValue] =
    React.useState("");
  const [currentProfileValue, setCurrentProfileValue] =
    React.useState(undefined);
  const ProfileRef = React.createRef();
  const getIDValue = {
    Profile: (r) => JSON.stringify({ id: r?.id }),
  };
  const ProfileIdSet = new Set(
    Array.isArray(Profile)
      ? Profile.map((r) => getIDValue.Profile?.(r))
      : getIDValue.Profile?.(Profile)
  );
  const getDisplayValue = {
    Profile: (r) => `${r?.username ? r?.username + " - " : ""}${r?.id}`,
  };
  const validations = {
    color: [],
    Profile: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchProfileRecords = async (value) => {
    setProfileLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ username: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listProfiles.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listProfiles?.items;
      var loaded = result.filter(
        (item) => !ProfileIdSet.has(getIDValue.Profile?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setProfileRecords(newOptions.slice(0, autocompleteLength));
    setProfileLoading(false);
  };
  React.useEffect(() => {
    fetchProfileRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          color,
          Profile,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            color: modelFields.color,
            avatarProfileId: modelFields?.Profile?.id,
          };
          const avatar = (
            await client.graphql({
              query: createAvatar.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createAvatar;
          const promises = [];
          const profileToLink = modelFields.Profile;
          if (profileToLink) {
            promises.push(
              client.graphql({
                query: updateProfile.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: Profile.id,
                    profileAvatarId: avatar.id,
                  },
                },
              })
            );
            const avatarToUnlink = await profileToLink.Avatar;
            if (avatarToUnlink) {
              promises.push(
                client.graphql({
                  query: updateAvatar.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: avatarToUnlink.id,
                      avatarProfileId: null,
                    },
                  },
                })
              );
            }
          }
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AvatarCreateForm")}
      {...rest}
    >
      <TextField
        label="Color"
        isRequired={false}
        isReadOnly={false}
        value={color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              color: value,
              Profile,
            };
            const result = onChange(modelFields);
            value = result?.color ?? value;
          }
          if (errors.color?.hasError) {
            runValidationTasks("color", value);
          }
          setColor(value);
        }}
        onBlur={() => runValidationTasks("color", color)}
        errorMessage={errors.color?.errorMessage}
        hasError={errors.color?.hasError}
        {...getOverrideProps(overrides, "color")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              color,
              Profile: value,
            };
            const result = onChange(modelFields);
            value = result?.Profile ?? value;
          }
          setProfile(value);
          setCurrentProfileValue(undefined);
          setCurrentProfileDisplayValue("");
        }}
        currentFieldValue={currentProfileValue}
        label={"Profile"}
        items={Profile ? [Profile] : []}
        hasError={errors?.Profile?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Profile", currentProfileValue)
        }
        errorMessage={errors?.Profile?.errorMessage}
        getBadgeText={getDisplayValue.Profile}
        setFieldValue={(model) => {
          setCurrentProfileDisplayValue(
            model ? getDisplayValue.Profile(model) : ""
          );
          setCurrentProfileValue(model);
        }}
        inputFieldRef={ProfileRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Profile"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Profile"
          value={currentProfileDisplayValue}
          options={profileRecords
            .filter((r) => !ProfileIdSet.has(getIDValue.Profile?.(r)))
            .map((r) => ({
              id: getIDValue.Profile?.(r),
              label: getDisplayValue.Profile?.(r),
            }))}
          isLoading={ProfileLoading}
          onSelect={({ id, label }) => {
            setCurrentProfileValue(
              profileRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentProfileDisplayValue(label);
            runValidationTasks("Profile", label);
          }}
          onClear={() => {
            setCurrentProfileDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchProfileRecords(value);
            if (errors.Profile?.hasError) {
              runValidationTasks("Profile", value);
            }
            setCurrentProfileDisplayValue(value);
            setCurrentProfileValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Profile", currentProfileDisplayValue)
          }
          errorMessage={errors.Profile?.errorMessage}
          hasError={errors.Profile?.hasError}
          ref={ProfileRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Profile")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
